import styled from "styled-components";

export const CarouselStyle = styled.div`
  overflow: hidden;

.ui.pointing.dropdown>.menu:after{
width:11px;
height:11px;
top:-0.33em;
}
.ui.pointing.active.dropdown .menu{
z-index: 5;
margin-left: -114px!important;
    padding: 8px 10px!important;
    
   
}
.ui.dropdown .menu > .item{
font-size:12px;
padding-left:4px!important;
padding-top:8px!important;:
padding-bottom:4px!important;
color:#6D6D80;
&:hover, &:active, &:focus{
        color:#010035;
        font-weight:700;
        background:none!important;
      } 
}
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

`
