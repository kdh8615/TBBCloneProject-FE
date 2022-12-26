import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color1 : rgb(250, 100, 85);
    --color2 : rgba(250, 240, 240);
    
    --pad1 : 8px;
    --pad2 : 16px;
    --pad3 : 56px;
    
    --font1 : 12px;
    --font2 : 14px;
    --font3 : 16px;
    --font4 : 18px;

  }
`;

export default GlobalStyle;