import { ConversationStyled } from '../styled'

import { ConversationTitleBar } from './ConversationTitleBar'
import { ConversationHistory } from './ConversationHistory'
import { MessageBuyerForm } from '../../Forms/MessageBuyerForm'

export const Conversation = ({ conversationID, setView, ContainerVariants, initial, animate, demoMessageList, exit }) => {

    const MessageListItem = demoMessageList[conversationID - 1];

    return (
        <ConversationStyled
            variants={ContainerVariants}
            initial={initial}
            animate={animate}
            exit={exit}
        >

            <ConversationTitleBar setView={setView} MessageListItem={MessageListItem} />


            <ConversationHistory MessageListItem={MessageListItem} />


            <div style={{ margin: '30px 0 0 0' }}>
                <MessageBuyerForm />
            </div>



        </ConversationStyled>
    )
}