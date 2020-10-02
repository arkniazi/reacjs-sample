import styled, { css } from "styled-components"

export const TextInputStyles = css`
    background: transparent;
    border: 2px solid
        ${(props) => (props.color ? props.color : props.theme.colors.white)};
    font-size: ${(props) =>
        props.altStyle
            ? props.theme.fontSizes.desktop.link.tiny
            : props.theme.fontSizes.desktop.link.size};
    font-family: ${(props) =>
        props.altStyle ? props.theme.font.heading : props.theme.font.body};
    padding: 13px 1rem;
    width: 100%;
    transition: ${(props) => props.theme.transitions.default};
    color: ${(props) => (props.color ? props.color : props.theme.colors.white)};

    ::-webkit-input-placeholder {
        color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
        opacity: 1;
        text-transform: ${(props) => (props.altStyle ? "uppercase" : "none")};
        font-weight: bold;
    }

    :disabled {
        background: #f9f9f9;
        border-color: #f9f9f9;
    }

    &:focus,
    &:hover {
        outline: none;
        border-color: ${(props) => props.theme.colors.themeBlue};
    }
`

export const InputWrapper = styled.div`
    position: relative;
    width: ${(props) => (props.fullWidth ? "100%" : "initial")};
    &:nth-child(1) {
        margin-right: ${(props) => (props.fullWidth ? "5px" : "initial")};
    }

    &:nth-child(2) {
        margin-left: ${(props) => (props.fullWidth ? "5px" : "initial")};
    }
    &:nth-child(3) {
        margin-left: ${(props) => (props.fullWidth ? "10px" : "initial")};
    }
`

export const TextInputStyled = styled.input`
    ${TextInputStyles}
`

export const LabelStyled = styled.label`
    display: ${(props) => (props.noLabel == true ? 'none' : 'block')};
`