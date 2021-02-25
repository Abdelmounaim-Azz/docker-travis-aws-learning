import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import axios from "axios";

const rootUrl = "https://api.github.com";
const client = {
  client_id: "d9308aacf8b204d361fd",
  client_secret: "84969aeef73956f4ec9e8716d1840532802bb81b",
  repos_count: 5,
  repos_sort: "created: asc",
};

const GithubContext = React.createContext();

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  // request loading
  const [isLoading, setIsLoading] = useState(false);

  const searchGithubUser = async (user) => {
    setIsLoading(true);
    const response = await axios(
      `${rootUrl}/users/${user}?client_id=${client.client_id}&client_secret=${client.client_secret}`
    ).catch((err) => console.log(err));
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(
          `${rootUrl}/users/${login}/repos?per_page=${client.repos_count}&sort=${client.repos_sort}`
        ),
        axios(
          `${followers_url}?per_page=${client.repos_count}&sort=${client.repos_sort}`
        ),
      ])
        .then((results) => {
          const [repos] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
        })
        .catch((err) => console.log(err));
    }
    setIsLoading(false);
  };

  // get initial user
  useEffect(() => {
    searchGithubUser("abdelmounaim-azz");
  }, []);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
