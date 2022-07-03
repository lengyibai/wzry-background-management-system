import { getReq, postReq, patchReq, deleteReq } from "@/api/network";

//#####··········GET请求··········#####//
//####········获取故事········####//
export const getStorys = data => getReq("/story", data);

//#####··········POST请求··········#####//
//####········添加故事········####//
export const addStory = data => postReq("/story", data);

//#####··········PATCH请求··········#####//
//####········修改故事········####//
export const updateStory = (id, data) => patchReq(`/story/${id}`, data);

//#####··········DELETE请求··········#####//
//####········删除故事········####//
export const delStory = id => deleteReq(`/story/${id}`);
