<template>
  <!-- 根据路由对象属性是否显示栏目 -->
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <div class="submenu">
            <span v-if="onlyOneChild.meta.icon" v-html="icon[onlyOneChild.meta.icon]"></span>
            <span v-else style="margin-right: 20px; font-size: 25px; font-weight: bold">{{
              onlyOneChild.meta.title[0]
            }}</span>
            <span>{{ onlyOneChild.meta && onlyOneChild.meta.title }}</span>
          </div>
        </el-menu-item>
      </app-link>
    </template>

    <!-- 二级菜单 -->
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <div class="submenu">
          <i v-if="item.meta.icon" v-html="icon[item.meta.icon]"></i>
          <span v-else style="margin-right: 20px; font-size: 25px; font-weight: bold">{{ item.meta.title[0] }}</span>
          <span>{{ item.meta && item.meta.title }}</span>
        </div>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path';
/* 用于路由跳转 */
import AppLink from './Link';
import icon from '@/icons/svg/index.js';

export default {
  name: 'SidebarItem',
  components: { AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  computed: {
    icon() {
      return icon;
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      // 判断是否手动隐藏
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // 得到不需要隐藏路由的子路由
          this.onlyOneChild = item;
          return true;
        }
      });
      // 获取没有hidden的子路由个数
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath;
      }
      if (/^(https?:|mailto:|tel:)/.test(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
<style lang="less">
.icon {
  width: 25px;
  height: 25px;
  margin-right: 20px;
}
</style>
<style scoped lang="less">
.submenu {
  display: flex;
  align-items: center;
}
</style>
