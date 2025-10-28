<template>
  <div class="landing-page">

    <HeaderMPage />

    <!-- Hero -->
    <section class="hero">
      <img src="../assets/mimgs/m_home_bg_01.jpg" alt="">
      <div class="title1">
        Daily <br>
        Defense <br><span class="title1-sub1">in <span class="title1-sub2">Every Bite</span></span>
      </div>
      <div class="title2">
        Ensure comprehensive nutrition and health protection for your pet with every delicious bite.
      </div>
      <div @click="goWhy" class="btn-leran-more">
        LEARN MORE
      </div>
    </section>

    <!-- Unleash energy -->
    <section class="unleash " ref="boxRef">
      <img src="../assets/mimgs/m_home_bg_02.jpg" alt="">
      <div class="particle" :class="{ show }">
        <img src="../assets/mimgs/particle.png" alt="">
      </div>
      <div class="unleash-text1">
        <div class="text-sub1">Let your pets</div>
        <div class="text-sub2">unleash their</div>
        <div class="text-sub3">Joy&Energy!</div>
      </div>
      <div class="unleash-text2">
        With GloriPetgo™, you're not just filling their bowls—you’re fueling their lives with
        irresistible,nourishing meals. Plus, every bite helps pets beyond your own, spreading
        happiness all around.
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="products">
      <h3 class="products-text1">Discover <br><span class="sub1">Our </span><span class="sub2">Products</span></h3>
      <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="{ nextEl: '.custom-pd-next', prevEl: '.custom-pd-prev' }" class="pd-swiper-box">
        <SwiperSlide>
          <div  @click="goProductDetail(1)" class="pd-slide-item">
            <img src="../assets/images/pd1.png" alt="">
            <div class="pd-tag1">IMMUNE SUPPORT</div>
            <div class="pd-tag2">JOINT CARE</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div @click="goProductDetail(2)" class="pd-slide-item">
            <img src="../assets/images/pd2.png" alt="">
            <div class="pd-tag1">IMMUNE SUPPORT</div>
            <div class="pd-tag2">SKIN & COAT HEALTH</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div @click="goProductDetail(3)" class="pd-slide-item">
            <img src="../assets/images/pd3.png" alt="">
            <div class="pd-tag1">IMMUNE SUPPORT</div>
            <div class="pd-tag2">URINARY HEALTH</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="custom-pd-prev">
        <img src="../assets/images/icon-arrow.svg" alt="">
      </div>
      <div class="custom-pd-next">
        <img src="../assets/images/icon-arrow.svg" style="transform: rotate(180deg);" alt="">
      </div>
    </section>

    <section class="brand-logo">
      <div class="logo-list">
        <div class="logo-list-line">
          <div class="logo-item">
            <img src="../assets/images/icon-MSC.svg" alt="">
          </div>
          <div class="logo-item">
            <img src="../assets/images/icon-aafco.svg" alt="">
          </div>
          <div class="logo-item">
            <img src="../assets/images/icon-Global-Animal.svg" alt="">
          </div>
        </div>
        <div class="logo-list-line">
          <div class="logo-item">
            <img src="../assets/images/icon-SQF.svg" alt="">
          </div>
          <div class="logo-item">
            <img src="../assets/images/icon-CFIA.svg" alt="">
          </div>
          <div class="logo-item">
            <img src="../assets/images/icon-FDA.svg" alt="">
          </div>
        </div>
      </div>
    </section>

    <div class="swiper-block">
      <div class="swiper-block-text">
        <div class="swiper-block-text1">The ingredients from</div>
        <div class="swiper-block-text2">Arctic Glaciers Align</div>
        <div class="swiper-block-text3">with natural nutrition.</div>
      </div>
      <Swiper :modules="modules" :loop="true" :slides-per-view="3" :space-between="20" :pagination="{ clickable: true }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" class="swiper-box">
        <SwiperSlide>
          <div class="slide-item">
            <div class="slide-item-text1">FREE-
              RANGE<br>
              CHICKEN</div>
            <div @click="goWhy" class="slide-item-text2">Learn more</div>
            <img src="../assets/mimgs/swiper-item-1.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item">
            <div class="slide-item-text1">ICE LAKE<br>
              FREE-RANGE<br>
              DUCK
            </div>
            <div @click="goWhy" class="slide-item-text2">Learn more</div>
            <img src="../assets/mimgs/swiper-item-2.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item">
            <div class="slide-item-text1">ICEFIELD<br>
              MOSS</div>
            <div @click="goWhy" class="slide-item-text2">Learn more</div>
            <img src="../assets/mimgs/swiper-item-3.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item">
            <div class="slide-item-text1">ARCTIC<br>
              CHAR</div>
            <div @click="goWhy" class="slide-item-text2">Learn more</div>
            <img src="../assets/mimgs/swiper-item-4.jpg" alt="">
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
      <div class="phil-text1">Product</div>
      <div class="phil-text2">Philosophy</div>
      <div class="phil-items">
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/mimgs/icon-Natural.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Natural</div>
            <div class="phil-right-text2">Chemical elements bring too many allergy risks.</div>
          </div>
        </div>
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/mimgs/icon-health.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Health</div>
            <div class="phil-right-text2">Defense Three meals a day reduce the risk of illness.</div>
          </div>
        </div>
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/mimgs/icon-fresh.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Fresh</div>
            <div class="phil-right-text2">Freshness from the original material to the whole processing of
              the product.
            </div>
          </div>
        </div>
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/mimgs/icon-convenient.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Convenient</div>
            <div class="phil-right-text2">Keep food fresh high-cost & highly effective Easy Lock ensures
              freshness.
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/mimgs/m_home_bg_03.jpg" alt="">
    </section>

    <!-- <section class="cta">
      <div class="cta-left">
        <Swiper :modules="modules" :loop="true" :slides-per-view="3.5" :pagination="{ clickable: true }" :navigation="{nextEl: '.custom-next',prevEl: '.custom-prev'}" class="swiper-box">
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
    </section> -->

    <FooterMPage />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import HeaderMPage from '@/components/HeaderMPage.vue'
import FooterMPage from '@/components/FooterMPage.vue'
import { useRouter } from "vue-router";
const router = useRouter()
const boxRef = ref(null);
const show = ref(false);
const modules = [Pagination, Navigation, Autoplay]
let observer;
const goWhy = () => {
  router.push({ name: 'mHealthy' });
}
const goProductDetail = (id) => {
  router.push({ name: 'mProductDetail', query: { id } });
}
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
  background: #fff;
  overflow: hidden;

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;

    img {
      width: 100%;
    }

    .title1 {
      position: absolute;
      font-family: "RedHatDisplay-Bold";
      text-align: left;
      font-size: 65px;
      line-height: 1;
      bottom: 125px;
      left: 19px;

      .title1-sub1 {
        display: inline-block;
        font-size: 36px;
        vertical-align: 22px;
      }

      .title1-sub2 {
        font-family: "RedHatDisplay-Regular";
        font-size: 36px;
      }
    }

    .title2 {
      position: absolute;
      bottom: 109px;
      left: 20px;
      font-family: "Oswald-Regular";
      font-size: 12px;
      line-height: 1.5;
      width: 233px;
      text-align: left;
    }

    .btn-leran-more {
      cursor: pointer;
      position: absolute;
      bottom: 65px;
      right: 43px;
      font-family: "RedHatDisplay-Bold";
      border: 2px solid #fff;
      border-radius: 18px;
      font-size: 14px;
      width: 121px;
      height: 36px;
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
      top: 0;
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
      top: 40px;
      left: 30px;
      color: #212995;

      .text-sub1 {
        font-family: "RedHatDisplay-Bold";
        font-size: 30px;
        line-height: 1;
        text-align: left;
      }

      .text-sub2 {
        font-family: "RedHatDisplay-Bold";
        font-size: 35px;
        line-height: 1;
        text-align: left;
      }

      .text-sub3 {
        font-family: "Khalila";
        font-size: 45px;
        line-height: 1;
        text-align: left;
        color: #a1a1a1;
      }
    }

    .unleash-text2 {
      position: absolute;
      bottom: 85px;
      width: 86%;
      right: 7%;
      color: #212995;
      font-family: "Oswald-Regular";
      font-size: 16px;
      line-height: 1.2;
      text-align: center;
    }
  }

  .products {
    position: relative;

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

    .pd-swiper-box {
      position: relative;

      .pd-slide-item {
        img {
          width: 60%;
        }

        .pd-tag1 {
          font-family: "RedHatDisplay-Bold";
          font-size: 14px;
          line-height: 1;
          text-align: center;
          color: #212995;
          height: 14px;
          margin-top: 20px;
        }

        .pd-tag2 {
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

    .custom-pd-prev {
      position: absolute;
      top: 50%;
      cursor: pointer;
      left: 10%;
      width: 30px;
      height: 30px;
      z-index: 100;

      img {
        width: 100%;
      }
    }

    .custom-pd-next {
      position: absolute;
      top: 50%;
      cursor: pointer;
      right: 10%;
      width: 30px;
      height: 30px;
      z-index: 100;

      img {
        width: 100%;
      }
    }
  }

  .brand-logo {
    padding: 20px 0;

    .logo-list {
      width: 90%;
      margin: 0 auto;
      border-top: 1px solid #7c7c7c;
      border-bottom: 1px solid #7c7c7c;
      padding: 15px 0;

      .logo-list-line {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        .logo-item {
          height: 25px;
          flex: 1;
          text-align: center;

          img {
            height: 25px;
          }
        }
      }
    }
  }

  .swiper-block {
    position: relative;
    overflow: hidden;

    .swiper-block-text {
      width: 100%;
      text-align: center;
      color: #212995;
      padding: 10px 0 30px;
      overflow: visible;

      .swiper-block-text1 {
        font-family: "RedHatDisplay-Medium";
        font-size: 14px;
        line-height: 1;
        font-style: italic;
      }

      .swiper-block-text2 {
        font-family: "RedHatDisplay-Bold";
        font-size: 24px;
        line-height: 1.2;
      }

      .swiper-block-text3 {
        font-family: "RedHatDisplay-Regular";
        font-size: 20px;
        line-height: 1;
      }
    }

    .custom-prev {
      position: absolute;
      top: 50%;
      cursor: pointer;
      left: 5%;
      width: 30px;
      height: 30px;
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
      width: 30px;
      height: 30px;
      z-index: 100;

      img {
        width: 100%;
      }
    }

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
        height: 80px;
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
        color: #fff;

        img {
          width: 80px;
        }

        .slide-item-text1 {
          position: absolute;
          top: 15%;
          left: 8%;
          font-family: "RedHatDisplay-Bold";
          font-size: 30px;
          line-height: 1;
          text-align: left;
        }

        .slide-item-text2 {
          position: absolute;
          bottom: 15%;
          left: 8%;
          font-family: "RedHatDisplay-Regular";
          font-size: 15px;
          line-height: 1;
          border-bottom: 2px solid #fff;
          padding-bottom: 4px;
          cursor: pointer;
        }

        img {
          width: 100%;
        }
      }
    }
  }

  .philosophy {
    position: relative;
    font-size: 0;
    color: #212995;
    text-align: left;

    img {
      width: 100%;
    }

    .phil-text1 {
      font-family: "RedHatDisplay-Regular";
      font-size: 45px;
      line-height: 1;
      padding-left: 40px;
    }

    .phil-text2 {
      font-family: "RedHatDisplay-Bold";
      font-size: 60px;
      line-height: 1;
      padding-left: 40px;
    }

    .phil-items {
      font-size: 50px;
      line-height: 1;
      padding-left: 40px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: left;
      margin-top: 20px;

      .phil-item {
        width: 45%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        .phil-left {
          width: 50px;
          margin-right: 8px;
          line-height: 0;

          .img {
            width: 100%;
          }
        }

        .phil-right {
          width: 170px;

          .phil-right-text1 {
            font-family: "RedHatDisplay-Regular";
            font-size: 22px;
            line-height: 1;
            text-align: left;
          }

          .phil-right-text2 {
            font-family: "Oswald-Regular";
            font-size: 14px;
            line-height: 1;
            text-align: left;
            margin-top: 5px;
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
</style>
