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
    border-left: ${(props) =>
        props.border ? "1px solid " + props.theme.colors.lightGrey : ""};
    border-right: ${(props) =>
        props.border ? "1px solid " + props.theme.colors.lightGrey : ""};
    width: ${(props) => (props.setWidth ? "140px" : "")};

    &:hover {
        .styledNavItem__icon {
            transform: translateY(30px);
        }
    }

    .styledNavItem {
        &__icon {
            margin-left: 16px;
            transform: translateY(0px);
            transition: transform 0.3s ease-out;
            will-change: transform;
        }
    }
`

export const DropdownStyled = styled.div`
    position: absolute;
    padding: 50px 175px;
    left: 0;
    opacity: 0;
    min-height: 469px;
    transition: opacity 0.3s ease-out;
    top: 85px;
    width: 100%;
    border-top: ${(props) => (props.type === "blue" ? "none" : "2px solid black")};
    background: ${(props) =>
        props.type === "blue"
            ? props.theme.colors.darkBlue
            : props.type === "white"
            ? props.theme.colors.white
            : ""};
    pointer-events: ${(props) => (props.active ? "" : "none")};
    z-index: 2;
    &.active {
        opacity: 1;
    }

    .Dropdown {
        &__icon {
            position: absolute;
            top: 26px;
            cursor: pointer;
            right: 23px;

            svg {
                pointer-events: none;
            }
        }
        &__row {
            display: flex;
            ul {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                max-height: 90%;
            }
        }
        &__column {
            margin-right: 80px;
            flex: 1 0 0;
            h5 {
                margin-bottom: 15px;
            }
            li {
                margin-bottom: 7px;
                margin-right: 80px;
            }
        }
    }
`
