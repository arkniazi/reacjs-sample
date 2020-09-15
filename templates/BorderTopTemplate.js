import React, { Component } from "react"
import styled from "styled-components"

const StyledBorderTopPageTemplate = styled.div`
    margin: 0;
    padding: 0;
    border-top: 57px solid
        ${(props) => props.theme.colors.darkBlue};
    padding-top: 63px;

    ${(props) => props.theme.mediaQueries.lg} {
        border-top: ${(props) => props.theme.sizes.headerHeight} solid
        ${(props) => props.theme.colors.darkBlue};
    }
`

export default class BorderTopPageTemplate extends Component {
    render() {
        return (
            <StyledBorderTopPageTemplate>
                {this.props.children}
            </StyledBorderTopPageTemplate>
        )
    }
}
