import React, { Component } from "react"
import styled from "styled-components"

const StyledSingleItemPageTemplate = styled.div`
    margin: 0;
    padding: 0;
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
