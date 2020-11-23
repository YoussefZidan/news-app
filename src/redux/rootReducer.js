import newsReducer from "./news/newsReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
