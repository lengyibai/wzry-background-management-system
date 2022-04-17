<template>
  <div class="GlobalSwitch">
    <!-- 点击音效 -->
    <audio
      :src="sound[item.name]"
      :ref="item.id"
      hidden="true"
      v-for="(item, index) in sounds"
      :key="index"
    ></audio>
    <!-- loading -->
    <LybLoading :show="show_loading" />
    <!-- 消息提醒 -->
    <KMessage :show="show_KMessage" :messages="messages" />
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GlobalSwitch",
  data() {
    return {
      //##····消息提醒相关····##//
      show_KMessage: false, //是否显示
      timer_KMessage: null, //定时器
      messages: [], //消息提醒队列

      //##····加载动画相关····##//
      show_loading: false, //是否显示

      //##····音效相关相关····##//
      sound_name: "default", //音效名
      sounds: [], //消息提醒队列
      sound: {
        login: require("./audios/login.mp3"),
        default: require("./audios/default.mp3"),
        tab: require("./audios/tab栏切换.mp3"),
        消息提示: require("./audios/消息提示.mp3"),
        关闭抽屉: require("./audios/关闭抽屉.mp3"),
        查看详情: require("./audios/查看详情.mp3"),
        确认弹窗: require("./audios/确认弹窗.mp3"),
        皮肤相关: require("./audios/皮肤相关.mp3"),
        模式选择: require("./audios/模式选择.mp3"),
        装备相关: require("./audios/装备相关.mp3"),
        英雄列表: require("./audios/英雄列表.mp3"),
        项目组件: require("./audios/项目组件.mp3"),
        查看: require("./audios/查看.mp3"),
        确定: require("./audios/确定.mp3"),
        关闭: require("./audios/关闭.mp3"),
        取消: require("./audios/取消.mp3"),
      },
    };
  },
  mounted() {
    //#####··········全局点击音效··········#####//
    Vue.prototype.$click = this.click;

    //#####··········全局loading··········#####//
    const that = this;
    Vue.prototype.$lybLoad = {
      show() {
        that.show_loading = true;
      },
      close() {
        that.show_loading = false;
      },
    };

    //#####··········全局消息提醒··········#####//
    Vue.prototype.$tip = {
      success() {
        /* 延迟提醒，避免与点击操作同时播放 */
        setTimeout(() => {
          that.play("消息提示");
          that.messages.push({
            id: new Date().getTime(),
            text: "你好啊啊啊啊啊！" + new Date().getTime(),
          });
          that.timer_KMessage = setTimeout(() => {
            that.messages.splice(0, 1);
          }, 2000);
        }, 250);
      },
    };
  },
  methods: {
    //#####··········全局点击音效··········#####//
    play(name) {
      console.log(name);
      let id = new Date().getTime();
      this.sounds.push({ id: id, name: name });
      this.$nextTick(() => {
        let audio = this.$refs[id][0];
        audio.play();
      });
    },
    click(name) {
      const obj = {
        tab: ["tab"],
        login: ["login"],
        模式选择: ["/home"],
        查看详情: ["/system/hero"],
        皮肤相关: ["/system/skin"],
        装备相关: ["/system/equip", "/equip"],
        英雄列表: ["/hero"],
        查看: ["查看"],
        确定: ["确定"],
        关闭: ["关闭"],
        取消: ["取消"],
        消息提示: ["消息提示"],
        确认弹窗: ["确认弹窗"],
        关闭抽屉: ["收起侧边栏"],
        项目组件: ["/system/components"],
      };
      this.sound_name =
        (typeof name === "string" &&
          Object.keys(obj).find((item) => {
            return obj[item].find((item) => {
              return name.startsWith(item);
            });
          })) ||
        "default";
      this.play(this.sound_name);
    },
  },
};
</script>
<style scoped lang="less">
.GlobalSwitch {
  width: 100%;
  height: 100%;
}
</style>
