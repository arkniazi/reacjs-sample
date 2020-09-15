import styled from "styled-components"

export const StyledCardRow = styled.div`
    margin-bottom: 80px;
    margin-top: ${(props) => props.theme.sizes.md};
    .CardRow {
        &__title {
            margin-bottom: 30px;
        }
    }

    .flex-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const StyledCard = styled.div`
    margin: 10px 0px;
    flex: 1 0 0;
    max-width: 48%;
    

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }

    ${(props) => props.theme.mediaQueries.lg} {
        margin: 0 9px;
        max-width: unset;
    }

    img {
        max-width: 284px;   
        width: 100%;
        ${(props) => props.theme.mediaQueries.sm} {
            width: unset;
        }
    }

    .styledCard {
        &__lead {
            font-size: 1.4rem;
            font-weight: bold;
            font-family: ${(props) => props.theme.font.heading};
        }
    }
`
