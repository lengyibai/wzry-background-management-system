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
    <KMessage :messages="messages" />
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GlobalSwitch",
  data() {
    return {
      //#····消息提醒相关····#//
      messages: [], //消息队列

      //#····加载动画相关····#//
      show_loading: false, //是否显示

      //#····音效相关相关····#//
      click_name: "", //点击的标识，用于解决重复点击会重复播放问题
      sound_name: "default", //音效名
      sounds: [], //音效队列
      sound: {
        login: require("@/assets/audios/login.mp3"),
        default: require("@/assets/audios/default.mp3"),
        tab: require("@/assets/audios/tab栏切换.mp3"),
        查看: require("@/assets/audios/查看.mp3"),
        确定: require("@/assets/audios/确定.mp3"),
        关闭: require("@/assets/audios/关闭.mp3"),
        取消: require("@/assets/audios/取消.mp3"),
        消息提示: require("@/assets/audios/消息提示.mp3"),
        警告提示: require("@/assets/audios/警告提示.mp3"),
        错误提示: require("@/assets/audios/错误提示.mp3"),
        关闭抽屉: require("@/assets/audios/关闭抽屉.mp3"),
        查看详情: require("@/assets/audios/查看详情.mp3"),
        确认弹窗: require("@/assets/audios/确认弹窗.mp3"),
        皮肤相关: require("@/assets/audios/皮肤相关.mp3"),
        模式选择: require("@/assets/audios/模式选择.mp3"),
        装备相关: require("@/assets/audios/装备相关.mp3"),
        英雄列表: require("@/assets/audios/英雄列表.mp3"),
        项目组件: require("@/assets/audios/项目组件.mp3"),
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
    Vue.prototype.$tip = function (text = "未设置提示", type = "default") {
      const text_length = text.split("").length / 3; //获取文字长度
      const time = text_length > 3 ? text_length : text_length + 1; //通过文字长度，设置显示时长
      /* 延迟提醒，避免与点击操作同时播放 */
      setTimeout(
        function () {
          const obj = {
            default: "消息提示",
            warning: "警告提示",
            danger: "错误提示",
          };
          this.$click(obj[type]);
          this.messages.push({
            id: new Date().getTime(),
            text: text,
            type: type,
          });
          setTimeout(() => {
            this.messages.splice(0, 1);
          }, time * 1000);
        }.bind(that),
        500,
      );
    };
  },
  methods: {
    //#####··········全局点击音效··········#####//
    click(name) {
      if (this.click_name === name) return;
      this.click_name = name;
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
        警告提示: ["警告提示"],
        错误提示: ["错误提示"],
        确认弹窗: ["确认弹窗"],
        关闭抽屉: ["收起侧边栏"],
        项目组件: ["/system/components"],
      };

      /* 获取点击触发的音效名 */
      this.sound_name =
        (typeof name === "string" &&
          Object.keys(obj).find((item) => {
            return obj[item].find((item) => {
              return name.startsWith(item);
            });
          })) ||
        "default";

      /* 将音效加入播放队列 */
      const id = new Date().getTime();
      this.sounds.push({ id: id, name: this.sound_name });
      this.$nextTick(() => {
        const audio = this.$refs[id][0];
        audio.play();
      });
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
