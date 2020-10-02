import { FormStepTitle } from './styled'
import TextLink from '../../../TextLink'
import { ConfirmCTAStyled } from './styled'
import { BackButtonSection } from '../../sections/BackButtonSection'
import { motion } from 'framer-motion'

export const FormConfirm = ({ setStep, step, variants }) => {
    return (
        <motion.div>
            <BackButtonSection step={step} setStep={setStep} />


            <FormStepTitle style={{ marginBottom: '10px' }}>Terms of Service</FormStepTitle>
            <p style={{ margin: '0 0 18px 0' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam orci nulla in magna egestas aliquam. Sit consectetur quam risus lacus diam. Ac nascetur tempor placerat aliquam proin diam quam consectetur aenean. Mauris sit nulla elementum sagittis.
            </p>
            <ConfirmCTAStyled>
                <TextLink
                    color="black"
                    text="Privacy Policy"
                    url="/privacy-policy"
                />
                <TextLink
                    color="black"
                    text="Terms of Service"
                    url="/terms-conditions"
                />
            </ConfirmCTAStyled>
        </motion.div>
    )

}