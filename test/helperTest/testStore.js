
let token = '';
let userId = '';
let pageId = '';
let itemId = '';

export const setToken = (newToken) => {
  token = newToken;
};

export const getToken = () => {
  return token;
};

export const setUserId = (newid) => {
  userId = newid;
};

export const getUserId = () => {
  return userId;
};

export const setPageId = (newid) => {
  pageId = newid;
};

export const getPageId = () => {
  return pageId;
};

export const setItemId = (newid) => {
  itemId = newid;
};

export const getItemId = () => {
  return itemId;
};