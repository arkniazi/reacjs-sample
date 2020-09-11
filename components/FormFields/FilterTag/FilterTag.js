import { FilterTagStyled } from './styled'

export const FilterTag = (props) => {
    return (
        <FilterTagStyled>
            {props.children}
        </FilterTagStyled>
    )
}