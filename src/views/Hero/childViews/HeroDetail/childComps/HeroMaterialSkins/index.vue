<template>
  <div class="HeroMaterialSkins" ref="HeroMaterialSkins">
    <div class="box">
      <!--//%%%%%··········左侧详情··········%%%%%//-->
      <transition name="fade">
        <HeroMaterialBasicInfo :data="data" v-if="show_info" />
      </transition>

      <!--//%%%%%··········右边侧详情··········%%%%%//-->
      <transition name="fade">
        <HeroMaterialAttribute :data="data" v-if="show_info" />
      </transition>

      <!--//%%%%%··········皮肤类型··········%%%%%//-->
      <div class="skin-type" is="transition-group" name="updown">
        <img
          v-if="active_skin_type && skin_type_toggle"
          :src="active_skin_type"
          alt=""
          key="a"
        />
        <img
          v-if="active_skin_type && !skin_type_toggle"
          :src="active_skin_type"
          alt=""
          key="b"
        />
      </div>

      <!--//%%%%%··········英雄语音··········%%%%%//-->
      <HeroVoice :voices="voices" />

      <!--//%%%%%··········中心皮肤切换··········%%%%%//-->
      <HeroSkinHeadImg :skins="skins" @bg-imgs="bgImgs" />

      <!--//%%%%%··········皮肤名··········%%%%%//-->
      <div
        class="skin-name"
        v-if="skin_name_toggle && active_skin_name"
        v-typewriterSingle
        key="a"
      >
        {{ active_skin_name }}
      </div>
      <!--//%%%%··········用于触发打字机··········%%%%//-->
      <div
        class="skin-name"
        v-if="!skin_name_toggle && active_skin_name"
        v-typewriterSingle
        key="b"
      >
        {{ active_skin_name }}
      </div>
    </div>

    <!--//%%%%%··········背景图··········%%%%%//-->
    <transition-group name="clip">
      <img
        class="bg"
        v-if="bg_imgs[0]"
        :src="bg_imgs[0]"
        alt=""
        v-show="toggle"
        key="a"
      />
      <img class="bg" :src="bg_imgs[1]" alt="" v-show="!toggle" key="b" />
    </transition-group>
  </div>
</template>
<script>
//#####··········子组件··········#####//
import HeroMaterialBasicInfo from "./childComps/HeroMaterialBasicInfo"; //左侧资料详情
import HeroMaterialAttribute from "./childComps/HeroMaterialAttribute"; //右侧属性详情
import HeroVoice from "./childComps/HeroVoice"; //英雄语音
import HeroSkinHeadImg from "./childComps/HeroSkinHeadImg"; //切换皮肤工具
export default {
  props: {
    /* 英雄基本数据 */
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    /* 语音数据 */
    voices: {
      type: Array,
      default() {
        return [];
      },
    },
    /* 皮肤数据 */
    skins: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "HeroMaterialSkins",
  data() {
    return {
      bg_imgs: [], //背景图
      show_info: false, //用于延迟显示卡片
      toggle: true, //用于切换背景
      active_skin_name: "", //皮肤名
      active_skin_type: "", //皮肤类型
      skin_name_toggle: true, //皮肤切换
      skin_type_toggle: true, //皮肤类型切换
    };
  },
  components: {
    HeroMaterialBasicInfo,
    HeroMaterialAttribute,
    HeroVoice,
    HeroSkinHeadImg,
  },
  created() {
    /* 延迟显示卡片 */
    setTimeout(() => {
      this.show_info = true;
    }, 1000);
  },
  methods: {
    //#####··········通过切换背景图组件传过来的索引设置背景··········#####//
    bgImgs([i, index]) {
      this.$set(this.bg_imgs, i, this.skins[index].img); //设置背景图
      this.toggle = !this.toggle; //用于皮肤背景的切换动画

      /* 设置皮肤名，皮肤名需要有切换时的打字机效果 */
      this.active_skin_name = this.skins[index].name;
      this.skin_name_toggle = !this.skin_name_toggle;

      /* 切换时延迟设置顶部皮肤类型标志 */
      setTimeout(() => {
        const skin_type = this.skins[index].type;
        if (skin_type) {
          this.active_skin_type = require("@/assets/img/skinType/" +
            skin_type +
            ".png");
        } else {
          this.active_skin_type = false; //伴生皮肤没有标志
        }
        this.skin_type_toggle = !this.skin_type_toggle; //使切换标志时有淡入淡出效果
      }, 250);
    },
  },
};
</script>
<style scoped lang="less">
.HeroMaterialSkins {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: var(--white);
  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    perspective: 2000px;
    box-shadow: 0px 0px 100px 25px #000 inset;
    .skin-type {
      display: flex;
      justify-content: center;
      transform: translateY(25%);
      span {
        margin-top: 0.5em;
        font-size: var(--font-s-50);
      }
      img {
        width: 200px;
        filter: drop-shadow(0px 3px 3px #000);
      }
    }
    .skin-name {
      position: absolute;
      width: 100%;
      bottom: 0;
      text-align: center;
      transform: translateY(-50%);
      font-size: var(--font-s-50);
      text-shadow: 0 5px 3px #000;
    }
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #000;
  }
}
.updown-enter {
  opacity: 0;
  transform: translateY(-100%);
}
.updown-leave-active {
  opacity: 0;
  transform: translateY(100%);
}
.updown-leave-active,
.updown-enter-active {
  transition: all 0.5s;
}

.updown-move {
  transition: all 0.5s;
}
.updown-leave-active {
  position: absolute;
}

/* 蒙版裁剪 */
.clip-enter-active {
  animation: clip-in 1s;
}
.clip-leave-active {
  animation: clip-out 1s;
}

@keyframes clip-in {
  0% {
    clip-path: polygon(0 0, 50% 50%, 100% 100%, 50% 50%);
  }

  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes clip-out {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 100% 0, 50% 50%, 0 100%);
  }
}
</style>
