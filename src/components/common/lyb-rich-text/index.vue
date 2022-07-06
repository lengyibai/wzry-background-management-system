<template>
  <div class="lyb-rich-text" :class="{ disabled: disabled }">
    <quill-editor
      :disabled="disabled"
      v-model="contentText"
      ref="myQuillEditor"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <input
      class="QuillEditor-uploader"
      @change="QuillEditorUpload"
      type="file"
      v-show="false"
    />
  </div>
</template>
<script>
/* npm i vue-quill-editor@3.0.6 quill@1.3.7 */
import { quillEditor, Quill } from "vue-quill-editor";
import { eeSourceBtn } from "./js/quill.eeSourceBtn.js";
Quill.register("modules/eeSourceBtn", eeSourceBtn);
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// import { upload } from "@/api/index.js"; //图片上传接口
// import { $imageOptimizer } from "./js/imageOptimizer.js";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
  },
  name: "LybRichText",
  data() {
    return {
      contentText: "",
      editorOption: {
        placeholder: "",
        modules: {
          eeSourceBtn: eeSourceBtn,
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
              ["blockquote", "code-block"], //引用，代码块
              [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
              [{ list: "ordered" }, { list: "bullet" }], //列表
              [{ script: "sub" }, { script: "super" }], // 上下标
              [{ indent: "-1" }, { indent: "+1" }], // 缩进
              [{ direction: "rtl" }], // 文本方向
              [{ size: ["small", false, "large", "huge"] }], // 字体大小
              [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
              [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
              [{ font: [] }], //字体
              [{ align: [] }], //对齐方式
              ["clean"], //清除字体样式
              ["image", "video"], //上传图片、上传视频
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  // 触发上传插件
                  document.querySelector(".QuillEditor-uploader").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
        },
      },
    };
  },
  components: {
    quillEditor,
  },
  watch: {
    value: {
      immediate: true, //立即调用
      handler(v) {
        this.contentText = v;
      },
    },
  },
  methods: {
    blur() {},
    onEditorReady() {},
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange(e) {
      this.$emit("input", e.html);
    },

    // 调用接口上传
    QuillEditorUpload(f) {
      let file = new FormData();
      file.append("file", f.target.files[0]);
      alert("上传图片需要填写上传文件接口");
      // upload(fd).then((res) => {
      //   // 获取富文本组件实例
      //   let quill = this.$refs.myQuillEditor.quill;
      //   // 获取光标所在位置
      //   let length = quill.getSelection().index;
      //   // 插入图片，res.data.data.src 为服务器返回的图片链接地址
      //   quill.insertEmbed(length, "image", res.data.data.src);
      //   // 调整光标到最后
      //   quill.setSelection(length + 1);
      // });

      /* 以下支持图片压缩 */
      // $imageOptimizer({
      //   file: f,
      //   ratio: 0.5, //压缩率
      //   maxsize: 1024, //超过多大进行压缩
      //   /* 成功回调 */
      //   success: (data, file, url) => {
      //     upload(data).then((res) => {
      //       // 获取富文本组件实例
      //       let quill = this.$refs.myQuillEditor.quill;
      //       // 获取光标所在位置
      //       let length = quill.getSelection().index;
      //       // 插入图片，res.resultMsg 为服务器返回的图片链接地址
      //       quill.insertEmbed(length, "image", res.data.data.src);
      //       // 调整光标到最后
      //       quill.setSelection(length + 1);
      //     });
      //   },
      // });
    },
  },
};
</script>
<style>
.ql-editor {
  height: 500px;
}

.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  width: fit-content;
}

.ql-snow .ql-picker-label {
  display: flex;
}

.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
  width: 18px;
}

.ql-snow .ql-formats {
  margin-right: 10px;
}
.ql-snow .ql-tooltip {
  top: 0 !important;
  left: 50% !important;
  transform: translateX(-50%);
}
</style>
<style scoped>
.lyb-rich-text {
  width: 100%;
  height: 100%;
}
.disabled {
  cursor: not-allowed;
  pointer-events: none;
}

textarea {
  width: 100%;
}
</style>
