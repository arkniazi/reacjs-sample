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

export const SingleConversationWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .most-recent-time{
        position: relative;
        top: -10px;
        padding: 10px;
        background: ${(props) => props.theme.colors.dateGrey};
        border-radius: 15px;
        font-size: 14px;
    }
`

export const SingleConversationStyled = styled.div`
    background-color: ${(props) => props.theme.colors.borderGrey};
    padding: 30px 25px;
    max-height: 350px;
    overflow-y: scroll;
    margin-top: -28px;
`

export const SingleMessageStyled = styled.div`
    margin-bottom: 35px;

    p{
        margin: 0;
    }

    &:last-child{
        margin-bottom: 0;
    }
    .singleMessage{
        &__title-bar{
            display: flex;
            align-items: center;
            margin-bottom: 11px;
            .label{
                margin-right: 15px;
            }
            .message{
                font-size: ${(props) => props.theme.fontSizes.desktop.small.size}
            }
        }
    }
`