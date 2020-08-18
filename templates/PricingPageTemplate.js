import React, { Component } from "react"
import styled from "styled-components"

const StyledPricingTemplate = styled.div`
    margin: 0;
    padding: 0;
`

export default class PricingPageTemplate extends Component {
    render() {
        return <StyledPricingTemplate>{this.props.children}</StyledPricingTemplate>
    }
}
