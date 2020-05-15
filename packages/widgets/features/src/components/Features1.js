import React from 'react';
import {Col, Row} from 'reactstrap';
import Button from '@sgabskit/button'
import {styled} from '@sgabskit/theme'
import {CardsStyle} from './styles'

export default ({loading, title, description, cta, items}) => {

  //TODO: Eanble Skeleton and loading mode

  if (!items || items.length !== 3) {
    console.warn('expected: features.length.3')
    return null
  }

  return (
    <CardsStyle>
      <div className="clearfix text-center mb-5">
        <Title className="ui-title">{title}</Title>
        <SubTitle className="ui-sub-title">{description}</SubTitle>
      </div>
      <div className="mt-5 mb-5 clearfix">
        <Row>
          {items.map((item, index) => (
            <Col md={4} sm={12} className="text-center" key={index}>
              <ItemImgHolder className="item-img">
                <img src={item.img} alt=""/>
              </ItemImgHolder>
              <ItemTitle className="item-title">{item.title}</ItemTitle>
              <ItemDesc className="item-desc">{item.description}</ItemDesc>
            </Col>
          ))
          }
        </Row>
      </div>
      {cta && <div className="clearfix text-center ui-action mt-5">
        <Button ghost>{cta.text}</Button>
      </div>}
    </CardsStyle>
  )
}

const Title = styled.h4`
  line-height: 1.1;
  font-weight: 600;
  display: inline-block;
  width: '50%'
`


const SubTitle = styled.p`
  line-height: 1.2;
  display: inline-block;
  width: 80%;
  color: #9999;
`


const ItemTitle = styled.h5`
  font-weight: 500;
  display: block;
`

const ItemImgHolder = styled.div`
  width: 40px;
  margin: auto;
  overflow: hidden;
  img {
    height: 100%;
  }
`

const ItemDesc = styled.p`
  padding: 0 20px;
  font-size: 0.9em;
`
