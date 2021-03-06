import React, { Children, useState } from "react"
import ReactSelect from "react-select"
import makeAnimated from "react-select/animated"
import { useField, useFormikContext } from "formik"
import _uniqueId from "lodash/uniqueId"

import styled, { withTheme } from "styled-components"
import { Error } from "../Error"
import { customStyles } from "./styled"

const SelectFilterContainerStyled = styled.div`
    width: ${(props) => (props.fullWidth ? "100%" : "initial")};
    &:nth-child(1) {
        margin-right: ${(props) => (props.fullWidth ? "9px" : "initial")};
    }

    &:nth-child(2) {
        margin-left: ${(props) => (props.fullWidth ? "9px" : "initial")};
    }
`

const LabelStyled = styled.label`
    display: ${(props) => (props.noLabel == true ? 'none' : 'block')};
`

const animatedComponents = makeAnimated()

export const SelectFilter = ({
    options,
    name,
    label,
    required,
    defaultValue,
    noLabel,
    value,
    className,
    error,
    fullWidth,
    freeText,
    ...props
}) => {
    //eslint-disable-next-line
    const [id] = useState(_uniqueId("unique-"))
    const [field, meta] = useField(name)
    const { setFieldValue, setFieldTouched } = useFormikContext()

    const handleOnChange = (option) => {
        setFieldValue(name, option ? option.value : "")
    }

    if (!value && freeText) {
        value = { label: field.value, value: field.value }
    }

    return (
        <SelectFilterContainerStyled className={className} fullWidth={fullWidth}>
            <LabelStyled className="label" htmlFor={name} noLabel={noLabel}>
                {label}
            </LabelStyled>
            <ReactSelect
                styles={customStyles}
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
        </SelectFilterContainerStyled>
    )
}
