import React from 'react';
import { connect } from 'react-redux';
import CandidateListItem from './CandidateListItem';
import selectCandidates from '../selectors/candidates';

const CandidateList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Kandidater</div>
      <div className="show-for-desktop">Kandidat</div>
      <div className="show-for-desktop"></div>
    </div>
    <div className="list-body">
      {
        props.candidates.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No candidates</span>
          </div>
        ) : (
            props.candidates.map((candidate) => {
              return <CandidateListItem key={candidate.description} {...candidate} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    candidates: selectCandidates(state.candidates, state.filters)
  };
};

export default connect(mapStateToProps)(CandidateList);
