<template>
  <div class="HeroSkinHeadImg">
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
            'deg) translateY(-150%)',
      }"
    >
      <img @dragstart.prevent :src="item.head" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSkinHeadImg",
  props: {
    /* 皮肤数据 */
    skins: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      toggle: true, //用于切换背景
      is_into_drap: false, //拖动头像是否进入头像框范围
      show_skin_head: true,
      active_skin: {
        el: null,
        transform: null,
      }, //当前处于展示的皮肤的DOM元素及坐标
    };
  },
  components: {},
  created() {
    setTimeout(() => {
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

          /* 切换背景图 */
          if (this.toggle) {
            this.$emit("bg-imgs", [1, index]);
          } else {
            this.$emit("bg-imgs", [0, index]);
          }
          this.toggle = !this.toggle; //用于皮肤背景的切换动画
        }, 1000);
      }
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkinHeadImg {
  .show-skin {
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translateX(-50%) translateY(-50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: url("./img/head_bg.png") no-repeat center center;
    background-size: cover;
    filter: drop-shadow(0px 5px 3px black);
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
    top: calc(75% - 45px);
    transform-origin: center center;
    transition: all 1s;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      filter: drop-shadow(0px 0px 3px #000);
    }
  }
}
</style>
