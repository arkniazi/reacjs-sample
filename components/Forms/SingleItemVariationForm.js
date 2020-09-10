
import { Formik, Form } from "formik"
import { Select } from "../FormFields/Select"
import { FormInputWrapper } from '../FormFields/FormInputWrapper'

export const SingleItemVariationForm = ({ options, handleSetItemSize }) => {
    const InitialValues = {
        size: "",
    }

    const fieldName = 'size';

    return (
        <div>
            <Formik
                initialValues={InitialValues}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleSetItemSize(values["size"])
                        setSubmitting(false)
                    }, 100)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormInputWrapper margin="0 0 40px 0">
                            <Select
                                options={options}
                                name={fieldName}
                                label={fieldName}
                                fullWidth
                                placeholder="Select Size"
                                defaultValue="Select Size"
                                style="inverse"
                                submitOnChange
                            />
                        </FormInputWrapper>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
