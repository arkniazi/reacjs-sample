import { StyledBanner } from "./styled"
import { Image } from "../Image"
import { publicUrl } from "../../config"
import { ComponentContainer } from "../styles/Page"
import { BannerDecoration } from "../BannerDecoration"
import { SearchForm } from "../Forms/SearchForm"

export const Banner = ({ paddingTop }) => {
    return (
        <StyledBanner imgURL={publicUrl + "/images/banner/banner-background.png"}>
            <ComponentContainer>
                <Image
                    className="styledBanner__feature-img"
                    path="/images/banner/banner-feature.jpg"
                    alt="surfing the barrel"
                />

                <div className="styledBanner__content-container">
                    <div className="styledBanner__title-container">
                        <h1 className="banner">
                            Buy. Sell. <br />
                            Discover <br />
                            Local Surf Gear.
                        </h1>

                        <BannerDecoration alt="my image" />
                    </div>
                    <div className="styledBanner__form-container">
                        <SearchForm />
                    </div>
                </div>
            </ComponentContainer>
        </StyledBanner>
    )
}
