<template>
  <div class="AddVoice">
    <transition name="fade">
      <div class="content" v-if="show" is="transition-group" name="fade">
        <SelectHero v-model="voice_list.id" key="SelectHero" />

        <!--//%%%%%··········添加完毕的语音列表··········%%%%%//-->
        <div class="voiceList" v-show="voice_list.data.length" key="b">
          <div
            class="voice"
            v-for="(item, index) in voice_list.data"
            @mouseleave="voiceEnter(null)"
            @mouseenter="voiceEnter(index)"
            :key="item.desc"
          >
            <span v-show="currentIndex !== index"> {{ item.desc }}</span>
            <div class="voiceBox" v-show="currentIndex === index">
              <LybSvg
                size="35px"
                enter-color="var(--theme-color-four)"
                color="var(--theme-color-seven)"
                @click.native="play(item.voice)"
                :svg="icon.VOICEPRINT"
              />
              <LybSvg
                size="35px"
                color="var(--red)"
                @click.native="del(index)"
                :svg="icon.TRASH"
              />
            </div>
          </div>
        </div>

        <!--//%%%%%··········正在添加语音的输入框盒子··········%%%%%//-->
        <div
          class="addBox"
          v-if="show_box"
          name="fade"
          key="c"
          is="transition-group"
        >
          <FormInput
            v-model="voice_text"
            required
            placeholder="请输入语音文字"
            label="语音文字"
            key="a"
            autoSize
          />

          <!--//%%%%%··········设置/播放语音··········%%%%%//-->
          <LybSvg
            v-show="voice_text"
            size="50px"
            key="b"
            enter-color="var(--theme-color-four)"
            color="var(--theme-color-seven)"
            @click.native="setVoice"
            :svg="icon[voice_link ? 'VOICEPRINT' : 'MIC']"
          />

          <!--//%%%%%··········重置语音链接··········%%%%%//-->
          <LybSvg
            v-show="voice_link"
            size="50px"
            key="c"
            enter-color="var(--theme-color-four)"
            color="var(--theme-color-seven)"
            @click.native="resetVoice"
            :svg="icon.RESET"
          />
        </div>

        <!--//%%%%%··········添加/删除/保存按钮··········%%%%%//-->
        <LybSvg
          size="50px"
          key="d"
          enter-color="var(--theme-color-four)"
          color="var(--theme-color-seven)"
          @click.native="addVoice(status)"
          :svg="icon[voice_link ? 'FINISH' : status]"
        />
      </div>
    </transition>

    <!--//%%%%%··········播放语音··········%%%%%//-->
    <PlayVoice @ended="play_link = ''" v-if="play_link" :link="play_link" />

    <!--//%%%%%··········设置语音链接··········%%%%%//-->
    <AddLink
      v-model="show_AddLink"
      title="设置语音"
      placeholder="请输入语音链接"
      @get-link="getLink"
    />

    <!--//%%%%%··········发布按钮··········%%%%%//-->
    <LybCommitBtn
      title="发布"
      size="50px"
      class="LybCommitBtn"
      @upload="add"
      :finish="add_finish"
    />

    <!--//%%%%%··········取消发布··········%%%%%//-->
    <LybCancelBtn class="LybCancelBtn" size="50px" @close="hide" title="取消" />
  </div>
</template>
<script>
//#####··········混入··········#####//
// { 发布及隐藏自身 }
import { addHide } from "@/utils/mixins.js";

//#####··········图标··········#####//
import icon from "@/assets/icon/svg/icon.js";
export default {
  name: "AddVoice",
  data() {
    this.icon = icon;
    return {
      currentIndex: null, //点击的语音
      show_box: false, //是否显示填写盒子
      voice_list: { id: 0, data: [] }, //用于发布
      voice_text: "", //语音文字
      voice_link: "", //语音链接
      show_AddLink: false, //显示设置语音链接弹窗
      status: "ADDC", //添加&&删除&&保存状态
      play_link: "", //用于播放
      add_finish: false, //发布状态
    };
  },
  mixins: [addHide],
  components: {},
  created() {
    setTimeout(async () => {
      this.$lybLoad.show("正在加载皮肤类型表");
      this.$lybLoad.close().then(() => {
        this.show = true;
      });
    }, 1000);
  },
  methods: {
    //#####··········添加一项··········#####//
    addVoice(s) {
      if (this.voice_link) {
        this.voice_list.data.push({
          desc: this.voice_text,
          voice: this.voice_link,
        });
        this.voice_text = "";
        this.voice_link = "";
        this.status = "ADDC";
        this.show_box = false;
        return;
      }
      if (s === "ADDC") {
        this.show_box = true;
        this.status = "DELC";
      }
      if (s === "DELC") {
        this.status = "ADDC";
        this.voice_text = "";
        this.show_box = false;
      }
    },

    //#####··········设置语音··········#####//
    setVoice() {
      if (this.voice_link) {
        this.link = this.voice_link;
        this.play_link = this.voice_link;
      } else {
        this.show_AddLink = true;
      }
    },

    //#####··········重置语音··········#####//
    resetVoice() {
      this.voice_link = "";
    },

    //#####··········获取语音链接··········#####//
    getLink(link) {
      this.voice_link = link;
      this.currentIndex = null;
    },

    //#####··········点击语音列表··········#####//
    voiceEnter(i) {
      this.currentIndex = i;
    },

    //#####··········播放语音··········#####//
    play(link) {
      this.play_link = link;
    },

    //#####··········删除语音··········#####//
    del(i) {
      this.voice_list.data.splice(i, 1);
    },

    //#####··········发布··········#####//
    add() {
      setTimeout(() => {
        this.add_finish = true;
        setTimeout(() => {
          console.log(JSON.parse(JSON.stringify(this.voice_list)));
          this.hide();
        }, 250);
      }, 250);
    },
  },
};
</script>
<style scoped lang="less">
.AddVoice {
  .view_add();
  .content {
    justify-content: center;
    .voiceList {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: var(--gap-10);
      .voice {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 35px;
        margin-bottom: var(--gap-20);
        > span {
          position: absolute;
          font-size: var(--font-s-35);
          color: var(--theme-color-four);
        }
        .voiceBox {
          position: absolute;
          width: 100%;
          text-align: center;
        }
      }
    }
    .addBox {
      position: relative;
      width: 50%;
      display: flex;
      bottom: 0;
    }
  }
}

.voiceBox-enter,
.voiceBox-leave-active {
  opacity: 0;
}

.voiceBox-enter-active,
.voiceBox-leave-active {
  transition: all 0.5s;
}
</style>
