import SingleItemTemplate from "../../templates/SingleItemPageTemplate"
import { SingleItemComponent } from "../../components/SingleItem"
import { AdBanner } from "../../components/AdBanner"

export const SingleItem = ({ id }) => {
    return (
        <SingleItemTemplate>
            <SingleItemComponent id={id} />
            <AdBanner />
        </SingleItemTemplate>
    )
}
