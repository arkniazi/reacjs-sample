import React, { useState } from 'react';
import styled from "styled-components"
import { AnimatePresence, motion } from 'framer-motion'
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
    const [isToggled, setToggled] = useState(false)
    return (
        <article >
            {label ? (
                <label className="label" htmlFor={name ? name : label} onClick={() => setToggled(prevState => !prevState)}>{label}</label>
            ) : heading ? (
                <h4 className="label" onClick={() => setToggled(prevState => !prevState)}>{heading}</h4>
            ) : ''}
            <AnimatePresence>
                {isToggled && (
                    <motion.div
                        style={{ overflow: 'hidden' }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </article>

    )
}
