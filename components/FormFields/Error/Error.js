import styled from "styled-components"

export const ErrorStyled = styled.p`
    color: red;
    font-weight: 500;
    margin: 0;
    font-size: 14px;
    position: absolute;
    top: 11px;
    right: 15px;
`

export const ErrorText = (props) => {
    return <ErrorStyled>{props.text}</ErrorStyled>
}

export const Error = ({ meta, ...props }) => {
    if (meta.touched && meta.error) {
        return (
            <ErrorText
                text={Array.isArray(meta.error) ? meta.error[0] : meta.error}
            />
        )
    } else {
        return null
    }
}
