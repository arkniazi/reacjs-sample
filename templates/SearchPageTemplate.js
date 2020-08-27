import React, { Component } from "react"
import styled from "styled-components"

const StyledSearchTemplate = styled.div`
    margin: 0;
    padding: 0;
    border-top: ${(props) => props.theme.sizes.headerHeight} solid
        ${(props) => props.theme.colors.darkBlue};
    padding-top: 63px;
`

export default class SearchPageTemplate extends Component {
    render() {
        return <StyledSearchTemplate>{this.props.children}</StyledSearchTemplate>
    }
}
