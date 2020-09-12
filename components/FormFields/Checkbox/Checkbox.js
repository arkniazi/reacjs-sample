export * from "./Checkbox"
import { useField } from "formik"
import { Error } from "../Error"
import { FormLabel, CheckboxWrap, CheckboxStyled } from "./styled"


export const Checkbox = ({ children, name, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <CheckboxWrap className={props.className}>
            <CheckboxStyled className='container-checkbox'>
                <FormLabel>{props.label}</FormLabel>
                <input type='checkbox' {...field} {...props} />
                <span className='checkmark'></span>
            </CheckboxStyled>

            <Error meta={meta} />
        </CheckboxWrap>
    );
};
