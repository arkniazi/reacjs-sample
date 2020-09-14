import { ProductGrid } from '../ProductGrid'
import { searchResults } from '../../pages/search-products/demodata'

export const Favourites = () => {
    return (
        <ProductGrid view="grid" searchResults={searchResults} />
    )
}