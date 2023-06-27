import ReactDOM from 'react-dom/client';
import 'symbol-observable';
import App from './App.tsx';
import GlobalStyle from './style/globalStyle.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
