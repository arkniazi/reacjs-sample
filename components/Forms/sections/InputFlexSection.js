import { useRef, useState, useEffect } from "react"
import styled from "styled-components"

const InputFlexSectionStyled = styled.div`
    display: flex;
    justify-content: ${(props) => (props.justify ? props.justify : "")};
    flex-wrap: wrap;
    flex-direction: ${(props) => props.direction ? props.direction : 'row'};
`


export const LabelStyled = styled.label`
    display: ${(props) => (props.noLabel == true ? 'none' : 'block')};
`

export const InputFlexSection = (props) => {

    return (
        <>
            <LabelStyled noLabel={props.noLabel} className="label" htmlFor={props.name}>{props.name}</LabelStyled>

            <InputFlexSectionStyled justify={props.justify} direction={props.direction}>
                {props.children}
            </InputFlexSectionStyled>
        </>
    )
}
