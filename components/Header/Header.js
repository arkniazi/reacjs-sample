import Link from "next/link"
import { Nav } from "../Nav"
import Router from "next/router"
import NProgress from "nprogress"
import { StyledHeader, StyledLogo } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { FlexContainer } from "../styles/Page"

Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}
Router.onRouteChangeError = () => {
    NProgress.done()
}

export const Header = ({ transparentHeading }) => {
    return (
        <StyledHeader solidBackground>
            <ComponentContainer>
                <FlexContainer dir="row" align="center">
                    <StyledLogo>
                        <Link href="/">
                            <a>2ndSurf</a>
                        </Link>
                    </StyledLogo>

                    <Nav color="white" type="header" />
                </FlexContainer>
            </ComponentContainer>
        </StyledHeader>
    )
}
