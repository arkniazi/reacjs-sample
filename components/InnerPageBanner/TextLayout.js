import { FlexContainer } from "../styles/Page"

export const TextLayout = ({ title }) => {
    return (
        <FlexContainer>
            <h1 className="innerPageBanner__title black">{title}</h1>
        </FlexContainer>
    )
}
