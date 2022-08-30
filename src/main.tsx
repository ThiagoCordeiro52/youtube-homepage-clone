import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>
);
