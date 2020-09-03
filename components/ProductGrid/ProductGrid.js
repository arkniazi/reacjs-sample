import { useState } from "react"
import { ProductGridStyled } from "./styled"
import { ViewSwitch } from "./ViewSwitch"

export const ProductGrid = () => {
    const [view, updateView] = useState('grid')

    const handleViewUpdate = (type) => {
        updateView(type)
    }

    return (
        <ProductGridStyled>
            <ViewSwitch current={view} handleViewUpdate={handleViewUpdate} />
            <p>{view}</p>
            <div className="ProductGrid">
                <p>IM A PRODUCT GRID</p>
            </div>
        </ProductGridStyled>
    )
}
