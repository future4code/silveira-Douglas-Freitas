import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #e5e5e5;
    border-radius: 15px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    box-shadow: 5px 5px 5px gray;

    img {
      width: 30px;
        margin-right: 10px;
        border-radius: 50%;
        border: 2px solid orange;
    }

    div {
      display: flex;
      align-items: center;
      justify-items: flex-start;
    }
`;

function CardPequeno(props) {
  return (
    <MyDiv>
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}:&nbsp;</h4>
        <p>{props.descricao}</p>
      </div>
    </MyDiv>
  );
}

export default CardPequeno;