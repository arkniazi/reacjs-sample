import { ComponentContainer } from "../styles/Page"
import { ProductGrid } from '../ProductGrid'
import { searchResults } from '../DemoData';
import { SearchByCategoryForm } from '../Forms/SearchByCategoryForm';
import { FlexContainer } from "../styles/Page"
import { Button } from "../Button"
import styled from "styled-components"


const TitleWrapper = styled.div`
    flex: 2 0 0;
    display: flex;
    align-items: center;
`

const ButtonWrapper = styled.div`
    width: 156px;
    margin: 0 auto;
`

export const ProductsByCategory = () => {
    return (
        <ComponentContainer>
            <FlexContainer>
                <TitleWrapper>
                    <h2>Things you'll love</h2>
                </TitleWrapper>

                <div style={{ flex: '1 0 0' }}>
                    <SearchByCategoryForm />
                </div>

            </FlexContainer>

            <div style={{ marginTop: '25px' }}>
                <ProductGrid view='grid' searchResults={searchResults} />
            </div>
            <ButtonWrapper>
                <Button
                    className="contentSplit__cta"
                    btnText="View All"
                    url="/search-products"
                    size="medium"
                />
            </ButtonWrapper>

        </ComponentContainer>
    )
}