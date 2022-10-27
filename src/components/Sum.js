
//What happens if the numbers prop of the Sum component
//is not set? 
// Se il componente App non passa il valore della props, il metodo reduce all'interno
// del functional component Sum non riuscirà a leggere il valore su cui eseguire il calcolo.
// In console avrò l'errore "Uncaught TypeError:
//Cannot read properties of undefined (reading 'reduce')".
// Posso prevedere quindi un valore di default per la props tramite la destrutturazione
// dell'oggetto props e l'assegnazione dell'array di default alla chiave numbers

function Sum(props) {
    //default props
    const {numbers = [1,2,3]} = props;
    
    return (
        <h1>
            {
                numbers.reduce((sum, current) => {
                    return sum + current;
                }, 0)
            }
        
        </h1>
    )

}

export default Sum;