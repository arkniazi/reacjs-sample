import { useState } from 'react'
import { Image } from "../Image"
import styled from "styled-components"
import { FavouriteProductIcon } from '../Icons'
import { GridTeaseStyled } from "./styled"


export const GridTease = ({ result: { imagePath, price, title, description, volume, metricLength } }) => {
    const [favourite, setFavourite] = useState(false) //default set by data, hardcoded for now

    const handleSetFavourite = () => {
        setFavourite(!favourite)
    }

    return (
        <GridTeaseStyled>
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
                    <p className="gridViewStyled__meta">{metricLength} + {volume}</p>
                </div>
            </div>
        </GridTeaseStyled>
    )
}