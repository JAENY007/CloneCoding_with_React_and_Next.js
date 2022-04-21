import React from "react";
import styled from "styled-components";


const CardImage = () => {

  const Image = () => {
    return (
      <StyledImage src="http://placeimg.com/720/540/tech" />
    );
  }

  const View = () => {
    let arrayCard = [];
    for (let i = 1; i < 11; i ++) {
      arrayCard.push(<Image />)
    }
    return arrayCard;
  }
  return View();
};

export default CardImage;

const StyledImage = styled.img`
  width: 720px;
  height: 540px;
`;