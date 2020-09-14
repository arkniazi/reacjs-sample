import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion'

export const TeaseStyled = styled(motion.li)`
    display: flex;
    border-top: 2px solid ${(props) => props.theme.colors.black};
    width: 100%;
    padding: 30px 10px;
    cursor:pointer;
    p{
        margin: 0;
    }

    .messageList{
        &__user-container{
            flex: 2 0 0;
            display: flex;
            align-items: center;
        }
        &__user-img{
            border-radius: 50%;
            margin-right: 30px;
        }
        &__title-container{
            flex: 3 0 0;
            display: flex;
            align-items: center;
        }
        &__cta-container{
            flex: 1 0 0;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;

            .icon-wrap{
                cursor: pointer;
            }
        }
    }
`

export const ConversationStyled = styled(motion.div)`
    p{
        margin: 0;
    }
`

export const ConversationTitleBarStyled = styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        .conversation{
            &__nav{
                flex: 1 0 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            &__title{
                flex: 2 0 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &__user{
                flex: 1 0 0;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
        }
`