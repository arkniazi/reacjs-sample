import { useRef, useState, useEffect } from "react"
import styled from "styled-components"

const InputFlexSectionStyled = styled.div`
    display: flex;
    justify-content: ${(props) => (props.justify ? props.justify : "")};
    flex-wrap: wrap;
    flex-direction: ${(props) => props.direction ? props.direction : 'row'};
`

export const InputFlexSection = (props) => {

    return (
        <>
            {props.label && <label className="label" htmlFor={props.name}>{props.name}</label>}

            <InputFlexSectionStyled justify={props.justify} direction={props.direction}>
                {props.children}
            </InputFlexSectionStyled>
        </>
    )
}
