import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  //   body: "red",
  body: "#f1faee",
  text: "#000000",
};

export const darkTheme = {
  //   body: "green",
  body: "#000000",
  text: "#f1faee",
};

export const GlobalStyles = createGlobalStyle`
    :root {
      /* --primary-color: #4accd9; */
      --primary-color: #F8961E;
      --accent-color: #F94144;
      --accent-bg-color: rgba(204, 85, 0, 0.1);
      --page-horizontal-padding: 20px;
      --header-height: 60px;
      --max-content-width: 1200px;
      /* --heading-font-family: 'Teko', sans-serif; */
      --user-img-width: 120px;
    }

    /* toggle light/dark theme */
    body {
        background: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        transition: all .5s linear;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    /* html {
        background: black;
    } */
    /* h1, h2, h3 {
      color: var(--primary-color);
      font-family: var(--heading-font-family);
    } */
    /* h2 {
      font-size: 28px;
    } */
`;
