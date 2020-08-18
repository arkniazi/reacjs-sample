import styled from "styled-components"

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
            padding-left: 100px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        &__image {
            margin-bottom: 30px;
            box-shadow: ${(props) => props.theme.bs.blue};
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8) {
                margin-bottom: 0;
            }
        }

        &__icon {
            margin-bottom: 26px;
        }
    }

    h2 {
        padding-left: 10px;
    }
`

export const ImageGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 66%;
    justify-content: space-between;
`
