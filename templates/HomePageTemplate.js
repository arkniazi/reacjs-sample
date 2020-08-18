import React, { Component } from "react"
import styled from "styled-components"

const StyledHomeTemplate = styled.div`
    margin: 0;
    padding: 0;
`

export default class HomePageTemplate extends Component {
    render() {
        return <StyledHomeTemplate>{this.props.children}</StyledHomeTemplate>
    }
}
