import { GET_NEWS, VIEW_SINGLE_NEWS, GET_RELATED_TOPICS } from "./newsTypes";
import { axiosInstance } from "./../../network/apis";

export const getNews = (params) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/articles`, {
      handlerEnabled: true,
      params,
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

export const getRelatedTopics = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/relatedTopics`, {
      handlerEnabled: true,
    });
    dispatch({
      type: GET_RELATED_TOPICS,
      payload: res.data,
    });
  } catch (err) {
    console.error({ ...err });
  }
};
