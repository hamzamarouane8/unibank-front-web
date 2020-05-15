import React, {useState} from 'react';
import Slider from "react-slick";
import {Row, Col} from '@sgabskit/layout';
import Button from '@sgabskit/button'
import Skeleton from '@sgabskit/skeleton'
import {styled} from '@sgabskit/theme'
import isEmpty from 'lodash.isempty'
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


function shortCut(value) {
  return value = value.slice(0, 80)
}

export default ({loading, messages}) => {

  if (!messages || isEmpty(messages)) return null
  if (loading) return <Loader/>

  const [activeIndex, setActiveIndex] = useState(0)

  const activeMessage = messages[activeIndex];

  const _settings = {
    centerMode: true,
    centerPadding: 0,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (index) => setActiveIndex(index)
  };

  return (
    <Container>
      <div className='d-none d-sm-block test' >
        <Row>
          <Col md={6}>
            <BlocInfo message={activeMessage}/>
          </Col>
          <Col md={6}>
            <div>
              <SliderContent messages={messages} settings={_settings}/>
            </div>
          </Col>

        </Row>
      </div>
      <div className='d-block d-sm-none'>
        <Row>
          <Col md={12}>
            <div>
              <SliderContent messages={messages} settings={_settings}>
                <BlocInfo message={activeMessage}/>
              </SliderContent>
            </div>
          </Col>

        </Row>
      </div>
    </Container>
  )
}

const BlocInfo = ({message}) => {
  return (
    <div className='info-bloc__content'>
      <MessageTitle className="ui-title">
        {message.title}
      </MessageTitle>
      <MessageContent className="ui-description">
        {!isEmpty(message.description) && shortCut(message.description)}
      </MessageContent>
      <div className="ui-action">
        <Button ghost>{message.action}</Button>
      </div>
    </div>
  )
}

const SliderContent = ({settings, messages, children}) => {
  return (
    <Slider {...settings}>
      {messages.map((item, index) => (
        <SliderItem key={index}>
          <SliderItemImg src={item.img ? item.img:null}>
            {children}
          </SliderItemImg>
        </SliderItem>
      ))
      }
    </Slider>
  )
}

const MessageTitle = styled.div`
    font-weight: 600;
    line-height: 1.2;
    margin-top: 40px;
    margin-bottom: 20px;
    overflow: hidden;
`

const MessageContent = styled.p`
    line-height: 1.6;
    text-align: justify;
    overflow: hidden;
`

const SliderItem = styled.div`
    height: 370px;
    overflow: hidden;
`

const SliderItemImg = styled.div`
    background-image: ${props=> props.src ? `linear-gradient(to top,
             rgba(0, 0, 0, 0.7) 0%,
             rgba(0, 0, 0, 0.4) 40%,
             rgba(0, 0, 0, 0) 100%),url(${props.src});`:``};
 
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`
const Container = styled.div`
  background: #fff !important;
`
