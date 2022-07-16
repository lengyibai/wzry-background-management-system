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
        <div class="skin" v-for="(item, index) in skin_data.data" :key="index">
          <FormInput label="皮肤名" required v-model="item.name" />

          <FormSelect label="皮肤类型" :data="skin_type" v-model="item.type" />

          <SelectHero v-model="skin_data.id" v-if="index === 0" />

          <div class="head-poster">
            <span>皮肤头像&海报：</span>
            <SelectImg
              :src="item.img"
              type="width"
              @select="setKeyValues"
              keyword="img"
            />
            <SelectImg :src="item.head" @select="setKeyValues" keyword="head" />
          </div>
        </div>
        <K-Button
          class="k-button"
          @click.native="$click('确定')"
          @mouseup.native="addOne"
          key="a"
          >增加一项</K-Button
        >
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
export default {
  name: "AddSkin",
  data() {
    this.AddLink_set_desc = {
      img: "海报",
      head: "头像",
    };
    return {
      /* 添加的皮肤 */
      skin_data: {
        id: null,
        data: [{ name: "", img: "", head: "", type: 0 }],
      },
      skin_type: [], //皮肤类型表

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
      this.skin_data.data.push({ name: "", img: "", head: "", type: 0 });

      setTimeout(() => {
        const scrollBox = this.$refs.content.$el;
        scrollBox.scroll({
          top: scrollBox.scrollHeight,
          behavior: "smooth",
        });
      }, 250);
    },
  },
};
</script>
<style scoped lang="less">
.AddSkin {
  .view_add();
  .content {
    .skin {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: var(--gap-35);
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
    .k-button {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
