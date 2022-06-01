<script>
	export default {
    // uni-app 全局变量的几种实现方式
    // https://ask.dcloud.net.cn/article/35021
    globalData: {
      // 赋值：getApp().globalData.text = 'test'
      // 取值：console.log(getApp().globalData.text) // 'test'
    },
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
  
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
		background-color: #f8f8f8;
    line-height: 1.5;
	}
	/* #endif */
  
  @supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
    body {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
  
  .footer {
    .copyright {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10rpx 0;
      font-size: 24rpx;
      color: #aaa;
    }
    
    .email {
      margin-left: 10rpx;
    }
  }
</style>
