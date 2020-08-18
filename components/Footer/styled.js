import styled from "styled-components"

export const FooterStyled = styled.div`
    padding-top: 60px;
    .footer {
        &__column {
            display: flex;
            flex-direction: column;
            flex: 1 0 0;
            &.flex-1 {
                flex: 1 0 0;
            }
            &.flex-2 {
                flex: 2 0 0;
            }
            &.logo-col {
                display: flex;
                flex-direction: row;
                align-items: center;
                align-self: flex-start;
            }
            &.bottom-logo-col {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            &.flex-end {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;

                a {
                    margin-left: 25px;
                }
            }
        }

        &__bottom-link {
            margin-right: 21px;
        }
        &__bottom-row {
            padding: 20px 0;
            border-top: 1px solid black;
            margin-top: 40px;
        }
    }

    .inner-column {
        display: flex;
        flex-direction: column;
        a {
            margin-bottom: 15.5px;
        }
        &:nth-child(2) {
            padding-left: 200px;
            a {
                margin-bottom: 26px;
            }
        }
    }
`
