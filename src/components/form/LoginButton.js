
const LoginButton = props => {

    return (
        <button onClick={props.onLogin} disabled={props.onEnable}>Click</button>
    )
}

export default LoginButton;