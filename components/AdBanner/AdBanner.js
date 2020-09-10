import { AdBannerStyled } from "./styled"
import { FlexContainer } from "../styles/Page"
import { Image } from "../Image"
import { ComponentContainer } from "../styles/Page"

export const AdBanner = ({ margin }) => {
    return (
        <ComponentContainer>
            <AdBannerStyled margin={margin}>
                <div className="adBannerStyled__flex-container">
                    <div className="adBannerStyled__column">
                        <Image
                            className="adBannerStyled__poster"
                            path="/images/adBanner/poster.png"
                            alt="banner poster"
                        />
                    </div>
                    <div className="adBannerStyled__column content">
                        <h2 className="h1">Be part of the surf community</h2>
                        <h2 className="h1 black">Thats keeping business local.</h2>
                        <Image
                            className="adBannerStyled__decoration"
                            path="/images/adBanner/decoration.png"
                            alt="banner decoration"
                        />
                    </div>
                </div>
            </AdBannerStyled>
        </ComponentContainer>
    )
}
