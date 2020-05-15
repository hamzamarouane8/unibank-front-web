import React ,{useState} from 'react';
import Modal from '@sgabskit/modal';
import styled from 'styled-components';
import {Dropdown} from 'semantic-ui-react';
import Button from '@sgabskit/button';
import isEmpty from 'lodash.isempty';

//----------------------------------------------

//TODO remove this data and place it with call api to get list of countries
const data = [
  {image: {avatar: true, src: require('../../assets/img/burkina.png')}, text: 'Burkina Faso', value: 'SN'},
  {image: {avatar: true, src: require('../../assets/img/mada.png')}, text: 'Madagascar', value: 'MD'},
]

export default ({selectCountry}) => {

  const [value ,setValue ] = useState('');

  function onClick() {
    selectCountry(value);
  }

  const handleChange = (e, { name, value }) => {
      setValue(value);
  }

  return (
      <ModalContent>
        <div className="section__countries">
          <span>Cher client veuillez choisir votre pays</span>
          <div className='countries__input'>
          <Dropdown
            onChange={handleChange}
            placeholder='Sélectionner votre pays'
            fluid
            selection
            selectOnBlur={false}
            options={data}
          />
          </div>
          <Button disabled={isEmpty(value) ? true : false} onClick={()=>onClick()}>continuer</Button>
        </div>
      </ModalContent>
  )
}

const ModalContent = styled.div`
padding:40px 40px;
background-color: ${props => props.theme.color.primary_grey2};;

.fixed-top{
  display:none!important;
}


h1 {
  text-align:center;
  font-size:20px;
  margin-bottom:20px
}  

.section__countries {
  span {
    color: ${props => props.theme.color.primary_black};
    font-weight: bold;
    font-size:12px;
  }
  display: flex;
  flex-direction:column;
}

.countries__input{
  margin-top:10px;
}

.ui.selection.dropdown {
  background-color:${props => props.theme.color.primary_grey2} !important;
  color: ${props => props.theme.color.primary_black}
}

.ui.button {
  align-self:center;
  margin-top:50px;
  ${props => props.theme.ButtonPrimary};
  width:80% !important;
}

`
