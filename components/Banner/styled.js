import styled from "styled-components"

export const StyledBanner = styled.section`
    padding-top: 110px;
    padding-bottom: 108px;
    background-image: url(${(props) => props.imgURL && props.imgURL});
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    top: -${(props) => props.theme.sizes.headerHeight};

    .container {
        margin-top: 30px;
        position: relative;
    }

    .styledBanner {
        &__feature-img {
            margin-left: 103px;
            position: absolute;
            box-shadow: ${(props) => props.theme.bs.blue};
        }
        &__content-container {
            position: relative;
            display: flex;
            padding-top: 60px;
            h1 {
                margin-bottom: 30px;
            }
        }

        &__title-container {
            flex: 1 0 0;
            padding-top: 40px;
        }
        &__form-container {
            flex: 378px 0 0;
            /* TEMPORARY */
            min-height: 400px;
        }
    }
`
