export const FormConfirm = (formikProps) => {
    const { accountType, school, address } = formikProps.values;

    return (
        <>
            <p>account Type: {accountType}</p>
            <p>school: {school}</p>
            <p>address: {address}</p>
        </>
    )

}