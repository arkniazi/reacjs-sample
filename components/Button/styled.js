import styled from "styled-components"
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
    background-color: ${(props) =>
        props.altTheme ? props.theme.colors.themeBlue : props.theme.colors.orange};
    display: flex;
    justify-content: center;
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
