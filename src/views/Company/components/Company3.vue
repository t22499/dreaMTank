<script setup>
</script>

<template>
  <div class="child3">
    <div class="title">
      <span class="en">ORGANIZATION</span>
      <span class="ja">組織図</span>
    </div>
    <section class="section">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">組織図</span>
        </h2>
      </div>
      <div class="section-right">
        <img src="../../../assets/img/company-org.15098db.gif" alt="">
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.child3{
  margin-bottom: 50px;
}

@media all and (min-width: 770px){
  .title{
    font-weight: 700;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 40px;
    .en{
      display: block;
      font-family: Roboto Condensed,sans-serif;
      font-weight: 700;
      font-size: 30px;
      color: #111;
      letter-spacing: .06em;
    }
    .ja{
      display: inline-block;
      line-height: 1;
      letter-spacing: .06em;
      padding: 0 20px;
      border-left: 1px solid #333;
      border-right: 1px solid #333;
    }
  }
  .section{
    display: flex;
    margin-bottom: 60px;
    .section-left{
      width: 17%;
      .txt-wrapper{
        font-weight: 700;
        text-align: center;
        line-height: 1.6;
        letter-spacing: .06em;
        border-top: 3px solid #111;
        padding-top: 0.8em;
        margin-bottom: 30px;
        font-size: 100%;
        .txt{
          font-weight: 700;
          text-align: center;
          line-height: 1.6;
          letter-spacing: .06em;
          padding-top: 0.8em;
          margin-bottom: 30px;
          font-size: 100%;
        }
      }
    }
    .section-right{
      flex: 1;
      img{
        display: block;
        width: 100%;
        max-width: 440px;
        margin: 0 auto;
        height: auto;
      }
    }
  }
}

@media all and (max-width: 769px){
  .title{
    font-weight: 700;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 40px;
    .en{
      display: block;
      font-family: Roboto Condensed,sans-serif;
      font-weight: 700;
      font-size: 32px;
      color: #111;
      letter-spacing: .06em;
    }
    .ja{
      display: inline-block;
      line-height: 1;
      letter-spacing: .06em;
      padding: 0 20px;
      border-left: 1px solid #333;
      border-right: 1px solid #333;
    }
  }
  .section{
    display: flex;
    margin-bottom: 60px;
    flex-direction: column;
    .section-left{
      width: 100%;
      .txt-wrapper{
        font-weight: 700;
        text-align: center;
        line-height: 1.6;
        letter-spacing: .06em;
        font-size: 100%;
        border-top: none;
        padding-top: 0;
        margin-bottom: 30px;
        .txt{
          display: inline-block;
          background: #111;
          color: #fff;
          padding: 0.4em 2em;
          border-radius: 20px;
        }
      }
    }
    .section-right{
      width: 100%;
      flex: 1;
      img{
        max-width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }
}
</style>