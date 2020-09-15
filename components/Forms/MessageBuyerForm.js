import React from "react"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { TextArea } from "../FormFields/TextArea"
import { Submit } from "../FormFields/Submit"
import { FlexContainer } from "../styles/Page"
import TextLink from "../TextLink"
import { PhoneIcon } from '../Icons'
import { FormInputWrapper } from '../FormFields/FormInputWrapper'


export const MessageBuyerForm = () => {
    const InitialValues = {
        message: ""
    }


    const validationSchema = Yup.object({
        message: Yup.string().required("Required"),
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
                        <FormInputWrapper margin="0 0 20px 0">
                            <TextArea
                                label="Your Message"
                                name="message"
                                type="textarea"
                                placeholder="Type your message"
                                color="black"
                            />
                        </FormInputWrapper>

                        <FlexContainer dir="row" justify="flex-end">
                            <Submit
                                type="submit"
                                isSubmitting={isSubmitting}
                                text="Send"
                            />
                        </FlexContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
