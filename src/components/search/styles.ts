import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  margin: 3rem auto;
  h1 {
    color: var(--text-title);
    font-weight: 700;
    font-size: 3rem;
  }
  form {
    margin-top: 2rem;
    input {
      border: 0;
      background-color: var(--components-background);
      height: 4rem;
      width: 70%;
      border-radius: 5px;
      &::placeholder {
        padding: 1rem;
        font-weight: 500;
      }
    }

    button {
      height: 4rem;
      width: 30%;
      background: var(--green);
      color: #fff;
      font-weight: 700;
      border-radius: 5px;
    }
  }
`;
