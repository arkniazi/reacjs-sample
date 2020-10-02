
import { FormInputWrapper } from "../../../FormFields/FormInputWrapper"
import { RegisterRadio } from "../../../FormFields/RegisterRadio"
import { FormStepTitle } from './styled'
import { BackButtonSection } from '../../sections/BackButtonSection'
import { motion } from 'framer-motion'

export const FormSecondStep = ({ setStep, step, variants }) => {
    return (
        <motion.div>
            <BackButtonSection step={step} setStep={setStep} />
            <FormStepTitle>Select Account Type</FormStepTitle>
            <p style={{ marginBottom: '25px' }}>
                Users wanting to create a shop account are encouraged to get in contact with the 2NDSURF Team in advanced. Shop accounts require verification before they are accepted and created.
            </p>
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
        </motion.div>
    )
}