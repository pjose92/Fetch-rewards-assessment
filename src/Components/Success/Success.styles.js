import styled from 'styled-components';

export const SucessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SuccessButton = styled.button`
    cursor: pointer;
    margin: 1rem 0;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    padding: 0.3rem 1rem;
    height: 45px;
    background-color: #0070F0;
    color: white;
    &:hover {
        background-color: #0064d6;
        border: 1px solid black;
    }
`;

