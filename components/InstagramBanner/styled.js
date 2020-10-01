import styled from "styled-components"
import { theme } from "../styles/theme"

export const InstagramBannerStyled = styled.div`
    margin-top: ${(props) => props.theme.sizes.md};
    background: linear-gradient(
            252.58deg,
            rgba(23, 154, 211, 0.8) 5.92%,
            rgba(23, 154, 211, 0) 101.47%
        ),
        url(${(props) => props.imgURL && props.imgURL}), #005cb0;
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: ${(props) => props.theme.sizes.sm} 0;
    .instagramBanner {
        &__content {
            color: ${(props) => props.theme.colors.white};
            margin-top: 30px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            ${(props) => props.theme.mediaQueries.lg} {
                margin-top: 0;
                padding-left: 100px;
                align-items: flex-start;
            }
        }
        &__image {
            margin-bottom: 15px;
            box-shadow: ${(props) => props.theme.bs.blue};
            height: 160px;
            width: 160px;
      

            ${(props) => props.theme.mediaQueries.lg} {
                height: 175px;
                width: 175px;
                margin-bottom: 30px;

                &:nth-child(5),
                &:nth-child(6),
                &:nth-child(7),
                &:nth-child(8) {
                    margin-bottom: 0;
                }
            }
        }

        &__icon {
            margin-bottom: 26px;
        }
    }

    h2 {
        ${(props) => props.theme.mediaQueries.lg} {
            padding-left: 10px;
        }
    }
`
export const ImageGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    justify-content: space-between;

    ${(props) => props.theme.mediaQueries.lg} {
        max-width: 66%;
    }
`
