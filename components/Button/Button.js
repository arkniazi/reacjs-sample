import TextLink from "../TextLink"
import { StyledButton } from "./styled"

export const Button = ({ className, btnText, url, margin, size }) => {
    return (
        <StyledButton className={className} margin={margin} size={size}>
            <TextLink color="black" text={btnText} url={url} />
        </StyledButton>
    )
}
