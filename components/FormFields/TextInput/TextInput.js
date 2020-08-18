import { useField } from "formik"
import styled, { css } from "styled-components"
import { Error } from "../Error"

export const TextInputStyles = css`
    background: transparent;
    border: 2px solid ${(props) => props.theme.colors.white};
    font-size: ${(props) =>
        props.searchStyle
            ? props.theme.fontSizes.desktop.link.tiny
            : props.theme.fontSizes.desktop.link.size};
    font-family: ${(props) =>
        props.searchStyle ? props.theme.font.heading : props.theme.font.body};
    padding: 1rem;
    width: 100%;
    margin-bottom: ${(props) => (props.searchStyle ? "1.8rem" : "1.1rem")};
    transition: ${(props) => props.theme.transitions.default};
    color: ${(props) => props.theme.colors.white};
    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.colors.white};
        opacity: 1;
        text-transform: ${(props) => (props.searchStyle ? "uppercase" : "none")};
        font-weight: bold;
    }

    :disabled {
        background: #f9f9f9;
        border-color: #f9f9f9;
    }

    &:focus,
    &:hover {
        outline: none;
        border-color: ${(props) => props.theme.colors.lightGrey};
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
`

export const TextInputStyled = styled.input`
    ${TextInputStyles}
`

export const TextInput = ({ label, required, className, fullWidth, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <InputWrapper fullWidth={fullWidth}>
            <TextInputStyled {...field} {...props} />
            <Error meta={meta} />
        </InputWrapper>
    )
}
