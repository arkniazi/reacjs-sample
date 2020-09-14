import React from 'react'
import BorderTopTemplate from '../templates/BorderTopTemplate'
import TextLink from '../components/TextLink'
import { ComponentContainer } from '../components/styles/Page'





const FourOhFour = () => {
    return (
        <BorderTopTemplate>
            <ComponentContainer>
                <h1 className="black">404</h1>
                <p>Looks like you've made a wrong turn, you can travel to the homepage with this link</p>
                <TextLink url="/" color="black" text="home" />
            </ComponentContainer>

        </BorderTopTemplate>
    )
}

export default FourOhFour