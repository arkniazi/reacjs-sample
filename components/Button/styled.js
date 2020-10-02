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

export const StyledUnderlineButton = styled.button`     
    background: transparent;
    border: transparent;
    font-size: 16px;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font.heading};
    font-weight: 500;
    margin-right: 36px;
    position: relative;
    padding: 0;
    cursor: pointer;
    
    &:focus{
        outline: none;
    }
    &:last-child{
        margin-right: 0;
    }

    &:after{
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        height: 4px;
        width: 100%;
        background: ${(props) => props.theme.colors.orange};
        transform: translateY(-10px);
        opacity: 0;
        transition: transform .3s ease, opacity .25s ease;
    }

    &:hover{
        &:after{
            transform: translateY(0);
            opacity: 0.2; 
        }
    }

    &.active{
        &:after{
            transform: translateY(0);
            opacity: 1;
        }
    }
    
`

export const BackButtonStyled = styled.button`
    font-family: ${(props) => props.theme.font.heading};
    font-size: ${(props) => props.theme.fontSizes.desktop.label.size};
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    background: transparent;
    border: none;
    padding-left: 0;
    cursor: pointer;
    &:focus{
            outline: none;
        }

    .BackButton{

        &__icon-wrap{
            border: 2px solid black;
            height: 30px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 8px;
            svg{
                position: relative;
                top: -1px;
                left: -1px;
            }
        }
    }

`