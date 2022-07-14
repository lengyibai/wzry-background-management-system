<template>
  <div class="AddSkin view_add">
    <transition name="fade">
      <div class="content" v-if="show">
        <div class="skin" v-for="(item, index) in skin_data.data" :key="index">
          <FormInput label="皮肤名" required v-model="item.name" />

          <div class="head-poster">
            <span class="title text-gradient-one">英雄头像&海报：</span>
            <SelectImg
              :src="item.img"
              type="width"
              @select="setKeyValues"
              keyword="img"
            />
            <SelectImg :src="item.head" @select="setKeyValues" keyword="head" />
          </div>

          <FormSelect
            label="指派英雄"
            v-if="index === 0"
            :data="hero_list"
            v-model="item.type"
          />

          <FormSelect
            label="皮肤类型"
            :data="skin_type"
            v-model="skin_data.id"
          />
        </div>
        <div class="add" @click="skin_data.data.push({})">增加一项</div>
      </div>
    </transition>

    <!--//%%%%%··········发布皮肤按钮··········%%%%%//-->
    <LybCommitBtn
      class="LybCommitBtn"
      size="50px"
      @upload="addSkin"
      :finish="addSkin_finish"
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
//接口信息：{ 英雄基础列表 }
import { heroList } from "@/api/main/hero/basis";
//接口信息：{ 皮肤类型 }
import { getSkinType } from "@/api/main/tree/skinType";
export default {
  name: "AddSkin",
  data() {
    this.AddLink_set_desc = {
      img: "海报",
      head: "头像",
    };
    return {
      show: false,
      /* 添加的皮肤 */
      skin_data: {
        id: null,
        data: [{}],
      },
      hero_list: [], //英雄基础列表
      skin_type: [], //皮肤类型表
      addSkin_finish: false, //是否发布成功
      /* 弹窗相关 */
      show_AddLink: false, //显示添加链接弹窗
      AddLink_key: "", //当前谁在使用弹窗(字段名)
      AddLink_title: "", //弹窗左上角标题
      AddLink_placeholder: "", //弹窗输入框描述
    };
  },
  async created() {
    this.hero_list = await heroList();
    this.skin_type = await getSkinType();
    setTimeout(() => {
      this.show = true;
    }, 500);
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

    //#####··········隐藏自身··········#####//
    hide() {
      this.show = false;
      setTimeout(() => {
        this.$emit("input", false);
      }, 500);
    },

    //#####··········发布皮肤 ··········#####//
    addSkin() {
      setTimeout(() => {
        this.addSkin_finish = true;
        console.log(JSON.parse(JSON.stringify(this.skin_data)));
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
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: var(--gap-25);
    color: #fff;
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
        .title {
          font-size: var(--font-s-30);
        }
      }
    }
  }
  .LybCommitBtn,
  .LybCancelBtn {
    position: fixed;
    right: 0;
    bottom: 0;
    transition: all 0.1s;
    &:hover {
      filter: saturate(2);
    }
    &:active {
      filter: brightness(0.75);
    }
  }
  .LybCommitBtn {
    transform: translateX(-25%) translateY(-25%);
    &:active {
      transform: translateX(-25%) translateY(-25%) scale(0.9);
    }
  }
  .LybCancelBtn {
    transform: translateX(-155%) translateY(-25%);
    &:active {
      transform: translateX(-155%) translateY(-25%) scale(0.9);
    }
  }
}
</style>
