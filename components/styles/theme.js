export const breakpoints = ["576px", "768px", "992px", "1290px", "1600px"]

export const theme = {
    colors: {
        white: "#FFF",
        black: "#000",
        darkGray: "#272932",
        orange: "#F37126",
        themeBlue: "#179AD3",
        darkBlue: "#005CB0",
        lightGrey: "rgba(255,255,255,0.4)",
        borderGrey: "#ECEDEF",
        dateGrey: "#CFD1D8"
    },
    font: {
        body: "'Montserrat', sans-serif",
        heading: "'Rubik', sans-serif;",
    },
    sizes: {
        maxWidth: "1200px",
        headerHeight: "85px",
        sm: "40px",
        md: "60px",
        lg: "80px",
        xl: "100px",
    },
    buttons: {
        paddingSmall: "10px 30px",
        paddingMedium: "20px 42px",
    },
    fontSizes: {
        desktop: {
            banner: {
                size: "7.2rem",
                lineHeight: "110%",
            },
            h1: {
                size: "4.7rem",
                lineHeight: "110%",
            },
            h2: {
                size: "2.9rem",
                lineHeight: "2.9rem",
            },
            h3: {
                size: "2.3rem",
                lineHeight: "120%",
            },
            h4: {
                size: "1.9rem",
                lineHeight: "106%",
            },
            h5: {
                size: "1.6rem",
                lineHeight: "2.8rem",
            },
            lead: {
                size: "2.3rem",
                lineHeight: "143.5%",
            },
            label: {
                size: "1.2rem",
                lineHeight: "1.2rem",
            },
            body: {
                size: "1.6rem",
                lineHeight: "143.5%",
            },
            small: {
                size: "1.4rem",
                lineHeight: "1.4rem",
            },
            link: {
                size: "1.6rem",
                lineHeight: "2.4rem",
            },
            tiny: {
                size: "1.2rem",
                lineHeight: "1.2rem",
            },
        },
        mobile: {
            banner: {
                size: "5.2rem",
                lineHeight: "110%",
            },
            h1: {
                size: "3.6rem",
                lineHeight: "110%",
            },
            h2: {
                size: "2.5rem",
                lineHeight: "2.5rem",
            },
            h3: {
                size: "2.1rem",
                lineHeight: "120%",
            },
            h4: {
                size: "1.8rem",
                lineHeight: "106%",
            },
            h5: {
                size: "1.6rem",
                lineHeight: "2.8rem",
            },
            lead: {
                size: "2.1rem",
                lineHeight: "143.5%",
            },
            label: {
                size: "1.2rem",
                lineHeight: "1.2rem",
            },
            body: {
                size: "1.6rem",
                lineHeight: "143.5%",
            },
            link: {
                size: "1.6rem",
                lineHeight: "2.4rem",
            },
        },
    },
    space: {
        xxs: "0.5rem", //5px
        xs: "1rem", //10px
        sm: "2.4rem", //24px
        sm_2: "3rem", //30px
        md: "4rem", //40px
        lg: "5.6rem", //56px
        xl: "7.2rem", //72px
        xxl: "9.6rem", //96px
    },
    transitions: {
        default: "all 0.5s ease",
    },
    radii: {
        default: "4px",
        sm: "4px",
        md: "10px",
        lg: "16px",
        xl: "30px",
    },
    mediaQueries: {
        sm: `@media screen and (min-width: ${breakpoints[0]})`,
        md: `@media screen and (min-width: ${breakpoints[1]})`,
        lg: `@media screen and (min-width: ${breakpoints[2]})`,
        xl: `@media screen and (min-width: ${breakpoints[3]})`,
        xxl: `@media screen and (min-width: ${breakpoints[4]})`,
    },
    bs: {
        blue: "-15px 15px 45px rgba(0, 92, 176, 0.75);",
        dark: "-15px 15px 43px rgba(84, 103, 121, 0.25);"
    },
}
