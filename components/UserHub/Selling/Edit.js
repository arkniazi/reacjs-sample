import { BackButton } from '../../Button'
import { motion } from 'framer-motion'
import { demoSellingItemsList } from '../DemoData';
import { EditItemStyled } from '../styled'
import { EditSurfboardForm } from '../../Forms/EditItem/EditSurfboardForm';




export const Edit = ({ id, setView }) => {

    //DEMO DATA ONLY WILL NEED TO QUERY WITH GRAPHQL
    const itemToEdit = demoSellingItemsList[id - 1];
    const category = itemToEdit.category;

    const renderView = () => {
        switch (category) {
            case 'surf':
                return (
                    <EditSurfboardForm itemToEdit={itemToEdit} />
                )

            case 'sup':
                return (
                    <EditSurfboardForm />
                )
            case 'kitesurf':
                return (
                    <EditSurfboardForm />
                )

            case 'foilboarding':
                return (
                    <EditSurfboardForm />
                )

            case 'wetsuit':
                return (
                    <EditSurfboardForm />
                )
        }
    }


    return (
        <EditItemStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <BackButton onClick={() => setView('list')}>Back</BackButton>

            <h4>{category} Details</h4>

            { renderView()}

        </EditItemStyled>
    )
}