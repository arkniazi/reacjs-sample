import { FlexContainer } from "../styles/Page"
import { Image } from "../Image"
import { Button } from "../Button"
import { StyledContentSplit } from "./styled"
import { Instagram } from "../Icons"
import { ComponentContainer } from "../styles/Page"

export const ContentSplit = () => {
    return (
        <ComponentContainer>
            <StyledContentSplit className="contentSplit">
                <FlexContainer dir="row">
                    <div className="contentSplit__split">
                        <Image
                            className="contentSplit__feature-img"
                            path="/images/contentSplit/surfer.png"
                            alt="surfing the barrel"
                        />
                        <div className="contentSplit__label-container">
                            <FlexContainer dir="row" align="center">
                                <Instagram height="20" width="20" />
                                <p className="label contentSplit__label">
                                    @cody_batess
                                </p>
                            </FlexContainer>
                        </div>
                    </div>
                    <div className="contentSplit__split">
                        <h2 className="contentSplit__title h1 black">
                            Sell your gear
                        </h2>
                        <Image
                            className="contentSplit__decoration"
                            path="/images/contentSplit/decoration.png"
                            alt="text decoration"
                        />
                        <p className="contentSplit__copy">
                            Selling your gear is FREE! Just create an account and
                            start using our dedicated surfware listing process.
                            Posuere varius dolor eget diam amet, sodales. Nunc ornare
                            sed mauris eu dui sollicitudin. Nec nulla faucibus ac
                            venenatis molestie.{" "}
                        </p>
                        <Button
                            className="contentSplit__cta"
                            btnText="Sell"
                            url="/sell"
                            size="medium"
                        />
                    </div>
                </FlexContainer>
            </StyledContentSplit>
        </ComponentContainer>
    )
}
