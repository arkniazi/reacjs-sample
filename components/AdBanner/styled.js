import styled, { ThemeProvider } from "styled-components"

export const AdBannerStyled = styled.div`
    background-color: ${(props) => props.theme.colors.orange};
    margin: ${(props) => props.margin ? props.margin : ''};
    padding: 0 25px;
    ${(props) => props.theme.mediaQueries.lg} {
        padding: 0;
    }

    .img-column{
        width: 100%;
        display: none;
        ${(props) => props.theme.mediaQueries.lg} {
            width: unset;
            display: block;
        }
    }

    .adBannerStyled {
        position: relative;
     
        &__flex-container{
            display: flex;
            flex-direction: column;

            ${(props) => props.theme.mediaQueries.lg} {
                flex-direction: row;
            }
        }

      
        &__column {
            
            position: relative;
            ${(props) => props.theme.mediaQueries.lg} {
                flex-direction: row;
                overflow: hidden;
                min-height: 415px;
                flex: 1 0 0;
            }
            &.content {
                padding: 40px 0;
                
                ${(props) => props.theme.mediaQueries.lg} {
                    padding: 80px 0;
                }
                
                h2 {
                    max-width: 90%;
                   
                    ${(props) => props.theme.mediaQueries.lg} {
                        max-width: 75%;
                    }
                }
            }
        }
        
        &__decoration {
            margin-top: 40px;
        }

        &__poster {
            height: 103%;
            top: 5px;
            left: 27%;
            opacity: 0.8;
            /* display:none; */
            ${(props) => props.theme.mediaQueries.lg} {
                top: -7px;
                left: 20%;
            }
        }
    }
`
