import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { toast } from "react-toastify";

import { api } from "../services/api";

interface RepoListProps {
  name: string;
  html_url: string;
  created_at: number;
  id: number;
}

interface DataRepoProps {
  avatar_url: string;
  repos_url: string;
  login: string;
  id: number;
  followers: number;
  bio: string;
  following: number;
  public_repos: number;
}

interface UserListProps {
  avatar_url: string;
  login: string;
  id: number;
}

interface RepoContextData {
  dataRepo: DataRepoProps;
  setdataRepo: (value: DataRepoProps) => void;
  search: string;
  setSearch: (value: string) => void;
  nextPage: boolean;
  repoList: RepoListProps[];
  userList: UserListProps[];
  setNextPage: (value: boolean) => void;
}

interface RepoProviderProps {
  children: ReactNode;
}

export const RepoContext = createContext<RepoContextData>(
  {} as RepoContextData
);

export function RepoProvider({ children }: RepoProviderProps) {
  const [dataRepo, setdataRepo] = useState<DataRepoProps>();
  const [search, setSearch] = useState("");
  const [repoList, setRepoList] = useState<RepoListProps[]>([]);
  const [userList, setUserList] = useState<UserListProps[]>([]);
  const [nextPage, setNextPage] = useState(false);

  async function newtDataRepo() {
    api
      .get<DataRepoProps>(`${search}`)
      .then((response) => {
        setdataRepo({
          login: response.data.login,
          id: response.data.id,
          avatar_url: response.data.avatar_url,
          repos_url: response.data.repos_url,
          followers: response.data.followers,
          bio: response.data.bio,
          following: response.data.following,
          public_repos: response.data.public_repos,
        });

        setNextPage(true);
        setSearch("");

        newUserList(response.data);
      })
      .catch((err) => {});
  }

  function newtRepositoryList() {
    api
      .get<RepoListProps[]>(`${search}/repos`)
      .then((response) => {
        setRepoList(response.data);
      })
      .catch((err) => {
        setRepoList([]);
      });
  }

  function newUserList(response: DataRepoProps) {
    let isExist = false;

    userList.map((user) => {
      if (user.id === response.id) {
        isExist = true;
      }
    });
    if (isExist === false) {
      setUserList([
        ...userList,
        {
          avatar_url: response.avatar_url,
          login: response.login,
          id: response.id,
        },
      ]);
    }
  }

  useEffect(() => {
    if (search !== "") {
      newtDataRepo();
      newtRepositoryList();
    }
  }, [search]);

  console.log(dataRepo);
  console.log(repoList);
  console.log(userList);

  return (
    <RepoContext.Provider
      value={{
        search,
        setSearch,
        setdataRepo,
        dataRepo,
        repoList,
        nextPage,
        setNextPage,
        userList,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export function useRepository() {
  const context = useContext(RepoContext);
  return context;
}
