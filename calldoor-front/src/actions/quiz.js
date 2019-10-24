export const prevQuestion = value => ({
  type: 'PREVIOUS_QUESTION',
  value,
});

export const nextQuestion = value => ({
  type: 'NEXT_QUESTION',
  value,
});

export const selectCompany = companyName => ({
  type: 'SELECT_COMPANY',
  companyName,
});

export const clearStep = () => ({
  type: 'CLEAR_STEP',
});
