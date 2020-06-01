let initialState = {
    numberOfDices: null,
    requiredValue: null,
    results: null,
  }
;

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
    case 'SET-NUMBER-OF-DICES':
      return {
        ...state,
        numberOfDices: action.numberOfDices
      };
    case 'SET-REQUIRED-VALUE':
      return {
        ...state,
        requiredValue: action.requiredValue
      };
    case 'SET-RESULTS':
      return {
        ...state,
        results: action.results
      }
  }
};

export const throwDices = (number) => {
  let result = [];
  for (let i = 0; i < number; i++) {
    let rand = Math.floor(1 + Math.random() * (6 + 1 - 1));
    result.push(rand)
  }
  return (dispatch) => {
    dispatch(setResults(result))
  }
};

export const setNumberOfDices = (numberOfDices) => ({type:'SET-NUMBER-OF-DICES', numberOfDices});
export const setRequiredValue = (requiredValue) => ({type:'SET-REQUIRED-VALUE', requiredValue});
export const setResults = (results) => ({type:'SET-RESULTS', results});