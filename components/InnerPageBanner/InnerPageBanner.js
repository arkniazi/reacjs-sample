import { InnerPageBannerStyled } from "./styled"
import { publicUrl } from "../../config"

export const InnerPageBanner = ({ ...props }) => {
    return <InnerPageBannerStyled>{props.children}</InnerPageBannerStyled>
}
