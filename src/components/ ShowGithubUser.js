import { useParams } from "react-router-dom";
import GithubUser from "./github/GithubUser";

function ShowGithubUser() {
    const {username} = useParams();

    return (
        <GithubUser username={"camilla-devasini"} />
    )
}

export default ShowGithubUser;