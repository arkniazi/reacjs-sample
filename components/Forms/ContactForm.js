import React from "react"
React.useLayoutEffect = React.useEffect

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { TextInput } from "../FormFields/TextInput"
import { TextArea } from "../FormFields/TextArea"
import { Submit } from "../FormFields/Submit"
import { FlexContainer } from "../styles/Page"
export const ContactForm = () => {
    const InitialValues = {
        email: "",
        password: "",
    }

    //const phoneRegExp = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/

    const validationSchema = Yup.object({
        name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string().required("Required"),
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
                        <TextInput
                            label="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                        />
                        <FlexContainer>
                            <TextInput
                                label="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                fullWidth
                            />
                            <TextInput
                                label="phone"
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                fullWidth
                            />
                        </FlexContainer>
                        <FlexContainer>
                            <TextInput
                                label="company"
                                name="company"
                                type="text"
                                placeholder="Company"
                                fullWidth
                            />
                            <TextInput
                                label="location"
                                name="location"
                                type="text"
                                placeholder="Location"
                                fullWidth
                            />
                        </FlexContainer>
                        <TextInput
                            label="subject"
                            name="subject"
                            type="text"
                            placeholder="Subject"
                        />

                        <TextArea
                            label="Your Message"
                            name="message"
                            type="textarea"
                            placeholder="Your Message"
                        />
                        <FlexContainer dir="column">
                            <Submit
                                type="submit"
                                isSubmitting={isSubmitting}
                                text="Submit"
                            />
                        </FlexContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}