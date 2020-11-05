import React from 'react';
import { connect } from 'react-redux';
import CandidateForm from './CandidateForm';
import { editCandidate, removeCandidate } from '../actions/candidates';

const EditCandidatePage = (props) => {
  return (
    <div>
      <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Candidate</h1>
          </div>
      </div>
      <div className="content-container">
      <CandidateForm
        candidate={props.candidate}
        onSubmit={(candidate) => {
          props.dispatch(editCandidate(props.candidate.id, candidate));
          props.history.push('/');
        }}
      />
      <button className="button button--secondary" onClick={() => {
        props.dispatch(removeCandidate({ id: props.candidate.id }));
        props.history.push('/');
        }}>Remove</button>
        </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    candidate: state.candidates.find((candidate) => candidate.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditCandidatePage);
