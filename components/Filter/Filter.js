import { FilterStyled } from "./styled"
import { FilterForm } from "../Forms/FilterForm"


export const Filter = ({ category }) => {
    return (
        <FilterStyled>
            <div className="Filter">
                <h2 className="h1 black">{category ? category : "search"}</h2>
                <FilterForm />
            </div>
        </FilterStyled>
    )
}
