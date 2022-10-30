// HOOK PER FETCH TRAMITE USESWR
import useSWR from 'swr';


const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUserSWR({username}) {
    const { data, error, mutate } = useSWR(
        username ? `https://api.github.com/users/${username}` : null, 
        fetcher
    );

    function refreshData() {
        mutate();
    }
  
        return {
            data,
            error,
            loading: !error && !data,
            onRefresh: refreshData
        }
   

    
}

export default useGithubUserSWR;
