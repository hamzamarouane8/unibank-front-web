import styled from "styled-components";


export const LayoutGuestStyle = styled.div`

    
    .navbar-brand {
        max-width: 30%;
    }
    
    .fixed-top{
        max-width: 1150px;
        margin: 0 auto;
    }

    .ui.brand img{
        padding:10px;
        width:120px;
        height:40px!important;
    }

    .navbar-light .navbar-toggler{
        border:none!important;
    }

    .sg-login{
        padding-left:25px!important;
        padding-right:25px!important;
        padding-bottom:12px;
        padding-top:12px;
        ${props=>props.theme.FontTheme1(600,'10px','!important')}
        background: ${props=>props.theme.color.primary_white};
        border: 1px solid ${props=>props.theme.color.primary_color};
        border-radius: 8px;
        text-transform: uppercase;
        color: #e9041e !important;
        &:hover {
            background:${props=>props.theme.color.primary_color} !important;
            color:${props=>props.theme.color.primary_white} !important;
        }
    }

    .sg-subscribe{
        text-transform: uppercase;
        padding-left:25px!important;
        padding-right:25px!important;
        padding-bottom:12px;
        padding-top:12px;
        font-family:Montserrat;
        font-weight:500;
        margin-top: 8px;
        margin-left: 10px!important;
        border-radius: 8px;
        border: solid 1px #333333;
        font-size:10px;
        color:#000!important;
    }
    
    .nav-item .nav-link.active{
        color:#000000 !important;
        font-family: Montserrat;
        font-weight:600;
        line-height: 1.65;
        letter-spacing: normal;
        text-align: center;
        position:relative;
        opacity:1;
    }

    .nav-item .nav-link.active:after {
        content:"";
        width:100%;
        position:absolute;
        left:0;
        bottom:-26px;
        border-bottom:3px solid ${props => props.theme.color.primary_color};
        animation-name :underline;
        animation-duration:1s;
        animation-fill-mode;forwards;
        animation-timing-function:ease;
    }
    
    .sg-login:after {
        content:"";
        border-bottom: none !important;
        &:hover {
            background:${props=>props.theme.color.primary_color} !important;
            color:${props=>props.theme.color.primary_white} !important;
        }
    }

    @keyframes underline{
     0% {width: 0%;}
      100%{width:100%;}
    }

    .nav-item .nav-link{
        text-transform: uppercase;
        font-family: Montserrat;
        font-weight:500;        
        line-height: 1.65;
        letter-spacing: normal;
        text-align: center;
        color: #555555 ;
    }

    .sg-action{
        width:90%;
        background:${props => props.theme.color.primary_color};
        margin-right:6px;
        border-radius:5px;
        font-size:10px;
        text-transform: uppercase;
        color:#fff!important;
    }

    .navbar-independent {
        position: absolute !important;
        right: 340px;
    }

    .bloc__country {
        display :flex;
        align-items: center;
        justify-content: center;
        img {
            width: 40px;
        }
        
        p {
            font-size:10px;
        }
    }

    .ui.fluid.dropdown {
        margin-top:6px;
        border: none;
        background: transparent;  
    }

    .ui.fluid.dropdown > .dropdown.icon{
        margin-top:0px;
    }
    
    .countries__input{
    }

${'/*---------------------------- Responsive Design Section ----------------------------*/'}

@media (max-width: 992px) {

    .nav-link .sg-login{
        padding:10px 0px!important;
        margin: 8px 0px !important;
    }
    
    .sg-subscribe{
        padding:10px 0px!important;
        margin: 8px 0px !important;
    }
    
    .nav-item .nav-link.active:after {
        content:"";
        width:100%;
        position:absolute;
        left:0;
        border-bottom:none !important;
        animation-name :underline;
        animation-duration:1s;
        animation-fill-mode;forwards;
        animation-timing-function:ease;
    }
    
    .navbar-independent {
        position: static !important;
    }
}

@media (max-width: 768px) {

    .sg-navItem{
        text-transform: uppercase;
        font-size:14px;
    }
    
    .navbar-start{
        margin-left:80px;
    }
    
    .nav-item .nav-link.active{
        color:#010035!important;
        font-weight: bold;
        font-style: normal;
        line-height: 1.65;
        letter-spacing: normal;
        text-align: center;
        opacity:1;
    }
    
    .nav-item .nav-link{
        opacity: 0.30;
        font-weight: bold;
        font-style: normal;
        line-height: 1.65;
        letter-spacing: normal;
        text-align: center;
        color: #010035;
    }
    
    .nav-item .nav-link.active:after {
        content:"";
        width:100%;
        position:absolute;
        left:0;
        border-bottom:none !important;
        animation-name :underline;
        animation-duration:1s;
        animation-fill-mode;forwards;
        animation-timing-function:ease;
    }
    
    .bloc__country {
        img {
            width: 30px;
        }
        
        p {
            font-size:0.6em;
        }
    }
}

@media(max-width: 490px) {
    .navbar-light .navbar-toggler{
        height:20px !important;
        
    }
    .ui.brand img {
        padding: 0!important;
        height: 20px!important;;
    }
}
`
