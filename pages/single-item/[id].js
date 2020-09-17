import { useRouter } from "next/router"
import SingleItem from "./index"

const SingleItemPage = (props) => {
    const router = useRouter()

    const id = router.query.id;

    return <SingleItem id={id} />

}

export default SingleItemPage
