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
      "技能",
      "故事",
      "装备",
      "铭文",
      "英雄关系",
      "关系类型",
      "技能类型",
      "技能效果",
      "装备类型",
      "铭文类型",
      "铭文效果",
    ];
  },
};

/* 隐藏自身 */
export const addHide = {
  data() {
    return {
      show: false,
      add_finish: false, //是否发布成功
    };
  },
  methods: {
    //#####··········隐藏自身··········#####//
    hide() {
      this.show = false;
      setTimeout(() => {
        this.$emit("input", false);
      }, 500);
    },
  },
};
