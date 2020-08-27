import { useState } from "react"
import { InnerPageBanner } from "../../components/InnerPageBanner"
import { ComponentContainer } from "../../components/styles/Page"
import { FlexContainer } from "../../components/styles/Page"

import { Filter } from "../../components/Filter"
import { ProductGrid } from "../../components/ProductGrid"

const SearchPage = ({ category }) => {
    return (
        <>
            <InnerPageBanner />
            <ComponentContainer>
                <FlexContainer>
                    <Filter category={category} />
                    <ProductGrid />
                </FlexContainer>
            </ComponentContainer>
        </>
    )
}

export default SearchPage
