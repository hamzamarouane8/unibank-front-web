import {styled} from "@sgabskit/theme";

export const CardStyle = styled.div`

.slick-initialized .slick-slide{
z-index: 1;
height:200px;
}

.slick-initialized button{
visibility:visible;
}
.ui.icon.button, .ui.icon.buttons .button{
background:#fff;

}

.account-ui {
    border: ${props => props.active ? '1px solid #010035': 'none'};
    box-shadow: ${props => props.active ? '0 10px 20px 0 rgba(153, 165, 185, 0.2)': '0 2px 20px rgba(0, 0, 0, 0.025)'};
    z-index: -1;
    background: ${props=>props.theme.color.primary_white};
    padding: 10px 20px;
    margin-bottom: 20px;
    margin-right:10px;
    height:130px;
    border-radius: 6px;
    .card-title{
        color:${props=>props.theme.color.primary_black};
        ${props=>props.theme.FontTheme1(500,'18px')}
        margin-bottom: 0px !important;
    }
    .icon{
        float:right;
        img,svg{
          width:20px;
          height:20px;
        }
    }
    .description{
        margin-top: 20px;
        .card-balance{
        color:${props=>props.positive ? props.theme.color.primary_black:props.theme.color.primary_color};
            ${props=>props.theme.FontTheme1(700,'23px')}
        }
        
        p{
            color:${props=>props.theme.color.primary_orange};
            ${props=>props.theme.FontTheme2(400,'14px')}
            float:right;
            padding-top:6px;
        }
    }
    .card-title.sub{
        color:${props=>props.theme.color.primary_grey};
        ${props=>props.theme.FontTheme2(400,'14px')}
    } 
}

@media (max-width: 768px) {
  .account-ui {
    padding: 10px;
    margin-bottom: 20px;
    margin-right:10px;
    height:140px;
    border-radius: 6px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
    .card-title{
      font-size:13px;
      font-weight:600;
      margin-bottom:5px;
    }
    .icon{
      float:right;
      img,svg{
        width:20px;
        height:20px;
      } 
    }
    .description{
      .card-balance{
          ${props=>props.theme.FontTheme1(700,'19px')}
          color:${props=>props.positive ? props.theme.color.primary_black:props.theme.color.primary_color};
      }
      p{
          ${props=>props.theme.FontTheme2(400,'12px')}
      }
    }
    .card-title.sub{
      font-size:11px;
    } 
  }
}

@media (max-width: 425px) {
  .account-ui {
    padding: 10px;
    margin-bottom: 20px;
    margin-right:10px;
    height:120px;
    .card-title{
      font-size:14px;
      font-weight:600;
      margin-bottom:5px;
    }
    .icon{
      float:right;
      img,svg{
        width:20px;
        height:20px;
      } 
    }
    .description{
      margin-top:10px;
      .card-balance{
        font-size:12px;
      }
      .card-income{
        font-size:10px;
      }
    }
    .card-title.sub{
      font-size:12px;
    } 
  }
}
`

