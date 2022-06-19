<template>
  <div class="HeroSkins" :style="bgImg">
    <div class="title">皮肤</div>
    <div class="show-skin flex" ref="showSkin">{{ showSkin_text }}</div>
    <div class="skins">
      <div class="skin" v-for="(item, index) in data" :key="index">
        <img
          @click.stop
          @dragstart.prevent
          v-drag="{ fn, index }"
          :src="item.head"
          alt=""
        />
      </div>
    </div>
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
      is_into: false, //是否进入范围
      bg_img: "",
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
  background: no-repeat center center fixed;
  background-size: cover;
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
  .skins {
    .skin {
      img {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
      }
    }
  }
}
</style>
