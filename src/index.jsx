import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import HomeTemplate from './templates/HomeTemplate';
import { ResponsiveItem } from './templates/ResponsiveItem';
import HomePage from './pages/home/HomePage';
import HomeResponsivePage from './pages/home/HomeResponsivePage';

export const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route element={<ResponsiveItem component={<HomePage />} mobileComponent={<HomeResponsivePage />} />} index></Route>
        </Route>
      </Routes>
    </Provider>
  </HistoryRouter>
);
