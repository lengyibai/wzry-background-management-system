import { getReq, postReq, patchReq, deleteReq } from "../../network/request.js";

//#####··········GET请求··········#####//
//####········获取用户信息········####//
export const getUserInfo = (data = {}) => {
  // let { id, _page, _limit, token } = data;
  return getReq("/userList", data);
};

//#####··········POST请求··········#####//
//####········注册用户········####//
export const addUser = (data) => postReq("/userList", data);

//#####··········PATCH请求··········#####//
//####········修改用户信息········####//
export const updateUser = (id, data) => patchReq(`/userList/${id}`, data);
//####········删除用户········####//
export const delUser = (data = {}) => deleteReq("/userList", data);
