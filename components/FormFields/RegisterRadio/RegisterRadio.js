import { useField } from "formik"
import { Error } from "../Error"
import { FormLabel, RadioWrap, RadioStyled } from "./styled"


export const RegisterRadio = ({ children, name, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <RadioWrap className={props.className}>
            <RadioStyled className='container-Radio'>
                <FormLabel>{props.label} <br /> {props.price}</FormLabel>
                <input type='radio' {...field} {...props} />
                <span className='checkmark'></span>
            </RadioStyled>

            <Error meta={meta} />
        </RadioWrap>
    );
};
