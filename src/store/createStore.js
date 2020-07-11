import {createStore} from 'redux';
import {DISPATCH_ACTION} from '../utils/constants';
const initialState = {
  totalTutors: [],
  selectedTutor: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_ACTION.POPULATE_DATA:
      return {...state, totalTutors: action.data};
    case DISPATCH_ACTION.SELECT_TUTOR:
      return {...state, selectedTutor: action.data};
  }
  return state;
};

export default function configureStore() {
  const store = createStore(reducer);

  return store;
}
