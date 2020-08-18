import TextLink from "../TextLink"
import { FlexContainer } from "../styles/Page"
import { Wrapper, StyledLinkList } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { ChevronLeft } from "../Icons"

export const LinkList = () => {
    return (
        <ComponentContainer>
            <Wrapper>
                <div>
                    <h2>
                        Popular <br />
                        Searches
                    </h2>
                </div>
                <FlexContainer dir="column" width="full">
                    <StyledLinkList>
                        <li>
                            <TextLink
                                url="/surfboards"
                                color="black"
                                text="surfboards"
                                decoration="chevron-left"
                            />
                            <ChevronLeft className="textLink__decoration" />
                        </li>

                        <li>
                            <TextLink
                                url="/sups"
                                color="black"
                                text="sups"
                                decoration="chevron-left"
                            />
                            <ChevronLeft className="textLink__decoration" />
                        </li>

                        <li>
                            <TextLink
                                url="/wetsuits"
                                color="black"
                                text="wetsuits"
                                decoration="chevron-left"
                            />
                            <ChevronLeft className="textLink__decoration" />
                        </li>
                    </StyledLinkList>

                    <StyledLinkList>
                        <li>
                            <TextLink
                                url="/kitesurf"
                                color="black"
                                text="kitesurf"
                                decoration="chevron-left"
                            />
                            <ChevronLeft className="textLink__decoration" />
                        </li>

                        <li>
                            <TextLink
                                url="/kites"
                                color="black"
                                text="kites"
                                decoration="chevron-left"
                            />
                            <ChevronLeft className="textLink__decoration" />
                        </li>

                        <li>
                            <TextLink
                                url="/foilboards"
                                color="black"
                                text="foilboards"
                                decoration="chevron-left"
                            />
                            <ChevronLeft className="textLink__decoration" />
                        </li>
                    </StyledLinkList>
                </FlexContainer>
            </Wrapper>
        </ComponentContainer>
    )
}
