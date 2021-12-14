import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { createAPI } from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import { fetchQuestsAction } from './store/api-actions';
import { rootReducer } from './store/root-reducer';

const api = createAPI(
  // () => store.dispatch(fetchQuestsAction),
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchQuestsAction());

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
