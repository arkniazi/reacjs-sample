import BorderTopTemplate from "../templates/BorderTopTemplate"
import styled from "styled-components"
import { RegisterForm } from "../components/Forms/RegisterForm"

const RegisterFormWrapper = styled.div`
    max-width:509px;
    margin: 0 auto 60px auto;
`


const Register = () => {
    return (
        <BorderTopTemplate>
            <RegisterFormWrapper>
                <RegisterForm />
            </RegisterFormWrapper>
        </BorderTopTemplate>
    )
}

export default Register