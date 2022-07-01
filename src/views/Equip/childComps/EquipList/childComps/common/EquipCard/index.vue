<template>
  <div class="EquipCard">
    <div class="border" v-show="active_id === equip.id"></div>
    <img
      class="cursor-pointer"
      :src="equip.icon"
      @click="editActive(equip.id)"
      alt=""
    />
    <div class="box">
      <div class="name">{{ equip.name }}</div>
      <div class="desc" v-if="equip.desc">{{ equip.desc }}</div>
      <div class="price">{{ equip.price }}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "EquipCard",
  props: {
    /* 装备信息 */
    equip: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState({
      active_id: (state) => state.equip.active_id, //获取点击的装备id
    }),
  },
  methods: {
    ...mapMutations({
      editActive: "equip/editActive", //设置点击的装备id
    }),
  },
};
</script>
<style scoped lang="less">
.EquipCard {
  position: relative;
  display: flex;
  align-items: center;
  .border {
    width: 75px;
    height: 75px;
    position: absolute;
    border: 5px solid #fef5b2;
    border-radius: 50%;
    left: 0;
    pointer-events: none;
    z-index: 1;
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      border-style: solid;
      border-width: 10px;
      box-sizing: border-box;
    }
    &::before {
      top: -4px;
      border-color: #fff498 transparent transparent transparent;
    }
    &::after {
      bottom: -4px;
      border-color: transparent transparent #fff498 transparent;
    }
  }
  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: var(--gap-5);
    border: 3px solid var(--theme-color-light);
  }
  .box {
    color: var(--theme-font-white);
    font-size: var(--font-s-20);
    .name {
    }
    .desc {
      color: var(--theme-font-color);
    }
    .price {
      color: var(--theme-font-dark);
    }
  }
}
</style>
