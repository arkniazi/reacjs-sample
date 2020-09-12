import React from "react"
import { ButtonStyled, SearchButtonStyled } from './styled'
import { Button } from "../../Button"
import { Search, ChevronLeft } from "../../Icons"

export const Submit = ({
    type,
    text,
    isSubmitting,
    searchStyle,
    refineResults,
    fullWidth,
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
                fullWidth={fullWidth}
                whileHover={{
                    backgroundColor: "#ff8640",
                }}
                transition={{
                    duration: 0.3
                }}
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
