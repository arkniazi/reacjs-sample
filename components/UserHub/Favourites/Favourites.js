import { ProductGrid } from '../../ProductGrid'
import { searchResults } from '../../DemoData'

export const Favourites = () => {
    return (
        <ProductGrid view="grid" searchResults={searchResults} />
    )
}