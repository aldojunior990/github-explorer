import { Container } from "./styles";
import { FormEvent } from "react";

export function Search() {
  function handleNewSearch(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <Container>
      <h1>
        Explore repositórios <br />
        no Github.
      </h1>
      <form onSubmit={handleNewSearch}>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit"> Pesquisar</button>
      </form>
    </Container>
  );
}
