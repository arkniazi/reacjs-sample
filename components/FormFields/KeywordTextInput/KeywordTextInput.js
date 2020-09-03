import { useField } from "formik"
import styled, { css } from "styled-components"
import { Error } from "../Error"

export const TextInputStyles = css`
    background: transparent;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.orange};
    font-family: ${(props) =>
        props.altStyle ? props.theme.font.heading : props.theme.font.body};
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.colors.darkGray};
    width: 100%;
    font-size: 29px;
    padding-bottom: 15px;
    &::placeholder{
        display: none;
    }
    &:focus{
        outline: none;
    }
`

export const InputWrapper = styled.div`

`

export const KeywordTextInputStyled = styled.input`
    ${TextInputStyles}
`

export const KeywordTextInput = ({ label, required, className, fullWidth, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <InputWrapper fullWidth={fullWidth}>
            {!props.noLabel && <label className="label" htmlFor={props.name}>{props.name}</label>}

            <KeywordTextInputStyled {...field} {...props} />
            <Error meta={meta} top="7px" right="200px" />
        </InputWrapper>
    )
}
