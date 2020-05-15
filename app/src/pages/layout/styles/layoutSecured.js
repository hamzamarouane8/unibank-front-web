import styled from "styled-components";

export const LayoutGuestStyle = styled.div`
.layout-main {  
  margin-left:${props=>props.option ?`${props.option.ml}px`:'240px'};
  width: ${props=>props.option ? `${props.option.w}%`:'none'};
  margin-top:${props => props.option ? `${props.option.mt}px`:'30px'} ;
  padding: ${props => props.option ? `${props.option.p}px`:'20px 20px'};
}
.sg-logout{
  img{
    width:20px;
  }
}
.sg-navItem{
  text-transform: uppercase;
  font-size:14px;
}
.navbar-start{
  margin-left:80px;
}

.nav-item{
  margin-left:20px;
  .sg-notification{
    img{
      margin-right:6px;
      width:16px; 
    }
  }
  .sg-logout{
    img{
      width:16px;
    }
  }
}
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

@media (max-width: 921px) {

  .navbar-brand{
      animation : go-left-right .4s;
  } 
  
  .layout-main {  
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      margin-top: 30px;
  }
}
@media (max-width: 768px) {

    .navbar-brand{
        animation : go-left-right .4s;
    } 
  
    .layout-main {  
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        margin-top: 30px;
    }
}

@media (max-width: 425px) {

    .layout-main {  
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        margin-top: 0px;
    }
}

@media (max-width: 768px){
    .navbar-expand-md .navbar-collapse {
        display: flex !important;
        flex-basis: auto!important;
    }
}

`
