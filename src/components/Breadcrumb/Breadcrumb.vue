<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"


const route = useRoute()
const list = defineProps({
  List:Object
})
console.log(route.path)

const path = computed(()=>{
  let path = route.path
  return parseInt(path.slice(-1))
})
</script>

<template>
  <div class="particles-container">
    <img class="particles-img" src="../../assets/img/top.png" alt="">
    <div class="title">
      <span class="txt">
        {{ List.txt }}
      </span>
      {{ List.title }}
    </div>
    <div class="bread">
      <div class="bread-nav-wrapper bx">
        <el-breadcrumb class="bread-breadcrumb" separator=">">
          <el-breadcrumb-item class="bread-breadcrumb-item" to="/">
            <el-icon class="bread-icon"><HomeFilled /></el-icon>
          </el-breadcrumb-item>
          <el-breadcrumb-item class="bread-breadcrumb-item" :to="List.path">
            {{ List.title}}
          </el-breadcrumb-item>
          <el-breadcrumb-item class="bread-breadcrumb-item" v-if="List.child">
            {{ List.child[path-1] }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@media all and (min-width: 1080px){
  .particles-container{
    width: 100%;
    height: 320px;
    background: #504d4b;
    overflow: hidden;
    position: relative;
    .particles-img{
      width: 100%;
      height: 100%;
    }
    .title{
      width: 500px;
      position: absolute;
      z-index: 2;
      top: 21%;
      left: 50%;
      margin-left: -250px;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.7;
      color: #fff;
      text-align: center;
      letter-spacing: .06em;
      .txt{
        display: block;
        font-family: Roboto Condensed,sans-serif;
        font-weight: 700;
        font-size: 46px;
        letter-spacing: .06em;
      }
    }
    .bread{
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 25px;
      .bread-nav-wrapper{
        height: 70px;
        background: #fff;
        &.bx{
          max-width: 1120px;
          margin: 0 auto;
        }
        .bread-breadcrumb{
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 60px;
          .bread-breadcrumb-item{
            font-style: normal;
            padding: 0 5px;
            .bread-icon{
              font-size: 18px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}

@media all and (min-width: 770px) and (max-width: 1079px){
  .particles-container{
    width: 100%;
    height: 280px;
    background: #504d4b;
    overflow: hidden;
    position: relative;
    .particles-img{
      width: 100%;
      height: 100%;
    }
    .title{
      width: 500px;
      position: absolute;
      z-index: 2;
      top: 21%;
      left: 50%;
      margin-left: -250px;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.7;
      color: #fff;
      text-align: center;
      letter-spacing: .06em;
      .txt{
        display: block;
        font-family: Roboto Condensed,sans-serif;
        font-weight: 700;
        font-size: 42px;
        letter-spacing: .06em;
      }
    }
    .bread{
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 25px;
      .bread-nav-wrapper{
        height: 70px;
        background: #fff;
        &.bx{
          max-width: 1120px;
          margin: 0 auto;
        }
        .bread-breadcrumb{
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 60px;
          .bread-breadcrumb-item{
            font-style: normal;
            padding: 0 5px;
            .bread-icon{
              font-size: 18px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}

@media all and (max-width: 769px){
  .particles-container{
    width: 100%;
    height: 240px;
    background: #504d4b;
    overflow: hidden;
    position: relative;
    .particles-img{
      width: 100%;
      height: 100%;
    }
    .title{
      width: 500px;
      position: absolute;
      z-index: 2;
      top: 21%;
      left: 50%;
      margin-left: -250px;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.7;
      color: #fff;
      text-align: center;
      letter-spacing: .06em;
      .txt{
        display: block;
        font-family: Roboto Condensed,sans-serif;
        font-weight: 700;
        font-size: 36px;
        letter-spacing: .06em;
      }
    }
    .bread{
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 25px;
      .bread-nav-wrapper{
        height: 70px;
        background: #fff;
        &.bx{
          max-width: 1120px;
          margin: 0 auto;
        }
        .bread-breadcrumb{
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 10px;
          .bread-breadcrumb-item{
            font-style: normal;
            padding: 0 5px;
            font-size: 12px;
            .bread-icon{
              font-size: 12px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>