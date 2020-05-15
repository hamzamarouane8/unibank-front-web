import React, {useEffect, useState} from 'react';
import {Divider} from "@sgabskit/layout";
import {Carousel1,Carousel3} from '@sgabskit/w-carousel';
import {Features1} from '@sgabskit/w-features';
import get from 'lodash.get';
import * as store from '@sgabskit/local-storage';
import {CODE_COUNTRY} from '../../components/commons/Constants';
import {CarouselContainer, DividerRed, FeatureContainer} from './style/homeStyle';

//------------------------------------------------------


const assets = {
  logo: require('../../assets/img/logo-societe-generale-2018.png'),
  logo_monogram: require('../../assets/img/logo_monogram.png')
}

export default ({router, contentService}) => {

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setLoading(true)
    //TODO to check with titus if there is a better way to do the handling of countries
    let codeCountry = store.get(CODE_COUNTRY);
    codeCountry ? load(codeCountry) : router.redirect('/countries');
  }, []);

  const load = () => {
    contentService.loadBaseContent().then((data) => {
      setContent(data)
      setLoading(false)
    })
  }

  return (
    <div style={{background:'#fff'}}>
        <CarouselContainer className="clearfix" style={{background: '#F6F7F8'}}>
          <Carousel1 loading={loading} messages={get(content, 'pages.home.products')}/>
        </CarouselContainer>
        <FeatureContainer>
          <div className='ui-divider'></div>

          <Carousel3 loading={loading} {...get(content, 'pages.home.features')}/>
        </FeatureContainer>
        <p>&nbsp;</p>
    </div>
  )
}
