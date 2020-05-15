import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Col, Container, Row } from '@sgabskit/layout';

const Page = ({ title, theme, children, backgroundImage, grid }) => {

    if (backgroundImage) {
      children = (
        <CoverStyle style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay">
            {children}
          </div>
        </CoverStyle>
      );
    }

    let __children = children;

    if (grid === true) {
      __children = (
        <Container >
          {__children}
        </Container>
      );
    } else if (grid) {
      __children = (
        <Container fluid={grid.fluid}>
          <Row>
            <Col offset={grid.offset} span={grid.span}>
              {__children}
            </Col>
          </Row>
        </Container>
      );
    }

    return (
      <>
        <Helmet>
          <meta charSet="utf-8"/>
          {title && <title>{title}</title>}
          <html lang="fr" className={theme} />
          <body key="main" className={theme}/>
        </Helmet>
        {__children}
      </>
    );
  }
;

const CoverStyle = styled.div`
  display: block;
  width: 100%;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  & > .overlay {
    background: rgba(0, 0, 0, 0.2);
    display: block;
    width: 100%;
    height: 100%;
  } 
`;

Page.Body = ({ children }) => (
  <StyledBody className="ui page-body">
    {children}
  </StyledBody>
);

const StyledBody = styled('div')`
  a {
    color: #1D84B5;
    &:hover {
      color: #176087;
    }
  }
`;

export default Page;
