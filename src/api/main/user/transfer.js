import { getReq, postReq, patchReq, deleteReq } from "@/api/network";

//#####··········GET请求··········#####//
//####········获取用户信息········####//
export const getUserInfo = (data = {}) => {
  return getReq("/userList", data);
};

//#####··········POST请求··········#####//
//####········注册用户········####//
export const addUser = (data) => postReq("/userList", data);

//#####··········PATCH请求··········#####//
//####········修改用户信息········####//
export const updateUser = (id, data) => patchReq(`/userList/${id}`, data);

//#####··········DELETE请求··········#####//
//####········删除用户········####//
export const delUser = (id) => deleteReq(`/userList/${id}`);
