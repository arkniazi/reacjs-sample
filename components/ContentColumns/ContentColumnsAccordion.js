import { ComponentContainer } from "../styles/Page"
import { ContentColumnsAccordionStyled } from './styled'
import { AccordionComponent } from '../Accordion';

export const ContentColumnsAccordion = () => {
    return (
        <ContentColumnsAccordionStyled>
            <ComponentContainer>
                <div className="flex-wrapper">
                    <div className="flex-child">
                        <h2 className="black">Common Questions</h2>
                    </div>
                    <div className="flex-child">
                        <div className="accordion-wrapper">
                            <p>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>

                            <AccordionComponent className="accordion-border-bottom" label="definitions">
                                <p className="accordion-content">By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information.</p>
                            </AccordionComponent>
                            <AccordionComponent className="accordion-border-bottom" label="definitions">
                                <p className="accordion-content">By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information.</p>
                            </AccordionComponent>
                            <AccordionComponent className="accordion-border-bottom" label="definitions">
                                <p className="accordion-content">By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information.</p>
                            </AccordionComponent>
                            <AccordionComponent className="accordion-border-bottom" label="definitions">
                                <p className="accordion-content">By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information.</p>
                            </AccordionComponent>
                        </div>
                    </div>
                </div>

            </ComponentContainer>
        </ContentColumnsAccordionStyled>
    )
}