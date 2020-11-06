import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CandidateDashboardPage from '../components/CandidateDashboardPage';
import AddCandidatePage from '../components/AddCandidatePage';
import EditCandidatePage from '../components/EditCandidatePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={CandidateDashboardPage} exact={true} />
        <Route path="/create" component={AddCandidatePage} />
        <Route path="/edit/:id" component={EditCandidatePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
