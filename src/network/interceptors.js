export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // Do Something
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    // Do Something
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config) && error.response) {
    // Do Something
  }
  return Promise.reject({ ...error });
};
