import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

export const MobileMenuStyled = styled(motion.nav)`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: ${(props) => props.theme.colors.themeBlue};
    padding: 30px;
    ul{
        list-style-type: none;
        padding: 0;
        margin: 2rem 0 0 0;
    }

    li{
        padding:0;
        margin: 0;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    a{
        text-decoration: none;
        color: white;
        border-bottom: 2px solid transparent;
        transition: border .3s ease;

        &:hover{
            border-bottom: 2px solid white;
        }
    }
`
export const Background = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    background: ${(props) => props.theme.colors.darkBlue};
`