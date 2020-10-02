import { FormStepTitle } from './styled'
import { BackButtonSection } from '../../sections/BackButtonSection'
import { motion } from 'framer-motion'
export const FormThirdStep = ({ setStep, step, variants }) => {
    return (
        <motion.div>
            <BackButtonSection step={step} setStep={setStep} />
            <FormStepTitle style={{ marginBottom: '10px' }}>Payment options</FormStepTitle>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam orci nulla in magna egestas aliquam. Sit consectetur quam risus lacus diam. Ac nascetur tempor placerat aliquam proin diam quam consectetur aenean. Mauris sit nulla elementum sagittis.
            </p>
            <p>Bank Details: Ac nascetur tempor placerat aliquam proin diam quam consectetur aenean. Mauris sit nulla elementum sagittis. </p>
            <p>Verification: Accounts will be upgraded by second surf admin after they have been verified.</p>
        </motion.div>
    )
}