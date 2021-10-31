import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: 2rem auto;
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

    button {
      margin-top: -10rem;
      color: var(--text-subtitle);
      font-weight: 400;
      padding: 1rem;
      background: transparent;
      &:hover {
        filter: brightness(0.8);
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
`;
