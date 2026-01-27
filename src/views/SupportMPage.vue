<template>
  <div class="landing-page">

    <HeaderMPage />

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="../assets/m/contact-p1.jpg" alt="">
      </div>
    </section>

    <!-- Unleash energy -->
    <section class="unleash" ref="boxRef">
      <img style="height: 900px;width:100%" src="../assets/m/contact-p3.png" alt="">
      <div class="unleash-content">
        <div class="title1">
          GET IN <br>
          TOUCH
        </div>
        <div class="title2">
          Ensure comprehensive nutrition and health protection for your pet with every delicious bite.
        </div>
        <div class="input-block">
          <div class="inner-input-block">
            <div class="name-input">
              <div class="first-name">
                <div>FIRST NAME:</div>
                <input type="text" id="firstName" v-model="firstName" />
              </div>
              <div class="last-name">
                <div>LAST NAME:</div>
                <input type="text" id="lastName" v-model="lastName" />
              </div>
            </div>
            <div class="email">E-MAIL:</div>
            <div class="email-input">
              <input type="text" id="email" v-model="email" />
            </div>
            <div class="message">MESSAGE:</div>
            <div class="message-input">
              <textarea type="text" id="message" v-model="messageContent" />
            </div>
          </div>
          <div class="btn-group">
            <div class="btn-block">
              <button class="btn btn-send" @click="sendForm">SEND</button>
              <button class="btn btn-clear" @click="clearForm">CLEAR</button>
            </div>
          </div>
        </div>
        <img class="keli" src="../assets/imgs/contact/keli.png" alt="">
      </div>
    </section>

    <div class="contact-info-1">
      <img src="../assets/imgs/contact/contact_02.jpg" alt="">
      <div class="text1">INSTINCT FIRST <br>
        NATURE ALWAYS</div>
    </div>
    <div class="contact-info-2">
      <img src="../assets/imgs/contact/contact_03.jpg" alt="">
      <div class="text-wrapper">
        <div class="text">RECLAIM THE<br> ANCIENT DIET</div>
        <div class="text">100%<br>
          CARNIVORE<br>
          IDENTITY</div>
        <div class="text">VISIBLE<br>
          WILD HEALTH</div>
      </div>
    </div>

    <FooterMPage />
  </div>
</template>

<script setup>
import HeaderMPage from "@/components/HeaderMPage.vue";
import FooterMPage from "@/components/FooterMPage.vue";
import { message } from 'ant-design-vue';
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const messageContent = ref("");
import emailjs from "emailjs-com"


const sendMail = () => {
  emailjs.send(
    "service_85ubcj6",     // 你的服务ID
    "template_z5lxlk2",    // 邮件模板ID
    {
      to_email: "schrainpetfoods@gmail.com",
      user_name: `${firstName.value} ${lastName.value}`,
      message: `${messageContent.value}`,
      user_email: `${email.value}`
    },
    "WjproCWEzSMb7p60H"         // public key
  ).then(() => {
    message.info('Eamil sent successfully');
  }).catch(err => {
    console.log(err);
    message.info('Email sent failed');
  })
}

const sendForm = () => {
  if (!firstName.value || !lastName.value || !email.value || !messageContent.value) {
    alert("请填写完整信息");
    return;
  }
  sendMail()
};

const clearForm = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  messageContent.value = "";
};
</script>
<style lang="scss" scoped>
.landing-page {
  width: 100%;
  background: #e8e8e8;

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;

    .hero-bg {
      height: 300px;
      overflow: hidden;

      img {
        width: 100%;
        transform: translateY(-30px);
        animation: moveUp 10s ease-out 0.5s forwards;
      }
    }

    @keyframes moveUp {
      to {
        transform: translateY(-70px);
      }
    }
  }

  .unleash {
    position: relative;
    height: 900px;

    img {
      width: 100%;
    }

    margin-top: -90px;

    .unleash-content {
      width: 90%;
      top: 110px;
      height: calc(100% - 110px);
      position: absolute;
      left: 5%;

      .keli {
        position: absolute;
        width: 290px;
        bottom: -145px;
        left: 50px;
        z-index: 100;
      }

      .title1 {
        font-family: "RedHatDisplay-Bold";
        font-size: 28px;
        line-height: 1;
        text-align: left;
        color: #efe8db;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        padding: 0 20px;
      }

      .title2 {
        font-family: "Oswald-Regular";
        font-size: 10px;
        line-height: 1.5;
        width: 50%;
        text-align: left;
        color: #efe8db;
        position: absolute;
        top: 0;
        left: 50%;
        padding: 0 20px;
      }

      .input-block {
        box-sizing: border-box;
        position: absolute;
        top: 85px;
        width: 88%;
        left: 6%;
        color: #efe8db;

        .inner-input-block {
          text-align: left;

          .name {
            font-family: "RedHatDisplay-Bold";
            font-size: 12px;
            line-height: 1.5;
          }

          .name-input {
            display: flex;
            justify-content: space-between;

            .first-name {
              width: 45%;

              div {
                font-family: "RedHatDisplay-Medium";
                font-size: 12px;
                line-height: 1.5;
              }
            }

            .last-name {
              width: 45%;

              div {
                font-family: "RedHatDisplay-Medium";
                font-size: 12px;
                line-height: 1.5;
              }
            }
          }

          .email {
            font-family: "RedHatDisplay-Bold";
            font-size: 12px;
            line-height: 1.5;
            margin-top: 20px;
          }

          .email-input {
            display: flex;
            justify-content: space-between;

            .first-name {
              width: 20%;

              div {
                font-family: "RedHatDisplay-Medium";
                font-size: 12px;
                line-height: 1.5;
              }
            }

            .last-name {
              width: 45%;

              div {
                font-family: "RedHatDisplay-Medium";
                font-size: 12px;
                line-height: 1.5;
              }
            }
          }

          .message {
            font-family: "RedHatDisplay-Bold";
            font-size: 12px;
            line-height: 1.5;
            margin-top: 20px;
          }

          .message-input {
            display: flex;
            justify-content: space-between;

            .first-name {
              width: 45%;

              div {
                font-family: "RedHatDisplay-Medium";
                font-size: 12px;
                line-height: 1.5;
              }
            }

            .last-name {
              width: 45%;

              div {
                font-family: "RedHatDisplay-Medium";
                font-size: 12px;
                line-height: 1.5;
              }
            }
          }

          input,
          textarea {
            border: 1px solid #fff;
            padding: 8px;
            font-size: 28px;
            outline: none;
            width: 100%;
            border-radius: 10px;
            color: #fff;
            background-color: #6d6d6d;
            margin-top: 5px;
          }

          textarea {
            min-height: 220px;
            resize: none;
          }
        }

        .btn-group {
          position: relative;
          margin: 0 auto;
          padding: 20px 0 0;
          height: 40px;

          .btn-block {
            padding: 0 10px;
            position: absolute;
            left: 0;
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        }

        .btn {
          border: none;
          width: 100px;
          height: 25px;
          font-size: 12px;
          line-height: 25px;
          cursor: pointer;
        }

        .btn-send {
          background-color: #e60012;
          color: #fff;
        }

        .btn-clear {
          background-color: #efe8db;
          color: #1f160b;
        }
      }
    }
  }

  .contact-info-1 {
    position: relative;

    img {
      width: 100%;
    }

    .text1 {
      position: absolute;
      bottom: 88px;
      font-family: "Oswald-Medium";
      font-size: 80px;
      line-height: 1.2;
      color: #fff;
      text-shadow: 0 0 18px #000;
      left: 50%;
      text-align: left;
      transform: translateX(-600px);
    }
  }

  .contact-info-2 {
    position: relative;

    img {
      width: 100%;
    }

    .text-wrapper {
      position: absolute;
      width: 100%;
      top: 50px;
      left: 50%;
      margin-left: -600px;
      display: flex;
      justify-content: space-between;

      .text {
        font-family: "Oswald-Medium";
        font-size: 41px;
        line-height: 1.2;
        color: #1f160b;
        text-align: left;
      }
    }
  }
}
</style>