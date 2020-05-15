import styled from "styled-components";

export const SidebarStyle = styled.div`

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


.layout-sidebar {
    box-shadow: 0px -1px 13px -5px rgba(0,0,0,0.62);
    z-index: 20;
    animation : go-left-right .4s;
    display:inline;
    background: #fff;
    ul li  {
      position: relative;
      margin-bottom: 30px;
      margin-left: 3rem;
      .img {
        width: 45px;
        height: 45px;
        display: inline;
        padding-top: 8px;
        margin-bottom: 2px;
            span {
                ${props=>props.theme.FontTheme1(500,'13px')}
                margin-left:10px;
                color:${props=>props.theme.color.primary_grey1};
            }
            img,svg {
              width: 22px;
              fill: ${props=>props.theme.color.primary_grey1};
            }        
      }
       
      .active .img {   
        span{
            font-size:14px;   
            color: #e9041e;
        } 
        svg {
          fill: #e9041e;
        }
      }
    }
    padding: 90px 0px ;
    text-align: left;
    position: fixed;
    top: 0px;
    left: 0;
    width: 240px;
    bottom: 0;
  }
  
  
`
