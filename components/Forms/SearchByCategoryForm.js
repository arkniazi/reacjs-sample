
import { Formik, Form } from "formik"

import { Radio } from "../FormFields/Radio"
import { InputFlexSection } from "./sections/InputFlexSection"
import { FormInputWrapper } from '../FormFields/FormInputWrapper'
import { SelectFilter } from "../FormFields/SelectFilter"

import { ResponsiveSwitch } from "../Util/ResponsiveSwitch"


const categoryOptions = [
    { value: "surf", label: "Surf" },
    { value: "sup", label: "Sup" },
    { value: "kitesurf", label: "Kitesurf" },
    { value: "foil", label: "Foil" },
    { value: "wetsuit", label: "Wetsuit" },
]

export const DesktopCategorySelect = () => {
    return (
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
    )
}

export const MobileCategorySelect = () => {
    return (
        <SelectFilter
            options={categoryOptions}
            name="category"
            label="category"
            placeholder="Category"
            color="black"
            noLabel
        />
    )
}

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
                            <ResponsiveSwitch
                                desktopComponent={<DesktopCategorySelect />}
                                mobileComponent={<MobileCategorySelect />}
                                breakpointIndex={2}
                            />
                        </FormInputWrapper>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
