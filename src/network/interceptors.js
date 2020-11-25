import { store } from "../redux/store";
import {
  addRequest,
  finishLoading,
  removeRequest,
  startLoading,
} from "./../redux/loaders/loadersActions";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  store.dispatch(startLoading());
  store.dispatch(addRequest(request.url));

  if (isHandlerEnabled(request)) {
    // Do Something
  }
  return request;
};

export const successHandler = (response) => {
  store.dispatch(finishLoading());
  setTimeout(() => {
    store.dispatch(removeRequest(response.config.url));
  }, 500);
  if (isHandlerEnabled(response)) {
    // Do Something
  }
  return response;
};

export const errorHandler = (error) => {
  setTimeout(() => {
    store.dispatch(removeRequest(error.response.config.url));
  }, 500);
  if (isHandlerEnabled(error.config) && error.response) {
    // Do Something
  }
  return Promise.reject({ ...error });
};
