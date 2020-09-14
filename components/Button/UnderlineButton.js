import { StyledUnderlineButton } from './styled'

export const UnderlineButton = ({ className, onClick, text, children }) => {
    return (
        <StyledUnderlineButton className={className} onClick={onClick}>{children}</StyledUnderlineButton>
    )
}