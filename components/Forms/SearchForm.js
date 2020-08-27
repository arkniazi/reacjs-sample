import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { FlexContainer } from "../styles/Page"
import { TextInput } from "../FormFields/TextInput"
import { Select } from "../FormFields/Select"
import { Submit } from "../FormFields/Submit"
import { Radio } from "../FormFields/Radio"
import { InputFlexSection } from "./sections/InputFlexSection"

import {
    radiusOptions,
    conditionOptions,
    minPriceOptions,
    maxPriceOptions,
    sellerTypeOptions,
} from "./SearchFormOptions"

export const SearchForm = () => {
    const InitialValues = {
        category: "surf",
        location: "",
        radius: "",
        condition: "",
        minPrice: "",
        maxPrice: "",
        keyword: "",
    }
    //const phoneRegExp = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/

    const validationSchema = Yup.object({
        location: Yup.string().required("Required"),
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
                    <Form>
                        <InputFlexSection justify="space-between">
                            <Radio
                                label="Surf"
                                name="category"
                                type="radio"
                                value="surf"
                            />
                            <Radio label="Sup" name="category" type="radio" value="sup" />
                            <Radio label="Kitesurf" name="category" type="radio" value="kitesurf" />
                            <Radio label="Foil" name="category" type="radio" value="foil" />
                            <Radio label="Wetsuit" name="category" type="radio" value="wetsuit" />
                        </InputFlexSection>

                        <TextInput
                            label="location"
                            name="location"
                            type="text"
                            placeholder="Location"
                            marginBottom="1.8rem"
                            altStyle
                            noLabel
                        />
                        <FlexContainer>
                            <Select
                                options={radiusOptions}
                                name="radius"
                                label="Radius"
                                fullWidth
                                placeholder="Radius"
                                defaultValue="Radius"
                            />
                            <Select
                                options={conditionOptions}
                                name="condition"
                                label="Condition"
                                placeholder="Condition"
                                fullWidth
                            />
                        </FlexContainer>

                        <FlexContainer>
                            <Select
                                options={minPriceOptions}
                                name="minPrice"
                                label="Min Price"
                                placeholder="Min Price"
                                fullWidth
                            />
                            <Select
                                options={maxPriceOptions}
                                name="maxPrice"
                                label="Max Price"
                                placeholder="Max Price"
                                fullWidth
                            />
                        </FlexContainer>
                        <Select
                            options={sellerTypeOptions}
                            name="sellerType"
                            label="Seller Type"
                            placeholder="Seller Type"
                        />
                        <TextInput
                            label="keyword"
                            name="keyword"
                            type="text"
                            placeholder="Keyword"
                            altStyle
                            noLabel
                        />
                        <FlexContainer dir="column">
                            <Submit
                                type="submit"
                                isSubmitting={isSubmitting}
                                text="Search"
                                searchStyle
                            />
                        </FlexContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
