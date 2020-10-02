import { useState } from 'react'
import Moment from 'react-moment';
import { Image } from "../Image"
import { HorizontalTeaseStyled, StatusStyled, ItemTimeStyled, SellingItemVariant, ItemCTAStyled } from './styled'
import { FavouriteProductIcon, Edit, ExitSquare } from '../Icons'
import { theme } from '../styles/theme'

export const HorizontalTease = ({
    variants,
    initial,
    animate,
    exit,
    sellingItems,
    setItemID,
    disableHover,
    setView,
    result: {
        imagePath,
        status,
        postDate,
        expires,
        id,
        price,
        title,
        description,
        volume,
        metricLength } }) => {

    const [favourite, setFavourite] = useState(false) //default set by data, hardcoded for now

    const handleSetFavourite = () => {
        setFavourite(!favourite)
    }
    const handleViewChange = () => {
        setView('edit')
        setItemID(id)
    }

    return (
        <HorizontalTeaseStyled
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            whileHover={!disableHover && { scale: 1.05 }}
        >
            <div className="gridViewStyled">
                <div className="gridViewStyled__imageWrap">
                    <FavouriteProductIcon
                        className={favourite ? 'gridViewStyled__favouriteIcon active' : 'gridViewStyled__favouriteIcon'}
                        onClick={handleSetFavourite}
                    />
                    <Image path={imagePath} />
                    <p className="gridViewStyled__priceTag">{price}</p>
                </div>

                <div>
                    <p className="gridViewStyled__title">{title}</p>
                    <p className="gridViewStyled__meta">New or Used</p>
                    <p className="gridViewStyled__description">{description}</p>
                    <p className="gridViewStyled__meta">{metricLength} + {volume}</p>
                </div>
                {sellingItems && (
                    <SellingItemVariant>
                        <StatusStyled active={status}>
                            <div className="icon"></div>
                            <p>{status ? 'Active' : 'Expired'}</p>
                        </StatusStyled>

                        <ItemTimeStyled>
                            <p>
                                <span>Posted: </span>
                                <Moment format="DD/MM/YYYY" unix>{postDate}</Moment>
                            </p>

                            <p>
                                <span>Expires In: </span>
                                <Moment format="DD/MM/YYYY" unix>{expires}</Moment>
                            </p>
                        </ItemTimeStyled>

                        <ItemCTAStyled>
                            <button onClick={handleViewChange}>
                                <Edit
                                    className="icon"
                                    height={24}
                                    width={24}
                                    fill={theme.colors.darkGrey}
                                />
                                <span>Edit Post</span>
                            </button>
                            <button onClick={() => alert('are you sure?')}>
                                <ExitSquare
                                    className="icon"
                                    height={24}
                                    width={24}
                                    fill={theme.colors.darkGrey}
                                />
                                <span>Remove Item</span>
                            </button>
                        </ItemCTAStyled>

                    </SellingItemVariant>
                )}

            </div>
        </HorizontalTeaseStyled >
    )
}