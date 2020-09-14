import { ConversationTitleBarStyled } from './styled'
import { BackButton } from '../Button'

export const ConversationTitleBar = ({ MessageListItem, setView }) => {
    return (
        <ConversationTitleBarStyled>

            <div className="conversation__nav">
                <BackButton onClick={() => setView('list')}>Back</BackButton>
            </div>

            <div className="conversation__title">
                <p class="label">{MessageListItem.productTitle}</p>
            </div>

            <div className="conversation__user">
                <p className="label">@{MessageListItem.user.username}</p>
            </div>
        </ConversationTitleBarStyled>
    )
}