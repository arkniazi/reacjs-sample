import { useField } from "formik"
import styled, { css } from "styled-components"
import { Error } from "../Error"

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
    padding: 1rem;
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
            {!props.noLabel && <label className="label" htmlFor={props.name}>{props.name}</label>}

            <TextInputStyled {...field} {...props} />
            <Error meta={meta} />
        </InputWrapper>
    )
}
