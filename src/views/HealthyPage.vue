<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderPage />

    <!-- Hero -->
    <section class="hero">
      <img src="../assets/images/whyh_bg_02.jpg" alt="">
      <img src="../assets/images/whyh_bg_03.jpg" alt="">
      <img src="../assets/images/whyh_bg_04.jpg" alt="">
      <img src="../assets/images/whyh_bg_05.jpg" alt="">
      <img src="../assets/images/whyh_bg_06.jpg" alt="">
      <img src="../assets/images/whyh_bg_07.jpg" alt="">
      <img src="../assets/images/whyh_bg_08.jpg" alt="">
      <div class="title1">
        Ensuring Your Pet's<br>
        <span class="title1-sub1">Health & Happiness</span>
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
      <img src="../assets/images/whyh_bg_09.jpg" alt="">
      <img src="../assets/images/whyh_bg_10.jpg" alt="">
      <img src="../assets/images/whyh_bg_11.jpg" alt="">
      <img src="../assets/images/whyh_bg_12.jpg" alt="">
      <img src="../assets/images/whyh_bg_13.jpg" alt="">
      <img src="../assets/images/whyh_bg_14.jpg" alt="">
      <img src="../assets/images/whyh_bg_15.jpg" alt="">
      <div class="unleash-text1">
        <div class="text-sub1">At GloriPetGo™, we are dedicated to ensuring that your <span>beloved pet receives
            nutrition, safety, and deliciousness,</span> all while building a solid health barrier. </div>
      </div>
      <div class="unleash-text2">
        We advocate the philosophy of “prevention before illness” with scientifically formulated recipes designed to
        prevent diseases caused by improper daily diets, allowing your pet to live a healthier and worry-free life.
      </div>
      <div class="unleash-text3">
        WE CARE FOR <span>PET HEALTH</span>
      </div>
    </section>
    <div class="advance-block">
      <div class="left">
        <div class="text-block">
          <div class="text-1">
            <div class="text-left">01</div>
            <div class="text-right">Premium<br>
              Ingredients </div>
          </div>
          <div class="line"></div>
          <div class="text-1">
            <div class="text-left">02</div>
            <div class="text-right">Advanced<br>
              Manufacturing<br>
              Techniques</div>
          </div>
          <div class="line"></div>
          <div class="text-1">
            <div class="text-left">03</div>
            <div class="text-right">Scientific<br>
              feeding<br>
              guide</div>
          </div>
        </div>
        <img src="../assets/images/salmon.jpg" alt="">
      </div>
      <div class="right">
        <img src="../assets/images/salmon.jpg" alt="">
      </div>
    </div>
    <div class="good-taste-block">
      <div class="left">
        <div class="text">
          THE INGREDIENTS FROM <br><span>ARCTIC GLACIERS ALIGN</span><br>WITH NATURAL NUTRITION.
        </div>
      </div>
      <div class="right">
        <img src="../assets/images/icon-taste.png" alt="">
      </div>
    </div>
    <div class="nutrition-block">
      <img src="../assets/images/nutrition_bg_02.jpg" alt="">
      <img src="../assets/images/nutrition_bg_03.jpg" alt="">
      <img src="../assets/images/nutrition_bg_04.jpg" alt="">
      <img src="../assets/images/nutrition_bg_05.jpg" alt="">
      <img src="../assets/images/nutrition_bg_06.jpg" alt="">
      <img src="../assets/images/nutrition_bg_07.jpg" alt="">
      <img src="../assets/images/nutrition_bg_08.jpg" alt="">
      <img src="../assets/images/nutrition_bg_09.jpg" alt="">
      <img src="../assets/images/nutrition_bg_10.jpg" alt="">
    </div>
    <div class="swiper-block">
      <Swiper :modules="modules" space-between="30" :loop="true" :slides-per-view="3"   class="swiper-box">
        <SwiperSlide>
          <div class="slide-item" style="background: #3dd8d0;">
            <div class="slide-item-left">
              ARCTIC<br>
              CHAR
            </div>
            <div class="slide-item-right">
              Sourced from the icy waters near the arctic circle, our slow-growing arctic char boasts a delicate flavor
              and is naturally rich in omega-3 fatty acids (EPA & DHA) to nourish your cat’s coat into silky smoothness.
              Its premium, easily digestible protein is gentle on sensitive stomachs, making it ideal for cats with
              dietary sensitivities.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item" style="background: #fc8686;">
            <div class="slide-item-left">
              ARCTIC<br>
              CHAR
            </div>
            <div class="slide-item-right">
              Sourced from the icy waters near the arctic circle, our slow-growing arctic char boasts a delicate flavor
              and is naturally rich in omega-3 fatty acids (EPA & DHA) to nourish your cat’s coat into silky smoothness.
              Its premium, easily digestible protein is gentle on sensitive stomachs, making it ideal for cats with
              dietary sensitivities.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item" style="background: #8acc63;">
            <div class="slide-item-left">
              ARCTIC<br>
              CHAR
            </div>
            <div class="slide-item-right">
              Sourced from the icy waters near the arctic circle, our slow-growing arctic char boasts a delicate flavor
              and is naturally rich in omega-3 fatty acids (EPA & DHA) to nourish your cat’s coat into silky smoothness.
              Its premium, easily digestible protein is gentle on sensitive stomachs, making it ideal for cats with
              dietary sensitivities.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
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

    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script setup>
import {  Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
const modules = [ Autoplay]
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;
  background: #e8e8e8;

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;

    img {
      width: 100%;
    }

    .title1 {
      position: absolute;
      top: 35%;
      left: 10%;
      font-family: "RedHatDisplay-Medium";
      font-size: 60px;
      line-height: 1;
      text-align: center;
      width: 80%;
      /* 动画设置 */
      opacity: 0;
      transform: translateY(-100px);
      animation: dropIn 1s ease-out forwards;

      .title1-sub1 {
        font-family: "RedHatDisplay-black";
        font-size: 66px;
      }
    }
  }

  @keyframes dropIn {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .unleash {
    position: relative;
    font-size: 0;

    img {
      width: 100%;
    }

    .unleash-text1 {
      position: absolute;
      top: 50px;
      width: 70%;
      left: 15%;

      .text-sub1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 50px;
        line-height: 1;
        text-align: left;
        color: #9f9f9f;

        span {
          color: #212995;
          font-family: "RedHatDisplay-Bold";
        }
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
      width: 35%;
      bottom: 20%;
      right: 15%;
      color: #212995;
      font-family: "Oswald-Regular";
      font-size: 22px;
      line-height: 1;
      text-align: left;
    }

    .unleash-text3 {
      position: absolute;
      width: 80%;
      bottom: -10px;
      left: 10%;
      color: #212995;
      font-family: "RedHatDisplay-Regular";
      font-size: 70px;
      line-height: 1;
      text-align: center;

      span {
        display: inline-block;
        font-family: "RedHatDisplay-black";
      }
    }
  }

  .advance-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .left {
      position: relative;
      line-height: 0;
      width: 50%;
      background: #f25929;

      img {
        opacity: 0;
        width: 100%;
      }

      .text-block {
        position: absolute;
        top: 25px;
        left: 25%;
        width: 300px;
        z-index: 100;

        .text-1 {
          cursor: pointer;
          width: 100%;
          display: flex;
          font-family: 'Oswald-Regular';
          font-size: 35px;
          line-height: 1;
          text-align: left;
          color: #fff;
          margin: 20px 0;
          padding-left: 10px;

          .text-left {
            width: 30px;
            font-family: 'Oswald-Regular';
            font-size: 25px;
            margin-right: 12px;
            margin-top: 1px;
          }

          &.active {
            color: #212995;
          }

          &:hover {
            color: #212995;
          }
        }

        .line {
          width: 300px;
          height: 3px;
          border-radius: 2px;
          background-color: #8f8f8f;
        }
      }
    }

    .right {
      width: 50%;
      font-size: 0;

      img {
        width: 100%;
      }
    }
  }

  .good-taste-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 10% 0;
    background: #fff;

    .left {
      text-align: left;
      color: #11196c;

      .text {
        font-family: "RedHatDisplay-Medium";
        font-size: 35px;
        line-height: 1;

        span {
          display: inline-block;
          font-family: "RedHatDisplay-black";
          font-size: 50px;
          line-height: 1;
        }
      }
    }

    .right {
      img {
        width: 120px;
      }
    }
  }

  .nutrition-block {
    width: 100%;
    line-height: 0;

    img {
      width: 100%;
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
    overflow: hidden;
    background: #fff;


    :deep(.swiper-box) {
      width: 140%;
      margin-left: -20%;

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
        position: relative;
        width: 100%;
        display: flex;
        border-radius: 20px;
        padding: 20px 30px 20px 40px;
        box-sizing: border-box;
        color: #11196c;

        .slide-item-left {
          width: 100px;
          font-family: "RedHatDisplay-Bold";
          font-size: 30px;
          line-height: 1;
          text-align: left;
          margin-right: 50px;
        }

        .slide-item-right {
          font-family: "RedHatDisplay-Regular";
          font-size: 16px;
          line-height: 1;
          text-align: left;
          word-break: break-word;
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
