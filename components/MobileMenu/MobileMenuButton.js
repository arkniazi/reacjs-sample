import { Menu } from '../Icons'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    &:focus{
        outline: none;
    }
`


export const MobileMenuButton = ({ isNavOpen, setNavState }) => {
    return (
        <div>
            <ButtonStyled onClick={() => setNavState(!isNavOpen)}>
                <Menu height={30} width={30} fill="white" />
            </ButtonStyled>
        </div>

    )
}