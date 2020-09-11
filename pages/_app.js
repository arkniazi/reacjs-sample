import App from "next/app"
import { ApolloProvider } from "react-apollo"
import { motion } from 'framer-motion';
import withData from "../lib/withData"
import Page from "../components/Page"

import "react-image-gallery/styles/scss/image-gallery.scss"
import "../components/styles/vendor/react-image-gallery.scss"

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
            // <ApolloProvider client={apollo}>
            <motion.div initial="pageInitial" animate="pageAnimate" variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                },
            }}>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </motion.div>

            // </ApolloProvider>
        )
    }
}

// export default withData(MyApp)
export default MyApp
