import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProviderAuth from './contexts/auth/provider';
import { theme } from './theme';
import { Provider } from 'use-http';
import { httpUseOptions } from './api/options';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

let urlBase = process.env.REACT_APP_API_URL;
console.log('%c [ urlBase ]-16', 'font-size:13px; background:#06EE8D; color:#2f3656;', urlBase);

root.render(
  <React.StrictMode>
    <Provider url={urlBase} options={httpUseOptions}>
      <ProviderAuth>
        <ChakraProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ChakraProvider>
      </ProviderAuth>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
