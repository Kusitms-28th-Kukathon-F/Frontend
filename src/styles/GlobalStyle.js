import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
  box-sizing: border-box;
  border-collapse: collapse;
  text-decoration: none;
  font-family: 'Pretendard', sans-serif;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
  background: #EAF2FF;
  overflow-y: hidden;
}

ol, ul, li {
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


table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }

  input {
    outline: none;
  }

textarea:focus{
	outline: none;
}

`;
