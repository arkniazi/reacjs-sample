import StandardPageTemplate from "../templates/StandardPageTemplate"
import { Banner } from "../components/Banner"
import { LinkList } from "../components/LinkList"
import { ContentSplit } from "../components/ContentSplit"
import { CardRow } from "../components/CardRow"
import { AdBanner } from "../components/AdBanner"
import { InstagramBanner } from "../components/InstagramBanner"
import { ProductsByCategory } from "../components/ProductsByCategory";

const Home = (props) => {
    return (
        <>
            <Banner />
            <StandardPageTemplate>
                <LinkList />
                <ContentSplit />
                <ProductsByCategory />
                <CardRow />
                <AdBanner />
                <InstagramBanner />
            </StandardPageTemplate>
        </>
    )
}

export default Home
