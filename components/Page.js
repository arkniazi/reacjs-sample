import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Meta from "../components/Meta"
import { GlobalStyle } from "./styles/base"
import { StyledPage, Inner } from "./styles/Page"
import { theme } from "./styles/theme"

export default class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <StyledPage>
                    <Meta />

                    <Header />

                    <Inner className="inner">{this.props.children}</Inner>

                    <Footer />
                </StyledPage>
            </ThemeProvider>
        )
    }
}
