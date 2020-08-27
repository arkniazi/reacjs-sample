import { FilterStyled } from "./styled"
import { FilterForm } from "../Forms/FilterForm"


export const Filter = ({ category }) => {
    return (
        <FilterStyled>
            <div className="Filter">
                <h1 className="black">{category ? category : "search"}</h1>
                <FilterForm />
            </div>
        </FilterStyled>
    )
}
