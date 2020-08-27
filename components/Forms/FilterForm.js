import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { FlexContainer } from "../styles/Page"
import { TextInput } from "../FormFields/TextInput"
import { InputFlexSection } from './sections/InputFlexSection'
import { RadioBoxed } from "../FormFields/Radio/RadioBoxed"
import { SelectFilter } from "../FormFields/SelectFilter"
import { Submit } from "../FormFields/Submit"
import { Checkbox } from "../FormFields/Checkbox"
import {
    categoryOptions,
    maxPriceOptions,
    minPriceOptions,
} from "./FilterFormOptions"

export const FilterForm = () => {
    const InitialValues = {
        category: "",
        location: "",
        radius: "",
        minPrice: "",
        maxPrice: "",
        condition: "",
        sellerType: "",
    }

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
                    <>

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
                                altStyle
                            />

                            <InputFlexSection label name="radius">
                                <RadioBoxed
                                    gridBasis="25%"
                                    label="5km"
                                    name="radius"
                                    type="radio"
                                    value="5"
                                />
                                <RadioBoxed gridBasis="25%" label="10km" name="radius" value="10" />
                                <RadioBoxed gridBasis="25%" label="20km" name="radius" value="20" />
                                <RadioBoxed gridBasis="25%" label="30km" name="radius" value="30" />
                                <RadioBoxed gridBasis="25%" label="40km" name="radius" value="40" />
                                <RadioBoxed gridBasis="25%" label="50km" name="radius" value="50" />
                                <RadioBoxed gridBasis="25%" label="100km" name="radius" value="100" />
                                <RadioBoxed gridBasis="25%" label="150km" name="radius" value="150" />
                                <RadioBoxed gridBasis="25%" label="200km" name="radius" value="200" />
                                <RadioBoxed gridBasis="25%" label="250km" name="radius" value="250" />
                            </InputFlexSection>

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

                            <InputFlexSection label name="condition" direction="column">
                                <Checkbox
                                    label="New"
                                    name="condition"
                                    value="new"
                                />
                                <Checkbox
                                    label="Shop Special"
                                    name="condition"
                                    value="special"
                                />
                                <Checkbox
                                    label="Used"
                                    name="condition"
                                    value="used"
                                />
                            </InputFlexSection>

                            <InputFlexSection label name="seller type" direction="column">
                                <Checkbox
                                    label="Private"
                                    name="sellerType"
                                    value="private"
                                />
                                <Checkbox
                                    label="Shop"
                                    name="sellerType"
                                    value="shop"
                                />
                            </InputFlexSection>

                            <FlexContainer dir="column">
                                <Submit
                                    type="submit"
                                    isSubmitting={isSubmitting}
                                    text="Search"
                                />
                            </FlexContainer>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    )
}
