import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`
 html {
        box-sizing: border-box;
        font-size: 10px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        padding: 0;
        margin: 0;
        font-size:${theme.fontSizes.desktop.body.size};
        font-family: ${theme.font.body};
    }

    a{
        text-decoration: none;
    }
    ul{
        padding: 0;
        margin: 0;
        list-style-type:none;
    }
    li{
        text-decoration: none;
    }
    #nprogress .spinner-icon{
        background:${theme.colors.darkBlue};
        border-top-color: ${theme.colors.themeBlue};
        border-left-color: ${theme.colors.themeBlue};
    }
    #nprogress .bar{
        background: ${theme.colors.themeBlue};

    }
    p{
        font-size:${theme.fontSizes.mobile.body.size};
        line-height: ${theme.fontSizes.mobile.body.lineHeight};
        margin: 0;

        ${(props) => props.theme.mediaQueries.lg} {
            font-size:${theme.fontSizes.desktop.body.size};
            line-height: ${theme.fontSizes.desktop.body.lineHeight}; 
        }

        &.lead{
            font-size:${theme.fontSizes.mobile.lead.size};
            line-height: ${theme.fontSizes.mobile.lead.lineHeight};
            font-family: ${theme.font.heading};

            ${(props) => props.theme.mediaQueries.lg} {
                font-size:${theme.fontSizes.desktop.lead.size};
                line-height: ${theme.fontSizes.desktop.lead.lineHeight};
            }
        }
        &.label{
            font-size:${theme.fontSizes.mobile.label.size};
            line-height: ${theme.fontSizes.mobile.label.lineHeight};
            font-family: ${theme.font.heading};
            font-weight: bold;
            text-transform: uppercase;

            ${(props) => props.theme.mediaQueries.lg} {
                font-size:${theme.fontSizes.desktop.label.size};
                line-height: ${theme.fontSizes.desktop.label.lineHeight};
            }
        }
        &.small{
            font-size: ${theme.fontSizes.desktop.size};
        }
    }

    h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5{
        margin: 0;
        padding: 0;
        font-family: ${theme.font.heading};
        text-transform: uppercase;
        letter-spacing: -2px;
        font-weight: bold;
        &.black{
            color: ${theme.colors.black};
        }
        &.darkGrey{
            color: ${theme.colors.darkGray};
        }
        &.white{
            color: ${theme.colors.white};
        }
        &.orange{
            color: ${theme.colors.orange};
        }
    }
    h1, .h1{
        font-size:${theme.fontSizes.mobile.h1.size};
        line-height: ${theme.fontSizes.mobile.h1.size};
        color: ${theme.colors.white};

        ${(props) => props.theme.mediaQueries.lg} {
            font-size:${theme.fontSizes.desktop.h1.size};
            line-height: ${theme.fontSizes.desktop.h1.size};
        }

        &.banner{
            font-size:${theme.fontSizes.mobile.banner.size};
            line-height: ${theme.fontSizes.mobile.banner.lineHeight};

            ${(props) => props.theme.mediaQueries.lg} {
                font-size:${theme.fontSizes.desktop.banner.size};
                line-height: ${theme.fontSizes.desktop.banner.lineHeight}; 
            }
        }
    }

    h2, .h2{
        font-size:${theme.fontSizes.mobile.h2.size};
        line-height: ${theme.fontSizes.mobile.h2.size};

        ${(props) => props.theme.mediaQueries.lg} {
            font-size:${theme.fontSizes.desktop.h2.size};
            line-height: ${theme.fontSizes.desktop.h2.size};
        }
    }

    h3, .h3{
        font-size:${theme.fontSizes.mobile.h3.size};
        line-height: ${theme.fontSizes.mobile.h3.size};

        ${(props) => props.theme.mediaQueries.lg} {
            font-size:${theme.fontSizes.desktop.h3.size};
            line-height: ${theme.fontSizes.desktop.h3.size};
        }
    }

    h4, .h4{
        font-size:${theme.fontSizes.mobile.h4.size};
        line-height: ${theme.fontSizes.mobile.h4.size};

        ${(props) => props.theme.mediaQueries.lg} {
            font-size:${theme.fontSizes.desktop.h4.size};
            line-height: ${theme.fontSizes.desktop.h4.size};
        }

        &.form-heading{
            letter-spacing: unset;
            font-weight: 500;
            margin-top: 45px;
            margin-bottom: 15px;
        }
    }

    h5, .h5{
        font-size:${theme.fontSizes.mobile.h5.size};
        line-height: ${theme.fontSizes.mobile.h5.size};
        letter-spacing: 0;

        ${(props) => props.theme.mediaQueries.lg} {
            font-size:${theme.fontSizes.desktop.h5.size};
            line-height: ${theme.fontSizes.desktop.h5.size};
        }
    }

    label.label, .label{
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: bold;
        font-family: ${theme.font.heading};
        letter-spacing: 0px;
        line-height: 1.6rem;
    }

    h4.label{
        margin-bottom: 0;
    }

`