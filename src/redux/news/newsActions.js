import { VIEW_SINGLE_NEWS } from "./newsTypes";
import { history } from "./../../history";

export const viewSingleNews = (singleNews) => async (dispatch) => {
  dispatch({
    type: VIEW_SINGLE_NEWS,
    payload: singleNews,
  });

  history.push(`/details/${singleNews.id}`);
};
