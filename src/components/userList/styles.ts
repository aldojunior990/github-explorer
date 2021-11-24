import styled from "styled-components";

export const Container = styled.ul`
  margin: 0 auto;
  height: 26rem;
  width: 50vw;
  list-style: none;
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
      display: flex;
      align-items: center;
      img {
        margin-left: 0.5rem;
        width: 4rem;
        border-radius: 100px;
      }
      div {
        margin-left: 1.5rem;
        display: flex;
        flex-direction: column;
        h3 {
          color: var(--text-title);
          font-weight: 700;
          font-size: 1.3rem;
        }
        p {
          margin-top: 0.2rem;
          color: var(--text-subtitle);
          font-weight: 700;
          font-size: 0.7rem;
        }
      }
    }
    button {
      cursor: pointer;
      background-color: transparent;
    }

    & + li {
      margin-top: 0.5rem;
    }
  }
`;
