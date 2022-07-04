import { useNavigate } from "react-router-dom"

export const Dashboard = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Dashboard</h1>

            <button onClick={() => navigate('/')}>Log out</button>
        </>
    )
}
