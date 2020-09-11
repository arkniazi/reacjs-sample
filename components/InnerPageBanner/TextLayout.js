import { FlexContainer } from "../styles/Page"
import { TextLayoutStyled } from "./styled"
import { ComponentContainer } from "../styles/Page"
export const TextLayout = ({ title }) => {
    return (
        <TextLayoutStyled>
            <ComponentContainer>
                <FlexContainer style={{ backgroundColor: "white" }}>
                    <h1 className="innerPageBanner__title black">{title}</h1>
                </FlexContainer>
            </ComponentContainer>
        </TextLayoutStyled>
    )
}
