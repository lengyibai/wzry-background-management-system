<template>
  <div class="Login">
    <h1>登录</h1>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="帐号" prop="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-button type="primary" @click="login">登录</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="warning" @click="reset">重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getUserInfo } from '@/api/test.js';
export default {
  name: 'Login',
  data() {
    return {
      /* 表单 */
      form: {
        id: 1329670984,
        password: 'lengyibai.'
      },

      /* 表单验证 */
      rules: {
        id: [{ required: true, message: '请输入帐号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store.dispatch('login', this.form);
        }
      });
    },
    reset() {
      this.form = {};
      this.$refs.form.resetFields();
    }
  }
};
</script>
<style scoped lang="less">
.Login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    margin-bottom: 25px;
  }
}
</style>
