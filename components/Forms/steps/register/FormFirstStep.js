import { TextInput } from "../../../FormFields/TextInput"
import { FormInputWrapper } from "../../../FormFields/FormInputWrapper"
import { RegisterRadio } from "../../../FormFields/RegisterRadio"

export const FormFirstStep = () => {
    return (
        <>
            <FormInputWrapper margin="0 0 10px 0">
                <div style={{ display: 'flex', margin: '0 -10px 0 -10px' }}>
                    <RegisterRadio
                        label="Individual"
                        price="$0.00"
                        name="accountType"
                        value="individual"
                    />
                    <RegisterRadio
                        label="Shop"
                        price="$150.00"
                        name="accountType"
                        value="shop"
                    />
                </div>

            </FormInputWrapper>
        </>
    )
}