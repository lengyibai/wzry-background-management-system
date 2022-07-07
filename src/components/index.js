import Vue from "vue";
const requireComponents = require.context("@/components", true, /\.vue$/);
requireComponents.keys().forEach(fileName => {
  if (
    fileName.includes("childComp") ||
    fileName.includes("demo") ||
    fileName.includes("SidebarItem")
  )
    return;
  const reqCom = requireComponents(fileName).default;
  const reqComName = reqCom.name;
  Vue.component(reqComName, reqCom);
});
