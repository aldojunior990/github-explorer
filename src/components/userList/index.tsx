import { useRepository } from "../../hooks/useRepository";
import { Container } from "./styles";

interface UserProps {
  login: string;
}

export function UserList() {
  const { userList, setSearch } = useRepository();

  if (userList === []) return;

  return (
    <Container>
      {userList.map((user) => {
        return (
          <li key={user.id}>
            <nav>
              <img src={user.avatar_url} alt="" />

              <div>
                <h3>{user.login}</h3>
                <p>
                  Acessado em:{" "}
                  {new Intl.DateTimeFormat("pt-br").format(new Date())}
                </p>
              </div>
            </nav>
            <button onClick={() => setSearch(user.login)}>
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.105L6.50165 9L0 15.895L1.74918 17.75L10 9L1.74918 0.25L0 2.105Z"
                  fill="#C9C9D4"
                />
              </svg>
            </button>
          </li>
        );
      })}
    </Container>
  );
}
