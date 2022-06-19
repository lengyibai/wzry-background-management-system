<template>
  <div class="HeroSkins" ref="HeroSkins">
    <div class="box">
      <div class="skin-type">
        <img v-if="active_skin_type" :src="active_skin_type" alt="" />
        <span v-else>伴生皮肤</span>
      </div>
      <div class="show-skin flex" ref="showSkin">
        {{ showSkin_text ? "松开" : "拖过来" }}
      </div>
      <transition name="fade">
        <div class="show-skin flex clone" v-show="showSkin_text"></div>
      </transition>
      <div
        class="skin"
        v-drag="{ fn, index }"
        v-for="(item, index) in data"
        :key="index"
        :style="{
          transform:
            lyb ||
            'rotate(' +
              (360 / data.length) * (index + 1) +
              'deg) translateY(-200%)',
        }"
      >
        <img @dragstart.prevent :src="item.head" alt="" />
      </div>
      <div
        class="skin-name"
        v-if="skin_name_toggle && active_skin_name"
        v-typewriterSingle
        key="a"
      >
        {{ active_skin_name }}
      </div>
      <div
        class="skin-name"
        v-if="!skin_name_toggle && active_skin_name"
        v-typewriterSingle
        key="b"
      >
        {{ active_skin_name }}
      </div>
    </div>
    <transition-group name="clip">
      <img
        class="bg"
        :src="bg_imgs[0] || data[0].img"
        alt=""
        v-if="data[0]"
        v-show="toggle"
        key="a"
      />
      <img
        class="bg"
        :src="bg_imgs[1] || data[0].img"
        alt=""
        v-if="data[0]"
        v-show="!toggle"
        key="b"
      />
    </transition-group>
  </div>
</template>
<script>
//#####··········网络请求··········#####//
//{ 皮肤类型 }
import { HeroSkinType } from "@/api/main/hero/hero.js";
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "HeroSkins",
  data() {
    return {
      showSkin_text: false,
      is_into: false, //拖动头像是否进入头像框范围
      bg_imgs: [], //背景图
      toggle: true, //用于切换背景
      lyb: true,
      active_skin_name: "", //皮肤名
      active_skin_type: "", //皮肤类型
      skin_name_toggle: true, //皮肤切换
      active_skin: {
        el: null,
        transform: null,
      }, //当前处于展示的皮肤的DOM元素及坐标
    };
  },
  computed: {
    bgImg() {
      return {
        backgroundImage: `url(${this.bg_img || this.data[0]?.img})`,
      };
    },
  },
  methods: {
    scroll() {
      if (
        this.$refs.HeroSkins.getBoundingClientRect().y -
          this.$refs.showSkin.offsetHeight <
        0
      ) {
        this.lyb = false;
      }
    },
    fn(data, offset, index) {
      data.style.transition = "all 0s";
      if (offset) {
        const el = this.$refs.showSkin;
        const o = this.$refs.showSkin.getBoundingClientRect();
        let flag =
          o.left < offset.x &&
          o.top < offset.y &&
          o.left + el.offsetWidth > offset.x &&
          o.top + el.offsetHeight > offset.y;
        this.is_into = flag;
        if (flag) {
          this.showSkin_text = true;
        } else {
          this.showSkin_text = false;
        }
      } else if (this.is_into) {
        if (this.active_skin.el) {
          this.active_skin.el.style.pointerEvents = "auto";
          this.active_skin.el.style.transition = "all 1s";
          this.active_skin.el.style.transform = this.active_skin.transform;
        }
        this.active_skin.el = data;
        this.active_skin.transform = data.style.transform;
        const el = this.$refs.showSkin;
        data.style.pointerEvents = "none";
        data.style.transition = "all 1s";
        data.style.left = el.offsetLeft - data.offsetWidth / 2 + "px";
        data.style.top = el.offsetTop - data.offsetHeight / 2 + "px";
        data.style.transform = "";
        setTimeout(() => {
          data.style.transition = "all 0s";
          this.bg_img = this.data[index].img;
          if (this.toggle) {
            this.bg_imgs[1] = this.data[index].img;
          } else {
            this.bg_imgs[0] = this.data[index].img;
          }
          this.toggle = !this.toggle;
          this.active_skin_name = this.data[index].name;
          this.skin_name_toggle = !this.skin_name_toggle;
          HeroSkinType({ id: this.data[index].type }).then((res) => {
            if (res?.name) {
              this.active_skin_type = require("@/assets/img/skinType/" +
                res.name +
                ".png");
            } else {
              this.active_skin_type = "";
            }
          });
        }, 1000);
      }
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkins {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--white);
  background-color: #000;
  .box {
    position: absolute;
    inset: 0;
    z-index: 1;
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
    }
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.clip-enter-active {
  animation: clip-in 1s;
}

.clip-leave-active {
  animation: clip-out 1s;
}
</style>
