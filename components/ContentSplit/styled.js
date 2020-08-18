import styled from "styled-components"

export const StyledContentSplit = styled.div`
    margin-bottom: 95px;

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
            flex: 1 1 0;
        }
        &__feature-img {
            margin: 0;
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
            margin-bottom: 30px;
        }
        &__decoration {
            margin-bottom: 30px;
            align-self: flex-start;
        }
        &__copy {
            margin-bottom: 30px;
        }

        &__cta {
            width: 155px;
        }
    }
`
