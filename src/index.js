import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import messages from './messages';

const languages = ['en', 'es'];
let locale = navigator.language.substr(0, 2);
if(!languages.includes(locale)) locale = 'en';

console.log(locale);
ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <App />
        </IntlProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
