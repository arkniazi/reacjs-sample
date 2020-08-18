import styled from "styled-components"

export const StyledCardRow = styled.div`
    margin-bottom: 80px;
    margin-top: ${(props) => props.theme.sizes.md};
    .CardRow {
        &__title {
            margin-bottom: 30px;
        }
    }
`

export const StyledCard = styled.div`
    margin: 0 9px;
    flex: 1 0 0;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }

    img {
        max-width: 284px;
    }

    .styledCard {
        &__lead {
            font-size: 1.4rem;
            font-weight: bold;
            font-family: ${(props) => props.theme.font.heading};
        }
    }
`
