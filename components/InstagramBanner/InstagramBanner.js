import { InstagramBannerStyled, ImageGrid } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { Image } from "../Image"
import { FlexContainer } from "../styles/Page"
import { Instagram } from "../Icons"

const placeholderLinks = [
    "/images/InstagramBanner/placeholder.png",
    "/images/InstagramBanner/placeholder.png",
    "/images/InstagramBanner/placeholder.png",
    "/images/InstagramBanner/placeholder.png",
    "/images/InstagramBanner/placeholder.png",
    "/images/InstagramBanner/placeholder.png",
    "/images/InstagramBanner/placeholder.png",
    "/images/InstagramBanner/placeholder.png",
]

export const InstagramBanner = () => {
    return (
        <InstagramBannerStyled
            imgURL="/images/banner/banner-background.png"
        >
            <ComponentContainer>
                <FlexContainer dir="row">
                    <ImageGrid>
                        {placeholderLinks.map((single, index) => (
                            <Image
                                path={single}
                                alt="instagram placeholder"
                                className="instagramBanner__image"
                                height="175px"
                                width="175px"
                                key={index}
                            />
                        ))}
                    </ImageGrid>
                    <div className="instagramBanner__content">
                        <Instagram
                            fill="black"
                            className="instagramBanner__icon"
                            height="153px"
                            width="153px"
                        />
                        <h2>Follow us</h2>
                        <h2 className="darkGrey">On Instagram</h2>
                    </div>
                </FlexContainer>
            </ComponentContainer>
        </InstagramBannerStyled>
    )
}
