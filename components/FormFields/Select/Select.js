import React, { Children, useState } from "react"
import ReactSelect from "react-select"
import makeAnimated from "react-select/animated"
import { useField, useFormikContext } from "formik"
import _uniqueId from "lodash/uniqueId"

import styled, { withTheme } from "styled-components"
import { Error } from "../Error"
import { customStyles, customStylesInverse } from "./styled"

const SelectContainerStyled = styled.div`
    width: ${(props) => (props.fullWidth ? "100%" : "initial")};
    &:nth-child(1) {
        margin-right: ${(props) => (props.fullWidth ? "9px" : "initial")};
    }

    &:nth-child(2) {
        margin-left: ${(props) => (props.fullWidth ? "9px" : "initial")};
    }
`

const animatedComponents = makeAnimated()

export const Select = ({
    options,
    name,
    label,
    required,
    defaultValue,
    noLabel,
    value,
    className,
    error,
    style,
    fullWidth,
    submitOnChange,
    freeText,
    ...props
}) => {
    //eslint-disable-next-line
    const [id] = useState(_uniqueId("unique-"))
    const [field, meta] = useField(name)
    const { setFieldValue, setFieldTouched, submitForm } = useFormikContext()

    const handleOnChange = (option) => {
        setFieldValue(name, option ? option.value : "")
        // submitForm()
        // console.log(name)
    }

    if (!value && freeText) {
        value = { label: field.value, value: field.value }
    }

    let customStyleObj = style === 'inverse' ? customStylesInverse : customStyles


    return (
        <SelectContainerStyled className={className} fullWidth={fullWidth}>
            <ReactSelect
                styles={customStyleObj}
                name={name}
                closeMenuOnSelect={true}
                components={{ animatedComponents, IndicatorSeparator: () => null }}
                onChange={handleOnChange}
                defaultValue={defaultValue}
                value={value}
                instanceId={id}
                onBlur={() => setFieldTouched(name, true)}
                options={
                    freeText && options
                        ? options.map((option) => ({ value: option, label: option }))
                        : options
                }
                defaultValue={
                    defaultValue && freeText
                        ? defaultValue.map((text) => ({ value: text, label: text }))
                        : defaultValue
                }
                {...props}
            />
        </SelectContainerStyled>
    )
}
