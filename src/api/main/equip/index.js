// import Vue from "vue";

//#####··········网络请求··········#####//
import { getEquipList } from "./transfer.js";

//#####··········基本··········#####//
//####········获取装备列表········####//
export const equipList = (data) => {
  return new Promise((resolve) => {
    getEquipList(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
