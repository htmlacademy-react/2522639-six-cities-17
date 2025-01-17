import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

// Задаем количество предложений и их отображение
const MAX_CARDS = 8;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App maxCards={MAX_CARDS} />
  </React.StrictMode>
);
