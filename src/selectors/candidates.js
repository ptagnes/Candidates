export default (candidates, { text }) => {
  const storedCandidates = JSON.parse(localStorage.getItem('candidates'));
  const allCandidates = storedCandidates
    ? storedCandidates
    : candidates;
  const filteredCandidates = allCandidates.filter((candidate) => {
    const textMatch = candidate.description
      .toLowerCase()
      .includes(text.toLowerCase());
    return textMatch;
  });
  localStorage.setItem("filteredCandidates", JSON.stringify(filteredCandidates));
  return filteredCandidates;
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
