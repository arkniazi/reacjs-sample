import gql from "graphql-tag"
import { ComponentContainer, FlexContainer } from "../styles/Page"
import { ImageGallery } from '../ImageGallery'

import { SingleItemStyled } from "./styled"
import { Intro } from "./Intro"

//TEMP DUMMY DATA
import { searchResults } from '../../pages/search-products/demodata'

const SingleItemComponent = ({ id }) => {
    const item = searchResults.filter(item => (item.id == id))[0];
    return (

        <SingleItemStyled>
            <ComponentContainer>
                <div className="singleItem">
                    <FlexContainer dir="row">
                        <div className="singleItem__column">
                            <ImageGallery images={item.galleryImages} />
                        </div>
                        <div className="singleItem__column copy-col">
                            <div>
                                <p>user component here</p>
                                <Intro
                                    title={item.title}
                                    description={item.description}
                                />
                                <p>im interested in this component</p>
                            </div>
                        </div>
                    </FlexContainer>
                </div>
            </ComponentContainer>
        </SingleItemStyled>
    )
}

export { SingleItemComponent }
