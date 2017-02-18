# GraduationProject
## 项目简介
基于微信的高校订餐系统

## 实现功能
### mobile
- 注册新用户 
- 登录/登出
- 店铺推荐  
- 订餐下单
- 订单查询（未完成订单，进行中的订单，已完成的订单）
- 个人中心（收货地址，店铺收藏）

### pc
- 注册新商家
- 登录/登出
- 店铺信息
- 菜单修改
- 接单
- 订单查询
- 管理员功能

## 项目架构
前端：Vue2.0 + Vue-Router + Vuex + Axios

后端：Node.js(Express4) + MongoDB

## 项目结构
+ app --- 后端   
+ mobile-frontend --- moblie前端
+ pc-frontend --- pc前端

## APIS
### mobile（用户端）
#### 注册接口
url: /users/register
request:

| 参数           | 类型          | 是否必要  | 说明   |
| ------------- |:-------------:| -----:  | ----: |
| username      | String       |   是     |用户名  |
| password      | String       |   是     |密码    |

response:
```
{
    result: '注册成功',
    errorCode: '000000'
}
```

#### 登录接口
url: /users/login
request:

| 参数           | 类型          | 是否必要  | 说明   |
| ------------- |:-------------:| -----:  | ----: |
| username      | String       |   是     |用户名  |
| password      | String       |   是     |密码    |

response:
```
{
    result: '登录成功！',
    errorCode: '000000'
}
```

#### 登出接口
url: /users/logout
request: {}
response: 
```
{
    result: '登出成功！',
    errorCode: '000000'
}
```

### pc （客户端）
#### 注册接口
url: /shops/register
request:

| 参数           | 类型          | 是否必要  | 说明   |
| ------------- |:-------------:| -----:  | ----: |
| shopName      | String       |   是     |店铺名  |
| shopTel       | String       |   是     |店铺电话 |
| shopAddr      | String       |   是     |店铺地址 |
| password      | String       |   是     |密码    |

response:
```
{
    result: '注册成功',
    errorCode: '000000'
}
```

#### 登录接口
url: /shops/login
request:

| 参数           | 类型          | 是否必要  | 说明   |
| ------------- |:-------------:| -----:  | ----: |
| username      | String       |   是     |用户名  |
| password      | String       |   是     |密码    |

response:
```
{
    result: '登录成功！',
    errorCode: '000000'
}
```

#### 登出接口
url: /shops/logout
request: {}
response: 
```
{
    result: '登出成功！',
    errorCode: '000000'
}
```