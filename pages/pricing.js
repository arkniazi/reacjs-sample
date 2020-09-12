import StandardPageTemplate from "../templates/StandardPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { ColorColumns } from "../components/ColorColumns"
import { TextLayout } from "../components/InnerPageBanner/TextLayout"
const Pricing = () => {
    return (
        <>
            <InnerPageBanner>
                <TextLayout title="Pricing Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </InnerPageBanner>
            <StandardPageTemplate>
                <ColorColumns />
            </StandardPageTemplate>
        </>
    )
}

export default Pricing
