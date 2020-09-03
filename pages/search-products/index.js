import { useState } from "react"
import { InnerPageBanner } from "../../components/InnerPageBanner"
import { ComponentContainer } from "../../components/styles/Page"
import { FlexContainer } from "../../components/styles/Page"
import { AdBanner } from "../../components/AdBanner"
import { Filter } from "../../components/Filter"
import { ProductGrid } from "../../components/ProductGrid"
import { KeywordSearchForm } from '../../components/Forms/KeywordSearchForm'
import SearchPageTemplate from "../../templates/SearchPageTemplate"
import styled from "styled-components"

const ProductGridContainer = styled.div`
    flex: 3 0 0;
    margin-left: 60px;
`

const SearchPage = ({ category, subcategory }) => {
    return (
        <>
            <SearchPageTemplate>
                <ComponentContainer>
                    <FlexContainer>
                        <Filter category={category} subcategory={subcategory} />
                        <ProductGridContainer>
                            <KeywordSearchForm />
                            <ProductGrid />
                        </ProductGridContainer>
                    </FlexContainer>
                    <AdBanner margin="90px 0 0 0" />
                </ComponentContainer>
            </SearchPageTemplate>

        </>
    )
}

export default SearchPage
