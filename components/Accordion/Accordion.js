import React, { useState } from 'react';
import styled from "styled-components"
import { Minus } from "../Icons";
import { FlexContainer } from "../styles/Page"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemState,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const AccordionStyled = styled(Accordion)`
    margin-bottom: 30px;
`

const AccordionButtonStyled = styled(AccordionItemButton)`
    padding-bottom: 20px;
    cursor: pointer;
    &:focus{
        outline: none;
    }

    label{
        cursor: pointer;
    }
`

const PlusIconStyled = styled.div`
    font-size: 28px;
    display: inline-block;
    position: absolute;
    right: 5px;
    top: -8px;
    font-weight: bold;
    
`


export const AccordionComponent = ({ label, name, heading, children }) => {

    return (
        <AccordionStyled allowZeroExpanded>
            <>

                <AccordionItem>

                    <AccordionItemHeading>
                        <AccordionButtonStyled onClick={(prevState) => setIsOpen(!prevState)}>

                            <div style={{ position: 'relative' }}>
                                {label ? (
                                    <label className="label" htmlFor={name ? name : label}>{label}</label>
                                ) : heading ? (
                                    <h4 className="label">{heading}</h4>
                                ) : ''}

                                <AccordionItemState>
                                    {({ expanded }) => (expanded
                                        ? <PlusIconStyled>-</PlusIconStyled>
                                        : <PlusIconStyled>+</PlusIconStyled>
                                    )}
                                </AccordionItemState>
                            </div>


                        </AccordionButtonStyled>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                        {children}
                    </AccordionItemPanel>

                </AccordionItem>
            </>
        </AccordionStyled>
    )
}
