import React, { Component } from "react"
import styled from "styled-components"

const StyledContactTemplate = styled.div`
    margin: 0;
    padding: 0;
`

export default class ContactPageTemplate extends Component {
    render() {
        return <StyledContactTemplate>{this.props.children}</StyledContactTemplate>
    }
}
