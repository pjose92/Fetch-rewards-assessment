import styled from 'styled-components';

export const Selection = styled.select`
    border-radius: 4px;
    border-color: #E9ECED;
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

export const Option = styled.option``;
