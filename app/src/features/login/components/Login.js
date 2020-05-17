import React, {useEffect, useState} from 'react';
import {withAlert} from '@sgabskit/alerts';
import Form from '@sgabskit/form';
import {Arrays} from '@sgabskit/commons';
import * as store from '@sgabskit/local-storage';
import DropdownCountries from '../../../features/country/DropdownCountries';
import {OfferCaroussel} from '../../../features/home'
import get from 'lodash.get';
import {Keyboard} from '@sgabskit/w-keyboard'
import isEmpty from 'lodash.isempty'
import {CODE_COUNTRY, KEYBOARD_CHAR, KEYBOARD_NUM} from '../../../components/commons/Constants';
import isString from "lodash.isstring";
import {Nav, NavItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import classnames from 'classnames';
import {LoginStyle} from '../styles/login';
import {footer,assets} from './outils';
import { Checkbox } from 'semantic-ui-react'

//-------------------------------------------------------------------

export default ({onLogin, reportError, router, contentService, handleError}) => {

  const [content, setContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [keyboardsButton, setKeyboardsButton] = useState([]);
  const [keyboardsButtonShift, setKeyboardsButtonShift] = useState([]);
  const [layout, setLayout] = useState('default');
  const [valuePass, setValuePass] = useState({value: '', flagChange: false});

  useEffect(() => {
    let codeCountry = store.get(CODE_COUNTRY);
    codeCountry ? load(codeCountry) : router.redirect('/countries');
  }, []);

  let loginForm = {
    username: {
      placeholder: 'Identifiant de connexion', required: 'veuillez saisir votre identifiant',
      onFocus: () => {
        setIsOpen(false);
        //onChangeVK('');
        setKeyboardsButton(Arrays.randomKeyBoards(KEYBOARD_NUM));
        setKeyboardsButtonShift(Arrays.randomKeyBoards(KEYBOARD_CHAR))
        handleError();
      }, onChange: (value) => {
        if (value === '') {
          onChangeVK('');
        }
      }
    },
    password: {
      type: 'password',
      placeholder: 'Mot de passe',
      readOnly: false,
      flagChange: valuePass.flagChange,
      required: 'veuillez saisir votre mot de passe',
      value: valuePass.value,
      manuallyValue: true,
      onChange: (val) => onFlag(val),
      onFocus: () => {

        handleError();
        setIsOpen(true);
      }
    }
  }

  const onFlag = (val) => setValuePass({...valuePass, flagChange: false});

  const onChangeVK = (input) => {
    setValuePass({...valuePass, value: input, flagChange: true});
  }

  const onSubmit = (credentials) => {
    onLogin(credentials);
    //onChangeVK('');
    setIsOpen(false);
  }

  const onKeyPress = (button) => {
    if (button != '{bksp}' && button != '{shift}') {
      setValuePass({...valuePass, value: valuePass.value + button, flagChange: true});
    }
    if (button == '{bksp}') {
      setValuePass({...valuePass, value: valuePass.value.substring(0, valuePass.value.length - 1), flagChange: true});

    }
    if (button === '{shift}') {
      setLayout(layout === 'default' ? 'shift' : 'default')
    }

  }

  const test = () => {
    setIsOpen(false);
  }

  const load = () => {
    contentService.loadBaseContent().then((data) => {
      setContent(data)
    })
  }

  return (
    <LoginStyle isOpen={isOpen}>
      <div className="container-content">
        <div className="container-content__form">
          <div className="ui-form">

            {/* Start Offer Section*/}
            {!isOpen && <OfferSlider isOpen={isOpen} content={content} className='d-md-none mt-40'/>}
            {/* End Offer Section*/}

            {/* Start Form Section*/}

            <div className='form__content' style={{}}>
              <div className="ui-title">Connexion</div>
              <div>pour acceder a l'espace client vous pouvez saisir n'importe quel login et mot de passe ;)</div>
              {!isEmpty(reportError) && <div className='form-error__content'>
                <img src={assets.warning} alt=''/> Veuillez vérifier vos identifiants et/ou pays</div>}
              <Form large onSubmit={onSubmit} fields={loginForm} onError={reportError} render={() => (
                <>
                  <Form.SimpleFields/>
                  <div className='option__action'>
                    <Checkbox label='Se souvenir de moi'/>
                    <a href='#'>Mot de passe oublier ?</a>
                  </div>
                  {isOpen && <div className='keyboard__virtual'>
                    <Keyboard keyboardButton={keyboardsButton} keyboardButtonShift={keyboardsButtonShift}
                              spaceBack='⌫' shift='⇧'
                              pages={true}
                      //onChangeTyping={onChangeTyping}
                              layout={layout}
                              onKeyPress={onKeyPress}
                    /></div>}
                  <Form.Actions>
                    <Form.Submit onClick={test} fill>Accés a mes comptes</Form.Submit>
                  </Form.Actions>
                </>
              )}/>

              <div className="mt-3 text-muted">
              </div>
            </div>
            {/* End Form Section*/}
          </div>
        </div>
        {/* Start Offer Section*/}
        <OfferSlider isOpen={isOpen} content={content} className='container-content__offers d-none d-md-block'/>
        {/* End Offer Section*/}
      </div>
    </LoginStyle>
  )
}

const OfferSlider = ({content, isOpen, className}) => (
  <div className={className}>
    <OfferCaroussel isOpen={isOpen} messages={get(content, 'pages.home.products')}/>
  </div>)


