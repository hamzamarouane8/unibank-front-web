import React, {useState, useEffect} from 'react';
import {styled} from '@sgabskit/theme'
import {ExchangeTable} from '../../features/exchange_rate'

export default ({option}) => {
  const [state, setState] = useState(null);
  const [dateExchange, setDateExchange] = useState('09/08/2019');

  useEffect(() => {

  }, []);

  return (
    <ExChangeContainer background={option.background}>
      <div className="exchange-rate">
        <div className="exchange-rate__header">
          <h1>Taux de change</h1>
        </div>
        <div className="exchange-rate__table">
          <p>Derniére mise a jour : {dateExchange}</p>
          <ExchangeTable/>
        </div>
      </div>
    </ExChangeContainer>
  )
}
const ExChangeContainer = styled.div`


${'/*----------------------------------- Start Content CSS -----------------------------------*/'}
background-color:${props=>props.background};
padding: ${props=>props.option ? props=>`${props.option.pt}px ${props.option.pl}px`:'80px 3rem'};

 .exchange-rate__table {
        p {
            ${props=>props.theme.FontTheme1(500,'14px')}
            color: ${props=>props.theme.color.primary_grey5};
        }
    }
    
.exchange-rate {
    &__content {
        
    }
    
    &__header {
        margin-bottom: 40px;
        
        h1 {
            ${props=>props.theme.PageTitle('100%','34%','40%')};
        }
    }
    
    &__table {
        .sg-table {
             margin-top:0px;
        } 
    }
}

.column-unite {
    img {
        margin-right: 12px;
        width: 28px;
    }
}

${'/*----------------------------------- End Content CSS -----------------------------------*/'}

${'/*----------------------------------- Start Responsive Design Section -----------------------------------*/'}

@media (max-width:792px) {  
    .exchange-rate__header {
        h1 {
            font-size:22px;
            max-width: 40%;
        } 
    }      
}

@media (max-width:552px) {  
    .exchange-rate__header {
        h1 {
           max-width: 50%;
           font-size:18px;
        } 
    }   
    
    .gfRQrU .ui.table td {
        font-size: 0.6em !important;
    }   
    
    .exchange-rate__table {
        p {
            font-size: 10px;
        }
    }
}


${'/*----------------------------------- End Responsive Design Section -----------------------------------*/'}

${'/*----------------------------------- Start Animation Section -----------------------------------*/'}

@keyframes underline{
 0% {width: 0%;}
  100%{width:34%;}
}

${'/*----------------------------------- End Animation Section -----------------------------------*/'}

`

