import { StyledCardRow } from "./styled"
import { FlexContainer } from "../styles/Page"
import { CardTease } from "./CardTease"
import { ComponentContainer } from "../styles/Page"
export const CardRow = () => {
    return (
        <ComponentContainer>
            <StyledCardRow>
                <div className="CardRow">
                    <h2 className="CardRow__title">Meet The Locals</h2>
                    <div className="flex-container">
                        <CardTease />
                        <CardTease />
                        <CardTease />
                        <CardTease />
                    </div>
                </div>
            </StyledCardRow>
        </ComponentContainer>
    )
}
