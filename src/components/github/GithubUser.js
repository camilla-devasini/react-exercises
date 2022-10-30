

import useGithubUserSWR from "../hooks/useGithubUserSWR";


function GithubUser ({username}) {
    const { data, error, loading, onRefresh } = useGithubUserSWR({username});
    // data è un oggetto, dopo non posso usare il metodo map degli array...
    
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && (
                <div>
                        <p>{data.name}</p>
                        <p>{data.login}</p>
                        <p>{data.id}</p> 
                        <button onClick={onRefresh}>Refresh</button>
                </div> 
                
            )}
            
            
        </div> 
    )
}
  
export default GithubUser;


//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);


//     async function fetchGithubUser (username) {
    
//         setLoading(true);
//         try {
//             const response = await fetch(`https://api.github.com/users/${username}`);
//             const json = await response.json();
//             console.log(json);
//             setData(json);
          
//             } catch(error) {
//                 setError(error);

//             } finally {
//                 setLoading(false);
//         }
//     }

            
//     useEffect(() => {
//             fetchGithubUser(username);
//     }, [username])

            
//     return (
//         <div>
//         {loading && !error && <p>Loading...</p>}
//         {error && <p>{error.message}</p>}
//         {data && 
//             <div>
//                 <p>Username: {data.login}</p>
//                 <p>Name: {data.name}</p>
//                 <p>Id: {data.id}</p>
               
//             </div> }
       
//         </div>
//     )
// }





//OPPURE:
    // useEffect( () => {
//             setLoading(true);
//             fetch(`https://api.github.com/users/${username}`)

//             .then((response) => {
//                 if(response.status !== 200) {
//                     setError(new Error("User not found"))
//                 } 
//                 return response.json()
//             })    
//             .then(json => {
//                 console.log(json);
//                 setData(json)
//                 setLoading(false)
//                 }  
//             )
//         .catch((error) => setError(error))
//         .finally(setLoading(false))
               
    // }, [username])