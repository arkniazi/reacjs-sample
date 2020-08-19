import { useState, useEffect } from "react"
import Link from "next/link"
import { Nav } from "../Nav"
import Router from "next/router"
import NProgress from "nprogress"
import { StyledHeader, StyledLogo } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { FlexContainer } from "../styles/Page"
import { Image } from "../Image"

Router.onRouteChangeStart = () => {
    NProgress.start()
    checkHeader
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
                        <Image
                            className="footer__logo"
                            path="/images/header/logo.png"
                            alt="2nd surf logo"
                            height="56px"
                            width="36px"
                        />
                    </StyledLogo>

                    <Nav color="white" />
                </FlexContainer>
            </ComponentContainer>
        </StyledHeader>
    )
}
