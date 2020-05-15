import {styled} from '@sgabskit/theme';

export const LoginStyle = styled.div`
background-color: ${props=>props.theme.color.primary_white};
${'/*-------------------------- Start Inputs Section --------------------------------*/'}

.ui.fluid.input > input {
    background: transparent !important;
    ${props=>props.theme.FontTheme2(400,'17px')}
    border: 1px solid ${props=>props.theme.color.primary_grey5} !important;
    color: ${props=>props.theme.color.primary_grey5} !important;
    border-radius: 5px !important;
}

${'/*-------------------------- End --------------------------------*/'}
${'/*-------------------------- Start Remember-me Section --------------------------------*/'}
.option__action{
    a{
        float:right;
        color: ${props=>props.theme.color.primary_grey1};
        ${props=>props.theme.FontTheme2(400,'14px')}
    }
    
    .ui.checkbox input.hidden + label {
        ${props=>props.theme.FontTheme2(400,'16px')}
        color:${props=>props.theme.color.primary_black};
    }
    
    .ui.checkbox .box:before, .ui.checkbox label:before {
        ${props=>props.theme.BorderTheme('1.5px',props.theme.color.primary_black,'none','!important')}
        width: 20px !important;
        height: 20px !important;
    }
    
    .ui.checkbox .box:after, .ui.checkbox label:after {
        top: 2px !important;
        width: 19px !important;
    }
}
${'/*-------------------------- End --------------------------------*/'}

.login-header {
    width: 70%;
    margin: 20px auto;
    .countries__input{
        float:right;
        max-width: 160px;
        width:100%;
    }
}
.container-content__form {
    position: relative;
}

.form-error__content {
    color: #e55f50;
    text-align: center;
    width: 100%;
    border: 1px solid #e55f50;
    margin: 40px auto 20px auto;
    padding: 20px 0px;
    border-radius: 5px;
    
    img {
        margin-right:6px;
    }
}

.footer-item {
    img {
        width: 40px;
    }
    .text{
        color: red!important;
    }
    
    font-size: 13px;
}
.container-content {
    display:flex;
    flex-flow: row nowrap;
    align-items: stretch; 
    height: 100%;
    &__form {
      width:50%;
    }
    &__offers {
      width:50%;
    }
}

.keyboard__virtual{
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    border: none;
    background: transparent;
    
}

.ui.fluid.dropdown > .dropdown.icon{
    margin-top:0px;
}

.ui.primary.button{
    background:${props=>props.theme.color.primary_color};
    text-transform:uppercase;
    ${props=>props.theme.FontTheme1(700,'0.9em','!important')}
    border-radius: 15px !important;
    margin-top: 22px;
    padding: 16px;
}

.ui-form {
    .ui-logo {
        width: 26%;
    }
}

.ui-title{
    ${props=>props.theme.PageTitle('100px','80px','40%')};
    ${props=>props.theme.FontTheme1(700,'24px')}
    width:80%;
    margin-top:${props=>props.isOpen?'10%':'20%'};
    text-transform:uppercase;
    color:${props=>props.theme.color.primary_black};
}  

form {
    margin-top:${props=>props.isOpen?'50px':'100px'} !important;
}

.slick-slide img{
    height:100vh;
    width:100%;
}

.form__content {
    margin: 0 auto;
    width:70%;
}

${'/*----------------------------------- Responsive Section -----------------------------------*/'}
@media(max-width: 900px) {

    .form__content{
        width:90%;    
    }

    .form-error__content {
        width: 90%;
    }

    .login-header {
        width : 90%;
        margin-bottom: 20px;
        .ui-logo {
            margin-top: 16px;
            margin-bottom:0px !important;
        }
        
        .countries__input{
            float:right;
           max-width: 160px !important;
        }
    }
    
    .container-content {
        display:flex;
        flex-flow: row nowrap;
        align-items: stretch; 
        height: 100%;
        &__form {
            width:100%;
        }
        &__offers {
            width:0%;
        }
    }
    
    .slick-slider .slick-track, .slick-slider .slick-list{
        width: 90%;
        height:200px;
        margin: 0 auto;
        border-radius: 3px;
    }
    
    .marketing-bloc {
        bottom:40%;
        width: 90%;
        margin :0px 10px;
        &__info {
            height: 300px;
        }
        &__description {
            display:none;
        }
        
        &__title {
            font-size:20px;
            margin-top:-20px;
        }
    }
    
    .form-remember {
        margin-bottom: 160px !important;
    }
    
    .slick-dots {
        display: none;
    }
}

@media (max-width: 1440px) {
  .ui-form {
    .ui-logo {
      margin-top: 20px;
    }
    .ui-title{
      line-height: 1.1;
      margin-bottom:30px;
    }
  }
  
}  

@media (max-width: 1024px) {
  .slick-slide img{
    height:100vh;
    width:100%;
  }
  .slick-dots{
    bottom:0;
  }
  .ui-form {
    .ui-logo {
      margin-top: 20px;
    }
  }
  .ui-title{
    line-height: 1.1;
    margin-bottom:20px;
  }
}



    
`
