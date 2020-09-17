import { useState } from "react"
import { ViewSwitch } from "../../components/ViewSwitch"
import { InnerPageBanner } from "../../components/InnerPageBanner"
import { ComponentContainer } from "../../components/styles/Page"
import { FlexContainer } from "../../components/styles/Page"
import { AdBanner } from "../../components/AdBanner"
import { Filter } from "../../components/Filter"
import { ProductGrid } from "../../components/ProductGrid"
import { KeywordSearchForm } from '../../components/Forms/KeywordSearchForm'
import BorderTopTemplate from "../../templates/BorderTopTemplate"
import styled from "styled-components"

import { searchResults } from '../../components/DemoData';

const ProductGridContainer = styled.div`
    flex: 3 0 0;

    .inner{
        margin-left: 109px;
    }
`


const SearchPage = ({ category, subcategory }) => {
    const [view, updateView] = useState('grid')

    const handleViewUpdate = (type) => {
        updateView(type)
    }

    return (
        <>
            <BorderTopTemplate>
                <ComponentContainer>
                    <FlexContainer>
                        <Filter category={category} subcategory={subcategory} />

                        <ProductGridContainer>
                            <div className="inner">
                                <KeywordSearchForm />
                                <ViewSwitch view={view} handleViewUpdate={handleViewUpdate} />
                                <ProductGrid view={view} searchResults={searchResults} />
                            </div>
                        </ProductGridContainer>
                    </FlexContainer>
                    <AdBanner margin="90px 0 0 0" />
                </ComponentContainer>
            </BorderTopTemplate>
        </>
    )
}

export default SearchPage
