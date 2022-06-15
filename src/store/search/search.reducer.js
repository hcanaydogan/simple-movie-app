export const SearchParams = {
  Type: {
    All: '',
    Movie: 'movie',
    Series: 'series',
    Episode: 'episode'
  },
  Text: 's',
  Page: 'page',
  Year: 'y'
}

const intialState = {
  Text: 'Pokemon',
  Type: '',
  Page: '',
  Year: ''
};

export default function searchReducer(state = intialState, action){
  switch (action.type) {
    case 'search/searchParamsChanged':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}