<script setup>
import { useRoute } from 'vue-router'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'

const route = useRoute()
const servicesList = {
  txt:'COMPANY',
  title:'採用情報',
  path:'/recruit',
  child:["中途採用情報","新卒採用情報"]
}
</script>

<template>
   <div class="services">
    <div class="services-content">
      <Breadcrumb :List="servicesList"></Breadcrumb>
      <div class="main-content bg-img">
        <div class="content-wrapper bx">
          <div class="content-box">
            <div class="route-nav">
              <router-link class="item" :class="{link_active: '/recruit/child1' === route.path}" to="/recruit/child1">中途採用情報</router-link>
              <router-link class="item" :class="{link_active: '/recruit/child2' === route.path}" to="/recruit/child2">新卒採用情報</router-link>
            </div>
            <!-- 二级路由 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content{
  width: 100%;
  padding: 0 25px;
  overflow: hidden;
  box-sizing: border-box;
  &.bg-img{
    background: url('../../assets/img/download.gif')repeat;
  }
  .content-wrapper{
    background-color: #fff;
    &.bx{
      max-width: 1120px;
      margin: 0 auto;
    }
    @media all and (min-width: 770px){
      .content-box{
        padding: 20px 60px 100px;
        .route-nav{
          text-align: center;
          height: 55px;
          margin: 0 auto 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          .item{
            height: 100%;
            width: 25%;
            border-right: 1px solid #fff;
            transition: all .5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #111;
            background: #e8e8e8;
            &:first-child{
              border-radius: 30px 0 0 30px;
            }
            &:last-child{
              border-radius: 0 30px 30px 0;
            }
          }
          .link_active{
            color: #fff;
            background: #888;
          }
        }
      }
    }
    @media all and (max-width: 769px){
      padding: 20px 20px 60px;
      .content-box{
        .route-nav{
          text-align: center;
          margin: 0 auto 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .item{
            height: 100%;
            width: 100%;
            border-right: 1px solid #fff;
            transition: all .5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #111;
            background: #e8e8e8;
            line-height: 44px;
          }
          .link_active{
            color: #fff;
            background: #888;
          }
        }
      }
    }
  }
}
</style>