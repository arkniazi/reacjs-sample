import { useRouter } from "next/router"
import SearchPage from "."

const SearchCategoryPage = () => {
    const router = useRouter()
    // const category = router.query.param[0];
    const category = 'surf';
    //const subcategory = router.query.param[1];
    const subcategory = 'shortboard';

    return <SearchPage category={category} subcategory={subcategory} />
}

export default SearchCategoryPage
 