import React from "react";
import styled from "styled-components";

const MiniCard = () => {
  return(
    <div>
      <Image src="http://placeimg.com/300/300/any"/>
    </div>
  );
}

const Image = styled.img`
  overflow: hidden;
  border-radius: 10px;
  border: none;
`;