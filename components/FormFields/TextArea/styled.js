import styled, { css } from "styled-components"

const TextAreaStyles = css`
    margin-bottom: 1.25rem;
    position: relative;
    border: 2px solid ${(props) => props.theme.colors.white};
`

export const TextAreaStyled = styled.textarea`
    background: transparent;
    font-size: ${(props) => props.theme.fontSizes.desktop.link.size};
    font-family: ${(props) => props.theme.font.body};
    width: 100%;
    min-height: 140px;
    transition: ${(props) => props.theme.transitions.default};
    resize: none;
    padding: 1.25rem;
    border: 2px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    ${"" /* don't want to double up on border rules*/}
    ${(props) =>
        !props.maxLength &&
        `
        ${TextAreaStyles}
    `}

    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.colors.white};
        opacity: 1;
    }

    :disabled {
        background: #f9f9f9;
        border-color: #f9f9f9;
    }

    &:focus,
    &:hover {
        outline: none;
        border-color: ${(props) => props.theme.colors.lightGrey};
    }
`

export const TextAreaContainer = styled.div`
    ${TextAreaStyles}
    padding-bottom: 2rem;
`

export const WordCountStyled = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    color: #c6cdd5;
    position: absolute;
    bottom: 0.15rem;
    right: 1rem;
    font-size: 14px;
    pointer-events: none;
`
