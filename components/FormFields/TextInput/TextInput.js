import { useField } from "formik"
import { Error } from "../Error"
import { InputWrapper, TextInputStyled, LabelStyled } from "./styled"


export const TextInput = ({ label, required, className, fullWidth, noLabel, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <InputWrapper fullWidth={fullWidth}>
            <LabelStyled noLabel={noLabel} className="label" htmlFor={props.name}>{props.name}</LabelStyled>

            <TextInputStyled {...field} {...props} />
            <Error meta={meta} />
        </InputWrapper>
    )
}
