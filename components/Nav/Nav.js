import Link from "next/link"
import TextLink from "../TextLink"
import { Button } from "../Button"
import { StyledNav, StyledNavItem } from "./styled"

export const Nav = ({ color, type }) => {
    return (
        <StyledNav>
            <div className="menu-wrapper">
                <StyledNavItem>
                    <TextLink url="/sell" color={color} text="Surf" />
                </StyledNavItem>

                <StyledNavItem>
                    <TextLink url="/sup" color={color} text="Sup" />
                </StyledNavItem>

                <StyledNavItem>
                    <TextLink url="/kitesurf" color={color} text="Kitesurf" />
                </StyledNavItem>

                <StyledNavItem>
                    <TextLink url="/foil" color={color} text="Foil" />
                </StyledNavItem>

                <StyledNavItem>
                    <TextLink url="/wetsuit" color={color} text="Wetsuit" />
                </StyledNavItem>
            </div>
            {type == "header" && (
                <div className="link-wrapper">
                    <StyledNavItem border setWidth>
                        <TextLink url="/signup" color={color} text="Signup" />
                    </StyledNavItem>

                    <StyledNavItem setWidth>
                        <TextLink url="/login" color={color} text="Login" />
                    </StyledNavItem>

                    <Button btnText="Sell" url="/sell" />
                </div>
            )}
        </StyledNav>
    )
}
