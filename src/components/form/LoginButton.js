
const LoginButton = props => {

    return (
        <button onClick={props.onLogin} disabled={props.disabled}
                style={{backgroundColor: props.onCheckPassword
                    && (props.onCheckPassword.length < 8 ? "red" : "green")}} >Click</button>
    )           
}
export default LoginButton;

