import StandardPageTemplate from "../templates/StandardPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { ColorColumns } from "../components/ColorColumns"
import { TextLayout } from "../components/InnerPageBanner/TextLayout"
import { ContentColumnsAccordion } from '../components/ContentColumns'
const Pricing = () => {
    return (
        <>
            <InnerPageBanner>
                <TextLayout title="Pricing Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </InnerPageBanner>
            <StandardPageTemplate>
                <ColorColumns />
                <ContentColumnsAccordion />
            </StandardPageTemplate>
        </>
    )
}

export default Pricing
