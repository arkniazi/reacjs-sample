import styled from "styled-components"

export const Exit = ({ className, height, width, fill, onClick }) => {
    return (
        <svg
            width={width || "24px"}
            height={height || "24px"}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M18 6L6 18"
                stroke={fill || "#179AD3"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 6L18 18"
                stroke={fill || "#179AD3"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const ExitCircle = ({ className, height, width }) => {
    return (
        <svg width={width || "24"} height={height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M6.10744 17.8925C9.36181 21.1469 14.6382 21.1469 17.8926 17.8925C21.1469 14.6381 21.1469 9.36177 17.8926 6.1074C14.6382 2.85303 9.36181 2.85303 6.10744 6.1074C2.85307 9.36177 2.85307 14.6381 6.10744 17.8925Z" fill="white" />
                <path d="M14.3569 9.64307L9.64289 14.3571" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.64307 9.64307L14.3571 14.3571" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" transform="translate(12 -2.14209) rotate(45)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export const Minus = ({ className, height, width, fill }) => {
    return (
        <svg className={className} width={width || "14"} height={height || "3"} viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.63477H15" stroke={fill || "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const ChevronDown = ({ className, height, width, fill }) => {
    return (
        <svg
            width={width || "14px"}
            height={height || "9px"}
            viewBox="0 0 14 9"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.75 1L6.75 7L12.75 1"
                stroke={fill || "white"}
                strokeWidth="2"
            />
        </svg>
    )
}

export const Menu = ({ height, width, fill, className }) => {
    return (
        <svg className={className} height={height || '20'} fill={fill} viewBox="0 -53 384 384" width={width || '20'} xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /></svg>
    )
}

export const ChevronLeft = ({ className, height, width, fill }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M1.5 9.61328L5.46783 5.64545L1.5 1.67762"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const BackChevronLeft = ({ className, height, width, fill }) => {
    return (
        <svg className={className} width={width || "9"} height={height || "15"} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.5L2 7.75L8 14" stroke={fill || "#179AD3"} strokeWidth="2" />
        </svg>

    )
}

export const Instagram = ({ height, width, fill, className }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M11.4999 2.22402C14.5231 2.22402 14.878 2.2375 16.0729 2.29141C17.178 2.34082 17.7755 2.525 18.1753 2.68223C18.7054 2.88887 19.0827 3.13145 19.478 3.52676C19.8733 3.92207 20.1204 4.29941 20.3226 4.82949C20.4753 5.2293 20.664 5.82676 20.7134 6.93184C20.7673 8.12676 20.7808 8.48164 20.7808 11.5049C20.7808 14.5281 20.7673 14.883 20.7134 16.0779C20.664 17.183 20.4798 17.7805 20.3226 18.1803C20.1159 18.7104 19.8733 19.0877 19.478 19.483C19.0827 19.8783 18.7054 20.1254 18.1753 20.3275C17.7755 20.4803 17.178 20.6689 16.0729 20.7184C14.878 20.7723 14.5231 20.7857 11.4999 20.7857C8.47666 20.7857 8.12178 20.7723 6.92685 20.7184C5.82178 20.6689 5.22432 20.4848 4.82451 20.3275C4.29443 20.1209 3.91709 19.8783 3.52178 19.483C3.12646 19.0877 2.87939 18.7104 2.67725 18.1803C2.52451 17.7805 2.33584 17.183 2.28643 16.0779C2.23252 14.883 2.21904 14.5281 2.21904 11.5049C2.21904 8.48164 2.23252 8.12676 2.28643 6.93184C2.33584 5.82676 2.52002 5.2293 2.67725 4.82949C2.88389 4.29941 3.12646 3.92207 3.52178 3.52676C3.91709 3.13145 4.29443 2.88438 4.82451 2.68223C5.22432 2.52949 5.82178 2.34082 6.92685 2.29141C8.12178 2.23301 8.47666 2.22402 11.4999 2.22402ZM11.4999 0.18457C8.42724 0.18457 8.04092 0.198047 6.83252 0.251953C5.62861 0.305859 4.80654 0.499023 4.08779 0.777539C3.34209 1.06504 2.71318 1.45586 2.08428 2.08477C1.45537 2.71367 1.06904 3.34707 0.777051 4.08828C0.498535 4.80703 0.305371 5.6291 0.251465 6.8375C0.197559 8.04141 0.184082 8.42773 0.184082 11.5004C0.184082 14.573 0.197559 14.9594 0.251465 16.1678C0.305371 17.3717 0.498535 18.1938 0.777051 18.917C1.06455 19.6627 1.45537 20.2916 2.08428 20.9205C2.71318 21.5494 3.34658 21.9357 4.08779 22.2277C4.80654 22.5062 5.62861 22.6994 6.83701 22.7533C8.04541 22.8072 8.42724 22.8207 11.5044 22.8207C14.5815 22.8207 14.9634 22.8072 16.1718 22.7533C17.3757 22.6994 18.1978 22.5062 18.921 22.2277C19.6667 21.9402 20.2956 21.5494 20.9245 20.9205C21.5534 20.2916 21.9397 19.6582 22.2317 18.917C22.5102 18.1982 22.7034 17.3762 22.7573 16.1678C22.8112 14.9594 22.8247 14.5775 22.8247 11.5004C22.8247 8.42324 22.8112 8.04141 22.7573 6.83301C22.7034 5.6291 22.5102 4.80703 22.2317 4.08379C21.9442 3.33809 21.5534 2.70918 20.9245 2.08027C20.2956 1.45137 19.6622 1.06504 18.921 0.773047C18.2022 0.494531 17.3802 0.301367 16.1718 0.247461C14.9589 0.198047 14.5726 0.18457 11.4999 0.18457Z"
                fill={fill}
            />
            <path
                d="M11.4999 5.6875C8.29248 5.6875 5.68701 8.28848 5.68701 11.5004C5.68701 14.7123 8.29248 17.3133 11.4999 17.3133C14.7073 17.3133 17.3128 14.7078 17.3128 11.5004C17.3128 8.29297 14.7073 5.6875 11.4999 5.6875ZM11.4999 15.2738C9.41553 15.2738 7.72646 13.5848 7.72646 11.5004C7.72646 9.41601 9.41553 7.72695 11.4999 7.72695C13.5843 7.72695 15.2733 9.41601 15.2733 11.5004C15.2733 13.5848 13.5843 15.2738 11.4999 15.2738Z"
                fill={fill}
            />
            <path
                d="M17.5419 6.81485C18.2912 6.81485 18.8986 6.20746 18.8986 5.4582C18.8986 4.70895 18.2912 4.10156 17.5419 4.10156C16.7927 4.10156 16.1853 4.70895 16.1853 5.4582C16.1853 6.20746 16.7927 6.81485 17.5419 6.81485Z"
                fill={fill}
            />
        </svg>
    )
}

export const Facebook = ({ height, width, fill, className }) => {
    return (
        <svg
            fill="none"
            width={width}
            height={height}
            viewBox="0 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="m17.1475.799778c.2781 0 .5137.096584.7068.289752.1932.19316.2898.42876.2898.7068v15.80517c0 .278-.0966.5136-.2898.7068-.1931.1931-.4287.2897-.7068.2897h-4.4954v-6.8599h2.2943l.3249-2.71132h-2.6192v-1.7385c0-.41737.0928-.73404.2784-.95.1855-.21597.5253-.32427 1.0193-.3249h1.4136v-2.41015c-.6181-.06207-1.3056-.0931-2.0624-.0931-1.0349 0-1.8693.30526-2.5033.9158-.6339.61053-.95061 1.47186-.94998 2.584v2.0159h-2.29424v2.71127h2.29424v6.86h-8.50534c-.27804 0-.513638-.0966-.706805-.2898-.193166-.1931-.28975-.4287-.28975-.7068v-15.80512c0-.27804.096584-.51364.28975-.7068.193167-.193169.428765-.289752.706805-.289752h15.80512z"
                fill={fill}
            />
        </svg>
    )
}

export const Twitter = ({ height, width, fill, className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19 2.63851C18.301 2.94884 17.5497 3.15784 16.7612 3.25205C17.5663 2.76992 18.1846 2.00596 18.4751 1.09555C17.7222 1.54205 16.8878 1.86663 15.9996 2.04159C15.2895 1.28396 14.2753 0.810547 13.1543 0.810547C10.6376 0.810547 8.78829 3.15863 9.35671 5.59617C6.118 5.43388 3.24583 3.88221 1.32288 1.52384C0.301625 3.2758 0.79325 5.56767 2.52858 6.72825C1.8905 6.70767 1.28883 6.53271 0.763958 6.24059C0.721208 8.04638 2.01558 9.7358 3.89025 10.1118C3.34162 10.2607 2.74075 10.2955 2.12958 10.1783C2.62517 11.7268 4.06442 12.8534 5.77125 12.885C4.1325 14.1699 2.06783 14.7439 0 14.5C1.72504 15.606 3.77467 16.2512 5.9755 16.2512C13.2129 16.2512 17.3019 10.1388 17.0549 4.65646C17.8165 4.10625 18.4775 3.41988 19 2.63851Z"
                fill={fill}
            />
        </svg>
    )
}

export const Search = ({ height, width, fill, className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.8195 19.7706C21.2544 18.1374 19.6212 16.5043 17.9881 14.9392C17.1035 14.1226 17.0354 14.1226 17.5798 13.0339C18.6686 10.5842 18.6686 8.06644 17.5798 5.61673C15.4023 0.717323 11.1153 -0.711671 6.35201 0.78537C3.01769 1.80608 0.2958 5.27649 0.567989 9.42738C0.431895 10.312 0.636037 11.3327 1.04432 12.2854C2.26917 15.1434 4.24255 17.1848 7.44077 17.8653C9.61829 18.3416 11.5917 18.0013 13.565 17.1167C14.1775 16.8445 14.5857 16.7765 15.1301 17.3889C16.7633 19.2262 18.5325 20.8593 20.2337 22.5605C20.778 23.1049 21.3905 23.3771 22.207 23.0368C23.568 22.4925 23.9763 20.9274 22.8195 19.7706ZM9.55024 3.03093C12.8165 3.03093 15.6065 5.75283 15.6065 9.0191C15.6745 12.6256 13.0887 15.2114 9.61829 15.2114C6.01178 15.4836 3.22184 12.5576 3.22184 9.08715C3.22184 5.61673 6.14787 3.03093 9.55024 3.03093ZM2.67746 9.08715C2.67746 11.2647 3.63012 13.17 5.19521 14.3948C3.63012 13.17 2.67746 11.1966 2.67746 9.08715ZM6.89639 15.4155C6.48811 15.2795 6.07982 15.0753 5.73959 14.8031C6.07982 15.0073 6.48811 15.2114 6.89639 15.4155C7.71296 15.7558 8.66562 15.8919 9.61829 15.8238C8.66562 15.8238 7.71296 15.6877 6.89639 15.4155ZM11.6597 15.4836C14.3816 14.667 16.2189 12.1493 16.1508 9.0191C16.1508 8.33862 16.0147 7.7262 15.8106 7.11377C15.7425 6.84158 15.6065 6.50135 15.4704 6.22916C15.6065 6.50135 15.7425 6.84158 15.8106 7.11377C16.0147 7.7262 16.1508 8.33862 16.1508 9.0191C16.1508 12.2173 14.3816 14.667 11.6597 15.4836Z"
                fill={fill}
            />
        </svg>
    )
}

export const GridIcon = ({ height, width, fill, opacity, onClick, className }) => {
    return (
        <svg width={width || '31'} height={height || '30'} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className}>
            <g opacity={opacity ? '1' : '0.4'}>
                <rect x="16.7162" width="13.4328" height="13.4328" fill={fill || '#179AD3'} />
                <rect x="16.7162" y="16.5671" width="13.4328" height="13.4328" fill={fill || '#179AD3'} />
                <rect x="0.149048" width="13.4328" height="13.4328" fill={fill || '#179AD3'} />
                <rect x="0.149048" y="16.5671" width="13.4328" height="13.4328" fill={fill || '#179AD3'} />
            </g>
        </svg>

    )
}

export const HorizontalViewIcon = ({ height, width, fill, opacity, onClick, className }) => {
    return (
        <svg width={width || '34'} height={height || '30'} viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className}>
            <g opacity={opacity ? '1' : '0.4'}>
                <rect x="11.1186" y="2.03394" width="22.8814" height="3.55932" fill={fill || '#179AD3'} />
                <rect x="0.149048" width="7.62712" height="7.62712" fill={fill || '#179AD3'} />
                <rect x="11.1186" y="13.2203" width="22.8814" height="3.55932" fill={fill || '#179AD3'} />
                <rect x="0.149048" y="11.1865" width="7.62712" height="7.62712" fill={fill || '#179AD3'} />
                <rect x="11.1186" y="24.4067" width="22.8814" height="3.55932" fill={fill || '#179AD3'} />
                <rect x="0.149048" y="22.3728" width="7.62712" height="7.62712" fill={fill || '#179AD3'} />
            </g>
        </svg>

    )
}


export const FavouriteProductIcon = ({ height, width, fill, onClick, className }) => {
    return (
        <svg width={width || '24'} height={height || '22'} className={className} onClick={onClick} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 3.61012C20.3292 3.09912 19.7228 2.69376 19.0554 2.4172C18.3879 2.14064 17.6725 1.99829 16.95 1.99829C16.2275 1.99829 15.5121 2.14064 14.8446 2.4172C14.1772 2.69376 13.5708 3.09912 13.06 3.61012L12 4.67012L10.94 3.61012C9.90831 2.57842 8.50903 1.99883 7.05 1.99883C5.59097 1.99883 4.19169 2.57842 3.16 3.61012C2.12831 4.64181 1.54871 6.04108 1.54871 7.50012C1.54871 8.95915 2.12831 10.3584 3.16 11.3901L4.22 12.4501L12 20.2301L19.78 12.4501L20.84 11.3901C21.351 10.8794 21.7564 10.2729 22.0329 9.60547C22.3095 8.93801 22.4518 8.2226 22.4518 7.50012C22.4518 6.77763 22.3095 6.06222 22.0329 5.39476C21.7564 4.7273 21.351 4.12087 20.84 3.61012Z" fill="white" stroke={fill || "#F37126"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const PhoneIcon = ({ height, width, fill, onClick, className }) => {
    return (
        <svg width={width || '22'} height={height || '22'} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M21.0001 15.964V18.964C21.0012 19.2425 20.9441 19.5182 20.8326 19.7734C20.721 20.0286 20.5574 20.2576 20.3521 20.4459C20.1469 20.6342 19.9046 20.7775 19.6408 20.8667C19.377 20.956 19.0974 20.9891 18.8201 20.964C15.7429 20.6297 12.7871 19.5782 10.1901 17.894C7.77388 16.3587 5.72539 14.3102 4.19006 11.894C2.50003 9.28525 1.4483 6.31504 1.12006 3.22404C1.09507 2.94751 1.12793 2.6688 1.21656 2.40567C1.30518 2.14253 1.44763 1.90073 1.63482 1.69566C1.82202 1.4906 2.04986 1.32675 2.30385 1.21456C2.55783 1.10238 2.8324 1.0443 3.11006 1.04404H6.11006C6.59536 1.03927 7.06585 1.21112 7.43382 1.52757C7.80179 1.84403 8.04213 2.28349 8.11005 2.76404C8.23668 3.72411 8.47151 4.66677 8.81006 5.57404C8.9446 5.93197 8.97372 6.32096 8.89396 6.69492C8.81421 7.06889 8.62892 7.41215 8.36005 7.68404L7.09006 8.95404C8.51361 11.4576 10.5865 13.5305 13.0901 14.954L14.3601 13.684C14.6319 13.4152 14.9752 13.2299 15.3492 13.1501C15.7231 13.0704 16.1121 13.0995 16.4701 13.234C17.3773 13.5726 18.32 13.8074 19.2801 13.934C19.7658 14.0026 20.2095 14.2472 20.5266 14.6215C20.8437 14.9958 21.0122 15.4736 21.0001 15.964Z" stroke={fill || '#F37126'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const MapPin = ({ height, width, fill, onClick, className }) => {
    return (
        <svg className={className} width={width || "15"} height={height || "15"} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.125 6.25C13.125 10.625 7.5 14.375 7.5 14.375C7.5 14.375 1.875 10.625 1.875 6.25C1.875 4.75816 2.46763 3.32742 3.52252 2.27252C4.57742 1.21763 6.00816 0.625 7.5 0.625C8.99184 0.625 10.4226 1.21763 11.4775 2.27252C12.5324 3.32742 13.125 4.75816 13.125 6.25Z" stroke={fill || "black"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 8.125C8.53553 8.125 9.375 7.28553 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125Z" fill="white" stroke={fill || "black"} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const Star = ({ height, width, fill, onClick, className }) => {
    return (
        <svg onClick={onClick} className={className} width={width || "18"} height={height || "17"} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" stroke={fill || "#F37126"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}


export const Archive = ({ height, width, fill, onClick, className }) => {
    return (
        <svg onClick={onClick} className={className} width={width || "18"} height={height || "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 6V15.75H2.25V6" stroke={fill || "#F37126"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.25 2.25H0.75V6H17.25V2.25Z" stroke={fill || "#F37126"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 9H10.5" stroke={fill || "#F37126"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Edit = ({ height, width, fill, onClick, className }) => {
    return (
        <svg width={width || "24"} height={height || "25"} onClick={onClick} className={className} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V20.5C2 21.0304 2.21071 21.5391 2.58579 21.9142C2.96086 22.2893 3.46957 22.5 4 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V13.5" stroke={fill || "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 3.00023C18.8978 2.6024 19.4374 2.37891 20 2.37891C20.5626 2.37891 21.1022 2.6024 21.5 3.00023C21.8978 3.39805 22.1213 3.93762 22.1213 4.50023C22.1213 5.06284 21.8978 5.6024 21.5 6.00023L12 15.5002L8 16.5002L9 12.5002L18.5 3.00023Z" stroke={fill || "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const ExitSquare = ({ height, width, fill, onClick, className }) => {
    return (
        <svg className={className} onClick={onClick} width={width || "24"} height={height || "25"} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3.5H5C3.89543 3.5 3 4.39543 3 5.5V19.5C3 20.6046 3.89543 21.5 5 21.5H19C20.1046 21.5 21 20.6046 21 19.5V5.5C21 4.39543 20.1046 3.5 19 3.5Z" stroke={fill || "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 9.5L15 15.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 9.5L9 15.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

Instagram.defaultProps = {
    fill: "white",
}
Facebook.defaultProps = {
    fill: "white",
}
Twitter.defaultProps = {
    fill: "white",
}
