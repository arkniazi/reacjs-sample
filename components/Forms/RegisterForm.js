import { FormFirstStep, FormSecondStep, FormThirdStep, FormConfirm } from './steps/register'
import { MultiStep } from "./MultiStep"
import * as Yup from "yup"

export const RegisterForm = () => {

    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        username: "",
        password: "",
        confirmPass: "",
        postcode: "",
        state: "",
        accountType: "",
        address: "",
        phone: ""
    }

    const validation = [
        {
            fname: Yup.string().required("Required"),
            lname: Yup.string().required("Required"),
            email: Yup.string().required("Required"),
            username: Yup.string().required("Required"),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPass: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        },
        {
            accountType: Yup.string().required("Required")
        },
        {},
        {}
    ]

    return (
        <>
            <MultiStep initialValues={initialValues} validation={validation}>
                <FormFirstStep />
                <FormSecondStep />
                <FormThirdStep />
                <FormConfirm />
            </MultiStep>
        </>
    )
}