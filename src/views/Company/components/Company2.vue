<script setup>
</script>

<template>
  <div class="child2">
    <section class="section">
      <div class="section-left">
        <div class="title">
          <span class="en">POLICY</span>
          <span class="ja">経営理念</span>
        </div>
        <p>
        dreaMTankは、革新的な精神を持つIT会社で、
        私たちの経営理念は顧客を中心に据え、
        高品質の技術ソリューションとサービスを提供することに焦点を当てています。
        </p>
      </div>
      <div class="section-right">
        <img src="../../../assets/img/company-01.214a9b6.jpg" alt="">
      </div>
    </section>
    <section class="section">
      <div class="section-left">
        <div class="title">
          <span class="en">MESSAGE</span>
          <span class="ja">ご挨拶</span>
        </div>
      </div>
      <div class="section-right">
        <p class="p1">
        わたしたちは、技術・情報・人がさまざまな形で結びつき、融合するすることで、今までにない新たな価値を生み出すと考えています。その価値創造の土台となるべく、日々先進の技術にチャレンジし、社会の発展に貢献します。
        </p>
        <p class="p2">
        独自の開発体制によるコンサルティングと情報システム開発をさらにスピードアップさせ、新たな分野へ挑戦によって、イノベーションを実現します。
        </p>
        <p class="p3">
          <img src="../../../assets/img/sign.jpg" alt="">
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.child2{
  margin-bottom: 50px;
}

@media all and (min-width: 770px){
  .section{
    display: flex;
    margin-bottom: 60px;
    .section-left{
      width: 17%;
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
      .p1{
        margin-left: 180px;
        margin-bottom: 20px;
      }
      .p2{
        margin-left: 180px;
        margin-bottom: 30px;
      }
      .p3{
        position: relative;
        height: 70px;
        float: right;
        img{
          width: 250px;
        }
      }
    }
  }
}

@media all and (max-width: 769px){
  .section{
    display: flex;
    margin-bottom: 60px;
    flex-direction: column;
    .section-left{
      width: 100%;
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
    }
    .section-right{
      width: 100%;
      flex: 1;
      img{
        width: 100%;
      }
      .p1{
        margin-bottom: 20px;
      }
      .p2{
        margin-bottom: 30px;
      }
      .p3{
        position: relative;
        height: 70px;
        float: right;
        img{
          width: 250px;
        }
      }
    }
  }
}
</style>