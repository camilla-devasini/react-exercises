
const ResetButton = props => {

    return (
        <button className="bg-blue-500 border border-blue-800 hover:bg-blue-700 text-white"  onClick={props.onReset}>Reset</button>
    )
}

export default ResetButton;