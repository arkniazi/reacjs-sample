import styled from 'styled-components';

export const ProgressBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
    >div{
        flex: 1 0 0;
        margin-right: 20px;
        height: 5px;
        background-color:${props => props.theme.colors.themeBlue};
        border-radius:3px;
        opacity:0.3;
        filter: grayscale(1);
        &.active{
            background-color:${props => props.theme.colors.themeBlue};
            border: none;
            opacity: 1;
            filter: grayscale(0);
        }

        &:last-child{
            margin-right: 0;
        }
    }
`
