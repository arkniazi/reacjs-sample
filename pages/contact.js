import ContactPageTemplate from "../templates/ContactPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"

const Contact = () => {
    return (
        <>
            <InnerPageBanner layout="form" />
            <ContactPageTemplate></ContactPageTemplate>
        </>
    )
}

export default Contact
