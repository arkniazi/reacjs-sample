import { useState } from 'react'
import { Image } from "../Image"
import { HorizontalTeaseStyled } from './styled'
import { FavouriteProductIcon } from '../Icons'


export const HorizontalTease = ({
    variants,
    initial,
    animate,
    exit,
    result: {
        imagePath,
        price,
        title,
        description,
        volume,
        metricLength } }) => {


    const [favourite, setFavourite] = useState(false) //default set by data, hardcoded for now

    const handleSetFavourite = () => {
        setFavourite(!favourite)
    }

    return (
        <HorizontalTeaseStyled
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            whileHover={{ scale: 1.05 }}
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
            </div>
        </HorizontalTeaseStyled>
    )
}