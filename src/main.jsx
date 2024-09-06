import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import App from './components/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
// import { persistor, store } from './redux/store.js';
// import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);
