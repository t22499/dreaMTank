<script setup>
</script>

<template>
  <div class="child3">
    <div class="title">
      <span class="en">PRODUCT</span>
      <span class="ja">自社製品</span>
    </div>
    <section class="section">
      <div class="section-left">
        <p class="txt-wrapper">
          <span class="txt">PRODUCT</span>
          01
        </p>
      </div>
      <div class="section-right">
        <h2 class="title">
        ラーニングサポートサービス
        </h2>
        <p class="p1">
          ラーニングにおける様々な場面で、ナレッジ習得のための最適な提案をAIにより学習者へ提供するWebサービスです。
        </p>
        <ul class="img-wrapper">
          <li><img src="../../../assets/img/product-02.aa71357.jpg">
            <p>
              ナレッジのポイントの<br/>
              自動解析
            </p>  
          </li>
          <li><img src="../../../assets/img/product-02.aa71357.jpg">
            <p>
              ナレッジのポイントの<br/>
              自動解析
            </p>  
          </li>
          <li><img src="../../../assets/img/product-02.aa71357.jpg">
            <p>
              ナレッジのポイントの<br/>
              自動解析
            </p>  
          </li>
          <li><img src="../../../assets/img/product-02.aa71357.jpg">
            <p>
              ナレッジのポイントの<br/>
              自動解析
            </p>  
          </li>
          <li><img src="../../../assets/img/product-02.aa71357.jpg">
            <p>
              ナレッジのポイントの<br/>
              自動解析
            </p>  
          </li>
          <li><img src="../../../assets/img/product-02.aa71357.jpg">
            <p>
              ナレッジのポイントの<br/>
              自動解析
            </p>  
          </li>
        </ul>
        <h3 class="t3">
          SCENE.1 学生の学習
        </h3>
        <p class="p1">
          エビングハウスの忘却曲線を利用し、新知識の学習ポイントを個人の学習力に合わせて自動解析し、予習・復習などをサポートします。
        </p>
        <h3 class="t3">
          SCENE.2 新入社員教育
        </h3>
        <p class="p1">
          研修内容と新人の適応能力を総合的に自動分析し、学習効果の高い研修計画を提案、より早く成長できるようにサポートします。
        </p>
        <h3 class="t3">
          SCENE.3 社会人教育
        </h3>
        <p class="p1">
          新知識や新技術（特にIT業界）を自動解析し、学習者個人の好き嫌いや学習習慣に合わせて、知能的・効率的に学習できるようにサポートします。
        </p>
        <table class="it-list">
          <tbody>
            <tr>
              <th>
                言語
              </th>
              <td>
                <p>
                  Python、Go、Java
                </p>
              </td>
            </tr>
            <tr>
              <th>
                サーバ
              </th>
              <td>
                <p>
                  CentOS、Ubantu、Windowss、AWS、SB Cloud
                </p>
              </td>
            </tr>
            <tr>
              <th>
                運用方式
              </th>
              <td>
                <p>
                  1. OSS公開<br />
                  2. 一般企業へのカスタマイズ（有料）
                </p>
              </td>
            </tr>
            <tr>
              <th>
                サポート端末
              </th>
              <td>
                <p>
                  iOS/Android、Apple Watch/Android Wear、Web、HoloLensなど
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.child3{
  margin-bottom: 50px;
}

@media all and (min-width: 1080px){
  .title{
    font-weight: 700;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 40px;
    .en{
      display: block;
      font-family: Roboto Condensed,sans-serif;
      font-weight: 700;
      font-size: 38px;
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
      width: 25%;
      .txt-wrapper{
        font-family: Roboto Condensed,sans-serif;
        font-size: 50px;
        font-weight: 700;
        text-align: center;
        color: #111;
        line-height: 1.2;
        letter-spacing: .06em;
        margin: 0 auto 30px;
        .txt{
          display: block;
          font-size: 14px;
          color: #111;
        }
      }
    }
    .section-right{
      flex: 1;
      .title{
        font-size: 163%;
        font-weight: 700;
        line-height: 1.6;
        margin-bottom: 25px;
        text-align: left;
      }
      .p1{
        margin-bottom: 30px;
      }
      .flow-wrapper{
        width: 240px;
        margin: 0 auto 50px;
        .item-wrapper{
          width: 100%;
          height: 75px;
          position: relative;
          .item{
            display: inline-block;
            width: 100%;
            height: 42px;
            line-height: 42px;
            text-align: center;
            font-size: 100%;
            background: #f0dfe0;
            border-radius: 4px;
          }
          &::after{
            position: absolute;
            content: "";
            width: 34px;
            height: 23px;
            background-size: 34px 23px;
            bottom: 2px;
            left: 50%;
            margin-left: -17px;
            background: url('../../../assets/img/arrows.png') 0 0 no-repeat;
      
          }
        }
      }
      .t3{
        font-size: 125%;
        font-weight: 700;
        line-height: 1.6;
        border-left: 5px solid #111;
        padding-left: 0.6em;
        margin-bottom: 25px;
      }
      .btn1{
        margin-bottom: 20px;
        font-size: 100%;
        .btn1-txt{
          display: inline-block;
          font-size: 113%;
          font-weight: 400;
          color: #fff;
          line-height: 1.5;
          background: #888;
          padding: 0.4em 0.8em;
          border-radius: 4px;
        }
      }
      .it-list{
        width: 100%;
        border-collapse: separate;
        margin-bottom: 40px;
        tr{
          display: flex;
          margin-bottom: 10px;
          th{
            width: 25%;
            vertical-align: top;
            padding: 5px 0;
            text-align: left;
          }
          td{
            flex: 1;
            padding: 5px 0;
            vertical-align: top;
            p{
              border-left: 1px solid #e3b2b6;
              padding-left: 50px;
            }
          }
        }
      }
      .img-wrapper{
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 40px;
        display: flex;
        li{
          width: 30%;
          background: #f0f0f0;
          border-radius: 4px;
          margin: 0 1.66% 20px;
          padding-bottom: 20px;
          img{
            display: block;
            width: 100%;
            margin: 0 auto 20px;
          }
          p{
            font-weight: 700;
            line-height: 1.6;
            text-align: center;
          }
        }
      }
      .ul1{
        width: 100%;
        display: flex;
        margin-bottom: 50px;
        li{
          border-bottom: 1px solid #e7e7e2;
          border-top: 1px solid #e7e7e2;
          padding: 15px 0;
          width: 33.3%;
        }
      }
      .type1{
        margin-bottom: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 50%;
          border-bottom: 1px solid #e7e7e2;
          padding: 0.6em 0;
          border-top: 1px solid #e7e7e2;
        }
      }
      .ul2{
        width: 100%;
        li{
          line-height: 1.6;
          background: #f0f0f0;
          border-radius: 4px;
          margin-bottom: 15px;
          padding: 0.6em 0.8em 0.6em 2em;
          text-indent: -1em;
        }
      }
      .logo1{
        margin-bottom: 50px;
        img{
          display: block;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }
      }
    }
  }
  
}

@media all and (min-width: 770px) and (max-width: 1079px){
  .title{
    font-weight: 700;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 40px;
    .en{
      display: block;
      font-family: Roboto Condensed,sans-serif;
      font-weight: 700;
      font-size: 38px;
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
      width: 25%;
      .txt-wrapper{
        font-family: Roboto Condensed,sans-serif;
        font-size: 50px;
        font-weight: 700;
        text-align: center;
        color: #111;
        line-height: 1.2;
        letter-spacing: .06em;
        margin: 0 auto 30px;
        .txt{
          display: block;
          font-size: 14px;
          color: #111;
        }
      }
    }
    .section-right{
      flex: 1;
      .title{
        font-size: 163%;
        font-weight: 700;
        line-height: 1.6;
        margin-bottom: 25px;
        text-align: left;
      }
      .p1{
        margin-bottom: 30px;
      }
      .flow-wrapper{
        width: 240px;
        margin: 0 auto 50px;
        .item-wrapper{
          width: 100%;
          height: 75px;
          position: relative;
          .item{
            display: inline-block;
            width: 100%;
            height: 42px;
            line-height: 42px;
            text-align: center;
            font-size: 100%;
            background: #f0dfe0;
            border-radius: 4px;
          }
          &::after{
            position: absolute;
            content: "";
            width: 34px;
            height: 23px;
            background-size: 34px 23px;
            bottom: 2px;
            left: 50%;
            margin-left: -17px;
            background: url('../../../assets/img/arrows.png') 0 0 no-repeat;
      
          }
        }
      }
      .t3{
        font-size: 125%;
        font-weight: 700;
        line-height: 1.6;
        border-left: 5px solid #111;
        padding-left: 0.6em;
        margin-bottom: 25px;
      }
      .btn1{
        margin-bottom: 20px;
        font-size: 100%;
        .btn1-txt{
          display: inline-block;
          font-size: 113%;
          font-weight: 400;
          color: #fff;
          line-height: 1.5;
          background: #888;
          padding: 0.4em 0.8em;
          border-radius: 4px;
        }
      }
      .it-list{
        width: 100%;
        border-collapse: separate;
        margin-bottom: 40px;
        tr{
          display: flex;
          margin-bottom: 10px;
          th{
            width: 25%;
            vertical-align: top;
            padding: 5px 0;
            text-align: left;
          }
          td{
            flex: 1;
            padding: 5px 0;
            vertical-align: top;
            p{
              border-left: 1px solid #e3b2b6;
              padding-left: 50px;
            }
          }
        }
      }
      .img-wrapper{
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        li{
          width: 46%;
          background: #f0f0f0;
          border-radius: 4px;
          margin: 0 2% 20px;
          padding-bottom: 20px;
          img{
            display: block;
            width: 100%;
            margin: 0 auto 20px;
          }
          p{
            font-weight: 700;
            line-height: 1.6;
            text-align: center;
          }
        }
      }
      .ul1{
        width: 100%;
        display: flex;
        margin-bottom: 50px;
        li{
          border-bottom: 1px solid #e7e7e2;
          border-top: 1px solid #e7e7e2;
          padding: 15px 0;
          width: 33.3%;
        }
      }
      .type1{
        margin-bottom: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 50%;
          border-bottom: 1px solid #e7e7e2;
          padding: 0.6em 0;
          border-top: 1px solid #e7e7e2;
        }
      }
      .ul2{
        width: 100%;
        li{
          line-height: 1.6;
          background: #f0f0f0;
          border-radius: 4px;
          margin-bottom: 15px;
          padding: 0.6em 0.8em 0.6em 2em;
          text-indent: -1em;
        }
      }
      .logo1{
        margin-bottom: 50px;
        img{
          display: block;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }
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
    flex-wrap: wrap;
    .section-left{
      width: 100%;
      .txt-wrapper{
        font-family: Roboto Condensed,sans-serif;
        font-size: 38px;
        font-weight: 700;
        text-align: center;
        color: #111;
        line-height: 1.2;
        letter-spacing: .06em;
        margin: 0 auto 30px;
        .txt{
          display: block;
          font-size: 14px;
          color: #111;
        }
      }
    }
    .section-right{
      width: 100%;
      flex: 1;
      .title{
        font-size: 120%;
        font-weight: 700;
        line-height: 1.6;
        margin-bottom: 25px;
        text-align: center;
      }
      .p1{
        margin-bottom: 30px;
      }
      .flow-wrapper{
        width: 240px;
        margin: 0 auto 50px;
        .item-wrapper{
          width: 100%;
          height: 75px;
          position: relative;
          .item{
            display: inline-block;
            width: 100%;
            height: 42px;
            line-height: 42px;
            text-align: center;
            font-size: 100%;
            background: #f0dfe0;
            border-radius: 4px;
          }
          &::after{
            position: absolute;
            content: "";
            width: 34px;
            height: 23px;
            background-size: 34px 23px;
            bottom: 2px;
            left: 50%;
            margin-left: -17px;
            background: url('../img/arrows.png') 0 0 no-repeat;
    
          }
        }
      }
      .t3{
        font-size: 125%;
        font-weight: 700;
        line-height: 1.6;
        border-left: 5px solid #111;
        padding-left: 0.6em;
        margin-bottom: 25px;
      }
      .btn1{
        margin-bottom: 20px;
        font-size: 100%;
        .btn1-txt{
          display: inline-block;
          font-size: 113%;
          font-weight: 400;
          color: #fff;
          line-height: 1.5;
          background: #888;
          padding: 0.4em 0.8em;
          border-radius: 4px;
        }
      }
      .it-list{
        width: 100%;
        border-collapse: separate;
        margin-bottom: 30px;
        tbody{
          width: 100%;
          tr{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            th{
              background: #ece8e6;
              font-weight: 700;
              padding: 10px;
              border: 1px solid #ece8e6;
              width: 100%;
              text-align: left;
              vertical-align: top;
            }
            td{
              flex: 1;
              padding: 5px 0;
              vertical-align: top;
              padding: 10px;
              border: 1px solid #ece8e6;
              width: 100%;
              p{
                border-left: none;
                padding-left: 0;
              }
            }
          }
        }
      }
      .img-wrapper{
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        li{
          width: 100%;
          background: #f0f0f0;
          border-radius: 4px;
          padding-bottom: 20px;
          img{
            display: block;
            width: 100%;
            margin: 0 auto 20px;
          }
          p{
            font-weight: 700;
            line-height: 1.6;
            text-align: center;
          }
        }
      }
      .ul1{
        width: 100%;
        display: flex;
        margin-bottom: 50px;
        flex-wrap: wrap;
        li{
          border-bottom: 1px solid #e7e7e2;
          border-top: 1px solid #e7e7e2;
          padding: 15px 0;
          width: 100%;
        }
      }
      .type1{
        margin-bottom: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 100%;
          border-bottom: 1px solid #e7e7e2;
          padding: 0.6em 0;
          border-top: 1px solid #e7e7e2;
        }
      }
      .ul2{
        width: 100%;
        li{
          line-height: 1.6;
          background: #f0f0f0;
          border-radius: 4px;
          margin-bottom: 15px;
          padding: 0.6em 0.8em 0.6em 2em;
          text-indent: -1em;
        }
      }
      .logo1{
        margin-bottom: 50px;
        img{
          display: block;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>