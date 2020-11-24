import { VIEW_SINGLE_NEWS } from "./newsTypes";

const INITIAL_STATE = { singleNews: null };

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_SINGLE_NEWS: {
      return { ...state, singleNews: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
