import React from 'react';
import Slider from "react-slick";
import {Col, Row} from '@sgabskit/layout';
import Skeleton from '@sgabskit/skeleton'
import {styled} from "@sgabskit/theme";
import {CardsStyle} from "@sgabskit/w-features/src/components/styles";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Loader = () => (
  <Skeleton height={180}>
    <rect x="272" y="22" rx="0" ry="0" width="105" height="99" radius={2}/>
    <rect x="103" y="33" rx="0" ry="0" width="1" height="15"/>

    <rect x="27" y="34" rx="0" ry="0" width="108" height="12"/>


    <rect x="27" y="60" rx="0" ry="0" width="182" height="3"/>
    <rect x="27" y="70" rx="0" ry="0" width="132" height="3"/>
    <rect x="27" y="80" rx="0" ry="0" width="132" height="3"/>

    <rect x="27" y="100" rx="0" ry="0" width="40" height="12"/>
  </Skeleton>
)

export default ({loading, title, description, cta, items, ...settings}) => {
  //TODO: Eanble Skeleton and loading mode
  console.log('test', title)
  if (!items || items.length !== 3) {
    console.warn('expected: features.length.3')
    return null
  }

  const _settings = {
    centerMode: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: null,
    prevArrow: null,
    responsive: [{
      breakpoint: 625,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }],
    ...settings.settings
  };

  return (
    <>
      <div className="clearfix text-center mt-10">
        <Title className="ui-title">{title}</Title>
        <SubTitle className="ui-sub-title">{description}</SubTitle>
      </div>
      <div className="mt-50 mb-5 clearfix">
        <Row>
          <Col>
            <div className="carousel-content">
              <Slider {..._settings} >
                {items.map((item, index) => (
                  <SliderItem key={index}
                              item={item}
                  >
                  </SliderItem>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
const SliderItem = ({className, onClick, item}) => {
  return (
    <div className='slider-item__content text-center'>
      <ItemImgHolder className="item-img">
        <img src={item.img} alt=""/>
      </ItemImgHolder>
      <ItemTitle className="item-title">{item.title}</ItemTitle>
      <ItemDesc className="item-desc">{item.description}</ItemDesc>
    </div>
  );
}
const Title = styled.h4`
  line-height: 1.1;
  font-weight: 600;
  display: inline-block;
  width: '50%'
`


const SubTitle = styled.p`
  line-height: 1.2;
  display: inline-block;
  width: 80%;
  color: #9999;
`

const SliderItemContent = styled.div`
  width: 94%;
  border-radius: 5px!important;
  box-shadow: 0 10px 30px 0 rgba(153, 165, 185, 0.2)!important;
  background-color: #ffffff;
`

const ItemTitle = styled.h5`
  font-weight: 500;
  display: block;
`

const ItemImgHolder = styled.div`
  width: 60px;
  margin: auto;
  overflow: hidden;
  img {
    height: 100%;
  }
`

const ItemDesc = styled.p`
  padding: 0 20px;
  font-size: 0.9em;
`



