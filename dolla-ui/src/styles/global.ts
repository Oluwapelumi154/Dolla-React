import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "poppins",sans-serif;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;
