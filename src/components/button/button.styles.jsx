import styled from 'styled-components';

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: #fff;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover {
        background-color: #000;
        color: #fff;
        border: none;
    }
`;

