<script setup>

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <footer class="footer">
    <a class="to-top" @click="scrollToTop()">
      <img class="icon-up-arrow" src="../../assets/img/download.png">
    </a>
    <div class="footer-content">
      <div class="left">
        <a class="left-logo" href="/">
          <img class="logo-icon" src="../../assets/img/download.jpg">
          <span span class="logo-txt">dreaMTank株式会社</span>
        </a>
        <p class="info">
          本店: 長野県北佐久郡軽井沢町大字長倉5933番地5 <br>
          本店TEL: 026-746-9877<br>
          本店〒: 389-0111<br>
          支店: 神奈川県横浜市都筑区中川中央１丁目３５−１６<br>
          マイキャッスルセンター北　202室<br>
          支店TEL: 045-507-5873<br>
          本店〒: 224-0003<br>
        </p>
      </div>
      <div class="right">
        <ul class="items-wrapper">
          <li class="item">
            <a href="/services" class="item-title link-active">事業内容</a>
            <ul class="item-child-wrapper">
              <li>
                <a class="item-child link-active" href="">
                  ソリューション
                </a>
              </li>
              <li>
                <a class="item-child link-active" href="">
                  開発実績
                </a>
              </li>
              <li>
                <a class="item-child link-active" href="">
                  自社製品
                </a>
              </li>
              <li>
                <a class="item-child link-active" href="">
                  特長
                </a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="/services" class="item-title link-active">企業情報</a>
            <ul class="item-child-wrapper">
              <li>
                <a class="item-child link-active" href="">
                  会社概要
                </a>
              </li>
              <li>
                <a class="item-child link-active" href="">
                  経営理念
                </a>
              </li>
              <li>
                <a class="item-child link-active" href="">
                  組織図
                </a>
              </li>
              <li>
                <a class="item-child link-active" href="">
                  アクセス
                </a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="/services" class="item-title link-active">採用情報</a>
            <ul class="item-child-wrapper">
              <li>
                <a class="item-child link-active" href="">
                  中途採用
                </a>
              </li>
              <li>
                <a class="item-child link-active" href="">
                  新卒採用
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@media all and (min-width: 1080px){
  .footer{
    width: 100%;
    background: #111;
    overflow: hidden;
    position: relative;
    color: #fff;
    .to-top{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      background-color: #1b1b1b;
      text-align: center;
      color: #fff;
      font-size: 24px;
      text-decoration: none;
      line-height: 70px;
      transition: all .5s ease;
      opacity: .6;
      position: absolute;
      bottom: 60px;
      right: 0;
      z-index: 100;
      .icon-up-arrow{
        width: 25px;
      }
    }
    .footer-content{
      max-width: 1000px;
      margin: 0 auto;
      padding: 50px 0 30px;
      display: flex;
      // justify-content: space-around;
      .left{
        .left-logo{
          display: flex;
          align-items: center;
          font-size: 24px;
          .logo-icon{
            margin-right: 6px;
            border-radius: 100%;
          }
          .logo-txt{
            font-size: 16px;
            font-weight: 700;
            color: rgb(255, 255, 255);
          }
        }
        .info{
          font-size: 14px;
          line-height: 1.6;
        }
      }
      .right{
        font-weight: 700;
        margin-left: 80px;
        margin-top: 6px;
        flex: 1 1 0%;
        .items-wrapper{
          display: flex;
          justify-content: space-around;
        .item{
          font-size: 100%;
          font-weight: 400;
          vertical-align: baseline;
          margin: 0px;
          padding: 0px;
          border-width: 0px;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          .item-title{
            color: rgb(255, 255, 255);
            display: inline-block;
            margin-bottom: 15px;
            transition: all 0.5s ease 0s;
          }
          .item-child-wrapper{
            .item-child{
              color: rgb(255, 255, 255);
              display: inline-block;
              margin-top: 12px;
            }
          }
        } 
        }
      }
    }
  }
}

@media all and (min-width: 0px) and (max-width: 1079px){
  .footer{
    width: 100%;
    background: #111;
    overflow: hidden;
    position: relative;
    color: #fff;
    .to-top{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      background-color: #1b1b1b;
      text-align: center;
      color: #fff;
      font-size: 24px;
      text-decoration: none;
      line-height: 70px;
      transition: all .5s ease;
      opacity: .6;
      position: absolute;
      bottom: 60px;
      right: 0;
      z-index: 100;
      .icon-up-arrow{
        width: 25px;
      }
    }
    .footer-content{
      max-width: 1000px;
      margin: 0 auto;
      padding: 50px 0 0;
      display: flex;
      flex-direction: column;
      .left{
        width: 100%;
        margin-bottom: 30px;
        .left-logo{
          display: flex;
          align-items: center;
          justify-items: center;
          font-size: 24px;
          position: relative;
          height: 25px;
          .logo-icon{
            margin-right: 6px;
            border-radius: 100%;
            position: absolute;
            top: -10;
            left: 35%;
          }
          .logo-txt{
            font-size: 16px;
            font-weight: 700;
            color: rgb(255, 255, 255);
            position: absolute;
            top: 0;
            left: 40%;
          }
        }
        .info{
          font-size: 14px;
          line-height: 1.6;
          text-align: center;
        }
      }
      .right{
        width: 100%;
        flex: 1;
        .items-wrapper{
          display: flex;
          justify-content: space-around;
          .item{
            display: none;
          }
          .item:nth-child(1){
            display: block;
            flex: 1;
            font-weight: 700;
            margin-top: 6px;
            .link-active{
              width: 100%;
              background-color: #202020;
              margin-bottom: 1px;
              height: 44px;
              line-height: 44px;
              transition: all .5s ease;
              color: #fff;
              display: inline-block;
              margin-bottom: 1px;
              text-align: center;
              &:hover{
                opacity: .5;
              }
            }
          }
        }
      }
    }
  }
}
</style>