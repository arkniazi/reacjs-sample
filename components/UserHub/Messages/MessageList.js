import { FlexContainer } from '../../styles/Page';

import { motion } from 'framer-motion'

import { MessageListTease } from './MessageListTease'

export const MessageList = ({
    variants,
    demoMessageList,
    MessageListTeaseVariants,
    ContainerVariants,
    initial,
    animate,
    exit,
    setConversationID,
    setView }) => {

    return (
        <motion.div
            variants={ContainerVariants}
            initial={initial}
            animate={animate}
            exit={exit}>

            <FlexContainer>
                <motion.ul
                    style={{ width: '100%' }}
                    variants={variants}
                    initial={initial}
                    animate={animate}
                    exit={exit}>

                    {demoMessageList.map(item => (
                        <MessageListTease
                            item={item}
                            setConversationID={setConversationID}
                            setView={setView}
                            variants={MessageListTeaseVariants}
                        />
                    ))}

                </motion.ul>
            </FlexContainer>
        </motion.div>
    )
}