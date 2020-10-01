import { useState, useEffect } from "react"
import _ from "lodash"
import Link from "next/link"
import TextLink from "../TextLink"
import { Button } from "../Button"
import { StyledNav, StyledNavItem } from "./styled"
import { ChevronDown } from "../Icons"
import { Dropdown } from "./Dropdown"
import {
    surfDropdownData,
    supDropdownData,
    wetsuitDropdownData,
} from "./DropdownData"

export const Nav = ({ color }) => {
    const [surfDropDown, setSurfDropDown] = useState(false)
    const [supDropDown, setSupDropDown] = useState(false)
    const [wetsuitDropDown, setWetsuitDropDown] = useState(false)

    const handleMouseOverNav = (type) => {
   
        switch (type) {
            case "surf":
                handleDropDownChange(true, false, false)
                break
            case "sup":
                handleDropDownChange(false, true, false)
                break
            case "wetsuit":
                handleDropDownChange(false, false, true)
                break
            default:
                handleDropDownChange(false, false, false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", _.throttle(handleScroll))
        return () => window.removeEventListener("scroll", handleScroll)
    })

    const handleScroll = () => {
        let scrollTop =
            window.pageYOffset !== undefined
                ? window.pageYOffset
                : (
                    document.documentElement ||
                    document.body.parentNode ||
                    document.body
                ).scrollTop
        if (scrollTop >= 15) {
            handleDropDownChange(false, false, false)
        }
    }

    const handleDropDownChange = (surf, sup, wetsuit) => {
        setSurfDropDown(surf)
        setSupDropDown(sup)
        setWetsuitDropDown(wetsuit)
    }

    //set data array for dropdown
    let dropdownData = []
    let dropdownType = ""

    if (surfDropDown) {
        dropdownData = surfDropdownData
        dropdownType = "blue"
    } else if (supDropDown) {
        dropdownData = supDropdownData
        dropdownType = "white"
    } else if (wetsuitDropDown) {
        dropdownData = wetsuitDropdownData
        dropdownType = "white"
    }

    const variants = {
        start: {
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        },
        hover: {
            y: 30,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <StyledNav>
            <div className="menu-wrapper">
                <StyledNavItem onMouseEnter={() => handleMouseOverNav("surf")} initial="start" whileHover="hover" animate="start">
                    <TextLink
                        as="/search-products/surf"
                        url="/search-products/[...param]"
                        color={color}
                        text="Surf"
                    />
                    <ChevronDown variants={variants} className="styledNavItem__icon" />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav("sup")}>
                    <TextLink
                        url="/search-products/[...param]"
                        as="/search-products/sup"
                        color={color}
                        text="Sup"
                    />
                    <ChevronDown className="styledNavItem__icon" />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav()}>
                    <TextLink
                        url="/search-products/[...param]"
                        as="/search-products/kitesurf"
                        color={color}
                        text="Kitesurf"
                    />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav()}>
                    <TextLink
                        url="/search-products/[...param]"
                        as="/search-products/foil"
                        color={color}
                        text="Foil"
                    />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav("wetsuit")}>
                    <TextLink
                        url="/search-products/[...param]"
                        as="/search-products/wetsuit"
                        color={color}
                        text="Wetsuit"
                    />
                    <ChevronDown className="styledNavItem__icon" />
                </StyledNavItem>
            </div>

            <div className="link-wrapper">
                <StyledNavItem border setWidth>
                    <TextLink url="/signup" color={color} text="Signup" />
                </StyledNavItem>

                <StyledNavItem setWidth>
                    <TextLink url="/login" color={color} text="Login" />
                </StyledNavItem>

                <Button btnText="Sell" url="/sell" />
            </div>
            <Dropdown
                data={dropdownData}
                type={dropdownType}
                active={surfDropDown || supDropDown || wetsuitDropDown}
                handleDropDownChange={handleDropDownChange}
            />
        </StyledNav>
    )
}
