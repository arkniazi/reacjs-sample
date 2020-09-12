import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Submit } from "../FormFields/Submit"
import * as Yup from "yup"

import { FormFirstStep, FormSecondStep, FormConfirm } from './steps/register'


export const RegisterMultiStep = () => {
    const [step, setStep] = useState(1)

    const totalSteps = 2;

    const InitialValues = {
        accountType: "",
        address: "",
        school: ""
    }

    // const validationSchema = Yup.object({
    //     name: Yup.string().required("Required"),
    //     email: Yup.string().required("Required"),
    // })

    const renderStep = (step, values, errors, touched) => {
        switch (step) {
            case 1:
                return <FormFirstStep errors={errors} touched={touched} />;
            case 2:
                return <FormSecondStep errors={errors} touched={touched} />;
            case 3:
                return <FormConfirm values={values} />;
            default:
                return <FormFirstStep errors={errors} touched={touched} />;
        }
    };

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            step <= totalSteps
                ? setStep(step + 1)
                : (
                    alert(JSON.stringify(values, null, 2)),
                    setSubmitting(false)
                )
        }, 400)
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={InitialValues}
                // validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, }) => handleSubmit(values, { setSubmitting })}

            >
                {({ values, errors, touched }) => (
                    <Form>

                        {renderStep(step, values, errors, touched)}


                        <Submit
                            type="Submit"
                            text={step <= totalSteps ? 'next' : 'submit'}
                            fullWidth
                        />
                    </Form>
                )}
            </Formik>
        </div >
    )
}