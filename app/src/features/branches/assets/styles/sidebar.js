import {styled} from "@sgabskit/theme";
import {Input, Menu} from "semantic-ui-react";
import Button from '@sgabskit/button'

export const SidebarButton = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  display: block;
  position: absolute;
  z-index: 10;
  background:#fff;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  top: 30px;
  left: ${props=>props.className === 'layout-sidebar-toggle collapsed' ?'0':'320px'};
  
  .ui.button{
    background:#fff!important;
    padding: 0!important;
    height:60px;
    width:14px;
  }

  .collapsed-mode {
    transform: scaleX(-1);
  }
  
@media screen and (max-width: 425px) {  
  z-index: 10;
  left: ${props=>props.className === 'layout-sidebar-toggle collapsed' ?'11px':'93%'};
  transform: ${props=>props.className === 'layout-sidebar-toggle collapsed' ? 'translateX(-50%)':'none'};
}
`

export const Item = styled(Menu.Item)`
  width:100%!important;
  float:left;
  margin:0px 20px; 
  .img{
    img{
      width:40px;
    }
  }
  .branch-item{
    width:96%;
  }
  
  .adress-content {
      float:left;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-wrap: wrap;
      width: 100%;
      .item-content{
          margin-left: 4px;
          margin-right: 4px;
          vertical-align: middle;
      }
      
      .img {
          width: 15%;
      }
      
      .details {
          width: 15%;
          p{
              font-size:11px;
          }
      }
      
      .text {
          width: 60%;
      }
  }
  
    .irtLmJ h5{
        text-transform: lowercase!important;
        ${props=>props.theme.FontTheme1(600,'16px')}
        color: ${props=>props.theme.color.primary_black};
        margin-bottom: 0px !important;
        padding: 0px !important;
    }
    .irtLmJ p{
        text-transform: lowercase!important;
        ${props=>props.theme.FontTheme2(600,'12px')}
        color:${props=>props.theme.color.primary_grey};
    }
`
export const Search = styled(Input)`
  margin-bottom:30px;
  border: 6px;

`
export const
  SidebarStyle = styled.div`
position:relative;
${'/*---------------- Container sidebar --------------------*/'}
    
    .layout-sidebar-visible {
        position: absolute;
        top: 0px;
        bottom: 0;
        z-index:10;
        height: calc(100vh - 70px);
        min-height:200px;
        width :320px;
        max-width:320px;
        animation : go-left-right .4s;
        box-shadow: 5px 0 5px 0 rgba(0, 0, 0, 0.05);
        background-color: #fff;
    }
    
    .layout-sidebar-collapsed{
        animation : go-right-left .4s!important;
        display:none!important;
    }
    
${'/*---------------- List of item inside vertical menu --------------------*/'}
.ui.secondary.vertical.pointing.menu .item {
    padding-left:0;
    padding-right:0;
    
}

.ui.secondary.vertical.pointing.menu{
    width:100%!important;
    height:100%;
   overflow: auto!important;
   max-height: 400px!important;
    ul li  {
            position: relative;
            margin-bottom: 38px;
            .img {
                width: 43px;
                height: 43px;
                display: inline;
                padding-top: 8px;
                margin-bottom: 2px;
            
            span {
                margin-left:10px;
                font-size: 13px;
                color: #8e8e8e;
                font-weight: 600;
            }
            
            img,svg {
                width: 25px;
                height: 25px;
                fill: #8e8e8e;
            }        
        }
        
        .active .img { 
        
            span{
                font-size:16px;   
                color: #e9041e;
            } 
        
            svg {
                fill: #e9041e;
            }
        }
    }
}

.ui-filtre{
    margin-top:40px;
    margin-bottom:10px;
    text-align:center;
}

.kBRkIV .ui.secondary.vertical.pointing.menu {
height: 500px;
}


  
${'/*--------------------------- Responsive section ------------------------------*/'}

@media screen and (max-width: 425px) {  

    .layout-sidebar-visible {
         width :93%;
          max-width:100%;
    }
  
  .ui-filtre {
    margin: 20px auto;
    width: 80%;
  }
  .ui.secondary.vertical.pointing.menu{
   max-height: 64%!important;

}
}

${'/*--------------------------- Animation section ------------------------------*/'}
@keyframes go-left-right{
    from{
    opacity:0;
    transform:translateX(-200px);
    }
    
    to{
    opacity:1;
      transform:translateX(0);
    }
}

@keyframes go-right-left{

  from{
  opacity:1;
    transform:translateX(0);
  }
  
  to{
  opacity:0;
  transform:translateX(-200px);
  }
}
`

export const ButtonFilter = styled(Button)`
    cursor:pointer !important;
    margin-left: 4px !important;
    margin-right: 4px !important;
    width: 120px;
    ${props=>props.theme.FontTheme1(600,'12px','!important')};
    color: ${props => props.active ? `${props.theme.color.primary_white }!important` : `${props.theme.color.primary_grey1 }!important`};
    background-color: ${props => props.active ? `${props.theme.color.primary_grey1 }!important` : `${props.theme.color.primary_white }!important`};
    border-radius:30px!important;
    border:${props => props.active ? "0!important" : `1px solid ${props.theme.color.primary_grey1 }!important`};
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16) !important;
${'/*--------------------------- Responsive section ------------------------------*/'}

    @media screen and (max-width: 425px) {  
        width: 100px;
        ${props=>props.theme.FontTheme1(600,'10px','!important')};
    
    }

`
