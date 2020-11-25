import { GET_NEWS, VIEW_SINGLE_NEWS } from "./newsTypes";

const INITIAL_STATE = { singleNews: null };

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEWS: {
      return { ...state, articles: action.payload };
    }
    case VIEW_SINGLE_NEWS: {
      return { ...state, singleNews: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
