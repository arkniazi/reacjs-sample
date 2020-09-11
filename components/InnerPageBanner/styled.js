import styled from "styled-components"

export const InnerPageBannerStyled = styled.div`
    margin-bottom: -1px;
    border-top: ${(props) => props.theme.sizes.headerHeight} solid
        ${(props) => props.theme.colors.darkBlue};
    position: relative;
    z-index: 1;
    p.lead {
        font-weight: normal;
        color: white;
        max-width: 80%;
    }
    .innerPageBanner {
        &__decoration {
            padding: 45px 0;
        }
    }
`

export const ColumnLayoutStyled = styled.div`
    padding-top: 80px;
    background: linear-gradient(
            252.58deg,
            rgba(23, 154, 211, 0.8) 5.92%,
            rgba(23, 154, 211, 0) 101.47%
        ),
        url(${(props) => props.imgURL && props.imgURL}), #005cb0;
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: -1px;

    .columnLayoutStyled {
        &__title {
            max-width: 80%;
        }

        &__featured-img {
            position: relative;
            top: 45px;
        }
    }
`

export const FormLayoutStyled = styled.div`
    padding-top: 80px;
    padding-bottom: 145px;
    background: linear-gradient(
            252.58deg,
            rgba(23, 154, 211, 0.8) 5.92%,
            rgba(23, 154, 211, 0) 101.47%
        ),
        url(${(props) => props.imgURL && props.imgURL}), #005cb0;
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: -1px;

    h1{
        margin-bottom: 50px;
    }

    p.lead{
        margin-top: 45px;
    }

    .formLayout {
        &__column {
            flex: 1 0 0;

            &.content-column {
                > div {
                    padding-right: 105px;
                }
            }
        }
    }
`

export const TextLayoutStyled = styled.div`
    padding-top: 100px;
    background-color: white;
    padding-bottom: 60px;
`
