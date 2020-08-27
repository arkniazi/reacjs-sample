import Link from "next/link"
import styled from "styled-components"

const BaseLink = styled.a`
    font-weight: ${(props) => (props.weight == "bold" ? props.weight : "500")};
    font-family: ${(props) => props.theme.font.heading};
    font-size: ${(props) =>
        props.size == "sm"
            ? props.theme.fontSizes.desktop.tiny.size
            : props.theme.fontSizes.desktop.link.size};
    line-height: ${(props) => props.theme.fontSizes.desktop.link.lineHeight};
    line-height: ${(props) =>
        props.size === "sm"
            ? props.theme.fontSizes.desktop.tiny.lineHeight
            : props.theme.fontSizes.desktop.link.lineHeight};
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    &:hover {
        &:after {
            transform: translateY(3px);
            opacity: 1;
        }
    }
`

const StyledLinkBlack = styled(BaseLink)`
    color: black;
`

const StyledLinkBlue = styled(BaseLink)`
    color: ${(props) => props.theme.color.darkBlue};
`

const StyledLinkWhite = styled(BaseLink)`
    color: white;
`

const TextLink = ({ url, as, color, text, size, weight, className }) => {
    const StyledLink =
        color === "blue"
            ? StyledLinkBlue
            : color === "white"
            ? StyledLinkWhite
            : StyledLinkBlack

    return (
        <>
            <Link href={url} as={as} passHref>
                <StyledLink size={size} weight={weight} className={className}>
                    {text}
                </StyledLink>
            </Link>
        </>
    )
}
export default TextLink
