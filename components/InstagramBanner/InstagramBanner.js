import { Image } from "../Image"
import { Instagram } from "../Icons"

import { ComponentContainer } from "../styles/Page"
import { FlexContainer } from "../styles/Page"
import { InstagramBannerStyled, ImageGrid } from "./styled"

import { useWindowSize } from "../../lib/useWindowSize"
import { breakpoints } from "../styles/theme"


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
    const [width, height] = useWindowSize();

    return (
        <InstagramBannerStyled
            imgURL="/images/banner/banner-background.png"
        >
            <ComponentContainer>
                <FlexContainer dir="row">
                    <ImageGrid>
                        {placeholderLinks.map((single, index) => (

                            <img src={single} className="instagramBanner__image" alt="instagram placeholder" key={index} />
                        ))}
                    </ImageGrid>
                    <div className="instagramBanner__content">
                        <Instagram
                            fill="black"
                            className="instagramBanner__icon"
                            height={width >= parseInt(breakpoints[2]) ? "153px" : '100px'}
                            width={width >= parseInt(breakpoints[2]) ? "153px" : '100px'}
                        />
                        <h2>Follow us</h2>
                        <h2 className="darkGrey">On Instagram</h2>
                    </div>
                </FlexContainer>
            </ComponentContainer>
        </InstagramBannerStyled>
    )
}
