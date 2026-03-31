const config = {
  // baseUrl: 'https://touliao.yishis.com/api',
  // wsUrl: 'wss://touliao.yishis.com/api/ws/mes',
  
  baseUrl: 'https://zxdc.graceintelli.com/api',
  wsUrl: 'https://zxdc.graceintelli.com/api/ws/mes',
  // baseUrl: 'https://1687xh1942gy.vicp.fun/api',
   
   
   
  //后端是微服务
  isCloud: false,
  //微服务接口适配
  apiReplace: [
	  {vueUrl: '/captchaImage', cloudUrl: '/code'},
	  {vueUrl: '/login', cloudUrl: '/auth/login'},
	  {vueUrl: '/register', cloudUrl: '/auth/register'},
	  {vueUrl: '/logout', cloudUrl: '/auth/logout', method: 'delete'},
	  {vueUrl: '/getInfo', cloudUrl: '/system/user/getInfo'},
	  {vueUrl: '/getRouters', cloudUrl: '/system/menu/getRouters'},
	  {vueUrl: '/monitor/operlog/**', cloudUrl: '/system/operlog/**'},
	  {vueUrl: '/monitor/logininfor/**', cloudUrl: '/system/logininfor/**'},
	  {vueUrl: '/monitor/online/**', cloudUrl: '/system/online/**'},
	  {vueUrl: '/monitor/jobLog/**', cloudUrl: '/schedule/job/log/**'},
	  {vueUrl: '/monitor/job/**', cloudUrl: '/schedule/job/**'},
	  {vueUrl: '/common/upload', cloudUrl: '/file/upload'},
  ],
  //是否使用服务器图标
  useSeverSvg: false,
  //服务器上的图标文件存放路径
  svgUrl: 'https://vue.ruoyi.vip/static/icons/svg',
  //APP更新地址，一般更新服务器和业务服务器不会在一起，因为会抢带宽
  updateUrl: 'https://vue.ruoyi.vip/app/update',
  //编译时svg移除超时时间（单位：秒）
  svgTimeout: 30,
  // 应用信息
  appInfo: {
    // 应用名称
    name: "SaaS经营管理",
    // 应用版本
    version: "1.0.0",
    // 应用logo
    logo: "/static/logo.png",
    // 官方网站
    site_url: "https://graceintelli.com",
    // 政策协议
    agreements: [{
        title: "隐私政策",
        url: "https://graceintelli.com/touliao/privacy.html"
      },
      {
        title: "用户服务协议",
        url: "https://graceintelli.com/touliao/user.html"
      }
    ]
  }
}
export default config
