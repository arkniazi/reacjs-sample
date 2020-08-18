import { theme } from "../../styles/theme"

export const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "transparent",
        borderRadius: 0,
        borderColor: state.isFocused ? "white" : "white",
        border: "2px solid",
        boxShadow: state.isFocused ? null : null,
        color: "white",
        fontFamily: theme.font.heading,
        textTransform: "uppercase",
    }),
    placeholder: (base) => ({
        ...base,
        color: "white",
        fontSize: theme.fontSizes.desktop.tiny.size,
        fontWeight: "bold",
    }),
    menu: (base) => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0,
        backgroundColor: "rgba(0,92,176,0.95)",
        fontSize: theme.fontSizes.desktop.tiny.size,
    }),
    menuList: (base) => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
        color: "white",
        fontSize: theme.fontSizes.desktop.tiny.size,
        fontWeight: "bold",
        textTransform: "uppercase",
    }),
    singleValue: (base) => ({
        ...base,
        color: "white",
        fontWeight: "bold",
        fontFamily: theme.font.heading,
        textTransform: "uppercase",
        fontSize: theme.fontSizes.desktop.tiny.size,
    }),
    option: (base, state) => ({
        ...base,
        color: "white",
        borderBottom: "2px solid",
        borderLeft: "2px solid",
        borderRight: "2px solid",
        backgroundColor: state.isFocused ? "#005CB0" : "transparent",
        fontFamily: theme.font.heading,
        textTransform: "uppercase",
        paddingTop: "12px",
        paddingBottom: "12px",
    }),
    input: (base, state) => ({
        ...base,
        color: "white",
        fontWeight: "bold",
        fontFamily: theme.font.heading,
        textTransform: "uppercase",
        fontSize: theme.fontSizes.desktop.tiny.size,
    }),
}
