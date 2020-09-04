import styled from "styled-components"

export const SingleItemStyled = styled.div`
 
    padding-bottom: 88px;
    .singleItem {
        &__column {
    
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
 
    .title-container {
        margin-bottom: 16px;
    }
`

export const PriceStyled = styled.div`
    color: ${(props) => props.theme.colors.orange};
    font-family: ${(props) => props.theme.font.heading};
    font-weight: bold;
    padding-bottom: 10px;
`