

function Sum(props) {
    
    return (
        <h1>
            {
                props.numbers.reduce((sum, current) => {
                    return sum + current;
                }, 0)
            }
        
        </h1>
    )

}

export default Sum;