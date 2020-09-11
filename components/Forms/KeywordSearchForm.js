import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { KeywordTextInput } from "../FormFields/KeywordTextInput"
import { KeywordSubmit } from "../FormFields/KeywordSubmit"
import styled from "styled-components"

const FormStyled = styled.div`
    position: relative;
`

export const KeywordSearchForm = () => {
    const InitialValues = {
        keyword: "",
    }

    const validationSchema = Yup.object({
        keyword: Yup.string().required("Required"),
    })

    return (
        <div>
            <Formik
                initialValues={InitialValues}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ isSubmitting }) => (
                    <Form style={{ position: 'relative' }}>
                        <KeywordTextInput
                            label="keyword"
                            name="keyword"
                            type="text"
                            altStyle
                            noLabel
                        />

                        <KeywordSubmit
                            type="submit"
                            isSubmitting={isSubmitting}
                            text="Search"
                            searchStyle
                        />

                    </Form>
                )}
            </Formik>
        </div>
    )
}
