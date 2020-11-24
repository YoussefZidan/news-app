import { VIEW_SINGLE_NEWS } from "./newsTypes";
import { history } from "./../../history";
import { articles } from "../../utility/newsapi";

export const viewSingleNews = (singleNewsId) => async (dispatch) => {
  let singleNews = articles.find((ele) => ele.id === singleNewsId);
  dispatch({
    type: VIEW_SINGLE_NEWS,
    payload: singleNews,
  });

  history.push(`/details/${singleNews.id}`);
};
