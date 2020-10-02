
import { ProductGridStyled } from "./styled"
import { GridTease, HorizontalTease } from "../Tease"
import { AnimatePresence, useAnimation } from 'framer-motion'


const GridTeaseVariants = {
    show: {
        opacity: 1, scale: 1
    },
    hide: {
        opacity: 0, scale: 0.4
    }
}

const HorizontalTeaseVariants = {
    show: {
        opacity: 1, y: 0
    },
    hide: {
        opacity: 1, y: -50
    }
}



export const ProductGrid = ({ view, searchResults, sellingItems, setItemID, setView, disableHover }) => {
    let gridView = view === 'grid' ? true : false;
    let horizontalView = view === 'horizontal' ? true : false;


    return (
        <ProductGridStyled>
            <AnimatePresence>

                {searchResults.map((result, index) => {
                    if (gridView) {
                        return (

                            <GridTease
                                key={index}
                                result={result}
                                variants={GridTeaseVariants}
                                initial="hide"
                                animate={"show"}
                                exit="hide"
                            />

                        )
                    }

                    if (horizontalView) {
                        return (
                            <HorizontalTease
                                key={index}
                                result={result}
                                variants={HorizontalTeaseVariants}
                                sellingItems={sellingItems}
                                setItemID={setItemID}
                                setView={setView}
                                disableHover={disableHover}
                                initial="hide"
                                animate="show"
                                exit="hide"
                            />
                        )
                    }


                })}

            </AnimatePresence>
        </ProductGridStyled>
    )
}
