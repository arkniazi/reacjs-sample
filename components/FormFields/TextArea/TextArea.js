import React, { useState } from "react"
import { useField } from "formik"
import styled from "styled-components"
import { TextAreaStyled, TextAreaContainer, WordCountStyled } from "./styled"
import { Error } from "../Error"

export const TextArea = ({ label, required, name, color, ...props }) => {
    const [field, meta, helpers] = useField(name)

    const onChange = (e) => {
        const newVal = e.currentTarget.value
        helpers.setValue(newVal)
    }

    const textArea = (
        <TextAreaStyled
            className="textarea "
            value={field.value}
            onChange={onChange}
            color={color}
            {...props}
        />
    )

    return (
        <div className={props.className}>
            {textArea}
            <Error meta={meta} />
        </div>
    )
}
