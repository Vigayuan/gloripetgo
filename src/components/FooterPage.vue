<template>
    <footer class="footer">
      <div class="footer-inner">
        <div class="brand">
          <img src="../assets/images/logo-blue-color.svg" alt="">
        </div>
        <div class="f-menu">
          <div>Products</div>
          <div>Why healthy</div>
          <div>Our story</div>
          <div>Support</div>
        </div>
        <div class="f-message">
          <div class="f-message-text">@Gloripetgo</div>
          <div class="logo">
            <div class="icon">
              <img src="../assets/images/icon-ins.svg" alt="">
            </div>
            <div class="icon">
              <img src="../assets/images/icon-youtube.svg" alt="">
            </div>
            <div class="icon">
              <img src="../assets/images/icon-facebook.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">© 2025 “Gloripetgo” marks are trademarks of CANADA ANNOK PETFOODS INC. All Rights Reserved.
      </div>
    </footer>

</template>
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
