<script setup>
let  googleMapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6425.395152456146!2d138.55440075561017!3d36.368103591937036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dd1e1ee2be0ef%3A0x16d8ddc9db507d82!2z44CSMzg5LTAxMTEg6ZW36YeO55yM5YyX5L2Q5LmF6YOh6Lu95LqV5rKi55S66ZW35YCJ5Y2D44Kx5rud6KW_5Yy677yV77yZ77yT77yT4oiS77yV!'
let  googleMapEmbedUrl2 = "https://maps.google.com/maps?q=〒224-0003 神奈川県横浜市中川中央1-35-16 マイキャッスルセンター北202室&t=m&z=15&output=embed&iwloc=near&region=JP"

</script>

<template>
  <div class="child4">
    <div class="title">
      <span class="en">ACCESS</span>
      <span class="ja">アクセス</span>
    </div>
    <section class="section">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">アクセスマップ</span>
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
              <th>所在地</th>
              <td>
                <p>
                  〒389-0111 長野県北佐久郡軽井沢町大字長倉５９３３ー５<br/>
                  TEL. 026-746-9877 <br/><br/>
                  〒224-0003 神奈川県横浜市都筑区中川中央１ー３５ー１６<br/>
                  マイキャッスルセンター北２０２室<br/>
                  TEL. 045-507-5873
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="google-map">
          <iframe
            width="100%"
            height="400"
            :src="googleMapEmbedUrl"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="google-map">
          <iframe
            width="100%"
            height="400"
            :src="googleMapEmbedUrl2"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.child4{
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
      .google-map {
        width: 100%;
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
      .google-map {
        width: 100%;
      }
    }
  }
}
</style>