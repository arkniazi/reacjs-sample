export const Edit = ({ id, setView }) => {
    return (
        <div>
            <button onClick={() => setView('list')}>Back</button>
            <h4>(category type) Details</h4>
            <p>form goes here</p>
        </div>
    )
}