import React, {useEffect, useState} from 'react';
import ModalCountry from "../../features/country/ModalCountry";
import * as store from "@sgabskit/local-storage";
import {styled} from '@sgabskit/theme';
import {CODE_COUNTRY} from '../../components/commons/Constants';

//---------------------------------------------------------
const assets = {
  logo: require('../../assets/img/logo-societe-generale-2018.png')
}
export default ({router}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let codeCountry = store.get(CODE_COUNTRY);
    if (codeCountry) {
      router.redirect('/home');
    } else {
      //TODO api call goes here
    }
  }, []);

  function selectCountry(codeCountry) {
    store.set(CODE_COUNTRY, codeCountry);
    router.redirect('/home');
  }

  return (
    <Container>
      <div className='countries__content'>
      <div className='logo'>
        <img src={assets.logo} alt=''/>
      </div>
      <div className='section__content'>
        <ModalCountry selectCountry={selectCountry}/>
      </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
width: 80%;
margin: 0 auto;

.countries__content {
    display: flex;
    flex-direction:column;
    align-items:center;
}

.section__content {
    background-color:#fafafa;
    width: 35%;
    min-width: 400px;
    box-shadow: 0 3px 20px 0 rgba(105, 112, 123, 0.2);
}

.logo{
    img{
        width: 100%;
    }
    margin-top:5%;
    margin-bottom:80px;
}

@media(max-width: 770px){
.logo{
    img{
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    margin-top:10%;
    margin-bottom:60px;
}
}

@media(max-width: 416px){
margin: 20px 20px;

.section__content {
     min-width: 280px!important;
}
}
`
