import SingleItemTemplate from "../templates/SingleItemPageTemplate"
import { SingleItem } from "../components/SingleItem"
import { AdBanner } from "../components/AdBanner"

const Item = ({ ...props }) => {
    return (
        <SingleItemTemplate>
            <SingleItem id={props.query.id} />
            <AdBanner />
        </SingleItemTemplate>
    )
}

export default Item
