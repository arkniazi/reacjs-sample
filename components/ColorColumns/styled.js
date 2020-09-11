import styled from "styled-components"

export const ColorColumnsStyled = styled.div`
    text-align: center;
    margin-bottom: 95px;
    .colorColumns {
        &__spacer {
            margin: 40px 0 60px 0;
        }

        &__column {
            flex: 1 0 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 60px 66px;
            border-radius: 2px;
            h5 {
                margin-bottom: 35px;
            }

            &:first-child {
                margin-right: 10px;
                background: ${(props) => props.theme.colors.orange};

                .colorColumns__button {
                    border: 2px solid black;
                }
            }

            &:last-child {
                margin-left: 10px;
                background: ${(props) => props.theme.colors.darkBlue};

                h5 {
                    margin-bottom: 0;
                }
                p {
                    color: white;
                }
            }
        }
    }
`
