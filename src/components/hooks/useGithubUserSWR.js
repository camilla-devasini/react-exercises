// HOOK PER FETCH TRAMITE USESWR
import useSWR from 'swr';


const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUserSWR({username}) {
    const { data, error } = useSWR(
        username ? `https://api.github.com/users/${username}` : null, 
        fetcher,
     
    );
  
        return {
            data,
            error,
            loading: !error && !data, 
        }
   

    
}

export default useGithubUserSWR;
