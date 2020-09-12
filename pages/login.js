import BorderTopTemplate from "../templates/BorderTopTemplate"
import { Button, BorderButton } from '../components/Button'
import { LoginForm } from '../components/Forms/LoginForm'
import styled from "styled-components"

const LoginFormWrapper = styled.div`
    max-width:385px;
    margin: 0 auto 60px auto;
`
const Login = ({ id }) => {
    return (
        <BorderTopTemplate>
            <LoginFormWrapper>
                <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Login to Continue</h2>

                <LoginForm />
                <div style={{ marginBottom: '45px' }}>
                    <BorderButton
                        btnText="Login with Facebook"
                        url="/facebook-login"
                        size="small"
                    />
                </div>


                <Button
                    btnText="Create Account"
                    url="/register"
                    size="small"
                    fullWidth
                    altTheme
                />

            </LoginFormWrapper>

        </BorderTopTemplate>
    )
}

export default Login