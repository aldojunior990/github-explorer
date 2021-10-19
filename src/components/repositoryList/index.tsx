import { useRepository } from "../../hooks/useRepository";
import { Container } from "./styles";

export function RepositoryList() {
  const { repoList } = useRepository();

  if (repoList === []) return;

  return (
    <Container>
      {repoList.map((repository) => {
        return (
          <li key={repository.id}>
            <nav>
              <h3>{repository.name}</h3>
              <p>
                {new Intl.DateTimeFormat("pt-br").format(
                  new Date(repository.created_at)
                )}
              </p>
            </nav>
            <a href={repository.html_url}>
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
            </a>
          </li>
        );
      })}
    </Container>
  );
}
