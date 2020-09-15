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
            padding: 20px 0 25px 0;
            ${(props) => props.theme.mediaQueries.lg} {
                padding: 45px 0;
            }
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

    .flex-container{
        display: flex;
        flex-direction: column;
        ${(props) => props.theme.mediaQueries.lg} {
            flex-direction: row;
        }

    }

    .columnLayoutStyled {
        &__title {
            max-width: 80%;
        }

        &__featured-img {
            position: relative;
            top: 45px;
            max-width: 100%;
            ${(props) => props.theme.mediaQueries.lg} {
                max-width: unset
            }
            
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
        margin-bottom: 20px;

        ${(props) => props.theme.mediaQueries.lg} {
            margin-bottom: 50px;
        }
        
    }

    p.lead{
        margin-top: 25px;
        ${(props) => props.theme.mediaQueries.lg} {
            margin-top: 45px;
        }
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

        &__content{
            margin-bottom: 45px; 
            ${(props) => props.theme.mediaQueries.lg} {
                margin-bottom: 0;
            }
        }
    }

    .flex-container{
        display: flex;
        flex-direction: column;
        ${(props) => props.theme.mediaQueries.lg} {
            flex-direction: row;
        }
    }
`

export const TextLayoutStyled = styled.div`
    padding-top: 60px;
    background-color: white;
    padding-bottom: 40px;

    ${(props) => props.theme.mediaQueries.lg} {
        padding-top: 100px;
        padding-bottom: 60px;
    }
`
