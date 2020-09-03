import styled from "styled-components"

export const ProductGridStyled = styled.div`
    border: 1px solid;
`

export const ViewSwitchStyled = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: flex-end;
    padding: 45px 0 15px 0;
    .viewSwitch{
        &__icon{
            cursor: pointer;
            transform:scale(1);
            transition: transform .2s ease;
            &:hover{
                transform:scale(1.1);
            }
            &--grid{
                margin-right: 15px;
            }
        }
    }
`
