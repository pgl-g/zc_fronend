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
                >
                  <el-form-item label="账号">
                    <el-input
                      v-model="loginData.account"
                      placeholder="请输入账号"
                    />
                  </el-form-item>

                  <el-form-item label="密码" placeholder="请输入密码">
                    <el-input v-model="loginData.password" />
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

                  <!-- <el-form-item> </el-form-item> -->
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
                  >
                    <el-input v-model="registerData.password" />
                  </el-form-item>

                  <el-form-item label="新密码" placeholder="请再次输入密码">
                    <el-input v-model="registerData.password" />
                  </el-form-item>

                  <div class="footer-wrapped">
                    <div class="footer-button">
                      <el-button type="primary" @click="onSubmit"
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

<script lang="ts" setup>
import { ref, reactive } from "vue";

import forget from "./components/forget_password.vue";
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

// 忘记密码弹窗
const forgetP = ref();
// 打开忘记密码弹窗
const openForget = () => {
  forgetP.value.open();
};
</script>

<style scoped lang="scss">
.header-wrapped {
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title_w {
      font-size: 13px;
    }
  }
}

.el-main {
  background-image: url("xxx.jpg");
  background-color: #000;
  height: 600px;
  --el-main-padding: 0;
  .login-wrapper {
    width: 1200px;
    margin: 0 auto;
    height: 600px;

    .box-card {
      width: 350px;
      height: 375px;
      float: right;
      position: relative;
      top: 14%;

      .login-form,
      .register-form {
        .footer-wrapped {
          display: flex;
          flex-direction: column;

          .forget-password {
            display: flex;
            justify-content: flex-end;
            margin-top: 10px 0;
            .forget-password-button {
              font-size: 12px;
              color: #409eff;
              cursor: pointer;
            }
          }
          .footer-button {
            display: flex;
            justify-content: center;
            margin: 8px 0;
            width: 100%;
          }
          .footer-go-register {
            display: flex;
            justify-content: center;
            align-items: center;
            .go-register {
              font-size: 12px;
              color: #409eff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
.footer-wrapper {
  margin-top: 8px;
  .footer-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: #666;
      font-size: 12px;
    }
  }
}

.el-form {
  margin-top: 30px;
}

:deep(.el-tabs__item) {
  font-size: 18px;
  color: "#333";
}

:deep(.el-input__inner) {
  height: 40px;
}

:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}

:deep(.el-button) {
  width: 300px;
  height: 45px;
  font-size: 16px;
}
</style>
