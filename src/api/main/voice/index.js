import { getVoices } from "./transfer.js";

//#####········获取语音········#####//
export const getVoice = (data) => {
  return new Promise((resolve) => {
    getVoices(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
