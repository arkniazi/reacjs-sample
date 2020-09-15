import styled from "styled-components"

export const StyledContentSplit = styled.div`
    margin-bottom: 95px;

    .flex-container{
        display: flex;
        align-items: center;
    }

    p{
        margin: 0;
    }

    .contentSplit {
        &__split {
            &:first-child {
            }
            &:last-child {
                max-width: 475px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            flex: 1 0 0;
        }
        &__feature-img {
            margin: 0;
            width: 100%;

            ${(props) => props.theme.mediaQueries.lg} {
                width: unset;
            }
        }
        &__label-container {
            position: relative;
            top: -32px;
            left: 12px;

            svg {
                margin-right: 7px;
            }
        }
        &__label {
            color: white;
        }
        &__title {
            margin-bottom: 20px;
            ${(props) => props.theme.mediaQueries.lg} {
                margin-bottom: 30px;
            }
        }
        &__decoration {
            margin-bottom: 25px;
            align-self: flex-start;
            ${(props) => props.theme.mediaQueries.lg} {
                margin-bottom: 30px;
            }
        }
        &__copy {
            margin-bottom: 30px;
        }

        &__cta {
            width: 155px;
        }
    }
`
