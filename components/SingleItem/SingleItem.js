import gql from "graphql-tag"
import { ComponentContainer, FlexContainer } from "../styles/Page"
import { Query } from "react-apollo"
import Error from "../ErrorMessage"
import { SingleItemStyled } from "./styled"
import { Intro } from "./Intro"
import { Image } from "../Image"

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        item(where: { id: $id }) {
            id
            title
            description
            largeImage
        }
    }
`
const SingleItem = ({ id }) => {
    return (
        <Query query={SINGLE_ITEM_QUERY} variables={{ id: id }}>
            {({ loading, data, error }) => {
                if (error) return <Error error={error} />
                if (loading) return <p>Loading...</p>
                if (!data.item) return <p>No item found for {id} </p>
                console.log(data)

                return (
                    <SingleItemStyled>
                        <ComponentContainer>
                            <div className="singleItem">
                                <FlexContainer dir="row">
                                    <div className="singleItem__column">
                                        <Image
                                            path={data.item.largeImage}
                                            api
                                            height={459}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="singleItem__column copy-col">
                                        <div>
                                            <p>user component here</p>
                                            <Intro
                                                title={data.item.title}
                                                description={data.item.description}
                                            />
                                            <p>im interested in this component</p>
                                        </div>
                                    </div>
                                </FlexContainer>
                            </div>
                        </ComponentContainer>
                    </SingleItemStyled>
                )
            }}
        </Query>
    )
}

export { SingleItem }
