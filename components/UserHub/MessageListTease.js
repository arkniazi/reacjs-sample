import { TeaseStyled } from './styled'
import { Image } from '../Image';
import { Star, Archive } from '../Icons'

export const MessageListTease = ({ item, setConversationID, setView, variants }) => {
    return (
        <TeaseStyled
            key={item.id}
            onClick={() => {
                setConversationID(item.id);
                setView('conversation')
            }}
            variants={variants}
            whileHover={{ scale: 1.03 }}
        >
            <div className="messageList__user-container">
                <Image
                    className="messageList__user-img"
                    path={item.user.img}
                    alt={item.user.name}
                    height={53}
                    width={53}
                />
                <div>
                    <h5 className="black">{item.user.name}</h5>
                    <p className="label">{item.lastMsgDate}</p>
                </div>
            </div>

            <div className="messageList__title-container">
                <p className="label">{item.productTitle}</p>
            </div>

            <div className="messageList__cta-container">
                <div className="icon-wrap">
                    <Star />
                </div>

                <div className="icon-wrap">
                    <Archive />
                </div>
            </div>
        </TeaseStyled>
    )
}