import { useFormikContext, Formik, Form, FieldArray } from 'formik'
import styled from "styled-components"
import * as Yup from "yup"
import { FlexContainer } from "../styles/Page"
import { TextInput } from "../FormFields/TextInput"
import { InputFlexSection } from './sections/InputFlexSection'
import { RadioBoxed } from "../FormFields/Radio/RadioBoxed"
import { SelectFilter } from "../FormFields/SelectFilter"
import { Submit } from "../FormFields/Submit"
import { Checkbox } from "../FormFields/Checkbox"
import { FilterTag } from "../FormFields/FilterTag"
import { FormInputWrapper } from '../FormFields/FormInputWrapper'

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
                {({ isSubmitting, values }) => (
                    <>

                        <Form>

                            <InputFlexSection>
                                {values.category && values.category.length > 0 && (

                                    <FilterTag>
                                        {values.category}
                                    </FilterTag>

                                )}
                                {values.location && values.location.length > 0 && (

                                    <FilterTag>{values.location}</FilterTag>
                                )}
                                {values.radius && values.radius.length > 0 && (

                                    <FilterTag>{values.radius}km</FilterTag>
                                )}
                                {values.minPrice && values.minPrice.length > 0 && (

                                    <FilterTag>{values.minPrice}</FilterTag>
                                )}
                                {values.maxPrice && values.maxPrice.length > 0 && (

                                    <FilterTag>{values.maxPrice}</FilterTag>
                                )}
                                {values.condition && values.condition.length > 0 && (
                                    values.condition.map((condition, index) => (
                                        <FilterTag key={index}>
                                            {condition}
                                        </FilterTag>
                                    ))
                                )}
                                {values.sellerType && values.sellerType.length > 0 && (
                                    values.sellerType.map((sellerType, index) => (
                                        <FilterTag key={index}>{sellerType}</FilterTag>
                                    ))
                                )}

                            </InputFlexSection>

                            <FormInputWrapper margin="0 0 40px 0">
                                <SelectFilter
                                    options={categoryOptions}
                                    name="category"
                                    label="Filter by categories"
                                    placeholder="Category"
                                />
                            </FormInputWrapper>

                            <FormInputWrapper margin="0 0 40px 0">
                                <TextInput
                                    label="location"
                                    name="location"
                                    type="text"
                                    placeholder="Location"
                                    color="black"
                                    altStyle
                                />
                            </FormInputWrapper>

                            <FormInputWrapper margin="0 0 40px 0">
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
                            </FormInputWrapper>

                            <FormInputWrapper margin="0 0 40px 0">
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
                            </FormInputWrapper>

                            <FormInputWrapper margin="0 0 40px 0">
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
                            </FormInputWrapper>

                            <FormInputWrapper margin="0 0 40px 0">
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
                            </FormInputWrapper>

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
