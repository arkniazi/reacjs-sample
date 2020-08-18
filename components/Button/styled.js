import styled from "styled-components"
import { theme } from "../styles/theme"

export const StyledButton = styled.div`
    background-color: ${(props) => props.theme.colors.orange};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${(props) => (props.margin == "sm" ? "16px 0px" : "")};
    padding: ${(props) =>
        props.size === "medium"
            ? props.theme.buttons.paddingMedium
            : props.theme.buttons.paddingSmall};
`
