
import { ProductGridStyled } from "./styled"
import { GridTease, HorizontalTease } from "../Tease"


export const ProductGrid = ({ view, searchResults }) => {
    let gridView = view === 'grid' ? true : false;
    let horizontalView = view === 'horizontal' ? true : false;

    return (
        <ProductGridStyled>

            {searchResults.map(result => {
                if (gridView) {
                    return (
                        <GridTease
                            result={result}
                        />
                    )
                }

                if (horizontalView) {
                    return (
                        <HorizontalTease
                            result={result}
                        />
                    )
                }


            })}
        </ProductGridStyled>
    )
}
