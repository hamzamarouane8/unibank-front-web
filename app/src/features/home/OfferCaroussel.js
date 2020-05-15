import React from 'react';
import Slider from "react-slick";
import {styled} from '@sgabskit/theme';
import get from 'lodash.get';
import isEmpty from 'lodash.isempty';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '@sgabskit/button';
//---------------------------------------------

const assets = {
  main_first: "https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}
export default ({messages,isOpen}) => {
  if (!messages || isEmpty(messages)) return null

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Caroussel>
      <Slider {...settings}>
        {(messages || []).map((item, index) => (
          <CarousselItem key={index} img={item.img} className="marketing-bloc__info" isOpen={isOpen}>
            <div className="marketing-bloc">
              <h1 className="marketing-bloc__title">{item.title}</h1>
              <p className="marketing-bloc__description">{item.description}</p>
              <div className='marketing-bloc__action'>
                <Button ghost>{item.action}</Button>
              </div>
            </div>

          </CarousselItem>
        ))}
      </Slider>
    </Caroussel>)
}

const CarousselItem = styled.div`
background-image: linear-gradient(to top,
             rgba(0, 0, 0, 0.7) 0%,
             rgba(0, 0, 0, 0.4) 40%,
             rgba(0, 0, 0, 0) 100%),url(${props=>props.img});
background-repeat: no-repeat;
background-size: cover;
background-position:center;
height:600px;
position:relative;

.marketing-bloc {
    position:absolute;
    bottom:20%;
    margin :0 60px;
    width:80%;
    display: flex;
    flex-direction:column;
    
    &__title {
        line-height: 1.18;
        color:${props=>props.theme.color.primary_white};
        ${props=>props.theme.FontTheme1(800,'30px')}
        position:relative;
    }
    
    &__title:after {
        content:"";
        position:absolute;
        top:-20px;
        left:0;
        width:20%;
        border-top:4px solid ${props=>props.theme.color.primary_white};
    }
    
    &__description {
        margin-top: 20px;
        color:${props=>props.theme.color.primary_white};
        ${props=>props.theme.FontTheme2(400,'18px')}
        line-height: 1.5;
    }
    
    &__action {
        .dllbek.ui.button {
            position:absolute;
            bottom:-94px;
            right:0;
            border-radius: 8px!important;
            border: 1px solid ${props=>props.theme.color.primary_white} !important;
            background: transparent !important;
            color:${props=>props.theme.color.primary_white};
            ${props=>props.theme.FontTheme1(600,'12px')}
            text-transform: uppercase;
        }
    }
}


`
const Caroussel = styled.div`
height:100%;

    .slick-dots {
        bottom: 60px !important;
        left:40px;
        width: 100px;
    }
    
    .slick-dots li button:before {
        content: '';
        width: 10px;
        height: 10px;
        border: 5px solid ${props=>props.theme.color.primary_white};
        border-radius: 10px;
    }

${'/*---------------------- Start Responsive Section ------------------------*/'}

  @media (max-width: 900px){
  
      .slick-dots {
          bottom: -35px !important;
          left:40% !important;
      }
      
      .slick-dots li button:before {
          content: '';
          width: 8px;
          height: 8px;
          border: 5px solid #333333;
          border-radius: 10px;
      }
  }
${'/*---------------------- End ------------------------*/'}

`
