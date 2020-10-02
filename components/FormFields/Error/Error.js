import styled from "styled-components"

export const ErrorStyled = styled.p`
    color: ${props => props.theme.colors.darkBlue};
    font-weight: 500;
    margin: 0;
    font-size: ${props => props.theme.fontSizes.desktop.tiny.size};
    position: absolute;
    right: ${(props) => props.right ? props.right : '15px'};
    top: ${(props) => props.top ? props.top : '5px '};
`

export const ErrorText = (props) => {
    return <ErrorStyled top={props.top} right={props.right}>{props.text}</ErrorStyled>
}

export const Error = ({ meta, top, right, ...props }) => {
    if (meta.touched && meta.error) {
        return (
            <ErrorText
                top={top}
                right={right}
                text={Array.isArray(meta.error) ? meta.error[0] : meta.error}

            />
        )
    } else {
        return null
    }
}
