import styled, { css } from "styled-components"

export const FormLabel = styled.label`
    font-size: ${(props) => props.theme.fontSizes.desktop.label.size};
    font-family: ${(props) => props.theme.font.heading}; 
    color: black;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    z-index: 2;
    > span {
        color: #dc2538;
        margin-left: 3px;
    }
`;

export const RadioWrap = styled.div`
    flex: 1 0 0;
    height: 150px;
    margin: 30px 10px 20px 10px; 
`;

export const RadioStyled = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    border: 1px solid;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: block;

    }

    &::hover input ~ .checkmark {
        background-color: #ccc;
    }

    input:checked ~ .checkmark {
       background-color: ${(props) => props.theme.colors.themeBlue}
    }

    input:checked ~ .checkmark::after {
        opacity: 1;
    }
`;