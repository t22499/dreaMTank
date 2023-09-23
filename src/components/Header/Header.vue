<script setup>
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue';

const route = useRoute()
const router = useRouter()
const iconState = ref(true)

//判断当前路由
const goTo = (path)=>{
  router.replace(path)
}

const iconChange = ()=>{
  iconState.value = !iconState.value
}


</script>

<template>
  <header class="header">
    <router-link to="/" class="header-logo">
      <img class="logo-icon" src="../../assets/img/download.jpg">
      <span class="logo-txt">dreaMTank株式会社</span>
    </router-link>
    <nav class="nav">
      <router-link to="/home" class="nav-item" :class="{link_active:'/home' === route.path}" 
      @click="goTo('/home')">
        <span class="nav-item-title">ホーム</span>
        <span>Home</span>
      </router-link>
      <router-link to="/services" class="nav-item " :class="{link_active:'/services' === route.path}" 
      @click="goTo('/services')">
        <span class="nav-item-title">事業内容</span>
        <span>Services</span>
      </router-link>
      <router-link to="/company" class="nav-item " :class="{link_active:'/company' === route.path}" 
      @click="goTo('/company')">
        <span class="nav-item-title">企業情報</span>
        <span>Company</span>
      </router-link>
      <router-link to="/recruit" class="nav-item " :class="{link_active:'/recruit' === route.path}" 
      @click="goTo('/recruit')">
        <span class="nav-item-title">採用情報</span>
        <span>Recruit</span>
      </router-link>
      <router-link to="/contact" class="nav-item " :class="{link_active:'/contact' === route.path}" 
      @click="goTo('/contact')">
        <span class="nav-item-title">お問い合わせ</span>
        <span>contact</span>
      </router-link>
    </nav>
  </header>
  <div class="nav-toggle" @click="iconChange()">
    <div :class="{'nav_toggle_icon1':iconState,'nav_toggle_icon2':!iconState}">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <aside class="modal" :class="{modal_open:!iconState}">
    <nav class="modal-nav">
      <router-link class="modal-nav-item" to="/home" :class="{link_active:'/home' === route.path}"
      @click="goTo('/home')">
        <span class="modal-nav-item-title">ホーム</span>
        <span>Home</span>
      </router-link>
      <router-link class="modal-nav-item" to="/services" :class="{link_active:'/services' === route.path}"
      @click="goTo('/services')">
        <span class="modal-nav-item-title">事業内容</span>
        <span>Services</span>
      </router-link>
      <router-link class="modal-nav-item" to="/company" :class="{link_active:'/company' === route.path}"
      @click="goTo('/company')">
        <span class="modal-nav-item-title">企業情報</span>
        <span>Company</span>
      </router-link>
      <router-link class="modal-nav-item" to="/recruit" :class="{link_active:'/recruit' === route.path}"
      @click="goTo('/recruit')">
        <span class="modal-nav-item-title">採用情報</span>
        <span>Recruit</span>
      </router-link>
      <router-link class="modal-nav-item" to="/contact" :class="{link_active:'/contact' === route.path}"
      @click="goTo('/contact')">
        <span class="modal-nav-item-title"></span>
        <span></span>
      </router-link>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
@media all and (min-width: 1080px){
  .nav-toggle{
    display: none;
  }
  .modal{
    display: none;
  }
  .header{
    position: sticky;
    display: flex;
    background: linear-gradient(180deg,#fff 0,#f3f3f3);
    overflow: hidden;
    height: 70px;
    top: 0;
    z-index: 100;
    justify-content:space-around;
    .header-logo{
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .logo-icon{
        border-radius: 100%;
        margin-right: 6px;
      }
      .logo-txt{
        font-size: 24px;
        font-weight: 700;
        color: #111;
      }
    }
    .nav{
      display: flex;
      .nav-item{
        display: flex;
        width: 130px;
        flex-direction: column;
        padding: 20px 0;
        align-items: center;
        justify-content: center;
        &.link_active{
          background-color: #111;
          color: #fff
        }
      }
      .nav-item:hover{
        background-color: #111;
        color: #fff
      }
    }
  }

}
@media all and (min-width: 770px) and (max-width: 1079px){
  .nav-toggle{
    display: none;
  }
  .modal{
    display: none;
  }
  .header{
    position: sticky;
    display: flex;
    background: linear-gradient(180deg,#fff 0,#f3f3f3);
    overflow: hidden;
    height: 70px;
    top: 0;
    z-index: 100;
    justify-content:space-around;
    .header-logo{
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .logo-icon{
        border-radius: 100%;
        margin-right: 6px;
      }
      .logo-txt{
        font-size: 24px;
        font-weight: 700;
        color: #111;
      }
    }
    .nav{
      display: flex;
      .nav-item{
        display: flex;
        width: 90px;
        flex-direction: column;
        padding: 20px 0;
        align-items: center;
        justify-content: center;
        &.link_active{
          background-color: #111;
          color: #fff
        }
      }
      .nav-item:hover{
        background-color: #111;
        color: #fff
      }
    }
  }

}
@media all and (max-width: 769px){
  .nav-toggle{
    display: block;
    z-index: 400;
    position: fixed;
    top: 18px;
    right: 15px;
    height: 32px;
    .nav_toggle_icon1{
      position: relative;
      width: 32px;
     &>span{
        width: 100%;
        height: 2px;
        left: 0;
        display: block;
        background: #111;
        position: absolute;
        transition: .15s ease-in-out;
        &:nth-child(1){
          top: 0;
        }
        &:nth-child(2){
          top: 11px;
        }
        &:nth-child(3){
          top: 22px;
        }
      }
    }
    .nav_toggle_icon2{
      position: relative;
      width: 32px;
     &>span{
        width: 100%;
        height: 2px;
        left: 0;
        display: block;
        background: #111;
        position: absolute;
        transition: .35s ease-in-out;
        &:nth-child(1){
          top: 11px;
          transform: rotate(45deg);
        }
        &:nth-child(2){
          display: none;
        }
        &:nth-child(3){
          top: 11px;
          transform: rotate(-45deg);
        }
      }
    }
  }
  .modal{
    z-index: 300;
    padding-top: 120px;
    position: fixed;
    right: -250px;
    top: 0;
    height: 100%;
    width: 250px;
    color: #111;
    background: #fff;
    transition: .35s ease-in-out;
    display: block;
    &.modal_open{
      right: 0px;
    }
    .modal-nav{
      width: 730px;
      list-style: none;
      margin-bottom: 0;
      display: flex;
      flex-direction: column;
      .modal-nav-item{
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 16px 0;
        line-height: 1;
        border-top: 1px solid #e8e8e8;
        height: 100%;
        font-weight: 700;
        justify-items: center;
        // align-items: center;
        padding-left: 100px;
        &.link_active{
          background-color: #111;
          color: #fff;
          background-size: 200% auto;
        }
        &:hover{
          background-color: #111;
          color: #fff;
        }
      }
    }
  }
  .header{
    position: sticky;
    display: flex;
    background: linear-gradient(180deg,#fff 0,#f3f3f3);
    overflow: hidden;
    height: 60px;
    top: 0;
    z-index: 100;
    justify-content:space-around;
    .header-logo{
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .logo-icon{
        border-radius: 100%;
        margin-right: 6px;
      }
      .logo-txt{
        font-size: 16px;
        font-weight: 700;
        color: #111;
      }
    }
    .nav{
      display: none;
      .nav-item{
        display: flex;
        width: 130px;
        flex-direction: column;
        padding: 20px 0;
        align-items: center;
        justify-content: center;
        &.link_active{
          background-color: #111;
          color: #fff
        }
      }
    }
  }
}
</style>