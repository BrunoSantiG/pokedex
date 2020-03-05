import React, { useState } from "react";
import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";

const MainScreen = () => {
  const [clicks, setClicks] = useState(0);

  const onClickButton = () => {
    setClicks(clicks + 1);
  };

  return (
    <StyledContainer>
      <StyledImage src={logo} />
      <StyledLabel>Você clicou no botão {clicks} vezes</StyledLabel>
      <StyledButton onClick={onClickButton}>Clique aqui</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

const StyledLabel = styled.p`
  color: white;
  font-size: 20;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  :focus {
    outline: 0;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledImage = styled.img`
  height: 40vmin;
  width: 40vmin;
  animation: ${rotate} 20s linear infinite;
`;

export default MainScreen;
