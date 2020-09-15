import styled from "styled-components"

export const StyledBanner = styled.section`
    padding-top: 150px;
    padding-bottom: 50px;
    background-image: url(${(props) => props.imgURL && props.imgURL});
    background-position:center right;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    top: -${(props) => props.theme.sizes.headerHeight};

    ${(props) => props.theme.mediaQueries.lg} {
        padding-top: 200px;
        padding-bottom: 108px;
        background-position: bottom center;
    }

    .container {
        margin-top: 30px;
        position: relative;
    }

    .styledBanner {
        &__feature-img {
            margin-left: -10px;
            max-width: 97vw;
            position: absolute;
            top:142px;
            box-shadow: ${(props) => props.theme.bs.blue};

            ${(props) => props.theme.mediaQueries.lg} {
                margin-left: 103px;
                max-width: unset;
            }
        }
        &__content-container {
            position: relative;
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            h1 {
                margin-bottom: 30px;
            }

            ${(props) => props.theme.mediaQueries.lg} {
                flex-direction: row;
            }
        }

        &__title-container {
            flex: 1 0 0;
            padding-top: 40px;
        }
        &__form-container {
            flex: 378px 0 0;
        }
    }
`
