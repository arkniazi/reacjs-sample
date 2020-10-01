import { useState } from "react"
import Router from "next/router"
import Link from "next/link"
import NProgress from "nprogress"

import { Nav } from "../Nav"
import { Image } from "../Image"
import { MobileMenuButton } from "../MobileMenu"
import { MobileMenu } from "../MobileMenu"

import { StyledHeader, StyledLogo } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { FlexContainer } from "../styles/Page"
import { theme } from "../styles/theme"
import { breakpoints } from "../styles/theme"

import { useWindowSize } from "../../lib/useWindowSize"
import { ResponsiveSwitch } from "../Util/ResponsiveSwitch"

Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}
Router.onRouteChangeError = () => {
    NProgress.done()
}



export const Header = () => {
    const [width, height] = useWindowSize();
    const [isNavOpen, setNavState] = useState(false)

    return (
        <StyledHeader>
            <ComponentContainer>
                <div className="flex-container">
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
                    <ResponsiveSwitch
                        desktopComponent={<Nav color="white" />}
                        mobileComponent={<MobileMenuButton isNavOpen={isNavOpen} setNavState={setNavState} />}
                        breakpointIndex={2}
                    />
                </div>



            </ComponentContainer>
            <MobileMenu isNavOpen={isNavOpen} setNavState={setNavState} />
        </StyledHeader >
    )
}
