<script setup>

</script>

<template>
  <header class="header">
    <router-link to="/#" class="header-logo">
      <img class="logo-icon" src="../../assets/img/download.jpg">
      <span class="logo-txt">dreaMTank株式会社</span>
    </router-link>
    <nav class="nav">
      <router-link to="#/services" class="nav-item link-active">
        <span class="nav-item-title">ホーム</span>
        <span>Home</span>
      </router-link>
      <router-link to="#/services" class="nav-item ">
        <span class="nav-item-title">事業内容</span>
        <span>Services</span>
      </router-link>
      <router-link to="#/services" class="nav-item ">
        <span class="nav-item-title">企業情報</span>
        <span>Company</span>
      </router-link>
      <router-link to="#/services" class="nav-item ">
        <span class="nav-item-title">採用情報</span>
        <span>Recruit</span>
      </router-link>
      <router-link to="#/services" class="nav-item ">
        <span class="nav-item-title">お問い合わせ</span>
        <span>contact</span>
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header{
  position: sticky;
  display: flex;
  background: linear-gradient(180deg,#fff 0,#f3f3f3);
  overflow: hidden;
  height: 70px;
  top: 0;
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
      &.link-active{
        background-color: #111;
        color: #fff
      }
    }
  }
}
</style>