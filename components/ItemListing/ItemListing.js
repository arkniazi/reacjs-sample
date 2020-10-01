import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Item from "./Item"
import { ListingStyled } from "./styled"

const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`

class ItemListing extends Component {
    render() {
        return (
            <div>
                <h2>Item listing component</h2>
                <Query query={ALL_ITEMS_QUERY}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error! ${error}</p>
                  
                        if (!data.items.length) return <p>No Items</p>

                        return (
                            <ListingStyled>
                                {data.items.map((item) => (
                                    <Item item={item} key={item.id}></Item>
                                ))}
                            </ListingStyled>
                        )
                    }}
                </Query>
            </div>
        )
    }
}
export { ALL_ITEMS_QUERY, ItemListing }
