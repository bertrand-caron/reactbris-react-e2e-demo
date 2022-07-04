import { useNavigate } from "react-router-dom"
import { Form } from "../Components/Form"
import { sleep } from "../Helpers/Promises"

export const SignUp = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Sign Up</h1>

            <Form
                onSubmit={async () => {
                    await sleep(2000)
                    navigate('/dashboard')
                }}
            />
        </>
    )
}
