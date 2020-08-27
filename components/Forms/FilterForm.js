import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { FlexContainer } from "../styles/Page"
import { TextInput } from "../FormFields/TextInput"
import { SelectFilter } from "../FormFields/SelectFilter"
import { Submit } from "../FormFields/Submit"

import { RadioCategorySection } from "./sections/RadioCategorySection"

import {
    categoryOptions,
    maxPriceOptions,
    minPriceOptions,
} from "./FilterFormOptions"

export const FilterForm = () => {
    const InitialValues = {
        category: "",
        location: "",
    }

    const validationSchema = Yup.object({
        location: Yup.string().required("Required"),
    })

    return (
        <div style={{ background: "blue" }}>
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
                        <SelectFilter
                            options={categoryOptions}
                            name="category"
                            label="Filter by categories"
                            placeholder="Category"
                        />
                        <TextInput
                            label="location"
                            name="location"
                            type="text"
                            placeholder="Location"
                            color="black"
                        />
                        <FlexContainer>
                            <SelectFilter
                                options={minPriceOptions}
                                name="minPrice"
                                label="Min Price"
                                placeholder="Min Price"
                                color="black"
                                fullWidth
                            />
                            <SelectFilter
                                options={maxPriceOptions}
                                name="maxPrice"
                                label="Max Price"
                                placeholder="Max Price"
                                color="black"
                                fullWidth
                            />
                        </FlexContainer>
                        {/* <FlexContainer>
                            <Select
                                options={radiusOptions}
                                name="radius"
                                label="Radius"
                                fullWidth
                                placeholder="Radius"
                                defaultValue="Radius"
                                color="black"
                            />
                            <Select
                                options={conditionOptions}
                                name="condition"
                                label="Condition"
                                placeholder="Condition"
                                fullWidth
                                color="black"
                            />
                        </FlexContainer> */}

                        <FlexContainer dir="column">
                            <Submit
                                type="submit"
                                isSubmitting={isSubmitting}
                                text="Search"
                            />
                        </FlexContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
