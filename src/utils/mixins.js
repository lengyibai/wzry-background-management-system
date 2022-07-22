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
    this.list = {
      AddHero: "英雄",
      AddSkin: "皮肤",
      AddSkill: "语音",
      AddVoice: "技能",
      AddStory: "故事",
      AddEquip: "装备",
      AddEpigraph: "铭文",
      /* { name: "英雄关系", key: "" },
      { name: "关系类型", key: "" },
      { name: "技能类型", key: "" },
      { name: "技能效果", key: "" },
      { name: "装备类型", key: "" },
      { name: "铭文类型", key: "" },
      { name: "铭文效果", key: "" }, */
    };
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
