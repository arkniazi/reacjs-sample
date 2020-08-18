import AboutPageTemplate from "../templates/HomePageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { ContentColumns } from "../components/ContentColumns"
import { CardRow } from "../components/CardRow"
import { AdBanner } from "../components/AdBanner"

const About = (props) => {
    return (
        <>
            <InnerPageBanner />
            <AboutPageTemplate>
                <ContentColumns />
                <CardRow />
                <AdBanner />
            </AboutPageTemplate>
        </>
    )
}

export default About
