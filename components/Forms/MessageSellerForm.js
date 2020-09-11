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


const LinkWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-left: 15px;
    .phone-icon{
        margin-right: 15px;
        transform: rotate(136deg);
        transition: transform .45s ease;
        will-change: transform;
    }

    &:hover{
        .phone-icon{
            transform: rotate(0deg)
        }
    }
`

export const MessageSellerForm = () => {
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
                                placeholder="Write a private message"
                                color="black"
                            />
                        </FormInputWrapper>

                        <FlexContainer dir="row">
                            <Submit
                                type="submit"
                                isSubmitting={isSubmitting}
                                text="Message Seller"
                            />
                            <LinkWrapperStyled>
                                <PhoneIcon className="phone-icon" />
                                <TextLink
                                    url="tel:0401033034"
                                    color="black"
                                    text="0401033034"
                                />
                            </LinkWrapperStyled>
                        </FlexContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
