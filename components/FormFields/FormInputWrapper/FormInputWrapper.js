import { FormInputWrapperStyled } from './styled'

export const FormInputWrapper = (props) => {
    return (
        <FormInputWrapperStyled margin={props.margin} className={props.className}>
            {props.children}
        </FormInputWrapperStyled>
    )
}