import { SingleConversationWrapper, SingleConversationStyled, SingleMessageStyled } from '../styled';


export const ConversationHistory = ({ MessageListItem }) => {
    const messageHistory = MessageListItem.messageHistory;
    const [mostRecentMessage] = messageHistory.slice(-1);

    console.log(mostRecentMessage);
    return (
        <SingleConversationWrapper>
            <p className="most-recent-time label">{mostRecentMessage.timeSent}</p>
            <SingleConversationStyled>
                {messageHistory.map((message, index) => {
                    return (
                        <SingleMessageStyled key={index}>
                            <div className="singleMessage__title-bar">

                                <p className="label">{message.user}</p>
                                <p className="message">{message.timeSent}</p>
                            </div>
                            <div className="singleMessage__content">
                                <p>{message.message}</p>
                            </div>

                        </SingleMessageStyled>
                    )
                })}
            </SingleConversationStyled>

        </SingleConversationWrapper>

    )
}