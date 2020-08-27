import { useRouter } from "next/router"
import SearchPage from "."

const SearchCategoryPage = (props) => {
    const router = useRouter()
    const category = router.query.param[0];
    const subcategory = router.query.param[1];

    return (
        <div>
            <SearchPage category={category} subcategory={subcategory} />
        </div>
    )
}

export default SearchCategoryPage
