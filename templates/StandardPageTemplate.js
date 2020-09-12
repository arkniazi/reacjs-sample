import React, { Component } from "react"
import styled from "styled-components"

const StyledStandardTemplate = styled.div`
    margin: 0;
    padding: 0;
`

export default class StandardPageTemplate extends Component {
    render() {
        return <StyledStandardTemplate>{this.props.children}</StyledStandardTemplate>
    }
}
