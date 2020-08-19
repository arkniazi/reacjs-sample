import { ComponentContainer, FlexContainer } from "../styles/Page"
import { AccordionColumnsStyled } from "./styled"
import { AccordionComponent } from "./Accordion"

export const AccordionColumns = () => {
    return (
        <AccordionColumnsStyled>
            <ComponentContainer>
                <FlexContainer dir="row">
                    <div className="AccordionColumns__column">
                        <h2 className="black">Common Questions</h2>
                    </div>
                    <div className="AccordionColumns__column">
                        <div>
                            <p>
                                You understand that your content (not including
                                credit card information), may be transferred
                                unencrypted and involve (a) transmissions over
                                various networks; and (b) changes to conform and
                                adapt to technical requirements of connecting
                                networks or devices. Credit card information is
                                always encrypted during transfer over networks.
                            </p>
                        </div>

                        <AccordionComponent />
                    </div>
                </FlexContainer>
            </ComponentContainer>
        </AccordionColumnsStyled>
    )
}
