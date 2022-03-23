import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Message,
  Cascader,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input,
  Button,
  Row,
  Col
} from 'element-ui';
Vue.use(Cascader);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.prototype.$message = Message;
// //#####··········封装··········!//
// //####········消息提示········@//
// let m = undefined;
// Vue.prototype.$message = {
//   info(text) {
//     if (m) {
//       m.close();
//     }
//     m = Message(text);
//   },
//   success(text) {
//     if (m) {
//       m.close();
//     }
//     m = Message({
//       message: text,
//       type: 'success'
//     });
//   },
//   warning(text) {
//     if (m) {
//       m.close();
//     }
//     m = Message({
//       message: text,
//       type: 'warning'
//     });
//   },
//   error(text) {
//     if (m) {
//       m.close();
//     }
//     m = Message.error(text);
//   }
// };
