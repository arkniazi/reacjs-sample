import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 85px;

    ${(props) => props.theme.mediaQueries.lg} {
        flex-direction: row;
    }

    h2{
        margin-bottom: 25px;
        ${(props) => props.theme.mediaQueries.lg} {
            max-width: 60%;
            margin-bottom: 0;
        } 
    }
`

export const StyledLinkList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
        width: 100%;
        text-align: left;
        margin-bottom: 10px;
        &:hover {
            .textLink__decoration {
                transform: translateX(15px);
            }
        }

        ${(props) => props.theme.mediaQueries.lg} {
            margin-bottom: 0;
        }
    }

    ${(props) => props.theme.mediaQueries.lg} {
        padding-left: 130px;
        margin-bottom: 35px;
        flex-direction: row;
    }

    &:last-child {
        margin-bottom: 0;
    }
    .textLink {
        
        &__decoration {
            transform: translateX(10px);
            transition: transform 0.3s ease-out;
            will-change: transform;
        }
    }
`
