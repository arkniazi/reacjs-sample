import { BackButton } from '../../Button'

export const BackButtonSection = ({ setStep, step }) => {
    return (
        <div style={{ margin: '0 0 25px 0' }}>
            <BackButton onClick={() => setStep(step - 1)}>Back</BackButton>
        </div>
    )
}