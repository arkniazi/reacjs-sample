
export const Image = ({ path, alt, className, width, height }) => {
    return (
        <img
            className={className}
            src={path}
            alt={alt}
            height={height}
            width={width}
        />
    )
}
