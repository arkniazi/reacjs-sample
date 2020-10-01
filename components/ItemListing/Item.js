import React, { Component } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import formatMoney from "../../lib/formatMoney"
import { ItemStyled } from "./styled"
import { DeleteItem } from "./DeleteItem"

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        const { item } = this.props

        return (
            <ItemStyled>
                {item.image && <img src={item.image} alt={item.image.title} />}
                <h2>
                    <Link href={{ pathname: "/item", query: { id: item.id } }}>
                        <a>{item.title}</a>
                    </Link>
                </h2>
                <p>{formatMoney(item.price)}</p>
                <p>{item.description}</p>
                <Link href={{ pathname: "/update", query: { id: item.id } }}>
                    <a>Edit {item.title}</a>
                </Link>
                <DeleteItem id={item.id}>Delete Item</DeleteItem>
            </ItemStyled>
        )
    }
}
