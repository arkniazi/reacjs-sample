import { Instagram, Twitter, Facebook } from "../Icons"

export const IconLink = React.forwardRef(
    ({ onClick, href, icon, width, height, fill }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                {icon === "instagram" ? (
                    <Instagram width={width} height={height} fill={fill} />
                ) : icon === "facebook" ? (
                    <Facebook width={width} height={height} fill={fill} />
                ) : icon === "twitter" ? (
                    <Twitter width={width} height={height} fill={fill} />
                ) : (
                    "icon doesnt exist"
                )}
            </a>
        )
    }
)
