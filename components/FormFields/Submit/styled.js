import styled from "styled-components"
import { motion } from 'framer-motion';

export const ButtonStyled = styled(motion.button)`
    align-self: flex-end;
    font-size: ${(props) => props.theme.fontSizes.desktop.link.size};
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    padding: 13px 20px;
    width: ${(props) => (props.fullWidth ? '100%' : 'unset')};
    font-weight: bold;
    border: none;
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.orange};
`

export const SearchButtonStyled = styled(ButtonStyled)`
    background: none;
    width: unset;
    color: white;
    height: auto;
    display: flex;
    letter-spacing: -2px;
    justify-content: space-between;
    padding: 0;
    align-items: center;
    font-size: 29px;
    font-family: ${(props) => props.theme.font.heading};
    &:focus {
        outline: none;
    }
    &:hover {
        .icon-container {
            svg.search-icon {
                transform: translateX(30px);
                opacity: 0;
            }
            svg.arrow-icon {
                position: absolute;
                opacity: 1;
                transform: translateX(0px);
            }
        }
    }
    .icon-container {
        background-color: ${(props) => props.theme.colors.orange};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-left: 10px;
        border-radius: 2px;
        overflow: hidden;

        svg.arrow-icon {
            transition: opacity 0.3s ease-out, transform 0.45s ease-out;
            will-change: opacity;
            position: absolute;
            opacity: 0;
            transform: translateX(-20px);
        }
        svg.search-icon {
            transition: transform 0.3s ease, opacity 0.3s ease;
            will-change: transform;
            transform: translateX(0px);
            opacity: 1;
        }
    }
`