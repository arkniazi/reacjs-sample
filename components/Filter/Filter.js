import { FilterStyled } from "./styled"
import { FilterForm } from "../Forms/FilterForm"


export const Filter = ({ category, subcategory }) => {
    return (
        <FilterStyled>
            <div className="Filter">
                <h2 className="h1 black">{category ? category : "search"}</h2>
                <p>{subcategory ? subcategory : ""}</p>
                <FilterForm />
            </div>
        </FilterStyled>
    )
}
