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
    /* &:after {
        content: "";
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 2px;
        background: ${(props) => props.theme.colors.orange};
        transform: translateY(0px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    } */
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

const TextLink = ({ url, color, text, size, weight, className }) => {
    const StyledLink =
        color === "blue"
            ? StyledLinkBlue
            : color === "white"
            ? StyledLinkWhite
            : StyledLinkBlack

    return (
        <>
            <Link href={url} passHref>
                <StyledLink size={size} weight={weight} className={className}>
                    {text}
                </StyledLink>
            </Link>
        </>
    )
}
export default TextLink
