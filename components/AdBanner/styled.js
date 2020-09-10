import styled, { ThemeProvider } from "styled-components"

export const AdBannerStyled = styled.div`
    background-color: ${(props) => props.theme.colors.orange};
    margin: ${(props) => props.margin ? props.margin : ''};
    padding: 0 25px;
    ${(props) => props.theme.mediaQueries.lg} {
        padding: 0;
    }

    .adBannerStyled {
        &__flex-container{
            display: flex;
            flex-direction: column;

            ${(props) => props.theme.mediaQueries.lg} {
                flex-direction: row;
            }
        }
        &__column {
            flex: 1 0 0;
            overflow: hidden;
            min-height: 415px;
            ${(props) => props.theme.mediaQueries.lg} {
                flex-direction: row;
            }
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
