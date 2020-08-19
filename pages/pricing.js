import PricingPageTemplate from "../templates/PricingPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { ColorColumns } from "../components/ColorColumns"

const Contact = () => {
    return (
        <>
            <InnerPageBanner
                layout="text"
                title="Pricing Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <PricingPageTemplate>
                <ColorColumns />
            </PricingPageTemplate>
        </>
    )
}

export default Contact
