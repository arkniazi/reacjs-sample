import { useRouter } from "next/router"
import SearchPage from "../search-products"

const SearchCategoryPage = (props) => {
    const router = useRouter()
    const { category } = router.query

    return (
        <div>
            <SearchPage category={category} />
        </div>
    )
}

export default SearchCategoryPage
