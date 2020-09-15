import React, { useState } from 'react';
import styled from "styled-components"
import { AnimatePresence, motion } from 'framer-motion'
import { Minus } from "../Icons";
import { FlexContainer } from "../styles/Page"

const variants = {
    open: {
        opacity: 1, height: 'auto'
    },
    close: {
        opacity: 0, height: 0
    }
}

const ArticleStyled = styled.article`
    padding: 20px 0;

    &.accordion-border-bottom{
         border-bottom: 3px solid black;
    }
`


export const MenuAccordion = ({ children, className }) => {
    const [isToggled, setToggled] = useState(false)
    return (
        <ArticleStyled className={className} onClick={() => setToggled(prevState => !prevState)}>
            {children[0]}
            <AnimatePresence>
                {isToggled && (
                    <motion.div
                        variants={variants}
                        style={{ overflow: 'hidden' }}
                        initial="close"
                        animate="open"
                        exit="close"
                    >
                        {children[1]}
                    </motion.div>
                )}
            </AnimatePresence>
        </ArticleStyled>

    )
}
