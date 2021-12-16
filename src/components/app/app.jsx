import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import { AppRoute } from '../../const';
import * as S from './app.styled';
import NotFoundPage from '../not-found-page/not-found-page';
import browserHistory from '../../browser-history';
import StubPage from '../stub-page/stub-page';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
      <Router history={browserHistory}>
        <Switch>
          <Route exact path={`${AppRoute.DetailedQuest}:id`}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.NewGamers}>
            <StubPage />
          </Route>
          <Route exact path={AppRoute.Reviews}>
            <StubPage />
          </Route>
          <Route exact path={AppRoute.Special}>
            <StubPage />
          </Route>
          <Route exact path={AppRoute.Root}>
            <Home />
          </Route>
          <Route exact path={AppRoute.NotFound}>
            <NotFoundPage />
          </Route>
          <Route >
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
  </ThemeProvider>
);

export default App;
