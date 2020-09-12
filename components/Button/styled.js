import styled from "styled-components"
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
    background-color: ${(props) =>
        props.altTheme ? props.theme.colors.themeBlue : props.theme.colors.orange};
    display: flex;
    justify-content: center;
    position: relative;
    width: ${(props) => props.fullWidth ? '100%' : 'unset'};
    border: none;
    cursor:pointer;
    align-items: center;
    margin: ${(props) => (props.margin == "sm" ? "16px 0px" : "")};
    padding: ${(props) =>
        props.size === "medium"
            ? props.theme.buttons.paddingMedium
            : props.theme.buttons.paddingSmall};
    &:focus{
        outline: none;
    }
`

export const StyledBorderButton = styled(motion.button)`
    background-color: transparent;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    border: 1px solid ${(props) => props.theme.colors.themeBlue};
    cursor:pointer;
    align-items: center;
    margin: ${(props) => (props.margin == "sm" ? "16px 0px" : "")};
    padding: ${(props) =>
        props.size === "medium"
            ? props.theme.buttons.paddingMedium
            : props.theme.buttons.paddingSmall};
    &:focus{
        outline: none;
    }
`
