import React from "react";
import { useRepository } from "../../hooks/useRepository";
import { RepositoryList } from "../repositoryList";
import { Container } from "./styles";

export function User() {
  const { dataRepo, setNextPage } = useRepository();

  function handleClickButton() {
    setNextPage(false);
  }

  return (
    <Container>
      <nav className="header">
        <nav>
          <img src={dataRepo.avatar_url} alt="" />
          <div>
            <h2>{dataRepo.login}</h2>
            <p>{dataRepo.bio}</p>
          </div>
        </nav>
        <button onClick={handleClickButton}> voltar </button>
      </nav>

      <nav className="stats">
        <nav>
          <div>
            <h3>{dataRepo.followers}</h3>
            <p>Seguidores</p>
          </div>
          <div>
            <h3>{dataRepo.following}</h3>
            <p>Seguindo</p>
          </div>
          <div>
            <h3>{dataRepo.public_repos}</h3>
            <p>Repositorios</p>
          </div>
        </nav>
      </nav>

      <RepositoryList />
    </Container>
  );
}
