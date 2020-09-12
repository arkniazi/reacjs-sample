import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { TextInput } from "../FormFields/TextInput"
import { Submit } from "../FormFields/Submit"
import { FormInputWrapper } from '../FormFields/FormInputWrapper'
import TextLink from "../TextLink"
import { FlexContainer } from '../styles/Page'

export const LoginForm = () => {
    const InitialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
    })

    return (
        <div>
            <Formik
                initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormInputWrapper margin="0 0 10px 0">
                            <TextInput
                                label="email"
                                name="email"
                                type="text"
                                placeholder="Username or email address"
                                color="black"
                                altStyle
                                noLabel
                            />
                        </FormInputWrapper>
                        <FormInputWrapper margin="0 0 10px 0">
                            <TextInput
                                label="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                color="black"
                                altStyle
                                noLabel
                            />
                        </FormInputWrapper>

                        <FlexContainer dir="column" align="flex-end">
                            <TextLink
                                url="/forgot-password"
                                color="black"
                                size="sm"
                                text="Forgot Password?"
                            />
                        </FlexContainer>

                        <FormInputWrapper margin="27px 0 15px 0">
                            <Submit
                                type="Submit"
                                isSubmitting={isSubmitting}
                                text="Login"
                                fullWidth
                            />
                        </FormInputWrapper>

                    </Form>
                )}
            </Formik>
        </div>
    )
}