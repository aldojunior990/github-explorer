import { Container } from "./styles";
import { FormEvent, useState } from "react";
import { useRepository } from "../../hooks/useRepository";
import { UserList } from "../userList";

export function Search() {
  const [value, setValue] = useState("");

  const { setSearch } = useRepository();

  function OnHandleNewSearch(event: FormEvent) {
    event.preventDefault();

    setSearch(value);

    setValue("");
  }

  return (
    <>
      <Container>
        <h1>
          Explore repositórios <br />
          no Github.
        </h1>
        <form onSubmit={OnHandleNewSearch}>
          <input
            value={value}
            placeholder="Digite aqui"
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit"> Pesquisar</button>
        </form>
      </Container>

      <UserList />
    </>
  );
}
