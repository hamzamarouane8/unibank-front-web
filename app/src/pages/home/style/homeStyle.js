import {styled} from '@sgabskit/theme';

import {Divider} from "@sgabskit/layout";

export const FeatureContainer = styled.div`
  overflow: hidden;

  .ui-title{
      width: 40%;
      color: #000000;
      font-family: Montserrat;
      font-weight:700;
      font-size: 24px;
      margin: 0 auto;
      text-align: center;
      line-height: 1.2;
      margin-top:40px;
  }
  
  .ui-sub-title {
      margin-top: 20px;
      font-family: Source Sans Pro;
      font-weight:400;
      color: #555555;
      text-align: center;
  }
  
  .item-img{
      img{
          width: 80px;
          height: 80px;
          margin-left: auto;
          margin-right: auto;
          display: block;
        }
  }
  
  .item-title{
      width:80%;
      margin: 0 auto;
      margin-top: 20px;
      color: #000000;
      font-family: Montserrat;
      font-weight:600;
      font-size: 16px;
      text-align:center;
      margin-bottom: 20px;
  }
  
  .item-desc{
      font-family: Source Sans Pro;
      font-weight:400;
      color: #555555;
      text-align: center;
      margin: 0 auto;
      width: 80%;
      font-size: 13px;
  }
  
  .ui-action{
      .ui.button{
          text-transform:uppercase;
          padding: 14px 40px;
          margin-left: auto;
          margin-right: auto;
          background: #E9041E;
          color: #fff;
          font-size: 12px;
          border-radius: 4px!important;
      }
  }
  
  .ui-divider {
      width : 10%;
      border: 3px solid #e9041e;
      margin:0 auto;
      margin-top: 60px;
  }
  
  @media(max-width: 648px) {
      .ui-title{
          text-transform:lowercase;
          width: 80%;
          font-weight: 800;
          font-size: 22px;
          margin-top:30px;
      }
  
      .ui-sub-title {
          margin-top: 16px;
          font-size: 12px;
      }
  }
`

export const DividerRed = styled(Divider)`
  margin: 0 auto!important;
  width: 80px!important;
  height: 6px!important;
  background: #E84E61!important;
  border-radius: 6px!important;
  margin-top: 20px!important;
  margin-bottom:20px!important;
`


export const CarouselContainer = styled.div`
  overflow: hidden;
  .info-bloc__content {
      margin-top: 80px; 
      margin-left: 3rem;
        
  }
  
  .ui-title{
      font-size:26px;
      font-family: Montserrat;
      font-weight:700;
      margin-top:40px;
      text-transform:lowercase;
      width:94%;
  }
  
  .ui-description{
      font-size:16px;
      font-family: Source Sans Pro;
      color: #555555;
      font-weight:400;
      width:94%;
  }
  
  .ui-action{
      .ui.button{
          padding: 15px 40px;
          margin-top:30px;
          display: block;
          margin-left: 0;
          border-radius: 10px !important;
          background: #E9041E;
          box-shadow: 0 10px 30px 0 rgba(233, 4, 30, 0.2) !important;
          color: #fff;
          font-size: 12px;
          font-family: Montserrat;
          font-weight:700;
          text-transform: uppercase;
      }
  }
  
  ${'/*-----------------------------1054px-----------------------------*/'}
  @media(max-width: 1054px) {
      
      .ui-title{
          font-size:20px;
          margin-top:40px;
          width:94%;
      }
      
      .ui-action{
          .ui.button{
              padding: 15px 40px;
              margin-bottom:0px;
              font-size: 10px;
          }
      }
   
  }
  
  ${'/*-----------------------------874px-----------------------------*/'}
  @media(max-width: 874px) {
      
      .info-bloc__content {
          margin-top: 50px;   
      }
      
      .ui-title{
          font-size:20px;
          margin-top:10px;
          text-transform : lowercase;
          width:94%;
      }
      
      .col-6{
          padding: 0 !important;
          margin: 0!important;
      }
      
      .ui-description{
          width: 94%;
          font-size: 13px;
      }
      
      .ui-action{
          .ui.button{
              padding: 10px 20px;
              margin-bottom:0px;
              font-size: 10px;
          }
      } 
  }
  
  @media(max-width: 570px) {
      position: relative;
      .info-bloc__content {
          padding-top: 150px;
          margin-top:0; 
          margin-left:0;
      }
      
      .ui-description{
          margin:5px auto;
          width:80%;
          text-align:center;
          color:#fff;
      }
      
      .ui-title{
          width: 80%;
          color: #fff;
          margin:0 auto;
          text-align:center;
      }
      
      .ui-action{
          margin-top:25px;
          width:100%;
          .ui.button{
              margin: 0 auto;
          }
      }
      
  }
`
