<template>
  <div class="HeroMaterialSkins" ref="HeroMaterialSkins">
    <div class="box">
      <!--//%%%%%··········左侧详情··········%%%%%//-->
      <transition name="fade">
        <HeroDetailBasicInfo :data="data" v-if="show_info" />
      </transition>

      <!--//%%%%%··········右边侧详情··········%%%%%//-->
      <transition name="fade">
        <HeroDetAilattribute :data="data" v-if="show_info" />
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

      <!--//%%%%%··········中心头衔框··········%%%%%//-->
      <div class="show-skin flex" ref="showSkin">
        {{ is_into_drap ? "松开" : "拖过来" }}
      </div>
      <!--//%%%%······光晕······%%%%//-->
      <transition name="fade">
        <div class="show-skin flex clone" v-show="is_into_drap"></div>
      </transition>

      <!--//%%%%%··········皮肤头像··········%%%%%//-->
      <div
        class="skin"
        v-drag="{ fn, index }"
        v-for="(item, index) in skins"
        :key="index"
        :style="{
          transform:
            show_skin_head ||
            'rotate(' +
              (360 / skins.length) * (index + 1) +
              'deg) translateY(-200%)',
        }"
      >
        <img @dragstart.prevent :src="item.head" alt="" />
      </div>

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
import HeroDetailBasicInfo from "./childComps/HeroDetailBasicInfo"; //左侧资料详情
import HeroDetAilattribute from "./childComps/HeroDetAilattribute"; //右侧属性详情
export default {
  props: {
    skins: {
      type: Array,
      default() {
        return [];
      },
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "HeroMaterialSkins",
  data() {
    return {
      is_into_drap: false, //拖动头像是否进入头像框范围
      bg_imgs: [], //背景图
      show_info: false,
      toggle: true, //用于切换背景
      show_skin_head: true,
      active_skin_name: "", //皮肤名
      active_skin_type: "", //皮肤类型
      skin_name_toggle: true, //皮肤切换
      skin_type_toggle: true, //皮肤类型切换
      active_skin: {
        el: null,
        transform: null,
      }, //当前处于展示的皮肤的DOM元素及坐标
    };
  },
  components: { HeroDetailBasicInfo, HeroDetAilattribute },
  created() {
    setTimeout(() => {
      /* 延迟显示卡片 */
      this.show_info = true;
      this.show_skin_head = false;
    }, 1000);
  },
  methods: {
    //#####··········皮肤头像拖动事件··········#####//
    fn(data, offset, index) {
      data.style.transition = "all 0s"; //清除正在拖拽的皮肤头像动画，避免拖拽高延迟
      data.style.zIndex = 2;

      /* offset用来判断是移动触发的还是松开触发的 */
      if (offset) {
        /* 判断头像是否进入头像框可吸附范围 */
        this.is_into_drap =
          this.$refs.showSkin.getBoundingClientRect().left < offset.x &&
          this.$refs.showSkin.getBoundingClientRect().top < offset.y &&
          this.$refs.showSkin.getBoundingClientRect().left +
            this.$refs.showSkin.offsetWidth >
            offset.x &&
          this.$refs.showSkin.getBoundingClientRect().top +
            this.$refs.showSkin.offsetHeight >
            offset.y;
      } /* 松手触发，并且头像已进入头像框吸附范围 */ else if (
        this.is_into_drap
      ) {
        /* 判断是否存在正在展示的皮肤，存在就将此皮肤头像过渡到初始位置 */
        if (this.active_skin.el) {
          this.active_skin.el.style.pointerEvents = "auto";
          this.active_skin.el.style.transition = "all 1s";
          this.active_skin.el.style.transform = this.active_skin.transform;
        }

        /* 记录正在展示的皮肤头像DOM元素及坐标 */
        this.active_skin.el = data;
        this.active_skin.transform = data.style.transform;

        /* 将要展示的皮肤头像过渡到头像框的位置 */
        const el = this.$refs.showSkin;
        data.style.pointerEvents = "none";
        data.style.transition = "all 1s";
        data.style.left = el.offsetLeft - data.offsetWidth / 2 + "px";
        data.style.top = el.offsetTop - data.offsetHeight / 2 + "px";
        data.style.transform = "";

        /* 有一秒的过渡动画，动画结束后执行以下 */
        setTimeout(() => {
          data.style.transition = "all 0s"; //清除正在展示的皮肤头像的动画效果，避免拖拽高延迟
          data.style.zIndex = 1;
          this.bg_img = this.skins[index].img; //通过展示的皮肤头像的索引号，将对应皮肤设置为背景

          /* 用于皮肤背景的切换动画 */
          if (this.toggle) {
            this.bg_imgs[1] = this.skins[index].img;
          } else {
            this.bg_imgs[0] = this.skins[index].img;
          }
          this.toggle = !this.toggle;

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
        }, 1000);
      }
    },
  },
};
</script>
<style scoped lang="less">
.HeroMaterialSkins {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--white);
  .box {
    position: absolute;
    inset: 0;
    z-index: 1;
    transform-style: preserve-3d;
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
    .show-skin {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 200px;
      height: 200px;
      box-shadow: ;
      border-radius: 50%;
      background: url("./img/head_bg.png") no-repeat center center;
      background-size: cover;
      &.clone {
        filter: blur(5px) brightness(150%);
        background-image: url("./img/head_bg_clone.png");
      }
    }
    .skin {
      position: absolute;
      width: 90px;
      height: 90px;
      left: calc(50% - 45px);
      top: calc(50% - 45px);
      transform-origin: center center;
      transition: all 1s;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .skin-name {
      position: absolute;
      width: 100%;
      bottom: 0;
      text-align: center;
      transform: translateY(-100%);
      font-size: var(--font-s-50);
      text-shadow: 0 5px 3px #000;
    }
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
