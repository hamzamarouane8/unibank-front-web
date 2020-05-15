import React from 'react';
import styled from 'styled-components';
import Button from '@sgabskit/button';
import isString from 'lodash.isstring';

//------------------------------------------------------------

const ICON = {
  error: require('../../assets/img/Server_icon.svg'),
}

export default ({ status, onClick, children }) => {

  if (children && !status) return children;

  return (
    <Container>
      <img src={ICON.error} alt="" width={100}/>
       <h4>Oops une erreur est survenue</h4>
      <p>Désolé, quelque chose est mal passé. réessayez un peu plus tard.</p>
        <div className="mt-4 clearfix">
          <Button size="large" primary onClick={onClick}>Réessayer</Button>
        </div>
    </Container>
  );
}

const Container = styled.div`
    margin: auto;
    max-width: 400px;
    line-height: 1.6;
    text-align: center;
    img{
      width:70%;
      height:70%;
    }
  .ui.button{
    border-radius: 5px;
    border: solid 1px #f01234;
    background:#fff!important;
    color:#f01234!important;
    padding: 10px 60px;
    &.active{
        background:red!important;

    }
  }
`;
