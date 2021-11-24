import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      border-radius: 100px;
      width: 8rem;
    }
    nav {
      display: flex;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;

        h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-title);
        }
        p {
          margin-top: 0.3rem;
          color: var(--text-subtitle);
          font-size: 1rem;
          font-weight: 400;
          max-width: 25rem;
        }
      }
    }
  }
  .stats {
    display: flex;

    margin-top: 2rem;
    nav {
      display: flex;
      width: 36rem;
      justify-content: space-between;
      div {
        h3 {
          color: var(--text-title);
          font-weight: 700;
          font-size: 2rem;
        }
        p {
          color: var(--text-subtitle);
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }

  button {
    margin: 1rem 0rem auto auto;
    width: 100%;
    color: var(--text-subtitle);
    font-weight: 400;
    padding: 1rem;
    background: var(--green);
    border-radius: 5px;
    font-weight: 700;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
