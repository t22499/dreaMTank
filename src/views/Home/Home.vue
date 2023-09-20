<script setup>
import Card from '../../components/Card/Card.vue'

</script>

<template>
  <div class="home">
    <div class="home-content">
      <section class="banner-container">
        <div class="banner-wrapper bx">
          <img  class="banner-image" src="../../assets/img/屏幕截图 2023-09-19 195415.png">
        </div>
      </section>
      <section class="main-container bg-img">
        <div class="main-container-wrapper">
          <div class="cards-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div class="news-container">
            <div class="title-wrapper">
              <h2 class="txt">
                NEWS</h2>
              <a class="btn" href="">
                NEWS INDEX <el-icon class="btn-plus"><Plus class="plus"/></el-icon>
              </a>
            </div>
            <div class="news-lists-wrapper">
              <a class="list-item border-top" href=""></a>
              <a class="list-item border-top" href=""></a>
              <a class="list-item border-top" href=""></a>
              <a class="list-item border-top" href=""></a>
              <a class="list-item border-top" href=""></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-container{
  width: 100%;
  position: relative;
  z-index: -101;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  .banner-wrapper{
    width: 100%;
    max-width: 1120px;
    height: 320px;
    background-size: cover;
    position: relative;
    z-index: -99;
    margin: 0px auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    overflow: hidden;
    .banner-image{
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
.main-container{
  width: 100%;
  overflow: hidden;
  &.bg-img{
    background: url(../../assets/img/download.gif)repeat;
  }
  .main-container-wrapper{
    max-width: 1120px;
    margin: 0 auto;
    .cards-container{
      display: flex;
      background-color: #fff;
      flex-wrap: wrap;
      padding: 60px 60px 0;
    }
    .news-container{
      width: auto;
      padding: 80px 60px;
      display: flex;
      background-color: #fff;
      .title-wrapper{
        width: 26%;
        .txt{
          font-family: Roboto Condensed,sans-serif;
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 25px;
          color: #111;
          letter-spacing: .06em;
          padding-left: 40px;
          position: relative;
        }
        .btn{
          display: flex;
          width: 156px;
          margin: 0 auto;
          background: #fff;
          height: 40px;
          font-size: 14px;
          line-height: 40px;
          color: #111;
          border: 1px solid #111;
          border-radius: 22px;
          padding: 0 10px 0 22px;
          position: relative;
          // transform: rotate(0deg); 
          // transition: all .4s ease;
          transition: transform 0.5s ease;
          &:hover{
            background:rgba(0,0,0,.2);
            box-shadow: 0 0 5px rgba(0,0,0,.2);
            transition: all .4s ease;
            border: 1px solid #ffffff;
            .btn-plus{
            padding-left:10px;
            .plus{
              transform: rotate(180deg);
              transition: transform 0.5s ease;
              width: 15px;
              margin: 0 auto;
            }
          }
          }
          &:not(:hover){
            .more-plus{
            .plus{
              transform: rotate(0deg);
              transition: transform 0.5s ease;
            }
          }
          }
          .btn-plus{
            padding-left:10px;
            width: 15px;
            .plus{
              width: 15px;
              margin: 0 auto;
            }
          }
        }
      }
      .news-lists-wrapper{
        display: flex;
        flex-direction: column;
        flex: 1;
        .list-item{
          width: 100%;
          padding: 1em 1.2em;
          line-height: 1.8;
          display: flex;
          transition: all .5s ease;
          border-bottom: 1px solid #e8e8e8;
        }
      }
    }
  }
}
</style>