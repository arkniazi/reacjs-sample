import AboutPageTemplate from "../templates/AboutPageTemplate"
import { InnerPageBanner } from "../components/InnerPageBanner"
import { ContentColumns } from "../components/ContentColumns"
import { CardRow } from "../components/CardRow"
import { AdBanner } from "../components/AdBanner"
import { ColumnLayout } from "../components/InnerPageBanner/ColumnLayout"
const About = (props) => {
    return (
        <>
            <InnerPageBanner>
                <ColumnLayout />
            </InnerPageBanner>

            <AboutPageTemplate>
                <ContentColumns />
                <CardRow />
                <AdBanner />
            </AboutPageTemplate>
        </>
    )
}

export default About
