import { useNavigate } from "react-router-dom"
import { Form } from "../Components/Form"
import { sleep } from "../Helpers/Promises"

export const SignIn = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Hello, ReactBris!</h1>

            <Form
                title="Sign In"
                onSubmit={async () => {
                    await sleep(2000)
                    navigate('/dashboard')
                }}
            />

            <button onClick={() => navigate('/sign-up')}>Sign Up</button>
        </>
    )
}
