import TextLink from "../TextLink"
import { StyledButton } from "./styled"

export const Button = ({ className, btnText, altTheme, url, margin, size }) => {
    return (
        <StyledButton
            className={className}
            altTheme={altTheme}
            margin={margin}
            size={size}
        >
            <TextLink
                color={altTheme ? "white" : "black"}
                text={btnText}
                url={url}
            />
        </StyledButton>
    )
}
