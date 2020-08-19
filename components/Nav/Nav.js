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
        console.log(type)
        switch (type) {
            case "surf":
                setSurfDropDown(true)
                setSupDropDown(false)
                setWetsuitDropDown(false)
                break
            case "sup":
                setSurfDropDown(false)
                setSupDropDown(true)
                setWetsuitDropDown(false)
                break
            case "wetsuit":
                setSurfDropDown(false)
                setSupDropDown(false)
                setWetsuitDropDown(true)
                break
            default:
                setSurfDropDown(false)
                setSupDropDown(false)
                setWetsuitDropDown(false)
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
            setSurfDropDown(false)
            setSupDropDown(false)
            setWetsuitDropDown(false)
        }
    }

    const handleDropdownExit = () => {
        setSurfDropDown(false)
        setSupDropDown(false)
        setWetsuitDropDown(false)
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

    return (
        <StyledNav>
            <div className="menu-wrapper">
                <StyledNavItem onMouseEnter={() => handleMouseOverNav("surf")}>
                    <TextLink url="/sell" color={color} text="Surf" />
                    <ChevronDown className="styledNavItem__icon" />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav("sup")}>
                    <TextLink url="/sup" color={color} text="Sup" />
                    <ChevronDown className="styledNavItem__icon" />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav()}>
                    <TextLink url="/kitesurf" color={color} text="Kitesurf" />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav()}>
                    <TextLink url="/foil" color={color} text="Foil" />
                </StyledNavItem>

                <StyledNavItem onMouseEnter={() => handleMouseOverNav("wetsuit")}>
                    <TextLink url="/wetsuit" color={color} text="Wetsuit" />
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
                handleDropdownExit={handleDropdownExit}
            />
        </StyledNav>
    )
}
