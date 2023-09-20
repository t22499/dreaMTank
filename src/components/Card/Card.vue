<script>
</script>

<template>
  <div class="card-items">
    <img class="card-items-img" src="../../assets/img/card-01.645b304.jpg">
    <div class="card-txt-wrapper">
      <div class="card-txt-content">
        <p class="card-title-wrapper">
          <span class="title-top bold">SOLUTION</span>
          <span class="title-bottom bold">ソリューション</span>
        </p>
        <p class="desc">
          システムのコンサルティング、導入、運用に渡るすべてのフェーズのサービスを提供し、
          お客様の利便性、満足度の高いシステムの構築をサポートします。
        </p>
        <a class="more" href="">
          MORE INFO
          <el-icon class="more-plus"><Plus class="plus"/></el-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-items{
  width: 25%;
  .card-items-img{
    width: 100%;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }
  .card-txt-wrapper{
    margin: 0 10px;
    .card-txt-content{
      width: auto;
      line-height: 1.6;
      background: #fff;
      padding: 25px 20px;
      box-shadow: 0 0 5px rgba(0,0,0,.2);
      position: relative;
      top: -10px;
      left: 0;
      .card-title-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        font-weight: 700px;
        .title-top{
          display: block;
          font-family: Roboto Condensed,sans-serif;
          font-size: 24px;
          color: #111;
          letter-spacing: .06em;
          margin-bottom: 10px;
        }
        .title-bottom{
          font-size: 15px;
          color: #111;
        }
      }
      .desc{
        font-size: 14px;
        margin-bottom: 25px;
        word-wrap: break-word;
        color: #111;
        line-height: 25px;
      }
      .more{
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
        padding: 0 0 0 28px;
        position: relative;
        // transform: rotate(0deg); 
        // transition: all .4s ease;
        transition: transform 0.5s ease;
        &:hover{
          background:rgba(0,0,0,.2);
          box-shadow: 0 0 5px rgba(0,0,0,.2);
          transition: all .4s ease;
          border: 1px solid #ffffff;
          .more-plus{
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
        .more-plus{
          padding-left:10px;
          .plus{
            width: 15px;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>