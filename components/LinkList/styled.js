import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 85px;
`

export const StyledLinkList = styled.ul`
    display: flex;
    width: 100%;
    padding-left: 130px;
    margin-bottom: 35px;
    li {
        width: 100%;
        text-align: left;
        &:hover {
            .textLink__decoration {
                transform: translateX(15px);
            }
        }
    }

    &:last-child {
        margin-bottom: 0;
    }
    .textLink {
        &__decoration {
            transform: translateX(10px);
            transition: transform 0.3s ease-out;
            will-change: transform;
        }
    }
`
