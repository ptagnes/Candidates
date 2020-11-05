import { v4 as uuid } from 'uuid';
const id = uuid()

// Namn
// Ålder
// Email
// Adress
// Aktuellt rekryteringssteg

export const addCandidate = (
  {
    description = '',
    note = '',
    age = 0,
    email = '',
    address = '',
    status = ''
  } = {}
) => ({
  type: 'ADD_CANDIDATE',
  candidate: {
    id: id,
    description,
    note,
    age,
    email,
    address,
    status
  }
});

// REMOVE_CANDIDATE
export const removeCandidate = ({ id } = {}) => ({
  type: 'REMOVE_CANDIDATE',
  id
});

// EDIT_CANDIDATE
export const editCandidate = (id, updates) => ({
  type: 'EDIT_CANDIDATE',
  id,
  updates
});
