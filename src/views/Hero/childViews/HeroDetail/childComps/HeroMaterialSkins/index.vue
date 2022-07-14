<template>
  <div class="HeroMaterialSkins" ref="HeroMaterialSkins">
    <div class="box">
      <!--//%%%%%··········左侧详情··········%%%%%//-->
      <HeroMaterialBasicInfo :data="data" v-if="show_info" />

      <!--//%%%%%··········右边侧详情··········%%%%%//-->
      <HeroMaterialAttribute :data="data" v-if="show_info" />

      <!--//%%%%%··········皮肤类型··········%%%%%//-->
      <HerSkinType :skinTypeImg="active_skin_type" :toggle="skin_type_toggle" />

      <!--//%%%%%··········英雄语音··········%%%%%//-->
      <HeroVoice :voices="data.voices" v-if="show_info" />

      <!--//%%%%%··········中心皮肤切换··········%%%%%//-->
      <HeroSkinHeadImg :skins="data.skins" @bg-imgs="bgImgs" />

      <!--//%%%%%··········皮肤名··········%%%%%//-->
      <HeroSkinName :toggle="skin_name_toggle" :name="active_skin_name" />
    </div>

    <!--//%%%%%··········背景图··········%%%%%//-->
    <HeroBgImg :bgImg="bg_imgs" :toggle="toggle" />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import HeroMaterialBasicInfo from "./childComps/HeroMaterialBasicInfo"; //左侧资料详情
import HeroMaterialAttribute from "./childComps/HeroMaterialAttribute"; //右侧属性详情
import HerSkinType from "./childComps/HerSkinType"; //皮肤类型图
import HeroVoice from "./childComps/HeroVoice"; //英雄语音
import HeroSkinHeadImg from "./childComps/HeroSkinHeadImg"; //切换皮肤工具
import HeroSkinName from "./childComps/HeroSkinName"; //皮肤名
import HeroBgImg from "./childComps/HeroBgImg"; //背景图
export default {
  props: {
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
    HerSkinType,
    HeroVoice,
    HeroSkinHeadImg,
    HeroSkinName,
    HeroBgImg,
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
      this.$set(this.bg_imgs, i, this.data.skins[index].img); //设置背景图
      this.toggle = !this.toggle; //用于皮肤背景的切换动画

      /* 设置皮肤名，皮肤名需要有切换时的打字机效果 */
      this.active_skin_name = this.data.skins[index].name;
      this.skin_name_toggle = !this.skin_name_toggle;

      /* 切换时延迟设置顶部皮肤类型标志 */
      setTimeout(() => {
        const skin_type = this.data.skins[index].type;
        if (skin_type && skin_type !== "伴生") {
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
  }
}
</style>
