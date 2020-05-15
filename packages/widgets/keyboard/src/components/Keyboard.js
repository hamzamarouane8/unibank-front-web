import React, {useEffect, useState} from 'react'
import {styled} from '@sgabskit/theme'
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";
//------------------------------------------------

export default ({spaceBack, shift, onChangeTyping, keyboardButton, keyboardButtonShift, layout, onKeyPress, pages}) => {


  let SecondPage = [`${keyboardButtonShift[0]} ${keyboardButtonShift[1]} ${keyboardButtonShift[2]}`,
      `${keyboardButtonShift[3]} ${keyboardButtonShift[4]} ${keyboardButtonShift[5]}`,
      `${keyboardButtonShift[9]} ${keyboardButtonShift[7]} ${keyboardButtonShift[6]}`,
      `${pages ? '{shift}' : ''} ${keyboardButtonShift[8]} {bksp}`
    ]


  let FirstPage = [`${keyboardButton[0]} ${keyboardButton[1]} ${keyboardButton[2]}`,
      `${keyboardButton[3]} ${keyboardButton[4]} ${keyboardButton[5]}`,
      `${keyboardButton[9]} ${keyboardButton[7]} ${keyboardButton[6]}`,
      `${pages ? '{shift}' : ''} ${keyboardButton[8]} {bksp}`
    ]

  let sharedProps = {
    display: {'{bksp}': spaceBack, '{shift}': shift},
    layoutName: layout,
    layout: {'default':FirstPage,'shift':SecondPage},
    //onChange: input => onChangeTyping(input),

    onKeyPress: button => onKeyPress(button)

  };
  return (

    <KeyboardStyle><Keyboard
      {...sharedProps}
    /></KeyboardStyle>
  )
}

const KeyboardStyle = styled.div`

.simple-keyboard{
 width: auto !important;
    min-width: 0 !important;
}
.simple-keyboard.hg-theme-default {
  background-color:transparent !important;
}
.simple-keyboard.hg-theme-default .hg-button{
  border-radius: 60px !important;
  font-weight: bold;
  font-size: 16px;
  width : 40px !important;
  height: 40px !important;
  margin-left: 30px;
  margin-bottom: 10px
  color: #555555 !important;
  background-color : #efefef !important;
  box-shadow: none !important;
  border-bottom :none !important;
}
.simple-keyboard .hg-button{
  flex-grow: 0!important;
}
`
