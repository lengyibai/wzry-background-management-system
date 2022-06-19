<template>
  <div class="HeroSkins">
    <div class="box">
      <div class="title">皮肤</div>
      <div class="show-skin flex" ref="showSkin">{{ showSkin_text }}</div>
      <div
        class="skin"
        v-drag="{ fn, index }"
        v-for="(item, index) in data1"
        :key="index"
        :style="{
          transform:
            lyb ||
            'rotate(' +
              (360 / data1.length) * (index + 1) +
              'deg) translateY(-200%)',
        }"
      >
        <img @dragstart.prevent :src="item.head" alt="" />
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
import { $isArray } from "@/utils/lyb.js";
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
      showSkin_text: "拖过来",
      is_into: false, //拖动头像是否进入头像框范围
      bg_imgs: [], //背景图
      toggle: true, //用于切换背景
      lyb: true,
      data1: [],
    };
  },
  components: {},
  computed: {
    bgImg() {
      return {
        backgroundImage: `url(${this.bg_img || this.data[0]?.img})`,
      };
    },
  },
  created() {
    this.data1 = [...this.data, ...this.data];
    setTimeout(() => {
      this.lyb = false;
    }, 2000);
  },
  methods: {
    fn(data, index) {
      if (!$isArray(data)) {
        const el = this.$refs.showSkin;
        const o = this.$refs.showSkin.getBoundingClientRect();
        let flag =
          o.left < data.x &&
          o.top < data.y &&
          o.left + el.offsetWidth > data.x &&
          o.top + el.offsetHeight > data.y;
        this.is_into = flag;
        if (flag) {
          this.showSkin_text = "松开";
        } else {
          this.showSkin_text = "拖过来";
        }
      } else if (this.is_into) {
        const el = this.$refs.showSkin;
        data[0].style.transition = "all 0.5s";
        data[0].style.left = el.offsetLeft - data[0].offsetWidth / 2 + "px";
        data[0].style.top = el.offsetTop - data[0].offsetHeight / 2 + "px";
        setTimeout(() => {
          data[0].style.transition = "all 0s";
          this.bg_img = this.data[index].img;
          if (this.toggle) {
            this.bg_imgs[1] = this.data[index].img;
          } else {
            this.bg_imgs[0] = this.data[index].img;
          }
          this.toggle = !this.toggle;
        }, 500);
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
    .title {
      font-size: var(--font-s-35);
      text-align: center;
      margin-top: 1em;
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
