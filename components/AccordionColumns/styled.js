import styled from "styled-components"

export const AccordionColumnsStyled = styled.div`
    border: 1px solid;

    .AccordionColumns {
        &__column {
            flex: 1 0 0;

            &:last-child {
                > div {
                    margin-left: 20px;
                }
            }
        }
    }
`
