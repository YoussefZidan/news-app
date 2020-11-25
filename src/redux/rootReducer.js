import newsReducer from "./news/newsReducer";
import loadersReducer from "./loaders/loadersReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  news: newsReducer,
  loaders: loadersReducer,
});

export default rootReducer;
