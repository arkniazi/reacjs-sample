import { IntroStyled } from "./styled"

export const Intro = ({ title, metricLength, description, price }) => {
    return (
        <IntroStyled>
            <div className="title-container">
                <h5>{metricLength}m {title}</h5>
                <p className="label">North Fremantle Australia</p>
            </div>

            <p className="small">{description}</p>
        </IntroStyled>
    )
}
