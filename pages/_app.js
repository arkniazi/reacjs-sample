import App, { Container } from "next/app"
import { ApolloProvider } from "react-apollo"

import withData from "../lib/withData"
import Page from "../components/Page"

class MyApp extends App {
    //getInitialProps() = next js lifecycle method, will run first before the first render
    //anything returned will be exposed as props in the render method
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        //this exposes query to the user
        pageProps.query = ctx.query
        return { pageProps }
    }

    render() {
        const { Component, apollo, pageProps } = this.props

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp)
