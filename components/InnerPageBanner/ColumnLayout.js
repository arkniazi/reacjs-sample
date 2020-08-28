import { Image } from "../Image"
import { BannerDecoration } from "../BannerDecoration"
import { FlexContainer } from "../styles/Page"
import { ColumnLayoutStyled } from "./styled"
import { ComponentContainer } from "../styles/Page"

export const ColumnLayout = () => {
    return (
        <ColumnLayoutStyled
            imgURL="/images/banner/banner-background.png"
        >
            <ComponentContainer>
                <h2 className="h1 columnLayoutStyled__title">
                    About Lorem ipsum dolor sit adipiscing our story
                </h2>

                <FlexContainer>
                    <div className="innerPageBanner__column content-column">
                        <div>
                            <BannerDecoration
                                alt="title decoration"
                                className="innerPageBanner__decoration"
                            />
                            <p className="lead">
                                2ndsurf.com is a free online marketplace designed to
                                connect users with surfware in their local community.
                                Our platform unites both the new & used economy into
                                one easy-to-search location. We are passionate about
                                supporting local and connecting users to the gear
                                they seek in fewer steps.
                            </p>
                        </div>
                    </div>
                    <div className="innerPageBanner__column">
                        <Image
                            className="columnLayoutStyled__featured-img"
                            path="/images/innerPageBanner/feature.png"
                            alt="surfing the barrel"
                        />
                    </div>
                </FlexContainer>
            </ComponentContainer>
        </ColumnLayoutStyled>
    )
}
