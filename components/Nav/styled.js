import styled from "styled-components"
import { theme } from "../styles/theme"

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    .menu-wrapper,
    .link-wrapper {
        display: flex;
        align-items: center;
    }

    .menu-wrapper {
        justify-content: space-around;
        width: 100%;
    }
`

export const StyledNavItem = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-left: ${(props) =>
        props.border ? "1px solid " + props.theme.colors.lightGrey : ""};
    border-right: ${(props) =>
        props.border ? "1px solid " + props.theme.colors.lightGrey : ""};
    width: ${(props) => (props.setWidth ? "140px" : "")};
`
