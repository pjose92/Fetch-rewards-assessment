import React from "react";
import { SuccessButton, SucessContainer } from "./Success.styles";

const Success = ({ setIsComplete }) => (
  <SucessContainer className="success-wrapper">
    <h1>Success!</h1>
    <span className="notice">Did you need to go back?</span>
    <SuccessButton onClick={() => setIsComplete(false)}>Go back</SuccessButton>
  </SucessContainer>
);

export default Success;
