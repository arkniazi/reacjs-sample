import { useState } from "react"
import { InnerPageBanner } from "../../components/InnerPageBanner"
import { ComponentContainer } from "../../components/styles/Page"
import { FlexContainer } from "../../components/styles/Page"
import { AdBanner } from "../../components/AdBanner"
import { Filter } from "../../components/Filter"
import { ProductGrid } from "../../components/ProductGrid"
import SearchPageTemplate from "../../templates/SearchPageTemplate"

const SearchPage = ({ category, subcategory }) => {
    return (
        <>
            <SearchPageTemplate>
                <ComponentContainer>
                    <FlexContainer>
                        <Filter category={category} subcategory={subcategory} />
                        <ProductGrid />
                    </FlexContainer>
                    <AdBanner margin="90px 0 0 0" />
                </ComponentContainer>
            </SearchPageTemplate>

        </>
    )
}

export default SearchPage
