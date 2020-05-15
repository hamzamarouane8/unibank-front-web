import styled from "styled-components";

export const TableStyle = styled('div')`
    
    .sg-table {
        margin-top: 40px;
        .ui.pagination.menu {
            float: right;
        }
        
        .table-content {
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
        }
    }
     
    .action.link {
        .ui.button{
            background:none;
        }
    }
    
    .widget-title {
        margin-bottom:16px;
        ${props=>props.theme.FontTheme1(600,'18px')}
        color:${props=>props.theme.color.primary_black};
    }
    
    .table-container {
        background: ${props=>props.theme.color.primary_white};
        border-radius: 6px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
    }
    
    .ui.text {
        display:block;
        text-align:center;
    }

    .ui.table thead th {
        background: ${props=>props.theme.color.primary_grey7};
        color: ${props=>props.theme.color.primary_grey6};
        border: 0;
        ${props=>props.theme.FontTheme1(600,'13px')};
    }

    .ui.table tr:last-child {
        border-bottom:1px solid red!important; 
    }
    
    .gfRQrU .ui.table td {
        vertical-align:middle !important;
        white-space:nowrap;
        color:${props=>props.theme.color.primary_black};
        ${props=>props.theme.FontTheme1(500,'14px')};
    }

${'/*----------------------------------- Start Spesific column ------------------------------------------*/'}

    .balance {
        float:right;
    }

    .actions {
        margin-left:30px;
        margin-right:30px;
    }
    
    .positive {
        letter-spacing: 0px;
        color: #4ad991;
        float:right;
        white-space: nowrap;
    }
    
    .negative {
        color: ${props=>props.theme.color.primary_color};
    }
    
    .status-progress {
        margin: 0 auto;
        font-size:12px;
        color: #fff;
        width:60%;
        padding:8px 10px 8px 10px;
        background:${props=>props.theme.color.primary_orange};
        ${props=>props.theme.FontTheme2(400,'12px')}
        border-radius : 6px;
    }
    
    .status-done {
        margin: 0 auto;
        color: ${props=>props.theme.color.primary_white};;
        text-transform: uppercase;
        width:60%;
        ${props=>props.theme.FontTheme2(400,'12px')}
        padding:8px 10px 8px 10px;
        background:${props=>props.theme.color.primary_green};
        border-radius : 6px;
    }
    
${'/*----------------------------------- End ------------------------------------------*/'}

${'/*----------------------------------- Start Responsive Section ------------------------------------------*/'}
@media(max-width: 1100px){
  
    .status-done{
        width:80%;
    }
}

@media(max-width: 826px){
  
    .status-done{
        width:90%;
    }
}


    
@media(max-width: 600px){

    .ui.table thead th {
        font-size: 0.55em!important;
    }
  
    .ui.table tr:last-child {
        border-bottom:1px solid red!important; 
    }
   
    .gfRQrU .ui.table td {
        font-size: 0.6em!important;
        border-bottom: 0;
        padding: 4px 8px !important;
    }
    
    .status-done{
        font-size:9px;
        width:50px;
        padding:2px 3px 2px 3px;
    }
    ${'/**** Section Pagination ****/'}
    
    .ui.pagination.menu {
        width: 300px;
    }
    
    .ui.pagination.menu .item {
        min-width: 1.9em ;
    }
    
    .ui.menu .item {
        width: 20px;
        padding: 10px 10px !important;
    }
    
    ${'/**** End ****/'}
}

${'/*----------------------------------- End ------------------------------------------*/'}

`

