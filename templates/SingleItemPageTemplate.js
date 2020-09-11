import React, { Component } from "react"
import styled from "styled-components"

const StyledSingleItemPageTemplate = styled.div`
    margin: 0;
    padding: 0;
    border-top: ${(props) => props.theme.sizes.headerHeight} solid
        ${(props) => props.theme.colors.darkBlue};
    padding-top: 63px;
`

export default class SingleItemPageTemplate extends Component {
    render() {
        return (
            <StyledSingleItemPageTemplate>
                {this.props.children}
            </StyledSingleItemPageTemplate>
        )
    }
}
