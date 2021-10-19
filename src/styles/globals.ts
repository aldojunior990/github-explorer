import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }  
 
  body {
     background-image: url("../../public/Github.png");
     background: var(--color-background);
   
     
  }

  :root{

    --color-background: #F2F2FA;

    --components-background: #fff;
    --yellow: #FCA311;


    --text-title:#3A3A3A;
    --text-subtitle: #737380;
    --text-light: #3D3D4D;
    --tex-subtitle-light: #A8A8B3;


    --green: #04D361;

    --black-blue: #14213D;
    --blue: #5965E0;
  }

  @media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}


button {
  cursor: pointer;
  border: 0;

}


a {
  color: inherit;
  text-decoration: none;
}



`;
