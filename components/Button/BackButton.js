import { BackChevronLeft } from '../Icons'
import { BackButtonStyled } from './styled'


export const BackButton = ({ className, onClick, children }) => {
    return (
        <BackButtonStyled className={className} onClick={onClick} >
            <div className='BackButton__icon-wrap'>
                <BackChevronLeft />
            </div>
            {children}
        </BackButtonStyled>
    )
}