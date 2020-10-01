import gql from "graphql-tag"
import { useState, useEffect } from 'react'

import { ImageGalleryComponent } from '../ImageGalleryComponent'
import { Variations } from "./Variations"
import { Intro } from "./Intro"
import { MessageSellerForm } from '../Forms/MessageSellerForm'

import { ComponentContainer, FlexContainer } from "../styles/Page"
import { SingleItemStyled } from "./styled"

//TEMP DUMMY DATA
import {searchResults} from '../DemoData'


const SingleItemComponent = ({ id }) => {
    const item = searchResults.filter(item => (item.id == id))[0];
    const initialSize = item.metricLength;
    const [itemSize, setItemSize] = useState(0);

    //sets inital size from data.metricLength
    //will be updated on select input change
    useEffect(() => {
        setItemSize(initialSize);
    }, [initialSize]);

    const handleSetItemSize = (size) => {
        setItemSize(size)
    }

    return (

        <SingleItemStyled>
            <ComponentContainer>
                <div className="singleItem">
                    <FlexContainer dir="row">
                        {/* LeftSide */}
                        <div className="singleItem__column">
                            <ImageGalleryComponent images={item.galleryImages} />
                        </div>

                        {/* RightSide */}
                        <div className="singleItem__column copy-col">
                            <div>
                                <Intro
                                    title={item.title}
                                    metricLength={itemSize}
                                    description={item.description}
                                />

                                <Variations handleSetItemSize={handleSetItemSize} variationOptions={item.variations} />

                                <p>ITEM DETAILS GO HERE</p>

                                <MessageSellerForm />
                            </div>
                        </div>

                    </FlexContainer>
                </div>
            </ComponentContainer>
        </SingleItemStyled>
    )
}

SingleItemComponent.defaultProps = {
    id: 1
}

export { SingleItemComponent }
