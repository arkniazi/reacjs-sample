import styled from "styled-components"


export const ColorColumnsFlex = styled.div`
    display: flex;
    flex-direction: column;
    ${(props) => props.theme.mediaQueries.lg} {
        flex-direction: row;
    }
`

export const ColorColumnsStyled = styled.div`
    text-align: center;
    margin-bottom: 95px;
    .colorColumns {
        &__spacer {
            margin: 20px 0 20px 0;

            ${(props) => props.theme.mediaQueries.lg} {
                margin: 40px 0 60px 0;
            }
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
                margin-bottom: 25px;
                background: ${(props) => props.theme.colors.orange};

                .colorColumns__button {
                    border: 2px solid black;
                }

                ${(props) => props.theme.mediaQueries.lg} {
                    margin-right: 10px;
                    margin-bottom: 0;
                }
            }

            &:last-child {
                background: ${(props) => props.theme.colors.darkBlue};

                ${(props) => props.theme.mediaQueries.lg} {
                    margin-left: 10px;
           
                }

                h5 {
                    margin-bottom: 0;
                }
                p {
                    color: white;
                    margin: 40px 0;

                    ${(props) => props.theme.mediaQueries.lg} {
                        margin: 0;
                    }
                }
            }
        }
    }
`


