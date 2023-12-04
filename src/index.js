import React from 'react';
import ReactDOM from 'react-dom/client';

import BooksContext from './context/BooksContext';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BooksContext.Provider value={5}>
        <App />
    </BooksContext.Provider>
);

