const intialState = {
  text: 'Pokemon',
  year: '',
  type: ''
};

export default function filtersReducer(state = intialState, action){
  switch (action.type) {
    case 'filters/filterChanged':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}