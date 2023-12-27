import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="note" contentEditable onInput={event => localStorage.setItem('note', event.target.innerHTML)} dangerouslySetInnerHTML={{ __html: localStorage.getItem('note') }}></div>
  </React.StrictMode>
);
