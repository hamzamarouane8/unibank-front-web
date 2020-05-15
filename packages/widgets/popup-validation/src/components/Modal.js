import React from 'react'
import Button from '@sgabskit/button'
import {Col, Row} from '@sgabskit/layout'
import styled from 'styled-components'
import OtpInput from 'react-otp-input'
import classnames from 'classnames';
import Modal from '@sgabskit/modal'
import isString from 'lodash.isstring';
import {Keyboard} from '@sgabskit/w-keyboard';
import {KEYBOARD_NUM} from "@bankup/web-clients/src/components/commons/Constants";

//-----------------------------------------------------------------------------

export default ({open, closeModal, handleCode, onClick, messageError, header, description, numInputs, image, actions,disable}) => {
  const [keyboardsButtonShift, setKeyboardsButtonShift] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const [value, setValue] = React.useState('');

  const assets ={
    close: require('../assets/img/close.svg')
  }
  let val ='';
  const onKeyPress = (button) => {
    if (button != '{bksp}' && value.length < 4) {
      val=value + button
      setValue(val);
    }

    if (button == '{bksp}') {
      val=value.substring(0, value.length - 1)
      setValue(val);
    }

    handleCode(val)
  }

  return (
    <ModalContainer openModal={open} closeParam={false}>
      <a href="/dashboard" className='ui-close' style={{position:'absolute',top:'6px',right:'12px', width:'18px'}}><img src={assets.close} alt="" /></a>

      <Root className={classnames('clearfix')}>
        <div className="rui-content">
          {isString(image) ? <img src={image} alt="" width={100}/> : image}
          {header && <h3>{header}</h3>}
          <p style={{fontSize:'12px'}}>{description}</p>
          <div className="row">
            <div className="col-12" style={{marginTop:'40px'}}>
              <OtpInput
                containerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                inputStyle={{
                  width: '40px',
                  height: '40px',
                  margin: '0 5px',
                  borderRadius: '4px',
                  border: '1px solid #8e8e8e'
                }}
                isDisabled={disable}
                disabledStyle={{background:'#fff'}}
                numInputs={numInputs}
                separator={<span></span>}
                value={value}
              />
              <div style={{margin:'0 auto',width: '78%',marginTop:'20px'}}>
                <Keyboard keyboardButton={keyboardsButtonShift}
                          keyboardButtonShift={keyboardsButtonShift}

                          spaceBack='⌫'
                  //onChangeTyping={onChangeTyping}
                          layout='default'
                          onKeyPress={onKeyPress}
                /></div>
              {messageError && <div> {messageError}</div>}
            </div>
          </div>
          {actions && (
            <>
              {actions.submit && <div className="mt-4 clearfix rui-actions">
                <Button size="large" primary onClick={actions.submit.onClick}>{actions.submit.text}</Button>
              </div>}
              {actions.cancel && <div className="mt-4 clearfix rui-actions">
                <a href="/dashboard">{actions.cancel.text}</a>
              </div>}
            </>
          )}
        </div>
      </Root>
    </ModalContainer>
  )
}
const Root = styled.div`
margin: auto;
width:100%;
text-align:center;
`


const ModalContainer = styled(Modal)`
&& {
    background-color: red;
}
.SimpleModal-paper-1{
    width:800px !important;
    .ui-close{
  float:right;
  .ui.button{
      background-color:transparent !important;
      padding:0px!important;
  }
}
}

.keyboard__virtual{
    margin : 0 auto;
}



`
