import React from 'react';
import CandidateList from './CandidateList';
import CandidateListFilters from './CandidateListFilters';

const CandidateDashboardPage = () => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Alla kandidater</h1>
      </div>
    </div>
    <CandidateListFilters />
    <CandidateList />
  </div>
);

export default CandidateDashboardPage;
