import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 3rem;
  height: 25rem;
  overflow: auto;

  li {
    padding: 0.8rem;
    background: var(--components-background);
    width: 100%;
    height: 5rem;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      h3 {
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--text-title);
      }
      p {
        margin-top: 0.5rem;
        font-weight: 400;
        color: var(--text-subtitle);
      }
    }
    & + li {
      margin-top: 0.5rem;
    }
  }
`;
