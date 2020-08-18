import { useRef, useState, useEffect } from "react"
import { Radio } from "../../FormFields/Radio"
import styled from "styled-components"

const RadioContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const RadioCategorySection = () => {
    const defaultInput = useRef()

    useEffect(() => {
        defaultInput.current && (defaultInput.current.checked = true)
    })

    return (
        <RadioContainerStyled>
            <Radio
                inputRef={defaultInput}
                label="Surf"
                name="category"
                type="radio"
                value="surf"
            />
            <Radio label="Sup" name="category" type="radio" value="sup" />
            <Radio label="Kitesurf" name="category" type="radio" value="kitesurf" />
            <Radio label="Foil" name="category" type="radio" value="foil" />
            <Radio label="Wetsuit" name="category" type="radio" value="wetsuit" />
        </RadioContainerStyled>
    )
}
