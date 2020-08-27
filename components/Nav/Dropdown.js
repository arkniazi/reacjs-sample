import { DropdownStyled } from "./styled"
import { FlexContainer } from "../styles/Page"
import TextLink from "../TextLink"
import { ComponentContainer } from "../styles/Page"
import { Exit } from "../Icons"

export const Dropdown = ({ data, type, active, handleDropDownChange }) => {
    return (
        <DropdownStyled
            type={type}
            active={active}
            className={active ? "active" : ""}
            onMouseLeave={() => handleDropDownChange(false, false, false)}
        >
            <ComponentContainer>
                <Exit
                    className="Dropdown__icon"
                    onClick={() => handleDropDownChange(false, false, false)}
                />

                <div className="Dropdown__row">
                    {data.map((column) => {
                        return (
                            <div className="Dropdown__column">
                                <h5 className={type === "blue" ? "orange" : "black"}>
                                    {column.title}
                                </h5>
                                <ul>
                                    {column.links.map((link) => {
                                        return (
                                            <li>
                                                <TextLink
                                                    url="/search-products/[...param]"
                                                    as="/search-products/surf/shortboard"
                                                    color={
                                                        type === "blue"
                                                            ? "white"
                                                            : "black"
                                                    }
                                                    text={link.text}
                                                    weight="bold"
                                                    size="sm"
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </ComponentContainer>
        </DropdownStyled>
    )
}
