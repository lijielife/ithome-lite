/* eslint-disable */
import Vue from 'vue'
import { platform } from './index'

export default platform === 'h5' ? {
  startPullDownRefresh () {
    console.log('startPullDownRefresh')
  },
  showNavigationBarLoading () {
    Vue.prototype.$loading('加载中')
  },
  hideNavigationBarLoading () {
    if (!document.querySelector('.lx-load-mark')) return
    Vue.prototype.$loading.close()
  },
  showToast ({ title }) {
    Vue.prototype.$toast.center(title)
  },
  stopPullDownRefresh () {
    console.log('stopPullDownRefresh')
  }
} : wx
