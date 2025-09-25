<template>
  <div class="landing-page">
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

    <!-- Hero -->
    <section class="hero">
      <img src="../assets/images/bg_01.jpg" alt="">
      <img src="../assets/images/bg_02.jpg" alt="">
      <img src="../assets/images/bg_03.jpg" alt="">
      <img src="../assets/images/bg_04.jpg" alt="">
      <img src="../assets/images/bg_05.jpg" alt="">
      <img src="../assets/images/bg_06.jpg" alt="">
      <div class="title1">
        Daily <br>
        Defense <span class="title1-sub1">in</span> <span class="title1-sub2">Every Bite</span>
      </div>
      <div class="title2">
        Ensure comprehensive nutrition and health protection for your pet with every delicious bite.
      </div>
      <div class="btn-leran-more">
        LEARN MORE
      </div>
    </section>

    <!-- Unleash energy -->
    <section class="unleash " ref="boxRef">
      <img src="../assets/images/bg_07.jpg" alt="">
      <img src="../assets/images/bg_08.jpg" alt="">
      <img src="../assets/images/bg_09.jpg" alt="">
      <img src="../assets/images/bg_10.jpg" alt="">
      <img src="../assets/images/bg_11.jpg" alt="">
      <img src="../assets/images/bg_12.jpg" alt="">
      <div class="particle" :class="{ show }">
        <img src="../assets/images/particle.png" alt="">
      </div>
      <div class="unleash-text1">
        <div class="text-sub1">Let your pets</div>
        <div class="text-sub2">unleash their</div>
        <div class="text-sub3">Joy&Energy!</div>
      </div>
      <div class="unleash-text2">
        With Gloripetgo™, you're not just filling their<br>bowls—you’re fueling their lives with irresistible,
        <br>nourishing meals. Plus, every bite helps pets beyond your<br> own, spreading happiness all around.
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="products">
      <h3 class="products-text1">Discover <span class="sub1">Our </span><span class="sub2">Products</span></h3>
      <div class="product-grid">
        <div class="product-card">
          <img src="../assets/images/pd1.png" alt="">
          <div class="tag1">IMMUNE SUPPORT</div>
          <div class="tag2">JOINT CARE</div>
        </div>
        <div class="product-card">
          <img src="../assets/images/pd2.png" alt="">
          <div class="tag1">IMMUNE SUPPORT</div>
          <div class="tag2">SKIN & COAT HEALTH</div>
        </div>
        <div class="product-card">
          <img src="../assets/images/pd3.png" alt="">
          <div class="tag1">IMMUNE SUPPORT</div>
          <div class="tag2">URINARY HEALTH</div>
        </div>
      </div>
    </section>

    <section class="brand-logo">
      <div class="logo-list">
        <img src="../assets/images/icon-MSC.svg" alt="">
        <img src="../assets/images/icon-aafco.svg" alt="">
        <img src="../assets/images/icon-Global-Animal.svg" alt="">
        <img src="../assets/images/icon-FDA.svg" alt="">
        <img src="../assets/images/icon-CFIA.svg" alt="">
        <img src="../assets/images/icon-SQF.svg" alt="">
      </div>
    </section>

    <div class="swiper-block">
      <div class="swiper-block-text">
        <div class="swiper-block-text1">The ingredients from</div>
        <div class="swiper-block-text2">Arctic Glaciers Align</div>
        <div class="swiper-block-text3">with natural nutrition.</div>
      </div>
      <Swiper :modules="modules" :loop="true" :slides-per-view="2.5" :pagination="{ clickable: true }" :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
      }" class="swiper-box">
        <SwiperSlide>
          <div class="slide-item">
            <img src="../assets/images/swiper-item-1.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item">
            <img src="../assets/images/swiper-item-2.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item">
            <img src="../assets/images/swiper-item-3.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item">
            <img src="../assets/images/swiper-item-4.jpg" alt="">
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="custom-prev">
        <img src="../assets/images/icon-arrow.svg" alt="">
      </div>
      <div class="custom-next">
        <img src="../assets/images/icon-arrow.svg" style="transform: rotate(180deg);" alt="">
      </div>
    </div>
    <!-- Philosophy -->
    <section class="philosophy">
      <img src="../assets/images/bg_14.jpg" alt="">
      <img src="../assets/images/bg_15.jpg" alt="">
      <img src="../assets/images/bg_16.jpg" alt="">
      <img src="../assets/images/bg_17.jpg" alt="">
      <div class="phil-text1">Product</div>
      <div class="phil-text2">Philosophy</div>
      <div class="phil-items">
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/images/icon-Natural.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Natural</div>
            <div class="phil-right-text2">Chemical elements bring too many allergy risks.</div>
          </div>
        </div>
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/images/icon-health.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Health</div>
            <div class="phil-right-text2">Defense Three meals a day reduce the risk of illness.</div>
          </div>
        </div>
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/images/icon-fresh.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Fresh</div>
            <div class="phil-right-text2">Freshness from the original material to the whole processing of the product.
            </div>
          </div>
        </div>
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/images/icon-convenient.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Convenient</div>
            <div class="phil-right-text2">Keep food fresh high-cost & highly effective Easy Lock ensures freshness.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials + CTA -->
    <section class="cta">
      <div class="cta-left">
        <Swiper :modules="modules" :loop="true" :slides-per-view="3.5" :pagination="{ clickable: true }" :navigation="{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }" class="swiper-box">
          <SwiperSlide>
            <div class="slide-item">
              <img src="../assets/images/swiper-item-1.jpg" style="width:250px" alt="">
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-item">
              <img src="../assets/images/swiper-item-2.jpg" style="width:250px" alt="">
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-item">
              <img src="../assets/images/swiper-item-3.jpg" style="width:250px" alt="">
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-item">
              <img src="../assets/images/swiper-item-4.jpg" style="width:250px" alt="">
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="cta-right">
        <img src="../assets/images/icon-talk.svg" alt="">
        <div class="cta-text1">The Truth <br>
          Behind<br>
          <span>the Taste</span>
        </div>
      </div>
    </section>

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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
const boxRef = ref(null);
const show = ref(false);
const modules = [Pagination, Navigation, Autoplay]
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target, entry.boundingClientRect, entry.isIntersecting);
          show.value = true; // 进入视口时触发动画
        } else {
          show.value = false;
        }
      });
    },
    {
      threshold: 0,             // 只要有一点进入就检测
      rootMargin: "0px 0px -30% 0px"
    }
  );

  if (boxRef.value) {
    observer.observe(boxRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer && boxRef.value) {
    observer.unobserve(boxRef.value);
  }
});
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;
  background: #e8e8e8;

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

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;

    img {
      width: 100%;
    }

    .title1 {
      position: absolute;
      bottom: 7%;
      left: 4%;
      font-family: "RedHatDisplay-Bold";
      font-size: 132px;
      line-height: 108px;
      text-align: left;

      .title1-sub1 {
        display: inline-block;
        font-size: 55px;
        vertical-align: 10px;
        margin-left: -5px;
      }

      .title1-sub2 {
        font-family: "RedHatDisplay-Regular";
        font-size: 55px;
        vertical-align: 10px;
        margin-left: -15px;
      }
    }

    .title2 {
      position: absolute;
      bottom: 30%;
      right: 63px;
      font-family: "Oswald-Regular";
      font-size: 16px;
      line-height: 1.5;
      width: 322px;
      text-align: left;
    }

    .btn-leran-more {
      cursor: pointer;
      position: absolute;
      bottom: 19%;
      right: 75px;
      font-family: "RedHatDisplay-Bold";
      border: 3px solid #fff;
      border-radius: 25px;
      font-size: 16px;
      width: 130px;
      height: 32px;
      line-height: 32px;
    }
  }

  .unleash {
    position: relative;
    font-size: 0;

    img {
      width: 100%;
    }

    .particle {
      position: absolute;
      top: 45px;
      left: 0;
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;
    }

    .particle.show {
      opacity: 1;
      transform: translateY(0);
    }

    .unleash-text1 {
      position: absolute;
      top: 24%;
      left: 11%;
      color: #212995;

      .text-sub1 {
        font-family: "RedHatDisplay-Bold";
        font-size: 40px;
        line-height: 1;
        text-align: left;
      }

      .text-sub2 {
        font-family: "RedHatDisplay-Bold";
        font-size: 45px;
        line-height: 1;
        text-align: left;
      }

      .text-sub3 {
        font-family: "Khalila";
        font-size: 65px;
        line-height: 1;
        text-align: left;
        color: #a1a1a1;
      }
    }

    .unleash-text2 {
      position: absolute;
      bottom: 20%;
      right: 3%;
      color: #212995;
      font-family: "Oswald-Regular";
      font-size: 18px;
      line-height: 1;
      text-align: center;
    }
  }

  .products {
    .products-text1 {
      font-family: "RedHatDisplay-Regular";
      font-size: 30px;
      line-height: 1;
      text-align: center;
      color: #212995;
      padding: 50px 0;
      margin: 0;

      .sub1 {
        font-family: "RedHatDisplay-Bold";
        font-weight: bold;
      }

      .sub2 {
        font-family: "RedHatDisplay-Bold";
        font-weight: bold;
      }
    }

    .product-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0 auto;

      .product-card {
        cursor: pointer;
        width: 30%;
        height: auto;

        img {
          width: 100%;
          max-width: 350px;

          &:hover {
            transform: scale(1.05);
          }
        }

        .tag1 {
          font-family: "RedHatDisplay-Bold";
          font-size: 14px;
          line-height: 1;
          text-align: center;
          color: #212995;
          height: 14px;
        }

        .tag2 {
          font-family: "RedHatDisplay-Bold";
          font-size: 30px;
          line-height: 1;
          text-align: center;
          color: #212995;
          width: 270px;
          margin: 0 auto;
          height: 60px;
        }
      }
    }
  }

  .brand-logo {
    padding: 40px 0;

    .logo-list {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      padding: 30px 5%;
      border-top: 1px solid #7c7c7c;
      border-bottom: 1px solid #7c7c7c;

      img {
        cursor: pointer;
        height: 40px;
      }
    }
  }

  .swiper-block {
    position: relative;

    .swiper-block-text {
      width: 100%;
      text-align: center;
      color: #212995;
      padding: 20px 0 30px;
      overflow: visible;

      .swiper-block-text1 {
        font-family: "RedHatDisplay-Medium";
        font-size: 22px;
        line-height: 1;
        font-style: italic;
      }

      .swiper-block-text2 {
        font-family: "RedHatDisplay-Bold";
        font-size: 40px;
        line-height: 1.2;
      }

      .swiper-block-text3 {
        font-family: "RedHatDisplay-Regular";
        font-size: 32px;
        line-height: 1;
      }
    }

    .custom-prev {
      position: absolute;
      top: 50%;
      cursor: pointer;
      left: 5%;
      width: 40px;
      height: 40px;
      z-index: 100;

      img {
        width: 100%;
      }
    }

    .custom-next {
      position: absolute;
      top: 50%;
      cursor: pointer;
      right: 5%;
      width: 40px;
      height: 40px;
      z-index: 100;

      img {
        width: 100%;
      }
    }

    :deep(.swiper-box) {
      .swiper-button-prev {
        top: 40% !important;
        left: 10%;
        background-image: url(../assets/images/icon-arrow.svg);
        background-repeat: no-repeat;
      }

      .swiper-button-next {
        top: 40% !important;
        right: 10%;
      }
    }

    .swiper-box {
      :deep(.swiper-pagination) {
        width: 200px;
        height: 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;

        .swiper-pagination-bullet {
          cursor: pointer;
          display: block;
          background: #505050;
          border: 1px solid #505050;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          border-radius: 10px;
        }

        .swiper-pagination-bullet-active {
          background: #e8e8e8;
          border: 1px solid #505050;
          opacity: 1;
        }

      }

      .slide-item {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }

  .philosophy {
    position: relative;
    font-size: 0;
    color: #fff;

    img {
      width: 100%;
    }

    .phil-text1 {
      position: absolute;
      font-family: "RedHatDisplay-Regular";
      font-size: 45px;
      line-height: 1;
      top: 40px;
      left: 6%;
    }

    .phil-text2 {
      position: absolute;
      font-family: "RedHatDisplay-Bold";
      font-size: 60px;
      line-height: 1;
      top: 85px;
      left: 6%;
    }

    .phil-items {
      position: absolute;
      font-size: 50px;
      line-height: 1;
      top: 195px;
      left: 10%;
      display: flex;
      flex-wrap: wrap;
      width: 520px;
      justify-content: space-between;

      .phil-item {
        width: 230px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        .phil-left {
          width: 50px;

          .img {
            width: 100%;
          }
        }

        .phil-right {
          width: 170px;

          .phil-right-text1 {
            font-family: "RedHatDisplay-Regular";
            font-size: 38px;
            line-height: 1;
            text-align: left;
          }

          .phil-right-text2 {
            font-family: "Oswald-Regular";
            font-size: 14px;
            line-height: 1;
            text-align: left;
            margin-top: 10px;
          }
        }
      }
    }
  }

  .cta {
    background: #f25929;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 500px;

    .cta-left {
      width: 70%;
    }

    .cta-right {
      position: relative;
      width: 30%;
      height: 100%;

      img {
        position: absolute;
        top: 200px;
        right: 12%;
        width: 80px;
      }

      .cta-text1 {
        position: absolute;
        top: 280px;
        right: 10%;
        width: 200px;
        font-family: "RedHatDisplay-Medium";
        font-size: 40px;
        line-height: 1;
        text-align: right;
        color: #212995;

        span {
          font-family: "RedHatDisplay-Black";
        }
      }
    }
  }

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
}

// 媒体查询
@media (min-width: 1600px) {
  .landing-page {
    .topnav {
      .nav-inner {
        max-width: 1400px;
      }
    }
  }
}

@media (min-width: 1920px) {
  .landing-page {
    .topnav {
      .nav-inner {
        max-width: 1720px;
      }
    }
  }
}

@media (min-width: 2560px) {
  .landing-page {
    .topnav {
      .nav-inner {
        max-width: 1600px;
      }
    }
  }
}
</style>
