<script setup>
</script>

<template>
  <div class="child1">
    <div class="title">
      <span class="en">RECRUIT</span>
      <span class="ja">採用情報</span>
    </div>
    <section class="section">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">募集要項</span>
        </h2>
      </div>
      <div class="section-right">
        <table class="it-list">
          <tbody>
            <tr>
              <th>募集職種</th>
              <td>
                <p>
                  スマホネイティブアプリエンジニア
                </p>
              </td>
            </tr>
            <tr>
              <th>資格</th>
              <td>
                <p>
                  スマホアプリエンジニアとしての経験が2年程度ある方
                </p>
              </td>
            </tr>
            <tr>
              <th>スキル</th>
              <td>
                <p>
                  iOS-Swift、Android-Java、Android-Kotlin
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="p-txt">
        その他募集職種：営業職、PMO補佐／ヘルプデスクなど
        </p>
      </div>
    </section>
    <section class="section">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">採用試験の流れ</span>
        </h2>
      </div>
      <div class="section-right" style="text-align: center;">
        <p class="p1">
          <span>
            採用試験の流れ
          </span>
        </p>
        <p class="p2">
        ①電話、②Email、にて応募受付を行っております。 <br/>
        応募を希望される方は以下の採用担当にご連絡ください。<br/>
        詳しい説明をさせて頂きます。
        </p>
        <p class="p3">
          <span class="bold">
            [ 採用担当 ]
          </span> <br/>
        人事部　採用担当者 <br/>
        ① 電話：<a href="script:;">026-746-9877(本店)</a>
        <a href="script:;">026-746-9877(本店)</a><br/>
        ② Email：<a href="script:;">dreamtank007@dreamtank.co.jp</a>
        </p>
        <p class="p4">
          <img src="../../../assets/img/arrows.png" alt="">
        </p>
        <p class="p1">2. 書類選考合格者に面談</p>
        <p class="p5">
        ご応募から内定までは1~2週間を予定しております。<br/>
        面接日、入社日はご相談に応じます。お気軽にお問合せください。
        </p>
        <p class="p4">
          <img src="../../../assets/img/arrows.png" alt="">
        </p>
        <p class="p1">3. 結果のお知らせ</p>
        <p>結果については合否に関わらずご連絡致します。</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.child1{
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
      .it-list{
        width: 100%;
        border-collapse: separate;
        margin: 0 0 40px 40px;
        tr{
          display: flex;
          margin-bottom: 10px;
          th{
            width: 25%;
            vertical-align: top;
            padding: 5px 0 5px;
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
      .p-txt{
        margin-left: 40px;
      }
      .p1{
        display: block;
        width: 100%;
        max-width: 360px;
        line-height: 1.6;
        text-align: center;
        font-size: 113%;
        padding: 0.4em;
        background: #f0dfe0;
        border-radius: 4px;
        margin: 0 auto 20px;
      }
      .p3{
        margin-bottom: 20px;
        .bold{
          font-weight: 700;
        }
      }
      .p4{
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        img{
          width: 34px;
        }
      }
      .p5{
        margin-bottom: 20px;
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
      .p1{
        display: block;
        width: 100%;
        max-width: 360px;
        line-height: 1.6;
        text-align: center;
        font-size: 113%;
        padding: 0.4em;
        background: #f0dfe0;
        border-radius: 4px;
        margin: 0 auto 20px;
      }
      .p3{
        margin-bottom: 20px;
        .bold{
          font-weight: 700;
        }
      }
      .p4{
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        img{
          width: 34px;
        }
      }
      .p5{
        margin-bottom: 20px;
      }
    }
  }
}
</style>