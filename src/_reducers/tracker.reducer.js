const initialState = {
  currentRow: null,
  cordssite: [[94,181,105,222,188,252,208,138],[217,133,196,258,377,118,350,72],[353,72,438,22,462,40,383,114]]
};

export function tracker(state = initialState, action) {
    switch (action.type) {

      case 'setrow':
      return { ...state, currentRow: action.payload}
     
    default:
      return state
    }
   }

