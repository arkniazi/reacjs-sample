import styled from "styled-components"

export const ContentColumnsStyled = styled.div`
    background: ${(props) => props.theme.colors.darkBlue};
    padding-top: 134px;
    padding-bottom: 90px;
    .contentColumns {
        &__column {
            flex: 1 0 0;

            &.left-col > div {
                max-width: 80%;
                margin-bottom: 45px;

                ${(props) => props.theme.mediaQueries.lg} {
                    margin-bottom: 0;
                    padding-right: 110px;
                    max-width: unset;
                }
            }

            &.right-col > div {
                max-width: 80%;

                ${(props) => props.theme.mediaQueries.lg} {
                    padding-left: 95px;
                    max-width: unset;
                }
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

export const ContentColumnsAccordionStyled = styled.div`
    h2{
        margin-bottom: 25px;
        ${(props) => props.theme.mediaQueries.lg} {
            margin-bottom: 0;
        }
    }
    .flex-wrapper{
        display: flex;
        flex-direction: column;

        ${(props) => props.theme.mediaQueries.lg} {
            flex-direction: row;
        }
    }

    .flex-child{
        flex: 1 0 0;
    }

    .accordion-wrapper{
        ${(props) => props.theme.mediaQueries.lg} {
            padding-left: 20px;
        }
    }

    .accordion-content{
        padding-top: 20px;
    }
`