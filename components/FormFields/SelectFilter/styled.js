import { theme } from "../../styles/theme"

export const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "transparent",
        borderRadius: 0,
        borderColor: "black",
        border: "2px solid",
        boxShadow: state.isFocused ? null : null,
        color: "black",
        fontFamily: theme.font.heading,
        textTransform: "uppercase",
    }),
    placeholder: (base) => ({
        ...base,
        color: "black",
        fontSize: theme.fontSizes.desktop.tiny.size,
        fontWeight: "bold",
    }),
    menu: (base) => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0,
        backgroundColor: "white",
        fontSize: theme.fontSizes.desktop.tiny.size,
    }),
    menuList: (base) => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
        color: "black",
        fontSize: theme.fontSizes.desktop.tiny.size,
        fontWeight: "bold",
        boxShadow: theme.bs.dark,
    }),
    singleValue: (base) => ({
        ...base,
        color: "black",
        fontWeight: "bold",
        fontFamily: theme.font.heading,

        fontSize: theme.fontSizes.desktop.tiny.size,
    }),
    option: (base, state) => ({
        ...base,
        color: "black",
        paddingTop: "12px",
        paddingBottom: "12px",
        cursor: "pointer",
    }),
    input: (base, state) => ({
        ...base,
        color: "black",
        fontFamily: theme.font.heading,
        textTransform: "uppercase",
        fontSize: theme.fontSizes.desktop.tiny.size,
    }),
}
