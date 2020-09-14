import { useState } from 'react'
import { Image } from "../Image"
import { FavouriteProductIcon } from '../Icons'
import { GridTeaseStyled } from "./styled"
import TextLink from "../TextLink"



export const GridTease = ({
    variants,
    initial,
    animate,
    exit,
    result: {
        imagePath,
        price,
        title,
        description,
        id,
        volume,
        metricLength
    } }) => {

    const [favourite, setFavourite] = useState(false) //default set by data, hardcoded for now

    const handleSetFavourite = () => {
        setFavourite(!favourite)
    }


    return (
        <GridTeaseStyled
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


                    <TextLink
                        url="/single-item/[id]"
                        as={`/single-item/${id}`}
                        color="black"
                        text={title}
                    />


                    <p className="gridViewStyled__meta">{metricLength} + {volume}</p>
                </div>
            </div>
        </GridTeaseStyled>
    )
}