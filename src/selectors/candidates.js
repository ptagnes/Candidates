import moment from 'moment';

export default (candidates, { text }) => {
  return candidates.filter((candidate) => {
    const textMatch = candidate.description.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  })
};

/**
.sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
 */