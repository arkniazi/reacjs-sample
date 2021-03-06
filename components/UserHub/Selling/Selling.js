import { useState } from 'react'
import { ProductGrid } from '../../ProductGrid'
import { demoSellingItemsList } from '../DemoData';
import { Edit } from './Edit'
import { AnimatePresence } from 'framer-motion'

export const Selling = () => {
    const [view, setView] = useState('list');
    const [currentItemID, setItemID] = useState(0);

    const renderView = () => {
        switch (view) {
            case 'list':
                return (
                    <ProductGrid
                        setItemID={setItemID}
                        setView={setView}
                        view="horizontal"
                        searchResults={demoSellingItemsList}
                        sellingItems
                        disableHover
                    />
                )

            case 'edit':
                return (
                    <Edit id={currentItemID} setView={setView} />
                )
        }
    }

    return (
        <AnimatePresence>
            { renderView()}
        </AnimatePresence>

    )
}