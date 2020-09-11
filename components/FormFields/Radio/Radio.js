
import { useField, useFormikContext } from "formik"
import styled, { css } from "styled-components"
import { Error } from "../Error"

const InputWrapper = styled.div`
    position: relative;
    width: ${(props) => (props.fullWidth ? "100%" : "initial")};
`
const LabelStyled = styled.label`
    border-bottom: ${(props) => props.active && "1px solid"};
    color: ${(props) => props.color ? props.color : props.theme.colors.white};
    font-family: ${(props) => props.theme.font.heading};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    p {
        position: relative;
    }
`
const RadioStyled = styled.input`
    display: none;

    &:checked + p:after {
        transform: translateY(4px);
        opacity: 1;
    }
`

export const Radio = ({ label, required, className, fullWidth, submitOnChange, color, ...props }) => {
    const [field, meta] = useField(props.name)

    const { setFieldValue, setFieldTouched, submitForm } = useFormikContext()

    const handleOnChange = (name, value, selfSubmit) => {
        setFieldValue(name, value);

        if (selfSubmit) {
            submitForm()
        }
    }

    return (
        <InputWrapper className={className} fullWidth={fullWidth}>
            <LabelStyled color={color}>
                <RadioStyled {...field} {...props} onChange={() => handleOnChange(props.name, props.value, submitOnChange)} />
                <p>{label}</p>
            </LabelStyled>

            <Error meta={meta} />
        </InputWrapper>
    )
}
