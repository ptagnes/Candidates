import React from "react";
import { connect } from "react-redux";
import CandidateListItem from "./CandidateListItem";
import selectCandidates from "../selectors/candidates";

const CandidateList = (props) => {
  const storedCandidates = JSON.parse(localStorage.getItem('candidates'));
  const filteredCandidates = JSON.parse(localStorage.getItem('filteredCandidates'));
  const candidates = storedCandidates ? storedCandidates : props.candidates;
  const allCandidates = filteredCandidates ? filteredCandidates : candidates;
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Kandidater</div>
        <div className="show-for-desktop">Kandidat</div>
        <div className="show-for-desktop"></div>
      </div>
      <div className="list-body">
        {(props.candidates.length === 0 && !storedCandidates) ? (
          <div className="list-item list-item--message">
            <span>Inga kandidater</span>
          </div>
        ) : (
          allCandidates.map((candidate) => {
            return (
              <CandidateListItem key={candidate.id} {...candidate} />
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    candidates: selectCandidates(state.candidates, state.filters),
  };
};

export default connect(mapStateToProps)(CandidateList);
