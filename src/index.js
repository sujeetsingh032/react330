import React from 'react';
import ReactDOM from 'react-dom/client';
import Practice,{Abc} from './practice/Practice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practice></Practice>
    <Abc/>
  </React.StrictMode>
);
