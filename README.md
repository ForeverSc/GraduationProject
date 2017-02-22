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
url: /shops/register
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
####店铺列表接口
url: /shops/getShopList
requeset: null
response:
```
{
    data: [
        {
            shopName: '',
            shopTel: '',
            shopAddr: '',
            shopDetail
        }
    ]
    errCode: '000000',
    result: 'success'
}
```

####获取店铺菜单接口
url: /shops/getShopMenu
requeset:

| 参数           | 类型          | 是否必要  | 说明   |
| ------------- |:-------------:| -----:  | ----: |
| shopName      | String       |   是     |店铺名  |

response:
```
{
  "data": [
    {
      "dishName": "热干面",
      "dishPrice": "3.5",
      "dishDetail": "好吃不贵",
      "_id": "58a94cb8a7eb6f2a1c1841de"
    }
  ],
  "errCode": "000000",
  "result": "菜单查询成功！"
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

####更新店铺信息接口
url: /shops/updateShopInfo
request: 

| 参数           | 类型          | 是否必要  | 说明   |
| ------------- |:-------------:| -----:  | ----: |
| shopName      | String       |   是     |店铺名   |
| shopTel       | String       |   是     |店铺电话 |
| shopAddr      | String       |   是     |店铺地址 |
| shopDetail    | String       |   是     |店铺介绍 |

response:
```
{
    errCode: '000000'
    result: '更新成功！'
}
```

####更新店铺菜单接口
url: /shops/updateShopMenu
request:   

| 参数           | 类型          | 是否必要  | 说明   |
| ------------- |:-------------:| -----:  | ----: |
| shopName      | String       |   是     |店铺名   |
| shopMenu      | String       |   是     |店铺菜单 |

response:
```
{
    errCode: '000000',
    result: '更新成功！'
}
```



















