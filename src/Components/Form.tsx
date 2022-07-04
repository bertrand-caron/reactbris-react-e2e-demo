import { useCallback, useState, MouseEvent } from "react"

type FormProps = {
    readonly title?: string
    readonly onSubmit: (formData: {readonly email: string, readonly password: string}) => Promise<void>
}

export const Form = (props: FormProps): JSX.Element => {
    const {title, onSubmit} = props
    const [processing, setProcessing] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onClick = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()

            setProcessing(true)
            onSubmit({email, password}).catch(console.error).finally(() => setProcessing(false))
        },
        [setProcessing, email, password, onSubmit],
    )

    return (
        <div style={{backgroundColor: 'grey', margin: '0 30%'}}>
            {title !== undefined && <h2>{title}</h2>}
            <form >
                <p>Email</p>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <p>Password</p>
                <input value={password} onChange={e => setPassword(e.target.value)}/>
                <div>
                    <button type="submit" onClick={onClick} disabled={processing}>{processing ? 'Processing...' : 'Submit'}</button>
                </div>
            </form>
        </div>
    )
}
