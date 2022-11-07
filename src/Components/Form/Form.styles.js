import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 5% auto;
  padding: 1.6rem 3rem;
  border: 0.1rem solid black;
  border: none;
  box-shadow: 3px 3px 25px 8px rgba(0, 0, 0, 0.24);
  border-radius: 1.25rem;
`;

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormLabel = styled.label`
  margin: 0.8rem 0;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FormInput = styled.input`
  appearance: none;
  border-radius: 4px;
  border-color: #e9eced;
  border-color: grey;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  box-sizing: content-box;
  display: block;
  height: 48px;
  padding: 0 8px;
  transition: border-color 0.3s ease-in-out;
  width: calc(100% - 16px);

  &:hover,
  &:focus {
    border-color: #6d7173;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  padding: 0.3rem 1rem;
  height: 45px;
  background-color: #0070f0;
  color: white;
  &:hover {
    background-color: #0064d6;
    border: 1px solid black;
  }
`;

export const Title = styled.h1`
  align-self: center;
  text-transform: uppercase;
  font-size: 28px;
`;
