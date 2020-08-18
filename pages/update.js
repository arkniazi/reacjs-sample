import { UpdateItem } from "../components/UpdateItem"

const Update = ({ query }) => {
    return (
        <div>
            <h2>Update Item Form Demo</h2>
            <UpdateItem id={query.id} />
        </div>
    )
}

export default Update
