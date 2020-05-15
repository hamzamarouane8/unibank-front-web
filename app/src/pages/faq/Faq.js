import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Divider} from "@sgabskit/layout";
import ErrorState from '../../features/error/ErrorState';
import classnames from 'classnames';
import * as store from '@sgabskit/local-storage';
import ReactMarkdown from 'react-markdown'
//-------------------------------------------------

const ICON = {
  icon_plus: require('./assets/img/Plus.svg'),
  icon_minus: require('./assets/img/Moins.svg')
}

export default ({router, faqService,option}) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let codeCountry = store.get('code_country');
    codeCountry ? load(codeCountry) : router.redirect('/countries');
  }, [])

  const load = (code) => {
    faqService.loadFaqData(code).then((data) => {
      setQuestions((data || []).map((item, index) => ({...item, flag: false})));
    }).catch((error) => {
      setError(true);
    })
  }

  const handleCheck = (result) => {
    questions.forEach(function (item) {
      item.flag = item.id === result.id ? !item.flag : false;
    })
    return setQuestions([...questions]);
  }

  return (
    <>
      <ErrorState status={error}>
        <FaqContent background={option.background}>
          <h1 className='title'>
            FOIRE AUX QUESTIONS
          </h1>
          <div className='content'>
            {(questions || []).map((item, index) => <ItemQuestion classId={`item-question ${index}`} key={index}
                                                                  item={item}
                                                                  handleCheck={handleCheck}/>)}
          </div>
        </FaqContent>
      </ErrorState>
    </>
  )
}

const ItemQuestion = ({item, handleCheck, classId}) => {
  return (
    <ContainerCard id={classnames('clearfix', classId)}>
      <CardContainer onClick={() => handleCheck(item)}>
        <CardContent>
          <ItemTitle>
            <img src={item.flag ? ICON.icon_minus : ICON.icon_plus} alt=''/>
            <span>{item.title}</span>
          </ItemTitle>
          {item.flag && <ItemDesc id={classnames(classId, 'descr')}><ReactMarkdown source={item.contents} /></ItemDesc>}
        </CardContent>
      </CardContainer>
    </ContainerCard>
  )
}

const ItemTitle = styled.div`
    ${props=>props.theme.FontTheme1(500,'16px')}
    color: ${props=>props.theme.color.primary_black};
    img{
      margin-right:10px;
    }
`

const CardContainer = styled(Card)`
  box-shadow: 0 3px 10px 0 rgba(147, 161, 186, 0.3)!important;
  background-color: #ffffff;
  margin-top: 25px;
`

const ItemDesc = styled.div`
    ${props=>props.theme.FontTheme2(400,'17px')}
    color: ${props=>props.theme.color.primary_grey};
    margin-top:14px;
    padding: 10px 24px;
    line-height: 1.41;
`

const ContainerCard = styled.div`
    cursor: pointer;
    width:100%!important;
    margin-top: 20px;
`


const FaqContent = styled.div`
padding-top: 80px;
padding-left: 3rem;
padding-right: 3rem;
padding-bottom: 100px;
background-color:${props=>props.background};
.title {
   ${props=>props.theme.PageTitle('40%','80px','40%')};
}

.content {
    margin-top: 40px;
}

.MuiCardContent-root-29{
    padding-bottom: 16px !important;
}

@media(max-width: 425px){
    .title {
   ${props=>props.theme.PageTitle('80%','120px','80%')};
   font-size: 18px;
    }
}

`
