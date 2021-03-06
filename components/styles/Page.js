import styled from "styled-components"

export const StyledPage = styled.div`
    background: white;
    color: ${(props) => props.theme.black};
    font-family: ${(props) => props.theme.black};
`
export const Inner = styled.div`
    margin: 0 auto;
    padding: 0;
`
export const FlexContainer = styled.div`
    width: ${(props) => (props.width === "full" ? "100%" : "")};
    flex-wrap: ${(props) => (props.wrap ? "wrap" : "")};
    display: flex;
   
    flex-direction: ${(props) => (props.dir === "row" ? "column" : "column")};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    ${(props) => props.theme.mediaQueries.lg} {
        flex-direction: ${(props) => (props.dir === "column" ? "column" : "row")};
    }
    
`
export const ComponentContainer = styled.div`
    max-width: ${(props) => props.theme.sizes.maxWidth};
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
    ${(props) => props.theme.mediaQueries.lg} {
        padding: 0;
    }
`
