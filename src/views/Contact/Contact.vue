<script setup>
import { useRoute } from 'vue-router'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'

const route = useRoute()
const servicesList = {
  txt:'CONTACT',
  title:'お問い合わせ',
  path:'/contact',
}
</script>

<template>
   <div class="services">
    <div class="services-content">
      <Breadcrumb :List="servicesList"></Breadcrumb>
      <div class="main-content bg-img">
        <div class="content-wrapper bx">
          <section class="box">
            <div class="content">
              <p class="p-desc">
                弊社へのお問い合わせ、お見積もりは下記のフォームより受け付けております。
                <br/>
                内容確認後、折り返し、弊社担当よりご連絡さしあげます。
              </p>
              <div class="phone-wrapper">
                <p class="tel-box">
                  お電話でのお問い合わせはこちら
                  <span class="tel">
                    026-746-9877
                  </span>
                </p>
              </div>
              <div class="step-warpper">
                <p class="step1 active">
                  入力画面
                </p>
                <p class="step2">
                  確認画面
                </p>
                <p class="step3">
                  送信完了
                </p>
              </div>
              <h3 class="tips">
                <span>必須</span>
          の項目は必ずご入力ください。
              </h3>
              <form class="form-wrapper">
                <table>
                  <tbody>
                    <tr>
                      <th>御社名</th>
                      <td>
                        <input type="text">
                      </td>
                    </tr>
                    <tr>
                      <th>お名前
                        <span class="require">必須</span>
                      </th>
                      <td>
                        <input type="text">
                      </td>
                    </tr>
                    <tr>
                      <th>お名前(フリガナ)</th>
                      <td>
                        <input type="text">
                      </td>
                    </tr>
                    <tr>
                      <th>メールアドレス
                        <span class="require">必須</span>
                      </th>
                      <td>
                        <input type="text">
                      </td>
                    </tr>
                    <tr>
                      <th>電話番号</th>
                      <td>
                        <input type="text">
                      </td>
                    </tr>
                    <tr>
                      <th>お問い合わせ内容
                        <span class="require">必須</span>
                      </th>
                      <td>
                        <textarea class="textarea"></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <p class="agree">
                <a  class="link-txt">
                  個人情報保護方針
                </a>
                をご確認いただき、同意の上送信ください。
              </p>
              <div class="btn-gropu">
                <input type="submit" value="内容を確認する »" class="sub-btn">
                <input type="reset" value="リセット" class="sub-btn" style="background-color: #888;">
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content{
  width: 100%;
  padding: 0 25px;
  overflow: hidden;
  box-sizing: border-box;
  &.bg-img{
    background: url('../../assets/img/download.gif')repeat;
  }
  .content-wrapper{
    background-color: #fff;
    &.bx{
      max-width: 1120px;
      margin: 0 auto;
    }
    .box{
      width: auto;
      padding: 20px 40px 80px;
      .content{
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        @media all and (min-width: 770px){
          .step-warpper{
            margin-bottom: 50px;
            position: relative;
            display: flex;
            .step1{
              margin-right: 5%;
              width: 30%;
              height: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 125%;
              color: #111;
              background: #f0dfe0;
              &::after{
                content: "";
                position: absolute;
                top: 0;
                left: 30%;
                height: 0;
                width: 0;
                border: 25px solid transparent;
                border-left-color: #df0011;
              } 
            }
            .step2{
              margin-right: 5%;
              width: 30%;
              height: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 125%;
              color: #111;
              background: #f0dfe0;
              &::after{
                content: "";
                position: absolute;
                top: 0;
                left: 30%;
                height: 0;
                width: 0;
                border: 25px solid transparent;
                border-left-color: #df0011;
              } 
            }
            .step3{
              width: 30%;
              height: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 125%;
              color: #111;
              background: #f0dfe0;
            }
            .active{
              background: #df0011;
              color: #fff;
            }
          }
          .phone-wrapper{
            width: 80%;
            background: #f0f0f0;
            padding: 30px;
            margin: 0 auto 70px;
            .tel-box{
              text-align: center;
              font-size: 125%;
              .tel{
                font-family: Roboto Condensed,sans-serif;
                font-size: 30px;
                color: #df0011;
                margin-left: 12px;
                letter-spacing: .04em;
              }
            }
          }
          .form-wrapper{
            table{
              width: 100%;
              border-collapse: separate;
              margin-bottom: 40px;
              text-align: left;
              th{
                width: 30%;
                vertical-align: top;
                padding: 5px 0;
              }
              td{
                width: 75%;
                vertical-align: top;
                padding: 5px 0;
                position: relative;
                input{
                  width: 90%;
                  border: 1px solid #dedede;
                  padding: 5px 10px;
                  border-radius: 4px;
                }
                .textarea{
                  width: 100%;
                  height: 150px;
                  border: 1px solid #dedede;
                  padding: 5px 10px;
                  border-radius: 4px;
                }
              }
            }
            .require{
              display: inline-block;
              padding: 1px 5px;
              background-color: #be251d;
              color: #fff;
              font-size: 10px;
              margin-left: 7px;
              border-radius: 3px;
            }
          }
          .btn-gropu{
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            .sub-btn{
              margin-right: 10px;
              padding: 12px 15px;
              background-color: #df0011;
              font-size: 18px;
              color: #fff;
              transition: all .5s ease;
              border: none;
              cursor: pointer;
            }
          }
        }
        @media all and (max-width: 769px){
          .step-warpper{
            margin-bottom: 50px;
            position: relative;
            display: flex;
            .step1{
              margin-right: 5%;
              width: 25%;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 100%;
              color: #111;
              background: #f0dfe0;
              &::after{
                content: "";
                position: absolute;
                top: 0;
                left: 25%;
                height: 0;
                width: 0;
                border: 20px solid transparent;
                border-left-color: #df0011;
              } 
            }
            .step2{
              margin-right: 5%;
              width: 25%;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 100%;
              color: #111;
              background: #f0dfe0;
              &::after{
                content: "";
                position: absolute;
                top: 0;
                left: 55%;
                height: 0;
                width: 0;
                border: 20px solid transparent;
                border-left-color: #f0dfe0;
              } 
            }
            .step3{
              width: 25%;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 100%;
              color: #111;
              background: #f0dfe0;
            }
            .active{
              background: #df0011;
              color: #fff;
            }
          }
          .phone-wrapper{
            width: 100%;
            padding: 15px 10px;
            margin: 0 auto 50px;
            background: #f0f0f0;
            .tel-box{
              text-align: center;
              font-size: 100%;
              .tel{
                font-size: 20px;
                color: #df0011;
                padding-top: 10px;
                display: block;
              }
            }
          }
          .form-wrapper{
            table{
              width: 100%;
              border-collapse: separate;
              margin-bottom: 30px;
              text-align: left;
              th{
                background: #ece8e6;
                font-weight: 700;
                padding: 10px;
                border: 1px solid #ece8e6;
                width: 100%;
                display: block;
              }
              td{
                padding: 10px;
                border: 1px solid #ece8e6;
                width: 100%;
                display: block;
                input{
                  width: 90%;
                  border: 1px solid #dedede;
                  padding: 5px 10px;
                  border-radius: 4px;
                }
                .textarea{
                  width: 100%;
                  height: 150px;
                  border: 1px solid #dedede;
                  padding: 5px 10px;
                  border-radius: 4px;
                }
              }
            }
            .require{
              display: inline-block;
              padding: 1px 5px;
              background-color: #be251d;
              color: #fff;
              font-size: 10px;
              margin-left: 7px;
              border-radius: 3px;
            }
          }
          .btn-gropu{
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            .sub-btn{
              margin-right: 10px;
              padding: 12px 15px;
              background-color: #df0011;
              font-size: 18px;
              color: #fff;
              transition: all .5s ease;
              border: none;
              cursor: pointer;
            }
          }
        }
        .p-desc{
          margin-bottom: 50px;
        }
        .tips{
          margin-bottom: 40px;
          span{
            display: inline-block;
            padding: 1px 5px;
            background-color: #be251d;
            color: #fff;
            font-size: 10px;
            margin-left: 7px;
            border-radius: 3px;
          }
        }
        .agree{
          margin-bottom: 40px;
          .link-txt{
            color: #df0011;
            text-decoration: none;
            transition: all .4s ease;
          }
        }
      }
    }
  }
}
</style>