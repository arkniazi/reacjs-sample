import { FlexContainer } from "../styles/Page"
import { BannerDecoration } from "../BannerDecoration"
import { ContactForm } from "../Forms/ContactForm"

export const FormLayout = () => {
    return (
        <FlexContainer>
            <div className="innerPageBanner__column content-column">
                <div>
                    <h1>
                        Have a question?
                        <br /> We would love to hear from you.
                    </h1>
                    <BannerDecoration
                        alt="title decoration"
                        className="innerPageBanner__decoration form-layout"
                    />
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                        posuere ipsum enim ornare amet, risus donec.
                    </p>
                </div>
            </div>
            <div className="innerPageBanner__column">
                <ContactForm />
            </div>
        </FlexContainer>
    )
}
