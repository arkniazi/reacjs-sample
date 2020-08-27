import { FilterStyled } from "./styled"
import { FilterForm } from "../Forms/FilterForm"
export const Filter = ({ category }) => {
    return (
        <FilterStyled>
            <div className="Filter">
                <h1 className="black">{category ? category : "search"}</h1>
                <p>im a filter</p>
                {/* filter form */}
                {/* filter tags */}
                {/* category dropdown */}
                {/* location dropdown */}
                {/* radius radio select */}
                {/* price min max inputs */}
                {/* condition checkbox */}
                {/* seller type checkbox */}
                {/* end filter form */}
                <FilterForm />
            </div>
        </FilterStyled>
    )
}
