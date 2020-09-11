import TextLink from "../TextLink"
import { StyledButton } from "./styled"


export const Button = ({ className, btnText, altTheme, url, as, margin, size }) => {
    return (
        <StyledButton
            className={className}
            altTheme={altTheme}
            margin={margin}
            size={size}
            whileHover={{
                backgroundColor: "#ff8640",
            }}
            transition={{
                duration: 0.3
            }}
        >
            <TextLink
                color={altTheme ? "white" : "black"}
                text={btnText}
                url={url}
                as={as}
            />
        </StyledButton>
    )
}
