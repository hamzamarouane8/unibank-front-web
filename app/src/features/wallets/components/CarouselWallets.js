import React from "react";
import Slider from "react-slick";
import {Col, Row} from "reactstrap";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classnames from 'classnames';
import {styled} from '@sgabskit/theme'
export default ({data, activeId, handleChangeAccount, ...settings}) => {
  const _settings = {
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    ...settings
  };
  return (
    <>
      <Row>
        <Col>
          <div className="widget-title">
            Mes Wallets
          </div>
          <div className="carousel-content">
            <Slider {..._settings}>
              {(data||[]).map((item, index) => (
                <SliderItem key={index}
                            item={item}
                            onClick={() => handleChangeAccount(item)}/>

              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </>)
}

const SliderItem = ({className, onClick, item}) => {
  console.log('item',item)
  return (
    <ItemContent className={classnames('clearfix', className)} onClick={onClick}>
      <h4>{item.title}</h4>
      <span>{item.solde}</span>
    </ItemContent>
  );
}

const ItemContent = styled.div`
  z-index: -1;
  background: #FFF;
  padding: 20px;
  margin-bottom: 20px;
  margin-right:10px;
  height:160px;
  border-radius: 6px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
`
