
import { Formik, Form } from "formik"
import { FlexContainer } from "../styles/Page"

import { Submit } from "../FormFields/Submit"
import { Radio } from "../FormFields/Radio"
import { InputFlexSection } from "./sections/InputFlexSection"
import { FormInputWrapper } from '../FormFields/FormInputWrapper'


export const SearchByCategoryForm = () => {
    const InitialValues = {
        category: "",
    }

    return (
        <div>
            <Formik
                initialValues={InitialValues}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormInputWrapper margin="0 0 30px 0">
                            <InputFlexSection justify="space-between">
                                <Radio
                                    label="Surf"
                                    name="category"
                                    type="radio"
                                    value="surf"
                                    color="black"
                                    submitOnChange
                                />
                                <Radio label="Sup" name="category" type="radio" value="sup" color="black" submitOnChange />
                                <Radio label="Kitesurf" name="category" type="radio" value="kitesurf" color="black" submitOnChange />
                                <Radio label="Foil" name="category" type="radio" value="foil" color="black" submitOnChange />
                                <Radio label="Wetsuit" name="category" type="radio" value="wetsuit" color="black" submitOnChange />
                            </InputFlexSection>
                        </FormInputWrapper>

                        {/* <FlexContainer dir="column">
                            <Submit
                                type="submit"
                                isSubmitting={isSubmitting}
                                text="Search"
                                searchStyle
                            />
                        </FlexContainer> */}
                    </Form>
                )}
            </Formik>
        </div>
    )
}
