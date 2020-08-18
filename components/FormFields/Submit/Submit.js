import React from "react"
import styled from "styled-components"

import { Button } from "../../Button"

const ButtonStyled = styled.button`
    align-self: flex-end;
    font-size: ${(props) => props.theme.fontSizes.desktop.link.size};
    text-transform: uppercase;
    position: relative;
    height: 60px;
    width: 150px;
    font-weight: bold;
    border: none;
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.orange};
`

export const Submit = ({
    type,
    text,
    isSubmitting,
    searchStyle,
    refineResults,
    ...props
}) => {
    return (
        <ButtonStyled
            type={type || "submit"}
            disabled={isSubmitting}
            disablePointer={isSubmitting}
            disabledStyle={isSubmitting}
            refineResults={refineResults}
            {...props}
        >
            {isSubmitting
                ? props.submittingText || "Submitting..."
                : text
                ? text
                : "Submit"}
        </ButtonStyled>
    )
}
