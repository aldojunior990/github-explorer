import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 3rem auto;
  @media (max-width: 720px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
  h1 {
    color: var(--text-title);
    font-weight: 700;
    font-size: 2.5rem;
  }
  form {
    margin-top: 2rem;
    input {
      border: 0;
      background-color: var(--components-background);
      height: 4rem;
      width: 70%;
      border-radius: 5px;
      padding: 1rem;
      color: var(--text-title);
      font-weight: 600;
      &::placeholder {
        padding: 0rem;
        font-weight: 600;
        color: var(--text-title);
      }
    }

    button {
      height: 4rem;
      width: 30%;
      background: var(--green);
      color: #fff;
      font-size: 0.7rem;
      font-weight: 700;
      border-radius: 5px;
    }
  }
`;
