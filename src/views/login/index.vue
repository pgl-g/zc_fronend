<style scoped lang="scss">
@import url(./index.scss);
</style>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import forget from "./components/forget_password.vue";

import { register, login } from "@/api/login";
import { ElMessage } from "element-plus";
const router = useRouter();
const activeName = ref("second");

const loginData = reactive({
  account: "",
  password: "",
});

const registerData = reactive({
  account: "",
  password: "",
  repassword: "",
});

// 登陆
const onSubmit = async () => {
  try {
    const res = await login(loginData);
    const { id, name, account, email, department } = res.result;
    const { token } = res;

    ElMessage({
      message: res.message,
      type: "success",
    });
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("department", department);
    // await loginLog(account,name,email)
    // store.userInfo(id)
    // 跳转
    router.push("/home");
    console.log(res, "res");
  } catch (error) {
    ElMessage({
      message: "登陆失败",
      type: "error",
    });
  }
};

// 注册
const onRegister = async () => {
  try {
    if (registerData.password === registerData.repassword) {
      const res = await register(registerData);
      ElMessage({
        message: res.message,
        type: "success",
      });
      activeName.value = "first";
    }
  } catch (error) {
    console.log(error, "error");
    ElMessage.error("注册失败");
  }
};

// 忘记密码弹窗
const forgetP = ref();
// 打开忘记密码弹窗
const openForget = () => {
  forgetP.value.open();
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
          <h3>通用后台管理系统</h3>
          <span class="title_w">欢迎您的登录</span>
        </div>
      </el-header>
      <el-main>
        <div class="login-wrapper">
          <el-card class="box-card">
            <el-tabs
              v-model="activeName"
              class="demo-tabs"
              @tab-click="handleClick"
              :stretch="true"
            >
              <el-tab-pane label="登陆" name="first">
                <el-form
                  label-width="auto"
                  style="max-width: 600px"
                  class="login-form"
                  :for
                >
                  <el-form-item label="账号">
                    <el-input
                      v-model="loginData.account"
                      placeholder="请输入账号"
                    />
                  </el-form-item>

                  <el-form-item label="密码" placeholder="请输入密码">
                    <el-input
                      v-model="loginData.password"
                      type="password"
                      show-password
                    />
                  </el-form-item>

                  <div class="footer-wrapped">
                    <div class="forget-password">
                      <span class="forget-password-button" @click="openForget"
                        >忘记密码</span
                      >
                    </div>

                    <div class="footer-button">
                      <el-button type="primary" @click="onSubmit"
                        >登陆</el-button
                      >
                    </div>

                    <div class="footer-go-register">
                      还没有账号？ <span class="go-register">去注册</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="注册" name="second">
                <el-form
                  label-width="auto"
                  style="max-width: 600px"
                  class="register-form"
                >
                  <el-form-item label="账号">
                    <el-input
                      v-model="registerData.account"
                      placeholder="账号长度6-12位"
                    />
                  </el-form-item>

                  <el-form-item
                    label="密码"
                    placeholder="密码需长度6-12位含字母数字"
                    type="password"
                    show-password
                  >
                    <el-input v-model="registerData.password" />
                  </el-form-item>

                  <el-form-item label="新密码" placeholder="请再次输入密码">
                    <el-input
                      v-model="registerData.repassword"
                      type="password"
                      show-password
                    />
                  </el-form-item>

                  <div class="footer-wrapped">
                    <div class="footer-button">
                      <el-button type="primary" @click="onRegister"
                        >注册</el-button
                      >
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <el-footer class="footer-wrapper">
        <div class="footer-content">
          <div class="title">前端技术专家</div>
        </div>
      </el-footer>
    </el-container>
  </div>
  <forget ref="forgetP"></forget>
</template>
