import { useState } from 'react'
import { MessageList } from './MessageList'
import { Conversation } from '../Conversation/Conversation'
import { AnimatePresence } from 'framer-motion'


const ContainerVariants = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }
}

const MessageListVariants = {
    show: {
        transition: {
            staggerChildren: 0.1,

        }
    },
    hide: {

    }
}

const MessageListTeaseVariants = {
    show: {
        y: 0,
        opacity: 1,
    },
    hide: {
        y: -15,
        opacity: 0,
    }

}



export const Messages = ({ demoMessageList }) => {
    const [view, setView] = useState('list');
    const [currentConversationID, setConversationID] = useState(0)


    const renderView = () => {
        switch (view) {
            case 'list':
                return (
                    <MessageList
                        setConversationID={setConversationID}
                        setView={setView}
                        variants={MessageListVariants}
                        MessageListTeaseVariants={MessageListTeaseVariants}
                        ContainerVariants={ContainerVariants}
                        demoMessageList={demoMessageList}
                        initial="hide"
                        animate="show"
                        exit="hide"
                    />
                )

            case 'conversation':
                return (
                    <Conversation
                        conversationID={currentConversationID}
                        setView={setView}
                        demoMessageList={demoMessageList}
                        ContainerVariants={ContainerVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                    />
                )
        }
    }

    return (
        <div>
            <AnimatePresence>
                {renderView()}
            </AnimatePresence>

        </div>
    )
}