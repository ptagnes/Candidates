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