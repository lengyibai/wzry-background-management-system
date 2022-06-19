<template>
  <div class="HeroSkins">
    <div class="title">皮肤</div>
    <div class="show-skin flex">拖过来</div>
    <div class="skins">
      <div class="skin" v-for="(item, index) in data" :key="index">
        <img
          @click.stop
          @dragstart.prevent
          v-drag="fn"
          :src="item.head"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
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
    return {};
  },
  components: {},
  methods: {
    fn(data) {
      console.log(data);
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
        border-radius: 50%;
      }
    }
  }
}
</style>
