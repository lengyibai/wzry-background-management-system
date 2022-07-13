/* 系统管理卡片数据 */
export const ManageCard = {
  data() {
    this.card = {
      width: "200px",
      height: "300px",
      margin: "var(--gap-40)",
    };
    this.box = {
      position: "relative",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      overflow: "auto",
    };
    this.list = [
      "英雄",
      "皮肤",
      "语音",
      "故事",
      "技能信息",
      "技能类型",
      "技能效果",
      "英雄关系",
      "关系类型",
      "装备信息",
      "装备类型",
      "铭文信息",
      "铭文类型",
      "铭文效果",
    ];
  },
};
