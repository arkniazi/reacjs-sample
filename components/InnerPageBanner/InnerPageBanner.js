import { InnerPageBannerStyled } from "./styled"

export const InnerPageBanner = ({ ...props }) => {
    return <InnerPageBannerStyled>{props.children}</InnerPageBannerStyled>
}
