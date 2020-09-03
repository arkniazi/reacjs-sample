import { ViewSwitchStyled } from "./styled"
import { GridIcon, HorizontalViewIcon } from "../Icons"

export const ViewSwitch = ({ handleViewUpdate, current }) => {
    let gridView = current === 'grid' ? true : false;
    let horizontalView = current === 'horizontal' ? true : false;


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