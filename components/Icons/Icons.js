import styled from "styled-components"

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

Instagram.defaultProps = {
    fill: "white",
}
Facebook.defaultProps = {
    fill: "white",
}
Twitter.defaultProps = {
    fill: "white",
}
