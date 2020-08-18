import styled from "styled-components"
import { theme } from "../styles/theme"

export const Form = styled.form`
    border: 1px solid;
    display: flex;
    flex-direction: column;

    fieldset,
    label {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 10px;
    }
`
