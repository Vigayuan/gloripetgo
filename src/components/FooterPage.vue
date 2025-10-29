<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="brand">
        <img src="../assets/images/logo-blue-color.svg" alt="">
      </div>
      <div class="f-menu">
        <div @click="goPd">Products</div>
        <div @click="goWhy">Why healthy</div>
        <div @click="goStory">Our story</div>
        <div @click="goAbout">Support</div>
      </div>
      <div class="f-message">
        <div class="f-message-text">@GloriPetgo</div>
        <div class="logo">
          <div @click="openWindow(3)" class="icon">
            <img src="../assets/images/icon-ins.svg" alt="">
          </div>
          <div @click="openWindow(2)" class="icon">
            <img src="../assets/images/icon-youtube.svg" alt="">
          </div>
          <div @click="openWindow(1)" class="icon">
            <img src="../assets/images/icon-facebook.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">© 2025 “GloriPetgo” marks are trademarks of CANADA ANNOK PETFOODS INC. All Rights Reserved.
    </div>
  </footer>

</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goPd = () => {
  router.push({ name: 'Products' })
}
const goWhy = () => {
  router.push({ name: 'Healthy' });
}
const goStory = () => {
  router.push({ name: 'ourstory' });
}
const goAbout = () => {
  router.push({ name: 'Support' });
}
const openWindow = (index) => {
  if (index == 1) {
    window.open('https://www.facebook.com/profile.php?id=61577967892785', "_blank")
  }
  else if (index == 2) {
    window.open('https://www.youtube.com/@GloriPetgo', "_blank")
  }
  else {
    window.open('https://www.instagram.com/glori.petgo?igsh=ajc5bmZuNWJ2MWY4&utm_source=qr', "_blank")
  }
}
</script>
<style lang="scss" scoped>
.footer {
  padding: 50px;
  background: #fff;

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .brand {
      width: 150px;

      img {
        width: 100%;
      }
    }

    .f-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      font-family: "Oswald-Medium";
      font-size: 30px;
      line-height: 1;
      color: #212995;
      padding-top: 35px;

      div {
        cursor: pointer;
      }
    }

    .f-message {
      width: 140px;
      padding-top: 35px;
      .f-message-text {
        color: #212995;
        font-family: "Oswald-Medium";
        font-size: 30px;
        line-height: 1;
        margin-bottom: 15px;
      }

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
  }

  .copyright {
    font-family: "Oswald-Regular";
    font-size: 18px;
    line-height: 1;
    color: #212995;
    margin-top: 50px;
  }
}
</style>
