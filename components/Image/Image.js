import { publicUrl } from "../../config"

export const Image = ({ path, alt, className, width, height, api }) => {
    return (
        <img
            className={className}
            src={api ? path : publicUrl + path}
            alt={alt}
            height={height}
            width={width}
        />
    )
}
