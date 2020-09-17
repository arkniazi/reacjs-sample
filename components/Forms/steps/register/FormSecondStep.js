import { TextInput } from "../../../FormFields/TextInput"
import { FormInputWrapper } from "../../../FormFields/FormInputWrapper"

export const FormSecondStep = () => {
    return (
        <>
            <FormInputWrapper margin="0 0 10px 0">
                <TextInput
                    label="address"
                    name="address"
                    type="text"
                    placeholder="address"
                    color="black"
                    altStyle
                    noLabel
                />
            </FormInputWrapper>

            <FormInputWrapper margin="0 0 10px 0">
                <TextInput
                    label="phone"
                    name="phone"
                    type="text"
                    placeholder="phone"
                    color="black"
                    altStyle
                    noLabel
                />
            </FormInputWrapper>
        </>
    )
}