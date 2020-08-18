import styled from "styled-components"

export const InnerPageBannerStyled = styled.div`
    padding-top: 75px;
    padding-bottom: ${(props) => (props.layout === "form" ? "140px" : "117px")};
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
    border-top: ${(props) => props.theme.sizes.headerHeight} solid
        ${(props) => props.theme.colors.darkBlue};

    .innerPageBanner {
        &__title {
            max-width: 80%;
            margin-bottom: 55px;
        }
        &__column {
            flex: 1 0 0;

            &.content-column {
                > div {
                    padding-right: 105px;
                }
            }
        }
        &__decoration {
            margin-bottom: 40px;

            &.form-layout {
                margin-top: 50px;
            }
        }
        &__feature-img {
            position: absolute;
            box-shadow: ${(props) => props.theme.bs.blue};
        }
    }

    p.lead {
        font-weight: normal;
        color: white;
    }
`
