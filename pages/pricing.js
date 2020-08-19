import PricingPageTemplate from "../templates/PricingPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { ColorColumns } from "../components/ColorColumns"
import { AccordionColumns } from "../components/AccordionColumns"

const Contact = () => {
    return (
        <>
            <InnerPageBanner
                layout="text"
                title="Pricing Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <PricingPageTemplate>
                <ColorColumns />
                <AccordionColumns />
            </PricingPageTemplate>
        </>
    )
}

export default Contact
