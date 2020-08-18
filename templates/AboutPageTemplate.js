import React, { Component } from "react"
import styled from "styled-components"

const StyledAboutTemplate = styled.div`
    margin: 0;
    padding: 0;
`

export default class AboutPageTemplate extends Component {
    render() {
        return <StyledAboutTemplate>{this.props.children}</StyledAboutTemplate>
    }
}
