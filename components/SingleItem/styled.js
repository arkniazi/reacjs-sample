import styled from "styled-components"

export const SingleItemStyled = styled.div`
    border: 1px solid;
    padding-top: 70px;
    padding-bottom: 88px;
    .singleItem {
        &__column {
            border: 1px solid;
            flex: 1 0 0;

            &.copy-col {
                > div {
                    padding-left: 120px;
                    padding-right: 95px;
                }
            }
        }
    }
`

export const IntroStyled = styled.div`
    margin-bottom: 30px;
    border: 1px solid;
    .title-container {
        margin-bottom: 16px;
    }
`
