import BorderTopTemplate from "../../templates/BorderTopTemplate"
import { SingleItemComponent } from "../../components/SingleItem"
import { AdBanner } from "../../components/AdBanner"

const SingleItem = ({ id }) => {
    return (
        <BorderTopTemplate>
            <SingleItemComponent id={id} />
            <AdBanner />
        </BorderTopTemplate>
    )
}

export default SingleItem