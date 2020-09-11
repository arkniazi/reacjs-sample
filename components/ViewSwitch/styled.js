import styled from "styled-components"

export const ViewSwitchStyled = styled.div`
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
