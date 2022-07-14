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
    <input class="QuillEditor-uploader" type="file" v-show="false" />
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
        placeholder: "请输入",
        modules: {
          eeSourceBtn: eeSourceBtn,
          toolbar: {
            container: [
              ["bold", "italic", "underline"], //加粗，斜体，下划线，删除线
              [{ color: [] }], // 字体颜色，字体背景颜色
              ["clean"], //清除字体样式
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
  },
};
</script>
<style lang="less">
.ql-editor {
  height: 50vh;
  /*   &.ql-toolbar button,
  .ql-toolbar button {
    width: fit-content;
  }
  .ql-snow {
    .ql-picker-label {
      display: flex;
    }
    .ql-color-picker .ql-picker-label svg,
    .ql-icon-picker .ql-picker-label svg {
      width: 18px;
    }
    .ql-formats {
      margin-right: 10px;
    }
    .ql-tooltip {
      top: 0 !important;
      left: 50% !important;
      transform: translateX(-50%);
    }
  } */
}

/* 字体大小 */
.ql-snow .ql-editor,
.ql-ee-source {
  cursor: text !important;
  * {
    cursor: inherit !important;
    font-size: 24px !important;
  }
}

/* 整体边框颜色 */
.ql-snow {
  border: 2px solid @color !important;
}

/* html按钮悬浮颜色 */
.ql-html:hover {
  color: #fff !important;
}

/* 以下为SVG图标颜色及悬浮颜色 */
@color: #4d6b8f;
.ql-snow .ql-stroke {
  stroke: @color;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: @color;
}

.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
  fill: #fff;
}

.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
  stroke: #fff;
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
