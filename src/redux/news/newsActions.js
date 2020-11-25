import { GET_NEWS, VIEW_SINGLE_NEWS } from "./newsTypes";
import { axiosInstance } from "./../../network/apis";

export const getNews = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/articles`, {
      handlerEnabled: true,
    });
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (err) {
    console.error({ ...err });
  }
};

export const viewSingleNews = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/articles/${id}`, {
      handlerEnabled: true,
    });
    dispatch({
      type: VIEW_SINGLE_NEWS,
      payload: res.data,
    });
  } catch (err) {
    console.error({ ...err });
  }
};
