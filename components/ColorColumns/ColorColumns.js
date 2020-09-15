import { ComponentContainer } from "../styles/Page"
import { ColorColumnsStyled, ColorColumnsFlex } from "./styled"
import { Button } from "../Button"
// className, btnText, url, margin, size
export const ColorColumns = () => {
    return (
        <ColorColumnsStyled>
            <ComponentContainer>
                <ColorColumnsFlex>
                    <div className="colorColumns__column">
                        <h5 className="black">Individual</h5>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sem.
                        </p>

                        <div className="colorColumns__spacer">
                            <h2 className="h1 white">FREE</h2>
                            <p className="label">
                                Fringilla aliquet nibh leo ornare lacus.
                            </p>
                        </div>

                        <Button
                            className="colorColumns__button"
                            btnText="Selected"
                            url="/"
                        />
                    </div>
                    <div className="colorColumns__column">
                        <h5 className="white">Shop</h5>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Enim elementum at tincidunt auctor turpis tincidunt amet,
                            sed. Cursus adipiscing ac odio aliquam nulla non in
                            ornare.
                        </p>
                        <Button btnText="Enquire" url="/" altTheme />
                    </div>
                </ColorColumnsFlex>
            </ComponentContainer>
        </ColorColumnsStyled>
    )
}
