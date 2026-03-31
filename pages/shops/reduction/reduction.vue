<template>
  <view class="page-container">
    <!-- 搜索区域 -->
    <view class="search-section">
      <view class="search-header" @click="toggleSearch">
        <text class="search-title">筛选条件</text>
        <text class="search-icon">{{ showSearch ? '收起' : '展开' }}</text>
      </view>
      <view class="search-form" v-show="showSearch">
        <view class="form-row">
          <view class="form-item">
            <text class="label">标题</text>
            <input class="uni-input" v-model="queryParams.name" placeholder="请输入标题" />
          </view>
          <view class="form-item">
            <text class="label">内容简介</text>
            <input class="uni-input" v-model="queryParams.full" placeholder="请输入内容简介" />
          </view>
        </view>
        <view class="form-row">
          <view class="form-item">
            <text class="label">企业编码</text>
            <input class="uni-input" v-model="queryParams.compCode" placeholder="请输入企业编码" />
          </view>
          <view class="form-item">
            <text class="label">店铺ID</text>
            <input class="uni-input" v-model="queryParams.storeId" placeholder="请输入店铺ID" />
          </view>
        </view>
        <view class="form-row">
          <view class="form-item">
            <text class="label">店铺名称</text>
            <input class="uni-input" v-model="queryParams.storeName" placeholder="请输入店铺名称" />
          </view>
          <view class="form-item button-group">
            <button class="search-btn" type="primary" size="mini" @click="handleQuery">搜索</button>
            <button class="reset-btn" size="mini" @click="resetQuery">重置</button>
          </view>
        </view>
      </view>
    </view>

    <!-- 操作栏 -->
    <view class="action-bar">
      <button class="action-btn add-btn" type="primary" size="mini" @click="handleAdd">新增</button>
      <button class="action-btn export-btn" type="default" size="mini" @click="handleExport">导出</button>
    </view>

    <!-- 列表区域 -->
    <view class="list-section" v-if="reductionList.length > 0">
      <view class="list-item" v-for="item in reductionList" :key="item.id">
        <view class="item-content">
          <view class="item-title">{{ item.name }}</view>
          <view class="item-desc">{{ item.full }}</view>
          <view class="item-info">
            <text class="info-text">店铺ID：{{ item.storeId }}</text>
            <text class="info-text">店铺名称：{{ item.storeName }}</text>
          </view>
        </view>
        <view class="item-actions">
          <text class="action-text edit" @click="handleUpdate(item)">修改</text>
          <text class="action-text delete" @click="handleDelete(item)">删除</text>
        </view>
      </view>
    </view>
    <view class="empty-state" v-else>
      <text>暂无数据</text>
    </view>

    <!-- 分页组件 -->
    <uni-pagination 
      v-if="total > 0"
      :total="total" 
      :current="queryParams.pageNum"
      :pageSize="queryParams.pageSize"
      @change="onPageChange"
      show-icon
    />

    <!-- 新增/编辑弹窗 -->
    <uni-popup ref="popup" type="center" :mask-click="false">
      <view class="popup-container">
        <view class="popup-header">{{ title }}</view>
        <view class="popup-content">
          <uni-forms ref="form" :modelValue="form" :rules="rules" label-width="80px">
            <uni-forms-item label="店铺" name="storeId">
              <picker @change="onStoreChange" :value="storeIndex" :range="storeList" range-key="name">
                <view class="picker-value">{{ form.storeName || '请选择店铺' }}</view>
              </picker>
            </uni-forms-item>
            <uni-forms-item label="标题" name="name">
              <input class="uni-input" v-model="form.name" placeholder="请输入标题" />
            </uni-forms-item>
            <uni-forms-item label="内容简介" name="full">
              <textarea class="uni-textarea" v-model="form.full" placeholder="请输入内容简介" rows="3" />
            </uni-forms-item>
          </uni-forms>
        </view>
        <view class="popup-footer">
          <button class="popup-btn cancel" @click="cancel">取消</button>
          <button class="popup-btn confirm" type="primary" @click="submitForm">确定</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import { listReduction, getReduction, delReduction, addReduction, updateReduction } from "@/api/app/reduction"
import { listMyStore } from "@/api/app/storelist"

export default {
  data() {
    return {
      storeList: [],       // 店铺列表
      storeIndex: 0,       // picker选中索引
      loading: false,
      showSearch: true,    // 控制搜索区域显示
      total: 0,
      reductionList: [],
      title: "",
      open: false,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: null,
        full: null,
        compCode: null,
        storeId: null,
        storeName: null
      },
      form: {
        id: null,
        name: "",
        full: "",
        storeId: null,
        storeName: null
      },
      rules: {
        name: {
          required: true,
          message: "标题不能为空",
          trigger: "blur"
        },
        storeId: {
          required: true,
          message: "请选择店铺",
          trigger: "change"
        }
      }
    }
  },
  created() {
    this.getList()
    this.getStoreList()
  },
  methods: {
    // 获取店铺列表
    getStoreList() {
      listMyStore().then(res => {
        this.storeList = res.data || []
      }).catch(() => {
        uni.showToast({ title: '获取店铺列表失败', icon: 'none' })
      })
    },
    // 获取公告列表
    getList() {
      this.loading = true
      uni.showLoading({ title: '加载中...', mask: true })
      listReduction(this.queryParams).then(res => {
        this.reductionList = res.rows || []
        this.total = res.total || 0
      }).catch(err => {
        console.error(err)
        uni.showToast({ title: '获取列表失败', icon: 'none' })
      }).finally(() => {
        this.loading = false
        uni.hideLoading()
      })
    },
    // 切换搜索区域显示
    toggleSearch() {
      this.showSearch = !this.showSearch
    },
    // 搜索
    handleQuery() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    // 重置搜索
    resetQuery() {
      this.queryParams = {
        pageNum: 1,
        pageSize: 10,
        name: null,
        full: null,
        compCode: null,
        storeId: null,
        storeName: null
      }
      this.handleQuery()
    },
    // 分页变化
    onPageChange(e) {
      this.queryParams.pageNum = e.current
      this.getList()
    },
    // 新增
    handleAdd() {
      this.resetForm()
      this.title = "添加店铺公告"
      this.$refs.popup.open()
    },
    // 修改
    handleUpdate(row) {
      this.resetForm()
      getReduction(row.id).then(res => {
        this.form = res.data
        // 设置店铺picker索引
        const idx = this.storeList.findIndex(s => s.id === this.form.storeId)
        this.storeIndex = idx >= 0 ? idx : 0
        this.title = "修改店铺公告"
        this.$refs.popup.open()
      }).catch(() => {
        uni.showToast({ title: '获取详情失败', icon: 'none' })
      })
    },
    // 表单重置
    resetForm() {
      this.form = {
        id: null,
        name: "",
        full: "",
        storeId: null,
        storeName: null
      }
      this.storeIndex = 0
      this.$refs.form && this.$refs.form.clearValidate()
    },
    // 店铺选择变化
    onStoreChange(e) {
      const index = e.detail.value
      this.storeIndex = index
      const selected = this.storeList[index]
      if (selected) {
        this.form.storeId = selected.id
        this.form.storeName = selected.name
      } else {
        this.form.storeId = null
        this.form.storeName = null
      }
    },
    // 提交表单
    submitForm() {
      this.$refs.form.validate().then(valid => {
        if (!valid) return
        const api = this.form.id ? updateReduction : addReduction
        api(this.form).then(() => {
          uni.showToast({ title: this.form.id ? '修改成功' : '新增成功', icon: 'success' })
          this.$refs.popup.close()
          this.getList()
        }).catch(err => {
          uni.showToast({ title: '操作失败', icon: 'none' })
        })
      }).catch(err => {
        console.log('校验失败', err)
      })
    },
    // 取消弹窗
    cancel() {
      this.$refs.popup.close()
    },
    // 删除
    handleDelete(row) {
      const id = row.id
      uni.showModal({
        title: '提示',
        content: `是否确认删除店铺公告编号为"${id}"的数据项？`,
        success: (res) => {
          if (res.confirm) {
            delReduction(id).then(() => {
              uni.showToast({ title: '删除成功', icon: 'success' })
              this.getList()
            }).catch(() => {
              uni.showToast({ title: '删除失败', icon: 'none' })
            })
          }
        }
      })
    },
    // 导出
    handleExport() {
      uni.showLoading({ title: '导出中...' })
      // 假设导出接口返回文件流，通过uni.downloadFile处理
      // 实际根据项目API调整，这里模拟调用
      uni.request({
        url: '/app/reduction/export',
        method: 'POST',
        data: this.queryParams,
        responseType: 'arraybuffer',
        success: (res) => {
          const filePath = `${uni.env.CACHE_PATH}/reduction_${Date.now()}.xlsx`
          uni.saveFile({
            tempFilePath: res.data,
            filePath: filePath,
            success: () => {
              uni.showToast({ title: '导出成功', icon: 'success' })
              // 打开文档
              uni.openDocument({
                filePath: filePath,
                fail: () => {
                  uni.showToast({ title: '文件保存成功，请手动查看', icon: 'none' })
                }
              })
            },
            fail: () => {
              uni.showToast({ title: '保存失败', icon: 'none' })
            }
          })
        },
        fail: () => {
          uni.showToast({ title: '导出失败', icon: 'none' })
        },
        complete: () => {
          uni.hideLoading()
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20rpx;
  box-sizing: border-box;
}

/* 搜索区域 */
.search-section {
  background-color: #fff;
  border-radius: 16rpx;
  margin-bottom: 20rpx;
  overflow: hidden;
  .search-header {
    display: flex;
    justify-content: space-between;
    padding: 24rpx 30rpx;
    background-color: #fff;
    border-bottom: 1rpx solid #eee;
    .search-title {
      font-size: 28rpx;
      font-weight: bold;
      color: #333;
    }
    .search-icon {
      font-size: 24rpx;
      color: #999;
    }
  }
  .search-form {
    padding: 20rpx 30rpx;
    .form-row {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20rpx;
      .form-item {
        flex: 1;
        min-width: 200rpx;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        .label {
          display: block;
          font-size: 26rpx;
          color: #666;
          margin-bottom: 10rpx;
        }
        .uni-input {
          border: 1rpx solid #dcdfe6;
          border-radius: 8rpx;
          padding: 16rpx 20rpx;
          font-size: 28rpx;
          background-color: #fff;
        }
        &.button-group {
          display: flex;
          gap: 20rpx;
          .search-btn, .reset-btn {
            flex: 1;
            height: 70rpx;
            line-height: 70rpx;
            font-size: 28rpx;
            border-radius: 8rpx;
          }
          .reset-btn {
            background-color: #fff;
            border: 1rpx solid #dcdfe6;
            color: #606266;
          }
        }
      }
    }
  }
}

/* 操作栏 */
.action-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;
  .action-btn {
    width: 160rpx;
    height: 70rpx;
    line-height: 70rpx;
    font-size: 28rpx;
    border-radius: 8rpx;
    &.add-btn {
      background-color: #409eff;
      color: #fff;
    }
    &.export-btn {
      background-color: #e6a23c;
      color: #fff;
    }
  }
}

/* 列表区域 */
.list-section {
  .list-item {
    background-color: #fff;
    border-radius: 16rpx;
    margin-bottom: 20rpx;
    padding: 24rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-content {
      flex: 1;
      .item-title {
        font-size: 32rpx;
        font-weight: bold;
        color: #333;
        margin-bottom: 12rpx;
      }
      .item-desc {
        font-size: 28rpx;
        color: #666;
        margin-bottom: 16rpx;
        line-height: 1.4;
      }
      .item-info {
        display: flex;
        flex-wrap: wrap;
        gap: 20rpx;
        .info-text {
          font-size: 24rpx;
          color: #999;
        }
      }
    }
    .item-actions {
      display: flex;
      flex-direction: column;
      gap: 16rpx;
      margin-left: 20rpx;
      .action-text {
        font-size: 28rpx;
        padding: 8rpx 16rpx;
        border-radius: 8rpx;
        text-align: center;
        &.edit {
          color: #409eff;
          background-color: #ecf5ff;
        }
        &.delete {
          color: #f56c6c;
          background-color: #fef0f0;
        }
      }
    }
  }
}

.empty-state {
  text-align: center;
  padding: 100rpx 0;
  color: #999;
  font-size: 28rpx;
}

/* 分页组件样式覆盖 */
:deep(.uni-pagination) {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}

/* 弹窗样式 */
.popup-container {
  width: 600rpx;
  background-color: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  .popup-header {
    padding: 30rpx;
    text-align: center;
    font-size: 32rpx;
    font-weight: bold;
    border-bottom: 1rpx solid #eee;
  }
  .popup-content {
    padding: 30rpx;
    max-height: 60vh;
    overflow-y: auto;
    .picker-value {
      border: 1rpx solid #dcdfe6;
      border-radius: 8rpx;
      padding: 16rpx 20rpx;
      font-size: 28rpx;
      background-color: #fff;
      color: #333;
    }
    .uni-textarea {
      border: 1rpx solid #dcdfe6;
      border-radius: 8rpx;
      padding: 16rpx 20rpx;
      font-size: 28rpx;
      width: 100%;
      box-sizing: border-box;
    }
  }
  .popup-footer {
    display: flex;
    border-top: 1rpx solid #eee;
    .popup-btn {
      flex: 1;
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      font-size: 28rpx;
      border-radius: 0;
      background-color: #fff;
      &.cancel {
        color: #666;
        border-right: 1rpx solid #eee;
      }
      &.confirm {
        color: #409eff;
      }
    }
  }
}
</style>