import { screenSizes } from "./constants";

/**
 *
 * @param key Local Storage Key
 * @param value Local Storage Value (String)
 * @param ttl Time to live (Expiry Date in MS)
 */
export const setLocalItem = (key, value, ttl) => {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
/**
 *
 * @param key Local Storage Key
 */
export const getLocalItem = (key) => {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const randomNumber = (min = 1, max = 1000) => {
  return Math.ceil(min + Math.random() * (max - min));
};

export const truncate = (text, num = 10) => {
  if (text.length > num) {
    return text.substring(0, num - 3) + "...";
  }
  return text;
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const isMobile = () => {
  const screenWidth = window.screen.width;
  return screenWidth <= screenSizes.mobile;
};
export const isTablet = () => {
  const screenWidth = window.screen.width;
  return screenWidth <= screenSizes.tablet;
};
export const isLabTop = () => {
  const screenWidth = window.screen.width;
  return screenWidth <= screenSizes.labTop;
};
export const isLabTopLarge = () => {
  const screenWidth = window.screen.width;
  return screenWidth <= screenSizes.labTopLarge;
};
export const isHD = () => {
  const screenWidth = window.screen.width;
  return screenWidth <= screenSizes.HD;
};
