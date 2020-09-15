import styled from "styled-components"

export const FormInputWrapperStyled = styled.div`
    
    margin: 0 0 15px 0;
    ${(props) => props.theme.mediaQueries.lg} {
        margin:${(props) => props.margin && props.margin};
    }
`