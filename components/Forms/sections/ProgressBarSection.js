import { ProgressBarStyled } from './styled'

export const ProgressBarSection = ({ step, totalSteps }) => {

    const steps = [];
    let i;

    for (i = 0; i <= totalSteps; i++) {
        steps.push(<div className={step === (i + 1) && 'active'}></div>)
    }

    return (
        <ProgressBarStyled>
            {steps}
        </ProgressBarStyled>
    )
}