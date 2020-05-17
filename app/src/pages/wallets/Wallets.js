import React, {useState} from 'react';
import {Modal} from '@sgabskit/w-modal-validation'
import {Col, Row} from '@sgabskit/layout'
import Button from '@sgabskit/button'
import ReactCodeInput from 'react-code-input'
import {styled} from '@sgabskit/theme'
import {TableOperations} from '../../features/wallets';
import isEmpty from 'lodash.isempty';
import ErrorState from '../../features/error/ErrorState';
import Loader from "../../components/Loader";

//-------------------------------------------------------------------------

const PIN_LENGTH = 4

export default ({walletService}) => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [contentWallet, setContentWallet] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [messageError, setMessageError] = useState(false); // Error code pin
  const [error, setError] = useState(false); // Error API call


  const checkCodePin = (code) => {
    let isnum = /^\d+$/.test(code);
    let checker = true
    if (isnum) {
      if (code.length === PIN_LENGTH) {
        setMessageError(false)
        checker = false
      }
    } else {
      setMessageError(true)
      checker = true
    }
    setMessageError(checker)
    activateCodePin(code, checker);
  }

  const closeModal = () => setOpen(false)

  const activateCodePin = (code, checker) => {
    if (!checker) {
      setConfirm(true);
      setOpen(false);
      load(code);
    }
  }

  const load = (code) => {
    walletService.loadWillets(code).then((data) => {
      setContentWallet(data);
    }).catch((error) => {
      setError(true);
    })

    walletService.loadTransactions(code).then((data) => {
      setTransactions(data);
      setLoading(false)
    }).catch((error) => {
      console.log('heeee',error)
      setError(true);
    })
  }

  return (

    <ErrorState status={error}>

      {!confirm ?
        (<Modal open={open}
                close={() => closeModal()}
                closeParam={false}
                messageError={messageError}
                handleCode={checkCodePin}
                disable={true}
                header="Veuillez saisir votre code PIN Wallet"
                description="Vous pouvez utiliser votre application en toute sécurité"
        />) :
        (<>{
          loading ? (<div style={{marginTop: '100px'}}><Loader active inline='centered'/></div>) : (<div>
            {contentWallet && <Wallet content={contentWallet}/>}
            {
              !isEmpty(transactions) && <TableOperations data={transactions}/>
            }
          </div>)
        }</>)
      }
    </ErrorState>
  )
}

/**
 * Component represent section of wallet with all the information
 * @param content
 * @returns {*}
 * @constructor
 */

const Wallet = ({content}) => {
  //TODO see with ahmed title of this section  & there is a problem in return of api wallets currency must return string and not number
  return (
    <WalletContainer>
      <div className="widget-title">
        Mes Wallets
      </div>
      <div className="widget-content">
        <div className="ui-title">{content.clientName}</div>
        <div className="ui-balance">{content.balance} {content.currency}</div>
      </div>
    </WalletContainer>
  )
}

/**
 * Component represent  the content of modal
 * @param checkerCodePin
 * @param onClick
 * @param messageError
 * @returns {*}
 * @constructor
 */

const Content = ({checkCodePin, onClick, messageError}) => {
  return (<Container>
    <div className="row">
      <div className="col-12">
        <div>Veuillez saisir votre code PIN Wallet</div>
        <div>Vous pouvez utiliser votre application en toute sécurité</div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        {<ReactCodeInput
          fields={PIN_LENGTH}
          defaultInputStyle={{
            width: '2.6rem',
            height: '2.6rem',
            margin: '3px',
            fontSize: '1.6rem',
            borderRadius: 4,
            isInputNum: true,
            border: '1px solid rgba(0,0,0,0.3)'
          }}
          onChange={code => checkCodePin(code)}
        />}
        {messageError &&
        <div style={{color: '#e9041e', fontSize: '14px'}}>veuillez saisir uniquement des chiffres.</div>}
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Button primary
                disabled={false}
        >continuer</Button>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div><a href="">Annuler</a></div>
      </div>
    </div>
  </Container>)
}

const Container = styled.div`
    margin: auto;
    width:100%;
    text-align:center;
`

const WalletContainer = styled.div`

    .widget-title{
        margin-bottom:16px;
        ${props=>props.theme.FontTheme1(600,'18px')}
        color:${props=>props.theme.color.primary_black};
    }
    
    .widget-content{
        width:30%;
        padding: 20px;
        margin-bottom: 20px;
        margin-right:10px;
        box-shadow: 0 10px 20px 0 rgba(153, 165, 185, 0.2);
        ${props=>props.theme.BorderTheme('1px',props.theme.color.primary_black,'5px')}
        background-color: ${props=>props.theme.color.primary_white};
        
        .ui-title{
            color:${props=>props.theme.color.primary_grey1};
            ${props=>props.theme.FontTheme1(500,'18px')}
            margin-bottom:5px;
        }
        
        .ui-balance{
            ${props=>props.theme.FontTheme1(700,'30px')}
            color:${props=>props.theme.color.primary_black};
        }
    }

${'/*------------------- Start Responsive Design --------------------------*/'}

    @media(max-width:500px){
        .widget-content{
            width: 100% !important;
        }
    }

${'/*------------------- End --------------------------*/'}

`
