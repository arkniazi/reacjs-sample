import { SingleItemVariationForm } from '../forms/SingleItemVariationForm'
import { PriceStyled } from './styled'

export const Variations = ({ handleSetItemSize, variationOptions }) => {
    return (
        <>
            {/* price needs to be set dynamically when variations change */}
            <PriceStyled>$180.00</PriceStyled>
            <SingleItemVariationForm options={variationOptions} handleSetItemSize={handleSetItemSize} />
        </>
    )
}