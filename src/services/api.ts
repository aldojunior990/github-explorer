import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
});

/*useEffect(() => {
  fetch("https://api.github.com/orgs/rocketseat/repos")
    .then((response) => response.json())
    .then((data) => setRepositories(data));
}, []);*/
