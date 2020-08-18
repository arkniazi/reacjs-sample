import { ColumnLayout } from "./ColumnLayout"
import { FormLayout } from "./FormLayout"
import { InnerPageBannerStyled } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { publicUrl } from "../../config"

export const InnerPageBanner = ({ layout }) => {
    return (
        <InnerPageBannerStyled
            imgURL={publicUrl + "/images/banner/banner-background.png"}
            layout={layout}
        >
            <ComponentContainer>
                {layout == "form" ? <FormLayout /> : <ColumnLayout />}
            </ComponentContainer>
        </InnerPageBannerStyled>
    )
}
