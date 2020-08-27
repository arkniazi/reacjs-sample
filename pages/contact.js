import ContactPageTemplate from "../templates/ContactPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { FormLayout } from "../components/InnerPageBanner/FormLayout"
const Contact = () => {
    return (
        <>
            <InnerPageBanner>
                <FormLayout />
            </InnerPageBanner>
            <ContactPageTemplate></ContactPageTemplate>
        </>
    )
}

export default Contact
