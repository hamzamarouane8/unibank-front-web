import React, {useState} from 'react';
import Slider from "react-slick";
import {Row, Col} from '@sgabskit/layout';
import Skeleton from '@sgabskit/skeleton'
import isEmpty from 'lodash.isempty'
import {styled} from "@sgabskit/theme";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
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

export default ({items, children,activeId, handleSelectMarker, slideToIndex,loading, ...settings }) => {
  if (!items || isEmpty(items)) return null
  if (loading) return <Loader />
  const _settings = {
    centerMode: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    //nextArrow: <div className="img" style={{width:'30px'}}><img src={assets.arrowLeft} alt="" /></div>,
    //prevArrow: <div className="img"><img src={assets.arrowRight} alt="" /></div>,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 2,
        nextArrow:null,
        prevArrow:null
      }},{
      breakpoint: 425,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        nextArrow:null,
        prevArrow:null
      }}],
    ...settings.settings
  };


  const handleMarkerDetails = (item) => {
    handleSelectMarker(item)
  }

  return (
      <Row>
        <Col>
          <div className="carousel-content">
            <Slider {..._settings} >
              {(items|| []).map((item, index) => (
                <SliderItem key={index}
                            item={item}
                            onClick={() => handleMarkerDetails(item)}
                >
                </SliderItem>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    )
}
const SliderItem = ({className, onClick, item, title, descr}) => {
  return (
    <>
      <>
        <SliderItemContent>
          <CardActionArea onClick={onClick}>
            <CardContent>
              <SliderItemIcon></SliderItemIcon>
              <div className="card-content">
                <SliderItemTitle>{item.title}</SliderItemTitle>
                {item.descr && <SliderItemTitle>{item.descr}</SliderItemTitle>}

              </div>
            </CardContent>
          </CardActionArea>
        </SliderItemContent>
      </>
    </>
  );
}

const SliderItemContent = styled(Card)`
  width: 94%;
  border-radius: 5px!important;
  box-shadow: 0 10px 30px 0 rgba(153, 165, 185, 0.2)!important;
  background-color: #ffffff;
`

const SliderItemDescr = styled.div`
 width: 80%;
  opacity: 0.7;
  font-size:13px;
  margin-left: 50px;
  line-height: 1.5;
  text-align: left;
  color: #010035;
`


const SliderItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.14;
  margin-left: 50px;
  letter-spacing: 0.1px;
  text-align: left;
  color: #010035;
`


const SliderItemIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 25%;
`
