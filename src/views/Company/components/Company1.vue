<script setup>
</script>

<template>
  <div class="child1">
    <div class="title">
      <span class="en">PROFILE</span>
      <span class="ja">会社概要</span>
    </div>
    <section class="section">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">会社概要</span>
        </h2>
      </div>
      <div class="section-right">
        <table class="it-list">
          <tbody>
            <tr>
              <th>商号</th>
              <td>
                <p>
                  dreaMTank株式会社（略称：MT）
                </p>
              </td>
            </tr>
            <tr>
              <th>役員</th>
              <td>
                <p>
                  代表取締役社長　李拯東
                </p>
              </td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                <p>
                  〒389-0111 長野県北佐久郡軽井沢町大字長倉５９３３ー５
                </p>
                <p>
                  TEL. 026-746-9877
                </p>
                <p>
                  〒224-0003 神奈川県横浜市都筑区中川中央１ー３５ー１６
                </p>
                <p>
                  マイキャッスルセンター北２０２室
                </p>
                <p>TEL. 045-507-5873</p>
              </td>
            </tr>
            <tr>
              <th>設立</th>
              <td>
                <p>
                  2014年5月
                </p>
              </td>
            </tr>
            <tr>
              <th>事業年度</th>
              <td>
                <p>
                  5月～4月末
                </p>
              </td>
            </tr>
            <tr>
              <th>资本金</th>
              <td>
                <p>
                  3500万円
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="section">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">主要取引先</span>
        </h2>
      </div>
      <div class="section-right">
        <ul class="type1">
          <li>
            富士ソフト株式会社
          </li>
          <li>
            日鉄ソリューションズ株式会社
          </li>
          <li>
            株式会社システナ
          </li>
        </ul>
        <p class="p">
          他多数（敬称略・順不同）
        </p>
      </div>
    </section>
    <section class="section">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">事業内容</span>
        </h2>
      </div>
      <div class="section-right">
        <ul class="type1">
          <li>
            SES事業
          </li>
          <li>
            請負開発事業
          </li>
          <li>
            オフショア開発事業
          </li>
          <li>
            グローバル人材事業
          </li>
        </ul>
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
      .type1{
          margin: 0 0 40px 40px;
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
      .p{
        margin: 0 0 40px 40px;
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
    }
  }
}
</style>