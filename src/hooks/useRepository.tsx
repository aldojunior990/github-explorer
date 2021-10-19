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

interface RepoContextData {
  dataRepo: DataRepoProps;
  setdataRepo: (value: DataRepoProps) => void;
  search: string;
  setSearch: (value: string) => void;
  nextPage: boolean;
  repoList: RepoListProps[];
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
  const [nextPage, setNextPage] = useState(false);

  function requestDataRepo() {
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
        setSearch("");
        setNextPage(true);
      })
      .catch((err) => {});
  }

  function requestRepositoryList() {
    api
      .get<RepoListProps[]>(`${search}/repos`)
      .then((response) => {
        setRepoList(response.data);
      })
      .catch((err) => {
        setRepoList([]);
      });
  }

  useEffect(() => {
    if (search !== "") {
      requestDataRepo();
      requestRepositoryList();
    }
  }, [search]);

  console.log(dataRepo);
  console.log(repoList);

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
