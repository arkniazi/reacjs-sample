import { publicUrl } from "../../config"

export const BannerDecoration = ({ alt, className }) => {
    return (
        <img
            src={publicUrl + "/images/banner/banner-decoration.png"}
            alt="my image"
            className={className}
        />
    )
}
