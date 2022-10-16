
const LoginButton = props => {

    return (
        <button onClick={props.onLogin} disabled={props.disabled}>Click</button>
    )
}

export default LoginButton;

