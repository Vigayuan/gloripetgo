<template>
    <!-- Top nav -->
    <header class="topnav">
        <div class=" nav-inner">
            <nav class="menu">
                <div class="product-block">
                    <div class="text">Products</div>
                    <img class="products-arrow" src="../assets/images/products-arrow.svg" alt="">
                    <div class="arrow-down-block">
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                    </div>
                </div>
                <div>Why healthy</div>
                <div>Our story</div>
                <div>About us</div>
            </nav>
            <div class="logo">
                <img src="../assets/images/Icon-Gloripetgo-logo.svg" alt="">
            </div>
            <div class="icons-list">
                <div class="icon">
                    <img src="../assets/images/icon-facebook.svg" alt="">
                </div>
                <div class="icon">
                    <img src="../assets/images/icon-youtube.svg" alt="">
                </div>
                <div class="icon">
                    <img src="../assets/images/icon-ins.svg" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

  .topnav {
    width: 100%;
    height: 80px;
    background: #212995;

    .nav-inner {
      box-sizing: border-box;
      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 50px;
      margin: 0 auto;

      .menu {
        width: 40%;
        display: flex;
        color: #fff;
        font-family: "Oswald-SemiBold";
        font-size: 18px;
        line-height: 80px;

        .product-block {
          position: relative;

          .products-arrow {
            position: absolute;
            top: 39px;
            right: 10px;
            width: 13px;
            cursor: pointer;
          }

          .arrow-down-block {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: 0;
            /* 初始高度 0 */
            overflow: hidden;
            /* 超出部分隐藏 */
            z-index: 100;
            background: #fff;
            transition: height 0.3s ease;
            /* 过渡效果 */
          }

          &:hover {
            .arrow-down-block {
              height: 100px;
              /* hover 时展开到 100px */
            }
          }

        }

        div {
          cursor: pointer;
          margin-right: 30px;
        }
      }

      .logo {
        width: 70px;
        height: auto;
      }

      .icons-list {
        width: 40%;
        display: flex;
        flex-direction: row-reverse;

        .icon {
          cursor: pointer;
          margin-left: 20px;
          width: 40px;
        }
      }
    }
  }
</style>