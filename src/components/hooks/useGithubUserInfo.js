import { useEffect, useState } from "react";

function useGithubUserInfo(username) {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchGithubUser (username) {
    
        setLoading(true);

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();
            console.log(json);
            setData(json);
          
            } catch(error) {
                setError(error);

            } finally {
                setLoading(false);
        }
    }
            
    useEffect(() => {
            fetchGithubUser(username);
    }, [username])


    


}
export default useGithubUserInfo;
