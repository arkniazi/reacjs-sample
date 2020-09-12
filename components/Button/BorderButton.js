import TextLink from "../TextLink"
import { StyledBorderButton } from "./styled"


export const BorderButton = ({ className, btnText, url, as, margin, size }) => {


    return (
        <StyledBorderButton
            className={className}
            margin={margin}
            size={size}
            whileHover={{
                backgroundColor: "#4aabd6"
            }}
            transition={{
                duration: 0.3
            }}
        >
            <TextLink
                color="black"
                text={btnText}
                url={url}
                as={as}
            />
        </StyledBorderButton>
    )
}
