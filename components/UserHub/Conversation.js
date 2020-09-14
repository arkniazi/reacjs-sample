import { demoMessageList } from './DemoData'
import { ConversationStyled } from './styled'

import { ConversationTitleBar } from './ConversationTitleBar'



export const Conversation = ({ conversationID, setView, ContainerVariants, initial, animate, exit }) => {

    const MessageListItem = demoMessageList[conversationID - 1];

    return (
        <ConversationStyled
            variants={ContainerVariants}
            initial={initial}
            animate={animate}
            exit={exit}
        >

            <ConversationTitleBar setView={setView} MessageListItem={MessageListItem} />

            <div>
                <h2 className="black">CONVERSTATION HERE</h2>
            </div>


            <div>
                <p>send Message Form here</p>
            </div>


        </ConversationStyled>
    )
}