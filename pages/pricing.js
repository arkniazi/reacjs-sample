import PricingPageTemplate from "../templates/PricingPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { ColorColumns } from "../components/ColorColumns"
import { TextLayout } from "../components/InnerPageBanner/TextLayout"
const Contact = () => {
    return (
        <>
            <InnerPageBanner>
                <TextLayout title="Pricing Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </InnerPageBanner>
            <PricingPageTemplate>
                <ColorColumns />
            </PricingPageTemplate>
        </>
    )
}

export default Contact
