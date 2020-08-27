import { useField } from "formik"
import styled, { css } from "styled-components"
import { Error } from "../Error"

const InputWrapper = styled.div`
    position: relative;
    width: ${(props) => (props.fullWidth ? "100%" : "initial")};
`
const LabelStyled = styled.label`
    border-bottom: ${(props) => props.active && "1px solid"};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.font.heading};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    p {
        position: relative;
    }
    p:after {
        content: "";
        width: 100%;
        height: 4px;
        background: ${(props) => props.theme.colors.orange};
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(0px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &:hover {
        p:after {
            transform: translateY(4px);
            opacity: 1;
        }
    }
`
const RadioStyled = styled.input`
    display: none;

    &:checked + p:after {
        transform: translateY(4px);
        opacity: 1;
    }
`

export const Radio = ({ label, required, className, fullWidth, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <InputWrapper className={className} fullWidth={fullWidth}>
            <LabelStyled>
                <RadioStyled {...field} {...props} />
                <p>{label}</p>
            </LabelStyled>

            <Error meta={meta} />
        </InputWrapper>
    )
}
