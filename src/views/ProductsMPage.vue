<template>
  <div class="products-page">
    <!-- Header -->
    <HeaderMPage />
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          HELP YOUR CAT<br> ACHIEVE THE IDEAL<br> BALANCE IT NEEDS.
        </div>
        <div class="hero-title">
          PREMIUM<br>
          PET FOOD
        </div>
        <img src="../assets/m/product-p1.jpg" alt="">
      </div>
    </section>
    <!-- <div class="hero-img">
      <img src="../assets/imgs/products/products_03.png" alt="">
    </div> -->
    <!-- Products -->
    <div class="swiper-block products">
      <!-- <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }" class="swiper-box"> -->
      <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }" :autoplay="{ delay: 4000, disableOnInteraction: false }" class="swiper-box">
        <SwiperSlide>
          <div @click="goProductDetail(3)" class="product-card">
            <img src="../assets/imgs/pd3-1.jpg" alt="">
            <div class="tag1">COLD PRESSING CAT FOOD</div>
            <div class="tag2">DEEP SEA FISH</div>
            <div class="tag3">Low-temperature pressed to preserve natural ocean flavor—perfect for picky eaters.</div>
            <div class="btn">EXPLORE</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div @click="goProductDetail(1)" class="product-card">
            <img src="../assets/imgs/pd1-1.jpg" alt="">
            <div class="tag1">HIGH MEATINESS CAT FOOD</div>
            <div class="tag2">BEEF FLAVOR</div>
            <div class="tag3">Rich, robust energy from premium beef—ideal for active, athletic cats.</div>
            <div class="btn">EXPLORE</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div @click="goProductDetail(2)" class="product-card">
            <img src="../assets/imgs/pd2-1.jpg" alt="">
            <div class="tag1">FREEZE-DRIED MEAT CAT FOOD</div>
            <div class="tag2">DEEP SEA FISH</div>
            <div class="tag3">Three protein sources freeze‑dried to peak nutrition. Highly palatable. Naturally
              nourishing.</div>
            <div class="btn">EXPLORE</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="pd-g-3">
      <div class="pd-g-3-g">
        <div class="pd-g-3-item pg-g-3-l">
          <div class="pd-g-3-t">
            <div class="text1">BUILT<br>
              FOR </div>
            <div class="text2">CARNIVORES</div>
            <div class="text3">Cats weren’t made to eat grains. Schrain follows<br> the Biologically Appropriate philosophy
              with<br> WholePrey ratios—meat, organs, and cartilage<br> in the balance nature intended.</div>
          </div>
          <div class="pd-g-3-b">
            <img src="../assets/m/product-p2.jpg" alt="">
          </div>
        </div>
        <div class="pd-g-3-item pg-g-3-r">
          <div class="pd-g-3-t">
            <div class="text1">NATURE <br>
              WITHOUT </div>
            <div class="text2">COMPROMISE</div>
            <div class="text3">Arctic salmon. North American turkey. Deep-sea<br> cod. No grains, no artificial palatants,
              no artificial<br> colors—just real, honest nutrition.</div>
          </div>
          <div class="pd-g-3-b">
            <img src="../assets/m/product-p3.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="pd-g-4">
      <div class="pd-g-4-content">
        <div class="pd-g-4-text1">WHERE <br>NATURE</div>
        <div class="pd-g-4-text2">MEETS SCIENCE</div>
        <img src="../assets/imgs/products/products_line.png" alt="" class="line">
        <img class="pd-g-4-img" src="../assets/imgs/products/products_02.png" alt="">
      </div>
      <div class="pd-g-4-bg">
      </div>
    </div>
    <!-- Footer -->
    <FooterMPage />
  </div>
</template>

<script setup>
import HeaderMPage from "@/components/HeaderMPage.vue";
import FooterMPage from "@/components/FooterMPage.vue";
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const boxRef = ref(null)
const show = ref(false);
let observer;
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
const modules = [Pagination, Navigation, Autoplay]
const goProductDetail = (id) => {
  router.push({ name: 'ProductDetail', query: { id } });
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
})

onBeforeUnmount(() => {
  if (observer && boxRef.value) {
    observer.unobserve(boxRef.value);
  }
})
</script>

<style lang="scss" scoped>
.products-page {
  width: 100%;
  background: transparent;
  overflow: hidden;
  background: #efe8db;

  img {
    user-drag: none;
    /* 禁止图片拖动 */
    -webkit-user-drag: none;
  }

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;
    background: #938c34;
    overflow: hidden;

    .bg_line {
      position: absolute;
      width: 100%;
      right: 0;
      top: -450px;
      z-index: 10;
    }

    .hero-content {
      position: relative;
      width: 100%;
      margin: 0 auto;
      z-index: 100;

      .hero-text {
        position: absolute;
        top: 60px;
        left: 20px;
        font-family: "Oswald-Medium";
        font-size: 27px;
        line-height: 1;
        color: #efe8db;
        text-align: left;
      }

      .hero-title {
        position: absolute;
        top: 45px;
        right: 40px;
        font-family: "Oswald-Medium";
        font-size: 12px;
        line-height: 1;
        color: #efe8db;
        text-align: left;
      }

      img {
        width: 100%;
      }
    }
  }

  .hero-img {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .products-block {
    position: relative;
    background-color: #efe8db;
    .right {
      position: relative;
      width: 90%;
      margin: 0 auto;

      .pd-swiper-box {
        width: 100%;

        .pd-slide-item {
          width: 100%;
          position: relative;
          text-align: right;
          color: #212995;
          img {
            width: 100%;
          }
        }
      }

      .custom-pd-prev {
        position: absolute;
        top: 207px;
        cursor: pointer;
        left: 30px;
        width: 45px;
        height: 45px;
        z-index: 100;

        img {
          width: 100%;
        }
      }

      .custom-pd-next {
        position: absolute;
        top: 207px;
        cursor: pointer;
        right: 0;
        width: 45px;
        height: 45px;
        z-index: 100;

        img {
          width: 100%;
        }
      }
    }
  }
  .swiper-block {
    position: relative;
    overflow: hidden;
    background-color: #efe8db;

    :deep(.swiper-box) {
      width: 100%;

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
        width: 100px;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;

        .swiper-pagination-bullet {
          cursor: pointer;
          display: block;
          background: #23221f;
          border: 1px solid #23221f;
          opacity: 0.6;
          width: 16px;
          height: 16px;
          border-radius: 10px;
        }

        .swiper-pagination-bullet-active {
          background: #e60012;
          border: 1px solid #e60012;
          opacity: 1;
        }
      }

      .slide-item {
        position: relative;
        width: 100%;
        color: #fff;

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
  .products {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;

    .product-card {
      cursor: pointer;
      width: 100%;
      height: auto;

      img {
        width: 166px;
        margin: 0 auto 30px;

        &:hover {
          animation: hoverUp 0.3s ease-out forwards;
        }
      }

      .tag1 {
        font-family: "Oswald-SemiBold";
        font-size: 10px;
        line-height: 1;
        text-align: center;
        color: #000;
        height: 12px;
      }

      .tag2 {
        font-family: "Oswald-SemiBold";
        font-size: 20px;
        line-height: 1;
        text-align: center;
        color: #000;
        margin: 0 auto;
        height: 26px;
      }
      .tag3 {
        font-family: "Oswald-Regular";
        font-size: 10px;
        line-height: 1;
        text-align: center;
        color: #938c34;
        margin: 0 auto;
        height: 26px;
        width: 166px;
      }

      .btn {
        font-family: "Oswald-SemiBold";
        width: 126px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #e60012;
        margin: 10px auto 0;
      }
    }
  }
  .pd-g-3 {
    background-color: #efe8db;
    padding-top: 15px;

    .pd-g-3-g {
      width: 100%;
      margin: 0 auto;
      //   display: flex;

      .pd-g-3-item {
        flex: 1;
        // display: flex;
        flex-direction: column;
        width: 100%;
        /* margin: 0 auto; */
        padding: 0 10%;

        .pd-g-3-t {
          padding: 20px 0;
        }

        .pd-g-3-b {
          width: 100%;
          img {
            width: 100%;
          }
        }

        .text1 {
          font-family: "Copper";
          font-size: 15px;
          line-height: 1;
          color: #1f160b;
          text-align: center;
        }

        .text2 {
          font-family: "Copper";
          font-size: 37px;
          line-height: 1;
          color: #938c34;
          text-align: center;
          margin-top: 20px;
        }

        .text3 {
          font-family: "Oswald-SemiBold";
          font-size: 11px;
          line-height: 1.2;
          color: #938c34;
          margin: 0 auto;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }

  .pd-g-4 {
    position: relative;
    background-color: #938c34;
    padding-bottom: 50px;
    overflow: hidden;
    margin-top: 30px;
    .pd-g-4-content {
      position: relative;
      width: 100%;
      margin: 0 auto;
      .line {
        position: absolute;
        top: -510px;
        left: -38px;
        opacity: 0.9;
      }
      .pd-g-4-img {
        position: relative;
        z-index: 100;
        width: 100%;
        margin: 0 auto;
      }

      .pd-g-4-text1 {
        position: absolute;
        font-family: "Copper";
        font-size: 22px;
        line-height: 1;
        color: #1f160b;
        text-align: center;
        margin-top: 50px;
        width: 100px;
        left: 585px;
        text-align: center;
        margin-left: -50px;
        top: 15px;
      }

      .pd-g-4-text2 {
        z-index: 10;
        font-family: "Copper";
        position: absolute;
        font-size: 55px;
        line-height: 1;
        color: #efe8db;
        text-align: center;
        margin-top: 50px;
        width: 700px;
        left: 50%;
        text-align: center;
        margin-left: -350px;
        top: 70px;
      }
    }
    .pd-g-4-bg {
      position: absolute;
      width: 100%;
      height: 690px;
      bottom: 0;
      left: 0;
      background: url("../assets/imgs/products/bg.jpg") no-repeat center center;
      background-size: cover;
    }
  }
}

@keyframes hoverUp {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.05);
  }
}

@keyframes scaleUp {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>
