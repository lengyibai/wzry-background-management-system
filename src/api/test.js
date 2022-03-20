import { getReq, postReq, patchReq, deleteReq } from './network/request.js';

//#####··········GET请求··········#####//
//####········获取用户信息········####//
export const getUserInfo = (data = {}) => {
  // let { id, _page, _limit, token } = data;
  return getReq('/userList', data);
};

//#####··········POST请求··········#####//
//####········注册用户········####//
export const addUser = data => {
  return postReq('/userList', data);
};

//#####··········PATCH请求··········#####//
//####········修改用户信息········####//
export const updateUser = (id, data) => {
  return patchReq(`/userList/${id}`, data);
};

//#####··········DELETE请求··········#####//
//####········删除用户········####//
export const delUser = (data = {}) => {
  return deleteReq('/userList', data);
};
