import React from 'react';
import { Link } from 'react-router-dom';

const CandidateListItem = ({ id, description, age, email, address, status }) => (
  <div className="list-item">
    <Link to={`/edit/${id}`}>
      <h3 className="list-item__title">{description}</h3>
    </Link>
    <p className="list-item__data"><span>ålder:</span> {age}</p>
    <p className="list-item__data"><span>epost:</span> {email}</p>
    <p className="list-item__data"><span>adress:</span> {address}</p>
    <p className="list-item__data"><span>fas:</span> {status}</p>
  </div>
);

export default CandidateListItem;