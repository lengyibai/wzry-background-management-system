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
export const updateUser = (id) => patchReq(`/userList/${id}`);

//#####··········DELETE请求··········#####//
//####········删除用户········####//
export const delUser = (id) => deleteReq(`/userList/${id}`);
