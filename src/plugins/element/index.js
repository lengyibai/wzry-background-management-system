import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Cascader,
  Col,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  Message,
  Row,
  Submenu
} from 'element-ui';
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(Cascader);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Submenu);
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
