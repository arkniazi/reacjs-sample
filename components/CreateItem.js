import React, { Component } from "react"
import { Mutation } from "react-apollo"
import Router from "next/router"
import gql from "graphql-tag"

import FormatMoney from "../lib/formatMoney"
import Error from "./ErrorMessage"
import { formatDistance } from "date-fns"

const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $image: String
        $largeImage: String
        $price: Int!
    ) {
        createItem(
            title: $title
            description: $description
            image: $image
            largeImage: $largeImage
            price: $price
        ) {
            id
            title
        }
    }
`

class createItem extends Component {
    state = {
        title: "",
        description: "",
        image: "",
        largeImage: "",
        price: 0,
    }

    handleChange = (e) => {
        const { name, type, value } = e.target
        const val = type === "number" ? parseFloat(value) : value
        this.setState({
            [name]: val,
        })
    }

    uploadFile = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "second surf")

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/lukedaviesweb/image/upload",
            {
                method: "POST",
                body: data,
            }
        )

        const file = await res.json()
        console.log(file)
        this.setState({
            image: file.secure_url,
            largeImage: file.eager[0].secure_url,
        })
    }

    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error }) => (
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault()
                            const res = await createItem()
                            const title = res.data.createItem.title.replace(
                                /\s/g,
                                "-"
                            )
                            //change them to the single item page
                            Router.push({
                                pathname: "/item",
                                query: { id: res.data.createItem.id },
                            })
                            console.log(res)
                        }}
                    >
                        <Error error={error} />
                        <fieldset disabled={loading} aria-busy={loading}>
                            <label htmlFor="file">
                                Image
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    placeholder="upload an image"
                                    // value={this.state.image}
                                    onChange={this.uploadFile}
                                    required
                                />
                                {this.state.image && (
                                    <img
                                        width="200"
                                        src={this.state.image}
                                        alt="preview"
                                    />
                                )}
                            </label>

                            <label htmlFor="title">
                                Title
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <label htmlFor="description">
                                Price
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="price"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <label htmlFor="description">
                                Description
                                <textarea
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </fieldset>

                        <p>{this.state.title}</p>
                        <p>{this.state.description}</p>
                    </form>
                )}
            </Mutation>
        )
    }
}

export default createItem
export { CREATE_ITEM_MUTATION }
