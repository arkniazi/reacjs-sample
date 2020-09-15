import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MobileMenuStyled, Background } from './styled'



const variants = {
    open: {
        x: 0,
    },
    close: {
        x: "100%",
        transition: {
            delay: 0.15
        }
    }
}
const background = {
    open: {
        opacity: 1,
    },
    close: {
        opacity: 0,
        transition: {
            delay: 0.15
        }
    }
}

const ulVariants = {
    open: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            when: "afterChildren"
        }
    },
    close: {
    },
}

const linksVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    close: {
        y: -20,
        opacity: 0,
    },
}





const links = ["one", "two", "three", "four"];


export const MobileMenu = ({ isNavOpen, setNavState }) => {
    return (
        <MobileMenuStyled
            variants={variants}
            initial="close"
            animate={isNavOpen ? 'open' : 'close'}
            transition={{ damping: 300 }}

        >
            <Background variants={background}>
                <button onClick={() => setNavState(false)}>close</button>
                <motion.ul variants={ulVariants}>

                    {links.map(link => (
                        <motion.li variants={linksVariants} key={link}>
                            <a href="#">{link}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            </Background>
        </MobileMenuStyled>
    )
}
