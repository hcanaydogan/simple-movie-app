import moment from "moment";

const intialState = {
  searchParams: {
    text: 'Pokemon',
    type: '',
    page: 1,
    year: null
  },
  viewMode: 'table'
};

export default function filtersReducer(state = intialState, action) {
  switch (action.type) {
    case 'filters/searchParamsChanged':
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          ...action.payload
        }
      };
      case 'filters/viewModeChanged':
        return {
          ...state,
          viewMode: action.payload
        }
    default:
      return state;
  }
}