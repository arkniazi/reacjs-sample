import { useState } from "react"
import { InnerPageBanner } from "../../components/InnerPageBanner"
import { ComponentContainer } from "../../components/styles/Page"
import { FlexContainer } from "../../components/styles/Page"
import { AdBanner } from "../../components/AdBanner"
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
                <AdBanner />
            </ComponentContainer>
        </>
    )
}

export default SearchPage
