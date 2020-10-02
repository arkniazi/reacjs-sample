import React from "react"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput } from "../../FormFields/TextInput"
import { TextArea } from "../../FormFields/TextArea"
import { SelectFilter } from "../../FormFields/SelectFilter"
import { Gallery } from "../../FormFields/ImageUpload"
import { Submit } from "../../FormFields/Submit"
import { FlexContainer } from "../../styles/Page"
import { FormInputWrapper } from '../../FormFields/FormInputWrapper'


export const EditSurfboardForm = ({ itemToEdit }) => {

    const sizeOptions = itemToEdit.variations;

    const InitialValues = {
        name: itemToEdit.title,
        brand: "",
        model: "",
        location: "",
        description: "",
        size: "",
        condition: "",
        length: "",
        width: "",
        thickness: "",
        finSetup: "",
        finSystem: "",
        construction: "",
        boardType: "",
        price: "",
        image: ""
    }

    // const validationSchema = Yup.object({
    //     name: Yup.string()
    //         .max(20, "Must be 20 characters or less")
    //         .required("Required"),
    //     email: Yup.string().email("Invalid email address").required("Required"),
    //     phone: Yup.string().required("Required"),
    // })

    return (
        <div>
            <Formik
                initialValues={InitialValues}
                // validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <FormInputWrapper margin="0 0 10px 0">
                            <FlexContainer>
                                <TextInput
                                    label="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                                <TextInput
                                    label="brand"
                                    name="brand"
                                    type="text"
                                    placeholder="Brand"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 10px 0">
                            <FlexContainer>
                                <TextInput
                                    label="model"
                                    name="model"
                                    type="text"
                                    placeholder="Model"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                                <TextInput
                                    label="location"
                                    name="location"
                                    type="text"
                                    placeholder="Location"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 10px 0">
                            <TextArea
                                label="description"
                                name="description"
                                type="textarea"
                                placeholder="Description"
                                noLabel
                                altStyle
                                color='black'
                            />
                        </FormInputWrapper>


                        <FormInputWrapper margin="0 0 10px 0">
                            <FlexContainer>
                                <SelectFilter
                                    options={sizeOptions}
                                    name="size"
                                    label="size"
                                    placeholder="Size"
                                    color="black"
                                    fullWidth
                                    noLabel
                                />
                                <TextInput
                                    label="condition"
                                    name="condition"
                                    type="text"
                                    placeholder="Condition"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 10px 0">
                            <FlexContainer>
                                <TextInput
                                    label="length"
                                    name="length"
                                    type="text"
                                    placeholder="Length"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                                <TextInput
                                    label="width"
                                    name="width"
                                    type="text"
                                    placeholder="Width"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                                <TextInput
                                    label="thickness"
                                    name="thickness"
                                    type="text"
                                    placeholder="Thickness"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 10px 0">
                            <FlexContainer>
                                <TextInput
                                    label="finSetup"
                                    name="finSetup"
                                    type="text"
                                    placeholder="Fin Setup"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                                <TextInput
                                    label="finSystem"
                                    name="finSystem"
                                    type="text"
                                    placeholder="Fin System"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 10px 0">
                            <FlexContainer>
                                <TextInput
                                    label="construction"
                                    name="construction"
                                    type="text"
                                    placeholder="Construction"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                                <TextInput
                                    label="boardType"
                                    name="boardType"
                                    type="text"
                                    placeholder="Board Type"
                                    fullWidth
                                    altStyle
                                    noLabel
                                    color='black'
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper margin="0 0 10px 0">
                            <FlexContainer>
                                <TextInput
                                    label="price"
                                    name="price"
                                    type="text"
                                    placeholder="Price"
                                    fullWidth
                                    noLabel
                                    altStyle
                                    color='black'
                                />
                            </FlexContainer>
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <Gallery
                                label='Product Images'
                                images={InitialValues.images}
                                name='images'
                                setFieldValue={setFieldValue}
                                className='col xl-12'
                                max={6}
                            />
                        </FormInputWrapper>


                        <FlexContainer dir="column">
                            <Submit
                                type="submit"
                                isSubmitting={isSubmitting}
                                text="Update Post"
                            />
                        </FlexContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
