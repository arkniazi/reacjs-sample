import { StyledCard } from "./styled"
import { FlexContainer } from "../styles/Page"
import { Image } from "../Image"

export const CardTease = () => {
    return (
        <StyledCard>
            <Image
                path="/images/cardTease/cardTease-sunset.png"
                alt="surfers on the beach at sunset"
            />
            <FlexContainer dir="column">
                <p className="styledCard__lead">@powerhousesurf</p>
                <p className="styledCard__label label">Dunsborough, WA</p>
            </FlexContainer>
        </StyledCard>
    )
}
