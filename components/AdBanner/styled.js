import styled from "styled-components"

export const AdBannerStyled = styled.div`
    background-color: ${(props) => props.theme.colors.orange};
    .adBannerStyled {
        &__column {
            flex: 1 0 0;

            overflow: hidden;
            &.content {
                padding: 80px 0;
                h2 {
                    max-width: 75%;
                }
            }
        }
        &__decoration {
            margin-top: 40px;
        }

        &__poster {
            height: 103%;
            position: relative;
            top: -7px;
            left: 20%;
        }
    }
`
