import styled from "styled-components"

export const ContentColumnsStyled = styled.div`
    background: ${(props) => props.theme.colors.darkBlue};
    padding-top: 134px;
    padding-bottom: 90px;
    .contentColumns {
        &__column {
            flex: 1 0 0;

            &.left-col > div {
                padding-right: 110px;
            }

            &.right-col > div {
                padding-left: 95px;
            }

            h2 {
                margin-bottom: 33px;
            }

            p {
                color: ${(props) => props.theme.colors.white};
                margin-bottom: 25px;
                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }
    }
`
