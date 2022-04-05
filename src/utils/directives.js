// /* 修改文字 */
const play = {
  inserted(el, binding) {}
};

let directives = {
  play
};
export default {
  install(Vue) {
    Object.keys(directives).forEach(directive => {
      Vue.directive(directive, directives[directive]);
    });
  }
};
