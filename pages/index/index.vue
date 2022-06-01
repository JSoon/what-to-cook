<template>
	<view class="container">
    <!-- 标题 -->
    <view class="topic-box">
      <view>又在纠结做什么菜？</view>
      <view>“今天烹什么”，治好你的选择恐惧症！</view>
    </view>
    
    <!-- 快捷选项 -->
    <view class="shortcuts">
      <view v-for="item in [1, 2, 3]" :key="item" class="shortcut" @click="quickChooseHandler(item)">{{ item }}</view>
    </view>
    
    <!-- 表单 -->
    <view class="form-box">
      <view class="input-box">
        <input type="number" v-model.number="number" :min="1" :max="list.length" placeholder="请输入烹饪数量" />
      </view>
      
      <!-- 结果菜单 -->
      <view class="menu-box">
        <view v-for="item in results" :key="item">
          {{ item }}
        </view>
      </view>
      
      <view class="submit-box">
        <button type="default" @click="randomPickHandler">🎲</button>
      </view>
    </view>
    
    <view class="footer">
      <view class="copyright">
        © {{ new Date().getFullYear() }} jsoon
        <view class="email">📧 emailofsoon@qq.com</view>
      </view>
    </view>
	</view>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import _ from 'lodash'
  import list from './index.ts'
  console.log(list);
  
  // 数量
  const number = ref(1)
  // 随机结果
  const results = ref<string[] | null>()
  
  // 快速选择数量
  const quickChooseHandler = (amount: number) => {
    number.value = amount
  }
  
  // 随机选择
  const randomPickHandler = () => {
    uni.showLoading({
    	title: '🤤',
      mask: true
    });
    setTimeout(function () {
    	uni.hideLoading();
      results.value = _.sampleSize(list, number.value)
      console.log('results', results.value);
    }, 800);
  }
</script>

<style lang="less" scoped>
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: constant(safe-area-inset-bottom);
    bottom: env(safe-area-inset-bottom);
    left: 0;
    display: flex;
    flex-direction: column;
    line-height: 1.8;
  }
    
  .topic-box {
    margin: 40rpx 0 80rpx;
    font-size: 24rpx;
    text-align: center;
    color: #999;
  }
  
  .shortcuts {
    display: flex;
    justify-content: center;
    
    .shortcut {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100rpx;
      height: 100rpx;
      margin: 0 20rpx;
      background-color: #a4adba;
      border: 1rpx solid #9aa3af;
      border-radius: 28rpx;
      color: white;
      font-size: 40rpx;
    }
  }

  .form-box {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30rpx;
    
    .input-box {
      input {
        display: block;
        height: 80rpx;
        padding: 0 20rpx;
        background-color: white;
        border: 1rpx solid #eee;
        border-radius: 20rpx;
        text-align: center;
        font-size: 38rpx;
        color: #9aa3af;
      }
    }
  
    .menu-box {
      flex: 1;
      margin: 30rpx 0;
      text-align: center;
      font-size: 50rpx;
      color: #a4adba;
    }
    
    .submit-box {
      button {
        background-color: #a4adba;
        border: 1rpx solid #9aa3af;
        border-radius: 20rpx;
        
        &::after {
          border: none;
        }
      }
    }
  }
</style>
