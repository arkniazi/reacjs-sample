import { useState } from "react"
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { FlexContainer } from "../styles/Page"
import { TextInput } from "../FormFields/TextInput"
import { Select } from "../FormFields/Select"
import { Submit } from "../FormFields/Submit"
import { Radio } from "../FormFields/Radio"
import { InputFlexSection } from "./sections/InputFlexSection"
import { FormInputWrapper } from '../FormFields/FormInputWrapper'

import {
    radiusOptions,
    conditionOptions,
    minPriceOptions,
    maxPriceOptions,
    sellerTypeOptions,
} from "./SearchFormOptions"


const SearchFormStyled = styled.div`
    margin-top: 50px;

    ${(props) => props.theme.mediaQueries.lg} {
        margin-top: 0;
    }
    .searchForm__select{
        &:first-child{
            margin-bottom: 15px;
            ${(props) => props.theme.mediaQueries.lg} {
                margin-bottom: 0;
            }
        }
    }

    .searchForm__category{
        margin-bottom: 30px;
    }
`

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
        <SearchFormStyled>
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
                        <FormInputWrapper margin="0 0 30px 0" className="searchForm__category">
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
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 20px 0">
                            <TextInput
                                label="location"
                                name="location"
                                type="text"
                                placeholder="Location"
                                marginBottom="1.8rem"
                                altStyle
                                noLabel
                            />
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 20px 0">
                            <FlexContainer>

                                <Select
                                    options={radiusOptions}
                                    name="radius"
                                    label="Radius"
                                    fullWidth
                                    placeholder="Radius"
                                    defaultValue="Radius"
                                    className="searchForm__select"
                                />

                                <Select
                                    options={conditionOptions}
                                    name="condition"
                                    label="Condition"
                                    placeholder="Condition"
                                    fullWidth
                                    className="searchForm__select"
                                />

                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 20px 0">
                            <FlexContainer>

                                <Select
                                    options={minPriceOptions}
                                    name="minPrice"
                                    label="Min Price"
                                    placeholder="Min Price"
                                    fullWidth
                                    className="searchForm__select"
                                />

                                <Select
                                    options={maxPriceOptions}
                                    name="maxPrice"
                                    label="Max Price"
                                    placeholder="Max Price"
                                    fullWidth
                                    className="searchForm__select"
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 20px 0">
                            <Select
                                options={sellerTypeOptions}
                                name="sellerType"
                                label="Seller Type"
                                placeholder="Seller Type"
                            />
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 20px 0">
                            <TextInput
                                label="keyword"
                                name="keyword"
                                type="text"
                                placeholder="Keyword"
                                altStyle
                                noLabel
                            />
                        </FormInputWrapper>


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
        </SearchFormStyled>
    )
}
