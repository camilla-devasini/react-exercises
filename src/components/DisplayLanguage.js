import LanguageContext from "./context/LanguageContext";

function DisplayLanguage () {
    return (
        <LanguageContext.Consumer>
            {(Language) => {
                return <h1>{Language}</h1>
            }}
        </LanguageContext.Consumer>
    )
}


export default DisplayLanguage;



// OPPURE USANDO useContext HOOK:

// import { useContext } from "react";

// function DisplayLanguage() {
//     const selectedLanguage = useContext(LanguageContext);
//     return (
//         <h1>{selectedLanguage}</h1>
//     )
// } 
// export default DisplayLanguage;   