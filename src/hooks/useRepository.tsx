import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { toast } from "react-toastify";

import { api } from "../services/api";

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
}

interface RepoProviderProps {
  children: ReactNode;
}

export const RepoContext = createContext<RepoContextData>(
  {} as RepoContextData
);

export function RepoProvider({ children }: RepoProviderProps) {
  const [dataRepo, setdataRepo] = useState<DataRepoProps>();
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  console.log(dataRepo);

  useEffect(() => {
    if (search !== "") {
      api
        .get<DataRepoProps>(`${search}`)
        .then((response) =>
          setdataRepo({
            login: response.data.login,
            id: response.data.id,
            avatar_url: response.data.avatar_url,
            repos_url: response.data.repos_url,
            followers: response.data.followers,
            bio: response.data.bio,
            following: response.data.following,
            public_repos: response.data.public_repos,
          })
        )
        .catch((_err) => {
          setError("erro");
          toast.error("Este usuario não existe");
        });
    }
  }, [search]);

  return (
    <RepoContext.Provider value={{ search, setSearch, setdataRepo, dataRepo }}>
      {children}
    </RepoContext.Provider>
  );
}

export function useRepository() {
  const context = useContext(RepoContext);
  return context;
}
