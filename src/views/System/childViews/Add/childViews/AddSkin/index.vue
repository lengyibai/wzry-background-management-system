<template>
  <div class="AddSkin">
    <transition name="fade">
      <div
        class="content"
        ref="content"
        v-if="show"
        is="transition-group"
        name="fade"
      >
        <!--//%%%%%··········左上角新增··········%%%%%//-->
        <LybSvg
          :svg="icon.ADDC"
          @click.native="addOne"
          class="addOne"
          color="var(--theme-color-seven)"
          enter-color="var(--theme-color-four)"
          key="LybSvg"
          size="50px"
        />

        <!--//%%%%%··········指派英雄··········%%%%%//-->
        <SelectHero
          class="SelectHero"
          v-model="skin_data.id"
          key="SelectHero"
        />

        <!--//%%%%%··········皮肤盒子列表··········%%%%%//-->
        <div
          class="skin"
          @mouseenter="currentIndex = index"
          @mouseleave="currentIndex = null"
          v-for="(item, index) in skin_data.data"
          :key="item.id"
        >
          <!--//%%%%········皮肤名········%%%%//-->
          <FormInput label="皮肤名" required v-model="item.name" />

          <!--//%%%%········皮肤类型········%%%%//-->
          <FormSelect
            label="皮肤类型"
            required
            :data="skin_type"
            v-model="item.type"
          />

          <!--//%%%%········皮肤头像、海报········%%%%//-->
          <div class="head-poster">
            <span>皮肤头像&海报：</span>

            <!--//%%%······海报······%%%//-->
            <SelectImg
              :src="item.img"
              type="width"
              @select="setKeyValues"
              keyword="img"
            />

            <!--//%%%······海报头像······%%%//-->
            <SelectImg :src="item.head" @select="setKeyValues" keyword="head" />
          </div>

          <!--//%%%%········右上角删除········%%%%//-->
          <transition name="fade">
            <LybSvg
              class="del"
              @click.native="del(index)"
              :svg="icon.X"
              color="var(--theme-color-seven)"
              enter-color="var(--theme-color-four)"
              size="25px"
              right="25px"
              top="25px"
            />
          </transition>
        </div>
      </div>
    </transition>

    <!--//%%%%%··········发布皮肤按钮··········%%%%%//-->
    <LybCommitBtn
      class="LybCommitBtn"
      size="50px"
      @upload="add"
      :finish="add_finish"
      title="发布"
    />

    <!--//%%%%%··········取消发布··········%%%%%//-->
    <LybCancelBtn class="LybCancelBtn" size="50px" @close="hide" title="取消" />

    <!--//%%%%%··········添加图片链接弹窗组件··········%%%%%//-->
    <AddLink
      v-model="show_AddLink"
      :title="AddLink_title"
      :placeholder="AddLink_placeholder"
      @get-link="getLink"
    />
  </div>
</template>
<script>
//#####··········网络请求··········#####//
//接口信息：{ 皮肤类型 }
import { getSkinType } from "@/api/main/tree/skinType";

//#####··········混入··········#####//
// { 发布及隐藏自身 }
import { addHide } from "@/utils/mixins.js";

//#####··········图标··········#####//
import icon from "@/assets/icon/svg/icon.js";
export default {
  name: "AddSkin",
  data() {
    this.AddLink_set_desc = {
      img: "海报",
      head: "头像",
    };

    this.icon = icon;
    return {
      /* 添加的皮肤 */
      skin_data: {
        id: null,
        data: [],
      },

      skin_type: [], //皮肤类型表
      currentIndex: null, //根据悬浮的位置显示垃圾桶

      /* 弹窗相关 */
      show_AddLink: false, //显示添加链接弹窗
      AddLink_key: "", //当前谁在使用弹窗(字段名)
      AddLink_title: "", //弹窗左上角标题
      AddLink_placeholder: "", //弹窗输入框描述
    };
  },
  mixins: [addHide],
  created() {
    setTimeout(async () => {
      this.$lybLoad.show("正在加载皮肤类型表");
      this.skin_type = await getSkinType();
      this.$lybLoad.close().then(() => {
        this.show = true;
      });
    }, 1000);
  },
  methods: {
    //#####·········设置图片弹窗组件··········#####//
    //####········获取链接········####//
    getLink(link) {
      const data = this.skin_data.data;
      this.$set(data, data.length === 0 ? 0 : data.length - 1, {
        ...data.slice(-1)[0],
        [this.AddLink_key]: link,
      });
    },

    //#####··········添加链接事件··········#####//
    //####········设置头像及名字········####//
    setKeyValues(key) {
      this.show_AddLink = true;
      this.AddLink_title = "设置" + this.AddLink_set_desc[key];
      this.AddLink_placeholder = "请输入" + this.AddLink_set_desc[key];
      this.AddLink_key = key;
    },

    //#####··········增加一项··········#####//
    addOne() {
      this.skin_data.data.unshift({
        id: new Date().getTime().toString(),
        name: "",
        img: "",
        head: "",
        type: 0,
      });

      /* setTimeout(() => {
        const scrollBox = this.$refs.content.$el;
        scrollBox.scroll({
          top: scrollBox.scrollHeight,
          behavior: "smooth",
        });
      }, 250); */
    },

    //#####··········删除一项··········#####//
    del(i) {
      this.skin_data.data.splice(i, 1);
      this.currentIndex = null;
    },

    //#####··········发布··········#####//
    add() {
      setTimeout(() => {
        this.add_finish = true;
        setTimeout(() => {
          this.hide();
        }, 250);
      }, 250);
    },
  },
};
</script>
<style scoped lang="less">
.AddSkin {
  .view_add();
  .content {
    padding-left: 0;
    padding-right: 0;
    .SelectHero {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .skin {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: var(--gap-35);
      .del {
        position: absolute;
        right: 0;
        top: 0;
      }
      .head-poster {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: var(--gap-25);
        span {
          .text-gradient-one();
          font-size: var(--font-s-30);
        }
      }
    }
    .addOne {
      position: fixed;
      top: 0;
      left: 0;
    }
  }
}
</style>
