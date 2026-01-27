<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="brand">
        <img src="../assets/imgs/schrain-logo.png" alt="">
      </div>

      <div class="f-menu">
        <div @click="goPd">PRODUCTS</div>
        <div @click="goWhy">WHY SCHRAIN</div>
        <div @click="goSupport">CONTACT</div>
      </div>

      <div class="f-message">
        <div class="logo">
          <div @click="openWindow(3)" class="icon">
            <img src="../assets/imgs/icon-ins.svg" alt="Instagram" />
          </div>
          <div @click="openWindow(2)" class="icon">
            <img src="../assets/imgs/icon-youtube.svg" alt="YouTube" />
          </div>
          <div @click="openWindow(1)" class="icon">
            <img src="../assets/imgs/icon-facebook.svg" alt="Facebook" />
          </div>
        </div>
        <div class="copyright">
          © 2026 SCHRAIN ARE TRADENARKS OF CANADA ANNOK <br>
          PETFOODS INC All Rights Reserved.
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goPd = () => {
  router.push({ name: 'mProducts' })
}

const goWhy = () => {
  router.push({ name: 'whyus' });
}
const goSupport = () => {
  router.push({ name: 'mSupport' });
}


const openWindow = (index) => {
  const urls = [
    "",
    "https://www.facebook.com/share/1GTfXNJgyP/?mibextid=wwXIfr",
    "https://youtube.com/@schrain-m7k?si=QJXMeFB-wNk63Hbp",
    "https://www.instagram.com/schrainpetfoods?igsh=MnZzN3RxMjVyeTUw&utm_source=qr",
  ];
  window.open(urls[index], "_blank");
};
</script>

<style lang="scss" scoped>
.footer {
  background: #000;
  text-align: center;
  height: 330px;
  .footer-inner {
    position: relative;

    .brand {
      position: absolute;
      top: -3px;
      left: 30px;
      width: 85px;

      img {
        width: 100%;
      }
    }

    .f-menu {
      position: absolute;
      top: 35px;
      right: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      width: 160px;
      font-family: "Oswald-Medium";
      font-size: 26px;
      line-height: 1;
      color: #fffbe9;

      div {
        margin-bottom: 20px;
        cursor: pointer;
      }
    }

    .f-message {
      position: absolute;
      width: 260px;
      top: 170px;
      left: 30px;

      .logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 150px;

        .icon {
          width: 25px;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  .copyright {
    font-family: "Oswald-Regular";
    font-size: 11px;
    line-height: 1.2;
    color: #fde2b9;
    margin-top: 10px;
    text-align: left;
  }
}
</style>
