import React from 'react'
import Button from '@sgabskit/button'
import {Col, Row} from '@sgabskit/layout'
import {styled} from '@sgabskit/theme'
import ReactCodeInput from 'react-code-input'

//-----------------------------------------------------------------------------

export default ({checkCodePin, onClick, messageError}) => {

  return (<Container>
    <div className="row">
      <div className="col-12">
        <div>Activer votre virement</div>
        <div>Entrez votre code d'activation a six chiffres</div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        {<ReactCodeInput
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
          numInputs={6}
        />}
        {messageError && <div>veuillez saisir uniquement des chiffres.</div>}
        <div>nous avons envoyé un sms incluant le code d'activation a+2126312</div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Button primary
                disabled={false}
                onClick={() => onClick()}>Valider</Button>
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
