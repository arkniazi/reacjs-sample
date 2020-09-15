import { FlexContainer } from "../styles/Page"
import { BannerDecoration } from "../BannerDecoration"
import { ContactForm } from "../Forms/ContactForm"
import { FormLayoutStyled } from "./styled"
import { ComponentContainer } from "../styles/Page"

export const FormLayout = () => {
    return (
        <FormLayoutStyled
            imgURL="/images/banner/banner-background.png"
        >
            <ComponentContainer>
                <div className="flex-container">
                    <div className="formLayout__column content-column">
                        <div className="formLayout__content">
                            <h1>
                                Have a question?
                                <br /> We would love to hear from you.
                            </h1>
                            <BannerDecoration
                                alt="title decoration"
                                className="formLayout__decoration"
                            />
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Est posuere ipsum enim ornare amet, risus
                                donec.
                            </p>
                        </div>
                    </div>
                    <div className="formLayout__column">
                        <ContactForm />
                    </div>
                </div>
            </ComponentContainer>
        </FormLayoutStyled>
    )
}


