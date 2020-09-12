import StandardPageTemplate from "../templates/StandardPageTemplate"
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

            <StandardPageTemplate>
                <ContentColumns />
                <CardRow />
                <AdBanner />
            </StandardPageTemplate>
        </>
    )
}

export default About
