import {
  GET_NEWS,
  VIEW_SINGLE_NEWS,
  GET_RELATED_TOPICS,
  GET_CATEGORIES,
} from "./newsTypes";
import { axiosInstance } from "./../../network/apis";
import { store } from "../store";

export const getNews = (p) => async (dispatch) => {
  let params = { ...p, _sort: "publishedAt", _order: "desc", _limit: 9 };
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

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/sourceCategory`, {
      handlerEnabled: true,
    });
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.error({ ...err });
  }
};

export const searchArticle = (key) => async (dispatch) => {
  let filteredArticles;
  try {
    const res = await axiosInstance.get(`/articles`, {
      handlerEnabled: true,
    });
    if (key.length) {
      filteredArticles = res.data.filter((ele) =>
        ele.title.toLowerCase().includes(key.toLowerCase())
      );
      dispatch({
        type: GET_NEWS,
        payload: filteredArticles,
      });
    } else {
      store.dispatch(getNews());
    }
  } catch (err) {
    console.error({ ...err });
  }
};

export const filterWithCategory = (catId) => async (dispatch) => {
  try {
    let res;
    if (catId) {
      res = await axiosInstance.get(`/articles?categoryId=${catId}`, {
        handlerEnabled: true,
      });
    } else {
      store.dispatch(getNews({ _page: 1 }));
    }

    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (err) {
    console.error({ ...err });
  }
};

export const filterWithDate = ({ from, to }) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `/articles?publishedAt_gte=${from}&publishedAt_lte${to}`,
      {
        handlerEnabled: true,
      }
    );

    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (err) {
    console.error({ ...err });
  }
};
