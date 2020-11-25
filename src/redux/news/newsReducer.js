import { GET_NEWS, GET_RELATED_TOPICS, VIEW_SINGLE_NEWS } from "./newsTypes";

const INITIAL_STATE = { singleNews: null, articles: null, relatedTopics: null };

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEWS: {
      return { ...state, articles: action.payload };
    }
    case VIEW_SINGLE_NEWS: {
      return { ...state, singleNews: action.payload };
    }
    case GET_RELATED_TOPICS: {
      return { ...state, relatedTopics: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
