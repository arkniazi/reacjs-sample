import styled from "styled-components"

export const StyledHeader = styled.div`
    background-color: transparent;
    z-index: 2;
    position: absolute;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};

    .container {
        display: flex;
        align-items: center;
        /* @media ${device.desktopL} {
            padding: 0;
        } */
    }
`

export const StyledLogo = styled.h3`
    color: white;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font.heading};
    margin: 0 30px 0 0;
    display: flex;
    align-items: center;
    img {
        margin-left: 10px;
    }
    a {
        color: white;
    }
`
