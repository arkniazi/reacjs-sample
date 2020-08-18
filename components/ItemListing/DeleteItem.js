import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { ALL_ITEM_QUERY, ALL_ITEMS_QUERY } from "./ItemListing"

const DELETE_ITEM_MUTATION = gql`
    mutation DELETE_ITEM_MUTATION($id: ID!) {
        deleteItem(id: $id) {
            id
        }
    }
`
const update = (cache, payload) => {
    //manually update the cache on the client, so it matches the server
    //1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY })
    //2. Filter the deleted item out of the cache obj
    data.items = data.items.filter((item) => item.id !== payload.data.deleteItem.id)
    //3. Put the items back
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data })
}
export const DeleteItem = ({ id, ...props }) => {
    return (
        <Mutation
            mutation={DELETE_ITEM_MUTATION}
            variables={{ id: id }}
            update={update}
        >
            {(deleteItem, { error }) => {
                if (error) return <p>Error!</p>
                return (
                    <button
                        onClick={() => {
                            if (confirm("are you sure?")) {
                                deleteItem()
                            }
                        }}
                    >
                        {props.children}
                    </button>
                )
            }}
        </Mutation>
    )
}
