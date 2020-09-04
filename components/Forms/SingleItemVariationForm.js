
import { Formik, Form } from "formik"
import { Select } from "../FormFields/Select"
import { Submit } from "../FormFields/Submit"

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
                    </Form>
                )}
            </Formik>
        </div>
    )
}
