import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #e5e5e5;
    border-radius: 15px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    box-shadow: 5px 5px 5px gray;

    img {
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
        border: 2px solid orange;
    }

    h4 {
        margin-bottom: -10px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }
`;

function CardGrande(props) {
  return (
    <MyDiv>
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </div>
    </MyDiv>
  );
}

export default CardGrande;