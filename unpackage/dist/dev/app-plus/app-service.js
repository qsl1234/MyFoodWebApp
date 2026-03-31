if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key2, val] of props) {
      target[key2] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$D = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v2) => v2.font_class === this.type);
        if (code2) {
          return code2.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick(e2) {
        this.$emit("click", e2);
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  const ON_UNLOAD = "onUnload";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createLifeCycleHook = (lifecycle, flag2 = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createLifeCycleHook(
    ON_SHOW,
    1 | 2
    /* HookFlags.PAGE */
  );
  const onHide = /* @__PURE__ */ createLifeCycleHook(
    ON_HIDE,
    1 | 2
    /* HookFlags.PAGE */
  );
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const onReady = /* @__PURE__ */ createLifeCycleHook(
    ON_READY,
    2
    /* HookFlags.PAGE */
  );
  const onUnload = /* @__PURE__ */ createLifeCycleHook(
    ON_UNLOAD,
    2
    /* HookFlags.PAGE */
  );
  const onReachBottom = /* @__PURE__ */ createLifeCycleHook(
    ON_REACH_BOTTOM,
    2
    /* HookFlags.PAGE */
  );
  const onPullDownRefresh = /* @__PURE__ */ createLifeCycleHook(
    ON_PULL_DOWN_REFRESH,
    2
    /* HookFlags.PAGE */
  );
  const config$1 = {
    // baseUrl: 'https://touliao.yishis.com/api',
    // wsUrl: 'wss://touliao.yishis.com/api/ws/mes',
    baseUrl: "https://zxdc.graceintelli.com/api",
    wsUrl: "https://zxdc.graceintelli.com/api/ws/mes",
    // baseUrl: 'https://1687xh1942gy.vicp.fun/api',
    //后端是微服务
    isCloud: false,
    //微服务接口适配
    apiReplace: [
      { vueUrl: "/captchaImage", cloudUrl: "/code" },
      { vueUrl: "/login", cloudUrl: "/auth/login" },
      { vueUrl: "/register", cloudUrl: "/auth/register" },
      { vueUrl: "/logout", cloudUrl: "/auth/logout", method: "delete" },
      { vueUrl: "/getInfo", cloudUrl: "/system/user/getInfo" },
      { vueUrl: "/getRouters", cloudUrl: "/system/menu/getRouters" },
      { vueUrl: "/monitor/operlog/**", cloudUrl: "/system/operlog/**" },
      { vueUrl: "/monitor/logininfor/**", cloudUrl: "/system/logininfor/**" },
      { vueUrl: "/monitor/online/**", cloudUrl: "/system/online/**" },
      { vueUrl: "/monitor/jobLog/**", cloudUrl: "/schedule/job/log/**" },
      { vueUrl: "/monitor/job/**", cloudUrl: "/schedule/job/**" },
      { vueUrl: "/common/upload", cloudUrl: "/file/upload" }
    ],
    //是否使用服务器图标
    useSeverSvg: false,
    //服务器上的图标文件存放路径
    svgUrl: "https://vue.ruoyi.vip/static/icons/svg",
    //APP更新地址，一般更新服务器和业务服务器不会在一起，因为会抢带宽
    updateUrl: "https://vue.ruoyi.vip/app/update",
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
      agreements: [
        {
          title: "隐私政策",
          url: "https://graceintelli.com/touliao/privacy.html"
        },
        {
          title: "用户服务协议",
          url: "https://graceintelli.com/touliao/user.html"
        }
      ]
    }
  };
  const TokenKey = "App-Token";
  function getToken() {
    return uni.getStorageSync(TokenKey);
  }
  function setToken(token) {
    return uni.setStorageSync(TokenKey, token);
  }
  function removeToken() {
    return uni.removeStorageSync(TokenKey);
  }
  const errorCode = {
    "401": "认证失败，无法访问系统资源",
    "403": "当前操作没有权限",
    "404": "访问资源不存在",
    "default": "系统未知错误，请反馈给管理员"
  };
  function toast(content) {
    uni.showToast({
      icon: "none",
      title: content
    });
  }
  function tansParams$1(params) {
    let result = "";
    for (const propName of Object.keys(params)) {
      const value = params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && value !== "" && typeof value !== "undefined") {
        if (typeof value === "object") {
          for (const key2 of Object.keys(value)) {
            if (value[key2] !== null && value[key2] !== "" && typeof value[key2] !== "undefined") {
              let params2 = propName + "[" + key2 + "]";
              var subPart = encodeURIComponent(params2) + "=";
              result += subPart + encodeURIComponent(value[key2]) + "&";
            }
          }
        } else {
          result += part + encodeURIComponent(value) + "&";
        }
      }
    }
    return result;
  }
  var isVue2 = false;
  function set(target, key2, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key2);
      target.splice(key2, 1, val);
      return val;
    }
    target[key2] = val;
    return val;
  }
  function del(target, key2) {
    if (Array.isArray(target)) {
      target.splice(key2, 1);
      return;
    }
    delete target[key2];
  }
  function getDevtoolsGlobalHook$1() {
    return getTarget$1().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget$1() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable$1 = typeof Proxy === "function";
  const HOOK_SETUP$1 = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET$1 = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  let ApiProxy$1 = class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data2 = JSON.parse(raw);
        Object.assign(currentSettings, data2);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET$1, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  };
  function setupDevtoolsPlugin$1(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget$1();
    const hook = getDevtoolsGlobalHook$1();
    const enableProxy = isProxyAvailable$1 && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP$1, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy$1(descriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.hasInjectionContext() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download$1(url, name2, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name2, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e2) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node2) {
    try {
      node2.dispatchEvent(new MouseEvent("click"));
    } catch (e2) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node2.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name2 = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name2;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download$1(blob, name2, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name2 = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download$1(blob, name2, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name2);
    }
  }
  function fileSaverSaveAs(blob, name2, opts, popup2) {
    popup2 = popup2 || open("", "_blank");
    if (popup2) {
      popup2.document.title = popup2.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download$1(blob, name2, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup2 = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup2) {
          popup2.location.href = url;
        } else {
          location.assign(url);
        }
        popup2 = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup2)
        popup2.location.assign(url);
      else
        location.href = url;
      popup2 = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file2 = files.item(0);
          if (!file2)
            return resolve(null);
          return resolve({ text: await file2.text(), file: file2 });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file: file2 } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file2.name}".`);
    } catch (error2) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key2 in state) {
      const storeState = pinia.state.value[key2];
      if (storeState) {
        Object.assign(storeState, state[key2]);
      } else {
        pinia.state.value[key2] = state[key2];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree$1(store2) {
    return isPinia(store2) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store2.$id,
      label: store2.$id
    };
  }
  function formatStoreForInspectorState$1(store2) {
    if (isPinia(store2)) {
      const storeNames = Array.from(store2._s.keys());
      const storeMap = store2._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store2.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store22 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store22._getters.reduce((getters, key2) => {
              getters[key2] = store22[key2];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store2.$state).map((key2) => ({
        editable: true,
        key: key2,
        value: store2.$state[key2]
      }))
    };
    if (store2._getters && store2._getters.length) {
      state.getters = store2._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store2[getterName]
      }));
    }
    if (store2._customProperties.size) {
      state.customProperties = Array.from(store2._customProperties).map((key2) => ({
        editable: true,
        key: key2,
        value: store2[key2]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data2, event) => {
        data2.keys.push(event.key);
        data2.operations.push(event.type);
        data2.oldValue[event.key] = event.oldValue;
        data2.newValue[event.key] = event.newValue;
        return data2;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID$1 = "pinia:mutations";
  const INSPECTOR_ID$1 = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app2, pinia) {
    setupDevtoolsPlugin$1({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app: app2
    }, (api2) => {
      if (typeof api2.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api2.addTimelineLayer({
        id: MUTATIONS_LAYER_ID$1,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api2.addInspector({
        id: INSPECTOR_ID$1,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api2.sendInspectorTree(INSPECTOR_ID$1);
              api2.sendInspectorState(INSPECTOR_ID$1);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api2.sendInspectorTree(INSPECTOR_ID$1);
              api2.sendInspectorState(INSPECTOR_ID$1);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store2 = pinia._s.get(nodeId);
              if (!store2) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store2.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store2.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api2.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store2) => {
            payload.instanceData.state.push({
              type: getStoreType(store2.$id),
              key: "state",
              editable: true,
              value: store2._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store2.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store2.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store2.$state).reduce((state, key2) => {
                  state[key2] = store2.$state[key2];
                  return state;
                }, {})
              )
            });
            if (store2._getters && store2._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store2.$id),
                key: "getters",
                editable: false,
                value: store2._getters.reduce((getters, key2) => {
                  try {
                    getters[key2] = store2[key2];
                  } catch (error2) {
                    getters[key2] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api2.on.getInspectorTree((payload) => {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID$1) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store2) => "$id" in store2 ? store2.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree$1);
        }
      });
      api2.on.getInspectorState((payload) => {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID$1) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState$1(inspectedStore);
          }
        }
      });
      api2.on.editInspectorState((payload, ctx) => {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID$1) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api2.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store2 = pinia._s.get(storeId);
          if (!store2) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store2, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app2, store2) {
    if (!componentStateTypes.includes(getStoreType(store2.$id))) {
      componentStateTypes.push(getStoreType(store2.$id));
    }
    setupDevtoolsPlugin$1({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app: app2,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api2) => {
      const now2 = typeof api2.now === "function" ? api2.now.bind(api2) : Date.now;
      store2.$onAction(({ after, onError, name: name2, args }) => {
        const groupId = runningActionId++;
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID$1,
          event: {
            time: now2(),
            title: "🛫 " + name2,
            subtitle: "start",
            data: {
              store: formatDisplay(store2.$id),
              action: formatDisplay(name2),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api2.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID$1,
            event: {
              time: now2(),
              title: "🛬 " + name2,
              subtitle: "end",
              data: {
                store: formatDisplay(store2.$id),
                action: formatDisplay(name2),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api2.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID$1,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name2,
              subtitle: "end",
              data: {
                store: formatDisplay(store2.$id),
                action: formatDisplay(name2),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store2._customProperties.forEach((name2) => {
        vue.watch(() => vue.unref(store2[name2]), (newValue, oldValue) => {
          api2.notifyComponentUpdate();
          api2.sendInspectorState(INSPECTOR_ID$1);
          if (isTimelineActive) {
            api2.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID$1,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name2,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store2.$subscribe(({ events, type }, state) => {
        api2.notifyComponentUpdate();
        api2.sendInspectorState(INSPECTOR_ID$1);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store2.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID$1,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store2._hotUpdate;
      store2._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID$1,
          event: {
            time: now2(),
            title: "🔥 " + store2.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store2.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api2.notifyComponentUpdate();
        api2.sendInspectorTree(INSPECTOR_ID$1);
        api2.sendInspectorState(INSPECTOR_ID$1);
      });
      const { $dispose } = store2;
      store2.$dispose = () => {
        $dispose();
        api2.notifyComponentUpdate();
        api2.sendInspectorTree(INSPECTOR_ID$1);
        api2.sendInspectorState(INSPECTOR_ID$1);
        api2.getSettings().logStoreChanges && toastMessage(`Disposed "${store2.$id}" store 🗑`);
      };
      api2.notifyComponentUpdate();
      api2.sendInspectorTree(INSPECTOR_ID$1);
      api2.sendInspectorState(INSPECTOR_ID$1);
      api2.getSettings().logStoreChanges && toastMessage(`"${store2.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store2, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store2)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store2[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store2, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store2;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app: app2, store: store2, options }) {
    if (store2.$id.startsWith("__hot:")) {
      return;
    }
    store2._isOptionsAPI = !!options.state;
    patchActionForGrouping(store2, Object.keys(options.actions), store2._isOptionsAPI);
    const originalHotUpdate = store2._hotUpdate;
    vue.toRaw(store2)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store2, Object.keys(newStore._hmrPayload.actions), !!store2._isOptionsAPI);
    };
    addStoreToDevtools(
      app2,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store2
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app2) {
        setActivePinia(pinia);
        {
          pinia._a = app2;
          app2.provide(piniaSymbol, pinia);
          app2.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app2, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn2) => {
    return typeof fn2 === "function" && typeof fn2.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key2 in oldState) {
      const subPatch = oldState[key2];
      if (!(key2 in newState)) {
        continue;
      }
      const targetValue = newState[key2];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key2] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key2] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore2 = newModule[exportName];
        if (isUseStore(useStore2) && pinia._s.has(useStore2.$id)) {
          const id = useStore2.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore2(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn2) => fn2();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key2) => target.set(key2, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key2 in patchToApply) {
      if (!patchToApply.hasOwnProperty(key2))
        continue;
      const subPatch = patchToApply[key2];
      const targetValue = target[key2];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key2) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key2] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key2] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store2;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name2) => {
        if (name2 in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name2}" in store "${id}".`);
        }
        computedGetters[name2] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store22 = pinia._s.get(id);
          return getters[name2].call(store22, store22);
        }));
        return computedGetters;
      }, {}));
    }
    store2 = createSetupStore(id, setup, options, pinia, hot, true);
    return store2;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store2._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name2, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name: name2,
          store: store2,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store2, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store2 = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store2);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key2 in setupStore) {
      const prop = setupStore[key2];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key2, vue.toRef(setupStore, key2));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key2];
            } else {
              mergeReactiveObjects(prop, initialState[key2]);
            }
          }
          {
            pinia.state.value[$id][key2] = prop;
          }
        }
        {
          _hmrPayload.state.push(key2);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key2, prop);
        {
          setupStore[key2] = actionValue;
        }
        {
          _hmrPayload.actions[key2] = prop;
        }
        optionsForPlugin.actions[key2] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key2] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key2]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key2);
          }
        }
      }
    }
    {
      assign(store2, setupStore);
      assign(vue.toRaw(store2), setupStore);
    }
    Object.defineProperty(store2, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store2._hotUpdate = vue.markRaw((newStore) => {
        store2._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store2.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store2.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store2, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store2.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store2, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store2, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store2, store2);
            })
          ) : getter;
          set(store2, getterName, getterValue);
        }
        Object.keys(store2._hmrPayload.getters).forEach((key2) => {
          if (!(key2 in newStore._hmrPayload.getters)) {
            del(store2, key2);
          }
        });
        Object.keys(store2._hmrPayload.actions).forEach((key2) => {
          if (!(key2 in newStore._hmrPayload.actions)) {
            del(store2, key2);
          }
        });
        store2._hmrPayload = newStore._hmrPayload;
        store2._getters = newStore._getters;
        store2._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
        Object.defineProperty(store2, p2, assign({ value: store2[p2] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store: store2,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key2) => store2._customProperties.add(key2));
        assign(store2, extensions);
      } else {
        assign(store2, scope.run(() => extender({
          store: store2,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store2.$state && typeof store2.$state === "object" && typeof store2.$state.constructor === "function" && !store2.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store2.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store2.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store2;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore2(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore2._pinia = pinia;
        }
      }
      const store2 = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store2;
        }
      }
      return store2;
    }
    useStore2.$id = id;
    return useStore2;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore2) => {
      reduced[useStore2.$id + mapStoreSuffix] = function() {
        return useStore2(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState$1(useStore2, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key2) => {
      reduced[key2] = function() {
        return useStore2(this.$pinia)[key2];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key2) => {
      reduced[key2] = function() {
        const store2 = useStore2(this.$pinia);
        const storeKey2 = keysOrMapper[key2];
        return typeof storeKey2 === "function" ? storeKey2.call(this, store2) : store2[storeKey2];
      };
      return reduced;
    }, {});
  }
  const mapGetters$1 = mapState$1;
  function mapActions$1(useStore2, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key2) => {
      reduced[key2] = function(...args) {
        return useStore2(this.$pinia)[key2](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key2) => {
      reduced[key2] = function(...args) {
        return useStore2(this.$pinia)[keysOrMapper[key2]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore2, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key2) => {
      reduced[key2] = {
        get() {
          return useStore2(this.$pinia)[key2];
        },
        set(value) {
          return useStore2(this.$pinia)[key2] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key2) => {
      reduced[key2] = {
        get() {
          return useStore2(this.$pinia)[keysOrMapper[key2]];
        },
        set(value) {
          return useStore2(this.$pinia)[keysOrMapper[key2]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store2) {
    {
      store2 = vue.toRaw(store2);
      const refs = {};
      for (const key2 in store2) {
        const value = store2[key2];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key2] = // ---
          vue.toRef(store2, key2);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v2) => Object.assign(provideCache, v2)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions: mapActions$1,
    mapGetters: mapGetters$1,
    mapState: mapState$1,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const useModalStore = defineStore("modal", {
    state: () => ({
      type: "",
      cancelText: "",
      confirmText: "",
      title: "",
      content: "",
      isShow: false,
      confirm: function() {
      }
    }),
    actions: {
      open(obj) {
        this.type = obj.type || "center";
        this.cancelText = obj.cancelText || "取消";
        this.confirmText = obj.confirmText || "确定";
        this.title = obj.title || "提示";
        this.content = obj.content || "";
        this.confirm = obj.confirm || function() {
        };
        this.isShow = false;
        this.isShow = true;
      },
      close() {
        this.type = "center";
        this.cancelText = "取消";
        this.confirmText = "确定";
        this.title = "提示";
        this.content = "";
        this.confirm = function() {
        };
        this.isShow = false;
      }
    }
  });
  const constant = {
    avatar: "vuex_avatar",
    name: "vuex_name",
    roles: "vuex_roles",
    permissions: "vuex_permissions"
  };
  let storageKey = "storage_data";
  let storageNodeKeys = [constant.avatar, constant.name, constant.roles, constant.permissions];
  const storage = {
    set: function(key2, value) {
      if (storageNodeKeys.indexOf(key2) != -1) {
        let tmp = uni.getStorageSync(storageKey);
        tmp = tmp ? tmp : {};
        tmp[key2] = value;
        uni.setStorageSync(storageKey, tmp);
      }
    },
    get: function(key2) {
      let storageData = uni.getStorageSync(storageKey) || {};
      return storageData[key2] || "";
    },
    remove: function(key2) {
      let storageData = uni.getStorageSync(storageKey) || {};
      delete storageData[key2];
      uni.setStorageSync(storageKey, storageData);
    },
    clean: function() {
      uni.removeStorageSync(storageKey);
    }
  };
  const _imports_0$1 = "/static/logo.png";
  const baseUrl$2 = config$1.baseUrl;
  const isCloud$2 = config$1.isCloud;
  const useUserStore = defineStore("user", {
    state: () => ({
      token: getToken(),
      id: "",
      nick: "",
      compCode: "",
      userType: "",
      waiteApproveWork: false,
      sysLogo: "",
      sysName: "",
      name: storage.get(constant.name) || "",
      avatar: storage.get(constant.avatar) || _imports_0$1,
      roles: storage.get(constant.roles) || [],
      permissions: storage.get(constant.permissions) || []
    }),
    actions: {
      // 登录  
      async login(userInfo) {
        const {
          username,
          password,
          code: code2,
          uuid
        } = userInfo;
        try {
          const res2 = await login$1(username.trim(), password, code2, uuid);
          if (isCloud$2) {
            setToken(res2.data.access_token);
            this.token = res2.data.access_token;
          } else {
            setToken(res2.token);
            this.token = res2.token;
          }
          return res2;
        } catch (error2) {
          throw error2;
        }
      },
      // 获取用户信息  
      async getInfo() {
        try {
          const res2 = await getInfo();
          const user2 = res2.user || {};
          let avatar = "";
          if (isCloud$2) {
            avatar = user2.avatar ? user2.avatar : _imports_0$1;
          } else {
            avatar = user2.avatar ? `${baseUrl$2}${user2.avatar}` : _imports_0$1;
          }
          const username = user2.userName || "";
          this.id = user2.userId;
          this.name = username;
          this.avatar = avatar;
          this.compCode = user2.compCode;
          this.userType = user2.userType;
          this.userName = user2.userName;
          this.nick = user2.nickName;
          this.waiteApproveWork = res2.waitNotice;
          if (res2.sysCompConfig != null && res2.sysCompConfig != "" && res2.sysCompConfig != void 0) {
            this.sysLogo = res2.sysCompConfig.logoUrl;
            this.sysName = res2.sysCompConfig.compName;
          }
          if (res2.roles && res2.roles.length > 0) {
            this.roles = res2.roles;
            this.permissions = res2.permissions;
          } else {
            this.roles = ["ROLE_DEFAULT"];
            this.permissions = [];
          }
          return res2;
        } catch (error2) {
          throw error2;
        }
      },
      // 退出系统
      async cleanUserInfo() {
        try {
          this.token = "";
          this.roles = [];
          this.permissions = [];
          removeToken();
          storage.clean();
        } catch (error2) {
          throw error2;
        }
      },
      // 退出系统  
      async logOut() {
        try {
          await logout$1(this.token);
          this.token = "";
          this.roles = [];
          this.permissions = [];
          removeToken();
          storage.clean();
        } catch (error2) {
          throw error2;
        }
      },
      // 登录
      async registerUser(userInfo) {
        const {
          username,
          password,
          code: code2,
          uuid
        } = userInfo;
        try {
          const res2 = await register(username.trim(), password, code2, uuid);
          return res2;
        } catch (error2) {
          throw error2;
        }
      }
    }
  });
  let timeout$1 = 6e4;
  const baseUrl$1 = config$1.baseUrl;
  const isCloud$1 = config$1.isCloud;
  const apiReplace$1 = config$1.apiReplace;
  const request = (config2) => {
    const isToken = (config2.headers || {}).isToken === false;
    config2.header = config2.header || {};
    if (getToken() && !isToken) {
      config2.header["Authorization"] = "Bearer " + getToken();
    }
    if (isCloud$1) {
      for (let obj of apiReplace$1) {
        if (obj.vueUrl === config2.url) {
          config2.url = obj.cloudUrl;
          config2.method = obj.method || config2.method;
          break;
        } else {
          let uris = obj.vueUrl.split("/");
          if (uris[uris.length - 1] == "**" && config2.url.includes(obj.vueUrl.replace("/**", ""))) {
            config2.url = config2.url.replace(obj.vueUrl.split("/**")[0], obj.cloudUrl.split("/**")[0]);
            config2.method = obj.method || config2.method;
            break;
          }
        }
      }
    }
    if (config2.params) {
      let url = config2.url + "?" + tansParams$1(config2.params);
      url = url.slice(0, -1);
      config2.url = url;
    }
    return new Promise((resolve, reject) => {
      uni.request({
        method: config2.method || "get",
        timeout: timeout$1,
        url: config2.baseUrl || baseUrl$1 + config2.url,
        data: config2.data,
        header: config2.header,
        dataType: "json"
      }).then((response) => {
        let res2 = response;
        if (res2.statusCode != 200) {
          toast("后端接口连接异常");
          reject("后端接口连接异常");
          return;
        }
        const code2 = res2.data.code || 200;
        const msg = errorCode[code2] || res2.data.msg || errorCode["default"];
        if (code2 === 401) {
          uni.navigateTo({
            url: "/pages/common/popup/index",
            success: function(res3) {
              useModalStore().open({
                title: "系统提示",
                content: "无效的会话，或者会话已过期，请重新登录。",
                cancelText: "取消",
                confirmText: "确定",
                confirm: function(res4) {
                  if (res4.confirm) {
                    uni.navigateTo({
                      url: "/pages/login"
                    });
                  } else {
                    useUserStore().cleanUserInfo();
                  }
                }
              });
            }
          });
          reject("无效的会话，或者会话已过期，请重新登录。");
        } else if (code2 === 500) {
          toast(msg);
          reject(msg);
        } else if (code2 !== 200) {
          toast(msg);
          reject(msg);
        }
        resolve(res2.data);
      }).catch((error2) => {
        let {
          message,
          errMsg
        } = error2;
        if (message === void 0) {
          message = "未知异常";
          if (errMsg.includes("ERR_CERT_COMMON_NAME_INVALID"))
            message = "ssl证书已到期或证书与域名不匹配";
        } else if (message === "Network Error") {
          message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
          message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
          message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        toast(message);
        reject(error2);
      });
    });
  };
  function login$1(username, password, code2, uuid) {
    const data2 = {
      username,
      password,
      code: code2,
      uuid
    };
    return request({
      "url": "/login",
      headers: {
        isToken: false
      },
      "method": "post",
      "data": data2
    });
  }
  function register(data2) {
    return request({
      url: "/register",
      headers: {
        isToken: false
      },
      method: "post",
      data: data2
    });
  }
  function getInfo() {
    return request({
      "url": "/getInfo",
      "method": "get"
    });
  }
  function logout$1() {
    return request({
      "url": "/logout",
      "method": "post"
    });
  }
  function getCodeImg() {
    return request({
      "url": "/captchaImage",
      headers: {
        isToken: false
      },
      method: "get",
      timeout: 2e4
    });
  }
  const navHeight$1 = 250;
  const _sfc_main$C = {
    __name: "login",
    setup(__props, { expose: __expose }) {
      __expose();
      const userStore = useUserStore();
      const {
        proxy
      } = vue.getCurrentInstance();
      const statusBarHeight = uni.getSystemInfoSync().statusBarHeight || 0;
      const codeUrl = vue.ref("");
      const captchaEnabled = vue.ref(true);
      const register2 = vue.ref(true);
      const globalConfig = vue.ref(getApp().globalData.config);
      const loginForm = vue.ref({
        username: "",
        password: "",
        code: "",
        uuid: ""
      });
      const needLogin = vue.ref(false);
      onShow(() => {
        if (getToken() != "") {
          needLogin.value = false;
        } else {
          needLogin.value = true;
        }
      });
      onLoad(() => {
        if (getToken() != "") {
          getInfo().then((res2) => {
            uni.reLaunch({
              url: "/pages/home/index"
            });
          }).catch((err2) => {
            userStore.cleanUserInfo();
            uni.clearStorageSync();
            needLogin.value = true;
          });
        } else {
          needLogin.value = true;
        }
      });
      const handleUserRegister = () => {
      };
      const handlePrivacy = () => {
        let site = globalConfig.value.appInfo.agreements[0];
        proxy.$tab.navigateTo(`/pages/common/webview/index?title=${site.title}&url=${site.url}`);
      };
      const handleUserAgrement = () => {
        let site = globalConfig.value.appInfo.agreements[1];
        proxy.$tab.navigateTo(`/pages/common/webview/index?title=${site.title}&url=${site.url}`);
      };
      const getCode = () => {
        getCodeImg().then((res2) => {
          captchaEnabled.value = res2.captchaEnabled === void 0 ? true : res2.captchaEnabled;
          if (captchaEnabled.value) {
            codeUrl.value = "data:image/gif;base64," + res2.img;
            loginForm.value.uuid = res2.uuid;
          }
        });
      };
      const handleReg = async () => {
        uni.navigateTo({
          url: "/pages/register"
        });
      };
      const handleLogin = async () => {
        if (loginForm.value.username === "") {
          proxy.$modal.msgError("请输入您的账号");
        } else if (loginForm.value.password === "") {
          proxy.$modal.msgError("请输入您的密码");
        } else if (loginForm.value.code === "" && captchaEnabled.value) {
          proxy.$modal.msgError("请输入验证码");
        } else {
          proxy.$modal.loading("登录中，请耐心等待...");
          pwdLogin();
        }
      };
      const pwdLogin = async () => {
        userStore.login(loginForm.value).then(() => {
          proxy.$modal.closeLoading();
          loginSuccess();
        }).catch(() => {
          proxy.$modal.closeLoading();
          if (captchaEnabled.value) {
            getCode();
          }
        });
      };
      const loginSuccess = async (result) => {
        await userStore.getInfo().then((res2) => {
          uni.reLaunch({
            url: "/pages/home/index"
          });
        });
      };
      getCode();
      const __returned__ = { userStore, proxy, statusBarHeight, navHeight: navHeight$1, codeUrl, captchaEnabled, register: register2, globalConfig, loginForm, needLogin, handleUserRegister, handlePrivacy, handleUserAgrement, getCode, handleReg, handleLogin, pwdLogin, loginSuccess, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get getCodeImg() {
        return getCodeImg;
      }, get getInfo() {
        return getInfo;
      }, get getToken() {
        return getToken;
      }, get useUserStore() {
        return useUserStore;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "normal-login-container" }, [
      vue.createElementVNode("view", { class: "logo-content align-center justify-center flex" }, [
        vue.createElementVNode("image", {
          style: { "width": "200rpx", "height": "200rpx" },
          src: $setup.globalConfig.appInfo.logo,
          mode: "widthFix"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { style: { "display": "flex", "align-items": "center", "justify-content": "center", "font-size": "21px" } }, [
        vue.createElementVNode(
          "text",
          { class: "title" },
          "欢迎使用" + vue.toDisplayString($setup.globalConfig.appInfo.name) + "系统",
          1
          /* TEXT */
        )
      ]),
      $setup.needLogin == true ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "login-form-content"
      }, [
        vue.createElementVNode("view", { class: "input-item flex align-center" }, [
          vue.createVNode(_component_uni_icons, {
            class: "icon",
            type: "person",
            color: "#3498db",
            size: "30"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.loginForm.username = $event),
              class: "input",
              type: "text",
              placeholder: "请输入账号",
              maxlength: "30"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loginForm.username]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-item flex align-center" }, [
          vue.createVNode(_component_uni_icons, {
            class: "icon",
            type: "locked",
            color: "#3498db",
            size: "30"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.loginForm.password = $event),
              type: "password",
              password: "true",
              class: "input",
              placeholder: "请输入密码",
              maxlength: "20"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loginForm.password]
          ])
        ]),
        $setup.captchaEnabled ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "input-item flex align-center",
          style: { "width": "60%", "margin": "0px" }
        }, [
          vue.createVNode(_component_uni_icons, {
            class: "icon",
            type: "chat",
            color: "#3498db",
            size: "30"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.loginForm.code = $event),
              type: "number",
              class: "input",
              placeholder: "请输入验证码",
              maxlength: "4"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loginForm.code]
          ]),
          vue.createElementVNode("view", { class: "login-code" }, [
            vue.createElementVNode("image", {
              src: $setup.codeUrl,
              onClick: $setup.getCode,
              class: "login-code-img"
            }, null, 8, ["src"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "action-btn" }, [
          vue.createElementVNode("button", {
            onClick: $setup.handleLogin,
            class: "login-btn cu-btn block bg-blue lg round"
          }, "登录")
        ]),
        vue.createElementVNode("view", { class: "xieyi text-center" }, [
          vue.createElementVNode("text", { class: "text-grey1" }, "登录即代表同意"),
          vue.createElementVNode("text", {
            onClick: $setup.handleUserAgrement,
            class: "text-blue"
          }, "《用户协议》"),
          vue.createElementVNode("text", {
            onClick: $setup.handlePrivacy,
            class: "text-blue"
          }, "《隐私协议》")
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesLogin = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-e8ce220f"], ["__file", "D:/workfile/FoodWebApp/pages/login.vue"]]);
  const svpProps = {
    src: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    web: {
      type: Boolean,
      default: false
    },
    inherit: {
      type: Boolean,
      default: false
    }
  };
  function svgToDataUrl(svgString) {
    const encodedSvg = encodeURIComponent(svgString).replace(/\+/g, "%20");
    return `data:image/svg+xml,${encodedSvg}`;
  }
  const _sfc_main$B = vue.defineComponent({
    // name: 'l-svg',
    props: svpProps,
    emits: ["load", "error", "click"],
    setup(props, { emit }) {
      const path = vue.ref("");
      const isInherit = vue.computed(() => {
        return props.color != "";
      });
      const formatUrl = (url, action) => {
        if (url.indexOf(`'`) > 0)
          return `${action}("${url}")`;
        return `${action}('${url}')`;
      };
      vue.getCurrentInstance().proxy;
      const imageURL = vue.ref(null);
      const styles = vue.computed(() => {
        const style = {};
        if (path.value != "") {
          const image2 = formatUrl(imageURL.value || path.value, "url");
          if (isInherit.value) {
            style["-webkit-mask-image"] = image2;
            style["mask-image"] = image2;
          } else {
            style["background-image"] = image2;
          }
        }
        if (props.color != "") {
          style["color"] = props.color;
        }
        return style;
      });
      const onLoad2 = (e2) => {
        emit("load");
      };
      const onError = () => {
        emit("error");
      };
      vue.watchEffect(() => {
        if (props.src == "")
          return;
        if (props.src.startsWith("<svg")) {
          path.value = svgToDataUrl(props.src);
        } else if (props.src.startsWith("/static")) {
          path.value = props.src.slice(1);
        } else {
          path.value = props.src;
        }
      });
      return {
        path,
        onLoad: onLoad2,
        onError,
        isInherit,
        styles
      };
    }
  });
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["l-svg", { "is-inherit": _ctx.isInherit }]),
        style: vue.normalizeStyle([_ctx.styles]),
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("click"))
      },
      [
        vue.createElementVNode("image", {
          class: "l-svg-img",
          src: _ctx.path,
          onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onLoad && _ctx.onLoad(...args)),
          onError: _cache[1] || (_cache[1] = (...args) => _ctx.onError && _ctx.onError(...args))
        }, null, 40, ["src"])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-82df574c"], ["__file", "D:/workfile/FoodWebApp/uni_modules/lime-svg/components/l-svg/l-svg.vue"]]);
  const accessibility = "";
  const activity = "";
  const add = "";
  const adjustment = "";
  const alarm = "";
  const alpha = "";
  const analytics = "";
  const anchor = "";
  const angry = "";
  const animation = "";
  const anticlockwise = "";
  const api = "";
  const app = "";
  const apple = "";
  const application = "";
  const archway = "";
  const artboard = "";
  const article = "";
  const assignment = "";
  const attach = "";
  const attic = "";
  const audio = "";
  const awkward = "";
  const backtop = "";
  const backup = "";
  const backward = "";
  const banana = "";
  const barbecue = "";
  const barcode = "";
  const battery = "";
  const bean = "";
  const beer = "";
  const beta = "";
  const bifurcate = "";
  const bill = "";
  const bluetooth = "";
  const bone = "";
  const book = "";
  const bookmark = "";
  const braces = "";
  const brackets = "";
  const bread = "";
  const bridge = "";
  const brightness = "";
  const broccoli = "";
  const browse = "";
  const brush = "";
  const bug = "";
  const building = "";
  const bulletpoint = "";
  const button = "";
  const cabbage = "";
  const cake = "";
  const calculation = "";
  const calculator = "";
  const calendar = "";
  const call = "";
  const calm = "";
  const camera = "";
  const candy = "";
  const card = "";
  const cardmembership = "";
  const cart = "";
  const cast = "";
  const castle = "";
  const cat = "";
  const catalog = "";
  const cd = "";
  const celsius = "";
  const centimeter = "";
  const certificate = "";
  const chart = "";
  const chat = "";
  const check = "";
  const cheese = "";
  const cherry = "";
  const chicken = "";
  const chili = "";
  const chimney = "";
  const church = "";
  const circle = "";
  const city = "";
  const clear = "";
  const close = "";
  const cloud = "";
  const code = "";
  const cola = "";
  const collage = "";
  const collection = "";
  const combination = "";
  const command = "";
  const compass = "";
  const constraint = "";
  const contrast = "";
  const cooperate = "";
  const copy = "";
  const copyright = "";
  const corn = "";
  const coupon = "";
  const course = "";
  const cpu = "";
  const crack = "";
  const creditcard = "";
  const css3 = "";
  const cucumber = "";
  const cursor = "";
  const curtain = "";
  const curve = "";
  const cut = "";
  const dam = "";
  const dashboard = "";
  const data = "";
  const delta = "";
  const depressed = "";
  const desktop = "";
  const despise = "";
  const device = "";
  const discount = "";
  const dissatisfaction = "";
  const divide = "";
  const dividers = "";
  const doge = "";
  const download = "";
  const downscale = "";
  const drink = "";
  const drumstick = "";
  const dv = "";
  const dvd = "";
  const earphone = "";
  const earth = "";
  const edit = "";
  const education = "";
  const eggplant = "";
  const ellipsis = "";
  const enter = "";
  const equal = "";
  const error = "";
  const excited = "";
  const explore = "";
  const exposure = "";
  const extension = "";
  const ferocious = "";
  const file = "";
  const film = "";
  const filter = "";
  const fingerprint = "";
  const fish = "";
  const flag = "";
  const flashlight = "";
  const focus = "";
  const fog = "";
  const folder = "";
  const forest = "";
  const fork = "";
  const form = "";
  const forward = "";
  const frame = "";
  const fries = "";
  const fullscreen = "";
  const functions = "";
  const gamepad = "";
  const gamma = "";
  const garlic = "";
  const gift = "";
  const giggle = "";
  const gps = "";
  const grape = "";
  const guitar = "";
  const hamburger = "";
  const happy = "";
  const hashtag = "";
  const hd = "";
  const heart = "";
  const help = "";
  const highlight = "";
  const history = "";
  const home = "";
  const horizontal = "";
  const hospital = "";
  const hourglass = "";
  const houses = "";
  const html5 = "";
  const https = "";
  const icon = "";
  const image = "";
  const indicator = "";
  const ink = "";
  const install = "";
  const institution = "";
  const internet = "";
  const ipod = "";
  const joyful = "";
  const jump = "";
  const key = "";
  const keyboard = "";
  const laptop = "";
  const layers = "";
  const layout = "";
  const leaderboard = "";
  const lemon = "";
  const lightbulb = "";
  const lighthouse = "";
  const link = "";
  const liquor = "";
  const list$1 = "";
  const load = "";
  const loading = "";
  const location$1 = "";
  const login = "";
  const logout = "";
  const loudspeaker = "";
  const mail = "";
  const map = "";
  const markup = "";
  const mathematics = "";
  const measurement = "";
  const member = "";
  const menu = "";
  const microphone = "";
  const milk = "";
  const minus = "";
  const mirror = "";
  const mobile = "";
  const module = "";
  const money = "";
  const monument = "";
  const moon = "";
  const more = "";
  const mosque = "";
  const mouse = "";
  const move = "";
  const multiply = "";
  const museum = "";
  const mushroom = "";
  const music = "";
  const next = "";
  const noodle = "";
  const notification = "";
  const nut = "";
  const opera = "";
  const outbox = "";
  const palace = "";
  const palette = "";
  const pantone = "";
  const parabola = "";
  const parentheses = "";
  const paste = "";
  const patio = "";
  const pause = "";
  const pea = "";
  const peach = "";
  const pear = "";
  const pen = "";
  const pending = "";
  const percent = "";
  const pi = "";
  const piano = "";
  const pin = "";
  const play = "";
  const plus$1 = "";
  const popsicle = "";
  const portrait = "";
  const pout = "";
  const poweroff = "";
  const previous = "";
  const print = "";
  const pumpkin = "";
  const pyramid = "";
  const qrcode = "";
  const quadratic = "";
  const questionnaire = "";
  const queue = "";
  const radar = "";
  const radish = "";
  const rainbow = "";
  const rectangle = "";
  const refresh = "";
  const relation = "";
  const relativity = "";
  const remove = "";
  const replay = "";
  const rice = "";
  const roast = "";
  const rocket = "";
  const rollback = "";
  const rollfront = "";
  const rotate = "";
  const rotation = "";
  const round = "";
  const rss = "";
  const ruler = "";
  const sandwich = "";
  const saturation = "";
  const sausage = "";
  const save = "";
  const scan = "";
  const screencast = "";
  const screenshot = "";
  const search = "";
  const secured = "";
  const send = "";
  const sensors = "";
  const sequence = "";
  const serenity = "";
  const server = "";
  const service = "";
  const setting = "";
  const share = "";
  const sharpness = "";
  const shimen = "";
  const shop = "";
  const shrimp = "";
  const shutter = "";
  const shutup = "";
  const sip = "";
  const sitemap = "";
  const slash = "";
  const sleep = "";
  const slice = "";
  const slideshow = "";
  const smile = "";
  const sneer = "";
  const snowflake = "";
  const sonic = "";
  const sound = "";
  const space = "";
  const speechless = "";
  const star = "";
  const stop = "";
  const store$1 = "";
  const subtitle = "";
  const sum = "";
  const sunny = "";
  const support = "";
  const surprised = "";
  const swap = "";
  const tab$1 = "";
  const table = "";
  const tag = "";
  const tangerinr = "";
  const tape = "";
  const task = "";
  const tea = "";
  const teahouse = "";
  const template = "";
  const temple = "";
  const terminal = "";
  const textbox = "";
  const theaters = "";
  const thunder = "";
  const thunderstorm = "";
  const ticket = "";
  const time = "";
  const tips = "";
  const tomato = "";
  const tools = "";
  const tornado = "";
  const tower = "";
  const town = "";
  const traffic = "";
  const transform = "";
  const translate = "";
  const tv = "";
  const typography = "";
  const uncomfortable = "";
  const undertake = "";
  const unhappy = "";
  const uninstall = "";
  const upload$1 = "";
  const upscale = "";
  const usb = "";
  const user = "";
  const usercase = "";
  const usergroup = "";
  const vehicle = "";
  const verified = "";
  const verify = "";
  const vertical = "";
  const video = "";
  const wallet = "";
  const watch = "";
  const watermelon = "";
  const wealth = "";
  const widget = "";
  const wifi = "";
  const window$1 = "";
  const windy = "";
  const wink = "";
  const work = "";
  const icons = {
    "accessibility-filled": "",
    accessibility,
    "activity-filled": "",
    activity,
    "add-and-subtract": "",
    "add-circle-filled": "",
    "add-circle": "",
    "add-rectangle-filled": "",
    "add-rectangle": "",
    add,
    "address-book-filled": "",
    "address-book": "",
    "adjustment-filled": "",
    adjustment,
    "airplay-wave-filled": "",
    "airplay-wave": "",
    "alarm-add-filled": "",
    "alarm-add": "",
    "alarm-filled": "",
    "alarm-off-filled": "",
    "alarm-off": "",
    alarm,
    "align-top": "",
    "align-vertical": "",
    alpha,
    "analytics-filled": "",
    analytics,
    anchor,
    "angry-filled": "",
    angry,
    "animation-1-filled": "",
    "animation-1": "",
    "animation-filled": "",
    animation,
    "anticlockwise-filled": "",
    anticlockwise,
    api,
    "app-filled": "",
    app,
    "apple-filled": "",
    apple,
    "application-filled": "",
    application,
    "architecture-hui-style-filled": "",
    "architecture-hui-style": "",
    "archway-1-filled": "",
    "archway-1": "",
    "archway-filled": "",
    archway,
    "arrow-down-circle-filled": "",
    "arrow-down-circle": "",
    "arrow-down-rectangle-filled": "",
    "arrow-down-rectangle": "",
    "arrow-down": "",
    "arrow-left-circle-filled": "",
    "arrow-left-circle": "",
    "arrow-left-down-circle-filled": "",
    "arrow-left-down-circle": "",
    "arrow-left-down": "",
    "arrow-left-right-1": "",
    "arrow-left-right-2": "",
    "arrow-left-right-3": "",
    "arrow-left-right-circle-filled": "",
    "arrow-left-right-circle": "",
    "arrow-left-up-circle-filled": "",
    "arrow-left-up-circle": "",
    "arrow-left-up": "",
    "arrow-left": "",
    "arrow-right-circle-filled": "",
    "arrow-right-circle": "",
    "arrow-right-down-circle-filled": "",
    "arrow-right-down-circle": "",
    "arrow-right-down": "",
    "arrow-right-up-circle-filled": "",
    "arrow-right-up-circle": "",
    "arrow-right-up": "",
    "arrow-right": "",
    "arrow-triangle-down-filled": "",
    "arrow-triangle-down": "",
    "arrow-triangle-up-filled": "",
    "arrow-triangle-up": "",
    "arrow-up-circle-filled": "",
    "arrow-up-circle": "",
    "arrow-up-down-1": "",
    "arrow-up-down-2": "",
    "arrow-up-down-3": "",
    "arrow-up-down-circle-filled": "",
    "arrow-up-down-circle": "",
    "arrow-up": "",
    artboard,
    "article-filled": "",
    article,
    "assignment-checked-filled": "",
    "assignment-checked": "",
    "assignment-code-filled": "",
    "assignment-code": "",
    "assignment-error-filled": "",
    "assignment-error": "",
    "assignment-filled": "",
    "assignment-user-filled": "",
    "assignment-user": "",
    assignment,
    attach,
    "attic-1-filled": "",
    "attic-1": "",
    "attic-filled": "",
    attic,
    "audio-filled": "",
    audio,
    "awkward-filled": "",
    awkward,
    "backtop-rectangle-filled": "",
    "backtop-rectangle": "",
    backtop,
    "backup-filled": "",
    backup,
    "backward-filled": "",
    backward,
    "bad-laugh-filled": "",
    "bad-laugh": "",
    "bamboo-shoot-filled": "",
    "bamboo-shoot": "",
    "banana-filled": "",
    banana,
    "barbecue-filled": "",
    barbecue,
    "barcode-1": "",
    barcode,
    "base-station": "",
    "battery-add-filled": "",
    "battery-add": "",
    "battery-charging-filled": "",
    "battery-charging": "",
    "battery-filled": "",
    "battery-low-filled": "",
    "battery-low": "",
    battery,
    "bean-filled": "",
    bean,
    "beer-filled": "",
    beer,
    beta,
    "bifurcate-filled": "",
    bifurcate,
    "bill-filled": "",
    bill,
    bluetooth,
    "bone-filled": "",
    bone,
    "book-filled": "",
    "book-open-filled": "",
    "book-open": "",
    "book-unknown-filled": "",
    "book-unknown": "",
    book,
    "bookmark-add-filled": "",
    "bookmark-add": "",
    "bookmark-checked-filled": "",
    "bookmark-checked": "",
    "bookmark-double-filled": "",
    "bookmark-double": "",
    "bookmark-filled": "",
    "bookmark-minus-filled": "",
    "bookmark-minus": "",
    bookmark,
    braces,
    brackets,
    "bread-filled": "",
    bread,
    "bridge-1-filled": "",
    "bridge-1": "",
    "bridge-2-filled": "",
    "bridge-2": "",
    "bridge-3": "",
    "bridge-4": "",
    "bridge-5-filled": "",
    "bridge-5": "",
    "bridge-6-filled": "",
    "bridge-6": "",
    bridge,
    "brightness-1-filled": "",
    "brightness-1": "",
    "brightness-filled": "",
    brightness,
    "broccoli-filled": "",
    broccoli,
    "browse-filled": "",
    "browse-gallery-filled": "",
    "browse-gallery": "",
    "browse-off-filled": "",
    "browse-off": "",
    browse,
    "brush-filled": "",
    brush,
    "bug-filled": "",
    "bug-report-filled": "",
    "bug-report": "",
    bug,
    "building-1-filled": "",
    "building-1": "",
    "building-2-filled": "",
    "building-2": "",
    "building-3-filled": "",
    "building-3": "",
    "building-4-filled": "",
    "building-4": "",
    "building-5-filled": "",
    "building-5": "",
    "building-filled": "",
    building,
    bulletpoint,
    "button-filled": "",
    button,
    "cabbage-filled": "",
    cabbage,
    "cake-filled": "",
    cake,
    "calculation-1-filled": "",
    "calculation-1": "",
    calculation,
    "calculator-1": "",
    "calculator-filled": "",
    calculator,
    "calendar-1-filled": "",
    "calendar-1": "",
    "calendar-2-filled": "",
    "calendar-2": "",
    "calendar-edit-filled": "",
    "calendar-edit": "",
    "calendar-event-filled": "",
    "calendar-event": "",
    "calendar-filled": "",
    calendar,
    "call-1-filled": "",
    "call-1": "",
    "call-cancel-filled": "",
    "call-cancel": "",
    "call-filled": "",
    "call-forwarded-filled": "",
    "call-forwarded": "",
    "call-incoming-filled": "",
    "call-incoming": "",
    "call-off-filled": "",
    "call-off": "",
    call,
    "calm-1-filled": "",
    "calm-1": "",
    "calm-filled": "",
    calm,
    "camera-1-filled": "",
    "camera-1": "",
    "camera-2-filled": "",
    "camera-2": "",
    "camera-filled": "",
    "camera-off-filled": "",
    "camera-off": "",
    camera,
    "candy-filled": "",
    candy,
    "card-filled": "",
    card,
    "cardmembership-filled": "",
    cardmembership,
    "caret-down-small": "",
    "caret-down": "",
    "caret-left-small": "",
    "caret-left": "",
    "caret-right-small": "",
    "caret-right": "",
    "caret-up-small": "",
    "caret-up": "",
    "cart-add-filled": "",
    "cart-add": "",
    "cart-filled": "",
    cart,
    "cast-filled": "",
    cast,
    "castle-1-filled": "",
    "castle-1": "",
    "castle-2-filled": "",
    "castle-2": "",
    "castle-3-filled": "",
    "castle-3": "",
    "castle-4-filled": "",
    "castle-4": "",
    "castle-5-filled": "",
    "castle-5": "",
    "castle-6-filled": "",
    "castle-6": "",
    "castle-7-filled": "",
    "castle-7": "",
    "castle-filled": "",
    castle,
    "cat-filled": "",
    cat,
    "catalog-filled": "",
    catalog,
    "cd-filled": "",
    cd,
    celsius,
    "center-focus-strong-filled": "",
    "center-focus-strong": "",
    centimeter,
    "certificate-1-filled": "",
    "certificate-1": "",
    "certificate-filled": "",
    certificate,
    "chart-3d-filled": "",
    "chart-3d": "",
    "chart-add-filled": "",
    "chart-add": "",
    "chart-analytics": "",
    "chart-area-filled": "",
    "chart-area-multi-filled": "",
    "chart-area-multi": "",
    "chart-area": "",
    "chart-bar-filled": "",
    "chart-bar": "",
    "chart-bubble-filled": "",
    "chart-bubble": "",
    "chart-column-filled": "",
    "chart-column": "",
    "chart-combo-filled": "",
    "chart-combo": "",
    "chart-filled": "",
    "chart-line-data-1": "",
    "chart-line-data": "",
    "chart-line-multi": "",
    "chart-line": "",
    "chart-maximum": "",
    "chart-median": "",
    "chart-minimum": "",
    "chart-pie-filled": "",
    "chart-pie": "",
    "chart-radar-filled": "",
    "chart-radar": "",
    "chart-radial": "",
    "chart-ring-1-filled": "",
    "chart-ring-1": "",
    "chart-ring-filled": "",
    "chart-ring": "",
    "chart-scatter": "",
    "chart-stacked-filled": "",
    "chart-stacked": "",
    chart,
    "chat-add-filled": "",
    "chat-add": "",
    "chat-bubble-1-filled": "",
    "chat-bubble-1": "",
    "chat-bubble-add-filled": "",
    "chat-bubble-add": "",
    "chat-bubble-error-filled": "",
    "chat-bubble-error": "",
    "chat-bubble-filled": "",
    "chat-bubble-help-filled": "",
    "chat-bubble-help": "",
    "chat-bubble-history-filled": "",
    "chat-bubble-history": "",
    "chat-bubble-locked-filled": "",
    "chat-bubble-locked": "",
    "chat-bubble-smile-filled": "",
    "chat-bubble-smile": "",
    "chat-bubble": "",
    "chat-checked-filled": "",
    "chat-checked": "",
    "chat-clear-filled": "",
    "chat-clear": "",
    "chat-double-filled": "",
    "chat-double": "",
    "chat-error-filled": "",
    "chat-error": "",
    "chat-filled": "",
    "chat-heart-filled": "",
    "chat-heart": "",
    "chat-message-filled": "",
    "chat-message": "",
    "chat-off-filled": "",
    "chat-off": "",
    "chat-poll-filled": "",
    "chat-poll": "",
    "chat-setting-filled": "",
    "chat-setting": "",
    chat,
    "check-circle-filled": "",
    "check-circle": "",
    "check-double": "",
    "check-rectangle-filled": "",
    "check-rectangle": "",
    check,
    "cheese-filled": "",
    cheese,
    "cherry-filled": "",
    cherry,
    "chevron-down-circle-filled": "",
    "chevron-down-circle": "",
    "chevron-down-double-s": "",
    "chevron-down-double": "",
    "chevron-down-rectangle-filled": "",
    "chevron-down-rectangle": "",
    "chevron-down-s": "",
    "chevron-down": "",
    "chevron-left-circle-filled": "",
    "chevron-left-circle": "",
    "chevron-left-double-s": "",
    "chevron-left-double": "",
    "chevron-left-rectangle-filled": "",
    "chevron-left-rectangle": "",
    "chevron-left-s": "",
    "chevron-left": "",
    "chevron-right-circle-filled": "",
    "chevron-right-circle": "",
    "chevron-right-double-s": "",
    "chevron-right-double": "",
    "chevron-right-rectangle-filled": "",
    "chevron-right-rectangle": "",
    "chevron-right-s": "",
    "chevron-right": "",
    "chevron-up-circle-filled": "",
    "chevron-up-circle": "",
    "chevron-up-double-s": "",
    "chevron-up-double": "",
    "chevron-up-rectangle-filled": "",
    "chevron-up-rectangle": "",
    "chevron-up-s": "",
    "chevron-up": "",
    chicken,
    "chili-filled": "",
    chili,
    "chimney-1-filled": "",
    "chimney-1": "",
    "chimney-2-filled": "",
    "chimney-2": "",
    "chimney-filled": "",
    chimney,
    "chinese-cabbage-filled": "",
    "chinese-cabbage": "",
    "church-filled": "",
    church,
    "circle-filled": "",
    circle,
    "city-1-filled": "",
    "city-1": "",
    "city-10-filled": "",
    "city-10": "",
    "city-11-filled": "",
    "city-11": "",
    "city-12-filled": "",
    "city-12": "",
    "city-13-filled": "",
    "city-13": "",
    "city-14-filled": "",
    "city-14": "",
    "city-15-filled": "",
    "city-15": "",
    "city-2-filled": "",
    "city-2": "",
    "city-3-filled": "",
    "city-3": "",
    "city-4-filled": "",
    "city-4": "",
    "city-5-filled": "",
    "city-5": "",
    "city-6-filled": "",
    "city-6": "",
    "city-7-filled": "",
    "city-7": "",
    "city-8-filled": "",
    "city-8": "",
    "city-9-filled": "",
    "city-9": "",
    "city-ancient-1-filled": "",
    "city-ancient-1": "",
    "city-ancient-2-filled": "",
    "city-ancient-2": "",
    "city-ancient-filled": "",
    "city-ancient": "",
    "city-filled": "",
    city,
    "clear-filled": "",
    "clear-formatting-1-filled": "",
    "clear-formatting-1": "",
    "clear-formatting-filled": "",
    "clear-formatting": "",
    clear,
    "close-circle-filled": "",
    "close-circle": "",
    "close-octagon-filled": "",
    "close-octagon": "",
    "close-rectangle-filled": "",
    "close-rectangle": "",
    close,
    "cloud-download": "",
    "cloud-filled": "",
    "cloud-upload": "",
    cloud,
    "cloudy-day-filled": "",
    "cloudy-day": "",
    "cloudy-night-filled": "",
    "cloudy-night-rain-filled": "",
    "cloudy-night-rain": "",
    "cloudy-night": "",
    "cloudy-rain-filled": "",
    "cloudy-rain": "",
    "cloudy-sunny-filled": "",
    "cloudy-sunny": "",
    "code-1": "",
    "code-off": "",
    code,
    "cola-filled": "",
    cola,
    "collage-filled": "",
    collage,
    "collection-filled": "",
    collection,
    "color-invert-filled": "",
    "color-invert": "",
    "combination-filled": "",
    combination,
    command,
    "compass-1-filled": "",
    "compass-1": "",
    "compass-filled": "",
    compass,
    "component-breadcrumb-filled": "",
    "component-breadcrumb": "",
    "component-checkbox-filled": "",
    "component-checkbox": "",
    "component-divider-horizontal-filled": "",
    "component-divider-horizontal": "",
    "component-divider-vertical-filled": "",
    "component-divider-vertical": "",
    "component-dropdown-filled": "",
    "component-dropdown": "",
    "component-grid-filled": "",
    "component-grid": "",
    "component-input-filled": "",
    "component-input": "",
    "component-layout-filled": "",
    "component-layout": "",
    "component-radio": "",
    "component-space-filled": "",
    "component-space": "",
    "component-steps-filled": "",
    "component-steps": "",
    "component-switch-filled": "",
    "component-switch": "",
    constraint,
    "contrast-1-filled": "",
    "contrast-1": "",
    "contrast-filled": "",
    contrast,
    "control-platform-filled": "",
    "control-platform": "",
    "cooperate-filled": "",
    cooperate,
    "coordinate-system-filled": "",
    "coordinate-system": "",
    "copy-filled": "",
    copy,
    "copyright-filled": "",
    copyright,
    "corn-filled": "",
    corn,
    "coupon-filled": "",
    coupon,
    "course-filled": "",
    course,
    "cpu-filled": "",
    cpu,
    "crack-filled": "",
    crack,
    "creditcard-add-filled": "",
    "creditcard-add": "",
    "creditcard-filled": "",
    "creditcard-off-filled": "",
    "creditcard-off": "",
    creditcard,
    "crooked-smile-filled": "",
    "crooked-smile": "",
    "cry-and-laugh-filled": "",
    "cry-and-laugh": "",
    "cry-loudly-filled": "",
    "cry-loudly": "",
    "css3-filled": "",
    css3,
    cucumber,
    "currency-exchange": "",
    "cursor-filled": "",
    cursor,
    "curtain-filled": "",
    curtain,
    curve,
    "cut-1": "",
    cut,
    "dam-1-filled": "",
    "dam-1": "",
    "dam-2-filled": "",
    "dam-2": "",
    "dam-3-filled": "",
    "dam-3": "",
    "dam-4-filled": "",
    "dam-4": "",
    "dam-5-filled": "",
    "dam-5": "",
    "dam-6-filled": "",
    "dam-6": "",
    "dam-7-filled": "",
    "dam-7": "",
    "dam-filled": "",
    dam,
    "dart-board-filled": "",
    "dart-board": "",
    "dashboard-1-filled": "",
    "dashboard-1": "",
    "dashboard-filled": "",
    dashboard,
    "data-filled": "",
    "data-base-filled": "",
    "data-base": "",
    "data-checked-filled": "",
    "data-checked": "",
    "data-display": "",
    "data-error-filled": "",
    "data-error": "",
    "data-search-filled": "",
    "data-search": "",
    data,
    "delete-1-filled": "",
    "delete-1": "",
    "delete-filled": "",
    "delete-time-filled": "",
    "delete-time": "",
    "delete": "",
    "delta-filled": "",
    delta,
    "depressed-filled": "",
    depressed,
    "desktop-1-filled": "",
    "desktop-1": "",
    "desktop-filled": "",
    desktop,
    "despise-filled": "",
    despise,
    "device-filled": "",
    device,
    "discount-filled": "",
    discount,
    "dissatisfaction-filled": "",
    dissatisfaction,
    divide,
    "dividers-1": "",
    dividers,
    "doge-filled": "",
    doge,
    "double-storey-filled": "",
    "double-storey": "",
    "download-1": "",
    "download-2-filled": "",
    "download-2": "",
    download,
    downscale,
    "drag-drop": "",
    "drag-move": "",
    "drink-filled": "",
    drink,
    "drumstick-filled": "",
    drumstick,
    "dv-filled": "",
    dv,
    "dvd-filled": "",
    dvd,
    "earphone-filled": "",
    earphone,
    "earth-filled": "",
    earth,
    "edit-1-filled": "",
    "edit-1": "",
    "edit-2-filled": "",
    "edit-2": "",
    "edit-filled": "",
    "edit-off-filled": "",
    "edit-off": "",
    edit,
    "education-filled": "",
    education,
    "eggplant-filled": "",
    eggplant,
    ellipsis,
    "emo-emotional-filled": "",
    "emo-emotional": "",
    enter,
    equal,
    "error-circle-filled": "",
    "error-circle": "",
    "error-triangle-filled": "",
    "error-triangle": "",
    error,
    "excited-1-filled": "",
    "excited-1": "",
    "excited-filled": "",
    excited,
    "expand-down-filled": "",
    "expand-down": "",
    "expand-horizontal": "",
    "expand-up-filled": "",
    "expand-up": "",
    "expand-vertical": "",
    "explore-filled": "",
    "explore-off-filled": "",
    "explore-off": "",
    explore,
    "exposure-filled": "",
    exposure,
    "extension-filled": "",
    "extension-off-filled": "",
    "extension-off": "",
    extension,
    "face-retouching-filled": "",
    "face-retouching": "",
    "fact-check-filled": "",
    "fact-check": "",
    "fahrenheit-scale": "",
    "feel-at-ease-filled": "",
    "feel-at-ease": "",
    "ferocious-filled": "",
    ferocious,
    "ferris-wheel-filled": "",
    "ferris-wheel": "",
    "file-1-filled": "",
    "file-1": "",
    "file-add-1-filled": "",
    "file-add-1": "",
    "file-add-filled": "",
    "file-add": "",
    "file-attachment-filled": "",
    "file-attachment": "",
    "file-blocked-filled": "",
    "file-blocked": "",
    "file-code-1-filled": "",
    "file-code-1": "",
    "file-code-filled": "",
    "file-code": "",
    "file-copy-filled": "",
    "file-copy": "",
    "file-download-filled": "",
    "file-download": "",
    "file-excel-filled": "",
    "file-excel": "",
    "file-export-filled": "",
    "file-export": "",
    "file-filled": "",
    "file-icon-filled": "",
    "file-icon": "",
    "file-image-filled": "",
    "file-image": "",
    "file-import-filled": "",
    "file-import": "",
    "file-locked-filled": "",
    "file-locked": "",
    "file-minus-filled": "",
    "file-minus": "",
    "file-music-filled": "",
    "file-music": "",
    "file-onenote-filled": "",
    "file-onenote": "",
    "file-outlook-filled": "",
    "file-outlook": "",
    "file-paste-filled": "",
    "file-paste": "",
    "file-pdf-filled": "",
    "file-pdf": "",
    "file-powerpoint-filled": "",
    "file-powerpoint": "",
    "file-restore-filled": "",
    "file-restore": "",
    "file-safety-filled": "",
    "file-safety": "",
    "file-search-filled": "",
    "file-search": "",
    "file-setting-filled": "",
    "file-setting": "",
    "file-teams-filled": "",
    "file-teams": "",
    "file-transmit-double-filled": "",
    "file-transmit-double": "",
    "file-transmit-filled": "",
    "file-transmit": "",
    "file-unknown-filled": "",
    "file-unknown": "",
    "file-unlocked-filled": "",
    "file-unlocked": "",
    "file-word-filled": "",
    "file-word": "",
    "file-zip-filled": "",
    "file-zip": "",
    file,
    "fill-color-1-filled": "",
    "fill-color-1": "",
    "fill-color-filled": "",
    "fill-color": "",
    "film-1-filled": "",
    "film-1": "",
    "film-filled": "",
    film,
    "filter-1-filled": "",
    "filter-1": "",
    "filter-2-filled": "",
    "filter-2": "",
    "filter-3-filled": "",
    "filter-3": "",
    "filter-clear-filled": "",
    "filter-clear": "",
    "filter-filled": "",
    "filter-off-filled": "",
    "filter-off": "",
    "filter-sort-filled": "",
    "filter-sort": "",
    filter,
    "fingerprint-1": "",
    "fingerprint-2": "",
    "fingerprint-3": "",
    fingerprint,
    "fish-filled": "",
    fish,
    "flag-1-filled": "",
    "flag-1": "",
    "flag-2-filled": "",
    "flag-2": "",
    "flag-3-filled": "",
    "flag-3": "",
    "flag-4-filled": "",
    "flag-4": "",
    "flag-filled": "",
    flag,
    "flashlight-filled": "",
    flashlight,
    "flight-landing-filled": "",
    "flight-landing": "",
    "flight-takeoff-filled": "",
    "flight-takeoff": "",
    "flip-smiling-face-filled": "",
    "flip-smiling-face": "",
    "flip-to-back-filled": "",
    "flip-to-back": "",
    "flip-to-front-filled": "",
    "flip-to-front": "",
    "focus-filled": "",
    focus,
    "fog-filled": "",
    "fog-night-filled": "",
    "fog-night": "",
    "fog-sunny-filled": "",
    "fog-sunny": "",
    fog,
    "folder-1-filled": "",
    "folder-1": "",
    "folder-add-1-filled": "",
    "folder-add-1": "",
    "folder-add-filled": "",
    "folder-add": "",
    "folder-blocked-filled": "",
    "folder-blocked": "",
    "folder-details-filled": "",
    "folder-details": "",
    "folder-export-filled": "",
    "folder-export": "",
    "folder-filled": "",
    "folder-import-filled": "",
    "folder-import": "",
    "folder-locked-filled": "",
    "folder-locked": "",
    "folder-minus-filled": "",
    "folder-minus": "",
    "folder-move-filled": "",
    "folder-move": "",
    "folder-off-filled": "",
    "folder-off": "",
    "folder-open-1-filled": "",
    "folder-open-1": "",
    "folder-open-filled": "",
    "folder-open": "",
    "folder-search-filled": "",
    "folder-search": "",
    "folder-setting-filled": "",
    "folder-setting": "",
    "folder-shared-filled": "",
    "folder-shared": "",
    "folder-unlocked-filled": "",
    "folder-unlocked": "",
    "folder-zip-filled": "",
    "folder-zip": "",
    folder,
    "forest-filled": "",
    forest,
    "fork-filled": "",
    fork,
    "form-filled": "",
    form,
    "format-horizontal-align-bottom": "",
    "format-horizontal-align-center": "",
    "format-horizontal-align-top": "",
    "format-vertical-align-center": "",
    "format-vertical-align-left": "",
    "format-vertical-align-right": "",
    "forward-filled": "",
    forward,
    "frame-1-filled": "",
    "frame-1": "",
    "frame-filled": "",
    frame,
    "fries-filled": "",
    fries,
    "fullscreen-1": "",
    "fullscreen-2": "",
    "fullscreen-exit-1": "",
    "fullscreen-exit": "",
    fullscreen,
    "function-curve": "",
    "functions-1": "",
    functions,
    "gamepad-1-filled": "",
    "gamepad-1": "",
    "gamepad-filled": "",
    gamepad,
    gamma,
    "garlic-filled": "",
    garlic,
    "gender-female": "",
    "gender-male": "",
    "gesture-applause-filled": "",
    "gesture-applause": "",
    "gesture-click-filled": "",
    "gesture-click": "",
    "gesture-down-filled": "",
    "gesture-down": "",
    "gesture-expansion-filled": "",
    "gesture-expansion": "",
    "gesture-left-filled": "",
    "gesture-left-slip-filled": "",
    "gesture-left-slip": "",
    "gesture-left": "",
    "gesture-open-filled": "",
    "gesture-open": "",
    "gesture-pray-filled": "",
    "gesture-pray": "",
    "gesture-press-filled": "",
    "gesture-press": "",
    "gesture-ranslation-filled": "",
    "gesture-ranslation": "",
    "gesture-right-filled": "",
    "gesture-right-slip-filled": "",
    "gesture-right-slip": "",
    "gesture-right": "",
    "gesture-slide-left-and-right-filled": "",
    "gesture-slide-left-and-right": "",
    "gesture-slide-up-filled": "",
    "gesture-slide-up": "",
    "gesture-typing-filled": "",
    "gesture-typing": "",
    "gesture-up-and-down-filled": "",
    "gesture-up-and-down": "",
    "gesture-up-filled": "",
    "gesture-up": "",
    "gesture-wipe-down-filled": "",
    "gesture-wipe-down": "",
    "gift-filled": "",
    gift,
    "giggle-filled": "",
    giggle,
    "git-branch-filled": "",
    "git-branch": "",
    "git-commit-filled": "",
    "git-commit": "",
    "git-merge-filled": "",
    "git-merge": "",
    "git-pull-request-filled": "",
    "git-pull-request": "",
    "git-repository-commits-filled": "",
    "git-repository-commits": "",
    "git-repository-filled": "",
    "git-repository-private-filled": "",
    "git-repository-private": "",
    "git-repository": "",
    "gps-filled": "",
    gps,
    "grape-filled": "",
    grape,
    "greater-than-or-equal": "",
    "greater-than": "",
    "green-onion": "",
    "grid-add-filled": "",
    "grid-add": "",
    "grid-view-filled": "",
    "grid-view": "",
    "guitar-filled": "",
    guitar,
    "hamburger-filled": "",
    hamburger,
    "happy-filled": "",
    happy,
    "hard-disk-storage-filled": "",
    "hard-disk-storage": "",
    "hard-drive-filled": "",
    "hard-drive": "",
    hashtag,
    "hd-filled": "",
    hd,
    "heart-filled": "",
    heart,
    "help-circle-filled": "",
    "help-circle": "",
    "help-rectangle-filled": "",
    "help-rectangle": "",
    help,
    "highlight-1-filled": "",
    "highlight-1": "",
    highlight,
    "history-setting": "",
    history,
    "home-filled": "",
    home,
    "horizontal-filled": "",
    horizontal,
    "hospital-1-filled": "",
    "hospital-1": "",
    "hospital-filled": "",
    hospital,
    "hotspot-wave-filled": "",
    "hotspot-wave": "",
    "hourglass-filled": "",
    hourglass,
    "houses-1-filled": "",
    "houses-1": "",
    "houses-2-filled": "",
    "houses-2": "",
    "houses-filled": "",
    houses,
    "html5-filled": "",
    html5,
    "https-filled": "",
    https,
    "ice-cream-filled": "",
    "ice-cream": "",
    "icon-filled": "",
    icon,
    "image-1-filled": "",
    "image-1": "",
    "image-add-filled": "",
    "image-add": "",
    "image-edit-filled": "",
    "image-edit": "",
    "image-error-filled": "",
    "image-error": "",
    "image-filled": "",
    "image-off-filled": "",
    "image-off": "",
    "image-search-filled": "",
    "image-search": "",
    image,
    "indent-left": "",
    "indent-right": "",
    "indicator-filled": "",
    indicator,
    "info-circle-filled": "",
    "info-circle": "",
    "ink-filled": "",
    ink,
    "install-desktop-filled": "",
    "install-desktop": "",
    "install-filled": "",
    "install-mobile-filled": "",
    "install-mobile": "",
    install,
    "institution-checked-filled": "",
    "institution-checked": "",
    "institution-filled": "",
    institution,
    "internet-filled": "",
    internet,
    "ipod-filled": "",
    ipod,
    "joyful-filled": "",
    joyful,
    "jump-double": "",
    "jump-off": "",
    jump,
    "key-filled": "",
    key,
    "keyboard-filled": "",
    keyboard,
    "laptop-filled": "",
    laptop,
    "layers-filled": "",
    layers,
    "layout-filled": "",
    layout,
    "leaderboard-filled": "",
    leaderboard,
    "lemon-filled": "",
    "lemon-slice-filled": "",
    "lemon-slice": "",
    lemon,
    "less-than-or-equal": "",
    "less-than": "",
    "letters-a": "",
    "letters-b": "",
    "letters-c": "",
    "letters-d": "",
    "letters-e": "",
    "letters-f": "",
    "letters-g": "",
    "letters-h": "",
    "letters-i": "",
    "letters-j": "",
    "letters-k": "",
    "letters-l": "",
    "letters-m": "",
    "letters-n": "",
    "letters-o": "",
    "letters-p": "",
    "letters-q": "",
    "letters-r": "",
    "letters-s": "",
    "letters-t": "",
    "letters-u": "",
    "letters-v": "",
    "letters-w": "",
    "letters-x": "",
    "letters-y": "",
    "letters-z": "",
    "lightbulb-circle-filled": "",
    "lightbulb-circle": "",
    "lightbulb-filled": "",
    lightbulb,
    "lighthouse-1-filled": "",
    "lighthouse-1": "",
    "lighthouse-2-filled": "",
    "lighthouse-2": "",
    "lighthouse-filled": "",
    lighthouse,
    "lighting-circle-filled": "",
    "lighting-circle": "",
    "line-height": "",
    "link-1": "",
    "link-unlink": "",
    link,
    "liquor-filled": "",
    liquor,
    "list-numbered": "",
    list: list$1,
    load,
    loading,
    "location-1-filled": "",
    "location-1": "",
    "location-enlargement-filled": "",
    "location-enlargement": "",
    "location-error-filled": "",
    "location-error": "",
    "location-filled": "",
    "location-parking-place-filled": "",
    "location-parking-place": "",
    "location-reduction-filled": "",
    "location-reduction": "",
    "location-setting-filled": "",
    "location-setting": "",
    location: location$1,
    "lock-off-filled": "",
    "lock-off": "",
    "lock-on-filled": "",
    "lock-on": "",
    "lock-time-filled": "",
    "lock-time": "",
    login,
    "logo-adobe-illustrate-filled": "",
    "logo-adobe-illustrate": "",
    "logo-adobe-lightroom-filled": "",
    "logo-adobe-lightroom": "",
    "logo-adobe-photoshop-filled": "",
    "logo-adobe-photoshop": "",
    "logo-android-filled": "",
    "logo-android": "",
    "logo-apple-filled": "",
    "logo-apple": "",
    "logo-behance": "",
    "logo-chrome-filled": "",
    "logo-chrome": "",
    "logo-cinema4d-filled": "",
    "logo-cinema4d": "",
    "logo-codepen": "",
    "logo-codesandbox": "",
    "logo-dribbble-filled": "",
    "logo-dribbble": "",
    "logo-facebook-filled": "",
    "logo-facebook": "",
    "logo-figma-filled": "",
    "logo-figma": "",
    "logo-framer-filled": "",
    "logo-framer": "",
    "logo-github-filled": "",
    "logo-github": "",
    "logo-gitlab-filled": "",
    "logo-gitlab": "",
    "logo-ie-filled": "",
    "logo-ie": "",
    "logo-instagram-filled": "",
    "logo-instagram": "",
    "logo-qq-filled": "",
    "logo-qq": "",
    "logo-twitter-filled": "",
    "logo-twitter": "",
    "logo-wechat-stroke-filled": "",
    "logo-wechat-stroke": "",
    "logo-wechatpay-filled": "",
    "logo-wechatpay": "",
    "logo-wecom-filled": "",
    "logo-wecom": "",
    "logo-windows-filled": "",
    "logo-windows": "",
    "logo-youtube-filled": "",
    "logo-youtube": "",
    logout,
    "look-around-filled": "",
    "look-around": "",
    "loudspeaker-filled": "",
    loudspeaker,
    "mail-filled": "",
    mail,
    "map-3d-filled": "",
    "map-3d": "",
    "map-add-filled": "",
    "map-add": "",
    "map-aiming-filled": "",
    "map-aiming": "",
    "map-blocked-filled": "",
    "map-blocked": "",
    "map-bubble-filled": "",
    "map-bubble": "",
    "map-cancel-filled": "",
    "map-cancel": "",
    "map-chat-filled": "",
    "map-chat": "",
    "map-checked-filled": "",
    "map-checked": "",
    "map-collection-filled": "",
    "map-collection": "",
    "map-connection-filled": "",
    "map-connection": "",
    "map-distance-filled": "",
    "map-distance": "",
    "map-double-filled": "",
    "map-double": "",
    "map-edit-filled": "",
    "map-edit": "",
    "map-filled": "",
    "map-grid-filled": "",
    "map-grid": "",
    "map-information-1-filled": "",
    "map-information-1": "",
    "map-information-2-filled": "",
    "map-information-2": "",
    "map-information-filled": "",
    "map-information": "",
    "map-location-filled": "",
    "map-location": "",
    "map-locked-filled": "",
    "map-locked": "",
    "map-marked-filled": "",
    "map-marked": "",
    "map-navigation-filled": "",
    "map-navigation": "",
    "map-outline-filled": "",
    "map-outline": "",
    "map-route-planning-filled": "",
    "map-route-planning": "",
    "map-ruler-filled": "",
    "map-ruler": "",
    "map-safety-filled": "",
    "map-safety": "",
    "map-search-1-filled": "",
    "map-search-1": "",
    "map-search-filled": "",
    "map-search": "",
    "map-setting-filled": "",
    "map-setting": "",
    "map-unlocked-filled": "",
    "map-unlocked": "",
    map,
    "mark-as-unread-filled": "",
    "mark-as-unread": "",
    "markup-filled": "",
    markup,
    "mathematics-filled": "",
    mathematics,
    "measurement-1-filled": "",
    "measurement-1": "",
    "measurement-2-filled": "",
    "measurement-2": "",
    "measurement-filled": "",
    measurement,
    "meat-pepper-filled": "",
    "meat-pepper": "",
    "media-library-filled": "",
    "media-library": "",
    "member-filled": "",
    member,
    "menu-application": "",
    "menu-filled": "",
    "menu-fold": "",
    "menu-unfold": "",
    menu,
    "merge-cells-filled": "",
    "merge-cells": "",
    "microphone-1-filled": "",
    "microphone-1": "",
    "microphone-2-filled": "",
    "microphone-2": "",
    "microphone-filled": "",
    microphone,
    "milk-filled": "",
    milk,
    "minus-circle-filled": "",
    "minus-circle": "",
    "minus-rectangle-filled": "",
    "minus-rectangle": "",
    minus,
    "mirror-filled": "",
    mirror,
    "mobile-blocked-filled": "",
    "mobile-blocked": "",
    "mobile-filled": "",
    "mobile-list-filled": "",
    "mobile-list": "",
    "mobile-navigation-filled": "",
    "mobile-navigation": "",
    "mobile-shortcut-filled": "",
    "mobile-shortcut": "",
    "mobile-vibrate-filled": "",
    "mobile-vibrate": "",
    mobile,
    "mode-dark-filled": "",
    "mode-dark": "",
    "mode-light-filled": "",
    "mode-light": "",
    "module-filled": "",
    module,
    "money-filled": "",
    money,
    "monument-filled": "",
    monument,
    "moon-fall-filled": "",
    "moon-fall": "",
    "moon-filled": "",
    "moon-rising-filled": "",
    "moon-rising": "",
    moon,
    more,
    "mosque-1-filled": "",
    "mosque-1": "",
    "mosque-filled": "",
    mosque,
    "mouse-filled": "",
    mouse,
    "move-1": "",
    move,
    "movie-clapper-filled": "",
    "movie-clapper": "",
    multiply,
    "museum-1-filled": "",
    "museum-1": "",
    "museum-2-filled": "",
    "museum-2": "",
    "museum-filled": "",
    museum,
    "mushroom-1-filled": "",
    "mushroom-1": "",
    "mushroom-filled": "",
    mushroom,
    "music-1-filled": "",
    "music-1": "",
    "music-2-filled": "",
    "music-2": "",
    "music-filled": "",
    "music-rectangle-add-filled": "",
    "music-rectangle-add": "",
    music,
    "navigation-arrow-filled": "",
    "navigation-arrow": "",
    "next-filled": "",
    next,
    "no-expression-filled": "",
    "no-expression": "",
    "noodle-filled": "",
    noodle,
    "notification-add-filled": "",
    "notification-add": "",
    "notification-circle-filled": "",
    "notification-circle": "",
    "notification-error-filled": "",
    "notification-error": "",
    "notification-filled": "",
    notification,
    "numbers-0-1": "",
    "numbers-0": "",
    "numbers-1-1": "",
    "numbers-1": "",
    "numbers-2-1": "",
    "numbers-2": "",
    "numbers-3-1": "",
    "numbers-3": "",
    "numbers-4-1": "",
    "numbers-4": "",
    "numbers-5-1": "",
    "numbers-5": "",
    "numbers-6-1": "",
    "numbers-6": "",
    "numbers-7-1": "",
    "numbers-7": "",
    "numbers-8-1": "",
    "numbers-8": "",
    "numbers-9-1": "",
    "numbers-9": "",
    "nut-filled": "",
    nut,
    "object-storage": "",
    "open-mouth-filled": "",
    "open-mouth": "",
    "opera-filled": "",
    opera,
    "order-adjustment-column": "",
    "order-ascending": "",
    "order-descending": "",
    "outbox-filled": "",
    outbox,
    "page-first": "",
    "page-head-filled": "",
    "page-head": "",
    "page-last": "",
    "palace-1-filled": "",
    "palace-1": "",
    "palace-2-filled": "",
    "palace-2": "",
    "palace-3-filled": "",
    "palace-3": "",
    "palace-4-filled": "",
    "palace-4": "",
    "palace-filled": "",
    palace,
    "palette-1-filled": "",
    "palette-1": "",
    "palette-filled": "",
    palette,
    "panorama-horizontal-filled": "",
    "panorama-horizontal": "",
    "panorama-vertical-filled": "",
    "panorama-vertical": "",
    "pantone-filled": "",
    pantone,
    parabola,
    parentheses,
    "paste-filled": "",
    paste,
    "patio-filled": "",
    patio,
    "pause-circle-filled": "",
    "pause-circle-stroke-filled": "",
    "pause-circle-stroke": "",
    "pause-circle": "",
    pause,
    "pea-filled": "",
    pea,
    "peach-filled": "",
    peach,
    "pear-filled": "",
    pear,
    "pearl-of-the-orient-filled": "",
    "pearl-of-the-orient": "",
    "pen-ball-filled": "",
    "pen-ball": "",
    "pen-brush-filled": "",
    "pen-brush": "",
    "pen-filled": "",
    "pen-mark-filled": "",
    "pen-mark": "",
    "pen-quill-filled": "",
    "pen-quill": "",
    pen,
    "pending-filled": "",
    pending,
    percent,
    "personal-information-filled": "",
    "personal-information": "",
    "phone-locked-filled": "",
    "phone-locked": "",
    "phone-search-filled": "",
    "phone-search": "",
    pi,
    "piano-filled": "",
    piano,
    "pin-filled": "",
    pin,
    "play-circle-filled": "",
    "play-circle-stroke-add-filled": "",
    "play-circle-stroke-add": "",
    "play-circle-stroke-filled": "",
    "play-circle-stroke": "",
    "play-circle": "",
    "play-demo-filled": "",
    "play-demo": "",
    "play-rectangle-filled": "",
    "play-rectangle": "",
    play,
    plus: plus$1,
    "popsicle-filled": "",
    popsicle,
    "portrait-filled": "",
    portrait,
    "pout-filled": "",
    pout,
    poweroff,
    "precise-monitor": "",
    "previous-filled": "",
    previous,
    "print-filled": "",
    print,
    "pumpkin-filled": "",
    pumpkin,
    "pyramid-filled": "",
    "pyramid-maya-filled": "",
    "pyramid-maya": "",
    pyramid,
    qrcode,
    quadratic,
    "questionnaire-double-filled": "",
    "questionnaire-double": "",
    "questionnaire-filled": "",
    questionnaire,
    "queue-filled": "",
    queue,
    radar,
    "radio-1-filled": "",
    "radio-1": "",
    "radio-2-filled": "",
    "radio-2": "",
    "radish-filled": "",
    radish,
    "rain-heavy": "",
    "rain-light-filled": "",
    "rain-light": "",
    "rain-medium": "",
    rainbow,
    "rectangle-filled": "",
    rectangle,
    refresh,
    relation,
    "relativity-filled": "",
    relativity,
    "remote-wave-filled": "",
    "remote-wave": "",
    remove,
    "replay-filled": "",
    replay,
    "rice-ball-filled": "",
    "rice-ball": "",
    "rice-filled": "",
    rice,
    "roast-filled": "",
    roast,
    "rocket-filled": "",
    rocket,
    rollback,
    rollfront,
    "root-list-filled": "",
    "root-list": "",
    "rotate-locked-filled": "",
    "rotate-locked": "",
    rotate,
    rotation,
    "round-filled": "",
    round,
    "router-wave-filled": "",
    "router-wave": "",
    rss,
    "ruler-filled": "",
    ruler,
    "sailing-hotel-filled": "",
    "sailing-hotel": "",
    "sandwich-filled": "",
    sandwich,
    "saturation-filled": "",
    saturation,
    "sausage-filled": "",
    sausage,
    "save-filled": "",
    save,
    "saving-pot-filled": "",
    "saving-pot": "",
    scan,
    "screen-4k-filled": "",
    "screen-4k": "",
    "screencast-filled": "",
    screencast,
    screenshot,
    "scroll-bar-filled": "",
    "scroll-bar": "",
    "sd-card-1-filled": "",
    "sd-card-1": "",
    "sd-card-filled": "",
    "sd-card": "",
    "search-error-filled": "",
    "search-error": "",
    "search-filled": "",
    search,
    "secured-filled": "",
    secured,
    "send-cancel-filled": "",
    "send-cancel": "",
    "send-filled": "",
    send,
    "sensors-1": "",
    "sensors-2": "",
    "sensors-off": "",
    sensors,
    "sequence-filled": "",
    sequence,
    "serenity-filled": "",
    serenity,
    "server-filled": "",
    server,
    "service-filled": "",
    service,
    "setting-1-filled": "",
    "setting-1": "",
    "setting-filled": "",
    setting,
    "share-1-filled": "",
    "share-1": "",
    "share-filled": "",
    share,
    "sharpness-filled": "",
    sharpness,
    "shield-error-filled": "",
    "shield-error": "",
    "shimen-filled": "",
    shimen,
    "shop-1-filled": "",
    "shop-1": "",
    "shop-2-filled": "",
    "shop-2": "",
    "shop-3-filled": "",
    "shop-3": "",
    "shop-4-filled": "",
    "shop-4": "",
    "shop-5-filled": "",
    "shop-5": "",
    "shop-filled": "",
    shop,
    "shrimp-filled": "",
    shrimp,
    "shrink-horizontal": "",
    "shrink-vertical": "",
    "shutter-filled": "",
    shutter,
    "shutup-filled": "",
    shutup,
    "sim-card-1-filled": "",
    "sim-card-1": "",
    "sim-card-2-filled": "",
    "sim-card-2": "",
    "sim-card-filled": "",
    "sim-card": "",
    "sinister-smile-filled": "",
    "sinister-smile": "",
    "sip-filled": "",
    sip,
    "sitemap-filled": "",
    sitemap,
    slash,
    "sleep-filled": "",
    sleep,
    "slice-filled": "",
    slice,
    "slideshow-filled": "",
    slideshow,
    "smile-filled": "",
    smile,
    "sneer-filled": "",
    sneer,
    snowflake,
    sonic,
    "sound-down-filled": "",
    "sound-down": "",
    "sound-filled": "",
    "sound-high-filled": "",
    "sound-high": "",
    "sound-low-filled": "",
    "sound-low": "",
    "sound-mute-1-filled": "",
    "sound-mute-1": "",
    "sound-mute-filled": "",
    "sound-mute": "",
    "sound-up-filled": "",
    "sound-up": "",
    sound,
    space,
    "speechless-1-filled": "",
    "speechless-1": "",
    "speechless-filled": "",
    speechless,
    "star-filled": "",
    star,
    "statue-of-jesus-filled": "",
    "statue-of-jesus": "",
    "sticky-note-filled": "",
    "sticky-note": "",
    "stop-circle-filled": "",
    "stop-circle-stroke-filled": "",
    "stop-circle-stroke": "",
    "stop-circle": "",
    stop,
    "store-filled": "",
    store: store$1,
    "street-road-1-filled": "",
    "street-road-1": "",
    "street-road-filled": "",
    "street-road": "",
    "subtitle-filled": "",
    subtitle,
    "subway-line-filled": "",
    "subway-line": "",
    sum,
    "sun-fall-filled": "",
    "sun-fall": "",
    "sun-rising-filled": "",
    "sun-rising": "",
    "sunny-filled": "",
    sunny,
    "support-filled": "",
    support,
    "surprised-1-filled": "",
    "surprised-1": "",
    "surprised-filled": "",
    surprised,
    "swap-left": "",
    "swap-right": "",
    swap,
    "swear-1-filled": "",
    "swear-1": "",
    "swear-2-filled": "",
    "swear-2": "",
    "system-2": "",
    "system-3-filled": "",
    "system-3": "",
    "system-application-filled": "",
    "system-application": "",
    "system-blocked-filled": "",
    "system-blocked": "",
    "system-code-filled": "",
    "system-code": "",
    "system-components-filled": "",
    "system-components": "",
    "system-coordinate-filled": "",
    "system-coordinate": "",
    "system-device-filled": "",
    "system-device": "",
    "system-interface-filled": "",
    "system-interface": "",
    "system-location-filled": "",
    "system-location": "",
    "system-locked-filled": "",
    "system-locked": "",
    "system-log-filled": "",
    "system-log": "",
    "system-marked-filled": "",
    "system-marked": "",
    "system-messages-filled": "",
    "system-messages": "",
    "system-regulation-filled": "",
    "system-regulation": "",
    "system-search-filled": "",
    "system-search": "",
    "system-setting-filled": "",
    "system-setting": "",
    "system-storage-filled": "",
    "system-storage": "",
    "system-sum": "",
    "system-unlocked-filled": "",
    "system-unlocked": "",
    "tab-filled": "",
    tab: tab$1,
    "table-1-filled": "",
    "table-1": "",
    "table-2-filled": "",
    "table-2": "",
    "table-add-filled": "",
    "table-add": "",
    "table-filled": "",
    "table-split-filled": "",
    "table-split": "",
    table,
    "tag-filled": "",
    tag,
    "tangerinr-filled": "",
    tangerinr,
    "tape-filled": "",
    tape,
    "task-1-filled": "",
    "task-1": "",
    "task-add-1": "",
    "task-add-filled": "",
    "task-add": "",
    "task-checked-1": "",
    "task-checked-filled": "",
    "task-checked": "",
    "task-double-filled": "",
    "task-double": "",
    "task-error-filled": "",
    "task-error": "",
    "task-filled": "",
    "task-location-filled": "",
    "task-location": "",
    "task-marked-filled": "",
    "task-marked": "",
    "task-setting-filled": "",
    "task-setting": "",
    "task-time-filled": "",
    "task-time": "",
    "task-visible-filled": "",
    "task-visible": "",
    task,
    "tea-filled": "",
    tea,
    "teahouse-filled": "",
    teahouse,
    "template-filled": "",
    template,
    "temple-filled": "",
    temple,
    "terminal-rectangle-1-filled": "",
    "terminal-rectangle-1": "",
    "terminal-rectangle-filled": "",
    "terminal-rectangle": "",
    "terminal-window-filled": "",
    "terminal-window": "",
    terminal,
    "textbox-filled": "",
    textbox,
    "textformat-bold": "",
    "textformat-color": "",
    "textformat-italic": "",
    "textformat-strikethrough": "",
    "textformat-underline": "",
    "textformat-wrap": "",
    "theaters-filled": "",
    theaters,
    "thumb-down-1-filled": "",
    "thumb-down-1": "",
    "thumb-down-2-filled": "",
    "thumb-down-2": "",
    "thumb-down-filled": "",
    "thumb-down": "",
    "thumb-up-1-filled": "",
    "thumb-up-1": "",
    "thumb-up-2-filled": "",
    "thumb-up-2": "",
    "thumb-up-filled": "",
    "thumb-up": "",
    thunder,
    "thunderstorm-night-filled": "",
    "thunderstorm-night": "",
    "thunderstorm-sunny-filled": "",
    "thunderstorm-sunny": "",
    thunderstorm,
    "ticket-filled": "",
    ticket,
    "time-filled": "",
    time,
    "tips-double-filled": "",
    "tips-double": "",
    "tips-filled": "",
    tips,
    "tomato-filled": "",
    tomato,
    "tools-circle-filled": "",
    "tools-circle": "",
    "tools-filled": "",
    tools,
    tornado,
    "tower-1-filled": "",
    "tower-1": "",
    "tower-2-filled": "",
    "tower-2": "",
    "tower-3-filled": "",
    "tower-3": "",
    "tower-clock-filled": "",
    "tower-clock": "",
    "tower-filled": "",
    tower,
    "town-filled": "",
    town,
    "traffic-events-filled": "",
    "traffic-events": "",
    "traffic-filled": "",
    traffic,
    "transform-1-filled": "",
    "transform-1": "",
    "transform-2": "",
    "transform-3": "",
    "transform-filled": "",
    transform,
    "translate-1": "",
    translate,
    "tree-round-dot-filled": "",
    "tree-round-dot-vertical-filled": "",
    "tree-round-dot-vertical": "",
    "tree-round-dot": "",
    "tree-square-dot-filled": "",
    "tree-square-dot-vertical-filled": "",
    "tree-square-dot-vertical": "",
    "tree-square-dot": "",
    "trending-down": "",
    "trending-up": "",
    "tv-1-filled": "",
    "tv-1": "",
    "tv-2-filled": "",
    "tv-2": "",
    "tv-filled": "",
    tv,
    "typography-filled": "",
    typography,
    "uncomfortable-1-filled": "",
    "uncomfortable-1": "",
    "uncomfortable-2-filled": "",
    "uncomfortable-2": "",
    "uncomfortable-filled": "",
    uncomfortable,
    "undertake-delivery-filled": "",
    "undertake-delivery": "",
    "undertake-environment-protection-filled": "",
    "undertake-environment-protection": "",
    "undertake-filled": "",
    "undertake-hold-up-filled": "",
    "undertake-hold-up": "",
    "undertake-transaction-filled": "",
    "undertake-transaction": "",
    undertake,
    "unfold-less": "",
    "unfold-more": "",
    "unhappy-1-filled": "",
    "unhappy-1": "",
    "unhappy-filled": "",
    unhappy,
    "uninstall-filled": "",
    uninstall,
    "upload-1": "",
    upload: upload$1,
    upscale,
    "usb-filled": "",
    usb,
    "user-1-filled": "",
    "user-1": "",
    "user-add-filled": "",
    "user-add": "",
    "user-arrow-down-filled": "",
    "user-arrow-down": "",
    "user-arrow-left-filled": "",
    "user-arrow-left": "",
    "user-arrow-right-filled": "",
    "user-arrow-right": "",
    "user-arrow-up-filled": "",
    "user-arrow-up": "",
    "user-avatar-filled": "",
    "user-avatar": "",
    "user-blocked-filled": "",
    "user-blocked": "",
    "user-business-filled": "",
    "user-business": "",
    "user-checked-1-filled": "",
    "user-checked-1": "",
    "user-checked-filled": "",
    "user-checked": "",
    "user-circle-filled": "",
    "user-circle": "",
    "user-clear-filled": "",
    "user-clear": "",
    "user-error-1-filled": "",
    "user-error-1": "",
    "user-filled": "",
    "user-invisible-filled": "",
    "user-invisible": "",
    "user-list-filled": "",
    "user-list": "",
    "user-locked-filled": "",
    "user-locked": "",
    "user-marked-filled": "",
    "user-marked": "",
    "user-password-filled": "",
    "user-password": "",
    "user-safety-filled": "",
    "user-safety": "",
    "user-search-filled": "",
    "user-search": "",
    "user-setting-filled": "",
    "user-setting": "",
    "user-talk-1-filled": "",
    "user-talk-1": "",
    "user-talk-filled": "",
    "user-talk-off-1-filled": "",
    "user-talk-off-1": "",
    "user-talk": "",
    "user-time-filled": "",
    "user-time": "",
    "user-transmit-filled": "",
    "user-transmit": "",
    "user-unknown-filled": "",
    "user-unknown": "",
    "user-unlocked-filled": "",
    "user-unlocked": "",
    "user-vip-filled": "",
    "user-vip": "",
    "user-visible-filled": "",
    "user-visible": "",
    user,
    "usercase-filled": "",
    "usercase-link-filled": "",
    "usercase-link": "",
    usercase,
    "usergroup-add-filled": "",
    "usergroup-add": "",
    "usergroup-clear-filled": "",
    "usergroup-clear": "",
    "usergroup-filled": "",
    usergroup,
    "vehicle-filled": "",
    vehicle,
    "verified-filled": "",
    verified,
    "verify-filled": "",
    verify,
    "vertical-filled": "",
    vertical,
    "video-camera-1-filled": "",
    "video-camera-1": "",
    "video-camera-2-filled": "",
    "video-camera-2": "",
    "video-camera-3-filled": "",
    "video-camera-3": "",
    "video-camera-dollar-filled": "",
    "video-camera-dollar": "",
    "video-camera-filled": "",
    "video-camera-minus-filled": "",
    "video-camera-minus": "",
    "video-camera-music-filled": "",
    "video-camera-music": "",
    "video-camera-off-filled": "",
    "video-camera-off": "",
    "video-camera": "",
    "video-filled": "",
    "video-library-filled": "",
    "video-library": "",
    video,
    "view-agenda-filled": "",
    "view-agenda": "",
    "view-column": "",
    "view-in-ar-filled": "",
    "view-in-ar": "",
    "view-list": "",
    "view-module-filled": "",
    "view-module": "",
    "visual-recognition-filled": "",
    "visual-recognition": "",
    "wallet-filled": "",
    wallet,
    "watch-filled": "",
    watch,
    "watermelon-filled": "",
    watermelon,
    "wave-bye-filled": "",
    "wave-bye": "",
    "wave-left-filled": "",
    "wave-left": "",
    "wave-right-filled": "",
    "wave-right": "",
    "wealth-1-filled": "",
    "wealth-1": "",
    "wealth-filled": "",
    wealth,
    "widget-filled": "",
    widget,
    "wifi-1-filled": "",
    "wifi-1": "",
    "wifi-off-1-filled": "",
    "wifi-off-1": "",
    "wifi-off": "",
    wifi,
    "window-1-filled": "",
    "window-1": "",
    "window-filled": "",
    window: window$1,
    "windy-rain": "",
    windy,
    "wink-filled": "",
    wink,
    "work-filled": "",
    "work-history-filled": "",
    "work-history": "",
    "work-off-filled": "",
    "work-off": "",
    work,
    "wry-smile-filled": "",
    "wry-smile": "",
    "zoom-in-filled": "",
    "zoom-in": "",
    "zoom-out-filled": "",
    "zoom-out": ""
  };
  function isNumeric(value) {
    return /^(-)?\d+(\.\d+)?$/.test(value);
  }
  function isDef(value) {
    return value !== void 0 && value !== null;
  }
  function addUnit(value) {
    if (!isDef(value)) {
      return null;
    }
    value = String(value);
    return isNumeric(value) ? `${value}px` : value;
  }
  const isObject$2 = (val) => val !== null && typeof val === "object";
  const ariaProps = {
    ariaHidden: Boolean,
    ariaRole: String,
    ariaLabel: String,
    ariaLabelledby: String,
    ariaDescribedby: String,
    ariaBusy: Boolean
    // lStyle: String
  };
  const IconProps = {
    ...ariaProps,
    lClass: String,
    name: {
      type: String,
      required: true
    },
    color: String,
    size: [String, Number],
    prefix: String,
    // type: String,
    inherit: {
      type: Boolean,
      default: true
    },
    web: {
      type: Boolean,
      default: true
    },
    lStyle: [String, Object, Array]
  };
  const name = "l-icon";
  const _sfc_main$A = vue.defineComponent({
    name,
    externalClasses: ["l-class"],
    options: {
      addGlobalClass: true,
      virtualHost: true
    },
    props: IconProps,
    emits: ["click"],
    setup(props, { emit }) {
      const $iconCollection = vue.inject("$iconCollection", null);
      const { $limeIconsHost: $iconsHost } = uni;
      const IconifyURL = "https://api.iconify.design/";
      const innerName = vue.computed(() => props.name || "");
      const hasHost = vue.computed(() => `${innerName.value}`.indexOf("/") !== -1);
      const isIconify = vue.computed(() => !hasHost.value && `${innerName.value}`.includes(":"));
      const collectionIcon = vue.computed(() => isObject$2($iconCollection) && $iconCollection.icons[innerName.value]);
      const isImage = vue.computed(() => {
        return /\.(jpe?g|png|gif|bmp|webp|tiff?)$/i.test(innerName.value) || /^data:image\/(jpeg|png|gif|bmp|webp|tiff);base64,/.test(innerName.value);
      });
      const isSVG = vue.computed(() => {
        return /\.svg$/i.test(innerName.value) || innerName.value.startsWith("data:image/svg+xml") || innerName.value.startsWith("<svg");
      });
      const classes = vue.computed(() => {
        const { prefix } = props;
        const iconPrefix = prefix || name;
        const iconName = `${iconPrefix}-${innerName.value}`;
        const isFont = !isImage.value && !isIconify.value && !isSVG.value;
        const isImages = isImage.value || isIconify.value || isSVG.value;
        const cls = {
          [iconPrefix]: !isImages && prefix,
          [iconName]: !isImages,
          [`${name}--image`]: isImages,
          [`${name}--font`]: isFont
          // [`is-inherit`]: isIconify.value && (props.color || props.inherit)
        };
        return cls;
      });
      const iconCode = vue.computed(() => {
        const isImages = isImage.value || isIconify.value || isSVG.value;
        return !isImages && icons[innerName.value] || (/[^\x00-\x7F]/.test(innerName.value) ? innerName.value : "");
      });
      const isError = vue.ref(false);
      const cacheMap = /* @__PURE__ */ new Map();
      const iconUrl = vue.computed(() => {
        const hasIconsHost = $iconsHost != null && $iconsHost != "";
        if (isImage.value) {
          return hasHost.value ? innerName.value : ($iconsHost || "") + innerName.value;
        } else if (isIconify.value) {
          if (cacheMap.has(innerName.value) && !isError.value) {
            return cacheMap.get(innerName.value);
          }
          const _host = `${hasIconsHost ? $iconsHost : IconifyURL}`;
          const _icon = collectionIcon.value || _host + `${innerName.value}.svg`.replace(/:/g, "/");
          cacheMap.set(innerName.value, _icon);
          return _icon;
        } else if (isSVG.value) {
          return (/\.svg$/i.test(innerName.value) && hasIconsHost && !hasHost.value ? $iconsHost : "") + innerName.value.replace(/'/g, '"');
        } else {
          return null;
        }
      });
      const styles = vue.computed(() => {
        const style = {
          "color": props.color
        };
        if (typeof props.size == "number" || props.size) {
          style["font-size"] = addUnit(props.size);
        }
        return style;
      });
      const imageLoad = () => {
        isError.value = false;
      };
      const imageError = () => {
        isError.value = true;
      };
      return {
        iconCode,
        classes,
        styles,
        isImage,
        isSVG,
        isIconify,
        iconUrl,
        imageLoad,
        imageError
      };
    }
  });
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_svg = resolveEasycom(vue.resolveDynamicComponent("l-svg"), __easycom_0$6);
    return !_ctx.isImage && !_ctx.isIconify && !_ctx.isSVG ? (vue.openBlock(), vue.createElementBlock(
      "text",
      {
        key: 0,
        class: vue.normalizeClass(["l-icon", [_ctx.classes]]),
        style: vue.normalizeStyle([_ctx.styles, _ctx.lStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      },
      vue.toDisplayString(_ctx.iconCode),
      7
      /* TEXT, CLASS, STYLE */
    )) : !_ctx.isSVG && !_ctx.isIconify && _ctx.isImage ? (vue.openBlock(), vue.createElementBlock("image", {
      key: 1,
      class: vue.normalizeClass(["l-icon", [_ctx.classes]]),
      style: vue.normalizeStyle([_ctx.styles, _ctx.lStyle]),
      src: _ctx.iconUrl,
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click"))
    }, null, 14, ["src"])) : (vue.openBlock(), vue.createBlock(_component_l_svg, {
      key: 2,
      class: vue.normalizeClass(["l-icon", [_ctx.classes]]),
      style: vue.normalizeStyle([_ctx.styles, _ctx.lStyle]),
      web: _ctx.web,
      color: _ctx.color,
      src: _ctx.iconUrl,
      onError: _ctx.imageError,
      onLoad: _ctx.imageLoad,
      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("click"))
    }, null, 8, ["class", "style", "web", "color", "src", "onError", "onLoad"]));
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-6fbe0909"], ["__file", "D:/workfile/FoodWebApp/uni_modules/lime-icon/components/l-icon/l-icon.vue"]]);
  function getHomeTopInfo(query) {
    return request({
      url: "/dv/task/topInfo",
      method: "get"
    });
  }
  function inTimeList(query) {
    return request({
      url: "/dv/task/inTimeList",
      method: "get",
      params: query
    });
  }
  function myDoingTaskList(query) {
    return request({
      url: "/dv/task/myDoingList",
      method: "get",
      params: query
    });
  }
  function waitList(query) {
    return request({
      url: "/dv/task/unDoList",
      method: "get",
      params: query
    });
  }
  function doneList(query) {
    return request({
      url: "/dv/task/doneList",
      method: "get",
      params: query
    });
  }
  function getTaskInfoAndLines(taskId) {
    return request({
      url: "/dv/task/infoLines/" + taskId,
      method: "get"
    });
  }
  function getTaskWarnInfo(recordId) {
    return request({
      url: "/dv/warnRecord/" + recordId,
      method: "get"
    });
  }
  function upTaskErrorInfo(data2) {
    return request({
      url: "/dv/taskLine/taskError",
      method: "post",
      data: data2
    });
  }
  function listAllLineForTask(taskId) {
    return request({
      url: "/dv/taskLine/listAll?taskId=" + taskId,
      method: "get"
    });
  }
  function upBatchCode(batchCode, taskLineId) {
    return request({
      url: "/dv/taskLine/upBatchCode?batchCode=" + batchCode + "&taskLineId=" + taskLineId,
      method: "get"
    });
  }
  function getBatchCodeList(taskLineId) {
    return request({
      url: "/dv/record/listByLineId?taskLineId=" + taskLineId,
      method: "get"
    });
  }
  function doingListOne(reactorCode) {
    return request({
      url: "/dv/task/doingListOne?reactorCode=" + reactorCode,
      method: "get"
    });
  }
  function startTask(taskCode, scaleCode) {
    return request({
      url: "/dv/task/startTask?taskCode=" + taskCode + "&scaleCode=" + scaleCode,
      method: "get"
    });
  }
  function pauseTask(taskCode) {
    return request({
      url: "/dv/task/pauseTask?taskCode=" + taskCode,
      method: "get"
    });
  }
  function getReactorByCode(reactorCode) {
    return request({
      url: "/dv/reactor/getInfoByCode?reactorCode=" + reactorCode,
      method: "get"
    });
  }
  function getScaleByCode(scaleCode) {
    return request({
      url: "/dv/scale/getInfoByCode?scaleCode=" + scaleCode,
      method: "get"
    });
  }
  function lineChange(data2) {
    return request({
      url: "/dv/taskLine/lineChange",
      method: "post",
      data: data2
    });
  }
  function finishTaskByCode(taskCode) {
    return request({
      url: "/dv/task/finishTask?taskCode=" + taskCode,
      method: "get"
    });
  }
  function lineDetails(taskCode, lineId) {
    return request({
      url: "/dv/taskLine/lineDetails?taskCode=" + taskCode + "&lineId=" + lineId,
      method: "get"
    });
  }
  const _imports_0 = "/static/nodata.png";
  const _sfc_main$z = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const topInfo = vue.ref({
        taskCount: 0,
        taskChange: 0,
        taskLineCount: 0,
        taskLineChange: 0,
        precision: 0,
        precisionChange: 0,
        reactor: 0,
        reactorChange: 0
      });
      const xlstatus = vue.ref("more");
      const taskList = vue.ref([]);
      const totalTaskCount = vue.ref(0);
      const queryParams = vue.ref({
        pageSize: 10,
        pageNum: 1
      });
      onLoad(() => {
      });
      const screeWith = vue.ref(null);
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        getMyTopInfo();
        reloadMyTask();
      });
      const getMyTopInfo = () => {
        getHomeTopInfo().then((res2) => {
          topInfo.value = res2.data;
        });
      };
      const reloadMyTask = () => {
        taskList.value = [];
        loadMyTask();
      };
      const loadMyTask = () => {
        uni.showLoading({
          title: "加载中..",
          mask: true
        });
        inTimeList(queryParams).then((res2) => {
          formatAppLog("log", "at pages/home/index.vue:197", res2);
          totalTaskCount.value = res2.total;
          taskList.value.push(...res2.rows);
          if (res2.total == void 0) {
            xlstatus.value = "more";
          } else if (res2.total <= taskList.value.length) {
            xlstatus.value = "noMore";
          } else {
            xlstatus.value = "more";
          }
          uni.hideLoading();
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const clickTaskItem = (task2) => {
        uni.navigateTo({
          url: "/pages/task/taskdetails/taskdetails?taskId=" + task2.taskId
        });
      };
      onPullDownRefresh(() => {
        getMyTopInfo();
        reloadMyTask();
        setTimeout(function() {
          uni.stopPullDownRefresh();
        }, 1e3);
      });
      const __returned__ = { topInfo, xlstatus, taskList, totalTaskCount, queryParams, screeWith, getMyTopInfo, reloadMyTask, loadMyTask, clickTaskItem, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onPullDownRefresh() {
        return onPullDownRefresh;
      }, get onReachBottom() {
        return onReachBottom;
      }, get getHomeTopInfo() {
        return getHomeTopInfo;
      }, get inTimeList() {
        return inTimeList;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "page-header" }, [
          vue.createElementVNode("view", { class: "page-title" }, [
            vue.createVNode(_component_l_icon, {
              name: "map",
              color: "#3498db"
            }),
            vue.createElementVNode("div", { style: { "width": "15px" } }),
            vue.createTextVNode(" 生产看板 ")
          ]),
          vue.createElementVNode("view", { class: "page-subtitle" }, "今日生产任务概览与数据统计")
        ]),
        vue.createElementVNode("div", { class: "stats-grid" }, [
          vue.createElementVNode("div", { class: "stat-card" }, [
            vue.createElementVNode("div", { class: "stat-icon" }, [
              vue.createVNode(_component_l_icon, { name: "task-checked-1" })
            ]),
            vue.createElementVNode(
              "div",
              { class: "stat-value" },
              vue.toDisplayString($setup.topInfo.taskCount || 0),
              1
              /* TEXT */
            ),
            vue.createElementVNode("div", { class: "stat-label" }, "进行中任务"),
            $setup.topInfo.taskChange >= 0 ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "stat-trend trend-up"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-up" }),
              vue.createTextVNode(
                " 相比昨日增加" + vue.toDisplayString($setup.topInfo.taskChange) + "个 ",
                1
                /* TEXT */
              )
            ])) : (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "stat-trend trend-down"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-down" }),
              vue.createTextVNode(
                " 相比昨日减少" + vue.toDisplayString(Math.abs($setup.topInfo.taskChange)) + "个 ",
                1
                /* TEXT */
              )
            ]))
          ]),
          vue.createElementVNode("div", { class: "stat-card" }, [
            vue.createElementVNode("div", { class: "stat-icon" }, [
              vue.createVNode(_component_l_icon, { name: "check-circle" })
            ]),
            vue.createElementVNode(
              "div",
              { class: "stat-value" },
              vue.toDisplayString($setup.topInfo.taskFCount || 0),
              1
              /* TEXT */
            ),
            vue.createElementVNode("div", { class: "stat-label" }, "今日完成任务"),
            $setup.topInfo.taskFChange >= 0 ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "stat-trend trend-up"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-up" }),
              vue.createTextVNode(
                " 相比昨日增加" + vue.toDisplayString($setup.topInfo.taskFChange) + "个 ",
                1
                /* TEXT */
              )
            ])) : (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "stat-trend trend-down"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-down" }),
              vue.createTextVNode(
                " 相比昨日减少" + vue.toDisplayString(Math.abs($setup.topInfo.taskFChange)) + "个 ",
                1
                /* TEXT */
              )
            ]))
          ]),
          vue.createElementVNode("div", { class: "stat-card" }, [
            vue.createElementVNode("div", { class: "stat-icon" }, [
              vue.createVNode(_component_l_icon, { name: "percent" })
            ]),
            vue.createElementVNode(
              "div",
              { class: "stat-value" },
              vue.toDisplayString($setup.topInfo.precision || 0) + "%",
              1
              /* TEXT */
            ),
            vue.createElementVNode("div", { class: "stat-label" }, "平均配料精度"),
            $setup.topInfo.precisionChange >= 0 ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "stat-trend trend-up"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-up" }),
              vue.createTextVNode(
                " 提升" + vue.toDisplayString($setup.topInfo.precisionChange) + "% ",
                1
                /* TEXT */
              )
            ])) : (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "stat-trend trend-down"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-down" }),
              vue.createTextVNode(
                " 下降" + vue.toDisplayString(Math.abs($setup.topInfo.precisionChange)) + "% ",
                1
                /* TEXT */
              )
            ]))
          ]),
          vue.createElementVNode("div", { class: "stat-card" }, [
            vue.createElementVNode("div", { class: "stat-icon" }, [
              vue.createVNode(_component_l_icon, { name: "time" })
            ]),
            vue.createElementVNode(
              "div",
              { class: "stat-value" },
              vue.toDisplayString($setup.topInfo.reactor || 0) + "%",
              1
              /* TEXT */
            ),
            vue.createElementVNode("div", { class: "stat-label" }, "设备使用率"),
            $setup.topInfo.reactorChange >= 0 ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "stat-trend trend-up"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-up" }),
              vue.createTextVNode(
                " 提升" + vue.toDisplayString($setup.topInfo.reactorChange) + "% ",
                1
                /* TEXT */
              )
            ])) : (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "stat-trend trend-down"
            }, [
              vue.createVNode(_component_l_icon, { name: "arrow-down" }),
              vue.createTextVNode(
                " 下降" + vue.toDisplayString(Math.abs($setup.topInfo.reactorChange)) + "% ",
                1
                /* TEXT */
              )
            ]))
          ])
        ]),
        vue.createElementVNode("div", { class: "card" }, [
          vue.createElementVNode("div", {
            class: "card-header",
            style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between" }
          }, [
            vue.createElementVNode("div", {
              class: "card-title",
              style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" }
            }, [
              vue.createVNode(_component_l_icon, {
                name: "list",
                color: "#3498db",
                size: "20px"
              }),
              vue.createElementVNode("div", { style: { "width": "15px" } }),
              vue.createTextVNode(" 最新生产任务 ")
            ]),
            vue.createElementVNode("div", {
              onClick: $setup.reloadMyTask,
              style: { "border-radius": "15px", "border": "2px solid #3498db", "width": "60px", "height": "28px", "font-size": "13px", "color": "#3498db", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center" }
            }, [
              vue.createVNode(_component_l_icon, {
                name: "refresh",
                color: "#3498db",
                size: "13px"
              }),
              vue.createTextVNode(" 刷新 ")
            ])
          ]),
          vue.createElementVNode("div", { class: "task-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.taskList, (task2, index2) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "task-item",
                  onClick: ($event) => $setup.clickTaskItem(task2)
                }, [
                  vue.createElementVNode("div", { class: "task-info" }, [
                    task2.attr3 != 1 ? (vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: "task-name"
                      },
                      vue.toDisplayString(task2.taskCode || ""),
                      1
                      /* TEXT */
                    )) : (vue.openBlock(), vue.createElementBlock("div", {
                      key: 1,
                      class: "task-name",
                      style: { "color": "#aa0000" }
                    }, [
                      vue.createVNode(_component_l_icon, {
                        name: "circle-filled",
                        color: "#aa0000",
                        size: "10px",
                        style: { "margin-right": "3px" }
                      }),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(task2.taskCode || ""),
                        1
                        /* TEXT */
                      )
                    ])),
                    vue.createElementVNode("div", { class: "task-details" }, [
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "chart-3d-filled" }),
                        vue.createTextVNode(
                          " 反应釜:" + vue.toDisplayString(task2.reactorName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "saturation-filled" }),
                        vue.createTextVNode(
                          " 配方:" + vue.toDisplayString(task2.recipeName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "user-1-filled" }),
                        vue.createTextVNode(
                          " 负责人:" + vue.toDisplayString(task2.teamAdmin || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "time-filled" }),
                        vue.createTextVNode(
                          " 创建时间:" + vue.toDisplayString(task2.createTime || ""),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ]),
                  task2.status == "NORMAL" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    class: "task-status status-pending"
                  }, "待开始")) : vue.createCommentVNode("v-if", true),
                  task2.status == "START" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 1,
                    class: "task-status status-active"
                  }, "生产中")) : vue.createCommentVNode("v-if", true),
                  task2.status == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 2,
                    class: "task-status status-pending"
                  }, "暂停")) : vue.createCommentVNode("v-if", true),
                  task2.status == "FINISHED" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 3,
                    class: "task-status status-completed"
                  }, "完成")) : vue.createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )),
            $setup.taskList == null || $setup.taskList == "" || $setup.taskList.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
            }, [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "aspectFit",
                style: { "width": "150px", "height": "150px" }
              }),
              vue.createElementVNode("view", { style: { "font-size": "16px", "color": "#808080" } }, "-暂无数据-")
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ])
    ]);
  }
  const PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-4978fed5"], ["__file", "D:/workfile/FoodWebApp/pages/home/index.vue"]]);
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key2) => hasOwnProperty.call(val, key2);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn2) {
      const index2 = this.watchers.push(fn2) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key2) => {
            if (!hasOwn(curMessages, key2)) {
              curMessages[key2] = message[key2];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key2, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key2)) {
        console.warn(`Cannot translate the value of keypath ${key2}. Use the value of keypath as default.`);
        return key2;
      }
      return this.formater.interpolate(message[key2], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key2, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key22, values2) {
          return i18n.t(key22, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key22, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key22, values2);
        };
      }
      return t2(key2, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key2, values) {
        return t2(key2, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn2) {
        return i18n.watchLocale(fn2);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$2 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans$1 = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant$1 = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages$1 = {
    en: en$2,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$2
  } = initVueI18n(messages$1);
  const _sfc_main$y = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$2("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$2("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$2("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            class: "image",
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-9245e42c"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$x = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const xlstatus0 = vue.ref("more");
      const xlstatus1 = vue.ref("more");
      const xlstatus2 = vue.ref("more");
      const taskList0 = vue.ref([]);
      const taskList1 = vue.ref([]);
      const taskList2 = vue.ref([]);
      const totalTaskCount0 = vue.ref(0);
      const totalTaskCount1 = vue.ref(0);
      const totalTaskCount2 = vue.ref(0);
      const queryParams0 = vue.ref({
        pageSize: 10,
        pageNum: 1
      });
      const queryParams1 = vue.ref({
        pageSize: 10,
        pageNum: 1
      });
      const queryParams2 = vue.ref({
        pageSize: 10,
        pageNum: 1
      });
      const currentTab = vue.ref(0);
      const hasLoaded0 = vue.ref(false);
      const hasLoaded1 = vue.ref(false);
      const hasLoaded2 = vue.ref(false);
      const refresherTriggered0 = vue.ref(false);
      const refresherTriggered1 = vue.ref(false);
      const refresherTriggered2 = vue.ref(false);
      onLoad((options) => {
      });
      onReady(() => {
      });
      onShow(() => {
        reloadMyTask();
      });
      const switchTab = (index2) => {
        currentTab.value = index2;
        if (index2 === 0 && !hasLoaded0.value || index2 === 1 && !hasLoaded1.value || index2 === 2 && !hasLoaded2.value) {
          reloadMyTask();
          if (index2 === 0)
            hasLoaded0.value = true;
          if (index2 === 1)
            hasLoaded1.value = true;
          if (index2 === 2)
            hasLoaded2.value = true;
        }
      };
      const onSwiperChange = (e2) => {
        currentTab.value = e2.detail.current;
        if (e2.detail.current === 0 && !hasLoaded0.value || e2.detail.current === 1 && !hasLoaded1.value || e2.detail.current === 2 && !hasLoaded2.value) {
          reloadMyTask();
          if (e2.detail.current === 0)
            hasLoaded0.value = true;
          if (e2.detail.current === 1)
            hasLoaded1.value = true;
          if (e2.detail.current === 2)
            hasLoaded2.value = true;
        }
      };
      const clickTaskItem = (task2) => {
        uni.navigateTo({
          url: "/pages/task/taskdetails/taskdetails?taskId=" + task2.taskId
        });
      };
      const reloadMyTask = () => {
        if (currentTab.value == 0) {
          taskList0.value = [];
          queryParams0.value = {
            pageSize: 10,
            pageNum: 1
          };
        } else if (currentTab.value == 1) {
          taskList1.value = [];
          queryParams1.value = {
            pageSize: 10,
            pageNum: 1
          };
        } else {
          taskList2.value = [];
          queryParams2.value = {
            pageSize: 10,
            pageNum: 1
          };
        }
        loadMyTask();
      };
      const loadMyTask = () => {
        uni.showLoading({
          title: "加载中..",
          mask: true
        });
        if (currentTab.value == 0) {
          waitList(queryParams0.value).then((res2) => {
            totalTaskCount0.value = res2.total;
            taskList0.value.push(...res2.rows);
            if (res2.total == void 0) {
              xlstatus0.value = "more";
            } else if (res2.total <= taskList0.value.length) {
              xlstatus0.value = "noMore";
            } else {
              xlstatus0.value = "more";
            }
            uni.hideLoading();
          });
        } else if (currentTab.value == 1) {
          myDoingTaskList(queryParams1.value).then((res2) => {
            totalTaskCount1.value = res2.total;
            taskList1.value.push(...res2.rows);
            if (res2.total == void 0) {
              xlstatus1.value = "more";
            } else if (res2.total <= taskList1.value.length) {
              xlstatus1.value = "noMore";
            } else {
              xlstatus1.value = "more";
            }
            uni.hideLoading();
          });
        } else {
          doneList(queryParams2.value).then((res2) => {
            totalTaskCount2.value = res2.total;
            taskList2.value.push(...res2.rows);
            if (res2.total == void 0) {
              xlstatus2.value = "more";
            } else if (res2.total <= taskList2.value.length) {
              xlstatus2.value = "noMore";
            } else {
              xlstatus2.value = "more";
            }
            uni.hideLoading();
          });
        }
      };
      const onScrollToLower0 = () => {
        formatAppLog("log", "at pages/task/index.vue:338", "load more0");
        loadMore();
      };
      const onScrollToLower1 = () => {
        formatAppLog("log", "at pages/task/index.vue:342", "load more1");
        loadMore();
      };
      const onScrollToLower2 = () => {
        formatAppLog("log", "at pages/task/index.vue:346", "load more2");
        loadMore();
      };
      const loadMore = () => {
        if (currentTab.value === 0) {
          if (xlstatus0.value !== "more")
            return;
          xlstatus0.value = "loading";
          queryParams0.value.pageNum++;
        } else if (currentTab.value === 1) {
          if (xlstatus1.value !== "more")
            return;
          xlstatus1.value = "loading";
          queryParams1.value.pageNum++;
        } else {
          if (xlstatus2.value !== "more")
            return;
          xlstatus2.value = "loading";
          queryParams2.value.pageNum++;
        }
        setTimeout(loadMyTask, 100);
      };
      const onRefresherRefresh0 = () => {
        formatAppLog("log", "at pages/task/index.vue:377", "refresh0");
        refresherTriggered0.value = true;
        reloadMyTask();
        setTimeout(() => {
          refresherTriggered0.value = false;
        }, 1e3);
      };
      const onRefresherRefresh1 = () => {
        formatAppLog("log", "at pages/task/index.vue:386", "refresh1");
        refresherTriggered1.value = true;
        reloadMyTask();
        setTimeout(() => {
          refresherTriggered1.value = false;
        }, 1e3);
      };
      const onRefresherRefresh2 = () => {
        formatAppLog("log", "at pages/task/index.vue:395", "refresh2");
        refresherTriggered2.value = true;
        reloadMyTask();
        setTimeout(() => {
          refresherTriggered2.value = false;
        }, 1e3);
      };
      const __returned__ = { xlstatus0, xlstatus1, xlstatus2, taskList0, taskList1, taskList2, totalTaskCount0, totalTaskCount1, totalTaskCount2, queryParams0, queryParams1, queryParams2, currentTab, hasLoaded0, hasLoaded1, hasLoaded2, refresherTriggered0, refresherTriggered1, refresherTriggered2, switchTab, onSwiperChange, clickTaskItem, reloadMyTask, loadMyTask, onScrollToLower0, onScrollToLower1, onScrollToLower2, loadMore, onRefresherRefresh0, onRefresherRefresh1, onRefresherRefresh2, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onReady() {
        return onReady;
      }, get myDoingTaskList() {
        return myDoingTaskList;
      }, get waitList() {
        return waitList;
      }, get doneList() {
        return doneList;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "header-tab" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["tab-item", { active: $setup.currentTab === 0 }]),
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.switchTab(0))
          },
          " 待开始 ",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["tab-item", { active: $setup.currentTab === 1 }]),
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.switchTab(1))
          },
          " 进行中 ",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["tab-item", { active: $setup.currentTab === 2 }]),
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.switchTab(2))
          },
          " 已完成 ",
          2
          /* CLASS */
        )
      ]),
      vue.createElementVNode("swiper", {
        class: "swiper-container",
        current: $setup.currentTab,
        onChange: $setup.onSwiperChange,
        duration: 300
      }, [
        vue.createElementVNode("swiper-item", { class: "swiper-item" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            style: { "height": "calc(100vh - 40px)", "padding": "10px", "min-height": "calc(100vh - 40px)" },
            onScrolltolower: $setup.onScrollToLower0,
            "refresher-enabled": true,
            "refresher-triggered": $setup.refresherTriggered0,
            onRefresherrefresh: $setup.onRefresherRefresh0
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.taskList0, (task2, index2) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "task-item",
                  onClick: ($event) => $setup.clickTaskItem(task2)
                }, [
                  vue.createElementVNode("div", { class: "task-info" }, [
                    task2.attr3 != 1 ? (vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: "task-name"
                      },
                      vue.toDisplayString(task2.taskCode || ""),
                      1
                      /* TEXT */
                    )) : (vue.openBlock(), vue.createElementBlock("div", {
                      key: 1,
                      class: "task-name",
                      style: { "color": "#aa0000" }
                    }, [
                      vue.createVNode(_component_l_icon, {
                        name: "circle-filled",
                        color: "#aa0000",
                        size: "10px",
                        style: { "margin-right": "3px" }
                      }),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(task2.taskCode || ""),
                        1
                        /* TEXT */
                      )
                    ])),
                    vue.createElementVNode("div", { class: "task-details" }, [
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "chart-3d-filled" }),
                        vue.createTextVNode(
                          " 反应釜:" + vue.toDisplayString(task2.reactorName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "saturation-filled" }),
                        vue.createTextVNode(
                          " 配方:" + vue.toDisplayString(task2.recipeName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "user-1-filled" }),
                        vue.createTextVNode(
                          " 负责人:" + vue.toDisplayString(task2.teamAdmin || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "time-filled" }),
                        vue.createTextVNode(
                          " 创建时间:" + vue.toDisplayString(task2.createTime || ""),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ]),
                  task2.status == "NORMAL" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    class: "task-status status-pending"
                  }, "待开始")) : vue.createCommentVNode("v-if", true),
                  task2.status == "START" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 1,
                    class: "task-status status-active"
                  }, "生产中")) : vue.createCommentVNode("v-if", true),
                  task2.status == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 2,
                    class: "task-status status-pending"
                  }, "暂停")) : vue.createCommentVNode("v-if", true),
                  task2.status == "FINISHED" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 3,
                    class: "task-status status-completed"
                  }, "完成")) : vue.createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )),
            $setup.taskList0 == null || $setup.taskList0 == "" || $setup.taskList0.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
            }, [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "aspectFit",
                style: { "width": "150px", "height": "150px" }
              }),
              vue.createElementVNode("view", { style: { "font-size": "16px", "color": "#808080" } }, "-暂无数据-")
            ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
              vue.createVNode(_component_uni_load_more, { status: $setup.xlstatus0 }, null, 8, ["status"])
            ]))
          ], 40, ["refresher-triggered"])
        ]),
        vue.createElementVNode("swiper-item", { class: "swiper-item" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            style: { "height": "calc(100vh - 40px)", "padding": "10px", "min-height": "calc(100vh - 40px)" },
            onScrolltolower: $setup.onScrollToLower1,
            "refresher-enabled": true,
            "refresher-triggered": $setup.refresherTriggered1,
            onRefresherrefresh: $setup.onRefresherRefresh1
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.taskList1, (task2, index2) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "task-item",
                  onClick: ($event) => $setup.clickTaskItem(task2)
                }, [
                  vue.createElementVNode("div", { class: "task-info" }, [
                    task2.attr3 != 1 ? (vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: "task-name"
                      },
                      vue.toDisplayString(task2.taskCode || ""),
                      1
                      /* TEXT */
                    )) : (vue.openBlock(), vue.createElementBlock("div", {
                      key: 1,
                      class: "task-name",
                      style: { "color": "#aa0000" }
                    }, [
                      vue.createVNode(_component_l_icon, {
                        name: "circle-filled",
                        color: "#aa0000",
                        size: "10px",
                        style: { "margin-right": "3px" }
                      }),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(task2.taskCode || ""),
                        1
                        /* TEXT */
                      )
                    ])),
                    vue.createElementVNode("div", { class: "task-details" }, [
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "chart-3d-filled" }),
                        vue.createTextVNode(
                          " 反应釜:" + vue.toDisplayString(task2.reactorName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "saturation-filled" }),
                        vue.createTextVNode(
                          " 配方:" + vue.toDisplayString(task2.recipeName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "user-1-filled" }),
                        vue.createTextVNode(
                          " 负责人:" + vue.toDisplayString(task2.teamAdmin || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "time-filled" }),
                        vue.createTextVNode(
                          " 创建时间:" + vue.toDisplayString(task2.createTime || ""),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ]),
                  task2.status == "NORMAL" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    class: "task-status status-wait"
                  }, "待开始")) : vue.createCommentVNode("v-if", true),
                  task2.status == "START" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 1,
                    class: "task-status status-active"
                  }, "生产中")) : vue.createCommentVNode("v-if", true),
                  task2.status == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 2,
                    class: "task-status status-pending"
                  }, "暂停")) : vue.createCommentVNode("v-if", true),
                  task2.status == "FINISHED" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 3,
                    class: "task-status status-completed"
                  }, "完成")) : vue.createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )),
            $setup.taskList1 == null || $setup.taskList1 == "" || $setup.taskList1.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
            }, [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "aspectFit",
                style: { "width": "150px", "height": "150px" }
              }),
              vue.createElementVNode("view", { style: { "font-size": "16px", "color": "#808080" } }, "-暂无数据-")
            ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
              vue.createVNode(_component_uni_load_more, { status: $setup.xlstatus1 }, null, 8, ["status"])
            ]))
          ], 40, ["refresher-triggered"])
        ]),
        vue.createElementVNode("swiper-item", { class: "swiper-item" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            style: { "height": "calc(100vh - 40px)", "padding": "10px", "min-height": "calc(100vh - 40px)" },
            onScrolltolower: $setup.onScrollToLower2,
            "refresher-enabled": true,
            "refresher-triggered": $setup.refresherTriggered2,
            onRefresherrefresh: $setup.onRefresherRefresh2
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.taskList2, (task2, index2) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "task-item",
                  onClick: ($event) => $setup.clickTaskItem(task2)
                }, [
                  vue.createElementVNode("div", { class: "task-info" }, [
                    task2.attr3 != 1 ? (vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: "task-name"
                      },
                      vue.toDisplayString(task2.taskCode || ""),
                      1
                      /* TEXT */
                    )) : (vue.openBlock(), vue.createElementBlock("div", {
                      key: 1,
                      class: "task-name",
                      style: { "color": "#aa0000" }
                    }, [
                      vue.createVNode(_component_l_icon, {
                        name: "circle-filled",
                        color: "#aa0000",
                        size: "10px",
                        style: { "margin-right": "3px" }
                      }),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(task2.taskCode || ""),
                        1
                        /* TEXT */
                      )
                    ])),
                    vue.createElementVNode("div", { class: "task-details" }, [
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "chart-3d-filled" }),
                        vue.createTextVNode(
                          " 反应釜:" + vue.toDisplayString(task2.reactorName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "saturation-filled" }),
                        vue.createTextVNode(
                          " 配方:" + vue.toDisplayString(task2.recipeName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "user-1-filled" }),
                        vue.createTextVNode(
                          " 负责人:" + vue.toDisplayString(task2.teamAdmin || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("div", { class: "task-detail" }, [
                        vue.createVNode(_component_l_icon, { name: "time-filled" }),
                        vue.createTextVNode(
                          " 创建时间:" + vue.toDisplayString(task2.createTime || ""),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ]),
                  task2.status == "NORMAL" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    class: "task-status status-wait"
                  }, "待开始")) : vue.createCommentVNode("v-if", true),
                  task2.status == "START" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 1,
                    class: "task-status status-active"
                  }, "生产中")) : vue.createCommentVNode("v-if", true),
                  task2.status == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 2,
                    class: "task-status status-pending"
                  }, "暂停")) : vue.createCommentVNode("v-if", true),
                  task2.status == "FINISHED" ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 3,
                    class: "task-status status-completed"
                  }, "完成")) : vue.createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )),
            $setup.taskList2 == null || $setup.taskList2 == "" || $setup.taskList2.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
            }, [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "aspectFit",
                style: { "width": "150px", "height": "150px" }
              }),
              vue.createElementVNode("view", { style: { "font-size": "16px", "color": "#808080" } }, "-暂无数据-")
            ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
              vue.createVNode(_component_uni_load_more, { status: $setup.xlstatus2 }, null, 8, ["status"])
            ]))
          ], 40, ["refresher-triggered"])
        ])
      ], 40, ["current"])
    ]);
  }
  const PagesTaskIndex = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-3dabfb60"], ["__file", "D:/workfile/FoodWebApp/pages/task/index.vue"]]);
  const popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getParent(name2 = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name2) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const en$1 = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  const zhHans = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "确定",
    "uni-popup.placeholder": "请输入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const zhHant = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "確定",
    "uni-popup.placeholder": "請輸入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const messages = {
    en: en$1,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t: t$1
  } = initVueI18n(messages);
  const _sfc_main$w = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close", "update:modelValue", "input"],
    props: {
      inputType: {
        type: String,
        default: "text"
      },
      showClose: {
        type: Boolean,
        default: true
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      maxlength: {
        type: Number,
        default: -1
      },
      focus: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        dialogType: "error",
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t$1("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t$1("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t$1("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t$1("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        if (this.maxlength != -1 && this.mode === "input") {
          this.val = val.slice(0, this.maxlength);
        } else {
          this.val = val;
        }
      },
      val(val) {
        this.$emit("update:modelValue", val);
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
        this.val = this.modelValue;
      } else {
        this.dialogType = this.type;
      }
    },
    methods: {
      /**
       * 点击确认按钮
       */
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      /**
       * 点击取消按钮
       */
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode(
          "text",
          {
            class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
          },
          vue.toDisplayString($options.titleText),
          3
          /* TEXT, CLASS */
        )
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-content-text" },
            vue.toDisplayString($props.content),
            1
            /* TEXT */
          )
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            maxlength: $props.maxlength,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: $props.inputType,
            placeholder: $options.placeholderText,
            focus: $props.focus
          }, null, 8, ["maxlength", "type", "placeholder", "focus"]), [
            [vue.vModelDynamic, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        $props.showClose ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-button-text" },
            vue.toDisplayString($options.closeText),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-dialog-button", $props.showClose ? "uni-border-left" : ""]),
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
          },
          [
            vue.createElementVNode(
              "text",
              { class: "uni-dialog-button-text uni-button-color" },
              vue.toDisplayString($options.okText),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        )
      ])
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-d78c88b7"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config2 = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config2
        }, (res2) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn2) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config: config2
        } = obj;
        this._animateRun(styles, config2).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn2);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn2 === "function" && fn2();
        this.isEnd = true;
      }
    }
    step(config2 = {}) {
      this.animation.step(config2);
      return this;
    }
    run(fn2) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn2 === "function" && fn2();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$v = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform2 = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform2 += line + ":" + styles[i2] + ";";
        }
        return transform2;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config2 = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e2) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i2} 不存在`);
          }
        }
        this.animation.step(config2);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn2) {
        if (!this.animation)
          return;
        this.animation.run(fn2);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform: transform2 } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform2;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform: transform2 } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform2;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name2) {
        return name2.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$u = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res2 = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res2 = Object.assign(res2, { borderRadius: this.borderRadius });
        }
        return res2;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth: windowWidth2,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth2;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e2) {
        e2.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:310", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          this.showPoptrans();
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      showPoptrans() {
        this.$nextTick(() => {
          this.showPopup = true;
          this.showTrans = true;
        });
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$4);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-4dd3c44b"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$t = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const popCode = vue.ref(null);
      const reactorCode = vue.ref("");
      onLoad((options) => {
        if (options.taskId) {
          taskId.value = options.taskId;
        }
        if (options.reactorCode) {
          reactorCodeOld.value = options.reactorCode;
        }
      });
      const screeWith = vue.ref(null);
      const taskId = vue.ref(null);
      const reactorCodeOld = vue.ref(null);
      onShow(() => {
        if (taskId.value == null || taskId.value == "" || taskId.value == void 0 || (reactorCodeOld.value == null || reactorCodeOld.value == "" || reactorCodeOld.value == void 0)) {
          uni.showToast({
            title: "请选择任务",
            icon: "none",
            duration: 2e3,
            complete: () => {
              uni.navigateBack();
            }
          });
        }
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
      });
      const scanCode = () => {
        uni.scanCode({
          onlyFromCamera: false,
          // 可选：true 表示只从相机扫码，false 可从相册选择
          scanType: ["qrCode"],
          // 只识别二维码（可选：'barCode', 'datamatrix' 等）
          autoZoom: false,
          success: (res2) => {
            let code2 = res2.result;
            formatAppLog("log", "at pages/produce/index.vue:90", res2.result);
            if (code2 != null && code2 != void 0 && code2 != "") {
              if (code2.startsWith("REACTOR-")) {
                code2 = code2.split("-")[1];
                if (code2 == reactorCodeOld.value) {
                  uni.redirectTo({
                    url: "/pages/produce/recipe_line/recipe_line?taskId=" + taskId.value + "&reactorCode=" + reactorCodeOld.value
                  });
                } else {
                  uni.showToast({
                    title: "请扫描指定的反应釜",
                    icon: "none"
                  });
                }
              } else {
                uni.showToast({
                  title: "请扫描指定的反应釜二维码",
                  icon: "none"
                });
              }
            } else {
              uni.showToast({
                title: "请扫描正确的反应釜",
                icon: "none"
              });
            }
          },
          fail: (err2) => {
            formatAppLog("error", "at pages/produce/index.vue:119", "扫码失败：", err2);
            uni.showToast({
              title: "扫码失败",
              icon: "none"
            });
          }
        });
      };
      const showInputDialog = () => {
        reactorCode.value = "";
        popCode.value.open();
      };
      const dialogInputConfirm = (code2) => {
        if (code2 != null && code2 != void 0 && code2 != "") {
          if (code2 == reactorCodeOld.value) {
            uni.redirectTo({
              url: "/pages/produce/recipe_line/recipe_line?taskId=" + taskId.value + "&reactorCode=" + reactorCodeOld.value
            });
          } else {
            uni.showToast({
              title: "请输入指定的反应釜",
              icon: "none"
            });
          }
        } else {
          uni.showToast({
            title: "请输入正确的反应釜",
            icon: "none"
          });
        }
      };
      const __returned__ = { popCode, reactorCode, screeWith, taskId, reactorCodeOld, scanCode, showInputDialog, dialogInputConfirm, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_1$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "scan-container" }, [
        vue.createElementVNode("div", { class: "scan-header" }, [
          vue.createElementVNode("div", { class: "scan-title" }, "扫码绑定反应釜"),
          vue.createElementVNode("div", { class: "scan-subtitle" }, " 请扫描反应釜上的二维码开始配料任务。系统将自动加载配方信息， 并引导您完成配料过程。 ")
        ]),
        vue.createElementVNode("div", { class: "scan-box" }, [
          vue.createElementVNode("div", { class: "scan-frame" }, [
            vue.createElementVNode("div", { class: "scan-line" }),
            vue.createVNode(_component_l_icon, {
              name: "qrcode",
              color: "#ffffff",
              size: "100px"
            })
          ]),
          vue.createElementVNode("div", { class: "scan-tip" }, " 将二维码放入框内，系统将自动识别。如遇扫码问题， 可选择手动输入反应釜编号。 "),
          vue.createElementVNode("div", { class: "scan-actions" }, [
            vue.createElementVNode("button", {
              class: "btn scan-btn",
              onClick: $setup.scanCode
            }, [
              vue.createVNode(_component_l_icon, {
                name: "camera",
                color: "#000000",
                size: "16px"
              }),
              vue.createElementVNode("div", { style: { "width": "8px" } }),
              vue.createTextVNode(" 开始扫描 ")
            ]),
            vue.createElementVNode("button", {
              class: "btn manual-btn",
              onClick: $setup.showInputDialog
            }, [
              vue.createVNode(_component_l_icon, {
                name: "keyboard",
                color: "#000000",
                size: "16px"
              }),
              vue.createElementVNode("div", { style: { "width": "8px" } }),
              vue.createTextVNode("手动输入 ")
            ])
          ])
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popCode",
            type: "dialog"
          },
          {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_popup_dialog, {
                ref: "inputClose",
                mode: "input",
                title: "反应釜编码",
                value: $setup.reactorCode,
                placeholder: "请输入反应釜编码",
                onConfirm: $setup.dialogInputConfirm
              }, null, 8, ["value"])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ])
    ]);
  }
  const PagesProduceIndex = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-d5b220fc"], ["__file", "D:/workfile/FoodWebApp/pages/produce/index.vue"]]);
  const _sfc_main$s = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const {
        proxy
      } = vue.getCurrentInstance();
      const userStore = useUserStore();
      const globalConfig = vue.ref(getApp().globalData.config);
      onLoad(() => {
      });
      const screeWith = vue.ref(null);
      const handleClick = (type) => {
        switch (type) {
          case "userinfo":
            uni.navigateTo({
              url: "/pages/mine/userinfo/userinfo"
            });
            break;
          case "pwd":
            uni.navigateTo({
              url: "/pages/mine/changepwd/changepwd"
            });
            break;
          case "about":
            uni.navigateTo({
              url: "/pages/mine/about/about"
            });
            break;
          case "yszc":
            var site = globalConfig.value.appInfo.agreements[0];
            uni.navigateTo({
              url: `/pages/common/webview/index?title=${site.title}&url=${site.url}`
            });
            break;
          case "yhxy":
            var site = globalConfig.value.appInfo.agreements[1];
            uni.navigateTo({
              url: `/pages/common/webview/index?title=${site.title}&url=${site.url}`
            });
            break;
          case "quit":
            uni.showModal({
              title: "退出登录",
              content: "确定要退出登录吗！",
              success: (res2) => {
                if (res2.confirm) {
                  userStore.logOut().then((res3) => {
                    uni.clearStorageSync();
                    proxy.$tab.reLaunch("/pages/login");
                  });
                }
              }
            });
        }
      };
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
      });
      userStore.getInfo();
      const __returned__ = { proxy, userStore, globalConfig, screeWith, handleClick, get storage() {
        return storage;
      }, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get useUserStore() {
        return useUserStore;
      }, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("div", { class: "card" }, [
          vue.createElementVNode("div", {
            style: { "display": "flex", "flex-direction": "row", "justify-content": "flex-start", "align-items": "center" },
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleClick("userinfo"))
          }, [
            vue.createElementVNode("image", {
              src: _imports_0$1,
              style: { "width": "100px", "height": "100px" }
            }),
            vue.createElementVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "flex-start" } }, [
              $setup.userStore.nick ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "user-info"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "u_title" },
                  " 欢迎你," + vue.toDisplayString($setup.userStore.nick),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true),
              $setup.userStore.name ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "user-info"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "u_subtitle" },
                  " 用户名:" + vue.toDisplayString($setup.userStore.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "u_subtitle" },
                  " ID:" + vue.toDisplayString($setup.userStore.id),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ]),
        vue.createElementVNode("div", { class: "card" }, [
          vue.createElementVNode("view", {
            class: "custom-list-item",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.handleClick("userinfo"))
          }, [
            vue.createElementVNode("view", { class: "left-content" }, [
              vue.createVNode(_component_l_icon, {
                name: "user-business-filled",
                size: "20px",
                color: "#3498db"
              }),
              vue.createElementVNode("div", { style: { "width": "10px" } }),
              vue.createElementVNode("text", { class: "name" }, "个人信息")
            ]),
            vue.createVNode(_component_l_icon, {
              name: "chevron-right",
              size: "20px",
              color: "#707070"
            })
          ]),
          vue.createElementVNode("view", {
            class: "custom-list-item",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.handleClick("pwd"))
          }, [
            vue.createElementVNode("view", { class: "left-content" }, [
              vue.createVNode(_component_l_icon, {
                name: "user-password-filled",
                size: "20px",
                color: "#3498db"
              }),
              vue.createElementVNode("div", { style: { "width": "10px" } }),
              vue.createElementVNode("text", { class: "name" }, "修改密码")
            ]),
            vue.createVNode(_component_l_icon, {
              name: "chevron-right",
              size: "20px",
              color: "#707070"
            })
          ])
        ]),
        vue.createElementVNode("div", { class: "card" }, [
          vue.createElementVNode("view", {
            class: "custom-list-item",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.handleClick("about"))
          }, [
            vue.createElementVNode("view", { class: "left-content" }, [
              vue.createVNode(_component_l_icon, {
                name: "app-filled",
                size: "20px",
                color: "#3498db"
              }),
              vue.createElementVNode("div", { style: { "width": "10px" } }),
              vue.createElementVNode("text", { class: "name" }, "关于App")
            ]),
            vue.createVNode(_component_l_icon, {
              name: "chevron-right",
              size: "20px",
              color: "#707070"
            })
          ]),
          vue.createElementVNode("view", {
            class: "custom-list-item",
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.handleClick("yszc"))
          }, [
            vue.createElementVNode("view", { class: "left-content" }, [
              vue.createVNode(_component_l_icon, {
                name: "accessibility-filled",
                size: "20px",
                color: "#3498db"
              }),
              vue.createElementVNode("div", { style: { "width": "10px" } }),
              vue.createElementVNode("text", { class: "name" }, "隐私政策")
            ]),
            vue.createVNode(_component_l_icon, {
              name: "chevron-right",
              size: "20px",
              color: "#707070"
            })
          ]),
          vue.createElementVNode("view", {
            class: "custom-list-item",
            onClick: _cache[5] || (_cache[5] = ($event) => $setup.handleClick("yhxy"))
          }, [
            vue.createElementVNode("view", { class: "left-content" }, [
              vue.createVNode(_component_l_icon, {
                name: "help-circle-filled",
                size: "20px",
                color: "#3498db"
              }),
              vue.createElementVNode("div", { style: { "width": "10px" } }),
              vue.createElementVNode("text", { class: "name" }, "用户协议")
            ]),
            vue.createVNode(_component_l_icon, {
              name: "chevron-right",
              size: "20px",
              color: "#707070"
            })
          ]),
          vue.createElementVNode("view", {
            class: "custom-list-item",
            onClick: _cache[6] || (_cache[6] = ($event) => $setup.handleClick("quit"))
          }, [
            vue.createElementVNode("view", { class: "left-content" }, [
              vue.createVNode(_component_l_icon, {
                name: "secured-filled",
                size: "20px",
                color: "#3498db"
              }),
              vue.createElementVNode("div", { style: { "width": "10px" } }),
              vue.createElementVNode("text", { class: "name" }, "退出登录")
            ]),
            vue.createVNode(_component_l_icon, {
              name: "chevron-right",
              size: "20px",
              color: "#707070"
            })
          ])
        ])
      ])
    ]);
  }
  const PagesMineIndex = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-569e925a"], ["__file", "D:/workfile/FoodWebApp/pages/mine/index.vue"]]);
  const _sfc_main$r = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const webUrl = vue.ref("");
      const webviewStyles = vue.ref({
        progress: {
          color: "#2ecc71"
        }
      });
      onLoad((options) => {
        if (options.url) {
          webUrl.value = options.url;
        }
      });
      const __returned__ = { webUrl, webviewStyles, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("web-view", {
        "webview-styles": $setup.webviewStyles,
        src: $setup.webUrl
      }, null, 8, ["webview-styles", "src"])
    ]);
  }
  const PagesCommonWebviewIndex = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__file", "D:/workfile/FoodWebApp/pages/common/webview/index.vue"]]);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var dayjs_min = { exports: {} };
  (function(module2, exports) {
    !function(t2, e2) {
      module2.exports = e2();
    }(commonjsGlobal, function() {
      var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
        return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
      } }, m2 = function(t3, e3, n3) {
        var r3 = String(t3);
        return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
      }, v2 = { s: m2, z: function(t3) {
        var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
        return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
      }, m: function t3(e3, n3) {
        if (e3.date() < n3.date())
          return -t3(n3, e3);
        var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, c2), s3 = n3 - i3 < 0, u3 = e3.clone().add(r3 + (s3 ? -1 : 1), c2);
        return +(-(r3 + (n3 - i3) / (s3 ? i3 - u3 : u3 - i3)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c2, y: h2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g2 = "en", D2 = {};
      D2[g2] = M2;
      var p2 = "$isDayjsObject", S2 = function(t3) {
        return t3 instanceof _2 || !(!t3 || !t3[p2]);
      }, w2 = function t3(e3, n3, r3) {
        var i3;
        if (!e3)
          return g2;
        if ("string" == typeof e3) {
          var s3 = e3.toLowerCase();
          D2[s3] && (i3 = s3), n3 && (D2[s3] = n3, i3 = s3);
          var u3 = e3.split("-");
          if (!i3 && u3.length > 1)
            return t3(u3[0]);
        } else {
          var a3 = e3.name;
          D2[a3] = e3, i3 = a3;
        }
        return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
      }, O = function(t3, e3) {
        if (S2(t3))
          return t3.clone();
        var n3 = "object" == typeof e3 ? e3 : {};
        return n3.date = t3, n3.args = arguments, new _2(n3);
      }, b2 = v2;
      b2.l = w2, b2.i = S2, b2.w = function(t3, e3) {
        return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _2 = function() {
        function M3(t3) {
          this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
        }
        var m3 = M3.prototype;
        return m3.parse = function(t3) {
          this.$d = function(t4) {
            var e3 = t4.date, n3 = t4.utc;
            if (null === e3)
              return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e3))
              return /* @__PURE__ */ new Date();
            if (e3 instanceof Date)
              return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r3 = e3.match($2);
              if (r3) {
                var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
                return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
              }
            }
            return new Date(e3);
          }(t3), this.init();
        }, m3.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l2);
        }, m3.isSame = function(t3, e3) {
          var n3 = O(t3);
          return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
        }, m3.isAfter = function(t3, e3) {
          return O(t3) < this.startOf(e3);
        }, m3.isBefore = function(t3, e3) {
          return this.endOf(e3) < O(t3);
        }, m3.$g = function(t3, e3, n3) {
          return b2.u(t3) ? this[e3] : this.set(n3, t3);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t3, e3) {
          var n3 = this, r3 = !!b2.u(e3) || e3, f3 = b2.p(t3), l3 = function(t4, e4) {
            var i3 = b2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
            return r3 ? i3 : i3.endOf(a2);
          }, $3 = function(t4, e4) {
            return b2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
          }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h2:
              return r3 ? l3(1, 0) : l3(31, 11);
            case c2:
              return r3 ? l3(1, M4) : l3(0, M4 + 1);
            case o2:
              var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
              return l3(r3 ? m4 - D3 : m4 + (6 - D3), M4);
            case a2:
            case d2:
              return $3(v3 + "Hours", 0);
            case u2:
              return $3(v3 + "Minutes", 1);
            case s2:
              return $3(v3 + "Seconds", 2);
            case i2:
              return $3(v3 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m3.$set = function(t3, e3) {
          var n3, o3 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o3], $3 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
          if (o3 === c2 || o3 === h2) {
            var y3 = this.clone().set(d2, 1);
            y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
          } else
            l3 && this.$d[l3]($3);
          return this.init(), this;
        }, m3.set = function(t3, e3) {
          return this.clone().$set(t3, e3);
        }, m3.get = function(t3) {
          return this[b2.p(t3)]();
        }, m3.add = function(r3, f3) {
          var d3, l3 = this;
          r3 = Number(r3);
          var $3 = b2.p(f3), y3 = function(t3) {
            var e3 = O(l3);
            return b2.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
          };
          if ($3 === c2)
            return this.set(c2, this.$M + r3);
          if ($3 === h2)
            return this.set(h2, this.$y + r3);
          if ($3 === a2)
            return y3(1);
          if ($3 === o2)
            return y3(7);
          var M4 = (d3 = {}, d3[s2] = e2, d3[u2] = n2, d3[i2] = t2, d3)[$3] || 1, m4 = this.$d.getTime() + r3 * M4;
          return b2.w(m4, this);
        }, m3.subtract = function(t3, e3) {
          return this.add(-1 * t3, e3);
        }, m3.format = function(t3) {
          var e3 = this, n3 = this.$locale();
          if (!this.isValid())
            return n3.invalidDate || l2;
          var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i4, s4) {
            return t4 && (t4[n4] || t4(e3, r3)) || i4[n4].slice(0, s4);
          }, d3 = function(t4) {
            return b2.s(s3 % 12 || 12, t4, "0");
          }, $3 = f3 || function(t4, e4, n4) {
            var r4 = t4 < 12 ? "AM" : "PM";
            return n4 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y2, function(t4, r4) {
            return r4 || function(t5) {
              switch (t5) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b2.s(e3.$y, 4, "0");
                case "M":
                  return a3 + 1;
                case "MM":
                  return b2.s(a3 + 1, 2, "0");
                case "MMM":
                  return h3(n3.monthsShort, a3, c3, 3);
                case "MMMM":
                  return h3(c3, a3);
                case "D":
                  return e3.$D;
                case "DD":
                  return b2.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h3(n3.weekdaysMin, e3.$W, o3, 2);
                case "ddd":
                  return h3(n3.weekdaysShort, e3.$W, o3, 3);
                case "dddd":
                  return o3[e3.$W];
                case "H":
                  return String(s3);
                case "HH":
                  return b2.s(s3, 2, "0");
                case "h":
                  return d3(1);
                case "hh":
                  return d3(2);
                case "a":
                  return $3(s3, u3, true);
                case "A":
                  return $3(s3, u3, false);
                case "m":
                  return String(u3);
                case "mm":
                  return b2.s(u3, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b2.s(e3.$s, 2, "0");
                case "SSS":
                  return b2.s(e3.$ms, 3, "0");
                case "Z":
                  return i3;
              }
              return null;
            }(t4) || i3.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r3, d3, l3) {
          var $3, y3 = this, M4 = b2.p(d3), m4 = O(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D3 = function() {
            return b2.m(y3, m4);
          };
          switch (M4) {
            case h2:
              $3 = D3() / 12;
              break;
            case c2:
              $3 = D3();
              break;
            case f2:
              $3 = D3() / 3;
              break;
            case o2:
              $3 = (g3 - v3) / 6048e5;
              break;
            case a2:
              $3 = (g3 - v3) / 864e5;
              break;
            case u2:
              $3 = g3 / n2;
              break;
            case s2:
              $3 = g3 / e2;
              break;
            case i2:
              $3 = g3 / t2;
              break;
            default:
              $3 = g3;
          }
          return l3 ? $3 : b2.a($3);
        }, m3.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m3.$locale = function() {
          return D2[this.$L];
        }, m3.locale = function(t3, e3) {
          if (!t3)
            return this.$L;
          var n3 = this.clone(), r3 = w2(t3, e3, true);
          return r3 && (n3.$L = r3), n3;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M3;
      }(), k = _2.prototype;
      return O.prototype = k, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
        k[t3[1]] = function(e3) {
          return this.$g(e3, t3[0], t3[1]);
        };
      }), O.extend = function(t3, e3) {
        return t3.$i || (t3(e3, _2, O), t3.$i = true), O;
      }, O.locale = w2, O.isDayjs = S2, O.unix = function(t3) {
        return O(1e3 * t3);
      }, O.en = D2[g2], O.Ls = D2, O.p = {}, O;
    });
  })(dayjs_min);
  var dayjs_minExports = dayjs_min.exports;
  const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
  var isToday$1 = { exports: {} };
  (function(module2, exports) {
    !function(e2, o2) {
      module2.exports = o2();
    }(commonjsGlobal, function() {
      return function(e2, o2, t2) {
        o2.prototype.isToday = function() {
          var e3 = "YYYY-MM-DD", o3 = t2();
          return this.format(e3) === o3.format(e3);
        };
      };
    });
  })(isToday$1);
  var isTodayExports = isToday$1.exports;
  const isToday = /* @__PURE__ */ getDefaultExportFromCjs(isTodayExports);
  function listNotice(query) {
    return request({
      url: "/sys/notice/list",
      method: "get",
      params: query
    });
  }
  function updateNotice(data2) {
    return request({
      url: "/sys/notice/update",
      method: "get",
      params: data2
    });
  }
  function readAll() {
    return request({
      url: "/sys/notice/readAll",
      method: "get"
    });
  }
  function getNoticeInfo(noticeId) {
    return request({
      url: "/pro/notice/" + noticeId,
      method: "get"
    });
  }
  const _sfc_main$q = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      dayjs.extend(isToday);
      const triggered = vue.ref(false);
      const xlstatus = vue.ref("more");
      const msgList = vue.ref([]);
      const totalMsgCount = vue.ref(0);
      const msgType = vue.ref({
        title: "全部消息",
        value: null
      });
      const readType = vue.ref({
        title: "已读/未读",
        value: null
      });
      const queryParams = vue.ref({
        pageSize: 10,
        pageNum: 1,
        msgType: null,
        readType: null
      });
      const onRefresh = () => {
        if (!triggered.value) {
          triggered.value = true;
          reloadMyMsg().finally(() => {
            triggered.value = false;
          });
        }
      };
      const onScrollToLower = () => {
        formatAppLog("log", "at pages/msg/index.vue:119", "12");
        if (xlstatus.value === "noMore" || xlstatus.value === "loading")
          return;
        xlstatus.value = "loading";
        queryParams.value.pageNum++;
        loadMyMsg();
      };
      const chooseMsgType = () => {
        uni.showActionSheet({
          title: "请选择消息类型",
          itemList: ["全部消息", "生产任务", "配料超重", "消息通知"],
          success: function(e2) {
            formatAppLog("log", "at pages/msg/index.vue:130", e2);
            switch (e2.tapIndex) {
              case 0:
                msgType.value = {
                  title: "全部消息",
                  value: null
                };
                queryParams.value.msgType = null;
                break;
              case 1:
                msgType.value = {
                  title: "生产任务",
                  value: 1
                };
                queryParams.value.msgType = 1;
                break;
              case 2:
                msgType.value = {
                  title: "配料超重",
                  value: 2
                };
                queryParams.value.msgType = 2;
                break;
              case 3:
                msgType.value = {
                  title: "消息通知",
                  value: 3
                };
                queryParams.value.msgType = 3;
                break;
            }
            reloadMyMsg();
          }
        });
      };
      const chooseMsgReadType = () => {
        uni.showActionSheet({
          title: "请选择是否已读",
          itemList: ["已读/未读", "已读", "未读"],
          success: function(e2) {
            switch (e2.tapIndex) {
              case 0:
                readType.value = {
                  title: "已读/未读",
                  value: null
                };
                queryParams.value.readType = null;
                break;
              case 1:
                readType.value = {
                  title: "已读",
                  value: 1
                };
                queryParams.value.readType = 1;
                break;
              case 2:
                readType.value = {
                  title: "未读",
                  value: 0
                };
                queryParams.value.readType = 0;
                break;
            }
            reloadMyMsg();
          }
        });
      };
      const chooseMsgReadAll = () => {
        uni.showLoading({
          title: "加载中..",
          mask: true
        });
        readAll().then((res2) => {
          uni.hideLoading();
          reloadMyMsg();
        }).catch((e2) => {
          uni.hideLoading();
        });
      };
      onLoad(() => {
      });
      const screeWith = vue.ref(null);
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        reloadMyMsg();
      });
      const clickNoticeItem = (notice) => {
        formatAppLog("log", "at pages/msg/index.vue:226", notice);
        if (notice.readType == 0) {
          let param = {
            msgId: notice.id,
            readType: 1
          };
          uni.showLoading({
            title: "加载中...",
            mask: true
          });
          updateNotice(param).then((res2) => {
            uni.hideLoading();
            handleNotice(notice);
          }).catch((e2) => {
            uni.hideLoading();
            uni.showToast({
              title: e2,
              icon: "none"
            });
          });
        } else {
          handleNotice(notice);
        }
      };
      const formatTime = (time2) => {
        if (dayjs(time2).isToday()) {
          return dayjs(time2).format("HH:mm");
        } else if (dayjs(time2).isSame(dayjs(), "year")) {
          return dayjs(time2).format("MM月DD日");
        } else {
          return dayjs(time2).format("YYYY年");
        }
      };
      const handleNotice = (msg) => {
        formatAppLog("log", "at pages/msg/index.vue:262", msg);
        if (msg.msgType == 3) {
          uni.navigateTo({
            url: "/pages/msg/notice/notice?noticeId=" + msg.fromId
          });
          return;
        } else if (msg.msgType == 1) {
          uni.navigateTo({
            url: "/pages/task/taskdetails/taskdetails?taskId=" + msg.fromId
          });
        } else if (msg.msgType == 2) {
          uni.navigateTo({
            url: "/pages/task/taskwarn/taskwarn?recordId=" + msg.fromId
          });
        } else {
          uni.showToast({
            title: "暂不支持此类型",
            icon: "none"
          });
        }
      };
      const reloadMyMsg = () => {
        msgList.value = [];
        queryParams.value.pageNum = 1;
        queryParams.value.pageSize = 10;
        return loadMyMsg();
      };
      const loadMyMsg = () => {
        return new Promise((resolve, reject) => {
          uni.showLoading({
            title: "加载中..",
            mask: true
          });
          listNotice(queryParams.value).then((res2) => {
            totalMsgCount.value = res2.total;
            msgList.value.push(...res2.rows);
            if (res2.total == void 0) {
              xlstatus.value = "more";
            } else if (res2.total <= msgList.value.length) {
              xlstatus.value = "noMore";
            } else {
              xlstatus.value = "more";
            }
            uni.hideLoading();
            resolve(res2);
          }).catch((e2) => {
            uni.hideLoading();
            reject(e2);
          });
        });
      };
      const __returned__ = { triggered, xlstatus, msgList, totalMsgCount, msgType, readType, queryParams, onRefresh, onScrollToLower, chooseMsgType, chooseMsgReadType, chooseMsgReadAll, screeWith, clickNoticeItem, formatTime, handleNotice, reloadMyMsg, loadMyMsg, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get dayjs() {
        return dayjs;
      }, get isToday() {
        return isToday;
      }, get readAll() {
        return readAll;
      }, get updateNotice() {
        return updateNotice;
      }, get listNotice() {
        return listNotice;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "header-menu",
          onClick: $setup.chooseMsgType
        }, [
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString($setup.msgType.title),
            1
            /* TEXT */
          ),
          vue.createVNode(_component_l_icon, {
            name: "caret-down-small",
            size: "15px",
            color: "#707070"
          })
        ]),
        vue.createElementVNode("view", {
          class: "header-menu",
          onClick: $setup.chooseMsgReadType
        }, [
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString($setup.readType.title),
            1
            /* TEXT */
          ),
          vue.createVNode(_component_l_icon, {
            name: "caret-down-small",
            size: "15px",
            color: "#707070"
          })
        ]),
        vue.createElementVNode("view", {
          class: "header-menu",
          onClick: $setup.chooseMsgReadAll
        }, [
          vue.createElementVNode("view", null, "全标已读"),
          vue.createVNode(_component_l_icon, {
            name: "task-checked-1",
            size: "10px",
            color: "#707070"
          })
        ])
      ]),
      vue.createElementVNode("scroll-view", {
        class: "content-scroll",
        "scroll-y": "true",
        "refresher-triggered": $setup.triggered,
        "refresher-enabled": true,
        onRefresherrefresh: $setup.onRefresh,
        onScrolltolower: $setup.onScrollToLower,
        "refresher-threshold": "60",
        "refresher-background": "#f8f8f8"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.msgList, (msg, index2) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              onClick: ($event) => $setup.clickNoticeItem(msg)
            }, [
              vue.createElementVNode("div", { class: "message-item" }, [
                vue.createElementVNode("view", { class: "message-icon" }, [
                  msg.msgType == "1" ? (vue.openBlock(), vue.createBlock(_component_l_icon, {
                    key: 0,
                    name: "task-time",
                    color: "#fff",
                    size: "20px"
                  })) : msg.msgType == "2" ? (vue.openBlock(), vue.createBlock(_component_l_icon, {
                    key: 1,
                    name: "chart-ring",
                    color: "#fff",
                    size: "20px"
                  })) : msg.msgType == "3" ? (vue.openBlock(), vue.createBlock(_component_l_icon, {
                    key: 2,
                    name: "system-messages",
                    color: "#fff",
                    size: "20px"
                  })) : (vue.openBlock(), vue.createBlock(_component_l_icon, {
                    key: 3,
                    name: "chat-message",
                    color: "#fff",
                    size: "20px"
                  }))
                ]),
                vue.createElementVNode("view", { class: "message-content" }, [
                  msg.msgType == "1" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "message-status"
                  }, "生产任务 ")) : msg.msgType == "2" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "message-status"
                  }, "配料超重 ")) : msg.msgType == "3" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "message-status"
                  }, "消息通知 ")) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 3,
                    class: "message-status"
                  }, "其他消息 ")),
                  vue.createElementVNode("div", { style: { "height": "2px" } }),
                  vue.createElementVNode(
                    "text",
                    { class: "message-text" },
                    vue.toDisplayString(msg.msgContent || ""),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "date-content" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "message-date" },
                    vue.toDisplayString($setup.formatTime(msg.createTime || "")),
                    1
                    /* TEXT */
                  ),
                  msg.readType == 0 ? (vue.openBlock(), vue.createBlock(_component_l_icon, {
                    key: 0,
                    style: { "margin-top": "10px" },
                    name: "circle-filled",
                    color: "#ff0000",
                    size: "3px"
                  })) : vue.createCommentVNode("v-if", true)
                ])
              ])
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        )),
        $setup.msgList == null || $setup.msgList == "" || $setup.msgList.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit",
            style: { "width": "150px", "height": "150px" }
          }),
          vue.createElementVNode("view", { style: { "font-size": "16px", "color": "#808080" } }, "-暂无数据-")
        ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
          vue.createVNode(_component_uni_load_more, { status: $setup.xlstatus }, null, 8, ["status"])
        ]))
      ], 40, ["refresher-triggered"])
    ]);
  }
  const PagesMsgIndex = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-6ddef3fc"], ["__file", "D:/workfile/FoodWebApp/pages/msg/index.vue"]]);
  function getAppVersion(os2, version) {
    return request({
      url: "/app/version/getAppVersion?os=" + os2 + "&version=" + version,
      method: "get"
    });
  }
  const _sfc_main$p = {
    __name: "about",
    setup(__props, { expose: __expose }) {
      __expose();
      const appName = vue.ref("");
      const screeWith = vue.ref(null);
      const appVersion = vue.ref("1.0.0");
      const showCheckVersion = vue.ref(false);
      onLoad(() => {
      });
      const getAppLastVersion = () => {
        let os2 = "";
        let plt = uni.getSystemInfoSync().platform;
        if (plt == "ios") {
          os2 = "2";
        } else if (plt == "android") {
          os2 = "1";
        } else if (plt == "harmonyos") {
          os2 = "4";
        } else {
          return;
        }
        uni.showLoading({
          title: "加载中...",
          mask: true
        });
        getAppVersion(os2, appVersion.value).then((res2) => {
          uni.hideLoading();
          if (res2.code == 200) {
            formatAppLog("log", "at pages/mine/about/about.vue:54", res2);
            if (res2.data.update == true) {
              uni.showModal({
                title: "发现新版本",
                content: res2.data.info,
                showCancel: res2.data.force == false,
                success: function(res1) {
                  if (res1.confirm) {
                    plus.runtime.openWeb(res2.data.url);
                  } else if (res1.cancel) {
                    formatAppLog("log", "at pages/mine/about/about.vue:64", "用户点击取消");
                  }
                }
              });
            } else {
              uni.hideLoading();
              uni.showToast({
                title: "已是最新版本",
                icon: "none"
              });
            }
          } else {
            uni.hideLoading();
            uni.showToast({
              title: "获取版本失败：" + res2.msg,
              icon: "none"
            });
          }
        }).catch((res2) => {
          formatAppLog("log", "at pages/mine/about/about.vue:83", res2);
          uni.hideLoading();
          uni.showToast({
            title: res2,
            icon: "none"
          });
        });
      };
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        formatAppLog("log", "at pages/mine/about/about.vue:100", systemInfo2);
        appVersion.value = systemInfo2.appVersion;
        showCheckVersion.value = true;
        screeWith.value = systemInfo2.windowWidth;
        formatAppLog("log", "at pages/mine/about/about.vue:105", appVersion.value);
      });
      const __returned__ = { appName, screeWith, appVersion, showCheckVersion, getAppLastVersion, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get getAppVersion() {
        return getAppVersion;
      }, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", {
        class: "content",
        style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
      }, [
        vue.createElementVNode("image", {
          src: _imports_0$1,
          style: { "width": "100px", "height": "100px" }
        }),
        vue.createElementVNode("div", { style: { "height": "20px" } }),
        vue.createElementVNode("view", { style: { "color": "#3498db", "font-size": "20px", "font-weight": "700" } }, "智能投料"),
        vue.createElementVNode("div", { style: { "height": "15px" } }),
        vue.createElementVNode(
          "view",
          { style: { "color": "#707090", "font-size": "15px" } },
          "版本:V" + vue.toDisplayString($setup.appVersion),
          1
          /* TEXT */
        ),
        vue.createElementVNode("div", { style: { "height": "40px" } }),
        $setup.showCheckVersion == true ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          style: { "height": "40px", "background": "#3498db", "color": "#ffffff", "font-size": "16px" },
          onClick: $setup.getAppLastVersion
        }, "检查更新")) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesMineAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-589d3e24"], ["__file", "D:/workfile/FoodWebApp/pages/mine/about/about.vue"]]);
  function getUserProfile() {
    return request({
      url: "/system/user/profile",
      method: "get"
    });
  }
  function updateUserPwd(oldPassword, newPassword) {
    const data2 = {
      oldPassword,
      newPassword
    };
    return request({
      url: "/system/user/profile/updatePwd",
      method: "put",
      params: data2
    });
  }
  const _sfc_main$o = {
    __name: "userinfo",
    setup(__props, { expose: __expose }) {
      __expose();
      const userInfo = vue.ref(null);
      onLoad(() => {
      });
      const screeWith = vue.ref(null);
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        uni.showLoading({
          title: "加载中...",
          mask: true
        });
        getUserProfile().then((res2) => {
          uni.hideLoading();
          userInfo.value = res2.data;
        });
      });
      const __returned__ = { userInfo, screeWith, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get getUserProfile() {
        return getUserProfile;
      }, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "content" }, [
        $setup.userInfo != null && $setup.userInfo != "" ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "card"
        }, [
          vue.createElementVNode("view", { class: "custom-list-item" }, [
            vue.createElementVNode("view", { class: "left-content" }, "姓名"),
            vue.createElementVNode(
              "view",
              { class: "name" },
              vue.toDisplayString($setup.userInfo.nickName || ""),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "custom-list-item" }, [
            vue.createElementVNode("view", { class: "left-content" }, "账号"),
            vue.createElementVNode(
              "view",
              { class: "name" },
              vue.toDisplayString($setup.userInfo.userName || ""),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "custom-list-item" }, [
            vue.createElementVNode("view", { class: "left-content" }, "手机"),
            vue.createElementVNode(
              "view",
              { class: "name" },
              vue.toDisplayString($setup.userInfo.phonenumber || ""),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "custom-list-item" }, [
            vue.createElementVNode("view", { class: "left-content" }, "邮箱"),
            vue.createElementVNode(
              "view",
              { class: "name" },
              vue.toDisplayString($setup.userInfo.email || ""),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "custom-list-item" }, [
            vue.createElementVNode("view", { class: "left-content" }, "部门"),
            vue.createElementVNode(
              "view",
              { class: "name" },
              vue.toDisplayString($setup.userInfo.dept.deptName || ""),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "custom-list-item" }, [
            vue.createElementVNode("view", { class: "left-content" }, "性别"),
            $setup.userInfo.sex == "0" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "name"
            }, "男")) : $setup.userInfo.sex == "1" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "name"
            }, "女")) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "name"
            }, "未知"))
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesMineUserinfoUserinfo = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-c1a70f06"], ["__file", "D:/workfile/FoodWebApp/pages/mine/userinfo/userinfo.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key2 in obj) {
      const val = obj[key2];
      if (val) {
        classess += `${key2} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key2 in obj) {
      const val = obj[key2];
      style += `${key2}:${val};`;
    }
    return style;
  }
  const _sfc_main$n = {
    name: "uni-easyinput",
    emits: [
      "click",
      "iconClick",
      "update:modelValue",
      "input",
      "focus",
      "blur",
      "confirm",
      "clear",
      "eyes",
      "change",
      "keyboardheightchange"
    ],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      modelValue(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = "";
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("blur", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e2) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing", "adjust-position"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "adjust-position"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-09fd5285"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$m = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: ""
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "70px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name2 = _realName(this.name);
        if (!value) {
          value = this.form.formData[name2];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name2]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "校验错误",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "提示",
                content: result.errorMessage || "校验错误"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name2 = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name2] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name2] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index2) => {
            if (item === this) {
              this.form.childrens.splice(index2, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value) {
        const name2 = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name2, value, rules);
        this.form._setDataValue(name2, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 70 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
      },
      [
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
              style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ], true),
        vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-462874dd"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key2 in args) {
      let reg = new RegExp("{" + key2 + "}");
      str = str.replace(reg, args[key2]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e2) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data2, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules.length; i2++) {
        let rule = rules[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now2 = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now2);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data2, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data2, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res2 = await rule.validateFunction(rule, value, allData || data2, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res2 === "string" && res2 || res2 === false) {
          result = this._getMessage(rule, callbackMessage || res2, vt2);
        }
      } catch (e2) {
        result = this._getMessage(rule, e2.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list2 = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list2[i2] = item.value;
        } else {
          list2[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list2)).size === list2.length;
      } else {
        if (list2.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data2, allData) {
      let result = this._checkFieldInSchema(data2);
      if (!result) {
        result = await this.invokeValidate(data2, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data2, allData) {
      let result = this._checkFieldInSchema(data2);
      if (!result) {
        result = await this.invokeValidate(data2, true, allData);
      }
      return result;
    }
    async validateUpdate(data2, allData) {
      let result = this._checkFieldInSchema(data2);
      if (!result) {
        result = await this.invokeValidateUpdate(data2, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data2, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key2 in schema) {
        let value = schema[key2];
        let errorMessage = await this.validateRule(key2, value, data2[key2], data2, allData);
        if (errorMessage != null) {
          result.push({
            key: key2,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data2, all, allData) {
      let result = [];
      for (let key2 in data2) {
        let errorMessage = await this.validateRule(key2, this._schema[key2], data2[key2], data2, allData);
        if (errorMessage != null) {
          result.push({
            key: key2,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data2) {
      var keys = Object.keys(data2);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key2) => {
        return keys2.indexOf(key2) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy$1 = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key2, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data2) => {
    return objGet(data2, field);
  };
  const realName = (name2, data2 = {}) => {
    const base_name = _basePath(name2);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a2, b2) => a2 += `#${b2}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name2;
  };
  const isRealName = (name2) => {
    const reg = /^_formdata_#*/;
    return reg.test(name2);
  };
  const rawData = (object = {}, name2) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i2 in newData) {
      let path = name2arr(i2);
      objSet(formData, path, newData[i2]);
    }
    return formData;
  };
  const name2arr = (name2) => {
    let field = name2.replace("_formdata_#", "");
    field = field.split("#").map((v2) => isNumber(v2) ? Number(v2) : v2);
    return field;
  };
  const objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o2, k, i2, _2) => {
      if (i2 === _2.length - 1) {
        o2[k] = value;
        return null;
      } else if (k in o2) {
        return o2[k];
      } else {
        o2[k] = /^[0-9]{1,}$/.test(_2[i2 + 1]) ? [] : {};
        return o2[k];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o2, k) => {
      return (o2 || {})[k];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i2 = 0; i2 < rules.length; i2++) {
      const ruleData = rules[i2];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a2, b2) => {
    if (a2 === b2) {
      return a2 !== 0 || 1 / a2 === 1 / b2;
    }
    if (a2 == null || b2 == null) {
      return a2 === b2;
    }
    var classNameA = toString.call(a2), classNameB = toString.call(b2);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a2 === "" + b2;
      case "[object Number]":
        if (+a2 !== +a2) {
          return +b2 !== +b2;
        }
        return +a2 === 0 ? 1 / +a2 === 1 / b2 : +a2 === +b2;
      case "[object Date]":
      case "[object Boolean]":
        return +a2 === +b2;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a2), propsB = Object.getOwnPropertyNames(b2);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i2 = 0; i2 < propsA.length; i2++) {
        var propName = propsA[i2];
        if (a2[propName] !== b2[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a2.toString() == b2.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$l = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy$1(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name2, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name2, value);
          } else {
            let formVm;
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:187", "当前 uni-froms 组件缺少 ref 属性");
            if (formVm.model)
              formVm.model[name2] = value;
            if (formVm.modelValue)
              formVm.modelValue[name2] = value;
            if (formVm.value)
              formVm.value[name2] = value;
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key2, value) {
        let example = this.childrens.find((child) => child.name === key2);
        if (!example)
          return null;
        this.formData[key2] = getValue(key2, value, this.formRules[key2] && this.formRules[key2].rules || []);
        return example.onFieldChange(this.formData[key2]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name2 = realName(item.name);
          if (props.indexOf(name2) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name2]: this.formData[name2]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name2 = realName(item.name);
            if (props.indexOf(name2) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:296", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => realName(v2.name) === i2);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i2 in childrens) {
          const child = childrens[i2];
          let name2 = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name2]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v2) => {
            let vName = realName(v2);
            let value = getDataValue(v2, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-9a1e3c32"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const _sfc_main$k = {
    __name: "changepwd",
    setup(__props, { expose: __expose }) {
      __expose();
      const {
        proxy
      } = vue.getCurrentInstance();
      const user2 = vue.ref({
        oldPassword: void 0,
        newPassword: void 0,
        confirmPassword: void 0
      });
      const rules = vue.ref({
        oldPassword: {
          rules: [{
            required: true,
            errorMessage: "旧密码不能为空"
          }]
        },
        newPassword: {
          rules: [
            {
              required: true,
              errorMessage: "新密码不能为空"
            },
            {
              minLength: 6,
              maxLength: 20,
              errorMessage: "长度在 6 到 20 个字符"
            }
          ]
        },
        confirmPassword: {
          rules: [{
            required: true,
            errorMessage: "确认密码不能为空"
          }, {
            validateFunction: (rule, value, data2) => data2.newPassword === value,
            errorMessage: "两次输入的密码不一致"
          }]
        }
      });
      onReady(() => {
        proxy.$refs.form.setRules(rules.value);
      });
      const submit = () => {
        proxy.$refs.form.validate().then((res2) => {
          uni.showLoading({
            title: "正在修改...",
            mask: true
          });
          updateUserPwd(user2.value.oldPassword, user2.value.newPassword).then((response) => {
            proxy.$modal.msgSuccess("修改成功");
            uni.hideLoading();
            uni.clearStorageSync();
            proxy.$tab.reLaunch("/pages/login");
          });
        });
      };
      const __returned__ = { proxy, user: user2, rules, submit, get updateUserPwd() {
        return updateUserPwd;
      }, get onReady() {
        return onReady;
      }, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$1);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "card" }, [
          vue.createVNode(_component_uni_forms, {
            ref: "form",
            value: $setup.user,
            labelWidth: "80px"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_forms_item, {
                name: "oldPassword",
                label: "旧密码"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: $setup.user.oldPassword,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.user.oldPassword = $event),
                    placeholder: "请输入旧密码"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, {
                name: "newPassword",
                label: "新密码"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: $setup.user.newPassword,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.user.newPassword = $event),
                    placeholder: "请输入新密码"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, {
                name: "confirmPassword",
                label: "确认密码"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: $setup.user.confirmPassword,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.user.confirmPassword = $event),
                    placeholder: "请确认新密码"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("button", {
                style: { "height": "40px", "background": "#3498db", "color": "#ffffff", "font-size": "16px" },
                onClick: $setup.submit
              }, "提交")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ])
      ])
    ]);
  }
  const PagesMineChangepwdChangepwd = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-ddd9f5b4"], ["__file", "D:/workfile/FoodWebApp/pages/mine/changepwd/changepwd.vue"]]);
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("handler");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["handler"] = "2f992f8c";
  };
  const _sfc_main$j = {
    name: "node",
    options: {},
    data() {
      return {
        ctrl: {}
      };
    },
    props: {
      name: String,
      attrs: {
        type: Object,
        default() {
          return {};
        }
      },
      childs: Array,
      opts: Array
    },
    components: {},
    mounted() {
      this.$nextTick(() => {
        for (this.root = this.$parent; this.root.$options.name !== "mp-html"; this.root = this.root.$parent)
          ;
      });
      if (this.opts[0]) {
        let i2;
        for (i2 = this.childs.length; i2--; ) {
          if (this.childs[i2].name === "img")
            break;
        }
        if (i2 !== -1) {
          this.observer = uni.createIntersectionObserver(this).relativeToViewport({
            top: 500,
            bottom: 500
          });
          this.observer.observe("._img", (res2) => {
            if (res2.intersectionRatio) {
              this.$set(this.ctrl, "load", 1);
              this.observer.disconnect();
            }
          });
        }
      }
    },
    beforeDestroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },
    methods: {
      /**
       * @description 播放视频事件
       * @param {Event} e
       */
      play(e2) {
        const i2 = e2.currentTarget.dataset.i;
        const node2 = this.childs[i2];
        this.root.$emit("play", {
          source: node2.name,
          attrs: {
            ...node2.attrs,
            src: node2.src[this.ctrl[i2] || 0]
          }
        });
      },
      /**
       * @description 图片点击事件
       * @param {Event} e
       */
      imgTap(e2) {
        const node2 = this.childs[e2.currentTarget.dataset.i];
        if (node2.a) {
          this.linkTap(node2.a);
          return;
        }
        if (node2.attrs.ignore)
          return;
        node2.attrs.src = node2.attrs.src || node2.attrs["data-src"];
        this.root.$emit("imgtap", node2.attrs);
        if (this.root.previewImg) {
          uni.previewImage({
            current: parseInt(node2.attrs.i),
            urls: this.root.imgList
          });
        }
      },
      /**
       * @description 图片长按
       */
      imgLongTap(e2) {
        const attrs = this.childs[e2.currentTarget.dataset.i].attrs;
        if (this.opts[3] && !attrs.ignore) {
          uni.showActionSheet({
            itemList: ["保存图片"],
            success: () => {
              const save2 = (path) => {
                uni.saveImageToPhotosAlbum({
                  filePath: path,
                  success() {
                    uni.showToast({
                      title: "保存成功"
                    });
                  }
                });
              };
              if (this.root.imgList[attrs.i].startsWith("http")) {
                uni.downloadFile({
                  url: this.root.imgList[attrs.i],
                  success: (res2) => save2(res2.tempFilePath)
                });
              } else {
                save2(this.root.imgList[attrs.i]);
              }
            }
          });
        }
      },
      /**
       * @description 图片加载完成事件
       * @param {Event} e
       */
      imgLoad(e2) {
        const i2 = e2.currentTarget.dataset.i;
        if (!this.childs[i2].w) {
          this.$set(this.ctrl, i2, e2.detail.width);
        } else if (this.opts[1] && !this.ctrl[i2] || this.ctrl[i2] === -1) {
          this.$set(this.ctrl, i2, 1);
        }
        this.checkReady();
      },
      /**
       * @description 检查是否所有图片加载完毕
       */
      checkReady() {
        if (this.root && !this.root.lazyLoad) {
          this.root._unloadimgs -= 1;
          if (!this.root._unloadimgs) {
            setTimeout(() => {
              this.root.getRect().then((rect) => {
                this.root.$emit("ready", rect);
              }).catch(() => {
                this.root.$emit("ready", {});
              });
            }, 350);
          }
        }
      },
      /**
       * @description 链接点击事件
       * @param {Event} e
       */
      linkTap(e2) {
        const node2 = e2.currentTarget ? this.childs[e2.currentTarget.dataset.i] : {};
        const attrs = node2.attrs || e2;
        const href = attrs.href;
        this.root.$emit("linktap", Object.assign({
          innerText: this.root.getText(node2.children || [])
          // 链接内的文本内容
        }, attrs));
        if (href) {
          if (href[0] === "#") {
            this.root.navigateTo(href.substring(1)).catch(() => {
            });
          } else if (href.split("?")[0].includes("://")) {
            if (this.root.copyLink) {
              plus.runtime.openWeb(href);
            }
          } else {
            uni.navigateTo({
              url: href,
              fail() {
                uni.switchTab({
                  url: href,
                  fail() {
                  }
                });
              }
            });
          }
        }
      },
      /**
       * @description 错误事件
       * @param {Event} e
       */
      mediaError(e2) {
        const i2 = e2.currentTarget.dataset.i;
        const node2 = this.childs[i2];
        if (node2.name === "video" || node2.name === "audio") {
          let index2 = (this.ctrl[i2] || 0) + 1;
          if (index2 > node2.src.length) {
            index2 = 0;
          }
          if (index2 < node2.src.length) {
            this.$set(this.ctrl, i2, index2);
            return;
          }
        } else if (node2.name === "img") {
          if (this.opts[2]) {
            this.$set(this.ctrl, i2, -1);
          }
          this.checkReady();
        }
        if (this.root) {
          this.root.$emit("error", {
            source: node2.name,
            attrs: node2.attrs,
            errMsg: e2.detail.errMsg
          });
        }
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node", true);
    return vue.openBlock(), vue.createElementBlock("view", {
      id: $props.attrs.id,
      class: vue.normalizeClass("_block _" + $props.name + " " + $props.attrs.class),
      style: vue.normalizeStyle($props.attrs.style)
    }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.childs, (n2, i2) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: i2 },
            [
              n2.name === "img" && !n2.t && ($props.opts[1] && !$data.ctrl[i2] || $data.ctrl[i2] < 0) ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                class: "_img",
                style: vue.normalizeStyle(n2.attrs.style),
                src: $data.ctrl[i2] < 0 ? $props.opts[2] : $props.opts[1],
                mode: "widthFix"
              }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true),
              n2.name === "img" && n2.t ? (vue.openBlock(), vue.createElementBlock("rich-text", {
                key: 1,
                style: vue.normalizeStyle("display:" + n2.t),
                nodes: [{ attrs: { style: n2.attrs.style || "", src: n2.attrs.src }, name: "img" }],
                "data-i": i2,
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"]))
              }, null, 12, ["nodes", "data-i"])) : n2.name === "img" ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 2,
                id: n2.attrs.id,
                class: vue.normalizeClass("_img " + n2.attrs.class),
                style: vue.normalizeStyle(($data.ctrl[i2] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i2] || 1) + "px;" + n2.attrs.style),
                src: n2.attrs.src || ($data.ctrl.load ? n2.attrs["data-src"] : ""),
                mode: !n2.h ? "widthFix" : !n2.w ? "heightFix" : n2.m || "",
                "data-i": i2,
                onLoad: _cache[1] || (_cache[1] = (...args) => $options.imgLoad && $options.imgLoad(...args)),
                onError: _cache[2] || (_cache[2] = (...args) => $options.mediaError && $options.mediaError(...args)),
                onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"])),
                onLongpress: _cache[4] || (_cache[4] = (...args) => $options.imgLongTap && $options.imgLongTap(...args))
              }, null, 46, ["id", "src", "mode", "data-i"])) : n2.text ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 3,
                  decode: ""
                },
                vue.toDisplayString(n2.text),
                1
                /* TEXT */
              )) : n2.name === "br" ? (vue.openBlock(), vue.createElementBlock("text", { key: 4 }, "\\n")) : n2.name === "a" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 5,
                id: n2.attrs.id,
                class: vue.normalizeClass((n2.attrs.href ? "_a " : "") + n2.attrs.class),
                "hover-class": "_hover",
                style: vue.normalizeStyle("display:inline;" + n2.attrs.style),
                "data-i": i2,
                onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.linkTap && $options.linkTap(...args), ["stop"]))
              }, [
                vue.createVNode(_component_node, {
                  name: "span",
                  childs: n2.children,
                  opts: $props.opts,
                  style: { "display": "inherit" }
                }, null, 8, ["childs", "opts"])
              ], 14, ["id", "data-i"])) : n2.html ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 6,
                id: n2.attrs.id,
                class: vue.normalizeClass("_video " + n2.attrs.class),
                style: vue.normalizeStyle(n2.attrs.style),
                innerHTML: n2.html,
                "data-i": i2,
                onVplay: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.play && $options.play(...args), ["stop"]))
              }, null, 46, ["id", "innerHTML", "data-i"])) : n2.name === "iframe" ? (vue.openBlock(), vue.createElementBlock("iframe", {
                key: 7,
                style: vue.normalizeStyle(n2.attrs.style),
                allowfullscreen: n2.attrs.allowfullscreen,
                frameborder: n2.attrs.frameborder,
                src: n2.attrs.src
              }, null, 12, ["allowfullscreen", "frameborder", "src"])) : n2.name === "embed" ? (vue.openBlock(), vue.createElementBlock("embed", {
                key: 8,
                style: vue.normalizeStyle(n2.attrs.style),
                src: n2.attrs.src
              }, null, 12, ["src"])) : n2.name === "table" && n2.c || n2.name === "li" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 9,
                id: n2.attrs.id,
                class: vue.normalizeClass("_" + n2.name + " " + n2.attrs.class),
                style: vue.normalizeStyle(n2.attrs.style)
              }, [
                n2.name === "li" ? (vue.openBlock(), vue.createBlock(_component_node, {
                  key: 0,
                  childs: n2.children,
                  opts: $props.opts
                }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  vue.renderList(n2.children, (tbody, x2) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: x2,
                        class: vue.normalizeClass("_" + tbody.name + " " + tbody.attrs.class),
                        style: vue.normalizeStyle(tbody.attrs.style)
                      },
                      [
                        tbody.name === "td" || tbody.name === "th" ? (vue.openBlock(), vue.createBlock(_component_node, {
                          key: 0,
                          childs: tbody.children,
                          opts: $props.opts
                        }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          { key: 1 },
                          vue.renderList(tbody.children, (tr2, y2) => {
                            return vue.openBlock(), vue.createElementBlock(
                              vue.Fragment,
                              { key: y2 },
                              [
                                tr2.name === "td" || tr2.name === "th" ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 0,
                                    class: vue.normalizeClass("_" + tr2.name + " " + tr2.attrs.class),
                                    style: vue.normalizeStyle(tr2.attrs.style)
                                  },
                                  [
                                    vue.createVNode(_component_node, {
                                      childs: tr2.children,
                                      opts: $props.opts
                                    }, null, 8, ["childs", "opts"])
                                  ],
                                  6
                                  /* CLASS, STYLE */
                                )) : (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 1,
                                    class: vue.normalizeClass("_" + tr2.name + " " + tr2.attrs.class),
                                    style: vue.normalizeStyle(tr2.attrs.style)
                                  },
                                  [
                                    (vue.openBlock(true), vue.createElementBlock(
                                      vue.Fragment,
                                      null,
                                      vue.renderList(tr2.children, (td, z2) => {
                                        return vue.openBlock(), vue.createElementBlock(
                                          "view",
                                          {
                                            key: z2,
                                            class: vue.normalizeClass("_" + td.name + " " + td.attrs.class),
                                            style: vue.normalizeStyle(td.attrs.style)
                                          },
                                          [
                                            vue.createVNode(_component_node, {
                                              childs: td.children,
                                              opts: $props.opts
                                            }, null, 8, ["childs", "opts"])
                                          ],
                                          6
                                          /* CLASS, STYLE */
                                        );
                                      }),
                                      128
                                      /* KEYED_FRAGMENT */
                                    ))
                                  ],
                                  6
                                  /* CLASS, STYLE */
                                ))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 14, ["id"])) : !n2.c ? (vue.openBlock(), vue.createElementBlock("rich-text", {
                key: 10,
                id: n2.attrs.id,
                style: vue.normalizeStyle("display:inline;" + n2.f),
                preview: false,
                selectable: $props.opts[4],
                "user-select": $props.opts[4],
                nodes: [n2]
              }, null, 12, ["id", "selectable", "user-select", "nodes"])) : n2.c === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 11,
                id: n2.attrs.id,
                class: vue.normalizeClass("_block _" + n2.name + " " + n2.attrs.class),
                style: vue.normalizeStyle(n2.f + ";" + n2.attrs.style)
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(n2.children, (n22, j2) => {
                    return vue.openBlock(), vue.createBlock(_component_node, {
                      key: j2,
                      style: vue.normalizeStyle(n22.f),
                      name: n22.name,
                      attrs: n22.attrs,
                      childs: n22.children,
                      opts: $props.opts
                    }, null, 8, ["style", "name", "attrs", "childs", "opts"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 14, ["id"])) : (vue.openBlock(), vue.createBlock(_component_node, {
                key: 12,
                style: vue.normalizeStyle(n2.f),
                name: n2.name,
                attrs: n2.attrs,
                childs: n2.children,
                opts: $props.opts
              }, null, 8, ["style", "name", "attrs", "childs", "opts"]))
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ], 14, ["id"]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$j);
  const node = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-8845ff2f"], ["__file", "D:/workfile/FoodWebApp/uni_modules/mp-html/components/mp-html/node/node.vue"]]);
  const config = {
    // 信任的标签（保持标签名不变）
    trustTags: makeMap("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
    // 块级标签（转为 div，其他的非信任标签转为 span）
    blockTags: makeMap("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
    // 行内标签
    inlineTags: makeMap("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong,sub,sup"),
    // 要移除的标签
    ignoreTags: makeMap("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
    // 自闭合的标签
    voidTags: makeMap("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
    // html 实体
    entities: {
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      ensp: " ",
      emsp: " ",
      nbsp: " ",
      semi: ";",
      ndash: "–",
      mdash: "—",
      middot: "·",
      lsquo: "‘",
      rsquo: "’",
      ldquo: "“",
      rdquo: "”",
      bull: "•",
      hellip: "…",
      larr: "←",
      uarr: "↑",
      rarr: "→",
      darr: "↓"
    },
    // 默认的标签样式
    tagStyle: {
      address: "font-style:italic",
      big: "display:inline;font-size:1.2em",
      caption: "display:table-caption;text-align:center",
      center: "text-align:center",
      cite: "font-style:italic",
      dd: "margin-left:40px",
      mark: "background-color:yellow",
      pre: "font-family:monospace;white-space:pre",
      s: "text-decoration:line-through",
      small: "display:inline;font-size:0.8em",
      strike: "text-decoration:line-through",
      u: "text-decoration:underline"
    },
    // svg 大小写对照表
    svgDict: {
      animatetransform: "animateTransform",
      lineargradient: "linearGradient",
      viewbox: "viewBox",
      attributename: "attributeName",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      foreignobject: "foreignObject"
    }
  };
  const tagSelector = {};
  let windowWidth;
  const systemInfo = uni.getSystemInfoSync();
  windowWidth = systemInfo.windowWidth;
  const blankChar = makeMap(" ,\r,\n,	,\f");
  let idIndex = 0;
  config.ignoreTags.iframe = void 0;
  config.trustTags.iframe = true;
  config.ignoreTags.embed = void 0;
  config.trustTags.embed = true;
  function makeMap(str) {
    const map2 = /* @__PURE__ */ Object.create(null);
    const list2 = str.split(",");
    for (let i2 = list2.length; i2--; ) {
      map2[list2[i2]] = true;
    }
    return map2;
  }
  function decodeEntity(str, amp) {
    let i2 = str.indexOf("&");
    while (i2 !== -1) {
      const j2 = str.indexOf(";", i2 + 3);
      let code2;
      if (j2 === -1)
        break;
      if (str[i2 + 1] === "#") {
        code2 = parseInt((str[i2 + 2] === "x" ? "0" : "") + str.substring(i2 + 2, j2));
        if (!isNaN(code2)) {
          str = str.substr(0, i2) + String.fromCharCode(code2) + str.substr(j2 + 1);
        }
      } else {
        code2 = str.substring(i2 + 1, j2);
        if (config.entities[code2] || code2 === "amp" && amp) {
          str = str.substr(0, i2) + (config.entities[code2] || "&") + str.substr(j2 + 1);
        }
      }
      i2 = str.indexOf("&", i2 + 1);
    }
    return str;
  }
  function mergeNodes(nodes) {
    let i2 = nodes.length - 1;
    for (let j2 = i2; j2 >= -1; j2--) {
      if (j2 === -1 || nodes[j2].c || !nodes[j2].name || nodes[j2].name !== "div" && nodes[j2].name !== "p" && nodes[j2].name[0] !== "h" || (nodes[j2].attrs.style || "").includes("inline")) {
        if (i2 - j2 >= 5) {
          nodes.splice(j2 + 1, i2 - j2, {
            name: "div",
            attrs: {},
            children: nodes.slice(j2 + 1, i2 + 1)
          });
        }
        i2 = j2 - 1;
      }
    }
  }
  function Parser(vm) {
    this.options = vm || {};
    this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
    this.imgList = vm.imgList || [];
    this.imgList._unloadimgs = 0;
    this.plugins = vm.plugins || [];
    this.attrs = /* @__PURE__ */ Object.create(null);
    this.stack = [];
    this.nodes = [];
    this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
  }
  Parser.prototype.parse = function(content) {
    for (let i2 = this.plugins.length; i2--; ) {
      if (this.plugins[i2].onUpdate) {
        content = this.plugins[i2].onUpdate(content, config) || content;
      }
    }
    new Lexer(this).parse(content);
    while (this.stack.length) {
      this.popNode();
    }
    if (this.nodes.length > 50) {
      mergeNodes(this.nodes);
    }
    return this.nodes;
  };
  Parser.prototype.expose = function() {
    for (let i2 = this.stack.length; i2--; ) {
      const item = this.stack[i2];
      if (item.c || item.name === "a" || item.name === "video" || item.name === "audio")
        return;
      item.c = 1;
    }
  };
  Parser.prototype.hook = function(node2) {
    for (let i2 = this.plugins.length; i2--; ) {
      if (this.plugins[i2].onParse && this.plugins[i2].onParse(node2, this) === false) {
        return false;
      }
    }
    return true;
  };
  Parser.prototype.getUrl = function(url) {
    const domain = this.options.domain;
    if (url[0] === "/") {
      if (url[1] === "/") {
        url = (domain ? domain.split("://")[0] : "http") + ":" + url;
      } else if (domain) {
        url = domain + url;
      } else {
        url = plus.io.convertLocalFileSystemURL(url);
      }
    } else if (!url.includes("data:") && !url.includes("://")) {
      if (domain) {
        url = domain + "/" + url;
      } else {
        url = plus.io.convertLocalFileSystemURL(url);
      }
    }
    return url;
  };
  Parser.prototype.parseStyle = function(node2) {
    const attrs = node2.attrs;
    const list2 = (this.tagStyle[node2.name] || "").split(";").concat((attrs.style || "").split(";"));
    const styleObj = {};
    let tmp = "";
    if (attrs.id && !this.xml) {
      if (this.options.useAnchor) {
        this.expose();
      } else if (node2.name !== "img" && node2.name !== "a" && node2.name !== "video" && node2.name !== "audio") {
        attrs.id = void 0;
      }
    }
    if (attrs.width) {
      styleObj.width = parseFloat(attrs.width) + (attrs.width.includes("%") ? "%" : "px");
      attrs.width = void 0;
    }
    if (attrs.height) {
      styleObj.height = parseFloat(attrs.height) + (attrs.height.includes("%") ? "%" : "px");
      attrs.height = void 0;
    }
    for (let i2 = 0, len = list2.length; i2 < len; i2++) {
      const info = list2[i2].split(":");
      if (info.length < 2)
        continue;
      const key2 = info.shift().trim().toLowerCase();
      let value = info.join(":").trim();
      if (value[0] === "-" && value.lastIndexOf("-") > 0 || value.includes("safe")) {
        tmp += `;${key2}:${value}`;
      } else if (!styleObj[key2] || value.includes("import") || !styleObj[key2].includes("import")) {
        if (value.includes("url")) {
          let j2 = value.indexOf("(") + 1;
          if (j2) {
            while (value[j2] === '"' || value[j2] === "'" || blankChar[value[j2]]) {
              j2++;
            }
            value = value.substr(0, j2) + this.getUrl(value.substr(j2));
          }
        } else if (value.includes("rpx")) {
          value = value.replace(/[0-9.]+\s*rpx/g, ($2) => parseFloat($2) * windowWidth / 750 + "px");
        }
        styleObj[key2] = value;
      }
    }
    node2.attrs.style = tmp;
    return styleObj;
  };
  Parser.prototype.onTagName = function(name2) {
    this.tagName = this.xml ? name2 : name2.toLowerCase();
    if (this.tagName === "svg") {
      this.xml = (this.xml || 0) + 1;
      config.ignoreTags.style = void 0;
    }
  };
  Parser.prototype.onAttrName = function(name2) {
    name2 = this.xml ? name2 : name2.toLowerCase();
    if (name2.includes("?") || name2.includes(";")) {
      this.attrName = void 0;
      return;
    }
    if (name2.substr(0, 5) === "data-") {
      if (name2 === "data-src" && !this.attrs.src) {
        this.attrName = "src";
      } else if (this.tagName === "img" || this.tagName === "a") {
        this.attrName = name2;
      } else {
        this.attrName = void 0;
      }
    } else {
      this.attrName = name2;
      this.attrs[name2] = "T";
    }
  };
  Parser.prototype.onAttrVal = function(val) {
    const name2 = this.attrName || "";
    if (name2 === "style" || name2 === "href") {
      this.attrs[name2] = decodeEntity(val, true);
    } else if (name2.includes("src")) {
      this.attrs[name2] = this.getUrl(decodeEntity(val, true));
    } else if (name2) {
      this.attrs[name2] = val;
    }
  };
  Parser.prototype.onOpenTag = function(selfClose) {
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.name = this.tagName;
    node2.attrs = this.attrs;
    if (this.options.nodes.length) {
      node2.type = "node";
    }
    this.attrs = /* @__PURE__ */ Object.create(null);
    const attrs = node2.attrs;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    const close2 = this.xml ? selfClose : config.voidTags[node2.name];
    if (tagSelector[node2.name]) {
      attrs.class = tagSelector[node2.name] + (attrs.class ? " " + attrs.class : "");
    }
    if (node2.name === "embed") {
      this.expose();
    }
    if (node2.name === "video" || node2.name === "audio") {
      if (node2.name === "video" && !attrs.id) {
        attrs.id = "v" + idIndex++;
      }
      if (!attrs.controls && !attrs.autoplay) {
        attrs.controls = "T";
      }
      node2.src = [];
      if (attrs.src) {
        node2.src.push(attrs.src);
        attrs.src = void 0;
      }
      this.expose();
    }
    if (close2) {
      if (!this.hook(node2) || config.ignoreTags[node2.name]) {
        if (node2.name === "base" && !this.options.domain) {
          this.options.domain = attrs.href;
        } else if (node2.name === "source" && parent && (parent.name === "video" || parent.name === "audio") && attrs.src) {
          parent.src.push(attrs.src);
        }
        return;
      }
      const styleObj = this.parseStyle(node2);
      if (node2.name === "img") {
        if (attrs.src) {
          if (attrs.src.includes("webp")) {
            node2.webp = "T";
          }
          if (attrs.src.includes("data:") && this.options.previewImg !== "all" && !attrs["original-src"]) {
            attrs.ignore = "T";
          }
          if (!attrs.ignore || node2.webp || attrs.src.includes("cloud://")) {
            for (let i2 = this.stack.length; i2--; ) {
              const item = this.stack[i2];
              if (item.name === "a") {
                node2.a = item.attrs;
              }
              if (item.name === "table" && !node2.webp && !attrs.src.includes("cloud://")) {
                if (!styleObj.display || styleObj.display.includes("inline")) {
                  node2.t = "inline-block";
                } else {
                  node2.t = styleObj.display;
                }
                styleObj.display = void 0;
              }
              item.c = 1;
            }
            attrs.i = this.imgList.length.toString();
            let src = attrs["original-src"] || attrs.src;
            this.imgList.push(src);
            if (!node2.t) {
              this.imgList._unloadimgs += 1;
            }
            if (this.options.lazyLoad) {
              attrs["data-src"] = attrs.src;
              attrs.src = void 0;
            }
          }
        }
        if (styleObj.display === "inline") {
          styleObj.display = "";
        }
        if (attrs.ignore) {
          styleObj["max-width"] = styleObj["max-width"] || "100%";
          attrs.style += ";-webkit-touch-callout:none";
        }
        if (parseInt(styleObj.width) > windowWidth) {
          styleObj.height = void 0;
        }
        if (!isNaN(parseInt(styleObj.width))) {
          node2.w = "T";
        }
        if (!isNaN(parseInt(styleObj.height)) && (!styleObj.height.includes("%") || parent && (parent.attrs.style || "").includes("height"))) {
          node2.h = "T";
        }
        if (node2.w && node2.h && styleObj["object-fit"]) {
          if (styleObj["object-fit"] === "contain") {
            node2.m = "aspectFit";
          } else if (styleObj["object-fit"] === "cover") {
            node2.m = "aspectFill";
          }
        }
      } else if (node2.name === "svg") {
        siblings.push(node2);
        this.stack.push(node2);
        this.popNode();
        return;
      }
      for (const key2 in styleObj) {
        if (styleObj[key2]) {
          attrs.style += `;${key2}:${styleObj[key2].replace(" !important", "")}`;
        }
      }
      attrs.style = attrs.style.substr(1) || void 0;
    } else {
      if ((node2.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) && this.pre !== 2) {
        this.pre = node2.pre = 1;
      }
      node2.children = [];
      this.stack.push(node2);
    }
    siblings.push(node2);
  };
  Parser.prototype.onCloseTag = function(name2) {
    name2 = this.xml ? name2 : name2.toLowerCase();
    let i2;
    for (i2 = this.stack.length; i2--; ) {
      if (this.stack[i2].name === name2)
        break;
    }
    if (i2 !== -1) {
      while (this.stack.length > i2) {
        this.popNode();
      }
    } else if (name2 === "p" || name2 === "br") {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push({
        name: name2,
        attrs: {
          class: tagSelector[name2] || "",
          style: this.tagStyle[name2] || ""
        }
      });
    }
  };
  Parser.prototype.popNode = function() {
    const node2 = this.stack.pop();
    let attrs = node2.attrs;
    const children = node2.children;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    if (!this.hook(node2) || config.ignoreTags[node2.name]) {
      if (node2.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
        uni.setNavigationBarTitle({
          title: children[0].text
        });
      }
      siblings.pop();
      return;
    }
    if (node2.pre && this.pre !== 2) {
      this.pre = node2.pre = void 0;
      for (let i2 = this.stack.length; i2--; ) {
        if (this.stack[i2].pre) {
          this.pre = 1;
        }
      }
    }
    const styleObj = {};
    if (node2.name === "svg") {
      if (this.xml > 1) {
        this.xml--;
        return;
      }
      let src = "";
      const style = attrs.style;
      attrs.style = "";
      attrs.xmlns = "http://www.w3.org/2000/svg";
      (function traversal(node3) {
        if (node3.type === "text") {
          src += node3.text;
          return;
        }
        const name2 = config.svgDict[node3.name] || node3.name;
        if (name2 === "foreignObject") {
          for (const child of node3.children || []) {
            if (child.attrs && !child.attrs.xmlns) {
              child.attrs.xmlns = "http://www.w3.org/1999/xhtml";
              break;
            }
          }
        }
        src += "<" + name2;
        for (const item in node3.attrs) {
          const val = node3.attrs[item];
          if (val) {
            src += ` ${config.svgDict[item] || item}="${val.replace(/"/g, "")}"`;
          }
        }
        if (!node3.children) {
          src += "/>";
        } else {
          src += ">";
          for (let i2 = 0; i2 < node3.children.length; i2++) {
            traversal(node3.children[i2]);
          }
          src += "</" + name2 + ">";
        }
      })(node2);
      node2.name = "img";
      node2.attrs = {
        src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
        style,
        ignore: "T"
      };
      node2.children = void 0;
      this.xml = false;
      config.ignoreTags.style = true;
      return;
    }
    if (attrs.align) {
      if (node2.name === "table") {
        if (attrs.align === "center") {
          styleObj["margin-inline-start"] = styleObj["margin-inline-end"] = "auto";
        } else {
          styleObj.float = attrs.align;
        }
      } else {
        styleObj["text-align"] = attrs.align;
      }
      attrs.align = void 0;
    }
    if (attrs.dir) {
      styleObj.direction = attrs.dir;
      attrs.dir = void 0;
    }
    if (node2.name === "font") {
      if (attrs.color) {
        styleObj.color = attrs.color;
        attrs.color = void 0;
      }
      if (attrs.face) {
        styleObj["font-family"] = attrs.face;
        attrs.face = void 0;
      }
      if (attrs.size) {
        let size = parseInt(attrs.size);
        if (!isNaN(size)) {
          if (size < 1) {
            size = 1;
          } else if (size > 7) {
            size = 7;
          }
          styleObj["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][size - 1];
        }
        attrs.size = void 0;
      }
    }
    if ((attrs.class || "").includes("align-center")) {
      styleObj["text-align"] = "center";
    }
    Object.assign(styleObj, this.parseStyle(node2));
    if (node2.name !== "table" && parseInt(styleObj.width) > windowWidth) {
      styleObj["max-width"] = "100%";
      styleObj["box-sizing"] = "border-box";
    }
    if (config.blockTags[node2.name]) {
      node2.name = "div";
    } else if (!config.trustTags[node2.name] && !this.xml) {
      node2.name = "span";
    }
    if (node2.name === "a" || node2.name === "ad" || node2.name === "iframe") {
      this.expose();
    } else if (node2.name === "video") {
      if ((styleObj.height || "").includes("auto")) {
        styleObj.height = void 0;
      }
      let str = '<video style="width:100%;height:100%"';
      for (const item in attrs) {
        if (attrs[item]) {
          str += " " + item + '="' + attrs[item] + '"';
        }
      }
      if (this.options.pauseVideo) {
        str += ` onplay="this.dispatchEvent(new CustomEvent('vplay',{bubbles:!0}));for(var e=document.getElementsByTagName('video'),t=0;t<e.length;t++)e[t]!=this&&e[t].pause()"`;
      }
      str += ">";
      for (let i2 = 0; i2 < node2.src.length; i2++) {
        str += '<source src="' + node2.src[i2] + '">';
      }
      str += "</video>";
      node2.html = str;
    } else if ((node2.name === "ul" || node2.name === "ol") && node2.c) {
      const types2 = {
        a: "lower-alpha",
        A: "upper-alpha",
        i: "lower-roman",
        I: "upper-roman"
      };
      if (types2[attrs.type]) {
        attrs.style += ";list-style-type:" + types2[attrs.type];
        attrs.type = void 0;
      }
      for (let i2 = children.length; i2--; ) {
        if (children[i2].name === "li") {
          children[i2].c = 1;
        }
      }
    } else if (node2.name === "table") {
      let padding = parseFloat(attrs.cellpadding);
      let spacing = parseFloat(attrs.cellspacing);
      const border = parseFloat(attrs.border);
      const bordercolor = styleObj["border-color"];
      const borderstyle = styleObj["border-style"];
      if (node2.c) {
        if (isNaN(padding)) {
          padding = 2;
        }
        if (isNaN(spacing)) {
          spacing = 2;
        }
      }
      if (border) {
        attrs.style += `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}`;
      }
      if (node2.flag && node2.c) {
        styleObj.display = "grid";
        if (styleObj["border-collapse"] === "collapse") {
          styleObj["border-collapse"] = void 0;
          spacing = 0;
        }
        if (spacing) {
          styleObj["grid-gap"] = spacing + "px";
          styleObj.padding = spacing + "px";
        } else if (border) {
          attrs.style += ";border-left:0;border-top:0";
        }
        const width = [];
        const trList = [];
        const cells = [];
        const map2 = {};
        (function traversal(nodes) {
          for (let i2 = 0; i2 < nodes.length; i2++) {
            if (nodes[i2].name === "tr") {
              trList.push(nodes[i2]);
            } else if (nodes[i2].name === "colgroup") {
              let colI = 1;
              for (const col of nodes[i2].children || []) {
                if (col.name === "col") {
                  const style = col.attrs.style || "";
                  const start = style.indexOf("width") ? style.indexOf(";width") : 0;
                  if (start !== -1) {
                    let end = style.indexOf(";", start + 6);
                    if (end === -1) {
                      end = style.length;
                    }
                    width[colI] = style.substring(start ? start + 7 : 6, end);
                  }
                  colI += 1;
                }
              }
            } else {
              traversal(nodes[i2].children || []);
            }
          }
        })(children);
        for (let row = 1; row <= trList.length; row++) {
          let col = 1;
          for (let j2 = 0; j2 < trList[row - 1].children.length; j2++) {
            const td = trList[row - 1].children[j2];
            if (td.name === "td" || td.name === "th") {
              while (map2[row + "." + col]) {
                col++;
              }
              let style = td.attrs.style || "";
              let start = style.indexOf("width") ? style.indexOf(";width") : 0;
              if (start !== -1) {
                let end = style.indexOf(";", start + 6);
                if (end === -1) {
                  end = style.length;
                }
                if (!td.attrs.colspan) {
                  width[col] = style.substring(start ? start + 7 : 6, end);
                }
                style = style.substr(0, start) + style.substr(end);
              }
              style += ";display:flex";
              start = style.indexOf("vertical-align");
              if (start !== -1) {
                const val = style.substr(start + 15, 10);
                if (val.includes("middle")) {
                  style += ";align-items:center";
                } else if (val.includes("bottom")) {
                  style += ";align-items:flex-end";
                }
              } else {
                style += ";align-items:center";
              }
              start = style.indexOf("text-align");
              if (start !== -1) {
                const val = style.substr(start + 11, 10);
                if (val.includes("center")) {
                  style += ";justify-content: center";
                } else if (val.includes("right")) {
                  style += ";justify-content: right";
                }
              }
              style = (border ? `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}` + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? `;padding:${padding}px` : "") + ";" + style;
              if (td.attrs.colspan) {
                style += `;grid-column-start:${col};grid-column-end:${col + parseInt(td.attrs.colspan)}`;
                if (!td.attrs.rowspan) {
                  style += `;grid-row-start:${row};grid-row-end:${row + 1}`;
                }
                col += parseInt(td.attrs.colspan) - 1;
              }
              if (td.attrs.rowspan) {
                style += `;grid-row-start:${row};grid-row-end:${row + parseInt(td.attrs.rowspan)}`;
                if (!td.attrs.colspan) {
                  style += `;grid-column-start:${col};grid-column-end:${col + 1}`;
                }
                for (let rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                  for (let colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                    map2[row + rowspan + "." + (col - colspan)] = 1;
                  }
                }
              }
              if (style) {
                td.attrs.style = style;
              }
              cells.push(td);
              col++;
            }
          }
          if (row === 1) {
            let temp = "";
            for (let i2 = 1; i2 < col; i2++) {
              temp += (width[i2] ? width[i2] : "auto") + " ";
            }
            styleObj["grid-template-columns"] = temp;
          }
        }
        node2.children = cells;
      } else {
        if (node2.c) {
          styleObj.display = "table";
        }
        if (!isNaN(spacing)) {
          styleObj["border-spacing"] = spacing + "px";
        }
        if (border || padding) {
          (function traversal(nodes) {
            for (let i2 = 0; i2 < nodes.length; i2++) {
              const td = nodes[i2];
              if (td.name === "th" || td.name === "td") {
                if (border) {
                  td.attrs.style = `border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"};${td.attrs.style || ""}`;
                }
                if (padding) {
                  td.attrs.style = `padding:${padding}px;${td.attrs.style || ""}`;
                }
              } else if (td.children) {
                traversal(td.children);
              }
            }
          })(children);
        }
      }
      if (this.options.scrollTable && !(attrs.style || "").includes("inline")) {
        const table2 = Object.assign({}, node2);
        node2.name = "div";
        node2.attrs = {
          style: "overflow:auto"
        };
        node2.children = [table2];
        attrs = table2.attrs;
      }
    } else if ((node2.name === "tbody" || node2.name === "tr") && node2.flag && node2.c) {
      node2.flag = void 0;
      (function traversal(nodes) {
        for (let i2 = 0; i2 < nodes.length; i2++) {
          if (nodes[i2].name === "td") {
            for (const style of ["color", "background", "background-color"]) {
              if (styleObj[style]) {
                nodes[i2].attrs.style = style + ":" + styleObj[style] + ";" + (nodes[i2].attrs.style || "");
              }
            }
          } else {
            traversal(nodes[i2].children || []);
          }
        }
      })(children);
    } else if ((node2.name === "td" || node2.name === "th") && (attrs.colspan || attrs.rowspan)) {
      for (let i2 = this.stack.length; i2--; ) {
        if (this.stack[i2].name === "table" || this.stack[i2].name === "tbody" || this.stack[i2].name === "tr") {
          this.stack[i2].flag = 1;
        }
      }
    } else if (node2.name === "ruby") {
      node2.name = "span";
      for (let i2 = 0; i2 < children.length - 1; i2++) {
        if (children[i2].type === "text" && children[i2 + 1].name === "rt") {
          children[i2] = {
            name: "div",
            attrs: {
              style: "display:inline-block;text-align:center"
            },
            children: [{
              name: "div",
              attrs: {
                style: "font-size:50%;" + (children[i2 + 1].attrs.style || "")
              },
              children: children[i2 + 1].children
            }, children[i2]]
          };
          children.splice(i2 + 1, 1);
        }
      }
    } else if (node2.c) {
      (function traversal(node3) {
        node3.c = 2;
        for (let i2 = node3.children.length; i2--; ) {
          const child = node3.children[i2];
          if (child.name && (config.inlineTags[child.name] || (child.attrs.style || "").includes("inline") && child.children) && !child.c) {
            traversal(child);
          }
          if (!child.c || child.name === "table") {
            node3.c = 1;
          }
        }
      })(node2);
    }
    if ((styleObj.display || "").includes("flex") && !node2.c) {
      for (let i2 = children.length; i2--; ) {
        const item = children[i2];
        if (item.f) {
          item.attrs.style = (item.attrs.style || "") + item.f;
          item.f = void 0;
        }
      }
    }
    const flex = parent && ((parent.attrs.style || "").includes("flex") || (parent.attrs.style || "").includes("grid")) && !node2.c;
    if (flex) {
      node2.f = ";max-width:100%";
    }
    if (children.length >= 50 && node2.c && !(styleObj.display || "").includes("flex")) {
      mergeNodes(children);
    }
    for (const key2 in styleObj) {
      if (styleObj[key2]) {
        const val = `;${key2}:${styleObj[key2].replace(" !important", "")}`;
        if (flex && (key2.includes("flex") && key2 !== "flex-direction" || key2 === "align-self" || key2.includes("grid") || styleObj[key2][0] === "-" || key2.includes("width") && val.includes("%"))) {
          node2.f += val;
          if (key2 === "width") {
            attrs.style += ";width:100%";
          }
        } else {
          attrs.style += val;
        }
      }
    }
    attrs.style = attrs.style.substr(1) || void 0;
  };
  Parser.prototype.onText = function(text) {
    if (!this.pre) {
      let trim = "";
      let flag2;
      for (let i2 = 0, len = text.length; i2 < len; i2++) {
        if (!blankChar[text[i2]]) {
          trim += text[i2];
        } else {
          if (trim[trim.length - 1] !== " ") {
            trim += " ";
          }
          if (text[i2] === "\n" && !flag2) {
            flag2 = true;
          }
        }
      }
      if (trim === " ") {
        if (flag2)
          return;
        else {
          const parent = this.stack[this.stack.length - 1];
          if (parent && parent.name[0] === "t")
            return;
        }
      }
      text = trim;
    }
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.type = "text";
    node2.text = decodeEntity(text);
    if (this.hook(node2)) {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push(node2);
    }
  };
  function Lexer(handler) {
    this.handler = handler;
  }
  Lexer.prototype.parse = function(content) {
    this.content = content || "";
    this.i = 0;
    this.start = 0;
    this.state = this.text;
    for (let len = this.content.length; this.i !== -1 && this.i < len; ) {
      this.state();
    }
  };
  Lexer.prototype.checkClose = function(method) {
    const selfClose = this.content[this.i] === "/";
    if (this.content[this.i] === ">" || selfClose && this.content[this.i + 1] === ">") {
      if (method) {
        this.handler[method](this.content.substring(this.start, this.i));
      }
      this.i += selfClose ? 2 : 1;
      this.start = this.i;
      this.handler.onOpenTag(selfClose);
      if (this.handler.tagName === "script") {
        this.i = this.content.indexOf("</", this.i);
        if (this.i !== -1) {
          this.i += 2;
          this.start = this.i;
        }
        this.state = this.endTag;
      } else {
        this.state = this.text;
      }
      return true;
    }
    return false;
  };
  Lexer.prototype.text = function() {
    this.i = this.content.indexOf("<", this.i);
    if (this.i === -1) {
      if (this.start < this.content.length) {
        this.handler.onText(this.content.substring(this.start, this.content.length));
      }
      return;
    }
    const c2 = this.content[this.i + 1];
    if (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      this.start = ++this.i;
      this.state = this.tagName;
    } else if (c2 === "/" || c2 === "!" || c2 === "?") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      const next2 = this.content[this.i + 2];
      if (c2 === "/" && (next2 >= "a" && next2 <= "z" || next2 >= "A" && next2 <= "Z")) {
        this.i += 2;
        this.start = this.i;
        this.state = this.endTag;
        return;
      }
      let end = "-->";
      if (c2 !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
        end = ">";
      }
      this.i = this.content.indexOf(end, this.i);
      if (this.i !== -1) {
        this.i += end.length;
        this.start = this.i;
      }
    } else {
      this.i++;
    }
  };
  Lexer.prototype.tagName = function() {
    if (blankChar[this.content[this.i]]) {
      this.handler.onTagName(this.content.substring(this.start, this.i));
      while (blankChar[this.content[++this.i]])
        ;
      if (this.i < this.content.length && !this.checkClose()) {
        this.start = this.i;
        this.state = this.attrName;
      }
    } else if (!this.checkClose("onTagName")) {
      this.i++;
    }
  };
  Lexer.prototype.attrName = function() {
    let c2 = this.content[this.i];
    if (blankChar[c2] || c2 === "=") {
      this.handler.onAttrName(this.content.substring(this.start, this.i));
      let needVal = c2 === "=";
      const len = this.content.length;
      while (++this.i < len) {
        c2 = this.content[this.i];
        if (!blankChar[c2]) {
          if (this.checkClose())
            return;
          if (needVal) {
            this.start = this.i;
            this.state = this.attrVal;
            return;
          }
          if (this.content[this.i] === "=") {
            needVal = true;
          } else {
            this.start = this.i;
            this.state = this.attrName;
            return;
          }
        }
      }
    } else if (!this.checkClose("onAttrName")) {
      this.i++;
    }
  };
  Lexer.prototype.attrVal = function() {
    const c2 = this.content[this.i];
    const len = this.content.length;
    if (c2 === '"' || c2 === "'") {
      this.start = ++this.i;
      this.i = this.content.indexOf(c2, this.i);
      if (this.i === -1)
        return;
      this.handler.onAttrVal(this.content.substring(this.start, this.i));
    } else {
      for (; this.i < len; this.i++) {
        if (blankChar[this.content[this.i]]) {
          this.handler.onAttrVal(this.content.substring(this.start, this.i));
          break;
        } else if (this.checkClose("onAttrVal"))
          return;
      }
    }
    while (blankChar[this.content[++this.i]])
      ;
    if (this.i < len && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  };
  Lexer.prototype.endTag = function() {
    const c2 = this.content[this.i];
    if (blankChar[c2] || c2 === ">" || c2 === "/") {
      this.handler.onCloseTag(this.content.substring(this.start, this.i));
      if (c2 !== ">") {
        this.i = this.content.indexOf(">", this.i);
        if (this.i === -1)
          return;
      }
      this.start = ++this.i;
      this.state = this.text;
    } else {
      this.i++;
    }
  };
  const plugins$1 = [];
  const _sfc_main$i = {
    name: "mp-html",
    data() {
      return {
        nodes: []
      };
    },
    props: {
      containerStyle: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      copyLink: {
        type: [Boolean, String],
        default: true
      },
      domain: String,
      errorImg: {
        type: String,
        default: ""
      },
      lazyLoad: {
        type: [Boolean, String],
        default: false
      },
      loadingImg: {
        type: String,
        default: ""
      },
      pauseVideo: {
        type: [Boolean, String],
        default: true
      },
      previewImg: {
        type: [Boolean, String],
        default: true
      },
      scrollTable: [Boolean, String],
      selectable: [Boolean, String],
      setTitle: {
        type: [Boolean, String],
        default: true
      },
      showImgMenu: {
        type: [Boolean, String],
        default: true
      },
      tagStyle: Object,
      useAnchor: [Boolean, Number]
    },
    emits: ["load", "ready", "imgtap", "linktap", "play", "error"],
    components: {
      node
    },
    watch: {
      content(content) {
        this.setContent(content);
      }
    },
    created() {
      this.plugins = [];
      for (let i2 = plugins$1.length; i2--; ) {
        this.plugins.push(new plugins$1[i2](this));
      }
    },
    mounted() {
      if (this.content && !this.nodes.length) {
        this.setContent(this.content);
      }
    },
    beforeDestroy() {
      this._hook("onDetached");
    },
    methods: {
      /**
       * @description 将锚点跳转的范围限定在一个 scroll-view 内
       * @param {Object} page scroll-view 所在页面的示例
       * @param {String} selector scroll-view 的选择器
       * @param {String} scrollTop scroll-view scroll-top 属性绑定的变量名
       */
      in(page, selector, scrollTop) {
        if (page && selector && scrollTop) {
          this._in = {
            page,
            selector,
            scrollTop
          };
        }
      },
      /**
       * @description 锚点跳转
       * @param {String} id 要跳转的锚点 id
       * @param {Number} offset 跳转位置的偏移量
       * @returns {Promise}
       */
      navigateTo(id, offset) {
        return new Promise((resolve, reject) => {
          if (!this.useAnchor) {
            reject(Error("Anchor is disabled"));
            return;
          }
          offset = offset || parseInt(this.useAnchor) || 0;
          let deep = " ";
          const selector = uni.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "._root") + (id ? `${deep}#${id}` : "")).boundingClientRect();
          if (this._in) {
            selector.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect();
          } else {
            selector.selectViewport().scrollOffset();
          }
          selector.exec((res2) => {
            if (!res2[0]) {
              reject(Error("Label not found"));
              return;
            }
            const scrollTop = res2[1].scrollTop + res2[0].top - (res2[2] ? res2[2].top : 0) + offset;
            if (this._in) {
              this._in.page[this._in.scrollTop] = scrollTop;
            } else {
              uni.pageScrollTo({
                scrollTop,
                duration: 300
              });
            }
            resolve();
          });
        });
      },
      /**
       * @description 获取文本内容
       * @return {String}
       */
      getText(nodes) {
        let text = "";
        (function traversal(nodes2) {
          for (let i2 = 0; i2 < nodes2.length; i2++) {
            const node2 = nodes2[i2];
            if (node2.type === "text") {
              text += node2.text.replace(/&amp;/g, "&");
            } else if (node2.name === "br") {
              text += "\n";
            } else {
              const isBlock = node2.name === "p" || node2.name === "div" || node2.name === "tr" || node2.name === "li" || node2.name[0] === "h" && node2.name[1] > "0" && node2.name[1] < "7";
              if (isBlock && text && text[text.length - 1] !== "\n") {
                text += "\n";
              }
              if (node2.children) {
                traversal(node2.children);
              }
              if (isBlock && text[text.length - 1] !== "\n") {
                text += "\n";
              } else if (node2.name === "td" || node2.name === "th") {
                text += "	";
              }
            }
          }
        })(nodes || this.nodes);
        return text;
      },
      /**
       * @description 获取内容大小和位置
       * @return {Promise}
       */
      getRect() {
        return new Promise((resolve, reject) => {
          uni.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res2) => res2[0] ? resolve(res2[0]) : reject(Error("Root label not found")));
        });
      },
      /**
       * @description 暂停播放媒体
       */
      pauseMedia() {
        for (let i2 = (this._videos || []).length; i2--; ) {
          this._videos[i2].pause();
        }
        const command2 = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].pause()';
        let page = this.$parent;
        while (!page.$scope)
          page = page.$parent;
        page.$scope.$getAppWebview().evalJS(command2);
      },
      /**
       * @description 设置媒体播放速率
       * @param {Number} rate 播放速率
       */
      setPlaybackRate(rate) {
        this.playbackRate = rate;
        for (let i2 = (this._videos || []).length; i2--; ) {
          this._videos[i2].playbackRate(rate);
        }
        const command2 = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].playbackRate=' + rate;
        let page = this.$parent;
        while (!page.$scope)
          page = page.$parent;
        page.$scope.$getAppWebview().evalJS(command2);
      },
      /**
       * @description 设置内容
       * @param {String} content html 内容
       * @param {Boolean} append 是否在尾部追加
       */
      setContent(content, append) {
        if (!append || !this.imgList) {
          this.imgList = [];
        }
        const nodes = new Parser(this).parse(content);
        this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
        this._videos = [];
        this.$nextTick(() => {
          this._hook("onLoad");
          this.$emit("load");
        });
        if (this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
          let height = 0;
          const callback = (rect) => {
            if (!rect || !rect.height)
              rect = {};
            if (rect.height === height) {
              this.$emit("ready", rect);
            } else {
              height = rect.height;
              setTimeout(() => {
                this.getRect().then(callback).catch(callback);
              }, 350);
            }
          };
          this.getRect().then(callback).catch(callback);
        } else {
          if (!this.imgList._unloadimgs) {
            this.getRect().then((rect) => {
              this.$emit("ready", rect);
            }).catch(() => {
              this.$emit("ready", {});
            });
          }
        }
      },
      /**
       * @description 调用插件钩子函数
       */
      _hook(name2) {
        for (let i2 = plugins$1.length; i2--; ) {
          if (this.plugins[i2][name2]) {
            this.plugins[i2][name2]();
          }
        }
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        id: "_root",
        class: vue.normalizeClass(($props.selectable ? "_select " : "") + "_root"),
        style: vue.normalizeStyle($props.containerStyle)
      },
      [
        !$data.nodes[0] ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_node, {
          key: 1,
          childs: $data.nodes,
          opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.selectable],
          name: "span"
        }, null, 8, ["childs", "opts"]))
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-a290f043"], ["__file", "D:/workfile/FoodWebApp/uni_modules/mp-html/components/mp-html/mp-html.vue"]]);
  const _sfc_main$h = {
    __name: "notice",
    setup(__props, { expose: __expose }) {
      __expose();
      onLoad((options) => {
        if (options.noticeId) {
          noticeId.value = options.noticeId;
        }
      });
      const noticeId = vue.ref(null);
      const noticeInfo = vue.ref({});
      const screeWith = vue.ref(null);
      const msgContent = vue.ref(null);
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        if (noticeId.value == null || noticeId.value == "" || noticeId.value == void 0) {
          uni.showToast({
            icon: "none",
            title: "获取内容失败，内容不存在",
            duration: 3e3,
            complete: function() {
              uni.navigateBack();
            }
          });
        } else {
          uni.showLoading({
            title: "加载中...",
            mask: true
          });
          getNoticeInfo(noticeId.value).then((res2) => {
            noticeInfo.value = res2.data;
            msgContent.value = res2.data.noticeContent;
            uni.setNavigationBarTitle({
              title: res2.data.noticeTitle
            });
            uni.hideLoading();
          }).catch((e2) => {
            uni.hideLoading();
          });
        }
      });
      const __returned__ = { noticeId, noticeInfo, screeWith, msgContent, get getNoticeInfo() {
        return getNoticeInfo;
      }, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_0$2);
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "card" }, [
          vue.createVNode(_component_mp_html, {
            style: { "flex": "1" },
            content: $setup.msgContent
          }, null, 8, ["content"]),
          vue.createElementVNode("view", { class: "bottom-menu" }, [
            vue.createVNode(_component_l_icon, {
              name: "time",
              size: "13px",
              color: "#707070"
            }),
            vue.createElementVNode(
              "view",
              null,
              vue.toDisplayString($setup.noticeInfo.createTime || ""),
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]);
  }
  const PagesMsgNoticeNotice = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-985d58b4"], ["__file", "D:/workfile/FoodWebApp/pages/msg/notice/notice.vue"]]);
  const _sfc_main$g = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      const taskList = vue.ref([]);
      const loadTasks = (taskId) => {
        uni.showLoading({
          title: "加载中..."
        });
        getTaskInfoAndLines(taskId).then((res2) => {
          taskList.value = res2.data.lines;
          uni.hideLoading();
        }).catch((e2) => {
          formatAppLog("error", "at components/task_line_picker/index.vue:74", "加载任务列表失败", err);
          uni.showToast({
            icon: "none",
            title: "加载失败",
            duration: 2e3,
            complete: () => {
              uni.hideLoading();
            }
          });
        });
      };
      const onSelect = (line) => {
        formatAppLog("log", "at components/task_line_picker/index.vue:88", line);
        uni.$emit("onTaskLineSelect", line);
        close2();
      };
      const onMaskClick = () => {
        close2();
      };
      const popup2 = vue.ref(null);
      const open2 = (taskId) => {
        loadTasks(taskId);
        popup2.value.open();
      };
      const close2 = () => popup2.value.close();
      const cancelClick = () => {
        close2();
      };
      __expose({
        open: open2,
        close: close2
      });
      const __returned__ = { taskList, loadTasks, onSelect, onMaskClick, popup: popup2, open: open2, close: close2, cancelClick, ref: vue.ref, watch: vue.watch, get getTaskInfoAndLines() {
        return getTaskInfoAndLines;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup",
          "background-color": "#fff",
          type: "bottom",
          borderRadius: "15px  15px  16px  16px"
        },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: "popup-container",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "popup-header" }, [
                vue.createElementVNode("text", { class: "title" }, "选择任务"),
                vue.createElementVNode("text", {
                  class: "close",
                  onClick: $setup.close
                }, "✕")
              ]),
              vue.createElementVNode("scroll-view", {
                class: "list-container",
                "scroll-y": ""
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.taskList, (line, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index2,
                      class: "task-item",
                      onClick: ($event) => $setup.onSelect(line)
                    }, [
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "物料编码"),
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(line.itemCode || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "物料名称"),
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(line.itemName || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "规格型号"),
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(line.specification || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "待生产"),
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(line.waitAmount || "0") + "Kg",
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "实际投料"),
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(line.realAmount || "0") + "Kg",
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "配料状态"),
                        line.status == "1" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "name"
                        }, "未投料")) : line.status == "2" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "name",
                          style: { "color": "seagreen" }
                        }, "投料中")) : line.status == "3" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "name",
                          style: { "color": "coral" }
                        }, "暂停(换桶)")) : line.status == "4" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "name",
                          style: { "color": "green" }
                        }, "已完成")) : line.status == "5" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "name",
                          style: { "color": "red" }
                        }, "超重")) : vue.createCommentVNode("v-if", true)
                      ])
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $setup.taskList.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "empty-tip"
                }, " 暂无任务数据 ")) : vue.createCommentVNode("v-if", true)
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const TaskLinePicker = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-1fd2fa79"], ["__file", "D:/workfile/FoodWebApp/components/task_line_picker/index.vue"]]);
  const _sfc_main$f = {
    __name: "taskdetails",
    setup(__props, { expose: __expose }) {
      __expose();
      onLoad((options) => {
        if (options.taskId) {
          taskId.value = options.taskId;
        }
      });
      const popReactorCode = vue.ref(null);
      const reactorCode = vue.ref(null);
      const reactorCodeShow = vue.ref(false);
      const reactorInfo = vue.ref({});
      const scanReactorCode = () => {
        uni.scanCode({
          onlyFromCamera: false,
          // 可选：true 表示只从相机扫码，false 可从相册选择
          scanType: ["qrCode"],
          // 只识别二维码（可选：'barCode', 'datamatrix' 等）
          autoZoom: false,
          success: (res2) => {
            let code2 = res2.result;
            let reactorCodeOld = taskInfo.value.task.reactorCode;
            formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:232", res2.result);
            if (code2 != null && code2 != void 0 && code2 != "") {
              if (code2.startsWith("REACTOR-")) {
                code2 = code2.split("-")[1];
                if (code2 == reactorCodeOld) {
                  getReactorInfo(code2);
                } else {
                  handleQueryOtherTask(code2);
                }
              } else {
                uni.showToast({
                  title: "请扫描正确的反应釜二维码",
                  icon: "none"
                });
              }
            } else {
              uni.showToast({
                title: "请扫描正确的反应釜",
                icon: "none"
              });
            }
          },
          fail: (err2) => {
            formatAppLog("error", "at pages/task/taskdetails/taskdetails.vue:259", "扫码失败：", err2);
            uni.showToast({
              title: "扫码失败",
              icon: "none"
            });
          }
        });
      };
      const showReactorInputDialog = () => {
        reactorCode.value = "";
        popReactorCode.value.open();
      };
      const dialogReactorInputConfirm = (code2) => {
        if (code2 != null && code2 != void 0 && code2 != "") {
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:273", code2);
          let reactorCodeOld = taskInfo.value.task.reactorCode;
          if (code2 == reactorCodeOld) {
            getReactorInfo(code2);
          } else {
            handleQueryOtherTask(reactorCode.value);
            reactorCode.value = "";
          }
        } else {
          uni.showToast({
            title: "请输入正确的反应釜",
            icon: "none"
          });
          reactorCode.value = "";
        }
      };
      const getReactorInfo = (code2) => {
        uni.showLoading({
          title: "加载中...",
          mask: true
        });
        getReactorByCode(code2).then((res2) => {
          reactorInfo.value = res2.data;
          reactorCodeShow.value = true;
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:301", res2);
          uni.hideLoading();
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const popScaleCode = vue.ref(null);
      const scaleCode = vue.ref(null);
      const scaleCodeShow = vue.ref(false);
      const scaleInfo = vue.ref({});
      const scanScaleCode = () => {
        uni.scanCode({
          onlyFromCamera: false,
          // 可选：true 表示只从相机扫码，false 可从相册选择
          scanType: ["qrCode"],
          // 只识别二维码（可选：'barCode', 'datamatrix' 等）
          autoZoom: false,
          success: (res2) => {
            let code2 = res2.result;
            formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:324", res2.result);
            if (code2 != null && code2 != void 0 && code2 != "") {
              if (code2.startsWith("SCALE-")) {
                code2 = code2.split("-")[1];
                getScaleInfo(code2);
              } else {
                uni.showToast({
                  title: "请扫描指定的电子秤二维码",
                  icon: "none"
                });
              }
            } else {
              uni.showToast({
                title: "请扫描正确的电子秤",
                icon: "none"
              });
            }
          },
          fail: (err2) => {
            formatAppLog("error", "at pages/task/taskdetails/taskdetails.vue:343", "扫码失败：", err2);
            uni.showToast({
              title: "扫码失败",
              icon: "none"
            });
          }
        });
      };
      const showScaleInputDialog = () => {
        scaleCode.value = "";
        popScaleCode.value.open();
      };
      const dialogScaleInputConfirm = (code2) => {
        if (code2 != null && code2 != void 0 && code2 != "") {
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:357", code2);
          getScaleInfo(code2);
        } else {
          uni.showToast({
            title: "请输入正确的电子秤",
            icon: "none"
          });
          reactorCode.value = "";
        }
      };
      const getScaleInfo = (code2) => {
        uni.showLoading({
          title: "加载中...",
          mask: true
        });
        getScaleByCode(code2).then((res2) => {
          scaleInfo.value = res2.data;
          scaleCodeShow.value = true;
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:375", res2);
          uni.hideLoading();
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const lookBatchRecord = (taskLineId) => {
        uni.navigateTo({
          url: "/pages/task/batch_record/batch_record?taskLineId=" + taskLineId
        });
      };
      const handleQueryOtherTask = (reactor) => {
        formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:392", reactor);
        uni.showLoading({
          title: "加载中...",
          mask: true
        });
        doingListOne(reactor).then((res2) => {
          reactorInfo.value = res2.data.reactor;
          reactorCodeShow.value = true;
          taskId.value = res2.data.task.taskId;
          taskInfo.value = res2.data;
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:403", res2);
          uni.hideLoading();
        }).catch((e2) => {
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:406", e2);
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const taskId = vue.ref(null);
      const taskInfo = vue.ref({
        task: {},
        lines: [],
        process: 0,
        step: 0,
        total: 0
      });
      const screeWith = vue.ref(null);
      const pickerLine = vue.ref(null);
      onReady(() => {
      });
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        if (taskId.value == null || taskId.value == "" || taskId.value == void 0) {
          uni.showToast({
            icon: "none",
            title: "获取内容失败，内容不存在",
            duration: 3e3,
            complete: function() {
              uni.navigateBack();
            }
          });
        } else {
          loadTaskInfo();
        }
      });
      const chooseReactorType = () => {
        uni.showActionSheet({
          title: "请选择方式",
          itemList: ["扫描二维码", "输入反应釜编码"],
          success: function(e2) {
            switch (e2.tapIndex) {
              case 0:
                scanReactorCode();
                break;
              case 1:
                reactorCode.value = "";
                showReactorInputDialog();
                break;
            }
          }
        });
      };
      const chooseScaleType = () => {
        uni.showActionSheet({
          title: "请选择方式",
          itemList: ["扫描二维码", "输入电子秤编码"],
          success: function(e2) {
            switch (e2.tapIndex) {
              case 0:
                scanScaleCode();
                break;
              case 1:
                scaleCode.value = "";
                showScaleInputDialog();
                break;
            }
          }
        });
      };
      const loadTaskInfo = () => {
        uni.showLoading({
          title: "加载中...",
          mask: true
        });
        getTaskInfoAndLines(taskId.value).then((res2) => {
          taskInfo.value = res2.data;
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:488", res2);
          uni.hideLoading();
          if ((taskInfo.value.task.status == "PAUSE" || taskInfo.value.task.status == "START") && taskInfo.value.task.attr2 != "" && taskInfo.value.task.attr1 != "") {
            formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:493", 111);
            getScaleInfo(taskInfo.value.task.attr2);
            getReactorInfo(taskInfo.value.task.attr1);
          } else if ((taskInfo.value.task.status == "PAUSE" || taskInfo.value.task.status == "START" || taskInfo.value.task.status == "NORMAL") && (taskInfo.value.task.attr2 == "" || taskInfo.value.task.attr2 == void 0 || taskInfo.value.task.attr2 == null)) {
            let code2 = uni.getStorageSync("scale_code");
            formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:500", "sssss:" + code2);
            if (code2 != void 0 && code2 != null && code2 != "") {
              getScaleInfo(code2);
            }
          }
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const showPicker = vue.ref(false);
      const uploadError = () => {
        uni.$off("onTaskLineSelect");
        pickerLine.value.open(taskId.value);
        formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:520", "eee");
        uni.$on("onTaskLineSelect", (line) => {
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:523", line);
          uni.navigateTo({
            url: "/pages/task/errorreport/errorreport?taskId=" + taskId.value + "&taskLineId=" + line.taskLineId
          });
        });
      };
      const finishTask = () => {
        uni.showModal({
          title: "提示",
          content: "是否确认完成此任务?",
          cancelText: "取消",
          cancelColor: "#333",
          confirmText: "确认完成",
          confirmColor: "#52c41a",
          success: function(isOk) {
            if (isOk.confirm) {
              commitFinish();
            } else if (res.cancel) {
              formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:543", "用户点击取消");
            }
          }
        });
      };
      const commitFinish = () => {
        uni.showLoading({
          title: "正在提交...",
          mask: true
        });
        finishTaskByCode(taskInfo.value.task.taskCode).then((res2) => {
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:557", res2);
          uni.hideLoading();
          uni.navigateBack();
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const backPage = () => {
        uni.navigateBack();
      };
      const toCDB = (str) => {
        var tmp = "";
        for (var i2 = 0; i2 < str.length; i2++) {
          if (str.charCodeAt(i2) > 65248 && str.charCodeAt(i2) < 65375) {
            tmp += String.fromCharCode(str.charCodeAt(i2) - 65248);
          } else {
            tmp += String.fromCharCode(str.charCodeAt(i2));
          }
        }
        return tmp;
      };
      const startProduce = (line, index2) => {
        if (taskInfo.value.task.status == "FINISHED") {
          return;
        }
        if (Object.keys(reactorInfo.value).length == 0) {
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:591", "1");
          uni.showToast({
            title: "请选择反应釜",
            icon: "none"
          });
          return;
        }
        if (Object.keys(scaleInfo.value).length == 0) {
          uni.showToast({
            title: "请选择电子秤",
            icon: "none"
          });
          return;
        }
        if (line.status == "4" || line.status == "5") {
          uni.showToast({
            title: "此物料已投料完毕,请按照顺序选择其他物料",
            icon: "none"
          });
          return;
        }
        uni.scanCode({
          onlyFromCamera: false,
          // 可选：true 表示只从相机扫码，false 可从相册选择
          scanType: ["qrCode"],
          // 只识别二维码（可选：'barCode', 'datamatrix' 等）
          autoZoom: false,
          success: (res2) => {
            let code2 = res2.result;
            if (code2 != null && code2 != void 0 && code2 != "") {
              try {
                code2 = toCDB(code2);
                formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:645", code2);
                const parts = code2.split("*").filter((part) => part.trim() !== "");
                const itemCode = parts[1];
                const batchCode = parts[2];
                if (line.attr1 != void 0 && line.attr1 != null && line.attr1 != "") {
                  if (line.attr1 != batchCode) {
                    uni.showToast({
                      title: "请扫描指定的物料",
                      icon: "none"
                    });
                    return;
                  }
                }
                if (itemCode == line.itemCode) {
                  uni.showLoading({
                    title: "加载中...",
                    mask: true
                  });
                  startTask(line.taskCode, scaleInfo.value.machineryCode).then((res3) => {
                    formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:664", res3);
                    uni.hideLoading();
                    uni.showLoading({
                      title: "加载中...",
                      mask: true
                    });
                    upBatchCode(batchCode, line.taskLineId).then((res4) => {
                      uni.setStorageSync("scale_code", scaleInfo.value.machineryCode);
                      uni.hideLoading();
                      uni.navigateTo({
                        url: "/pages/produce/start_produce/start_produce?taskId=" + line.taskId + "&taskLineId=" + line.taskLineId + "&taskCode=" + line.taskCode + "&itemCode=" + line.itemCode + "&scaleCode=" + scaleInfo.value.machineryCode + "&specification=" + batchCode
                      });
                    }).catch((e2) => {
                      uni.hideLoading();
                      uni.showToast({
                        title: e2,
                        icon: "none"
                      });
                    });
                  }).catch((e2) => {
                    uni.hideLoading();
                    uni.showToast({
                      title: e2,
                      icon: "none"
                    });
                  });
                } else {
                  uni.showToast({
                    title: "请扫描指定的物料",
                    icon: "none"
                  });
                }
              } catch (e2) {
                uni.showToast({
                  title: "请扫描指定的物料" + e2,
                  icon: "none"
                });
              }
            } else {
              uni.showToast({
                title: "请扫描正确的物料",
                icon: "none"
              });
            }
          },
          fail: (err2) => {
            formatAppLog("error", "at pages/task/taskdetails/taskdetails.vue:719", "扫码失败：", err2);
            uni.showToast({
              title: "扫码失败",
              icon: "none"
            });
          }
        });
      };
      const pauseTaskWork = () => {
        uni.showLoading({
          title: "加载中...",
          mask: true
        });
        pauseTask(taskInfo.value.task.taskCode).then((res2) => {
          formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:735", res2);
          uni.hideLoading();
          loadTaskInfo();
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const getStatusColor = (status) => {
        switch (status) {
          case "1":
            return "#ccc";
          case "2":
            return "#1890ff";
          case "4":
            return "#52c41a";
          case "3":
            return "#ff9900";
          case "5":
            return "#dd524d";
          default:
            return "#ccc";
        }
      };
      const getStatusDotClass = (status) => {
        switch (status) {
          case "1":
            return "dot-pending";
          case "2":
            return "dot-processing";
          case "4":
            return "dot-completed";
          case "3":
            return "dot-warning";
          case "5":
            return "dot-error";
          default:
            return "dot-pending";
        }
      };
      const getMaterialStatusText = (status) => {
        formatAppLog("log", "at pages/task/taskdetails/taskdetails.vue:784", status);
        switch (status) {
          case "1":
            return "未投料";
          case "2":
            return "投料中";
          case "4":
            return "已完成";
          case "3":
            return "暂停(换桶)";
          case "5":
            return "超重";
          default:
            return "未知";
        }
      };
      const getDeviationClass = (deviation) => {
        deviation = parseFloat(deviation);
        if (deviation <= 1)
          return "deviation-good";
        if (deviation <= 3)
          return "deviation-warning";
        return "deviation-error";
      };
      const __returned__ = { popReactorCode, reactorCode, reactorCodeShow, reactorInfo, scanReactorCode, showReactorInputDialog, dialogReactorInputConfirm, getReactorInfo, popScaleCode, scaleCode, scaleCodeShow, scaleInfo, scanScaleCode, showScaleInputDialog, dialogScaleInputConfirm, getScaleInfo, lookBatchRecord, handleQueryOtherTask, taskId, taskInfo, screeWith, pickerLine, chooseReactorType, chooseScaleType, loadTaskInfo, showPicker, uploadError, finishTask, commitFinish, backPage, toCDB, startProduce, pauseTaskWork, getStatusColor, getStatusDotClass, getMaterialStatusText, getDeviationClass, get getTaskInfoAndLines() {
        return getTaskInfoAndLines;
      }, get startTask() {
        return startTask;
      }, get pauseTask() {
        return pauseTask;
      }, get finishTaskByCode() {
        return finishTaskByCode;
      }, get getReactorByCode() {
        return getReactorByCode;
      }, get getScaleByCode() {
        return getScaleByCode;
      }, get upBatchCode() {
        return upBatchCode;
      }, get doingListOne() {
        return doingListOne;
      }, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onReady() {
        return onReady;
      }, TaskLinePicker };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_1$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        class: "scroll-content"
      }, [
        vue.createElementVNode("view", { class: "card" }, [
          vue.createElementVNode("div", { class: "card-header" }, [
            vue.createElementVNode("div", { class: "card-title" }, "生产任务详情"),
            $setup.taskInfo.task.status == "NORMAL" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "status status-pending",
              id: "taskStatus"
            }, "待开始")) : $setup.taskInfo.task.status == "START" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "status status-processing",
              id: "taskStatus"
            }, "生产中 ")) : $setup.taskInfo.task.status == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 2,
              class: "status status-pending",
              id: "taskStatus"
            }, "暂停 ")) : $setup.taskInfo.task.status == "FINISHED" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 3,
              class: "status status-completed",
              id: "taskStatus"
            }, "完成 ")) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("div", { class: "task-basic-info" }, [
            vue.createElementVNode("div", { class: "info-row" }, [
              vue.createElementVNode("div", { class: "info-label" }, "任务编号:"),
              vue.createElementVNode(
                "div",
                { class: "info-value" },
                vue.toDisplayString($setup.taskInfo.task.taskCode || ""),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("div", { class: "info-row" }, [
              vue.createElementVNode("div", { class: "info-label" }, "任务名称:"),
              vue.createElementVNode(
                "div",
                { class: "info-value" },
                vue.toDisplayString($setup.taskInfo.task.taskName || ""),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("div", { class: "info-row" }, [
              vue.createElementVNode("div", { class: "info-label" }, "计划产量:"),
              vue.createElementVNode(
                "div",
                { class: "info-value" },
                vue.toDisplayString($setup.taskInfo.task.recipeCount || "") + "Kg",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("div", { class: "info-row" }, [
              vue.createElementVNode("div", { class: "info-label" }, "反应釜:"),
              vue.createElementVNode(
                "div",
                { class: "info-value" },
                vue.toDisplayString($setup.taskInfo.task.reactorName || "") + "(" + vue.toDisplayString($setup.taskInfo.task.reactorCode || "") + ") ",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("div", { class: "info-row" }, [
              vue.createElementVNode("div", { class: "info-label" }, "配方名称:"),
              vue.createElementVNode(
                "div",
                { class: "info-value" },
                vue.toDisplayString($setup.taskInfo.task.recipeName || ""),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("div", { class: "info-row" }, [
              vue.createElementVNode("div", { class: "info-label" }, "创建时间:"),
              vue.createElementVNode(
                "div",
                { class: "info-value" },
                vue.toDisplayString($setup.taskInfo.task.createTime || ""),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("div", { class: "info-row" }, [
              vue.createElementVNode("div", { class: "info-label" }, "负责人:"),
              vue.createElementVNode(
                "div",
                { class: "info-value" },
                vue.toDisplayString($setup.taskInfo.task.teamAdmin || ""),
                1
                /* TEXT */
              )
            ]),
            $setup.taskInfo.task.attr3 == 1 ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "info-row"
            }, [
              vue.createElementVNode("div", { class: "info-label" }, "任务提醒:"),
              vue.createElementVNode("div", {
                class: "info-value",
                style: { "color": "#aa0000" }
              }, " 存在超重投料")
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ]),
        $setup.taskInfo.task.status != "FINISHED" && $setup.taskInfo.task.status != "END" ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "selection-section"
        }, [
          vue.createElementVNode("div", { class: "selection-card" }, [
            vue.createElementVNode("div", { class: "selection-header" }, [
              vue.createElementVNode("div", { class: "selection-title" }, "选择反应釜"),
              vue.createElementVNode("div", {
                onClick: $setup.chooseReactorType,
                class: "status status-online"
              }, "选择")
            ]),
            vue.createElementVNode("div", {
              class: "selection-list",
              id: "reactorList"
            }, [
              $setup.reactorCodeShow == true ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "selection-item active"
              }, [
                vue.createElementVNode("div", { class: "device-info" }, [
                  vue.createElementVNode(
                    "div",
                    { class: "info-value" },
                    vue.toDisplayString($setup.reactorInfo.machineryName) + " (" + vue.toDisplayString($setup.reactorInfo.machineryCode) + ") ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("div", { class: "device-status" }, [
                    vue.createVNode(_component_l_icon, {
                      name: "data-base",
                      color: "#00aa00",
                      size: "13px"
                    }),
                    vue.createElementVNode(
                      "span",
                      null,
                      "容量: " + vue.toDisplayString($setup.reactorInfo.volume) + "L",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : (vue.openBlock(), vue.createElementBlock("div", {
                key: 1,
                class: "selection-item",
                onClick: $setup.chooseReactorType
              }, [
                vue.createElementVNode("div", { class: "device-info" }, [
                  vue.createElementVNode("div", { class: "info-value" }, "请选择反应釜")
                ])
              ]))
            ])
          ]),
          vue.createElementVNode("div", { style: { "height": "10px" } }),
          vue.createElementVNode("div", { class: "selection-card" }, [
            vue.createElementVNode("div", { class: "selection-header" }, [
              vue.createElementVNode("div", { class: "selection-title" }, "选择电子秤"),
              vue.createElementVNode("div", {
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.chooseScaleType()),
                class: "status status-online"
              }, "选择")
            ]),
            vue.createElementVNode("div", { class: "selection-list" }, [
              $setup.scaleCodeShow == true ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "selection-item active"
              }, [
                vue.createElementVNode("div", { class: "device-info" }, [
                  vue.createElementVNode(
                    "div",
                    { class: "info-value" },
                    vue.toDisplayString($setup.scaleInfo.machineryName) + " (" + vue.toDisplayString($setup.scaleInfo.machineryCode) + ") ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("div", { class: "device-status" }, [
                    vue.createVNode(_component_l_icon, {
                      name: "time",
                      color: "#00aa00",
                      size: "13px"
                    }),
                    vue.createElementVNode(
                      "span",
                      null,
                      "精度: ±" + vue.toDisplayString($setup.scaleInfo.accuracy.toFixed(2) || "") + "kg",
                      1
                      /* TEXT */
                    ),
                    $setup.scaleInfo.status != "online" ? (vue.openBlock(), vue.createBlock(_component_l_icon, {
                      key: 0,
                      name: "battery-charging",
                      color: "#aa0000",
                      size: "13px",
                      style: { "margin-left": "10px" }
                    })) : vue.createCommentVNode("v-if", true),
                    $setup.scaleInfo.status != "online" ? (vue.openBlock(), vue.createElementBlock("span", { key: 1 }, "离线")) : vue.createCommentVNode("v-if", true),
                    $setup.scaleInfo.status == "online" ? (vue.openBlock(), vue.createBlock(_component_l_icon, {
                      key: 2,
                      name: "base-station",
                      color: "#00aa00",
                      size: "13px",
                      style: { "margin-left": "10px" }
                    })) : vue.createCommentVNode("v-if", true),
                    $setup.scaleInfo.status == "online" ? (vue.openBlock(), vue.createElementBlock("span", { key: 3 }, "在线")) : vue.createCommentVNode("v-if", true)
                  ])
                ])
              ])) : (vue.openBlock(), vue.createElementBlock("div", {
                key: 1,
                class: "selection-item",
                onClick: $setup.chooseScaleType
              }, [
                vue.createElementVNode("div", { class: "device-info" }, [
                  vue.createElementVNode("div", { class: "info-value" }, "请选择电子秤")
                ])
              ]))
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", { class: "card" }, [
          vue.createElementVNode("div", { class: "card-header" }, [
            vue.createElementVNode("div", { class: "card-title" }, "物料配比进度"),
            vue.createElementVNode("div", { class: "card-subtitle" }, [
              vue.createTextVNode("已完成 "),
              vue.createElementVNode(
                "span",
                { id: "completedCount" },
                vue.toDisplayString($setup.taskInfo.step),
                1
                /* TEXT */
              ),
              vue.createTextVNode("/"),
              vue.createElementVNode(
                "span",
                { id: "totalCount" },
                vue.toDisplayString($setup.taskInfo.total),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("div", { class: "progress-bar" }, [
            vue.createElementVNode(
              "div",
              {
                class: "progress-inner",
                id: "progressBar",
                style: vue.normalizeStyle(`width: ${$setup.taskInfo.process}%;`)
              },
              null,
              4
              /* STYLE */
            )
          ]),
          vue.createElementVNode("div", { class: "material-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.taskInfo.lines, (material, index2) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "material-item",
                  onClick: ($event) => $setup.startProduce(material, index2),
                  style: vue.normalizeStyle({ "border-left": `4px solid ${$setup.getStatusColor(material.status)}` })
                }, [
                  vue.createElementVNode("div", { class: "material-header" }, [
                    vue.createElementVNode("div", { class: "material-name" }, [
                      vue.createTextVNode(
                        vue.toDisplayString(material.itemCode),
                        1
                        /* TEXT */
                      ),
                      material.attr1 ? (vue.openBlock(), vue.createElementBlock(
                        "div",
                        {
                          key: 0,
                          class: "material-guige"
                        },
                        "(" + vue.toDisplayString(material.attr1) + ")",
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true)
                    ]),
                    vue.createElementVNode("div", {
                      onClick: vue.withModifiers(($event) => $setup.lookBatchRecord(material.taskLineId), ["stop"]),
                      class: "material-spec",
                      style: { "height": "20px", "font-size": "13px", "display": "flex", "align-items": "center", "justify-content": "center" }
                    }, [
                      vue.createTextVNode(" 批次信息"),
                      vue.createVNode(_component_l_icon, {
                        name: "arrow-right-circle",
                        size: "15px",
                        color: "#888"
                      })
                    ], 8, ["onClick"])
                  ]),
                  vue.createElementVNode("div", { class: "weight-info" }, [
                    vue.createElementVNode(
                      "div",
                      { class: "target" },
                      "目标: " + vue.toDisplayString(material.waitAmount || 0) + " kg",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "div",
                      { class: "actual" },
                      "实际: " + vue.toDisplayString(material.realAmount || 0) + " kg",
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("div", { class: "weight-info" }, [
                    vue.createElementVNode("div", null, [
                      vue.createTextVNode("容差: "),
                      vue.createElementVNode(
                        "span",
                        {
                          class: vue.normalizeClass($setup.getDeviationClass(material.tolerance))
                        },
                        vue.toDisplayString(material.tolerance || 0) + "kg",
                        3
                        /* TEXT, CLASS */
                      )
                    ]),
                    vue.createElementVNode("div", null, [
                      vue.createTextVNode("偏差: "),
                      vue.createElementVNode(
                        "span",
                        {
                          class: vue.normalizeClass($setup.getDeviationClass((material.realAmount || 0) - material.waitAmount))
                        },
                        vue.toDisplayString(material.status == "1" ? "0" : ((material.realAmount || 0) - material.waitAmount).toFixed(2)) + "kg",
                        3
                        /* TEXT, CLASS */
                      )
                    ])
                  ]),
                  vue.createElementVNode("div", { class: "status-indicator" }, [
                    vue.createElementVNode(
                      "div",
                      {
                        class: vue.normalizeClass(`status-dot ${$setup.getStatusDotClass(material.status)}`)
                      },
                      null,
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "span",
                      null,
                      vue.toDisplayString($setup.getMaterialStatusText(material.status)),
                      1
                      /* TEXT */
                    )
                  ])
                ], 12, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createElementVNode("div", {
        class: "action-buttons",
        id: "actionButtons"
      }, [
        $setup.taskInfo.task.status == "START" || $setup.taskInfo.task.status == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: "btn btn-primary",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.finishTask())
        }, [
          vue.createVNode(_component_l_icon, {
            name: "git-repository",
            color: "#ffffff",
            size: "20px",
            style: { "margin-right": "8px" }
          }),
          vue.createTextVNode(" 完成 ")
        ])) : vue.createCommentVNode("v-if", true),
        $setup.taskInfo.task.status == "START" ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          class: "btn btn-warning",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.pauseTaskWork()),
          style: { "background": "#f39c12" }
        }, [
          vue.createVNode(_component_l_icon, {
            name: "stop-circle",
            color: "#ffffff",
            size: "20px",
            style: { "margin-right": "8px" }
          }),
          vue.createTextVNode(" 暂停任务 ")
        ])) : vue.createCommentVNode("v-if", true),
        $setup.taskInfo.task.status == "NORMAL" || $setup.taskInfo.task.status == "START" || $setup.taskInfo.task.status == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 2,
          class: "btn btn-danger",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.uploadError())
        }, [
          vue.createVNode(_component_l_icon, {
            name: "error-circle",
            color: "#ffffff",
            size: "20px",
            style: { "margin-right": "8px" }
          }),
          vue.createTextVNode("中断上报 ")
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popReactorCode",
          type: "dialog"
        },
        {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_popup_dialog, {
              ref: "inputReactorClose",
              mode: "input",
              title: "反应釜编码",
              value: $setup.reactorCode,
              placeholder: "请输入反应釜编码",
              onConfirm: $setup.dialogReactorInputConfirm
            }, null, 8, ["value"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popScaleCode",
          type: "dialog"
        },
        {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_popup_dialog, {
              ref: "inputScaleClose",
              mode: "input",
              title: "电子秤编码",
              value: $setup.scaleCode,
              placeholder: "请输入电子秤编码",
              onConfirm: $setup.dialogScaleInputConfirm
            }, null, 8, ["value"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      vue.createVNode(
        $setup["TaskLinePicker"],
        { ref: "pickerLine" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesTaskTaskdetailsTaskdetails = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-4122a7df"], ["__file", "D:/workfile/FoodWebApp/pages/task/taskdetails/taskdetails.vue"]]);
  const _sfc_main$e = {
    __name: "taskwarn",
    setup(__props, { expose: __expose }) {
      __expose();
      onLoad((options) => {
        if (options.recordId) {
          recordId.value = options.recordId;
        }
      });
      const recordId = vue.ref(null);
      const recordInfo = vue.ref({});
      const screeWith = vue.ref(null);
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        if (recordId.value == null || recordId.value == "" || recordId.value == void 0) {
          uni.showToast({
            icon: "none",
            title: "获取内容失败，内容不存在",
            duration: 3e3,
            complete: function() {
              uni.navigateBack();
            }
          });
        } else {
          uni.showLoading({
            title: "加载中...",
            mask: true
          });
          getTaskWarnInfo(recordId.value).then((res2) => {
            recordInfo.value = res2.data;
            uni.hideLoading();
          }).catch((e2) => {
            uni.hideLoading();
          });
        }
      });
      const __returned__ = { recordId, recordInfo, screeWith, get getTaskWarnInfo() {
        return getTaskWarnInfo;
      }, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "任务编码"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.taskCode || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "任务名称"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.taskName || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "配方编码"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.recipeCode || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "配方名称"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.recipeName || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "生产数量"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.recipeCount || "0") + "Kg",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "反应釜编码"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.reactorCode || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "反应釜名称"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.reactorName || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "物料编码"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.itemCode || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "物料名称"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.itemName || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "容差值"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.tolerance || "0") + "Kg",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "提前预警量"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.warning || "0") + "Kg",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "待生产数量"),
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($setup.recordInfo.waitAmount || "0") + "Kg",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "称重重量"),
          vue.createElementVNode(
            "view",
            {
              class: "name",
              style: { "color": "red" }
            },
            vue.toDisplayString($setup.recordInfo.netAmount || "0") + "Kg",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "操作人"),
          vue.createElementVNode(
            "view",
            {
              class: "name",
              style: { "color": "red" }
            },
            vue.toDisplayString($setup.recordInfo.updateBy || ""),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "custom-list-item" }, [
          vue.createElementVNode("view", { class: "left-content" }, "操作时间"),
          vue.createElementVNode(
            "view",
            {
              class: "name",
              style: { "color": "red" }
            },
            vue.toDisplayString($setup.recordInfo.createTime || ""),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const PagesTaskTaskwarnTaskwarn = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-ce42a7cd"], ["__file", "D:/workfile/FoodWebApp/pages/task/taskwarn/taskwarn.vue"]]);
  const pages = [
    {
      path: "pages/login",
      style: {
        navigationBarTitleText: "登录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/home/index",
      style: {
        navigationBarTitleText: "首页",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/task/index",
      style: {
        navigationBarTitleText: "任务"
      }
    },
    {
      path: "pages/produce/index",
      style: {
        navigationBarTitleText: "开始生产"
      }
    },
    {
      path: "pages/mine/index",
      style: {
        navigationBarTitleText: "个人中心"
      }
    },
    {
      path: "pages/common/webview/index",
      style: {
        navigationBarTitleText: "其他"
      }
    },
    {
      path: "pages/msg/index",
      style: {
        navigationBarTitleText: "消息中心"
      }
    },
    {
      path: "pages/mine/about/about",
      style: {
        navigationBarTitleText: "关于"
      }
    },
    {
      path: "pages/mine/userinfo/userinfo",
      style: {
        navigationBarTitleText: "用户信息"
      }
    },
    {
      path: "pages/mine/changepwd/changepwd",
      style: {
        navigationBarTitleText: "修改密码"
      }
    },
    {
      path: "pages/msg/notice/notice",
      style: {
        navigationBarTitleText: "通知"
      }
    },
    {
      path: "pages/task/taskdetails/taskdetails",
      style: {
        navigationBarTitleText: "任务详情"
      }
    },
    {
      path: "pages/task/taskwarn/taskwarn",
      style: {
        navigationBarTitleText: "配料超重"
      }
    },
    {
      path: "pages/task/errorreport/errorreport",
      style: {
        navigationBarTitleText: "中断上报"
      }
    },
    {
      path: "pages/common/popup/index",
      style: {
        navigationBarTitleText: "溫馨提示"
      }
    },
    {
      path: "pages/produce/recipe_line/recipe_line",
      style: {
        navigationBarTitleText: "投料任务",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/produce/scan_item/scan_item",
      style: {
        navigationBarTitleText: "扫码物料"
      }
    },
    {
      path: "pages/produce/start_produce/start_produce",
      style: {
        navigationBarTitleText: "生产投料"
      }
    },
    {
      path: "pages/task/batch_record/batch_record",
      style: {
        navigationBarTitleText: "批次详情"
      }
    },
    {
      path: "pages/register",
      style: {
        navigationBarTitleText: "注册体验账户"
      }
    }
  ];
  const globalStyle = {
    pageOrientation: "portrait",
    navigationBarTitleText: "智能投料",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: "#3498db",
    backgroundColor: "#F8F8F8",
    backgroundColorTop: "#F4F5F6",
    backgroundColorBottom: "#F4F5F6",
    onReachBottomDistance: 150,
    "mp-360": {
      navigationStyle: "custom"
    },
    h5: {
      maxWidth: 1190,
      navigationBarTextStyle: "black",
      navigationBarBackgroundColor: "#F1F1F1"
    }
  };
  const tabBar = {
    color: "#7f8c8d",
    selectedColor: "#3498db",
    borderStyle: "white",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/home/index",
        iconPath: "static/tabs/home.png",
        selectedIconPath: "static/tabs/home_sel.png",
        text: "首页"
      },
      {
        pagePath: "pages/task/index",
        iconPath: "/static/tabs/tasks.png",
        selectedIconPath: "static/tabs/tasks_sel.png",
        text: "任务"
      },
      {
        pagePath: "pages/msg/index",
        iconPath: "/static/tabs/msg_tab.png",
        selectedIconPath: "/static/tabs/msg_tab_sel.png",
        text: "消息"
      },
      {
        pagePath: "pages/mine/index",
        iconPath: "static/tabs/user.png",
        selectedIconPath: "static/tabs/user_sel.png",
        text: "我的"
      }
    ]
  };
  const e = {
    pages,
    globalStyle,
    tabBar
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, h2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += i3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(h3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = h2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], T2 = e4[t4 + 15], C2 = i3[0], P2 = i3[1], O2 = i3[2], E2 = i3[3];
        C2 = u2(C2, P2, O2, E2, o3, 7, a2[0]), E2 = u2(E2, C2, P2, O2, c3, 12, a2[1]), O2 = u2(O2, E2, C2, P2, p2, 17, a2[2]), P2 = u2(P2, O2, E2, C2, f2, 22, a2[3]), C2 = u2(C2, P2, O2, E2, g2, 7, a2[4]), E2 = u2(E2, C2, P2, O2, m2, 12, a2[5]), O2 = u2(O2, E2, C2, P2, y2, 17, a2[6]), P2 = u2(P2, O2, E2, C2, _2, 22, a2[7]), C2 = u2(C2, P2, O2, E2, w2, 7, a2[8]), E2 = u2(E2, C2, P2, O2, v2, 12, a2[9]), O2 = u2(O2, E2, C2, P2, I2, 17, a2[10]), P2 = u2(P2, O2, E2, C2, S2, 22, a2[11]), C2 = u2(C2, P2, O2, E2, b2, 7, a2[12]), E2 = u2(E2, C2, P2, O2, k2, 12, a2[13]), O2 = u2(O2, E2, C2, P2, A2, 17, a2[14]), C2 = l2(C2, P2 = u2(P2, O2, E2, C2, T2, 22, a2[15]), O2, E2, c3, 5, a2[16]), E2 = l2(E2, C2, P2, O2, y2, 9, a2[17]), O2 = l2(O2, E2, C2, P2, S2, 14, a2[18]), P2 = l2(P2, O2, E2, C2, o3, 20, a2[19]), C2 = l2(C2, P2, O2, E2, m2, 5, a2[20]), E2 = l2(E2, C2, P2, O2, I2, 9, a2[21]), O2 = l2(O2, E2, C2, P2, T2, 14, a2[22]), P2 = l2(P2, O2, E2, C2, g2, 20, a2[23]), C2 = l2(C2, P2, O2, E2, v2, 5, a2[24]), E2 = l2(E2, C2, P2, O2, A2, 9, a2[25]), O2 = l2(O2, E2, C2, P2, f2, 14, a2[26]), P2 = l2(P2, O2, E2, C2, w2, 20, a2[27]), C2 = l2(C2, P2, O2, E2, k2, 5, a2[28]), E2 = l2(E2, C2, P2, O2, p2, 9, a2[29]), O2 = l2(O2, E2, C2, P2, _2, 14, a2[30]), C2 = h2(C2, P2 = l2(P2, O2, E2, C2, b2, 20, a2[31]), O2, E2, m2, 4, a2[32]), E2 = h2(E2, C2, P2, O2, w2, 11, a2[33]), O2 = h2(O2, E2, C2, P2, S2, 16, a2[34]), P2 = h2(P2, O2, E2, C2, A2, 23, a2[35]), C2 = h2(C2, P2, O2, E2, c3, 4, a2[36]), E2 = h2(E2, C2, P2, O2, g2, 11, a2[37]), O2 = h2(O2, E2, C2, P2, _2, 16, a2[38]), P2 = h2(P2, O2, E2, C2, I2, 23, a2[39]), C2 = h2(C2, P2, O2, E2, k2, 4, a2[40]), E2 = h2(E2, C2, P2, O2, o3, 11, a2[41]), O2 = h2(O2, E2, C2, P2, f2, 16, a2[42]), P2 = h2(P2, O2, E2, C2, y2, 23, a2[43]), C2 = h2(C2, P2, O2, E2, v2, 4, a2[44]), E2 = h2(E2, C2, P2, O2, b2, 11, a2[45]), O2 = h2(O2, E2, C2, P2, T2, 16, a2[46]), C2 = d2(C2, P2 = h2(P2, O2, E2, C2, p2, 23, a2[47]), O2, E2, o3, 6, a2[48]), E2 = d2(E2, C2, P2, O2, _2, 10, a2[49]), O2 = d2(O2, E2, C2, P2, A2, 15, a2[50]), P2 = d2(P2, O2, E2, C2, m2, 21, a2[51]), C2 = d2(C2, P2, O2, E2, b2, 6, a2[52]), E2 = d2(E2, C2, P2, O2, f2, 10, a2[53]), O2 = d2(O2, E2, C2, P2, I2, 15, a2[54]), P2 = d2(P2, O2, E2, C2, c3, 21, a2[55]), C2 = d2(C2, P2, O2, E2, w2, 6, a2[56]), E2 = d2(E2, C2, P2, O2, T2, 10, a2[57]), O2 = d2(O2, E2, C2, P2, y2, 15, a2[58]), P2 = d2(P2, O2, E2, C2, k2, 21, a2[59]), C2 = d2(C2, P2, O2, E2, g2, 6, a2[60]), E2 = d2(E2, C2, P2, O2, S2, 10, a2[61]), O2 = d2(O2, E2, C2, P2, p2, 15, a2[62]), P2 = d2(P2, O2, E2, C2, v2, 21, a2[63]), i3[0] = i3[0] + C2 | 0, i3[1] = i3[1] + P2 | 0, i3[2] = i3[2] + O2 | 0, i3[3] = i3[3] + E2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", l = "CLIENT_DB", h = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== h;
      }
    }
    exec() {
      return this.needRetry ? (this.status = h, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), T = b, C = I(""), P = I("[]") || [];
  let E = "";
  try {
    E = "__UNI__930D6B4";
  } catch (e2) {
  }
  let x, L = {};
  function U(e2, t2 = {}) {
    var n2, s2;
    return n2 = L, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (L[e2] = t2), L[e2];
  }
  function R() {
    return x || (x = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof window)
        return window;
      function e2() {
        return this;
      }
      return void 0 !== e2() ? e2() : new Function("return this")();
    }(), x);
  }
  L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const N = ["invoke", "success", "fail", "complete"], D = U("_globalUniCloudInterceptor");
  function M(e2, t2) {
    D[e2] || (D[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = D[e3][t3];
        s2 || (s2 = D[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function q(e2, t2) {
    D[e2] || (D[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = D[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete D[e2];
  }
  function F(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function K(e2, t2) {
    return D[e2] && D[e2][t2] || [];
  }
  function j(e2) {
    M("callObject", e2);
  }
  const $ = U("_globalUniCloudListener"), B = "response", W = "needLogin", H = "refreshToken", J = "failover", z = "clientdb", V = "cloudfunction", G = "cloudobject";
  function Q(e2) {
    return $[e2] || ($[e2] = []), $[e2];
  }
  function Y(e2, t2) {
    const n2 = Q(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function X(e2, t2) {
    const n2 = Q(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Z(e2, t2) {
    const n2 = Q(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let ee, te = false;
  function ne() {
    return ee || (ee = new Promise((e2) => {
      te && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (te = true, e2());
        }
        te || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), ee);
  }
  function se(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class re extends Error {
    constructor(e2) {
      const t2 = e2.message || e2.errMsg || "unknown system error";
      super(t2), this.errMsg = t2, this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ie = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function oe(e2) {
    return e2 && oe(e2.__v_raw) || e2;
  }
  function ae() {
    return { token: ie.getStorageSync("uni_id_token") || ie.getStorageSync("uniIdToken"), tokenExpired: ie.getStorageSync("uni_id_token_expired") };
  }
  function ce({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ie.setStorageSync("uni_id_token", e2), t2 && ie.setStorageSync("uni_id_token_expired", t2);
  }
  let ue, le;
  function he() {
    return ue || (ue = uni.getSystemInfoSync()), ue;
  }
  function de() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  let pe = {};
  function fe() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (le)
      return { ...pe, ...le, locale: e2, LOCALE: e2 };
    const t2 = he(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t2)
      Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return le = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...de(), ...t2 }, { ...pe, ...le, locale: e2, LOCALE: e2 };
  }
  var ge = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new re({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new re({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var me = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ie, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new re({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return ge.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = ge.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ge.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request({ ...this.setupRequest(t2), timeout: e2.timeout });
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new re({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: l2, signature: h2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: l2, Signature: h2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = ge.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new re({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), this.getFileInfo({ fileList: e2 }).then((n3) => {
          t2({ fileList: e2.map((e3, t3) => {
            const s2 = n3.fileList[t3];
            return { fileID: e3, tempFileURL: s2 && s2.url || e3 };
          }) });
        });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var ye = { init(e2) {
    const t2 = new me(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const _e = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var we;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(we || (we = {}));
  var ve = function() {
  }, Ie = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], l2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], l3 = n3[5], h2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & l3 ^ ~a3 & h2) + c2[p2] + u2[p2];
          d2 = h2, h2 = l3, l3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + l3 | 0, n3[6] = n3[6] + h2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(l2), t3.HmacSHA256 = i2._createHmacHelper(l2);
    }(Math), n2.SHA256);
  }), Se = Ie, be = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const ke = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new re({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ae(e2) {
    return void 0 === e2;
  }
  function Te(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  function Ce(e2 = "") {
    return e2.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
  }
  function Pe(e2 = 32) {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n2 = t2.length;
    let s2 = "";
    for (let r2 = 0; r2 < e2; r2++)
      s2 += t2.charAt(Math.floor(Math.random() * n2));
    return s2;
  }
  var Oe;
  function Ee(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(Oe || (Oe = {}));
  const xe = { adapter: null, runtime: void 0 }, Le = ["anonymousUuidKey"];
  class Ue extends ve {
    constructor() {
      super(), xe.adapter.root.tcbObject || (xe.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      xe.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return xe.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete xe.adapter.root.tcbObject[e2];
    }
    clear() {
      delete xe.adapter.root.tcbObject;
    }
  }
  function Re(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Ue();
      case "none":
        return new Ue();
      default:
        return t2.sessionStorage || new Ue();
    }
  }
  class Ne {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = xe.adapter.primaryStorage || e2.persistence, this._storage = Re(this._persistence, xe.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = "device_id", a2 = `token_type_${e2.env}`, c2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: c2, deviceIdKey: o2, tokenTypeKey: a2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Re(e2, xe.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Le.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ae(r2) || Te(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const De = {}, Me = {};
  function qe(e2) {
    return De[e2];
  }
  class Fe {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ke extends Fe {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const je = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ke)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Fe(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function $e(e2, t2) {
    je.on(e2, t2);
  }
  function Be(e2, t2 = {}) {
    je.fire(e2, t2);
  }
  function We(e2, t2) {
    je.off(e2, t2);
  }
  const He = "loginStateChanged", Je = "loginStateExpire", ze = "loginTypeChanged", Ve = "anonymousConverted", Ge = "refreshAccessToken";
  var Qe;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(Qe || (Qe = {}));
  class Ye {
    constructor() {
      this._fnPromiseMap = /* @__PURE__ */ new Map();
    }
    async run(e2, t2) {
      let n2 = this._fnPromiseMap.get(e2);
      return n2 || (n2 = new Promise(async (n3, s2) => {
        try {
          await this._runIdlePromise();
          const s3 = t2();
          n3(await s3);
        } catch (e3) {
          s2(e3);
        } finally {
          this._fnPromiseMap.delete(e2);
        }
      }), this._fnPromiseMap.set(e2, n2)), n2;
    }
    _runIdlePromise() {
      return Promise.resolve();
    }
  }
  class Xe {
    constructor(e2) {
      this._singlePromise = new Ye(), this._cache = qe(e2.env), this._baseURL = `https://${e2.env}.ap-shanghai.tcb-api.tencentcloudapi.com`, this._reqClass = new xe.adapter.reqClass({ timeout: e2.timeout, timeoutMsg: `请求在${e2.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] });
    }
    _getDeviceId() {
      if (this._deviceID)
        return this._deviceID;
      const { deviceIdKey: e2 } = this._cache.keys;
      let t2 = this._cache.getStore(e2);
      return "string" == typeof t2 && t2.length >= 16 && t2.length <= 48 || (t2 = Pe(), this._cache.setStore(e2, t2)), this._deviceID = t2, t2;
    }
    async _request(e2, t2, n2 = {}) {
      const s2 = { "x-request-id": Pe(), "x-device-id": this._getDeviceId() };
      if (n2.withAccessToken) {
        const { tokenTypeKey: e3 } = this._cache.keys, t3 = await this.getAccessToken(), n3 = this._cache.getStore(e3);
        s2.authorization = `${n3} ${t3}`;
      }
      return this._reqClass["get" === n2.method ? "get" : "post"]({ url: `${this._baseURL}${e2}`, data: t2, headers: s2 });
    }
    async _fetchAccessToken() {
      const { loginTypeKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2, tokenTypeKey: s2 } = this._cache.keys, r2 = this._cache.getStore(e2);
      if (r2 && r2 !== Qe.ANONYMOUS)
        throw new re({ code: "INVALID_OPERATION", message: "非匿名登录不支持刷新 access token" });
      const i2 = await this._singlePromise.run("fetchAccessToken", async () => (await this._request("/auth/v1/signin/anonymously", {}, { method: "post" })).data), { access_token: o2, expires_in: a2, token_type: c2 } = i2;
      return this._cache.setStore(s2, c2), this._cache.setStore(t2, o2), this._cache.setStore(n2, Date.now() + 1e3 * a2), o2;
    }
    isAccessTokenExpired(e2, t2) {
      let n2 = true;
      return e2 && t2 && (n2 = t2 < Date.now()), n2;
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this.isAccessTokenExpired(n2, s2) ? this._fetchAccessToken() : n2;
    }
    async refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, loginTypeKey: n2 } = this._cache.keys;
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.setStore(n2, Qe.ANONYMOUS), this.getAccessToken();
    }
    async getUserInfo() {
      return this._singlePromise.run("getUserInfo", async () => (await this._request("/auth/v1/user/me", {}, { withAccessToken: true, method: "get" })).data);
    }
  }
  const Ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], et = { "X-SDK-Version": "1.3.5" };
  function tt(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function nt() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...et, "x-seqid": e2 } };
  }
  class st {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new xe.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = qe(this.config.env), this._localCache = (t2 = this.config.env, Me[t2]), this.oauth = new Xe(this.config), tt(this._reqClass, "post", [nt]), tt(this._reqClass, "upload", [nt]), tt(this._reqClass, "download", [nt]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new re({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === Qe.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Be(Je), this._cache.removeStore(n2);
        }
        throw new re({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Be(Ge), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new re({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      let o2;
      if (-1 === Ze.indexOf(e2) && (this._cache.keys, i2.access_token = await this.oauth.getAccessToken()), "storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = { ...l2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(_e, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (p2 += h2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new re({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}, n2 = {}) {
      const s2 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
      if (("ACCESS_TOKEN_DISABLED" === s2.data.code || "ACCESS_TOKEN_EXPIRED" === s2.data.code) && -1 === Ze.indexOf(e2)) {
        await this.oauth.refreshAccessToken();
        const s3 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
        if (s3.data.code)
          throw new re({ code: s3.data.code, message: Ce(s3.data.message) });
        return s3.data;
      }
      if (s2.data.code)
        throw new re({ code: s2.data.code, message: Ce(s2.data.message) });
      return s2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const rt = {};
  function it(e2) {
    return rt[e2];
  }
  class ot {
    constructor(e2) {
      this.config = e2, this._cache = qe(e2.env), this._request = it(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class at {
    constructor(e2) {
      if (!e2)
        throw new re({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = qe(this._envId), this._request = it(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const e2 = await this._request.oauth.getUserInfo();
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class ct {
    constructor(e2) {
      if (!e2)
        throw new re({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = qe(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new at(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === Qe.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Qe.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Qe.WECHAT || this.loginType === Qe.WECHAT_OPEN || this.loginType === Qe.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class ut extends ot {
    async signIn() {
      this._cache.updatePersistence("local"), await this._request.oauth.getAccessToken(), Be(He), Be(ze, { env: this.config.env, loginType: Qe.ANONYMOUS, persistence: "local" });
      const e2 = new ct(this.config.env);
      return await e2.user.refresh(), e2;
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Be(Ve, { env: this.config.env }), Be(ze, { loginType: Qe.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new re({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, Qe.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class lt extends ot {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Be(He), Be(ze, { env: this.config.env, loginType: Qe.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new ct(this.config.env);
      throw new re({ message: "自定义登录失败" });
    }
  }
  class ht extends ot {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Be(He), Be(ze, { env: this.config.env, loginType: Qe.EMAIL, persistence: this.config.persistence }), new ct(this.config.env);
      throw s2.code ? new re({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new re({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class dt extends ot {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Qe.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Be(He), Be(ze, { env: this.config.env, loginType: Qe.USERNAME, persistence: this.config.persistence }), new ct(this.config.env);
      throw s2.code ? new re({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new re({ message: "用户名密码登录失败" });
    }
  }
  class pt {
    constructor(e2) {
      this.config = e2, this._cache = qe(e2.env), this._request = it(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), $e(ze, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new ut(this.config);
    }
    customAuthProvider() {
      return new lt(this.config);
    }
    emailAuthProvider() {
      return new ht(this.config);
    }
    usernameAuthProvider() {
      return new dt(this.config);
    }
    async signInAnonymously() {
      return new ut(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new ht(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new dt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new ut(this.config)), $e(Ve, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === Qe.ANONYMOUS)
        throw new re({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Be(He), Be(ze, { env: this.config.env, loginType: Qe.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      $e(He, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      $e(Je, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      $e(Ge, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      $e(Ve, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      $e(ze, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this._request.oauth.isAccessTokenExpired(n2, s2) ? null : new ct(this.config.env);
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new lt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ft = function(e2, t2) {
    t2 = t2 || ke();
    const n2 = it(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: l2, requestId: d2 }) : t2(new re({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, gt = function(e2, t2) {
    t2 = t2 || ke();
    const n2 = it(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, mt = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ke(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return it(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, yt = function({ fileList: e2 }, t2) {
    t2 = t2 || ke(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return it(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, _t = async function({ fileID: e2 }, t2) {
    const n2 = (await yt.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = it(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, wt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2, timeout: i2 }, o2) {
    const a2 = o2 || ke();
    let c2;
    try {
      c2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new re({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const u2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: c2 };
    return it(this.config.env).send("functions.invokeFunction", u2, { timeout: i2 }).then((e3) => {
      if (e3.code)
        a2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          a2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), a2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            a2(new re({ message: "response data must be json" }));
          }
      }
      return a2.promise;
    }).catch((e3) => {
      a2(e3);
    }), a2.promise;
  }, vt = { timeout: 15e3, persistence: "session" }, It = {};
  class St {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (xe.adapter || (this.requestClient = new xe.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...vt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new St(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || xe.adapter.primaryStorage || vt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        De[t3] = new Ne(e3), Me[t3] = new Ne({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, rt[n2.env] = new st(n2), this.authObj = new pt(this.config), this.authObj;
    }
    on(e2, t2) {
      return $e.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return We.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return wt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return mt.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return yt.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return _t.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ft.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return gt.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      It[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = It[e2];
      if (!n2)
        throw new re({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = Ee(e2) || {};
      t2 && (xe.adapter = t2), n2 && (xe.runtime = n2);
    }
  }
  var bt = new St();
  function kt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class At {
    get(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        ie.request({ url: kt("https:", t2), data: n2, method: "GET", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    post(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        ie.request({ url: kt("https:", t2), data: n2, method: "POST", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ie.uploadFile({ url: kt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const Tt = { setItem(e2, t2) {
    ie.setStorageSync(e2, t2);
  }, getItem: (e2) => ie.getStorageSync(e2), removeItem(e2) {
    ie.removeStorageSync(e2);
  }, clear() {
    ie.clearStorageSync();
  } };
  var Ct = { genAdapter: function() {
    return { root: {}, reqClass: At, localStorage: Tt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  bt.useAdapters(Ct);
  const Pt = bt, Ot = Pt.init;
  Pt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = Ot.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = se(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var Et = Pt;
  async function xt(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ie.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Lt(e2, t2) {
    let n2;
    for (let s2 = 0; s2 < e2.length; s2++) {
      const r2 = e2[s2];
      if (await xt(r2, t2)) {
        n2 = r2;
        break;
      }
    }
    return { address: n2, port: t2 };
  }
  const Ut = { "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign", "serverless.file.resource.report": "storage/report", "serverless.file.resource.delete": "storage/delete", "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url" };
  var Rt = class {
    constructor(e2) {
      if (["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), !e2.endpoint)
        throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
      this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = ie;
    }
    async request(e2, t2 = true) {
      const n2 = t2;
      return e2 = n2 ? await this.setupLocalRequest(e2) : this.setupRequest(e2), Promise.resolve().then(() => n2 ? this.requestLocal(e2) : ge.wrappedRequest(e2, this.adapter.request));
    }
    requestLocal(e2) {
      return new Promise((t2, n2) => {
        this.adapter.request(Object.assign(e2, { complete(e3) {
          if (e3 || (e3 = {}), !e3.statusCode || e3.statusCode >= 400) {
            const t3 = e3.data && e3.data.code || "SYS_ERR", s2 = e3.data && e3.data.message || "request:fail";
            return n2(new re({ code: t3, message: s2 }));
          }
          t2({ success: true, result: e3.data });
        } }));
      });
    }
    setupRequest(e2) {
      const t2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      n2["x-serverless-sign"] = ge.sign(t2, this.config.clientSecret);
      const s2 = fe();
      n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
      const { token: r2 } = ae();
      return n2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: t2, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
    }
    async setupLocalRequest(e2) {
      const t2 = fe(), { token: n2 } = ae(), s2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now(), clientInfo: t2, token: n2 }), { address: r2, servePort: i2 } = this.__dev__ && this.__dev__.debugInfo || {}, { address: o2 } = await Lt(r2, i2);
      return { url: `http://${o2}:${i2}/${Ut[e2.method]}`, method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify({ "Content-Type": "application/json" })) };
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(t2, false);
    }
    getUploadFileOptions(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    reportUploadFile(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new re({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getUploadFileOptions({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        return r2 = t3.result.fileUrl, new Promise((t4, r3) => {
          const c2 = this.adapter.uploadFile({ url: i2, formData: o2, name: a2, filePath: e2, fileType: n2, success(e3) {
            e3 && e3.statusCode < 400 ? t4(e3) : r3(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
          }, fail(e3) {
            r3(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
          } });
          "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
            s2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
          });
        });
      }).then(() => this.reportUploadFile({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(t2).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new re({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(n2).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new re({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var Nt = { init(e2) {
    const t2 = new Rt(e2), n2 = { signInAnonymously: function() {
      return Promise.resolve();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, Dt = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Mt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  function qt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = String(Date.now()), u2 = Mt(), l2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), h2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = Se(e3.body).toString(Dt), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = Se(r3).toString(Dt), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = be(o3, e3.secretKey).toString(Dt);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: l2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: h2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, l2, { Authorization: f2 }) };
  }
  function Ft({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {}, timeout: r2 }) {
    return new Promise((i2, o2) => {
      ie.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", timeout: r2, complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return o2(new re({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        i2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Kt(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = qt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": String(Date.now() + 6e4) }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Ft({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new re({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new re({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function jt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new re({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function $t(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  class Bt {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Mt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", Se(i2).toString(Dt)].join("\n"), a2 = be(o2, this.config.secretKey).toString(Dt), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  }
  class Wt {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = `/ws/sse/function/${e2}`, s2 = this.config.endpoint.replace(/^http(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Mt(), timestamp: "" + Date.now() }), i2 = ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), o2 = [n2.replace("/ws", ""), i2, `host:${s2}`].join("\n"), a2 = ["HMAC-SHA256", Se(o2).toString(Dt)].join("\n"), c2 = be(a2, this.config.secretKey).toString(Dt), u2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.endpoint}${n2}?${u2}&signature=${c2}`;
    }
  }
  var Ht = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new Bt(this.config), this._sse = new Wt(this.config);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2, async: r2 = false, timeout: i2 } = e3, o2 = "POST", a2 = { "x-to-function-name": n2 };
        r2 && (a2["x-function-invoke-type"] = "async");
        const { url: c2, headers: u2 } = qt("/functions/invokeFunction", { functionName: n2, data: s2, method: o2, headers: a2, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Ft({ url: c2, data: s2, method: o2, headers: u2, timeout: i2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new re({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new re({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ie.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Kt({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && t2({ code: "INVALID_PARAM", message: "fileList不能为空数组" }), e2.length > 50 && t2({ code: "INVALID_PARAM", message: "fileList数组长度不能超过50" });
        const s2 = [];
        for (const n3 of e2) {
          let e3;
          "string" !== f(n3) && t2({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
          try {
            e3 = jt.call(this, n3);
          } catch (t3) {
            console.warn(t3.errCode, t3.errMsg), e3 = n3;
          }
          s2.push({ file_id: e3, expire: 600 });
        }
        Kt({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: $t.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async connectWebSocket(e2) {
      const { name: t2, query: n2 } = e2;
      return ie.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
      } });
    }
    requestSSE(e2) {
      const { name: t2, data: n2 } = e2;
      return ie.request({ method: "POST", url: this._sse.signedURL(t2), data: n2, header: { "content-type": "application/json" }, dataType: "json" });
    }
  };
  var Jt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Ht(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function zt({ data: e2 }) {
    let t2;
    t2 = fe();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = ae();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  const Vt = { enable: false, interval: 0, space: {} };
  let Gt = null, Qt = 0, Yt = false;
  function Xt() {
    return Array.isArray(P) && P.length ? P[0] : {};
  }
  function Zt(e2) {
    return `${e2}_${Xt().spaceId || "default"}`;
  }
  function en() {
    if (Gt)
      return Gt;
    try {
      const e2 = ie.getStorageSync(Zt("UNICLOUD_FAILOVER_CONFIG"));
      if (g(e2))
        return Gt = e2, e2;
    } catch (e2) {
    }
    return null;
  }
  function tn(e2) {
    Qt = e2;
    try {
      ie.setStorageSync(Zt("UNICLOUD_FAILOVER_LAST_REQUEST"), e2);
    } catch (e3) {
    }
  }
  function nn(e2) {
    if (null === e2 || e2 < 0)
      return false;
    if (0 === e2)
      return true;
    const t2 = function() {
      if (Qt)
        return Qt;
      try {
        const e3 = ie.getStorageSync(Zt("UNICLOUD_FAILOVER_LAST_REQUEST"));
        if (e3 && "number" == typeof e3)
          return Qt = e3, e3;
      } catch (e3) {
      }
      return 0;
    }();
    if (!t2)
      return true;
    return Date.now() - t2 >= e2;
  }
  async function sn() {
    const e2 = Xt(), { failoverEndpoint: t2 } = e2;
    if (!t2)
      return null;
    if (Yt)
      return en();
    Yt = true;
    try {
      const e3 = `${t2}/.unicloud/failover-cfg.json`, n2 = await ie.request({ url: e3, method: "GET", dataType: "json", timeout: 5e3 });
      if (tn(Date.now()), 200 !== n2.statusCode || !g(n2.data))
        return null;
      const s2 = { ...Vt, ...n2.data }, { enable: r2 = false, interval: i2 = 0, space: o2 = {} } = s2, a2 = en(), c2 = a2 && a2.enable, u2 = function(e4, t3) {
        if (!e4)
          return t3.enable;
        if (e4.enable !== t3.enable)
          return true;
        if (e4.interval !== t3.interval)
          return true;
        if (t3._lastModifiedAt && e4._lastModifiedAt !== t3._lastModifiedAt)
          return true;
        if (JSON.stringify(e4.space) !== JSON.stringify(t3.space))
          return true;
        return false;
      }(a2, s2);
      return function(e4) {
        try {
          Gt = e4, e4 && e4.enable ? ie.setStorageSync(Zt("UNICLOUD_FAILOVER_CONFIG"), e4) : (ie.removeStorageSync(Zt("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(Zt("UNICLOUD_FAILOVER_LAST_REQUEST")));
        } catch (e5) {
        }
      }({ enable: r2, interval: i2, space: o2, _lastModifiedAt: n2.data._lastModifiedAt || Date.now() }), u2 && Z(J, { isEnabled: r2, hasStatusChanged: c2 !== r2, failoverSpace: o2 }), s2;
    } catch (e3) {
      return en();
    } finally {
      Yt = false;
    }
  }
  async function rn(e2 = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: t2, localPort: n2 } = this.__dev__, s2 = Xt(), r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay", dcloud: "dcloud" }[s2.provider], i2 = s2.spaceId, o2 = `http://${t2}:${n2}/system/check-function`, a2 = `http://${t2}:${n2}/cloudfunctions/${e2.name}`;
    return new Promise((t3, n3) => {
      ie.request({ method: "POST", url: o2, data: { name: e2.name, platform: T, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: t3, message: n3 }) => {
      if (0 !== t3) {
        switch (t3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2.name}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2.name}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(n3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR":
            console.error(n3 || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
            break;
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${n3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction(e2);
      }
      return new Promise((t4, n4) => {
        const s3 = zt.call(this, { data: e2.data });
        ie.request({ method: "POST", url: a2, data: { provider: r2, platform: T, param: s3 }, timeout: e2.timeout, success: ({ statusCode: e3, data: s4 } = {}) => !e3 || e3 >= 400 ? n4(new re({ code: s4.code || "SYS_ERR", message: s4.message || "request:fail" })) : t4({ result: s4 }), fail(e3) {
          n4(new re({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const on = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var an = /[\\^$.*+?()[\]{}|]/g, cn = RegExp(an.source);
  function un(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && cn.test(s2) ? s2.replace(an, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const hn = "request", dn = "response", pn = "both", fn = { code: 2e4, message: "System error" }, gn = { code: 20101, message: "Invalid client" };
  function _n(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new re({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || fn.code, message: r2 || o2, cause: a2 });
  }
  let ts;
  function os({ secretType: e2 } = {}) {
    return e2 === hn || e2 === dn || e2 === pn;
  }
  function as({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function cs({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = he();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const l2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!l2)
      return false;
    if ((c2[l2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), _n(gn);
  }
  function us({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function ls(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = zt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], i2 = os(n3), o2 = as(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && us.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && us.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = un(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = un(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: on, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && P ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = rn), o2 = rn) : o2 = n2, o2 = o2.bind(e2), as(t3))
        a2 = n2.call(e2, t3);
      else if (os(t3)) {
        a2 = new ts({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (cs({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new ts({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => e3);
    };
  }
  ts = class {
    constructor() {
      throw _n({ message: `Platform ${T} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const hs = Symbol("CLIENT_DB_INTERNAL");
  function ds(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = hs, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function ps(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const fs = ["db.Geo", "db.command", "command.aggregate"];
  function gs(e2, t2) {
    return fs.indexOf(`${e2}.${t2}`) > -1;
  }
  function ms(e2) {
    switch (f(e2 = oe(e2))) {
      case "array":
        return e2.map((e3) => ms(e3));
      case "object":
        return e2._internalType === hs || Object.keys(e2).forEach((t2) => {
          e2[t2] = ms(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function ys(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class _s {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: ms(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = ys(e2), n2 = ys(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === ys(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = ys(e2), n2 = ys(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return ws({ $method: e2, $param: ms(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: ms(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function ws(e2, t2, n2) {
    return ds(new _s(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), gs(s2, t3) ? ws({ $method: t3 }, e3, n2) : function() {
        return ws({ $method: t3, $param: ms(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function vs({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Is(e2, t2 = {}) {
    return ds(new e2(t2), { get: (e3, t3) => gs("db", t3) ? ws({ $method: t3 }, null, e3) : function() {
      return ws({ $method: t3, $param: ms(Array.from(arguments)) }, null, e3);
    } });
  }
  class Ss extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t2 || (this.auth = ps(this._authCallBacks)), this._isJQL = t2, Object.assign(this, ps(this._dbCallBacks)), this.env = ds({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = ds({}, { get: (e3, t3) => vs({ path: ["Geo"], method: t3 }) }), this.serverDate = vs({ path: [], method: "serverDate" }), this.RegExp = vs({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
    startTransaction() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
    commit() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
    rollback() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), F(K(o2, "fail"), e3).then(() => F(K(o2, "complete"), e3)).then(() => (r2(null, e3), Z(B, { type: z, content: e3 }), Promise.reject(e3)));
      }
      const c2 = F(K(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new re({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ce({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Z(H, { token: s3, tokenExpired: c3 }));
        const l2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < l2.length; t4++) {
          const { prop: n4, tips: s4 } = l2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return F(K(o2, "success"), e4).then(() => F(K(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Z(B, { type: z, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new re({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const bs = "token无效，跳转登录页面", ks = "token过期，跳转登录页面", As = { TOKEN_INVALID_TOKEN_EXPIRED: ks, TOKEN_INVALID_INVALID_CLIENTID: bs, TOKEN_INVALID: bs, TOKEN_INVALID_WRONG_TOKEN: bs, TOKEN_INVALID_ANONYMOUS_USER: bs }, Ts = { "uni-id-token-expired": ks, "uni-id-check-token-failed": bs, "uni-id-token-not-exist": bs, "uni-id-check-device-feature-failed": bs }, Cs = { ...As, ...Ts, default: "用户未登录或登录状态过期，自动跳转登录页面" };
  function Ps(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Os(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(Ps(t2, e3.path)) : false === e3.needLogin && s2.push(Ps(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function Es(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function xs() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath;
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : "";
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function Ls() {
    return Es(xs());
  }
  function Us(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = Es(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const Rs = !!e.uniIdRouter;
  const { loginPage: Ns, routerNeedLogin: Ds, resToLogin: Ms, needLoginPage: qs, notNeedLoginPage: Fs, loginPageInTabBar: Ks } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Os(t2), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = Os(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: Us(i2, r2) };
  }();
  if (qs.indexOf(Ns) > -1)
    throw new Error(`Login page [${Ns}] should not be "needLogin", please check your pages.json`);
  function js(e2) {
    const t2 = Ls();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function $s(e2, t2) {
    return new RegExp(t2).test(e2);
  }
  function Bs({ redirect: e2 }) {
    const t2 = Es(e2), n2 = Es(Ns);
    return Ls() !== n2 && t2 !== n2;
  }
  function Ws({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !Bs({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(Ns, t2);
    Ks ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function Hs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = ae();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: Cs[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: Cs[e4] };
      }
      return n3;
    }();
    if (function(e3) {
      const t3 = Es(js(e3));
      return !(Fs.indexOf(t3) > -1) && (qs.indexOf(t3) > -1 || Ds.some((n3) => $s(t3, n3) || $s(e3, n3)));
    }(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (Q(W).length > 0)
        return setTimeout(() => {
          Z(W, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Js() {
    const e2 = xs(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = Hs({ url: e2 });
    t2 || n2 && Ws({ api: "redirectTo", redirect: e2 });
  }
  function zs() {
    Js();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Hs({ url: e3.url });
        return t3 ? e3 : s2 ? (Ws({ api: n2, redirect: js(e3.url) }), false) : e3;
      } });
    }
  }
  function Vs() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in Cs;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in As;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = Q(W);
        ne().then(() => {
          const n3 = xs();
          if (n3 && Bs({ redirect: n3 }))
            return t3.length > 0 ? Z(W, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (Ns && Ws({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Gs(e2) {
    e2.onNeedLogin = function(e3) {
      Y(W, e3);
    }, e2.offNeedLogin = function(e3) {
      X(W, e3);
    }, Rs && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = true, ne().then(() => {
      zs.call(e2);
    }), Ms && Vs.call(e2)));
  }
  function Qs(e2) {
    e2.onFailover = function(e3) {
      Y(J, e3);
    }, e2.offFailover = function(e3) {
      X(J, e3);
    }, e2.refreshFailoverConfig = function() {
      return e2.config, tn(0), sn();
    }, e2.clearFailoverConfig = function() {
      !function() {
        Gt = null, Qt = 0;
        try {
          ie.removeStorageSync(Zt("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(Zt("UNICLOUD_FAILOVER_LAST_REQUEST"));
        } catch (e3) {
        }
      }();
    };
  }
  function Ys(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        Y(B, e4);
      }, e3.offResponse = function(e4) {
        X(B, e4);
      };
    }(e2), Gs(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        Y(H, e4);
      }, e3.offRefreshToken = function(e4) {
        X(H, e4);
      };
    }(e2), Qs(e2);
  }
  const Xs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Zs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function er(e2) {
    return decodeURIComponent(function(e3) {
      if (e3 = String(e3).replace(/[\t\n\f\r ]+/g, ""), !Zs.test(e3))
        throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
      var t2;
      e3 += "==".slice(2 - (3 & e3.length));
      for (var n2, s2, r2 = "", i2 = 0; i2 < e3.length; )
        t2 = Xs.indexOf(e3.charAt(i2++)) << 18 | Xs.indexOf(e3.charAt(i2++)) << 12 | (n2 = Xs.indexOf(e3.charAt(i2++))) << 6 | (s2 = Xs.indexOf(e3.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
      return r2;
    }(e2).split("").map(function(e3) {
      return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  }
  function tr() {
    const e2 = ae().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse(er(t2[1]));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  var nr = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), sr = t(nr);
  const rr = "manual";
  function ir(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === rr)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function or(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await F(K(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await F(K(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await F(K(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await F(K(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...l2) {
          let h2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: u, data: { method: c2, params: l2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            h2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, h2 = { result: new re(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ce(y2), Z(H, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: l2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...l2);
                }
              }
            const n3 = new re({ subject: f2, code: g2, message: m2, requestId: h2.requestId });
            throw n3.detail = h2.result, Z(B, { type: G, content: n3 }), n3;
          }
          return Z(B, { type: G, content: h2.result }), h2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function ar(e2) {
    return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function cr({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    ar(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${T}\``);
  }
  async function ur(e2) {
    const t2 = ar(this);
    return t2.initPromise || (t2.initPromise = cr.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function lr(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return ur.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function hr(e2) {
    !function(e3) {
      pe = e3;
    }(e2);
  }
  function dr(e2) {
    const n2 = { getAppBaseInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(s2) {
      return new Promise((r2, i2) => {
        n2[e2]({ ...s2, success(e3) {
          r2(e3);
        }, fail(e3) {
          i2(e3);
        } });
      });
    };
  }
  class pr extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([dr("getAppBaseInfo")(), dr("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function fr(e2) {
    {
      const { osName: e3, osVersion: t3 } = he();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await Lt(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === T.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function gr(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const mr = { tcb: Et, tencent: Et, aliyun: ye, private: Nt, dcloud: Nt, alipay: Jt };
  let yr = new class {
    init(e2) {
      let t2 = {};
      const n2 = mr[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === T;
        const n3 = C;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return fr(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), gr(t2), ls(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Is(Ss, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Is(Ss, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = tr, e3.chooseAndUploadFile = sr.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return ir(e3);
        } }), e3.SSEChannel = pr, e3.initSecureNetworkByWeixin = lr(e3), e3.setCustomClientInfo = hr, e3.importObject = or(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = se(n4), l2 = i2.then(() => s2 ? Promise.resolve() : F(K(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : F(K(t3, "success"), e5).then(() => F(K(t3, "complete"), e5)).then(() => (r2 && Z(B, { type: V, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : F(K(t3, "fail"), e5).then(() => F(K(t3, "complete"), e5)).then(() => (Z(B, { type: V, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return l2;
            l2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Z(B, { type: V, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Z(B, { type: V, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = Array.isArray(P) ? P.length : 0, t2 = function() {
      const e3 = Xt(), t3 = en();
      return t3 && t3.enable && g(t3.space) ? t3.space : e3;
    }();
    if (1 === e2)
      yr = yr.init(t2), yr._isDefault = true;
    else {
      const t3 = ["database", "getCurrentUserInfo", "importObject"];
      let n2;
      n2 = e2 > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", [...["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"], ...t3].forEach((e3) => {
        yr[e3] = function() {
          if (console.error(n2), -1 === t3.indexOf(e3))
            return Promise.reject(new re({ code: "SYS_ERR", message: n2 }));
          console.error(n2);
        };
      });
    }
    if (Object.assign(yr, { get mixinDatacom() {
      return ir(yr);
    } }), Ys(yr), yr.addInterceptor = M, yr.removeInterceptor = q, yr.interceptObject = j, uni.__uniCloud = yr, "app" === T) {
      const e3 = R();
      e3.uniCloud = yr, e3.UniCloudError = re;
    }
    !function() {
      const { failoverEndpoint: e3 } = Xt();
      if (!e3)
        return;
      sn().catch((e4) => {
        console.error("请求故障切换配置失败：", e4);
      });
      const t3 = { fail() {
        const e4 = en();
        nn(e4 && e4.interval || 0) && sn().catch((e5) => {
          console.error("请求故障切换配置失败：", e5);
        });
      } };
      M("callFunction", t3), M("database", t3), M("uploadFile", t3);
    }();
  })();
  var _r = yr;
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType,
      extension: extension2
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension: extension2,
        success(res2) {
          resolve(normalizeChooseAndUploadFileRes(res2, "image"));
        },
        fail(res2) {
          reject({
            errMsg: res2.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      count,
      camera: camera2,
      compressed,
      maxDuration,
      sourceType,
      extension: extension2
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera: camera2,
        compressed,
        maxDuration,
        sourceType,
        extension: extension2,
        success(res2) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res2;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [{
              name: res2.tempFile && res2.tempFile.name || "",
              path: tempFilePath,
              size,
              type: res2.tempFile && res2.tempFile.type || "",
              width,
              height,
              duration,
              fileType: "video",
              cloudPath: ""
            }]
          }, "video"));
        },
        fail(res2) {
          reject({
            errMsg: res2.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension: extension2
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension: extension2,
        success(res2) {
          resolve(normalizeChooseAndUploadFileRes(res2));
        },
        fail(res2) {
          reject({
            errMsg: res2.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res2, fileType) {
    res2.tempFiles.forEach((item, index2) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index2 + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res2.tempFilePaths) {
      res2.tempFilePaths = res2.tempFiles.map((file2) => file2.path);
    }
    return res2;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self2 = this;
    return new Promise((resolve) => {
      while (count < max) {
        next2();
      }
      function next2() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index2 = self2.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        _r.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res2) => {
            res2.index = index2;
            onUploadProgress && onUploadProgress(res2);
          }
        }).then((res2) => {
          fileItem.url = res2.fileID;
          fileItem.index = index2;
          if (cur < len) {
            next2();
          }
        }).catch((res2) => {
          fileItem.errMsg = res2.errMsg || res2.message;
          fileItem.index = index2;
          if (cur < len) {
            next2();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res2) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res2);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res2 : chooseRes);
        }
      }
      return res2;
    }).then((res2) => {
      if (res2 === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res2;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name2) => {
    const last_len = name2.lastIndexOf(".");
    const len = name2.length;
    return {
      name: name2.substring(0, last_len),
      ext: name2.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res2, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res2.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res2.tempFiles.length) {
      uni.showToast({
        title: `当前选择了${res2.tempFiles.length}个文件 ，${res2.tempFiles.length - files.length} 个文件格式不正确`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res2) {
          resolve(res2);
        },
        fail(err2) {
          reject(err2);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      thumbTempFilePath: files.thumbTempFilePath,
      url: files.path || files.path,
      size: files.size,
      //单位是字节
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$d = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index2) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index2) {
        this.$emit("delFile", index2);
      },
      prviewImage(img, index2) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index2
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.filesList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock(
            "view",
            {
              class: "file-picker__box",
              key: index2,
              style: vue.normalizeStyle($options.boxStyle)
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "file-picker__box-content",
                  style: vue.normalizeStyle($options.borderStyle)
                },
                [
                  vue.createElementVNode("image", {
                    class: "file-image",
                    src: item.url,
                    mode: "aspectFill",
                    onClick: vue.withModifiers(($event) => $options.prviewImage(item, index2), ["stop"])
                  }, null, 8, ["src", "onClick"]),
                  $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "icon-del-box",
                    onClick: vue.withModifiers(($event) => $options.delFile(index2), ["stop"])
                  }, [
                    vue.createElementVNode("view", { class: "icon-del" }),
                    vue.createElementVNode("view", { class: "icon-del rotate" })
                  ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index2), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "file-picker__box",
          style: vue.normalizeStyle($options.boxStyle)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "file-picker__box-content is-add",
              style: vue.normalizeStyle($options.borderStyle),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
            },
            [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("view", { class: "icon-add" }),
                vue.createElementVNode("view", { class: "icon-add rotate" })
              ], true)
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-bdfc07e0"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$c = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index2) {
        this.$emit("uploadFiles", {
          item,
          index: index2
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index2) {
        this.$emit("delFile", index2);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "uni-file-picker__lists is-text-box",
          style: vue.normalizeStyle($options.borderStyle)
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.list, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-file-picker__lists-box", {
                    "files-border": index2 !== 0 && $options.styles.dividline
                  }]),
                  key: index2,
                  style: vue.normalizeStyle(index2 !== 0 && $options.styles.dividline && $options.borderLineStyle)
                },
                [
                  vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "files__name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "icon-del-box icon-files",
                      onClick: ($event) => $options.delFile(index2)
                    }, [
                      vue.createElementVNode("view", { class: "icon-del icon-files" }),
                      vue.createElementVNode("view", { class: "icon-del rotate" })
                    ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                  ]),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index2), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-a54939c6"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$b = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    options: {
      virtualHost: true
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      value: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      // 自动上传
      autoUpload: {
        type: Boolean,
        default: true
      },
      // 最大选择个数 ，h5只能限制单选或是多选
      limit: {
        type: [Number, String],
        default: 9
      },
      // 列表样式 grid | list | list-card
      mode: {
        type: String,
        default: "grid"
      },
      // 选择文件类型  image/video/all
      fileMediatype: {
        type: String,
        default: "image"
      },
      // 文件类型筛选
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      },
      sourceType: {
        type: Array,
        default() {
          return ["album", "camera"];
        }
      },
      provider: {
        type: String,
        default: ""
        // 默认上传到 unicloud 内置存储 extStorage 扩展存储
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      value: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      },
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(_r.config && _r.config.provider)) {
        this.noSpace = true;
        _r.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      /**
       * 公开用户使用，清空文件
       * @param {Object} index
       */
      clearFiles(index2) {
        if (index2 !== 0 && !index2) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index2, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 公开用户使用，继续上传
       */
      upload() {
        let files = [];
        this.files.forEach((v2, index2) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        return this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      /**
       * 选择文件
       */
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `您最多选择 ${this.limitLength} 个文件`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      /**
       * 选择文件并上传
       */
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        _r.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          sourceType: this.sourceType,
          // TODO 如果为空，video 有问题
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          //默认9
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        }).catch((err2) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:364", "选择失败", err2);
        });
      },
      /**
       * 选择文件回调
       * @param {Object} res
       */
      async chooseFileCallback(res2) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res2, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res2.tempFilePaths;
          files = res2.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push({
            ...filedata,
            file: files[i2]
          });
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res2.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res2.tempFiles = [];
        }
        res2.tempFiles.forEach((fileItem, index2) => {
          this.provider && (fileItem.provider = this.provider);
          const fileNameSplit = fileItem.name.split(".");
          const ext = fileNameSplit.pop();
          const fileName = fileNameSplit.join(".").replace(/[\s\/\?<>\\:\*\|":]/g, "_");
          fileItem.cloudPath = fileName + "_" + Date.now() + "_" + index2 + "." + ext;
        });
      },
      /**
       * 批传
       * @param {Object} e
       */
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res2) => {
          this.setProgress(res2, res2.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        }).catch((err2) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:437", err2);
        });
      },
      /**
       * 成功或失败
       */
      async setSuccessAndError(res2, fn2) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res2.length; i2++) {
          const item = res2[i2];
          const index2 = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index2 === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index2].url = item.path;
            this.files[index2].status = "error";
            this.files[index2].errMsg = item.errMsg;
            errorData.push(this.files[index2]);
            errorTempFilePath.push(this.files[index2].url);
          } else {
            this.files[index2].errMsg = "";
            this.files[index2].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index2].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index2].url = item.url;
            }
            this.files[index2].status = "success";
            this.files[index2].progress += 1;
            successData.push(this.files[index2]);
            tempFilePath.push(this.files[index2].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      /**
       * 获取进度
       * @param {Object} progressEvent
       * @param {Object} index
       * @param {Object} type
       */
      setProgress(progressEvent, index2, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index2;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      /**
       * 删除文件
       * @param {Object} index
       */
      delFile(index2) {
        this.$emit("delete", {
          index: index2,
          tempFile: this.files[index2],
          tempFilePath: this.files[index2].url
        });
        this.files.splice(index2, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 获取文件名和后缀
       * @param {Object} name
       */
      getFileExt(name2) {
        const last_len = name2.lastIndexOf(".");
        const len = name2.length;
        return {
          name: name2.substring(0, last_len),
          ext: name2.substring(last_len + 1, len)
        };
      },
      /**
       * 处理返回事件
       */
      setEmit() {
        let data2 = [];
        if (this.returnType === "object") {
          data2 = this.backObject(this.files)[0];
          this.localValue = data2 ? data2 : null;
        } else {
          data2 = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data2];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      /**
       * 处理返回参数
       * @param {Object} files
       */
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url,
            // 修改删除一个文件后不能再上传的bug, #694
            uuid: v2.uuid,
            status: v2.status,
            cloudPath: v2.cloudPath
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await _r.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      /**
       * 获取父元素实例
       */
      getForm(name2 = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name2) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode(
          "text",
          { class: "file-title" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { class: "file-count" },
          vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength),
          1
          /* TEXT */
        )
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "选择文件")
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-6223573f"], ["__file", "D:/workfile/FoodWebApp/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  const _sfc_main$a = {
    __name: "xy-popup",
    setup(__props, { expose: __expose }) {
      __expose();
      const proxy = vue.getCurrentInstance();
      const modalStore = useModalStore();
      const alertDialogRef = vue.ref(null);
      onLoad((params) => {
      });
      vue.onMounted(() => {
        if (modalStore.isShow)
          alertDialogRef.value.open();
      });
      vue.watch(() => modalStore.isShow, (value) => {
        if (value)
          alertDialogRef.value.open();
        else
          alertDialogRef.value.close();
      });
      const confirm = (val) => {
        const res2 = { confirm: true, cancel: false, value: val };
        modalStore.isShow = false;
        uni.navigateBack({
          success: function() {
            modalStore.confirm(res2);
          }
        });
      };
      const close2 = (val) => {
        const res2 = { confirm: false, cancel: true, value: val };
        modalStore.isShow = false;
        uni.navigateBack({
          success: function() {
            modalStore.confirm(res2);
          }
        });
      };
      onUnload(() => {
        modalStore.isShow = false;
      });
      const __returned__ = { proxy, modalStore, alertDialogRef, confirm, close: close2, ref: vue.ref, watch: vue.watch, onMounted: vue.onMounted, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onUnload() {
        return onUnload;
      }, get useModalStore() {
        return useModalStore;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_1$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "alertDialogRef",
          type: "dialog"
        },
        {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_popup_dialog, {
              type: $setup.modalStore.type,
              cancelText: $setup.modalStore.cancelText,
              confirmText: $setup.modalStore.confirmText,
              title: $setup.modalStore.title,
              content: $setup.modalStore.content,
              onConfirm: $setup.confirm,
              onClose: $setup.close
            }, null, 8, ["type", "cancelText", "confirmText", "title", "content"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-1e69030d"], ["__file", "D:/workfile/FoodWebApp/components/xy-popup/xy-popup.vue"]]);
  function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
  }
  String.prototype.toUtf8Bytes = function() {
    var str = this;
    var bytes = [];
    for (var i2 = 0; i2 < str.length; i2++) {
      bytes.push(...str.utf8CodeAt(i2));
      if (str.codePointAt(i2) > 65535) {
        i2++;
      }
    }
    return bytes;
  };
  String.prototype.utf8CodeAt = function(i2) {
    var str = this;
    var out = [], p2 = 0;
    var c2 = str.charCodeAt(i2);
    if (c2 < 128) {
      out[p2++] = c2;
    } else if (c2 < 2048) {
      out[p2++] = c2 >> 6 | 192;
      out[p2++] = c2 & 63 | 128;
    } else if ((c2 & 64512) == 55296 && i2 + 1 < str.length && (str.charCodeAt(i2 + 1) & 64512) == 56320) {
      c2 = 65536 + ((c2 & 1023) << 10) + (str.charCodeAt(++i2) & 1023);
      out[p2++] = c2 >> 18 | 240;
      out[p2++] = c2 >> 12 & 63 | 128;
      out[p2++] = c2 >> 6 & 63 | 128;
      out[p2++] = c2 & 63 | 128;
    } else {
      out[p2++] = c2 >> 12 | 224;
      out[p2++] = c2 >> 6 & 63 | 128;
      out[p2++] = c2 & 63 | 128;
    }
    return out;
  };
  let timeout = 12e4;
  const baseUrl = config$1.baseUrl;
  const isCloud = config$1.isCloud;
  const apiReplace = config$1.apiReplace;
  const upload = (config2) => {
    const isToken = (config2.headers || {}).isToken === false;
    config2.header = config2.header || {};
    if (getToken() && !isToken) {
      config2.header["Authorization"] = "Bearer " + getToken();
    }
    if (isCloud) {
      for (let obj of apiReplace) {
        if (obj.vueUrl === config2.url) {
          config2.url = obj.cloudUrl;
          config2.method = obj.method || config2.method;
          break;
        } else {
          let uris = obj.vueUrl.split("/");
          if (uris[uris.length - 1] == "**" && config2.url.includes(obj.vueUrl.replace("/**", ""))) {
            config2.url = config2.url.replace(obj.vueUrl.split("/**")[0], obj.cloudUrl.split("/**")[0]);
            config2.method = obj.method || config2.method;
            break;
          }
        }
      }
    }
    if (config2.params) {
      let url = config2.url + "?" + tansParams$1(config2.params);
      url = url.slice(0, -1);
      config2.url = url;
    }
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        timeout: config2.timeout || timeout,
        url: baseUrl + config2.url,
        filePath: config2.file.path,
        name: config2.name || "file",
        header: config2.header,
        formData: config2.formData,
        dataType: "json",
        success: (res2) => {
          res2.data = JSON.parse(res2.data);
          if (res2.statusCode != 200) {
            toast("后端接口连接异常");
            reject("后端接口连接异常");
            return;
          }
          const code2 = res2.data.code || 200;
          const msg = errorCode[code2] || res2.data.msg || errorCode["default"];
          if (code2 == 401) {
            uni.navigateTo({
              url: "/pages/common/popup/index",
              success: function(res3) {
                useModalStore().open({
                  title: "系统提示",
                  content: "无效的会话，或者会话已过期，请重新登录。",
                  cancelText: "取消",
                  confirmText: "确定",
                  confirm: function(res4) {
                    if (res4.confirm) {
                      uni.navigateTo({
                        url: "/pages/login"
                      });
                    } else {
                      useUserStore().logOut();
                    }
                  }
                });
              }
            });
            reject("无效的会话，或者会话已过期，请重新登录。");
          } else if (code2 === 500) {
            toast(msg);
            reject("500");
          } else if (code2 !== 200) {
            toast(msg);
            reject(code2);
          }
          resolve(res2.data);
        },
        fail: (error2) => {
          let {
            message,
            errMsg
          } = error2;
          if (message === void 0) {
            message = "未知异常";
            if (errMsg.includes("ERR_CERT_COMMON_NAME_INVALID"))
              message = "ssl证书已到期或证书与域名不匹配";
          } else if (message === "Network Error") {
            message = "后端接口连接异常";
          } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
          } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
          }
          toast(message);
          reject(error2);
        }
      });
    });
  };
  const _sfc_main$9 = {
    __name: "image-upload",
    props: {
      modelValue: [String, Object, Array],
      // 图片数量限制
      limit: {
        type: Number,
        default: 5
      },
      // 大小限制(MB)
      fileSize: {
        type: Number,
        default: 5
      },
      // 文件类型, 例如['png', 'jpg', 'jpeg']
      fileType: {
        type: Array,
        default: () => ["png", "jpg", "jpeg"]
      },
      // 是否显示提示
      isShowTip: {
        type: Boolean,
        default: true
      },
      //是否只读
      readonly: {
        type: Boolean,
        default: false
      }
    },
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const {
        proxy
      } = vue.getCurrentInstance();
      const emit = __emit;
      const number = vue.ref(0);
      const uploadList = vue.ref([]);
      const dialogImageUrl = vue.ref("");
      const dialogVisible = vue.ref(false);
      const baseUrl2 = config$1.baseUrl;
      const headers = vue.ref({
        Authorization: "Bearer " + getToken()
      });
      const fileList = vue.ref([]);
      const showTip = vue.computed(
        () => props.isShowTip && (props.fileType || props.fileSize)
      );
      vue.watch(() => props.modelValue, (val) => {
        if (val) {
          const list2 = Array.isArray(val) ? val : props.modelValue.split(",");
          fileList.value = list2.map((item) => {
            if (typeof item === "string") {
              if (item.indexOf(baseUrl2) === -1 && !isExternal(item)) {
                item = {
                  name: item.split("/")[item.split("/").length - 1],
                  extname: item.split(".")[item.split(".").length - 1],
                  url: baseUrl2 + item
                };
              } else {
                item = {
                  name: item.split("/")[item.split("/").length - 1],
                  extname: item.split(".")[item.split(".").length - 1],
                  url: item
                };
              }
            }
            return item;
          });
        } else {
          fileList.value = [];
          return [];
        }
      }, {
        deep: true,
        immediate: true
      });
      function handleBeforeUpload(data2) {
        for (let [index2, item] of data2.tempFiles.entries()) {
          let file2 = item.file;
          let isImg = false;
          if (props.fileType.length) {
            let fileExtension = "";
            if (file2.name.lastIndexOf(".") > -1) {
              fileExtension = file2.name.slice(file2.name.lastIndexOf(".") + 1);
            }
            isImg = props.fileType.some((type) => {
              if (file2.fileType.indexOf(type) > -1)
                return true;
              if (fileExtension && fileExtension.indexOf(type) > -1)
                return true;
              return false;
            });
          } else {
            isImg = file2.fileType.indexOf("image") > -1;
          }
          if (!isImg) {
            proxy.$modal.msgError(
              `文件格式不正确, 请上传${props.fileType.join("/")}图片格式文件!`
            );
            proxy.$refs["image-upload"].clearFiles(fileList.value.length + index2 - failNumber);
            failNumber++;
            continue;
          }
          number.value++;
        }
        if (number.value === 0)
          return false;
        proxy.$modal.loading("正在上传文件，请稍候...");
        proxy.$refs["image-upload"].upload();
        return true;
      }
      function handleExceed() {
        proxy.$modal.msgError(`上传文件数量不能超过 ${props.limit} 个!`);
      }
      async function handleUploadSuccess(data2) {
        let notOverNumber = data2.tempFiles.length;
        for (let [index2, item] of data2.tempFiles.entries()) {
          item = await imageCompress(item);
          upload({
            url: "/common/uploadMinio",
            name: "file",
            file: item
          }).then((res2) => {
            if (res2.code === 200) {
              if (config$1.isCloud) {
                uploadList.value.push({
                  name: res2.data.name,
                  extname: res2.data.url.split(".")[res2.data.url.split(".").length - 1],
                  url: res2.data.url
                });
              } else {
                uploadList.value.push({
                  name: res2.fileName.split("/")[res2.fileName.split("/").length - 1],
                  extname: res2.fileName.split(".")[res2.fileName.split(".").length - 1],
                  url: res2.fileName
                });
              }
            } else {
              number.value--;
              proxy.$modal.msgError(res2.msg);
            }
            notOverNumber--;
            if (notOverNumber === 0) {
              fileList.value.splice(fileList.value.length - data2.tempFiles.length, data2.tempFiles.length);
              uploadedSuccessfully();
            }
          }).catch((res2) => {
            number.value--;
            notOverNumber--;
          });
        }
      }
      function handleDelete(data2) {
        fileList.value.splice(data2.index, 1);
        emit("handleDelete", listToString(fileList.value));
      }
      function uploadedSuccessfully() {
        if (number.value > 0 && uploadList.value.length === number.value) {
          fileList.value = fileList.value.filter((f2) => f2.url !== void 0 && f2.url !== "").concat(uploadList.value);
          uploadList.value = [];
          number.value = 0;
          emit("uploadedSuccessfully", listToString(fileList.value));
        }
        proxy.$modal.closeLoading();
      }
      function imageCompress(file2) {
        return new Promise((resolve, reject) => {
          let {
            size,
            path
          } = file2;
          formatAppLog("log", "at components/image-upload/image-upload.vue:239", path);
          let type = path.split(".")[1];
          formatAppLog("log", "at components/image-upload/image-upload.vue:242", "文件大小:" + size / 1024 / 1024);
          if (size < 1024 * 1024) {
            resolve(file2);
            return false;
          }
          uni.compressImage({
            src: path,
            quality: 50,
            success: (res2) => {
              let newPath = res2.tempFilePath;
              let newName = res2.tempFilePath.split("/")[res2.tempFilePath.split("/").length - 1] + type;
              uni.getFileInfo({
                filePath: res2.tempFilePath,
                success: async (info) => {
                  let newFile = {
                    ...file2,
                    size: info.size,
                    path: newPath,
                    name: newName,
                    tempFilePath: res2.tempFilePath
                  };
                  formatAppLog("log", "at components/image-upload/image-upload.vue:264", "文件大小:" + info.size / 1024 / 1024);
                  resolve(newFile);
                }
              });
            },
            fail: (e2) => {
              formatAppLog("log", "at components/image-upload/image-upload.vue:270", e2);
            }
          });
        });
      }
      function handleUploadError(data2) {
        formatAppLog("log", "at components/image-upload/image-upload.vue:279", data2);
        handleDelete(data2);
        proxy.$modal.closeLoading();
        proxy.$modal.msgError("上传图片失败");
      }
      function listToString(list2, separator) {
        let strs = "";
        separator = separator || ",";
        for (let i2 in list2) {
          if (void 0 !== list2[i2].url && list2[i2].url.indexOf("blob:") !== 0) {
            strs += list2[i2].url.replace(baseUrl2, "") + separator;
          }
        }
        return strs != "" ? strs.substr(0, strs.length - 1) : "";
      }
      const __returned__ = { props, proxy, emit, number, uploadList, dialogImageUrl, dialogVisible, baseUrl: baseUrl2, headers, fileList, showTip, handleBeforeUpload, handleExceed, handleUploadSuccess, handleDelete, uploadedSuccessfully, imageCompress, handleUploadError, listToString, ref: vue.ref, toRefs: vue.toRefs, watch: vue.watch, getCurrentInstance: vue.getCurrentInstance, inject: vue.inject, computed: vue.computed, get onLoad() {
        return onLoad;
      }, get onUnload() {
        return onUnload;
      }, get config() {
        return config$1;
      }, get getToken() {
        return getToken;
      }, get isExternal() {
        return isExternal;
      }, get upload() {
        return upload;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0$1);
    const _component_xy_popup = resolveEasycom(vue.resolveDynamicComponent("xy-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "component-upload-image" }, [
      vue.createVNode(_component_uni_file_picker, {
        ref: "image-upload",
        modelValue: $setup.fileList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.fileList = $event),
        fileMediatype: "image",
        mode: "grid",
        "auto-upload": true,
        limit: $props.limit,
        "file-extname": $props.fileType,
        title: "最多选择" + $props.limit + "张图片",
        onSelect: $setup.handleBeforeUpload,
        onSuccess: $setup.handleUploadSuccess,
        onFail: $setup.handleUploadError,
        onDelete: $setup.handleDelete,
        sizeType: ["original"],
        readonly: $setup.props.readonly
      }, null, 8, ["modelValue", "limit", "file-extname", "title", "readonly"]),
      $setup.showTip ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        vue.createTextVNode(" 请上传 "),
        $props.fileSize ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, [
          vue.createTextVNode(" 大小不超过 "),
          vue.createElementVNode(
            "text",
            { style: { "color": "#f56c6c" } },
            vue.toDisplayString($props.fileSize) + "MB",
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $props.fileType ? (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, [
          vue.createTextVNode(" 格式为 "),
          vue.createElementVNode(
            "text",
            { style: { "color": "#f56c6c" } },
            vue.toDisplayString($props.fileType.join("/")),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        vue.createTextVNode(" 的文件 ")
      ])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_xy_popup)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "D:/workfile/FoodWebApp/components/image-upload/image-upload.vue"]]);
  const _sfc_main$8 = {
    __name: "errorreport",
    setup(__props, { expose: __expose }) {
      __expose();
      const {
        proxy
      } = vue.getCurrentInstance();
      const reason = vue.ref("");
      const imgList = vue.ref([]);
      const taskLineId = vue.ref(null);
      onLoad((options) => {
        if (options.taskLineId) {
          taskLineId.value = options.taskLineId;
        }
      });
      onShow(() => {
      });
      const handleUploaded = (fileListString) => {
        if (fileListString == "") {
          return;
        }
        imgList.value = fileListString.split(",");
      };
      const handleDelete = (fileListString) => {
        if (fileListString == "") {
          imgList.value = [];
          return;
        }
        imgList.value = fileListString.split(",");
      };
      const submit = () => {
        if (reason.value == "" || reason.value == null || reason.value == void 0 || reason.value.length == 0) {
          uni.showToast({
            title: "请输入中断原因",
            icon: "none"
          });
          return;
        }
        if (imgList.value == "" || imgList.value == null || imgList.value == void 0 || imgList.value.length == 0) {
          uni.showToast({
            title: "请至少上传一张中断照片",
            icon: "none"
          });
          return;
        }
        uni.showLoading({
          title: "正在提交...",
          mask: true
        });
        let params = {
          taskLineId: taskLineId.value,
          errorReason: reason.value,
          imgs: imgList.value
        };
        upTaskErrorInfo(params).then((res2) => {
          uni.hideLoading();
          uni.showToast({
            title: "提交成功",
            icon: "none",
            duration: 2e3,
            complete: () => {
              uni.navigateBack();
            }
          });
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: "提交失败",
            icon: "none",
            duration: 2e3
          });
        });
      };
      const __returned__ = { proxy, reason, imgList, taskLineId, handleUploaded, handleDelete, submit, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onReady() {
        return onReady;
      }, get upTaskErrorInfo() {
        return upTaskErrorInfo;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    const _component_image_upload = resolveEasycom(vue.resolveDynamicComponent("image-upload"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("div", { style: { "margin-top": "10px", "margin-bottom": "10px", "font-size": "16px", "color": "#3498db", "display": "flex", "justify-content": "left", "align-items": "center" } }, [
        vue.createVNode(_component_l_icon, {
          name: "error-triangle",
          color: "#3498db",
          size: "16px"
        }),
        vue.createTextVNode(" 中断原因 ")
      ]),
      vue.createElementVNode("view", { class: "textarea-container" }, [
        vue.withDirectives(vue.createElementVNode(
          "textarea",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.reason = $event),
            class: "textarea",
            placeholder: "请输入中断原因...",
            "auto-focus": true,
            "show-confirm-bar": false,
            maxlength: 500
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $setup.reason]
        ]),
        vue.createElementVNode(
          "view",
          { class: "word-count" },
          vue.toDisplayString($setup.reason.length) + "/500",
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("div", { style: { "margin-top": "20px", "margin-bottom": "10px", "font-size": "16px", "color": "#3498db", "display": "flex", "justify-content": "left", "align-items": "center" } }, [
        vue.createVNode(_component_l_icon, {
          name: "image-error",
          color: "#3498db",
          size: "16px"
        }),
        vue.createTextVNode(" 中断图片 ")
      ]),
      vue.createVNode(_component_image_upload, {
        modelValue: $setup.imgList,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.imgList = $event),
        isShowTip: false,
        limit: 9,
        onUploadedSuccessfully: $setup.handleUploaded,
        onHandleDelete: $setup.handleDelete
      }, null, 8, ["modelValue"]),
      vue.createElementVNode("view", { class: "submit-container" }, [
        vue.createElementVNode("button", {
          class: "submit-btn",
          onClick: $setup.submit
        }, " 提交 ")
      ])
    ]);
  }
  const PagesTaskErrorreportErrorreport = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-4d8669fe"], ["__file", "D:/workfile/FoodWebApp/pages/task/errorreport/errorreport.vue"]]);
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    const _component_xy_popup = resolveEasycom(vue.resolveDynamicComponent("xy-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_xy_popup)
    ]);
  }
  const PagesCommonPopupIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/workfile/FoodWebApp/pages/common/popup/index.vue"]]);
  function listAllScale(query) {
    return request({
      url: "/dv/scale/listAll",
      method: "get",
      params: query
    });
  }
  const _sfc_main$6 = {
    __name: "scale_picker",
    setup(__props, { expose: __expose }) {
      const taskList = vue.ref([]);
      const loadTasks = () => {
        uni.showLoading({
          title: "加载中..."
        });
        listAllScale().then((res2) => {
          formatAppLog("log", "at components/scale_picker/scale_picker.vue:52", res2);
          taskList.value = res2.data;
          uni.hideLoading();
        }).catch((e2) => {
          formatAppLog("error", "at components/scale_picker/scale_picker.vue:56", "加载任务列表失败", err);
          uni.showToast({
            icon: "none",
            title: "加载失败",
            duration: 2e3,
            complete: () => {
              uni.hideLoading();
            }
          });
        });
      };
      const onSelect = (line) => {
        formatAppLog("log", "at components/scale_picker/scale_picker.vue:70", line);
        uni.$emit("onScaleSelect", line);
        close2();
      };
      const onMaskClick = () => {
        close2();
      };
      const popup2 = vue.ref(null);
      const open2 = () => {
        loadTasks();
        popup2.value.open();
      };
      const close2 = () => popup2.value.close();
      const cancelClick = () => {
        close2();
      };
      __expose({
        open: open2,
        close: close2
      });
      const __returned__ = { taskList, loadTasks, onSelect, onMaskClick, popup: popup2, open: open2, close: close2, cancelClick, ref: vue.ref, watch: vue.watch, get listAllScale() {
        return listAllScale;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup",
          "background-color": "#fff",
          type: "bottom",
          borderRadius: "15px  15px  16px  16px"
        },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: "popup-container",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "popup-header" }, [
                vue.createElementVNode("text", { class: "title" }, "选择电子秤"),
                vue.createElementVNode("text", {
                  class: "close",
                  onClick: $setup.close
                }, "✕")
              ]),
              vue.createElementVNode("scroll-view", {
                class: "list-container",
                "scroll-y": ""
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.taskList, (line, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index2,
                      class: "task-item",
                      onClick: ($event) => $setup.onSelect(line)
                    }, [
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "电子秤编码"),
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(line.machineryCode || ""),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "custom-list-item" }, [
                        vue.createElementVNode("view", { class: "left-content" }, "电子秤名称"),
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(line.machineryName || ""),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $setup.taskList.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "empty-tip"
                }, " 暂无任务数据 ")) : vue.createCommentVNode("v-if", true)
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const ScalePicker = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-6417e10d"], ["__file", "D:/workfile/FoodWebApp/components/scale_picker/scale_picker.vue"]]);
  const _sfc_main$5 = {
    __name: "recipe_line",
    setup(__props, { expose: __expose }) {
      __expose();
      const taskId = vue.ref(null);
      const reactorCode = vue.ref(null);
      const lineList = vue.ref([]);
      const scalePicker = vue.ref(null);
      const clickSgowMenu = (line) => {
        let menus = [];
        if (line.status == "1") {
          menus = ["开始投料", "中断上报"];
        } else if (line.status == "2" || line.status == "3") {
          menus = ["继续投料", "中断上报", "投料完成"];
        } else if (line.status == "4") {
          uni.showToast({
            title: "已完成此投料任务,如有其他未完成的投料任务,请继续投料",
            icon: "none"
          });
          return;
        } else if (line.status == "5") {
          uni.showToast({
            title: "此投料任务已超重,无法继续投料",
            icon: "none"
          });
          return;
        } else {
          return;
        }
        uni.showActionSheet({
          title: "请选操作类型",
          itemList: menus,
          success: function(e2) {
            formatAppLog("log", "at pages/produce/recipe_line/recipe_line.vue:96", e2);
            if (e2.tapIndex == 0) {
              startWork(line);
            } else if (e2.tapIndex == 1) {
              errorWork(line);
            } else if (e2.tapIndex == 2) {
              finishWork(line);
            }
          }
        });
      };
      const startWork = (line) => {
        uni.$off("onScaleSelect");
        scalePicker.value.open();
        uni.$on("onScaleSelect", (scale) => {
          formatAppLog("log", "at pages/produce/recipe_line/recipe_line.vue:113", "1111");
          formatAppLog("log", "at pages/produce/recipe_line/recipe_line.vue:114", scale);
          uni.navigateTo({
            url: "/pages/produce/scan_item/scan_item?taskId=" + taskId.value + "&taskLineId=" + line.taskLineId + "&taskCode=" + line.taskCode + "&itemCode=" + line.itemCode + "&scaleCode=" + scale.machineryCode
          });
        });
      };
      const errorWork = (line) => {
        uni.navigateTo({
          url: "/pages/task/errorreport/errorreport?taskId=" + taskId.value + "&taskLineId=" + line.taskLineId
        });
      };
      const finishWork = (line) => {
        uni.$off("onScaleSelect");
        scalePicker.value.open();
        formatAppLog("log", "at pages/produce/recipe_line/recipe_line.vue:133", "eee");
        uni.$on("onScaleSelect", (scale) => {
          formatAppLog("log", "at pages/produce/recipe_line/recipe_line.vue:135", scale);
          if (scale != null) {
            var data2 = {
              taskLineId: line.taskLineId,
              status: 4,
              scaleCode: scale.machineryCode,
              realAmount: 0
            };
            uni.showLoading({
              title: "正在提交...",
              mask: true
            });
            lineChange(data2).then((res2) => {
              uni.hideLoading();
              loadTaskLine();
            });
          }
        });
      };
      onLoad((options) => {
        if (options.taskId) {
          taskId.value = options.taskId;
        }
        if (options.reactorCode) {
          reactorCode.value = options.reactorCode;
        }
      });
      const screeWith = vue.ref(null);
      onShow(() => {
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        loadTaskLine();
      });
      const loadTaskLine = () => {
        return new Promise((resolve, reject) => {
          uni.showLoading({
            title: "加载中..",
            mask: true
          });
          listAllLineForTask(taskId.value).then((res2) => {
            formatAppLog("log", "at pages/produce/recipe_line/recipe_line.vue:181", res2);
            lineList.value = res2.data;
            uni.hideLoading();
            resolve(res2);
          }).catch((e2) => {
            uni.hideLoading();
            reject(e2);
          });
        });
      };
      onPullDownRefresh(() => {
        loadTaskLine();
        setTimeout(function() {
          uni.stopPullDownRefresh();
        }, 1e3);
      });
      const __returned__ = { taskId, reactorCode, lineList, scalePicker, clickSgowMenu, startWork, errorWork, finishWork, screeWith, loadTaskLine, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onPullDownRefresh() {
        return onPullDownRefresh;
      }, get listAllLineForTask() {
        return listAllLineForTask;
      }, get lineChange() {
        return lineChange;
      }, ScalePicker };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      $setup.lineList != null && $setup.lineList != void 0 && $setup.lineList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($setup.lineList, (line, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "task-item",
            key: index2
          }, [
            vue.createElementVNode("view", {
              class: "task-info",
              onClick: ($event) => $setup.clickSgowMenu(line)
            }, [
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "投料顺序"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  "第" + vue.toDisplayString(index2 + 1) + "步",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "物料编码"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.itemCode || ""),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "物料名称"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.itemName || ""),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "规格型号"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.specification || ""),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "待生产"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.waitAmount || "") + "Kg",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "实际投料"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.realAmount || "") + "Kg",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "配料状态"),
                line.status == "1" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "name"
                }, "未投料")) : line.status == "2" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "name",
                  style: { "color": "seagreen" }
                }, "投料中")) : line.status == "3" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "name",
                  style: { "color": "coral" }
                }, "暂停(换桶)")) : line.status == "4" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 3,
                  class: "name",
                  style: { "color": "green" }
                }, "已完成")) : line.status == "5" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 4,
                  class: "name",
                  style: { "color": "red" }
                }, "超重")) : vue.createCommentVNode("v-if", true)
              ])
            ], 8, ["onClick"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
      }, [
        vue.createElementVNode("image", {
          src: _imports_0,
          mode: "aspectFit",
          style: { "width": "150px", "height": "150px" }
        }),
        vue.createElementVNode("view", { style: { "font-size": "16px", "color": "#808080" } }, "-暂无数据-")
      ])),
      vue.createVNode(
        $setup["ScalePicker"],
        { ref: "scalePicker" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesProduceRecipeLineRecipeLine = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-6402852c"], ["__file", "D:/workfile/FoodWebApp/pages/produce/recipe_line/recipe_line.vue"]]);
  const _sfc_main$4 = {
    __name: "scan_item",
    setup(__props, { expose: __expose }) {
      __expose();
      const popCode = vue.ref(null);
      const optionsParam = vue.ref({});
      const itemCode = vue.ref("");
      onLoad((options) => {
        optionsParam.value.taskId = options.taskId;
        optionsParam.value.taskLineId = options.taskLineId;
        optionsParam.value.taskCode = options.taskCode;
        optionsParam.value.itemCode = options.itemCode;
        optionsParam.value.scaleCode = options.scaleCode;
        formatAppLog("log", "at pages/produce/scan_item/scan_item.vue:61", options);
      });
      const screeWith = vue.ref(null);
      onShow(() => {
        if (optionsParam.value.taskId == null || optionsParam.value.taskId == "" || optionsParam.value.taskId == void 0 || (optionsParam.value.taskLineId == null || optionsParam.value.taskLineId == "" || optionsParam.value.taskLineId == void 0) || (optionsParam.value.taskCode == null || optionsParam.value.taskCode == "" || optionsParam.value.taskCode == void 0) || (optionsParam.value.itemCode == null || optionsParam.value.itemCode == "" || optionsParam.value.itemCode == void 0) || (optionsParam.value.scaleCode == null || optionsParam.value.scaleCode == "" || optionsParam.value.scaleCode == void 0)) {
          uni.showToast({
            title: "请选择任务",
            icon: "none",
            duration: 2e3,
            complete: () => {
              uni.navigateBack();
            }
          });
        }
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
      });
      const scanCode = () => {
        uni.scanCode({
          onlyFromCamera: false,
          // 可选：true 表示只从相机扫码，false 可从相册选择
          scanType: ["qrCode"],
          // 只识别二维码（可选：'barCode', 'datamatrix' 等）
          autoZoom: false,
          success: (res2) => {
            let code2 = res2.result;
            formatAppLog("log", "at pages/produce/scan_item/scan_item.vue:94", res2.result);
            if (code2 != null && code2 != void 0 && code2 != "") {
              if (code2.startsWith("ITEM-")) {
                code2 = code2.split("-")[1];
                if (code2 == optionsParam.value.itemCode) {
                  uni.redirectTo({
                    url: "/pages/produce/start_produce/start_produce?taskId=" + optionsParam.value.taskId + "&taskLineId=" + optionsParam.value.taskLineId + "&taskCode=" + optionsParam.value.taskCode + "&itemCode=" + optionsParam.value.itemCode + "&scaleCode=" + optionsParam.value.scaleCode
                  });
                } else {
                  uni.showToast({
                    title: "请扫描指定的物料",
                    icon: "none"
                  });
                }
              } else {
                uni.showToast({
                  title: "请扫描指定的物料二维码",
                  icon: "none"
                });
              }
            } else {
              uni.showToast({
                title: "请扫描正确的物料",
                icon: "none"
              });
            }
          },
          fail: (err2) => {
            formatAppLog("error", "at pages/produce/scan_item/scan_item.vue:125", "扫码失败：", err2);
            uni.showToast({
              title: "扫码失败",
              icon: "none"
            });
          }
        });
      };
      const showInputDialog = () => {
        itemCode.value = "";
        popCode.value.open();
      };
      const dialogInputConfirm = (code2) => {
        if (code2 != null && code2 != void 0 && code2 != "") {
          if (code2 == optionsParam.value.itemCode) {
            uni.redirectTo({
              url: "/pages/produce/start_produce/start_produce?taskId=" + optionsParam.value.taskId + "&taskLineId=" + optionsParam.value.taskLineId + "&taskCode=" + optionsParam.value.taskCode + "&itemCode=" + optionsParam.value.itemCode + "&scaleCode=" + optionsParam.value.scaleCode
            });
          } else {
            uni.showToast({
              title: "请输入指定的物料",
              icon: "none"
            });
          }
        } else {
          uni.showToast({
            title: "请输入正确的物料",
            icon: "none"
          });
        }
      };
      const __returned__ = { popCode, optionsParam, itemCode, screeWith, scanCode, showInputDialog, dialogInputConfirm, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_1$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "scan-container" }, [
        vue.createElementVNode("div", { class: "scan-header" }, [
          vue.createElementVNode("div", { class: "scan-title" }, "扫码添加物料"),
          vue.createElementVNode("div", { class: "scan-subtitle" }, " 请扫描物料二维码开始配料任务。系统将自动识别物料信息， 并引导您完成配料过程。 ")
        ]),
        vue.createElementVNode("div", { class: "scan-box" }, [
          vue.createElementVNode("div", { class: "scan-frame" }, [
            vue.createElementVNode("div", { class: "scan-line" }),
            vue.createVNode(_component_l_icon, {
              name: "qrcode",
              color: "#ffffff",
              size: "100px"
            })
          ]),
          vue.createElementVNode("div", { class: "scan-tip" }, " 将二维码放入框内，系统将自动识别。如遇扫码问题， 可选择手动输入物料编号。 "),
          vue.createElementVNode("div", { class: "scan-actions" }, [
            vue.createElementVNode("button", {
              class: "btn scan-btn",
              onClick: $setup.scanCode
            }, [
              vue.createVNode(_component_l_icon, {
                name: "camera",
                color: "#000000",
                size: "16px"
              }),
              vue.createElementVNode("div", { style: { "width": "8px" } }),
              vue.createTextVNode(" 开始扫描 ")
            ]),
            vue.createElementVNode("button", {
              class: "btn manual-btn",
              onClick: $setup.showInputDialog
            }, [
              vue.createVNode(_component_l_icon, {
                name: "keyboard",
                color: "#000000",
                size: "16px"
              }),
              vue.createElementVNode("div", { style: { "width": "8px" } }),
              vue.createTextVNode("手动输入 ")
            ])
          ])
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popCode",
            type: "dialog"
          },
          {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_popup_dialog, {
                ref: "inputClose",
                mode: "input",
                title: "物料编码",
                value: $setup.itemCode,
                placeholder: "请输入物料编码",
                onConfirm: $setup.dialogInputConfirm
              }, null, 8, ["value"])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ])
    ]);
  }
  const PagesProduceScanItemScanItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-936294e8"], ["__file", "D:/workfile/FoodWebApp/pages/produce/scan_item/scan_item.vue"]]);
  const _sfc_main$3 = {
    __name: "start_produce",
    setup(__props, { expose: __expose }) {
      __expose();
      const {
        proxy
      } = vue.getCurrentInstance();
      const userStore = useUserStore();
      const currentWeight = vue.ref(0);
      const deviation = vue.ref(0);
      const isOverWeight = vue.ref(false);
      const wsStatus = vue.ref(false);
      const dzcStatus = vue.ref(false);
      userStore.getInfo();
      const optionsParam = vue.ref({});
      onLoad((options) => {
        optionsParam.value.taskId = options.taskId;
        optionsParam.value.taskLineId = options.taskLineId;
        optionsParam.value.taskCode = options.taskCode;
        optionsParam.value.itemCode = options.itemCode;
        optionsParam.value.scaleCode = options.scaleCode;
        optionsParam.value.specification = options.specification;
        formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:137", options);
      });
      const ws2 = vue.ref(null);
      const heartbeatInterval = vue.ref(null);
      const WS_URL = vue.ref("");
      const initWebSocket = () => {
        if (ws2.value) {
          return;
        }
        formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:149", WS_URL.value);
        ws2.value = uni.connectSocket({
          url: WS_URL.value,
          method: "GET",
          success: () => {
            formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:154", "建立成功SOCKET");
          },
          fail: (e2) => {
            formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:157", e2);
            uni.showToast({
              title: "获取电子秤数据失败,请退出页面后重试",
              icon: "none"
            });
          }
        });
        ws2.value.onOpen((res2) => {
          formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:165", "✅ WebSocket1 已连接");
          startHeartbeat();
          wsStatus.value = true;
        });
        ws2.value.onMessage((event) => {
          formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:170", "📩 收到消息:", event.data);
          try {
            const info = JSON.parse(event.data);
            if (info.code != 200) {
              uni.showToast({
                title: info.msg,
                icon: "none",
                duration: 3e3
              });
              return;
            }
            wsStatus.value = true;
            if (info.hasOwnProperty("data")) {
              if (info.data.weight != void 0 && info.data.weight != null) {
                try {
                  currentWeight.value = info.data.weight;
                  const target = (Math.abs(currentWeight.value) || 0) + Number(taskDetails.value.line.realAmount || 0) - Number(taskDetails.value.line.waitAmount || 0);
                  deviation.value = target.toFixed(2);
                  isOverWeight.value = target - Number(taskDetails.value.line.tolerance || 0) > 0 ? true : false;
                } catch (e2) {
                  formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:195", e2);
                }
              }
              if (info.data.online != void 0 && info.data.online != null) {
                try {
                  if (info.data.online == "online") {
                    dzcStatus.value = true;
                  } else {
                    dzcStatus.value = false;
                  }
                } catch (e2) {
                  dzcStatus.value = false;
                  formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:207", e2);
                }
              }
            }
          } catch (e2) {
            formatAppLog("warn", "at pages/produce/start_produce/start_produce.vue:214", "消息解析失败:", event.data);
          }
        });
        ws2.value.onError((error2) => {
          formatAppLog("error", "at pages/produce/start_produce/start_produce.vue:219", "❌ WebSocket 错误:", error2);
          uni.showToast({
            title: "连接电子秤失败，请检查网络或重试",
            icon: "none"
          });
          ws2.value = null;
          wsStatus.value = false;
          dzcStatus.value = false;
        });
        ws2.value.onClose((res2) => {
          formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:230", "🔌 WebSocket 已关闭:", res2);
          stopHeartbeat();
          ws2.value = null;
          wsStatus.value = false;
          dzcStatus.value = false;
        });
      };
      const startHeartbeat = () => {
        stopHeartbeat();
        heartbeatInterval.value = setInterval(() => {
          if (ws2.value) {
            ws2.value.send({
              data: "-heartbeat-"
            });
            formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:246", "💓 发送心跳: -heartbeat-");
          } else {
            formatAppLog("warn", "at pages/produce/start_produce/start_produce.vue:248", "WebSocket 不可用，连接可能已断开");
          }
        }, 3e4);
      };
      const stopHeartbeat = () => {
        if (heartbeatInterval.value) {
          clearInterval(heartbeatInterval.value);
          heartbeatInterval.value = null;
        }
      };
      const taskDetails = vue.ref({
        task: {},
        line: {},
        total: null,
        index: null,
        user: null
      });
      const screeWith = vue.ref(null);
      const globalConfig = vue.ref(getApp().globalData.config);
      onShow(() => {
        if (optionsParam.value.taskId == null || optionsParam.value.taskId == "" || optionsParam.value.taskId == void 0 || (optionsParam.value.taskLineId == null || optionsParam.value.taskLineId == "" || optionsParam.value.taskLineId == void 0) || (optionsParam.value.taskCode == null || optionsParam.value.taskCode == "" || optionsParam.value.taskCode == void 0) || (optionsParam.value.itemCode == null || optionsParam.value.itemCode == "" || optionsParam.value.itemCode == void 0) || (optionsParam.value.scaleCode == null || optionsParam.value.scaleCode == "" || optionsParam.value.scaleCode == void 0)) {
          uni.showToast({
            title: "请选择任务",
            icon: "none",
            duration: 2e3,
            complete: () => {
              uni.navigateBack();
            }
          });
        }
        const systemInfo2 = uni.getSystemInfoSync();
        screeWith.value = systemInfo2.windowWidth;
        loadDetails();
        getScaleInfo();
      });
      const getScaleInfo = () => {
        getScaleByCode(optionsParam.value.scaleCode).then((res2) => {
          if (res2.data.status == "online") {
            dzcStatus.value = true;
          } else {
            dzcStatus.value = false;
          }
        }).catch((e2) => {
          dzcStatus.value = false;
        });
      };
      onUnload(() => {
        formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:311", "页面销毁111");
        if (heartbeatInterval.value) {
          clearInterval(heartbeatInterval.value);
          heartbeatInterval.value = null;
        }
        if (ws2.value) {
          ws2.value.close(1e3, "页面隐藏，主动关闭");
          ws2.value = null;
        }
      });
      onHide(() => {
        formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:322", "页面销毁111");
      });
      const loadDetails = () => {
        uni.showLoading({
          title: "正在加载...",
          mask: true
        });
        lineDetails(optionsParam.value.taskCode, optionsParam.value.taskLineId).then((res2) => {
          taskDetails.value = res2.data;
          formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:332", "111");
          formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:333", res2);
          uni.hideLoading();
          try {
            const target = Number(taskDetails.value.line.realAmount || 0) - Number(taskDetails.value.line.waitAmount || 0);
            deviation.value = target.toFixed(2);
            isOverWeight.value = target - Number(taskDetails.value.line.tolerance || 0) > 0 ? true : false;
          } catch (e2) {
            formatAppLog("log", "at pages/produce/start_produce/start_produce.vue:341", e2);
          }
          WS_URL.value = globalConfig.value.wsUrl + "?scaleCode=" + optionsParam.value.scaleCode + "&taskCode=" + optionsParam.value.taskCode + "&itemCode=" + optionsParam.value.itemCode + "&recipeLineId=" + taskDetails.value.line.recipeLineId + "&userName=" + taskDetails.value.user;
          initWebSocket();
        }).catch((e2) => {
          uni.hideLoading();
        });
      };
      const uploadError = () => {
        uni.navigateTo({
          url: "/pages/task/errorreport/errorreport?taskId=" + optionsParam.value.taskId + "&taskLineId=" + optionsParam.value.taskLineId
        });
      };
      const successLine = (status) => {
        uni.showLoading({
          title: "正在处理...",
          mask: true
        });
        var data2 = {
          taskLineId: optionsParam.value.taskLineId,
          status,
          scaleCode: optionsParam.value.scaleCode,
          realAmount: currentWeight.value,
          specification: optionsParam.value.specification
        };
        lineChange(data2).then((res2) => {
          uni.hideLoading();
          uni.navigateBack();
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: "处理失败:" + e2,
            icon: "none"
          });
        });
      };
      const __returned__ = { proxy, userStore, currentWeight, deviation, isOverWeight, wsStatus, dzcStatus, optionsParam, ws: ws2, heartbeatInterval, WS_URL, initWebSocket, startHeartbeat, stopHeartbeat, taskDetails, screeWith, globalConfig, getScaleInfo, loadDetails, uploadError, successLine, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onHide() {
        return onHide;
      }, get onUnload() {
        return onUnload;
      }, get useUserStore() {
        return useUserStore;
      }, get lineDetails() {
        return lineDetails;
      }, get lineChange() {
        return lineChange;
      }, get getScaleByCode() {
        return getScaleByCode;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_l_icon = resolveEasycom(vue.resolveDynamicComponent("l-icon"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { style: { "height": "40px", "background-color": "#fff", "display": "flex", "width": "100%" } }, [
          vue.createElementVNode("view", { style: { "width": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "font-size": "14px", "color": "#1a5276", "flex": "1" } }, [
            $setup.wsStatus ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "推送:正常")) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              style: { "color": "#e74c3c", "display": "flex", "align-items": "center", "font-size": "14px" }
            }, [
              vue.createElementVNode("text", null, "推送:断开"),
              vue.createElementVNode("view", {
                onClick: $setup.initWebSocket,
                style: { "padding": "5px 8px", "border-radius": "15px", "color": "#fff", "background-color": "#1a5276", "margin-left": "10px", "font-size": "12px", "display": "flex", "align-items": "center" }
              }, " 重连 ")
            ]))
          ]),
          vue.createElementVNode("view", { style: { "width": "100%", "display": "flex", "justify-content": "center", "align-items": "center", "font-size": "14px", "color": "#1a5276", "flex": "1" } }, [
            $setup.dzcStatus ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "电子秤:正常")) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              style: { "color": "#e74c3c" }
            }, "电子秤:断开"))
          ])
        ]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "weighing-container" }, [
            vue.createElementVNode("div", { class: "weighing-header" }, [
              vue.createElementVNode(
                "div",
                { class: "weighing-title" },
                "配料任务:" + vue.toDisplayString($setup.taskDetails.task.taskName || ""),
                1
                /* TEXT */
              ),
              vue.createElementVNode("div", { style: { "height": "3px" } }),
              vue.createElementVNode("div", { class: "weighing-subtitle" }, [
                vue.createElementVNode("div", { style: { "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode(
                    "span",
                    { style: { "font-weight": "500", "color": "#1a5276" } },
                    vue.toDisplayString($setup.taskDetails.task.reactorName || ""),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "span",
                    null,
                    vue.toDisplayString($setup.taskDetails.task.reactorCode || ""),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createVNode(_component_l_icon, {
                  name: "chevron-right-double",
                  color: "#7f8c8d",
                  size: "15px"
                }),
                vue.createElementVNode("div", { style: { "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode("span", { style: { "font-weight": "500", "color": "#1a5276" } }, "配方"),
                  vue.createElementVNode(
                    "span",
                    null,
                    vue.toDisplayString($setup.taskDetails.task.recipeName || ""),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createVNode(_component_l_icon, {
                  name: "chevron-right-double",
                  color: "#7f8c8d",
                  size: "15px"
                }),
                vue.createElementVNode("div", { style: { "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode("span", { style: { "font-weight": "500", "color": "#1a5276" } }, "操作员"),
                  vue.createElementVNode(
                    "span",
                    null,
                    vue.toDisplayString($setup.userStore.nick || ""),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            vue.createElementVNode("div", { class: "progress-container" }, [
              vue.createElementVNode("div", { class: "progress-header" }, [
                vue.createElementVNode("span", null, "当前进度"),
                vue.createElementVNode(
                  "span",
                  null,
                  "步骤 " + vue.toDisplayString($setup.taskDetails.index || "") + "/" + vue.toDisplayString($setup.taskDetails.total || ""),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("div", { class: "progress-bar" }, [
                vue.createElementVNode(
                  "div",
                  {
                    class: "progress-fill",
                    style: vue.normalizeStyle({ width: 100 * Number($setup.taskDetails.line.realAmount || 0) / Number($setup.taskDetails.line.waitAmount || 1) + "%" })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createElementVNode(
                "div",
                { class: "progress-text" },
                vue.toDisplayString($setup.taskDetails.line.itemName) + " (" + vue.toDisplayString($setup.taskDetails.line.itemCode) + "/" + vue.toDisplayString($setup.optionsParam.specification) + ") ",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("div", { class: "material-card" }, [
              vue.createElementVNode("div", { class: "material-header" }, [
                vue.createElementVNode(
                  "div",
                  { class: "material-name" },
                  vue.toDisplayString($setup.taskDetails.line.itemName),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("div", { class: "material-code" }, [
                  vue.createVNode(_component_l_icon, {
                    name: "barcode",
                    color: "#7f8c8d",
                    size: "15px"
                  }),
                  vue.createTextVNode(
                    " " + vue.toDisplayString($setup.taskDetails.line.itemCode),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("div", { class: "material-content" }, [
                vue.createElementVNode("div", { class: "material-item" }, [
                  vue.createElementVNode("div", { class: "material-label" }, "目标重量"),
                  vue.createElementVNode("div", { class: "material-value target-value" }, [
                    vue.createTextVNode(
                      vue.toDisplayString($setup.taskDetails.line.waitAmount || "--") + " ",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("br"),
                    vue.createTextVNode("Kg")
                  ])
                ]),
                vue.createElementVNode("div", { class: "material-item" }, [
                  vue.createElementVNode("div", { class: "material-label" }, "累计重量"),
                  vue.createElementVNode("div", { class: "material-value actual-value" }, [
                    vue.createTextVNode(
                      vue.toDisplayString((Number($setup.taskDetails.line.realAmount || 0) + (Math.abs($setup.currentWeight) || 0)).toFixed(2) || "0") + " ",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("br"),
                    vue.createTextVNode("Kg")
                  ])
                ]),
                vue.createElementVNode("div", { class: "material-item" }, [
                  vue.createElementVNode("div", { class: "material-label" }, "重量偏差"),
                  vue.createElementVNode("div", { class: "material-value deviation-value" }, [
                    vue.createTextVNode(
                      vue.toDisplayString($setup.deviation),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("br"),
                    vue.createTextVNode("Kg")
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", { class: "weight-display" }, [
              vue.createElementVNode(
                "div",
                { class: "weight-value" },
                vue.toDisplayString($setup.currentWeight.toFixed(2)),
                1
                /* TEXT */
              ),
              vue.createElementVNode("div", { class: "weight-unit" }, "公斤 (Kg)"),
              $setup.isOverWeight == true ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "weight-status status-error"
              }, "已超重")) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          $setup.taskDetails.task.status != "FINISHED" && $setup.taskDetails.task.status != "END" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "controls-grid"
          }, [
            vue.createElementVNode("button", {
              class: "btn btn-lg btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.successLine(3))
            }, [
              vue.createVNode(_component_l_icon, {
                name: "pause-circle-stroke",
                color: "#fff",
                size: "15px"
              }),
              vue.createTextVNode(" 暂停/换桶 ")
            ]),
            vue.createElementVNode("button", {
              class: "btn btn-lg btn-success",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.successLine(4))
            }, [
              vue.createVNode(_component_l_icon, {
                name: "check-circle",
                color: "#fff",
                size: "15px"
              }),
              vue.createTextVNode(" 确认加入 ")
            ]),
            vue.createElementVNode("button", {
              class: "btn btn-lg btn-warning",
              onClick: $setup.uploadError
            }, [
              vue.createVNode(_component_l_icon, {
                name: "error-circle",
                color: "#fff",
                size: "15px"
              }),
              vue.createTextVNode(" 异常上报 ")
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesProduceStartProduceStartProduce = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-66c6341e"], ["__file", "D:/workfile/FoodWebApp/pages/produce/start_produce/start_produce.vue"]]);
  const _sfc_main$2 = {
    __name: "batch_record",
    setup(__props, { expose: __expose }) {
      __expose();
      const taskLineId = vue.ref(null);
      onLoad((options) => {
        taskLineId.value = options.taskLineId;
      });
      const recordList = vue.ref([]);
      onReady(() => {
      });
      onShow(() => {
        loadMyTask();
      });
      const loadMyTask = () => {
        uni.showLoading({
          title: "加载中..",
          mask: true
        });
        getBatchCodeList(taskLineId.value).then((res2) => {
          recordList.value = res2.data;
          uni.hideLoading();
        }).catch((e2) => {
          uni.hideLoading();
          uni.showToast({
            title: e2,
            icon: "none"
          });
        });
      };
      const __returned__ = { taskLineId, recordList, loadMyTask, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onReady() {
        return onReady;
      }, get getBatchCodeList() {
        return getBatchCodeList;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ScalePicker = vue.resolveComponent("ScalePicker");
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      $setup.recordList != null && $setup.recordList != void 0 && $setup.recordList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($setup.recordList, (line, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "task-item",
            key: index2
          }, [
            vue.createElementVNode("view", { class: "task-info" }, [
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "批次"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.specification || ""),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "本次投料"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.currentAmount || 0) + "Kg",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "custom-list-item" }, [
                vue.createElementVNode("view", { class: "left-content" }, "投料时间"),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(line.createTime || ""),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: { "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" }
      }, [
        vue.createElementVNode("image", {
          src: _imports_0,
          mode: "aspectFit",
          style: { "width": "150px", "height": "150px" }
        }),
        vue.createElementVNode("view", { style: { "font-size": "16px", "color": "#808080" } }, "-暂无数据-")
      ])),
      vue.createVNode(
        _component_ScalePicker,
        { ref: "scalePicker" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesTaskBatchRecordBatchRecord = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-88c17b31"], ["__file", "D:/workfile/FoodWebApp/pages/task/batch_record/batch_record.vue"]]);
  const navHeight = 250;
  const _sfc_main$1 = {
    __name: "register",
    setup(__props, { expose: __expose }) {
      __expose();
      const userStore = useUserStore();
      const {
        proxy
      } = vue.getCurrentInstance();
      const statusBarHeight = uni.getSystemInfoSync().statusBarHeight || 0;
      const codeUrl = vue.ref("");
      const captchaEnabled = vue.ref(true);
      const register2 = vue.ref(true);
      const globalConfig = vue.ref(getApp().globalData.config);
      const loginForm = vue.ref({
        username: "",
        password: "",
        code: "",
        uuid: ""
      });
      const needLogin = vue.ref(false);
      onShow(() => {
        if (getToken() != "") {
          needLogin.value = false;
        } else {
          needLogin.value = true;
        }
      });
      onLoad(() => {
        if (getToken() != "") {
          getInfo().then((res2) => {
            uni.reLaunch({
              url: "/pages/home/index"
            });
          }).catch((err2) => {
            userStore.cleanUserInfo();
            uni.clearStorageSync();
            needLogin.value = true;
          });
        } else {
          needLogin.value = true;
        }
      });
      const handleUserRegister = () => {
      };
      const handlePrivacy = () => {
        let site = globalConfig.value.appInfo.agreements[0];
        proxy.$tab.navigateTo(`/pages/common/webview/index?title=${site.title}&url=${site.url}`);
      };
      const handleUserAgrement = () => {
        let site = globalConfig.value.appInfo.agreements[1];
        proxy.$tab.navigateTo(`/pages/common/webview/index?title=${site.title}&url=${site.url}`);
      };
      const getCode = () => {
        getCodeImg().then((res2) => {
          captchaEnabled.value = res2.captchaEnabled === void 0 ? true : res2.captchaEnabled;
          if (captchaEnabled.value) {
            codeUrl.value = "data:image/gif;base64," + res2.img;
            loginForm.value.uuid = res2.uuid;
          }
        });
      };
      const handleLogin = async () => {
        if (loginForm.value.username === "") {
          proxy.$modal.msgError("请输入您的账号");
        } else if (loginForm.value.password === "") {
          proxy.$modal.msgError("请输入您的密码");
        } else if (loginForm.value.code === "" && captchaEnabled.value) {
          proxy.$modal.msgError("请输入验证码");
        } else {
          proxy.$modal.loading("注册中，请耐心等待...");
          pwdLogin();
        }
      };
      const pwdLogin = async () => {
        userStore.registerUser(loginForm.value).then(() => {
          proxy.$modal.closeLoading();
          loginSuccess();
        }).catch(() => {
          proxy.$modal.closeLoading();
          if (captchaEnabled.value) {
            getCode();
          }
        });
      };
      const loginSuccess = async (result) => {
        uni.navigateBack();
      };
      getCode();
      const __returned__ = { userStore, proxy, statusBarHeight, navHeight, codeUrl, captchaEnabled, register: register2, globalConfig, loginForm, needLogin, handleUserRegister, handlePrivacy, handleUserAgrement, getCode, handleLogin, pwdLogin, loginSuccess, ref: vue.ref, getCurrentInstance: vue.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get getCodeImg() {
        return getCodeImg;
      }, get getInfo() {
        return getInfo;
      }, get getToken() {
        return getToken;
      }, get useUserStore() {
        return useUserStore;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "normal-login-container" }, [
      vue.createElementVNode("view", { class: "login-form-content" }, [
        vue.createElementVNode("view", { class: "input-item flex align-center" }, [
          vue.createVNode(_component_uni_icons, {
            class: "icon",
            type: "person",
            color: "#3498db",
            size: "30"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.loginForm.username = $event),
              class: "input",
              type: "text",
              placeholder: "请输入账号",
              maxlength: "30"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loginForm.username]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-item flex align-center" }, [
          vue.createVNode(_component_uni_icons, {
            class: "icon",
            type: "locked",
            color: "#3498db",
            size: "30"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.loginForm.password = $event),
              type: "password",
              password: "true",
              class: "input",
              placeholder: "请输入密码",
              maxlength: "20"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loginForm.password]
          ])
        ]),
        $setup.captchaEnabled ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "input-item flex align-center",
          style: { "width": "60%", "margin": "0px" }
        }, [
          vue.createVNode(_component_uni_icons, {
            class: "icon",
            type: "chat",
            color: "#3498db",
            size: "30"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.loginForm.code = $event),
              type: "number",
              class: "input",
              placeholder: "请输入验证码",
              maxlength: "4"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loginForm.code]
          ]),
          vue.createElementVNode("view", { class: "login-code" }, [
            vue.createElementVNode("image", {
              src: $setup.codeUrl,
              onClick: $setup.getCode,
              class: "login-code-img"
            }, null, 8, ["src"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "action-btn" }, [
          vue.createElementVNode("button", {
            onClick: $setup.handleLogin,
            class: "login-btn cu-btn block bg-blue lg round"
          }, "注册")
        ]),
        vue.createElementVNode("view", { class: "xieyi text-center" }, [
          vue.createElementVNode("text", { class: "text-grey1" }, "注册即代表同意"),
          vue.createElementVNode("text", {
            onClick: $setup.handleUserAgrement,
            class: "text-blue"
          }, "《用户协议》"),
          vue.createElementVNode("text", {
            onClick: $setup.handlePrivacy,
            class: "text-blue"
          }, "《隐私协议》")
        ])
      ])
    ]);
  }
  const PagesRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-5807bfac"], ["__file", "D:/workfile/FoodWebApp/pages/register.vue"]]);
  __definePage("pages/login", PagesLogin);
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/task/index", PagesTaskIndex);
  __definePage("pages/produce/index", PagesProduceIndex);
  __definePage("pages/mine/index", PagesMineIndex);
  __definePage("pages/common/webview/index", PagesCommonWebviewIndex);
  __definePage("pages/msg/index", PagesMsgIndex);
  __definePage("pages/mine/about/about", PagesMineAboutAbout);
  __definePage("pages/mine/userinfo/userinfo", PagesMineUserinfoUserinfo);
  __definePage("pages/mine/changepwd/changepwd", PagesMineChangepwdChangepwd);
  __definePage("pages/msg/notice/notice", PagesMsgNoticeNotice);
  __definePage("pages/task/taskdetails/taskdetails", PagesTaskTaskdetailsTaskdetails);
  __definePage("pages/task/taskwarn/taskwarn", PagesTaskTaskwarnTaskwarn);
  __definePage("pages/task/errorreport/errorreport", PagesTaskErrorreportErrorreport);
  __definePage("pages/common/popup/index", PagesCommonPopupIndex);
  __definePage("pages/produce/recipe_line/recipe_line", PagesProduceRecipeLineRecipeLine);
  __definePage("pages/produce/scan_item/scan_item", PagesProduceScanItemScanItem);
  __definePage("pages/produce/start_produce/start_produce", PagesProduceStartProduceStartProduce);
  __definePage("pages/task/batch_record/batch_record", PagesTaskBatchRecordBatchRecord);
  __definePage("pages/register", PagesRegister);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data2 = JSON.parse(raw);
        Object.assign(currentSettings, data2);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key2) {
    if (key2 === void 0)
      key2 = null;
    return vue.inject(key2 !== null ? key2 : storeKey);
  }
  function find(list2, f2) {
    return list2.filter(f2)[0];
  }
  function deepCopy(obj, cache) {
    if (cache === void 0)
      cache = [];
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    var hit = find(cache, function(c2) {
      return c2.original === obj;
    });
    if (hit) {
      return hit.copy;
    }
    var copy2 = Array.isArray(obj) ? [] : {};
    cache.push({
      original: obj,
      copy: copy2
    });
    Object.keys(obj).forEach(function(key2) {
      copy2[key2] = deepCopy(obj[key2], cache);
    });
    return copy2;
  }
  function forEachValue(obj, fn2) {
    Object.keys(obj).forEach(function(key2) {
      return fn2(obj[key2], key2);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn2, arg) {
    return function() {
      return fn2(arg);
    };
  }
  function genericSubscribe(fn2, subs, options) {
    if (subs.indexOf(fn2) < 0) {
      options && options.prepend ? subs.unshift(fn2) : subs.push(fn2);
    }
    return function() {
      var i2 = subs.indexOf(fn2);
      if (i2 > -1) {
        subs.splice(i2, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn2, key2) {
        computedObj[key2] = partial(fn2, store2);
        computedCache[key2] = vue.computed(function() {
          return computedObj[key2]();
        });
        Object.defineProperty(store2.getters, key2, {
          get: function() {
            return computedCache[key2].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module2, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module2.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module2;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module2.state;
      });
    }
    var local = module2.context = makeLocalContext(store2, namespace, path);
    module2.forEachMutation(function(mutation, key2) {
      var namespacedType = namespace + key2;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module2.forEachAction(function(action, key2) {
      var type = action.root ? key2 : namespace + key2;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module2.forEachGetter(function(getter, key2) {
      var namespacedType = namespace + key2;
      registerGetter(store2, namespacedType, getter, local);
    });
    module2.forEachChild(function(child, key2) {
      installModule(store2, rootState, path.concat(key2), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res2 = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res2)) {
        res2 = Promise.resolve(res2);
      }
      if (store2._devtoolHook) {
        return res2.catch(function(err2) {
          store2._devtoolHook.emit("vuex:error", err2);
          throw err2;
        });
      } else {
        return res2;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store22) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store22.state,
        // root state
        store22.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key2) {
      return state2[key2];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app2, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app: app2,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api2) {
        api2.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api2.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api2.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api2.on.getInspectorTree(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api2.on.getInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api2.on.editInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data2 = {};
          if (mutation.payload) {
            data2.payload = mutation.payload;
          }
          data2.state = state;
          api2.notifyComponentUpdate();
          api2.sendInspectorTree(INSPECTOR_ID);
          api2.sendInspectorState(INSPECTOR_ID);
          api2.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data: data2
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data2 = {};
            if (action.payload) {
              data2.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data2.state = state;
            api2.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data: data2
              }
            });
          },
          after: function(action, state) {
            var data2 = {};
            var duration = Date.now() - action._time;
            data2.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data2.payload = action.payload;
            }
            data2.state = state;
            api2.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data: data2
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module2, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module2.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module2._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module2._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module2, filter2, path) {
    if (path.includes(filter2)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module2.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module2._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module2._children[moduleName], filter2, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module2, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module2.state).map(function(key2) {
        return {
          key: key2,
          editable: true,
          value: module2.state[key2]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key2) {
        return {
          key: key2.endsWith("/") ? extractNameFromPath(key2) : key2,
          editable: false,
          value: canThrow(function() {
            return tree[key2];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key2) {
      var path = key2.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p2) {
          if (!target[p2]) {
            target[p2] = {
              _custom: {
                value: {},
                display: p2,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p2]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key2];
        });
      } else {
        result[key2] = canThrow(function() {
          return getters[key2];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n2) {
      return n2;
    });
    return names.reduce(
      function(module2, moduleName, i2) {
        var child = module2[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i2 === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e2) {
      return e2;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key2, module2) {
    this._children[key2] = module2;
  };
  Module.prototype.removeChild = function removeChild(key2) {
    delete this._children[key2];
  };
  Module.prototype.getChild = function getChild(key2) {
    return this._children[key2];
  };
  Module.prototype.hasChild = function hasChild(key2) {
    return key2 in this._children;
  };
  Module.prototype.update = function update(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn2) {
    forEachValue(this._children, fn2);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn2) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn2);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn2) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn2);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn2) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn2);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module2, key2) {
      return module2.getChild(key2);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module2 = this.root;
    return path.reduce(function(namespace, key2) {
      module2 = module2.getChild(key2);
      return namespace + (module2.namespaced ? key2 + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update2([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register2(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key2) {
        this$1$1.register(path.concat(key2), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key2 = path[path.length - 1];
    var child = parent.getChild(key2);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key2 + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key2);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key2 = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key2);
    }
    return false;
  };
  function update2(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key2 in newModule.modules) {
        if (!targetModule.getChild(key2)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key2 + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update2(
          path.concat(key2),
          targetModule.getChild(key2),
          newModule.modules[key2]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key2) {
      if (!rawModule[key2]) {
        return;
      }
      var assertOptions = assertTypes[key2];
      forEachValue(rawModule[key2], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key2, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key2, type, value, expected) {
    var buf = key2 + " should be " + expected + ' but "' + key2 + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins2 = options.plugins;
    if (plugins2 === void 0)
      plugins2 = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch2 = ref.dispatch;
    var commit2 = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch2.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit2.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins2.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install2(app2, injectKey) {
    app2.provide(injectKey || storeKey, this);
    app2.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app2, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v2) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e2) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e2);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e2);
          }
        }
        resolve(res2);
      }, function(error2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error2);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e2);
          }
        }
        reject(error2);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn2, options) {
    return genericSubscribe(fn2, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn2, options) {
    var subs = typeof fn2 === "function" ? { before: fn2 } : fn2;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn2) {
    var committing = this._committing;
    this._committing = true;
    fn2();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res2 = {};
    if (!isValidMap(states)) {
      console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(states).forEach(function(ref) {
      var key2 = ref.key;
      var val = ref.val;
      res2[key2] = function mappedState() {
        var state = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module2) {
            return;
          }
          state = module2.context.state;
          getters = module2.context.getters;
        }
        return typeof val === "function" ? val.call(this, state, getters) : state[val];
      };
      res2[key2].vuex = true;
    });
    return res2;
  });
  var mapMutations = normalizeNamespace(function(namespace, mutations) {
    var res2 = {};
    if (!isValidMap(mutations)) {
      console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(mutations).forEach(function(ref) {
      var key2 = ref.key;
      var val = ref.val;
      res2[key2] = function mappedMutation() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var commit2 = this.$store.commit;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapMutations", namespace);
          if (!module2) {
            return;
          }
          commit2 = module2.context.commit;
        }
        return typeof val === "function" ? val.apply(this, [commit2].concat(args)) : commit2.apply(this.$store, [val].concat(args));
      };
    });
    return res2;
  });
  var mapGetters = normalizeNamespace(function(namespace, getters) {
    var res2 = {};
    if (!isValidMap(getters)) {
      console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(getters).forEach(function(ref) {
      var key2 = ref.key;
      var val = ref.val;
      val = namespace + val;
      res2[key2] = function mappedGetter() {
        if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
          return;
        }
        if (!(val in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + val);
          return;
        }
        return this.$store.getters[val];
      };
      res2[key2].vuex = true;
    });
    return res2;
  });
  var mapActions = normalizeNamespace(function(namespace, actions) {
    var res2 = {};
    if (!isValidMap(actions)) {
      console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(actions).forEach(function(ref) {
      var key2 = ref.key;
      var val = ref.val;
      res2[key2] = function mappedAction() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var dispatch2 = this.$store.dispatch;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapActions", namespace);
          if (!module2) {
            return;
          }
          dispatch2 = module2.context.dispatch;
        }
        return typeof val === "function" ? val.apply(this, [dispatch2].concat(args)) : dispatch2.apply(this.$store, [val].concat(args));
      };
    });
    return res2;
  });
  var createNamespacedHelpers = function(namespace) {
    return {
      mapState: mapState.bind(null, namespace),
      mapGetters: mapGetters.bind(null, namespace),
      mapMutations: mapMutations.bind(null, namespace),
      mapActions: mapActions.bind(null, namespace)
    };
  };
  function normalizeMap(map2) {
    if (!isValidMap(map2)) {
      return [];
    }
    return Array.isArray(map2) ? map2.map(function(key2) {
      return { key: key2, val: key2 };
    }) : Object.keys(map2).map(function(key2) {
      return { key: key2, val: map2[key2] };
    });
  }
  function isValidMap(map2) {
    return Array.isArray(map2) || isObject(map2);
  }
  function normalizeNamespace(fn2) {
    return function(namespace, map2) {
      if (typeof namespace !== "string") {
        map2 = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn2(namespace, map2);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module2 = store2._modulesNamespaceMap[namespace];
    if (!module2) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module2;
  }
  function createLogger(ref) {
    if (ref === void 0)
      ref = {};
    var collapsed = ref.collapsed;
    if (collapsed === void 0)
      collapsed = true;
    var filter2 = ref.filter;
    if (filter2 === void 0)
      filter2 = function(mutation, stateBefore, stateAfter) {
        return true;
      };
    var transformer = ref.transformer;
    if (transformer === void 0)
      transformer = function(state) {
        return state;
      };
    var mutationTransformer = ref.mutationTransformer;
    if (mutationTransformer === void 0)
      mutationTransformer = function(mut) {
        return mut;
      };
    var actionFilter = ref.actionFilter;
    if (actionFilter === void 0)
      actionFilter = function(action, state) {
        return true;
      };
    var actionTransformer = ref.actionTransformer;
    if (actionTransformer === void 0)
      actionTransformer = function(act) {
        return act;
      };
    var logMutations = ref.logMutations;
    if (logMutations === void 0)
      logMutations = true;
    var logActions = ref.logActions;
    if (logActions === void 0)
      logActions = true;
    var logger = ref.logger;
    if (logger === void 0)
      logger = console;
    return function(store2) {
      var prevState = deepCopy(store2.state);
      if (typeof logger === "undefined") {
        return;
      }
      if (logMutations) {
        store2.subscribe(function(mutation, state) {
          var nextState = deepCopy(state);
          if (filter2(mutation, prevState, nextState)) {
            var formattedTime = getFormattedTime();
            var formattedMutation = mutationTransformer(mutation);
            var message = "mutation " + mutation.type + formattedTime;
            startMessage(logger, message, collapsed);
            logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
            logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
            logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
            endMessage(logger);
          }
          prevState = nextState;
        });
      }
      if (logActions) {
        store2.subscribeAction(function(action, state) {
          if (actionFilter(action, state)) {
            var formattedTime = getFormattedTime();
            var formattedAction = actionTransformer(action);
            var message = "action " + action.type + formattedTime;
            startMessage(logger, message, collapsed);
            logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
            endMessage(logger);
          }
        });
      }
    };
  }
  function startMessage(logger, message, collapsed) {
    var startMessage2 = collapsed ? logger.groupCollapsed : logger.group;
    try {
      startMessage2.call(logger, message);
    } catch (e2) {
      logger.log(message);
    }
  }
  function endMessage(logger) {
    try {
      logger.groupEnd();
    } catch (e2) {
      logger.log("—— log end ——");
    }
  }
  function getFormattedTime() {
    var time2 = /* @__PURE__ */ new Date();
    return " @ " + pad(time2.getHours(), 2) + ":" + pad(time2.getMinutes(), 2) + ":" + pad(time2.getSeconds(), 2) + "." + pad(time2.getMilliseconds(), 3);
  }
  function repeat(str, times) {
    return new Array(times + 1).join(str);
  }
  function pad(num, maxLength) {
    return repeat("0", maxLength - num.toString().length) + num;
  }
  var index = {
    version: "4.1.0",
    Store,
    storeKey,
    createStore,
    useStore,
    mapState,
    mapMutations,
    mapGetters,
    mapActions,
    createNamespacedHelpers,
    createLogger
  };
  const store = createPinia();
  const _sfc_main = {
    onLaunch: function() {
      this.initApp();
      formatAppLog("log", "at App.vue:27", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:31", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:34", "App Hide");
    },
    globalData: {
      test: ""
    },
    methods: {
      ...mapMutations(["setUniverifyErrorMsg", "setUniverifyLogin"]),
      // 初始化应用
      initApp() {
        this.initConfig();
        this.checkVersion();
      },
      checkVersion() {
        let appVersion = plus.runtime.version;
        let os2 = "";
        let plt = uni.getSystemInfoSync().platform;
        if (plt == "ios") {
          os2 = "2";
        } else if (plt == "android") {
          os2 = "1";
        } else if (plt == "harmonyos") {
          os2 = "4";
        } else {
          return;
        }
        getAppVersion(os2, appVersion).then((res2) => {
          if (res2.code == 200) {
            if (res2.data.update == true) {
              uni.showModal({
                title: "发现新版本",
                content: res2.data.info,
                showCancel: res2.data.force == false,
                success: function(res1) {
                  if (res1.confirm) {
                    plus.runtime.openWeb(res2.data.url);
                  } else if (res1.cancel) {
                    formatAppLog("log", "at App.vue:79", "用户点击取消");
                  }
                }
              });
            }
          }
        }).catch((res2) => {
        });
      },
      initConfig() {
        this.globalData.config = config$1;
      },
      checkLogin() {
        if (!getToken()) {
          this.$tab.reLaunch("/pages/login");
        }
      }
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/workfile/FoodWebApp/App.vue"]]);
  function parseTime(time2, pattern2) {
    if (arguments.length === 0 || !time2) {
      return null;
    }
    const format = pattern2 || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time2 === "object") {
      date = time2;
    } else {
      if (typeof time2 === "string" && /^[0-9]+$/.test(time2)) {
        time2 = parseInt(time2);
      } else if (typeof time2 === "string") {
        time2 = time2.replace(new RegExp(/-/gm), "/").replace("T", " ").replace(new RegExp(/\.[\d]{3}/gm), "");
      }
      if (typeof time2 === "number" && time2.toString().length === 10) {
        time2 = time2 * 1e3;
      }
      date = new Date(time2);
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key2) => {
      let value = formatObj[key2];
      if (key2 === "a") {
        return ["日", "一", "二", "三", "四", "五", "六"][value];
      }
      if (result.length > 0 && value < 10) {
        value = "0" + value;
      }
      return value || 0;
    });
    return time_str;
  }
  function resetForm(refName) {
    if (this.$refs[refName])
      ;
  }
  function addDateRange(params, dateRange, propName) {
    let search2 = params;
    search2.params = typeof search2.params === "object" && search2.params !== null && !Array.isArray(search2.params) ? search2.params : {};
    dateRange = Array.isArray(dateRange) ? dateRange : [];
    if (typeof propName === "undefined") {
      search2.params["beginTime"] = dateRange[0];
      search2.params["endTime"] = dateRange[1];
    } else {
      search2.params["begin" + propName] = dateRange[0];
      search2.params["end" + propName] = dateRange[1];
    }
    return search2;
  }
  function selectDictLabel(datas, value) {
    if (value === void 0) {
      return "";
    }
    var actions = [];
    Object.keys(datas).some((key2) => {
      if (datas[key2].value == "" + value) {
        actions.push(datas[key2].label);
        return true;
      }
    });
    if (actions.length === 0) {
      actions.push(value);
    }
    return actions.join("");
  }
  function selectDictLabels(datas, value, separator) {
    if (value === void 0 || value.length === 0) {
      return "";
    }
    if (Array.isArray(value)) {
      value = value.join(",");
    }
    var actions = [];
    var currentSeparator = void 0 === separator ? "," : separator;
    var temp = value.split(currentSeparator);
    Object.keys(value.split(currentSeparator)).some((val) => {
      var match = false;
      Object.keys(datas).some((key2) => {
        if (datas[key2].value == "" + temp[val]) {
          actions.push(datas[key2].label + currentSeparator);
          match = true;
        }
      });
      if (!match) {
        actions.push(temp[val] + currentSeparator);
      }
    });
    return actions.join("").substring(0, actions.join("").length - 1);
  }
  function handleTree(data2, id, parentId, children) {
    let config2 = {
      id: id || "id",
      parentId: parentId || "parentId",
      childrenList: children || "children"
    };
    var childrenListMap = {};
    var nodeIds = {};
    var tree = [];
    for (let d2 of data2) {
      let parentId2 = d2[config2.parentId];
      if (childrenListMap[parentId2] == null) {
        childrenListMap[parentId2] = [];
      }
      nodeIds[d2[config2.id]] = d2;
      childrenListMap[parentId2].push(d2);
    }
    for (let d2 of data2) {
      let parentId2 = d2[config2.parentId];
      if (nodeIds[parentId2] == null) {
        tree.push(d2);
      }
    }
    for (let t2 of tree) {
      adaptToChildrenList(t2);
    }
    function adaptToChildrenList(o2) {
      if (childrenListMap[o2[config2.id]] !== null) {
        o2[config2.childrenList] = childrenListMap[o2[config2.id]];
      }
      if (o2[config2.childrenList]) {
        for (let c2 of o2[config2.childrenList]) {
          adaptToChildrenList(c2);
        }
      }
    }
    return tree;
  }
  function tansParams(params) {
    let result = "";
    for (const propName of Object.keys(params)) {
      const value = params[propName];
      var part = propName + "=";
      if (value !== null && value !== "" && typeof value !== "undefined") {
        if (typeof value === "object") {
          for (const key2 of Object.keys(value)) {
            if (value[key2] !== null && value[key2] !== "" && typeof value[key2] !== "undefined") {
              let params2 = propName + "[" + key2 + "]";
              var subPart = params2 + "=";
              result += subPart + value[key2] + "&";
            }
          }
        } else {
          result += part + value + "&";
        }
      }
    }
    return result;
  }
  function uniappRules(data2) {
    let res2 = {};
    if (typeof data2 === "object") {
      let keys = Object.keys(data2);
      keys.forEach((key2) => {
        let rules = data2[key2];
        rules.forEach((rule) => {
          if (rule.errorMessage === void 0) {
            rule["errorMessage"] = rule.message;
            delete rule.message;
          }
          if (rule.validateFunction === void 0 && rule.validator !== void 0) {
            rule["validateFunction"] = function(ruleData, value, data3, callback) {
              rule.validator(ruleData, value, function(error2) {
                if (typeof error2 === "object")
                  callback(error2.message);
              });
            };
          }
          if (rule.pattern !== void 0) {
            let pattern2 = rule.pattern.toString();
            if (pattern2[0] === "/")
              pattern2 = pattern2.substring(1, pattern2.length);
            if (pattern2[pattern2.length - 1] === "/")
              pattern2 = pattern2.substring(0, pattern2.length - 1);
            rule["pattern"] = new RegExp(pattern2);
          }
        });
        res2[key2] = {
          "rules": rules
        };
      });
    }
    return res2;
  }
  const hasRole = {
    mounted(el, binding, vnode) {
      const { value } = binding;
      const super_admin = "admin";
      const roles = useUserStore().roles;
      if (value && value instanceof Array && value.length > 0) {
        const roleFlag = value;
        const hasRole2 = roles.some((role) => {
          return super_admin === role || roleFlag.includes(role);
        });
        if (!hasRole2) {
          el.parentNode && el.parentNode.removeChild(el);
        }
      } else {
        throw new Error(`请设置角色权限标签值`);
      }
    }
  };
  const hasPermi = {
    mounted(el, binding, vnode) {
      const { value } = binding;
      const all_permission = "*:*:*";
      const permissions = useUserStore().permissions;
      if (value && value instanceof Array && value.length > 0) {
        const permissionFlag = value;
        const hasPermissions = permissions.some((permission) => {
          return all_permission === permission || permissionFlag.includes(permission);
        });
        if (!hasPermissions) {
          el.parentNode && el.parentNode.removeChild(el);
        }
      } else {
        throw new Error(`请设置操作权限标签值`);
      }
    }
  };
  const copyText = {
    beforeMount(el, { value, arg }) {
      if (arg === "callback") {
        el.$copyCallback = value;
      } else {
        el.$copyValue = value;
        const handler = () => {
          copyTextToClipboard(el.$copyValue);
          if (el.$copyCallback) {
            el.$copyCallback(el.$copyValue);
          }
        };
        el.addEventListener("click", handler);
        el.$destroyCopy = () => el.removeEventListener("click", handler);
      }
    }
  };
  function copyTextToClipboard(input, { target = document.body } = {}) {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = input;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
    target.append(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = input.length;
    let isSuccess = false;
    try {
      isSuccess = document.execCommand("copy");
    } catch {
    }
    element.remove();
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
    return isSuccess;
  }
  function directive(app2) {
    app2.directive("hasRole", hasRole);
    app2.directive("hasPermi", hasPermi);
    app2.directive("copyText", copyText);
  }
  const tab = {
    // 关闭所有页面，打开到应用内的某个页面
    reLaunch(url) {
      return uni.reLaunch({
        url
      });
    },
    // 跳转到tabBar页面，并关闭其他所有非tabBar页面
    switchTab(url) {
      return uni.switchTab({
        url
      });
    },
    // 关闭当前页面，跳转到应用内的某个页面
    redirectTo(url) {
      return uni.redirectTo({
        url
      });
    },
    // 保留当前页面，跳转到应用内的某个页面
    navigateTo(url) {
      return uni.navigateTo({
        url
      });
    },
    // 关闭当前页面，返回上一页面或多级页面
    navigateBack() {
      return uni.navigateBack();
    }
  };
  function authPermission(permission) {
    const all_permission = "*:*:*";
    const permissions = useUserStore().permissions;
    if (permission && permission.length > 0) {
      return permissions.some((v2) => {
        return all_permission === v2 || v2 === permission;
      });
    } else {
      return false;
    }
  }
  function authRole(role) {
    const super_admin = "admin";
    const roles = useUserStore().roles;
    if (role && role.length > 0) {
      return roles.some((v2) => {
        return super_admin === v2 || v2 === role;
      });
    } else {
      return false;
    }
  }
  const auth = {
    // 验证用户是否具备某权限
    hasPermi(permission) {
      return authPermission(permission);
    },
    // 验证用户是否含有指定权限，只需包含其中一个
    hasPermiOr(permissions) {
      return permissions.some((item) => {
        return authPermission(item);
      });
    },
    // 验证用户是否含有指定权限，必须全部拥有
    hasPermiAnd(permissions) {
      return permissions.every((item) => {
        return authPermission(item);
      });
    },
    // 验证用户是否具备某角色
    hasRole(role) {
      return authRole(role);
    },
    // 验证用户是否含有指定角色，只需包含其中一个
    hasRoleOr(roles) {
      return roles.some((item) => {
        return authRole(item);
      });
    },
    // 验证用户是否含有指定角色，必须全部拥有
    hasRoleAnd(roles) {
      return roles.every((item) => {
        return authRole(item);
      });
    }
  };
  const modal = {
    // 消息提示
    msg(content) {
      uni.showToast({
        title: content,
        icon: "none"
      });
    },
    // 错误消息
    msgError(content) {
      uni.showToast({
        title: content,
        icon: "error"
      });
    },
    // 成功消息
    msgSuccess(content) {
      uni.showToast({
        title: content,
        icon: "success"
      });
    },
    // 隐藏消息
    hideMsg(content) {
      uni.hideToast();
    },
    // 弹出提示
    alert(content, title) {
      const modalStore = useModalStore();
      uni.navigateTo({
        url: "/pages/common/popup/index",
        success: function(res2) {
          modalStore.open({
            title: title || "系统提示",
            content,
            cancelText: "取消",
            confirmText: "确定",
            confirm: function(res3) {
            }
          });
        }
      });
    },
    // 确认窗体
    confirm(content, title) {
      const modalStore = useModalStore();
      return new Promise((resolve, reject) => {
        uni.navigateTo({
          url: "/pages/common/popup/index",
          success: function(res2) {
            modalStore.open({
              title: title || "系统提示",
              content,
              cancelText: "取消",
              confirmText: "确定",
              confirm: function(res3) {
                if (res3.confirm) {
                  resolve(true);
                } else if (res3.cancel) {
                  reject(false);
                }
              }
            });
          }
        });
      });
    },
    // 提示信息
    showToast(option) {
      if (typeof option === "object") {
        uni.showToast(option);
      } else {
        uni.showToast({
          title: option,
          icon: "none",
          duration: 2500
        });
      }
    },
    // 打开遮罩层
    loading(content) {
      uni.showLoading({
        title: content,
        icon: "none"
      });
    },
    // 关闭遮罩层
    closeLoading() {
      uni.hideLoading();
    }
  };
  const plugins = {
    install(app2) {
      app2.config.globalProperties.$tab = tab;
      app2.config.globalProperties.$auth = auth;
      app2.config.globalProperties.$modal = modal;
    }
  };
  const loginPage = "/pages/login";
  const whiteList = [
    "/pages/login",
    "/pages/common/webview/index",
    "/pages/common/popup/index"
  ];
  function checkWhite(url) {
    const path = url.split("?")[0];
    for (let s2 of whiteList) {
      let ss = s2.split("/**");
      if (url.indexOf(ss[0]) !== -1) {
        return true;
      }
    }
    return whiteList.indexOf(path) !== -1;
  }
  let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  list.forEach((item) => {
    uni.addInterceptor(item, {
      invoke(to) {
        if (getToken() !== "") {
          return true;
        } else {
          if (checkWhite(to.url)) {
            return true;
          }
          uni.clearStorageSync();
          uni.navigateTo({
            url: loginPage
          });
          return false;
        }
      },
      fail(err2) {
        formatAppLog("log", "at permission.js:53", err2);
      }
    });
  });
  const useDictStore = defineStore("dict", {
    state: () => ({
      dict: new Array()
    }),
    actions: {
      // 获取字典
      getDict(_key) {
        if (_key == null && _key == "") {
          return null;
        }
        try {
          for (let i2 = 0; i2 < this.dict.length; i2++) {
            if (this.dict[i2].key == _key) {
              return this.dict[i2].value;
            }
          }
        } catch (e2) {
          return null;
        }
      },
      // 设置字典
      setDict(_key, value) {
        if (_key !== null && _key !== "") {
          this.dict.push({
            key: _key,
            value
          });
        }
      },
      // 删除字典
      removeDict(_key) {
        var bln = false;
        try {
          for (let i2 = 0; i2 < this.dict.length; i2++) {
            if (this.dict[i2].key == _key) {
              this.dict.splice(i2, 1);
              return true;
            }
          }
        } catch (e2) {
          bln = false;
        }
        return bln;
      },
      // 清空字典
      cleanDict() {
        this.dict = new Array();
      },
      // 初始字典
      initDict() {
      }
    }
  });
  function getDicts(dictType) {
    return request({
      url: "/system/dict/data/type/" + dictType,
      method: "get"
    });
  }
  function useDict(...args) {
    const res2 = vue.ref({});
    return (() => {
      args.forEach((dictType, index2) => {
        res2.value[dictType] = [];
        const dicts = useDictStore().getDict(dictType);
        if (dicts) {
          res2.value[dictType] = dicts;
        } else {
          getDicts(dictType).then((resp) => {
            res2.value[dictType] = resp.data.map((p2) => ({ label: p2.dictLabel, value: p2.dictValue, elTagType: p2.listClass, elTagClass: p2.cssClass }));
            useDictStore().setDict(dictType, res2.value[dictType]);
          });
        }
      });
      return vue.toRefs(res2.value);
    })();
  }
  function useTextDict(...args) {
    const res2 = vue.ref({});
    return (() => {
      args.forEach((dictType, index2) => {
        res2.value[dictType] = [];
        const dicts = useDictStore().getDict(dictType);
        if (dicts) {
          formatAppLog("log", "at utils/dict.js:37", "===dicts=dictLabel=" + dicts[0].value);
          if (!dicts[0].text) {
            res2.value[dictType] = dicts.map((item) => ({
              text: item.label,
              value: item.value
            }));
          } else {
            res2.value[dictType] = dicts.map((item) => ({
              text: item.text,
              value: item.value
            }));
          }
        } else {
          getDicts(dictType).then((resp) => {
            formatAppLog("log", "at utils/dict.js:55", "===dicts=dictLabel=" + resp.data[0].dictLabel);
            formatAppLog("log", "at utils/dict.js:56", "===dicts=text=" + resp.data[0].text);
            res2.value[dictType] = resp.data.map((item) => ({
              text: item.dictLabel,
              value: item.dictValue
            }));
            useDictStore().setDict(dictType, res2.value[dictType]);
          });
        }
      });
      return vue.toRefs(res2.value);
    })();
  }
  var define_process_env_UNI_STATISTICS_CONFIG_default = { version: "2", enable: true };
  var define_process_env_UNI_STAT_TITLE_JSON_default = { "pages/login": "登录", "pages/home/index": "首页", "pages/task/index": "任务", "pages/produce/index": "开始生产", "pages/mine/index": "个人中心", "pages/common/webview/index": "其他", "pages/msg/index": "消息中心", "pages/mine/about/about": "关于", "pages/mine/userinfo/userinfo": "用户信息", "pages/mine/changepwd/changepwd": "修改密码", "pages/msg/notice/notice": "通知", "pages/task/taskdetails/taskdetails": "任务详情", "pages/task/taskwarn/taskwarn": "配料超重", "pages/task/errorreport/errorreport": "中断上报", "pages/common/popup/index": "溫馨提示", "pages/produce/recipe_line/recipe_line": "投料任务", "pages/produce/scan_item/scan_item": "扫码物料", "pages/produce/start_produce/start_produce": "生产投料", "pages/task/batch_record/batch_record": "批次详情", "pages/register": "注册体验账户" };
  var define_process_env_UNI_STAT_UNI_CLOUD_default = {};
  const sys = uni.getSystemInfoSync();
  const STAT_VERSION = "5.05";
  const STAT_URL = "https://tongji.dcloud.io/uni/stat";
  const STAT_H5_URL = "https://tongji.dcloud.io/uni/stat.gif";
  const PAGE_PVER_TIME = 1800;
  const APP_PVER_TIME = 300;
  const OPERATING_TIME = 10;
  const DIFF_TIME = 60 * 1e3 * 60 * 24;
  const appid = "__UNI__930D6B4";
  const dbSet = (name2, value) => {
    let data2 = uni.getStorageSync("$$STAT__DBDATA:" + appid) || {};
    if (!data2) {
      data2 = {};
    }
    data2[name2] = value;
    uni.setStorageSync("$$STAT__DBDATA:" + appid, data2);
  };
  const dbGet = (name2) => {
    let data2 = uni.getStorageSync("$$STAT__DBDATA:" + appid) || {};
    if (!data2[name2]) {
      let dbdata = uni.getStorageSync("$$STAT__DBDATA:" + appid);
      if (!dbdata) {
        dbdata = {};
      }
      if (!dbdata[name2]) {
        return void 0;
      }
      data2[name2] = dbdata[name2];
    }
    return data2[name2];
  };
  const dbRemove = (name2) => {
    let data2 = uni.getStorageSync("$$STAT__DBDATA:" + appid) || {};
    if (data2[name2]) {
      delete data2[name2];
      uni.setStorageSync("$$STAT__DBDATA:" + appid, data2);
    } else {
      data2 = uni.getStorageSync("$$STAT__DBDATA:" + appid);
      if (data2[name2]) {
        delete data2[name2];
        uni.setStorageSync("$$STAT__DBDATA:" + appid, data2);
      }
    }
  };
  const uniStatisticsConfig = define_process_env_UNI_STATISTICS_CONFIG_default;
  let statConfig = {
    appid: "__UNI__930D6B4"
  };
  let titleJsons = {};
  titleJsons = define_process_env_UNI_STAT_TITLE_JSON_default;
  const UUID_KEY = "__DC_STAT_UUID";
  const UUID_VALUE = "__DC_UUID_VALUE";
  function getUuid() {
    let uuid = "";
    if (get_platform_name() === "n") {
      try {
        uuid = plus.runtime.getDCloudId();
      } catch (e2) {
        uuid = "";
      }
      return uuid;
    }
    try {
      uuid = uni.getStorageSync(UUID_KEY);
    } catch (e2) {
      uuid = UUID_VALUE;
    }
    if (!uuid) {
      uuid = Date.now() + "" + Math.floor(Math.random() * 1e7);
      try {
        uni.setStorageSync(UUID_KEY, uuid);
      } catch (e2) {
        uni.setStorageSync(UUID_KEY, UUID_VALUE);
      }
    }
    return uuid;
  }
  const get_uuid = (statData2) => {
    return sys.deviceId || getUuid();
  };
  const get_odid = (statData2) => {
    let odid = "";
    if (get_platform_name() === "n") {
      try {
        odid = plus.device.uuid;
      } catch (e2) {
        odid = "";
      }
      return odid;
    }
    return sys.deviceId || getUuid();
  };
  const stat_config = statConfig;
  const get_sgin = (statData2) => {
    let arr = Object.keys(statData2);
    let sortArr = arr.sort();
    let sgin = {};
    let sginStr = "";
    for (var i2 in sortArr) {
      sgin[sortArr[i2]] = statData2[sortArr[i2]];
      sginStr += sortArr[i2] + "=" + statData2[sortArr[i2]] + "&";
    }
    return {
      sign: "",
      options: sginStr.substr(0, sginStr.length - 1)
    };
  };
  const get_encodeURIComponent_options = (statData2) => {
    let data2 = {};
    for (let prop in statData2) {
      data2[prop] = encodeURIComponent(statData2[prop]);
    }
    return data2;
  };
  const get_platform_name = () => {
    const aliArr = ["y", "a", "p", "mp-ali"];
    const platformList = {
      app: "n",
      "app-plus": "n",
      "app-harmony": "n",
      "mp-harmony": "mhm",
      h5: "h5",
      "mp-weixin": "wx",
      [aliArr.reverse().join("")]: "ali",
      "mp-baidu": "bd",
      "mp-toutiao": "tt",
      "mp-qq": "qq",
      "quickapp-native": "qn",
      "mp-kuaishou": "ks",
      "mp-lark": "lark",
      "quickapp-webview": "qw",
      "mp-xhs": "xhs"
    };
    if (platformList["app"] === "ali") {
      if (my && my.env) {
        const clientName = my.env.clientName;
        if (clientName === "ap")
          return "ali";
        if (clientName === "dingtalk")
          return "dt";
      }
    }
    return platformList["app"] || "app";
  };
  const get_pack_name = () => {
    let packName = "";
    if (get_platform_name() === "wx" || get_platform_name() === "qq") {
      if (uni.canIUse("getAccountInfoSync")) {
        packName = uni.getAccountInfoSync().miniProgram.appId || "";
      }
    }
    if (get_platform_name() === "n")
      ;
    return packName;
  };
  const get_version = () => {
    return get_platform_name() === "n" ? plus.runtime.version : "";
  };
  const get_channel = () => {
    const platformName = get_platform_name();
    let channel = "";
    if (platformName === "n") {
      channel = plus.runtime.channel;
    }
    return channel;
  };
  const get_scene = (options) => {
    const platformName = get_platform_name();
    let scene = "";
    if (options) {
      return options;
    }
    if (platformName === "wx") {
      scene = uni.getLaunchOptionsSync().scene;
    }
    return scene;
  };
  const get_route = (pageVm) => {
    let _self = pageVm || get_page_vm();
    if (get_platform_name() === "bd") {
      let mp_route = _self.$mp && _self.$mp.page && _self.$mp.page.is;
      let scope_route = _self.$scope && _self.$scope.is;
      return mp_route || scope_route || "";
    } else {
      return _self.route || _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
    }
  };
  const get_page_route = (pageVm) => {
    let page = pageVm && (pageVm.$page || pageVm.$scope && pageVm.$scope.$page);
    let lastPageRoute = uni.getStorageSync("_STAT_LAST_PAGE_ROUTE");
    if (!page)
      return lastPageRoute || "";
    return page.fullPath === "/" ? page.route : page.fullPath || page.route;
  };
  const get_page_vm = () => {
    let pages2 = getCurrentPages();
    let $page = pages2[pages2.length - 1];
    if (!$page)
      return null;
    return $page.$vm;
  };
  const get_page_types = (self2) => {
    if (self2.mpType === "page" || self2.$mpType === "page" || self2.$mp && self2.$mp.mpType === "page" || self2.$options.mpType === "page") {
      return "page";
    }
    if (self2.mpType === "app" || self2.$mpType === "app" || self2.$mp && self2.$mp.mpType === "app" || self2.$options.mpType === "app") {
      return "app";
    }
    return null;
  };
  const handle_data = (statData2) => {
    let firstArr = [];
    let contentArr = [];
    let lastArr = [];
    for (let i2 in statData2) {
      const rd = statData2[i2];
      rd.forEach((elm) => {
        let newData = "";
        {
          newData = elm;
        }
        if (i2 === 0) {
          firstArr.push(newData);
        } else if (i2 === 3) {
          lastArr.push(newData);
        } else {
          contentArr.push(newData);
        }
      });
    }
    firstArr.push(...contentArr, ...lastArr);
    return JSON.stringify(firstArr);
  };
  const calibration = (eventName, options) => {
    if (!eventName) {
      console.error(`uni.report Missing [eventName] parameter`);
      return true;
    }
    if (typeof eventName !== "string") {
      console.error(
        `uni.report [eventName] Parameter type error, it can only be of type String`
      );
      return true;
    }
    if (eventName.length > 255) {
      console.error(
        `uni.report [eventName] Parameter length cannot be greater than 255`
      );
      return true;
    }
    if (typeof options !== "string" && typeof options !== "object") {
      console.error(
        "uni.report [options] Parameter type error, Only supports String or Object type"
      );
      return true;
    }
    if (typeof options === "string" && options.length > 255) {
      console.error(
        `uni.report [options] Parameter length cannot be greater than 255`
      );
      return true;
    }
    if (eventName === "title" && typeof options !== "string") {
      console.error(
        `uni.report [eventName] When the parameter is title, the [options] parameter can only be of type String`
      );
      return true;
    }
  };
  const get_page_name = (routepath) => {
    return titleJsons && titleJsons[routepath] || "";
  };
  const Report_Data_Time = "Report_Data_Time";
  const Report_Status = "Report_Status";
  const is_report_data = () => {
    return new Promise((resolve, reject) => {
      let start_time = "";
      let end_time = (/* @__PURE__ */ new Date()).getTime();
      let diff_time = DIFF_TIME;
      let report_status = 1;
      try {
        start_time = uni.getStorageSync(Report_Data_Time);
        report_status = uni.getStorageSync(Report_Status);
      } catch (e2) {
        start_time = "";
        report_status = 1;
      }
      if (report_status === "") {
        requestData(({ enable }) => {
          uni.setStorageSync(Report_Data_Time, end_time);
          uni.setStorageSync(Report_Status, enable);
          if (enable === 1) {
            resolve();
          }
        });
        return;
      }
      if (report_status === 1) {
        resolve();
      }
      if (!start_time) {
        uni.setStorageSync(Report_Data_Time, end_time);
        start_time = end_time;
      }
      if (end_time - start_time > diff_time) {
        requestData(({ enable }) => {
          uni.setStorageSync(Report_Data_Time, end_time);
          uni.setStorageSync(Report_Status, enable);
        });
      }
    });
  };
  const requestData = (done) => {
    const appid2 = "__UNI__930D6B4";
    let formData = {
      usv: STAT_VERSION,
      conf: JSON.stringify({
        ak: appid2
      })
    };
    uni.request({
      url: STAT_URL,
      method: "GET",
      data: formData,
      success: (res2) => {
        const { data: data2 } = res2;
        if (data2.ret === 0) {
          typeof done === "function" && done({
            enable: data2.enable
          });
        }
      },
      fail: (e2) => {
        let report_status_code = 1;
        try {
          report_status_code = uni.getStorageSync(Report_Status);
        } catch (e22) {
          report_status_code = 1;
        }
        if (report_status_code === "") {
          report_status_code = 1;
        }
        typeof done === "function" && done({
          enable: report_status_code
        });
      }
    });
  };
  const uni_cloud_config = () => {
    return define_process_env_UNI_STAT_UNI_CLOUD_default || {};
  };
  const get_space = (config2) => {
    const uniCloudConfig = uni_cloud_config();
    const { spaceId, provider, clientSecret, secretKey, secretId } = uniCloudConfig;
    const space_type = ["tcb", "tencent", "aliyun", "alipay", "private", "dcloud"];
    const is_provider = space_type.indexOf(provider) !== -1;
    const is_aliyun = provider === "aliyun" && spaceId && clientSecret;
    const is_tcb = (provider === "tcb" || provider === "tencent") && spaceId;
    const is_alipay = provider === "alipay" && spaceId && secretKey && secretId;
    const is_private = provider === "private" && spaceId && clientSecret;
    const is_dcloud = provider === "dcloud" && spaceId && clientSecret;
    if (is_provider && (is_aliyun || is_tcb || is_alipay || is_private || is_dcloud)) {
      return uniCloudConfig;
    } else {
      if (config2 && config2.spaceId) {
        return config2;
      }
    }
    return null;
  };
  const get_report_Interval = (defaultTime) => {
    let time2 = uniStatisticsConfig.reportInterval;
    if (Number(time2) === 0)
      return 0;
    time2 = time2 || defaultTime;
    let reg = /(^[1-9]\d*$)/;
    if (!reg.test(time2))
      return defaultTime;
    return Number(time2);
  };
  const is_push_clientid = () => {
    if (uniStatisticsConfig.collectItems) {
      const ClientID = uniStatisticsConfig.collectItems.uniPushClientID;
      return typeof ClientID === "boolean" ? ClientID : false;
    }
    return false;
  };
  const is_page_report = () => {
    if (uniStatisticsConfig.collectItems) {
      const statPageLog = uniStatisticsConfig.collectItems.uniStatPageLog;
      if (statPageLog === void 0)
        return true;
      return typeof statPageLog === "boolean" ? statPageLog : true;
    }
    return true;
  };
  const IS_HANDLE_DEVECE_ID = "is_handle_device_id";
  const is_handle_device = () => {
    let isHandleDevice = dbGet(IS_HANDLE_DEVECE_ID) || "";
    dbSet(IS_HANDLE_DEVECE_ID, "1");
    return isHandleDevice === "1";
  };
  const FIRST_VISIT_TIME_KEY = "__first__visit__time";
  const LAST_VISIT_TIME_KEY = "__last__visit__time";
  const get_time = () => {
    return parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3);
  };
  const get_first_visit_time = () => {
    const timeStorge = dbGet(FIRST_VISIT_TIME_KEY);
    let time2 = 0;
    if (timeStorge) {
      time2 = timeStorge;
    } else {
      time2 = get_time();
      dbSet(FIRST_VISIT_TIME_KEY, time2);
      dbRemove(LAST_VISIT_TIME_KEY);
    }
    return time2;
  };
  const get_last_visit_time = () => {
    const timeStorge = dbGet(LAST_VISIT_TIME_KEY);
    let time2 = 0;
    if (timeStorge) {
      time2 = timeStorge;
    }
    dbSet(LAST_VISIT_TIME_KEY, get_time());
    return time2;
  };
  const PAGE_RESIDENCE_TIME = "__page__residence__time";
  let First_Page_Residence_Time = 0;
  let Last_Page_Residence_Time = 0;
  const set_page_residence_time = () => {
    First_Page_Residence_Time = get_time();
    dbSet(PAGE_RESIDENCE_TIME, First_Page_Residence_Time);
    return First_Page_Residence_Time;
  };
  const get_page_residence_time = () => {
    Last_Page_Residence_Time = get_time();
    First_Page_Residence_Time = dbGet(PAGE_RESIDENCE_TIME);
    return Last_Page_Residence_Time - First_Page_Residence_Time;
  };
  const TOTAL_VISIT_COUNT = "__total__visit__count";
  const get_total_visit_count = () => {
    const timeStorge = dbGet(TOTAL_VISIT_COUNT);
    let count = 1;
    if (timeStorge) {
      count = timeStorge;
      count++;
    }
    dbSet(TOTAL_VISIT_COUNT, count);
    return count;
  };
  const FIRST_TIME = "__first_time";
  const set_first_time = () => {
    let time2 = get_time();
    const timeStorge = dbSet(FIRST_TIME, time2);
    return timeStorge;
  };
  const get_residence_time = (type) => {
    let residenceTime = 0;
    const first_time = dbGet(FIRST_TIME);
    const last_time = get_time();
    if (first_time !== 0) {
      residenceTime = last_time - first_time;
    }
    residenceTime = residenceTime < 1 ? 1 : residenceTime;
    if (type === "app") {
      let overtime = residenceTime > APP_PVER_TIME ? true : false;
      return {
        residenceTime,
        overtime
      };
    }
    if (type === "page") {
      let overtime = residenceTime > PAGE_PVER_TIME ? true : false;
      return {
        residenceTime,
        overtime
      };
    }
    return {
      residenceTime
    };
  };
  const eport_Interval = get_report_Interval(OPERATING_TIME);
  let statData = {
    uuid: get_uuid(),
    // 设备标识
    ak: stat_config.appid,
    // uni-app 应用 Appid
    p: "",
    // 手机系统，客户端平台
    ut: get_platform_name(),
    // 平台类型
    mpn: get_pack_name(),
    // 原生平台包名、小程序 appid
    usv: STAT_VERSION,
    // 统计 sdk 版本
    v: get_version(),
    // 应用版本，仅app
    ch: get_channel(),
    // 渠道信息
    cn: "",
    // 国家
    pn: "",
    // 省份
    ct: "",
    // 城市
    t: get_time(),
    // 上报数据时的时间戳
    tt: "",
    brand: sys.brand || "",
    // 手机品牌
    md: sys.model,
    // 手机型号
    sv: "",
    // 手机系统版本
    mpsdk: sys.SDKVersion || "",
    // x程序 sdk version
    mpv: sys.version || "",
    // 小程序平台版本 ，如微信、支付宝
    lang: sys.language,
    // 语言
    pr: sys.pixelRatio,
    // pixelRatio 设备像素比
    ww: sys.windowWidth,
    // windowWidth 可使用窗口宽度
    wh: sys.windowHeight,
    // windowHeight 可使用窗口高度
    sw: sys.screenWidth,
    // screenWidth 屏幕宽度
    sh: sys.screenHeight
    // screenHeight 屏幕高度
  };
  if (sys.platform) {
    switch (sys.platform) {
      case "android":
        statData.p = "a";
        break;
      case "ios":
        statData.p = "i";
        break;
      case "harmonyos":
        statData.p = "h";
        break;
    }
  }
  if (sys.system) {
    statData.sv = sys.system.replace(/(Android|iOS)\s/, "");
  }
  class Report {
    constructor() {
      this.self = "";
      this.__licationShow = false;
      this.__licationHide = false;
      this.statData = statData;
      this._navigationBarTitle = {
        config: "",
        page: "",
        report: "",
        lt: ""
      };
      this._query = {};
      let registerInterceptor = typeof uni.addInterceptor === "function";
      if (registerInterceptor) {
        this.addInterceptorInit();
        this.interceptLogin();
        this.interceptShare(true);
        this.interceptRequestPayment();
      }
    }
    addInterceptorInit() {
      let self2 = this;
      uni.addInterceptor("setNavigationBarTitle", {
        invoke(args) {
          self2._navigationBarTitle.page = args.title;
        }
      });
    }
    interceptLogin() {
      let self2 = this;
      uni.addInterceptor("login", {
        complete() {
          self2._login();
        }
      });
    }
    interceptShare(type) {
      let self2 = this;
      if (!type) {
        self2._share();
        return;
      }
      uni.addInterceptor("share", {
        success() {
          self2._share();
        },
        fail() {
          self2._share();
        }
      });
    }
    interceptRequestPayment() {
      let self2 = this;
      uni.addInterceptor("requestPayment", {
        success() {
          self2._payment("pay_success");
        },
        fail() {
          self2._payment("pay_fail");
        }
      });
    }
    _login() {
      this.sendEventRequest(
        {
          key: "login"
        },
        0
      );
    }
    _share() {
      this.sendEventRequest(
        {
          key: "share"
        },
        0
      );
    }
    _payment(key2) {
      this.sendEventRequest(
        {
          key: key2
        },
        0
      );
    }
    /**
     * 进入应用触发
     */
    applicationShow() {
      if (this.__licationHide) {
        const time2 = get_residence_time("app");
        if (time2.overtime) {
          let lastPageRoute = uni.getStorageSync("_STAT_LAST_PAGE_ROUTE");
          let options = {
            path: lastPageRoute,
            scene: this.statData.sc,
            cst: 2
          };
          this.sendReportRequest(options);
        } else {
          const scene = get_scene();
          if (scene !== this.statData.sc) {
            let lastPageRoute = uni.getStorageSync("_STAT_LAST_PAGE_ROUTE");
            let options = {
              path: lastPageRoute,
              scene,
              cst: 2
            };
            this.sendReportRequest(options);
          }
        }
        this.__licationHide = false;
      }
    }
    /**
     * 离开应用触发
     * @param {Object} self
     * @param {Object} type
     */
    applicationHide(self2, type) {
      if (!self2) {
        self2 = get_page_vm();
      }
      this.__licationHide = true;
      const time2 = get_residence_time();
      const route = get_page_route(self2);
      uni.setStorageSync("_STAT_LAST_PAGE_ROUTE", route);
      this.sendHideRequest(
        {
          urlref: route,
          urlref_ts: time2.residenceTime
        },
        type
      );
      set_first_time();
    }
    /**
     * 进入页面触发
     */
    pageShow(self2) {
      this._navigationBarTitle = {
        config: "",
        page: "",
        report: "",
        lt: ""
      };
      const route = get_page_route(self2);
      const routepath = get_route(self2);
      this._navigationBarTitle.config = get_page_name(routepath);
      if (this.__licationShow) {
        set_first_time();
        uni.setStorageSync("_STAT_LAST_PAGE_ROUTE", route);
        this.__licationShow = false;
        return;
      }
      const time2 = get_residence_time("page");
      if (time2.overtime) {
        let options = {
          path: route,
          scene: this.statData.sc,
          cst: 3
        };
        this.sendReportRequest(options);
      }
      set_first_time();
    }
    /**
     * 离开页面触发
     */
    pageHide(self2) {
      if (!this.__licationHide) {
        const time2 = get_residence_time("page");
        let route = get_page_route(self2);
        let lastPageRoute = uni.getStorageSync("_STAT_LAST_PAGE_ROUTE");
        if (!lastPageRoute) {
          lastPageRoute = route;
        }
        uni.setStorageSync("_STAT_LAST_PAGE_ROUTE", route);
        this.sendPageRequest({
          url: route,
          urlref: lastPageRoute,
          urlref_ts: time2.residenceTime
        });
        return;
      }
    }
    /**
     * 发送请求,应用维度上报
     * @param {Object} options 页面信息
     * @param {Boolean} type 是否立即上报
     */
    sendReportRequest(options, type) {
      this._navigationBarTitle.lt = "1";
      this._navigationBarTitle.config = get_page_name(options.path);
      let is_opt = options.query && JSON.stringify(options.query) !== "{}";
      let query = is_opt ? "?" + JSON.stringify(options.query) : "";
      const last_time = get_last_visit_time();
      if (last_time !== 0 || !last_time) {
        const odid = get_odid();
        {
          const have_device = is_handle_device();
          if (!have_device) {
            this.statData.odid = odid;
          }
        }
      }
      Object.assign(this.statData, {
        lt: "1",
        url: options.path + query || "",
        t: get_time(),
        sc: get_scene(options.scene),
        fvts: get_first_visit_time(),
        lvts: last_time,
        tvc: get_total_visit_count(),
        // create session type  上报类型 ，1 应用进入 2.后台30min进入 3.页面30min进入
        cst: options.cst || 1
      });
      if (get_platform_name() === "n") {
        this.getProperty(type);
      } else {
        this.getNetworkInfo(type);
      }
    }
    /**
     * 发送请求,页面维度上报
     * @param {Object} opt
     */
    sendPageRequest(opt) {
      let { url, urlref, urlref_ts } = opt;
      this._navigationBarTitle.lt = "11";
      let options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: "11",
        ut: this.statData.ut,
        url,
        tt: this.statData.tt,
        urlref,
        urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time()
      };
      this.request(options);
    }
    /**
     * 进入后台上报数据
     * @param {Object} opt
     * @param {Object} type
     */
    sendHideRequest(opt, type) {
      let { urlref, urlref_ts } = opt;
      let options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: "3",
        ut: this.statData.ut,
        urlref,
        urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time()
      };
      this.request(options, type);
    }
    /**
     * 自定义事件上报
     */
    sendEventRequest({ key: key2 = "", value = "" } = {}) {
      let routepath = "";
      try {
        routepath = get_route();
      } catch (error2) {
        const launch_options = dbGet("__launch_options");
        routepath = launch_options.path;
      }
      this._navigationBarTitle.config = get_page_name(routepath);
      this._navigationBarTitle.lt = "21";
      let options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: "21",
        ut: this.statData.ut,
        url: routepath,
        ch: this.statData.ch,
        e_n: key2,
        e_v: typeof value === "object" ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: get_time()
      };
      this.request(options);
    }
    sendPushRequest(options, cid) {
      let time2 = get_time();
      const statData2 = {
        lt: "101",
        cid,
        t: time2,
        ut: this.statData.ut
      };
      const stat_data = handle_data({
        101: [statData2]
      });
      let optionsData = {
        usv: STAT_VERSION,
        //统计 SDK 版本号
        t: time2,
        //发送请求时的时间戮
        requests: stat_data
      };
      if (get_platform_name() === "n" && this.statData.p === "a") {
        setTimeout(() => {
          this.sendRequest(optionsData);
        }, 200);
        return;
      }
      this.sendRequest(optionsData);
    }
    /**
     * 获取wgt资源版本
     */
    getProperty(type) {
      plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
        this.statData.v = wgtinfo.version || "";
        this.getNetworkInfo(type);
      });
    }
    /**
     * 获取网络信息
     */
    getNetworkInfo(type) {
      uni.getNetworkType({
        success: (result) => {
          this.statData.net = result.networkType;
          this.getLocation(type);
        }
      });
    }
    /**
     * 获取位置信息
     */
    getLocation(type) {
      if (stat_config.getLocation) {
        uni.getLocation({
          type: "wgs84",
          geocode: true,
          success: (result) => {
            if (result.address) {
              this.statData.cn = result.address.country;
              this.statData.pn = result.address.province;
              this.statData.ct = result.address.city;
            }
            this.statData.lat = result.latitude;
            this.statData.lng = result.longitude;
            this.request(this.statData, type);
          }
        });
      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData, type);
      }
    }
    /**
     * 发送请求
     * @param {Object} data 上报数据
     * @param {Object} type 类型
     */
    request(data2, type) {
      let time2 = get_time();
      const title = this._navigationBarTitle;
      Object.assign(data2, {
        ttn: title.page,
        ttpj: title.config,
        ttc: title.report
      });
      let uniStatData = dbGet("__UNI__STAT__DATA") || {};
      if (!uniStatData[data2.lt]) {
        uniStatData[data2.lt] = [];
      }
      uniStatData[data2.lt].push(data2);
      dbSet("__UNI__STAT__DATA", uniStatData);
      let page_residence_time = get_page_residence_time();
      if (page_residence_time < eport_Interval && !type)
        return;
      set_page_residence_time();
      const stat_data = handle_data(uniStatData);
      let optionsData = {
        usv: STAT_VERSION,
        //统计 SDK 版本号
        t: time2,
        //发送请求时的时间戮
        requests: stat_data
      };
      dbRemove("__UNI__STAT__DATA");
      if (get_platform_name() === "n" && this.statData.p === "a") {
        setTimeout(() => {
          this.sendRequest(optionsData);
        }, 200);
        return;
      }
      this.sendRequest(optionsData);
    }
    getIsReportData() {
      return is_report_data();
    }
    /**
     * 数据上报
     * @param {Object} optionsData 需要上报的数据
     */
    sendRequest(optionsData) {
      {
        if (!uni.__stat_uniCloud_space) {
          console.error(
            "应用未关联服务空间，统计上报失败，请在uniCloud目录右键关联服务空间."
          );
          return;
        }
        const uniCloudObj = uni.__stat_uniCloud_space.importObject(
          "uni-stat-receiver",
          {
            customUI: true
          }
        );
        uniCloudObj.report(optionsData).then(() => {
        }).catch((err2) => {
        });
      }
    }
    /**
     * h5 请求
     */
    imageRequest(data2) {
      this.getIsReportData().then(() => {
        let image2 = new Image();
        let options = get_sgin(get_encodeURIComponent_options(data2)).options;
        image2.src = STAT_H5_URL + "?" + options;
      });
    }
    sendEvent(key2, value) {
      if (calibration(key2, value))
        return;
      if (key2 === "title") {
        this._navigationBarTitle.report = value;
        return;
      }
      this.sendEventRequest(
        {
          key: key2,
          value: typeof value === "object" ? JSON.stringify(value) : value
        },
        1
      );
    }
  }
  class Stat extends Report {
    static getInstance() {
      if (!uni.__stat_instance) {
        uni.__stat_instance = new Stat();
      }
      {
        let space2 = get_space(_r.config);
        if (!uni.__stat_uniCloud_space) {
          if (space2 && Object.keys(space2).length !== 0) {
            let spaceData = {
              provider: space2.provider,
              spaceId: space2.spaceId,
              clientSecret: space2.clientSecret
            };
            if (space2.endpoint) {
              spaceData.endpoint = space2.endpoint;
            }
            if (space2.provider === "alipay") {
              spaceData.secretKey = space2.secretKey;
              spaceData.accessKey = space2.accessKey || space2.secretId;
              spaceData.spaceAppId = space2.spaceAppId || space2.appId;
            }
            uni.__stat_uniCloud_space = _r.init(spaceData);
          } else {
            console.error("应用未关联服务空间，请在uniCloud目录右键关联服务空间");
          }
        }
      }
      return uni.__stat_instance;
    }
    constructor() {
      super();
    }
    /**
     * 获取推送id
     */
    pushEvent(options) {
      const ClientID = is_push_clientid();
      if (uni.getPushClientId && ClientID) {
        uni.getPushClientId({
          success: (res2) => {
            const cid = res2.cid || false;
            if (cid) {
              this.sendPushRequest(options, cid);
            }
          }
        });
      }
    }
    /**
     * 进入应用
     * @param {Object} options 页面参数
     * @param {Object} self	当前页面实例
     */
    launch(options, self2) {
      set_page_residence_time();
      this.__licationShow = true;
      dbSet("__launch_options", options);
      options.cst = 1;
      this.sendReportRequest(options, true);
    }
    load(options, self2) {
      this.self = self2;
      this._query = options;
    }
    appHide(self2) {
      this.applicationHide(self2, true);
    }
    appShow(self2) {
      this.applicationShow(self2);
    }
    show(self2) {
      this.self = self2;
      if (get_page_types(self2) === "page") {
        const isPageReport = is_page_report();
        if (isPageReport) {
          this.pageShow(self2);
        }
      }
      if (get_platform_name() === "h5" || get_platform_name() === "n") {
        if (get_page_types(self2) === "app") {
          this.appShow();
        }
      }
    }
    hide(self2) {
      this.self = self2;
      if (get_page_types(self2) === "page") {
        const isPageReport = is_page_report();
        if (isPageReport) {
          this.pageHide(self2);
        }
      }
      if (get_platform_name() === "h5" || get_platform_name() === "n") {
        if (get_page_types(self2) === "app") {
          this.appHide();
        }
      }
    }
    error(em) {
      let emVal = "";
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      let route = "";
      try {
        route = get_route();
      } catch (e2) {
        route = "";
      }
      let options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: "31",
        url: route,
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3)
      };
      this.request(options);
    }
  }
  Stat.getInstance();
  function main() {
    {
      {
        uni.report = function(type, options) {
        };
      }
    }
  }
  main();
  function createApp() {
    const app2 = vue.createVueApp(App);
    app2.config.globalProperties.$adpid = "1111111111";
    app2.config.globalProperties.useDict = useDict;
    app2.config.globalProperties.useTextDict = useTextDict;
    app2.config.globalProperties.parseTime = parseTime;
    app2.config.globalProperties.resetForm = resetForm;
    app2.config.globalProperties.handleTree = handleTree;
    app2.config.globalProperties.addDateRange = addDateRange;
    app2.config.globalProperties.selectDictLabel = selectDictLabel;
    app2.config.globalProperties.selectDictLabels = selectDictLabels;
    app2.config.globalProperties.tansParams = tansParams;
    app2.config.globalProperties.uniappRules = uniappRules;
    app2.config.globalProperties.$backgroundAudioData = {
      playing: false,
      playTime: 0,
      formatedPlayTime: "00:00:00"
    };
    app2.use(store);
    app2.use(createPinia());
    app2.use(plugins);
    directive(app2);
    return {
      app: app2,
      Vuex: index,
      // 如果 nvue 使用 vuex 的各种map工具方法时，必须 return Vuex
      Pinia
      // 此处必须将 Pinia 返回
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
