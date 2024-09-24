import request from "@/request";

// 注册
export const register = data => {
  const {
    account,
    password
  } = data
  return request({
    url: '/api/register',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

// 登录
export const login = data => {
  const {
    account,
    password
  } = data
  console.log(data, 'data')
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

// 忘记密码验证
export const verify = data => {
  const {
    account,
    email
  } = data
  return request({
    url: '/user/verifyAccountAndEmail',
    method: 'POST',
    data: {
      account,
      email
    }
  })
}

// 密码重置
export const reset = (id, newPassword) => {
  return request({
    url: '/user/changePasswordInLogin',
    method: 'POST',
    data: {
      id,
      newPassword
    }
  })
}
