import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e5e5e5;
    border-radius: 50px;
    width: 150px;
    padding: 15px 30px;
    padding-right: 45px;
    margin: 10px auto;
    box-shadow: 5px 5px 5px gray;

    img {
        width: 30px;
        margin-right: 10px;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

function ImagemButton(props) {
  return (
    <MyDiv>
      <img src={props.imagem} />
      <a href={props.link} target="_blank">{props.texto}</a>
    </MyDiv>

  );
}

export default ImagemButton;