<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="brand">
        <img src="../assets/images/logo-blue-color.svg" alt="GloriPetgo Logo" />
      </div>

      <div class="f-menu">
        <div @click="goPd">Products</div>
        <div @click="goWhy">Why healthy</div>
        <div @click="goStory">Our story</div>
        <div @click="goAbout">Support</div>
      </div>

      <div class="f-message">
        <div class="line"></div>
        <div class="f-message-text">@GloriPetgo</div>
        <!-- <div class="logo">
          <div @click="openWindow(3)" class="icon">
            <img src="../assets/images/icon-ins.svg" alt="Instagram" />
          </div>
          <div @click="openWindow(2)" class="icon">
            <img src="../assets/images/icon-youtube.svg" alt="YouTube" />
          </div>
          <div @click="openWindow(1)" class="icon">
            <img src="../assets/images/icon-facebook.svg" alt="Facebook" />
          </div>
        </div> -->
      </div>
    </div>

    <div class="copyright">
      © 2025 “GloriPetgo” marks are trademarks of CANADA ANNOK PETFOODS INC. All
      Rights Reserved.
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
  router.push({ name: 'mHealthy' });
}
const goStory = () => {
  router.push({ name: 'mOurstory' });
}
const goAbout = () => {
  router.push({ name: 'mSupport' });
}


// const openWindow = (index) => {
//   const urls = [
//     "",
//     "https://www.facebook.com/profile.php?id=61577967892785",
//     "https://www.youtube.com/@GloriPetgo",
//     "https://www.instagram.com/",
//   ];
//   window.open(urls[index], "_blank");
// };
</script>

<style lang="scss" scoped>
.footer {
  padding: 50px;
  background: #fff;
  text-align: center;

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

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

      .line {
        width: 70%;
        height: 2px;
        background: #212995;
        margin-bottom: 25px;
        margin-left: 15%;
      }

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
    line-height: 1.4;
    color: #212995;
    margin-top: 50px;
    text-align: center;
  }

  /* ----------- 移动端适配 ----------- */
  @media (max-width: 768px) {
    padding: 30px 20px;

    .footer-inner {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .brand {
        width: 120px;
        margin-bottom: 25px;
      }

      .f-menu {
        width: 100%;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        padding-top: 0;

        div {
          margin: 8px 0;
        }
      }

      .f-message {
        width: 100%;
        padding-top: 25px;

        .f-message-text {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .logo {
          justify-content: center;
          gap: 20px;

          .icon {
            width: 30px;
          }
        }
      }
    }

    .copyright {
      font-size: 14px;
      margin-top: 30px;
      line-height: 1.6;
      padding: 0 10px;
    }
  }
}
</style>
