import styled from 'styled-components'

export const GeoLocStyle = styled.div`
.no-gutter > [class*='col-'] {
    padding-right:0;
    padding-left:0;
}
  .navbar-light .navbar-nav .nav-link{
    margin-bottom:20px;
    }
    .ui-focus.login{
    .ui.icon.button, .ui.icon.buttons .button{
          padding:14px 20px 14px 20px;
          cursor: pointer;
          font-size:0.9em;
          vertical-align: middle;
          background: #e9041e;
          color:#fff;
          font-weight: bold!important;
           &:hover {
          box-shadow: 0 2px 10px 0 rgba(233, 4, 30, 0.2);
          }
    }
    }
    
    .ui-focus.signup{
    .ui.icon.button, .ui.icon.buttons .button{
          padding:14px 20px 14px 20px;
          cursor: pointer;
          font-size:0.9em;
          vertical-align: middle;
          border: 1px solid #010035;
          background: #fff;
          color:#010035;
          font-weight: bold!important;
          &:hover {
              background: #000;
              color: #FFF;
              border: 1px solid #000;
          }
    }
    }
  .navbar {
    background: #FFF;
    padding: 12px 60px 12px 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    z-index: 100;
  }
.ui.search .prompt{
     border-radius:5px!important;
}
 .ui.active.modal{
     margin-top: 0;
     margin-bottom:50px;
     height:300px!important;
}
 ** .gmnoprint{
     .gm-style{
         visibility:hidden;
    }
}
 .gmnoprint{
     visibility:hidden!important;
}
 .slick-dots{
     visibility:hidden;
}
 .slick-track{
}
 .slick-list{
     padding:0px 0px!important;
}
 .ui.map-search{
     position:absolute;
     top:0;
     right:0;
     margin-right:80px ;
     margin-top:20px;
     .ui.input{
         width:240px;
    }
}
 .ui.map-filtre{
     position:absolute;
     top:0;
     margin:20px;
     .ui.button.active{
         color: #FFF!important;
         box-shadow: 0 10px 20px 0 rgba(221, 4, 28, 0.2)!important;
         background-color: #e9041e!important;
     }
     .ui.button{
         margin-right:10px;
         width:100px;
         border-radius: 5px;
         box-shadow: 0 10px 30px 0 rgba(155, 171, 185, 0.3);
         background-color: #ffffff;
         font-weight: bold;
         line-height: 1.29;
         letter-spacing: 0px;
         text-align: center;
         color: #6d6d80;
         font-size:16px;
      }
 }
  @media (max-width: 425px) {
     .layout-main{
         height :90vh;
    }
     .mt-5, .my-5{
         margin-top:0px!important;
    }
     .ui-slider{
         width :90%;
         margin-left:10px!important;
         height:500;
         position:absolute;
         left:0;
         right:0;
         bottom:0;
         color: white;
    }
    .ui.map-filtre{
        z-index: 1;
       left:23%;
       margin:20px;
       .ui.button.active{
           color: #FFF!important;
           box-shadow: 0 10px 20px 0 rgba(221, 4, 28, 0.2)!important;
           background-color: #e9041e!important;
       }
       .ui.button{
           margin-right:10px;
           padding:10px 10px;
           border-radius: 5px;
           box-shadow: 0 10px 30px 0 rgba(155, 171, 185, 0.3);
           background-color: #ffffff;
           font-weight: bold;
           line-height: 1.29;
           letter-spacing: 0px;
           text-align: center;
           color: #6d6d80;
           font-size:16px;
       }
  }
     .slick-slider svg{
         display: block;
         border-radius: 30px;
         width: 30px;
         height: 30px;
         box-shadow: 0 10px 30px 0 rgba(19, 16, 93, 0.3);
         background-color: #13105d;
         padding:10px;
         fill:#fff;
    }
     .slick-prev:before, .slick-next:before {
         display: none;
    }
     .slick-prev{
         z-index: 1;
    }
     .css-14iwvo3 .layout-main{
         width:100%;
    }
     .ui.search{
 margin-top:60px;
 margin-left:0px!important;
}
.ui.map-search .ui.input{
width:340px;
}
.ui.search > .results{
width: 340px;
}
}
 @media (max-width: 768px) {
     .layout-main{
         height :90vh;
    }
     .mt-5, .my-5{
         margin-top:0px!important;
    }
     .ui-slider{
         width :90%;
         margin:0 auto;
         height:500;
         position:absolute;
         left:0;
         right:0;
         bottom:0;
         color: white;
    }
     .slick-slider svg{
         display: block;
         border-radius: 30px;
         width: 30px;
         height: 30px;
         box-shadow: 0 10px 30px 0 rgba(19, 16, 93, 0.3);
         background-color: #13105d;
         padding:10px;
         fill:#fff;
    }
     .slick-prev:before, .slick-next:before {
         display: none;
    }
     .slick-prev{
         z-index: 1;
    }
     .css-14iwvo3 .layout-main{
         width:100%;
    }
}
 @media (max-width: 1024px) {
     .layout-main{
         height :90vh;
    }
     .mt-5, .my-5{
         margin-top:0px!important;
    }
     .ui-slider{
         width :90%;
         margin:0 auto;
         height:500;
         margin-bottom:20px;
         position:absolute;
         left:0;
         right:0;
         bottom:0;
         color: white;
    }
    
     .slick-slider svg{
         display: block;
         border-radius: 30px;
         width: 40px;
         height: 40px;
         box-shadow: 0 10px 30px 0 rgba(19, 16, 93, 0.3);
         background-color: #13105d;
         padding:10px;
         fill:#fff;
    }
     .slick-prev:before, .slick-next:before {
         display: none;
    }
     .slick-prev{
         z-index: 1;
    }
    .layout-main{
         width:100%;
    }
}
 @media (max-width: 1440px) {
     .layout-main{
         height :90vh;
      }
     .mt-5, .my-5{
         margin-top:0px!important;
      }
     .ui-slider{
         width :90%;
         margin:0 auto;
         height:500;
         position:absolute;
         left:0;
         right:0;
         bottom:0;
         color: white;
      }
     .slick-slider svg{
         display: block;
         border-radius: 30px;
         width: 55px;
         height: 55px;
         box-shadow: 0 10px 30px 0 rgba(19, 16, 93, 0.3);
         background-color: #13105d;
         padding:14px;
         fill:#fff;
      }
     .slick-prev:before, .slick-next:before {
         display: none;
      }
     .slick-prev{
         z-index: 1;
      }
     .layout-main{
         width:100%;
     }
}
 .ui.search{
     margin-left :200px;
  }
`
