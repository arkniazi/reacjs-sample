import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Submit } from "../FormFields/Submit"
import { ProgressBarSection } from './sections/ProgressBarSection'
import { AnimatePresence } from 'framer-motion'
import * as Yup from "yup"

export const MultiStep = ({ children, initialValues, validation }) => {
    const [step, setStep] = useState(1)

    const totalSteps = children.length - 1;

    const handleSubmit = (values, { setSubmitting }) => {
        step <= totalSteps
            ? setStep(step + 1)
            : (
                alert(JSON.stringify(values, null, 2)),
                setSubmitting(false)
            )
    }

    return (
        <AnimatePresence>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={Yup.object(validation[step - 1])}
                onSubmit={(values, { setSubmitting, }) => handleSubmit(values, { setSubmitting })}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <ProgressBarSection step={step} totalSteps={totalSteps} />

                        {children.map(
                            (child, index) =>
                                step === (index + 1) &&
                                React.cloneElement(child, {
                                    errors: errors,
                                    touched: touched,
                                    setStep: setStep,
                                    values: values,
                                    step: step
                                })
                        )}

                        <Submit
                            type="Submit"
                            text={step <= totalSteps ? 'next' : 'Create Account'}
                            fullWidth
                            style={{ marginTop: "30px" }}
                        />

                        {step > totalSteps && (
                            <p style={{ textAlign: 'center', marginTop: '10px' }}>By creating an account you accept our terms</p>
                        )}
                    </Form>
                )}
            </Formik>
        </AnimatePresence >
    )
}