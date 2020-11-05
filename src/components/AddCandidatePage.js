import React from 'react';
import { connect } from 'react-redux';
import CandidateForm from './CandidateForm';
import { addCandidate } from '../actions/candidates';

const AddCandidatePage = (props) => (
  
  <div>
    <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Lägg till ny kandidat</h1>
          </div>
    </div>
    <div className="content-container">
    <CandidateForm
      onSubmit={(candidates) => {
        props.dispatch(addCandidate(candidates));
        props.history.push('/');
      }}
      />
      </div>
  </div>
);

export default connect()(AddCandidatePage);