
const LoginButton = props => {

    return (
        <button className="bg-blue-500 border border-blue-800 hover:bg-blue-700 text-white" onClick={props.onLogin} disabled={props.disabled}
                style={{backgroundColor: props.onCheckPassword
                    && (props.onCheckPassword.length < 8 ? "red" : "green")}} >Click</button>
    )           
}
export default LoginButton;

