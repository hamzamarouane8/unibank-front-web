import {styled} from '@sgabskit/theme';

export const EdocumentContainer = styled.div`
    background-color: ${props => props.theme.color.primary_white};
    padding: 30px 20px;
    width: 80%;
    border-radius: 4px;
    
    .field-label label {
        color:${props => props.theme.color.primary_grey5};
        margin-bottom: 16px;
    }
    ${'/*-------------- Start Checkbox Section------------------*/'}
    
    .ui.checkbox {
        margin-right: 30px;
    }
    
    .ui.radio.checkbox .box:before, .ui.radio.checkbox label:before {
        width: 22px !important;
        height: 22px !important;
        border-color: ${props => props.theme.color.primary_black} !important;
    }
    
    .ui.radio.checkbox .box:after, .ui.radio.checkbox label:after {
        width: 24px!important;
        height: 24px!important;
        left: -1px!important;
        top:0!important;
    }
    
    .ui.checkbox .box, .ui.checkbox label {
        padding-top: 4px;
        font-size: 17px;
    }
    
    ${'/*-------------- End ------------------*/'}  
    ${'/*-------------- Start Dropdown Section------------------*/'}
    
    .ui.selection.dropdown {
        border: none!important;
        border-bottom: 1px solid ${props => props.theme.color.primary_grey4}!important;
        height:60px;
    }
    
    .loGrKq.compact .ui.dropdown .text.default{
        font-size: 14px;
    }
    
    ${'/*-------------- End ------------------*/'}
    ${'/*-------------- Start Months Section------------------*/'}

    .ui.buttons .button{
        margin-right: 20px !important;
        border-radius: 20px;
        border-top-left-radius:20px!important;
        border-bottom-left-radius:20px!important;
        border-top-right-radius:20px!important;
        border-bottom-right-radius:20px!important;
        border: 1px solid ${props => props.theme.color.primary_grey};
        background-color:${props => props.theme.color.primary_white};
        color: ${props => props.theme.color.primary_grey};
        width: 160px !important;
    }
    
    .ui.active.button {
        border: none ! important;
        background-color:${props => props.theme.color.primary_grey1} !important;
        color: ${props => props.theme.color.primary_white} !important;
    }

    ${'/*-------------- End ------------------*/'}
    ${'/*-------------- Start Action Section------------------*/'}
    
    .dllbek.ui.button.large {
        width: 20%;
        min-width: 160px!important;
        float: right!important;
        border-radius: 4px!important;
        border: solid 1px ${props => props.theme.color.primary_color} !important;
        background-color: ${props => props.theme.color.primary_white} !important;
        color:${props => props.theme.color.primary_color};
        text-transform: uppercase;
        letter-spacing:0px;
        margin-top: 40px;
    }
    
    ${'/*-------------- End ------------------*/'}

    ${'/*-------------- Start Responsive Section------------------*/'}
    
    @media(max-width:824px){
        width: 100%;
        ${'/**** Start Months Section ****/'}
        
            .ui.buttons .button{
                ${props=> props.theme.FontTheme1(500,'12px','!important')}
                width: 110px !important;
            }
        
        ${'/**** End ****/'}
    }
    
    @media(max-with: 614px){
         ${'/**** Start Months Section ****/'}
  
            .ui.buttons .button{
                ${props=> props.theme.FontTheme1(500,'10px','!important')}
                width: 90px !important;
            }
        
        ${'/**** End ****/'}
    }
    ${'/*-------------- End ------------------*/'}



`
