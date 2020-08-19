import { ColumnLayout } from "./ColumnLayout"
import { FormLayout } from "./FormLayout"
import { TextLayout } from "./TextLayout"
import { InnerPageBannerStyled } from "./styled"
import { ComponentContainer } from "../styles/Page"
import { publicUrl } from "../../config"

export const InnerPageBanner = ({ layout, title }) => {
    const Banner =
        layout == "form" ? (
            <FormLayout />
        ) : layout == "text" ? (
            <TextLayout title={title} />
        ) : (
            <ColumnLayout />
        )

    return (
        <InnerPageBannerStyled
            imgURL={publicUrl + "/images/banner/banner-background.png"}
            layout={layout}
        >
            {layout === "text" && <div className="background-cover"></div>}
            <ComponentContainer>{Banner}</ComponentContainer>
        </InnerPageBannerStyled>
    )
}
