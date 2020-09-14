import BorderTopTemplate from "../templates/BorderTopTemplate"
import styled from "styled-components"
import { RegisterMultiStep } from "../components/Forms/RegisterMultiStep"

const RegisterFormWrapper = styled.div`
    max-width:409px;
    margin: 0 auto 60px auto;
`

const Register = () => {
    return (
        <BorderTopTemplate>
            <RegisterFormWrapper>
                <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Select Account Type</h2>
                <p style={{ textAlign: 'center' }}>
                    Users wanting to create a shop account are encouraged to get in contact with the 2NDSURF Team in advanced. Shop accounts require verification before they are accepted and created.
                </p>


                <RegisterMultiStep />
            </RegisterFormWrapper>
        </BorderTopTemplate>
    )
}

export default Register