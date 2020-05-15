import styled from "styled-components";

export const ChartStyle = styled('div')`
h5 {
    padding-left: 15px;
}

.chart {
  margin: 6px;
	background: #FFF;
	border-radius: 6px;
	padding: 20px;
	height:400px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
	.css-77q919 .chart .apexcharts-legend.position-bottom.center,
	.css-77q919 .chart .apexcharts-legend.position-top.center {
		visibility: hidden!important;
	}
	
	h5 {
      ${props=>props.theme.FontTheme1(500,'16px')}
      color:${props=>props.theme.color.primary_black};
	}
	
} 

.chart-indicator{
    width: 100%;
    margin : 6px auto;
    .chart-indicator__gain {
        float:left;
        display:flex;
        align-items: center;
        margin-right:30px;
        
        .img{
            height: 16px;
            width:36px;
            background-color:#2dce8a;
            margin-right:14px;
            border-radius: 2px
        }
        
        .text {
            align-self: middle;
        }
    }
    
    .chart-indicator__depense {
        overflow:hidden;
        display:flex;
        align-items: center;
                
        .img{
            height: 16px;
            width:36px;
            background-color:#e9041e;
            margin-right:14px;
            border-radius: 2px
        }
        
        .text {
            align-self: middle;
        }
    }
}

`
