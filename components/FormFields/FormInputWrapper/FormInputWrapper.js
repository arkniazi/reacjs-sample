import { FormInputWrapperStyled } from './styled'

export const FormInputWrapper = (props) => {
    return (
        <FormInputWrapperStyled margin={props.margin}>
            {props.children}
        </FormInputWrapperStyled>
    )
}