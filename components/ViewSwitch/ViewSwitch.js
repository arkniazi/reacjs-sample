import { ViewSwitchStyled } from "./styled"
import { GridIcon, HorizontalViewIcon } from "../Icons"

export const ViewSwitch = ({ handleViewUpdate, view }) => {
    let gridView = view === 'grid' ? true : false;
    let horizontalView = view === 'horizontal' ? true : false;


    return (
        <ViewSwitchStyled>

            <GridIcon
                className="viewSwitch__icon viewSwitch__icon--grid"
                onClick={() => handleViewUpdate('grid')}
                opacity={gridView}
            />

            <HorizontalViewIcon
                className="viewSwitch__icon viewSwitch__icon--horizontal"
                onClick={() => handleViewUpdate('horizontal')}
                opacity={horizontalView}
            />

        </ViewSwitchStyled>
    )
}