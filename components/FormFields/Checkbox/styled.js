import styled, { css } from "styled-components"

export const FormLabel = styled.label`
    font-size: ${(props) => props.theme.fontSizes.desktop.label.size};
    font-family: ${(props) => props.theme.font.heading}; 
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    > span {
        color: #dc2538;
        margin-left: 3px;
    }
`;

export const CheckboxWrap = styled.div`
    margin-bottom: 25px;
    &:nth-last-child(){
        margin-bottom: 0;
    }
`;

export const CheckboxStyled = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    user-select: none;
    font-weight: 500;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 19px;
        width: 19px;
        background-color: white;
        display: block;
        border: 2px solid black;
        &::after {
            content: '';
            position: absolute;
            opacity: 0;
            left: 5px;
            top: 1px;
            width: 5px;
            height: 11px;
            border: solid black;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            transition: ${(props) => props.theme.transitions.default};
        }
    }

    &::hover input ~ .checkmark {
        background-color: #ccc;
    }

    input:checked ~ .checkmark {
       background-color: ${(props) => props.theme.colors.orange}
    }

    input:checked ~ .checkmark::after {
        opacity: 1;
    }
`;