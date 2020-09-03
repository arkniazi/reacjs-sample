import styled, { css } from "styled-components"

export const FilterTagStyled = styled.div`
    font-family:${(props) => props.theme.font.heading};
    background: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.white};
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.desktop.tiny.size};
    margin-right: 10px;
    margin-bottom: 10px;
`