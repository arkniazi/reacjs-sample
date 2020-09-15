import { ContentColumnsStyled } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { FlexContainer } from "../styles/Page"

export const ContentColumns = ({ }) => {
    return (
        <ContentColumnsStyled>
            <ComponentContainer>
                <FlexContainer dir="row">
                    <div className="contentColumns__column left-col">
                        <div>
                            <h2 className="white">Team and Vision</h2>
                            <p>
                                2NDSURF is powered by a team of local Australian
                                surfers. We are passionate about keeping things local
                                and supporting grassroots surfing. Our vision is to
                                be more than a marketplace, we want to stand out from
                                other platforms and become part of local surf
                                communities across Australia.
                            </p>
                            <p>
                                Preservation of our Coastlines – The coastline of
                                Australia is our playground but also our
                                responsibility. We promote environmental awareness
                                and understanding of how our ecosystems thrive so we
                                can continue to enjoy them for years to come! We take
                                a no-nonsense approach to anyone who threatens our
                                coastline.
                            </p>
                        </div>
                    </div>
                    <div className="contentColumns__column right-col">
                        <div>
                            <h2 className="white">Community</h2>
                            <p>
                                Community – Grassroot surfing organisations are the
                                backbone of every surfing community across Australia.
                                We want to collaborate with the local Surfshops and
                                organisations to help promote bigger and better
                                surfing events in the community.
                            </p>
                            <p>
                                Locals to the front – 2NDSURF champions the continued
                                operation of Surfshops, Shapers and Ding Repairers in
                                the community. Buying locally supports your local
                                community and empowers shops to sponsor local surfing
                                events.
                            </p>
                        </div>
                    </div>
                </FlexContainer>
            </ComponentContainer>
        </ContentColumnsStyled>
    )
}
