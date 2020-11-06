import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
} from "../actions/filters";

class CandidateListFilters extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="input-group__item search">
          <input
            type="text"
            className="text-input"
            placeholder="Sök kandidat"
            value={this.props.filters.text}
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(CandidateListFilters);
