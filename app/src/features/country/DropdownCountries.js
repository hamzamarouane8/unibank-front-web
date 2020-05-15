import React, {useState, useEffect} from 'react';
import {Dropdown} from 'semantic-ui-react';
import {styled} from '@sgabskit/theme';
import * as store from '@sgabskit/local-storage';
import {CODE_COUNTRY} from "../../components/commons/Constants";
import isEmpty from 'lodash.isempty'
const CountryBloc = ({src, text}) => (<div className='bloc__country'><img src={src} alt=''/><p>{text}</p></div>)

//TODO remove list static when ahmed finish the api

const data = [
  {
    key: 1,
    text: <CountryBloc src={require('../../assets/img/burkina.png')} text='BFA'/>,
    value: 'SN',
    content: <CountryBloc src={require('../../assets/img/burkina.png')} text='BFA'/>
  },
  {
    key: 2,
    text: <CountryBloc src={require('../../assets/img/mada.png')} text='MD'/>,
    value: 'MD',
    content: <CountryBloc src={require('../../assets/img/mada.png')} text='MD'/>
  },,{
    key: 3,
    text: <CountryBloc src={require('../../assets/img/exchange/senegal.svg')} text='SN'/>,
    value: 'SN',
    content: <CountryBloc src={require('../../assets/img/exchange/senegal.svg')} text='SN'/>
  }
]

export default ({}) => {
  const [listCountries, setListCountries] = useState(data);

  const [selectedCountry, setSelectedCountry] = useState(() => getIndexSelectedCountry());

  function getIndexSelectedCountry() {
    let codeCountry = store.get(CODE_COUNTRY);
    //setListCountries(listCountries.filter((elt) => elt.value !== codeCountry))

    let val = null;
    let selectedValue = data.map((item, index) => {
      if(item.value === codeCountry){
        val =   index ;
      }
    })
    return val ;
  }

  const handleChange = (e, {name, value}) => {
    store.set(CODE_COUNTRY, value);
    //setListCountries(listCountries.filter((elt) => elt.value !== value))
    window.location.reload();
  }
  return (
    <div className='countries__input'>
      {(selectedCountry===0 || selectedCountry) && <Dropdown
        onChange={handleChange}
        placeholder='Sélectionner votre payer'
        selection
        fluid
        defaultValue={listCountries[selectedCountry].value}
        options={listCountries}
      />}
    </div>
  )
}
