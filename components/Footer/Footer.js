// import Link from "next/link"
// import Nav from "./Nav"
import Link from "next/link"
import { FooterStyled } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { FlexContainer } from "../styles/Page"
import { Image } from "../Image"
import { Instagram, Twitter, Facebook } from "../Icons"
import { IconLink } from "../IconLink"
import TextLink from "../TextLink"

export const Footer = () => {
    return (
        <FooterStyled>
            <FlexContainer dir="column">
                <ComponentContainer>
                    <FlexContainer dir="row" width="full">
                        <div className="footer__column flex-1 logo-col">
                            <h3>2ndsurf</h3>
                            <Image
                                className="footer__logo"
                                path="/images/header/logo.png"
                                alt="2nd surf logo"
                                height="56px"
                                width="36px"
                            />
                        </div>
                        <div className="footer__column flex-2">
                            <FlexContainer dir="row">
                                <div className="inner-column">
                                    <TextLink url="" text="Surf" />
                                    <TextLink url="" text="Sup" />
                                    <TextLink url="" text="Wetsuit" />
                                    <TextLink url="" text="Kitesurf" />
                                    <TextLink url="" text="Foil" />
                                </div>
                                <div className="inner-column">
                                    <TextLink url="/about" text="About" size="sm" />
                                    <TextLink url="" text="Pricing" size="sm" />
                                    <TextLink
                                        url="/contact"
                                        text="Contact Us"
                                        size="sm"
                                    />
                                </div>
                            </FlexContainer>
                        </div>
                        <div className="footer__column flex-1 flex-end">
                            <Link href="https://facebook.com" passHref>
                                <IconLink
                                    icon="facebook"
                                    width="18px"
                                    height="18px"
                                    fill="black"
                                />
                            </Link>
                            <Link href="https://instagram.com" passHref>
                                <IconLink
                                    icon="instagram"
                                    width="19px"
                                    height="19px"
                                    fill="black"
                                />
                            </Link>
                            <Link href="https://twitter.com" passHref>
                                <IconLink
                                    icon="twitter"
                                    width="19px"
                                    height="16px"
                                    fill="black"
                                />
                            </Link>
                        </div>
                    </FlexContainer>
                </ComponentContainer>

                <div className="footer__bottom-row">
                    <ComponentContainer>
                        <FlexContainer dir="row">
                            <div className="footer__column flex-1 bottom-logo-col">
                                <p className="label">2020 2nd surf</p>
                            </div>
                            <div className="footer__column flex-2">
                                <FlexContainer dir="row">
                                    <TextLink
                                        url=""
                                        text="Terms & Conditions"
                                        size="sm"
                                        className="footer__bottom-link"
                                        weight="bold"
                                    />
                                    <TextLink
                                        url=""
                                        text="Privacy"
                                        size="sm"
                                        weight="bold"
                                    />
                                </FlexContainer>
                            </div>
                            <div className="footer__column flex-1 flex-end">
                                <TextLink
                                    url="https://www.juicebox.com.au"
                                    text="site by Juicebox"
                                    size="sm"
                                    weight="bold"
                                />
                            </div>
                        </FlexContainer>
                    </ComponentContainer>
                </div>
            </FlexContainer>
        </FooterStyled>
    )
}
