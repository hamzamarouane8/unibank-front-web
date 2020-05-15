import styled from "styled-components";

export const DashboardStyle = styled('div')`

.widget-title{
    ${props=>props.theme.FontTheme1(600,'18px')}
    color:${props=>props.theme.color.primary_black};
    margin-bottom:16px;
}

.apexcharts-toolbar {
    display: none;
}

.ui.pointing.active.dropdown .menu {
    margin-left: -100px;
    width: 200px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right:20px ;
    
    .nav-item {
        margin-top: 20px;
    }
}

.ui.pointing.dropdown>.menu:after {
    left: 60%;
    width: 14px;
    height: 14px;
    top: -0.5em;
}

.apexcharts-legend {
	  display: none
}

.slick-dots {
	  visibility: hidden;
}

.slick-initialized {
    button {
        visibility: hidden;
    }
}



.css-1rlnxk4 {
	  margin-bottom: 30px;
}

.ui.text.menu .active.item {
    font-weight: 700;
    font-size: 1.2em;
    pointer-events: auto;
}

.ui.text.menu .item {
	  pointer-events: none;
}

.ui.text.menu :first-child:nth-last-child(2),
.ui.text.menu :first-child:nth-last-child(2)~li {
	  pointer-events: auto;
}

.ui.text.menu :first-child:nth-last-child(1),
.ui.text.menu :first-child:nth-last-child(1)~li {
	  pointer-events: none;
}

${'/*---------------------------- Start Responsive Section --------------------------------*/'}

@media(max-width: 991px){

    .widget-title{
        margin-bottom:16px;
        color:#010035;
        font-size:14px;
        font-weight:700;
    }
    
    .sg-tab-chart{
        background:#fff;
        .ui.secondary.menu .active.item{
            background:none!important;
            font-weight:600;
            color:#010035;
        }
    }
    
}

@media(max-width: 425px){

  .widget-title{
      margin-bottom:16px;
      font-size:14px;
  }
  
  .sg-tab-chart{
      background:#fff;
      .ui.secondary.menu .active.item{
          background:none!important;
          font-weight:600;
          color:#010035;
      }
  }
  
}

${'/*---------------------------- End --------------------------------*/'}

`
