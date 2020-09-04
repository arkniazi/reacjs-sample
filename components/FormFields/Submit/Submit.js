import React from "react"
import styled from "styled-components"

import { Button } from "../../Button"
import { Search, ChevronLeft } from "../../Icons"

const ButtonStyled = styled.button`
    align-self: flex-end;
    font-size: ${(props) => props.theme.fontSizes.desktop.link.size};
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    height: 60px;
    padding: 0 20px;
    font-weight: bold;
    border: none;
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.orange};
`

const SearchButtonStyled = styled(ButtonStyled)`
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

export const Submit = ({
    type,
    text,
    isSubmitting,
    searchStyle,
    refineResults,
    ...props
}) => {
    const btn = searchStyle ? (
        <SearchButtonStyled
            type={type || "submit"}
            disabled={isSubmitting}
            disablePointer={isSubmitting}
            disabledStyle={isSubmitting}
            refineResults={refineResults}
            searchStyle={searchStyle}
            {...props}
        >
            <div>
                {isSubmitting
                    ? props.submittingText || "Searching..."
                    : text
                        ? text
                        : "Search"}
            </div>

            <div className="icon-container">
                <ChevronLeft
                    height="23"
                    width="23"
                    fill="white"
                    className="arrow-icon"
                />
                <Search
                    height="23"
                    width="23"
                    fill="white"
                    className="search-icon"
                />
            </div>
        </SearchButtonStyled>
    ) : (
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

    return btn
}
