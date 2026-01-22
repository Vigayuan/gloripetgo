<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="brand">
        <img src="../assets/imgs/schrain-logo.png" alt="">
      </div>
      <div class="f-right">
        <div class="f-bottom-text">INSTINCT FIRST <span>NATURE ALWAYS</span></div>
        <div class="f-message">
          <div class="logo">
            <div @click="openWindow(3)" class="icon">
              <img src="../assets/imgs/icon-ins.svg" alt="">
            </div>
            <div @click="openWindow(2)" class="icon">
              <img src="../assets/imgs/icon-youtube.svg" alt="">
            </div>
            <div @click="openWindow(1)" class="icon">
              <img src="../assets/imgs/icon-facebook.svg" alt="">
            </div>
          </div>
        </div>
        <div class="f-menu">
          <div @click="goPd">PRODUCTS</div>
          <div @click="goWhy">WHY SCHRAIN</div>
          <div @click="goSupport">CONTACT</div>
        </div>
      </div>
    </div>
    <div class="copyright">© 2026 SCHRAIN ARE TRADENARKS OF CANADA ANNOK PETFOODS INC All Rights Reserved.</div>
  </footer>

</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goPd = () => {
  router.push({ name: 'Products' })
}
const goWhy = () => {
  router.push({ name: 'whyus' });
}
// const goStory = () => {
//   router.push({ name: 'Ourstory' });
// }
const goSupport = () => {
  router.push({ name: 'Support' });
}
const openWindow = (index) => {
  if (index == 1) {
    window.open('https://www.facebook.com/share/1GTfXNJgyP/?mibextid=wwXIfr', "_blank")
  }
  else if (index == 2) {
    window.open('https://youtube.com/@schrain-m7k?si=QJXMeFB-wNk63Hbp', "_blank")
  }
  else {
    window.open('https://www.instagram.com/schrainpetfoods?igsh=MnZzN3RxMjVyeTUw&utm_source=qr', "_blank")
  }
}
</script>
<style lang="scss" scoped>
.footer {
  padding: 0 0 50px;
  background: #1f160b;

  .footer-inner {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 150px;
    .brand {
      width: 185px;
      margin-top: -5px;
      img {
        width: 100%;
      }
    }
    .f-right {
      flex: 1;
      padding: 20px 100px;
      .f-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Oswald-Medium";
        font-size: 22px;
        line-height: 1;
        color: #fff;
        padding-top: 35px;

        div {
          cursor: pointer;
        }
      }

      .f-message {
        width: 140px;
        padding-top: 28px;

        .logo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          .icon {
            cursor: pointer;
            width: 35px;

            img {
              width: 100%;
            }
          }
        }
      }
      .f-bottom-text {
        font-family: "Oswald-Medium";
        font-size: 48px;
        line-height: 1;
        color: #fff;
        text-align: left;
        span {
          color: #f39800;
        }
      }
    }
  }

  .copyright {
    font-family: "Oswald-Regular";
    font-size: 18px;
    line-height: 1;
    color: #fde2b9;
    margin-top: 30px;
  }
}
</style>
