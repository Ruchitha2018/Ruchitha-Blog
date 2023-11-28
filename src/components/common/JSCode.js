import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const JSCode = ({ code }) => {
 return (
  <SyntaxHighlighter language="javascript" style={nightOwl}>
   {code}
  </SyntaxHighlighter>
 )
}

export default JSCode;