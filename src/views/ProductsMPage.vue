<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderMPage />
    <div class="fix-bg">
      <img src="../assets/images/fix_bg_01.jpg" alt="">
    </div>
    <!-- Hero -->
    <section class="hero">
      <img src="../assets/mimgs/product_bg_02.jpg" alt="">
    </section>
    <div style="background-color: #fff;">
      <div class="slide-block">
        <div class="slide-block-text">
          <div class="slide-block-text1">Nature’s <span>Pledge</span></div>
          <div class="slide-block-text2">The Ingredients Your Pet Deserves</div>
          <transition name="fade-slide" mode="out-in">
            <div v-if="leftWidth > 200">
              <div class="slide-block-text3">Only humanely raised, <br>
                responsibly sourced meats.</div>
              <div class="slide-block-text4">High-end nutrition, <br>
                100% traceable ingredients.</div>
              <div class="slide-block-text5">Expertly crafted, <br>
                delivered to your pet.</div>
              <div class="slide-block-text6">Verified by leading authorities <br>
                for complete confidence</div>
            </div>
            <div v-else>
              <div class="slide-block-text3">Crafted without corn,wheat,<br>
                soy, or syntheticadditives <br>
                for pure nutrition.</div>
              <div class="slide-block-text4">Sourced from animals raised<br>
                free of antibioticsand<br>
                added hormones..</div>
              <div class="slide-block-text5">Ethically procured<br>
                seafood in every blend.</div>
              <div class="slide-block-text6">Enriched with non-GMO <br>
                fruits and vegetables.</div>
            </div>
          </transition>
        </div>
        <div class="slide-wrapper" ref="slider">
          <img class="img" src="../assets/images/drag-circle-bg-2.png" alt="">
          <div class="top-img" :style="{ width: leftWidth + 'px' }">
            <img src="../assets/images/drag-circle-bg-1.png" alt="" style="transform: scale(1.01);transform-origin: center;">
          </div>
          <div class="divider" :style="{ left: leftWidth + 'px' }">
            <div class="handle" @touchstart.prevent="startDrag">
              <img src="../assets/images/drag-circle.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee-content">
          <div><span>Daily Guard</span> Feast</div>
          <div><span>Daily Guard</span> Feast</div>
          <div><span>Daily Guard</span> Feast</div>
          <div><span>Daily Guard</span> Feast</div>
          <div><span>Daily Guard</span> Feast</div>
          <div><span>Daily Guard</span> Feast</div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <section id="products" class="products">
      <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }" :autoplay="{ delay: 4000, disableOnInteraction: false }" :navigation="{ nextEl: '.custom-pd-next', prevEl: '.custom-pd-prev' }" class="pd-swiper-box">
        <SwiperSlide>
          <div class="pd-slide-item">
            <div class="product-card">
              <img src="../assets/images/pd1.png" alt="">
              <div class="tag1">Ice Lake <br>
                Free-Range Duck<br>
                <div class="tag2">Complete Dog Food</div>
              </div>
              <div @click="goProductDetail(1)" class="tag3">LEARN MORE</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="pd-slide-item">
            <div class="product-card">
              <img src="../assets/images/pd2.png" alt="">
              <div class="tag1">Arctic Char <br>
                <div class="tag2">Complete Cat Food</div>
              </div>
              <div @click="goProductDetail(2)" class="tag3">LEARN MORE</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="pd-slide-item">
            <div class="product-card">
              <img src="../assets/images/pd3.png" alt="">
              <div class="tag1">Free-Range Chicken<br>
                <div class="tag2">Complete Cat Food</div>
              </div>
              <div @click="goProductDetail(3)" class="tag3">LEARN MORE</div>
            </div>
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

    <div class="transparent-block"></div>

    <div class="functionally-block" ref="boxRef">
      <div class="pic">
        <div class="pic-block" :class="{ show }">
          <img class="pic-img" src="../assets/images/dog-pic-1.jpg" alt="">
        </div>
        <div class="text">
          <div class="text-1"> Functionally<br>
            Focused</div>
          <div class="text-2">GloriPetgo’s Aurora Series is built on the foundational benefits of boosting immunity and
            supporting intestinal health, with a product philosophy centered on daily prevention to reduce the risk of
            illnesses.</div>
          <div class="text-2">Meanwhile, each of the three products in the Aurora Series is designed to focus on a
            distinct, specialized benefit — for instance, Arctic Char Complete Cat Food prioritizes coat care as its
            core function.</div>
        </div>
        <img src="../assets/images/icon-Aurora.svg" alt="" class="icon-aurora">
        <img src="../assets/images/icon-cq.svg" alt="" class="icon-cq">
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
const modules = [Pagination, Navigation]
const router = useRouter();
const slider = ref(null);
const leftWidth = ref(160); // 左边默认宽度
let isDragging = false;
const boxRef = ref(null)
const show = ref(false);
let observer;
const startDrag = () => {
  isDragging = true;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};
const goProductDetail = (id) => {
  router.push({ name: 'ProductDetail', query: { id } });
}

const onDrag = (e) => {
  if (!isDragging) return;
  const rect = slider.value.getBoundingClientRect();
  let newWidth = e.clientX - rect.left;
  if (newWidth < 0) newWidth = 0;
  if (newWidth > rect.width) newWidth = rect.width;
  leftWidth.value = newWidth;
};

const stopDrag = () => {
  isDragging = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};


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
.landing-page {
  width: 100%;
  background: transparent;
  overflow: hidden;

  img {
    user-drag: none;
    /* 禁止图片拖动 */
    -webkit-user-drag: none;
  }

  .fix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 0;
    z-index: -1;

    img {
      width: 100%;
    }
  }

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;
    background: #fff;

    img {
      width: 100%;
    }
  }

  .products {
    background: #212995;
    padding-bottom: 20px;
    width: 94%;
    margin: 0 auto;
    border-radius: 20px;
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

    .product-card {
      cursor: pointer;
      width: 100%;
      height: auto;

      img {
        width: 100%;
        max-width: 250px;
        margin-left: -30px;

        &:hover {
          animation: scaleUp 1s ease-in-out;
        }
      }

      .tag1 {
        font-family: "RedHatDisplay-Bold";
        font-size: 22px;
        line-height: 1;
        text-align: center;
        color: #00d2ff;
        height: 80px;
        margin-top: 15px;

        .tag2 {
          font-family: "RedHatDisplay-Regular";
          font-size: 22px;
          line-height: 1;
          text-align: center;
          color: #fff;
        }
      }

      .tag3 {
        width: 120px;
        height: 30px;
        font-family: "RedHatDisplay-Bold";
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #00d2ff;
        border: 1px solid #00d2ff;
        border-radius: 20px;
        margin: 0 auto;
      }
    }

    .pd-swiper-box {
      width: 100%;

      .pd-slide-item {
        width: 100%;
        position: relative;
        text-align: left;
        color: #212995;

        .text-left {
          position: absolute;
          top: 230px;
          left: 35px;
          font-family: "Oswald-Regular";
          font-size: 20px;
          line-height: 1.2;
        }

        .text-right {
          position: absolute;
          top: 230px;
          left: 70px;
          font-family: "Oswald-Regular";
          font-size: 20px;
          line-height: 1.2;
        }
      }
    }

    .custom-pd-prev {
      position: absolute;
      top: 35%;
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
      top: 35%;
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

  .transparent-block {
    width: 100%;
    height: 300px;
    border-right: none;
    border-left: none;
    background: transparent;
  }

  .functionally-block {
    height: 800px;
    background: #fff;

    .pic {
      position: relative;
      width: 1200px;
      height: 800px;
      margin: 0 auto;

      .pic-block {
        position: absolute;
        width: 800px;
        right: 50px;
        bottom: 100px;
        opacity: 0;
        transform: translateX(500px);
        transition: all 0.8s ease-out;
        overflow: hidden;
        border-radius: 15px;

        &.show {
          opacity: 1;
          transform: translateX(0);
        }

        .pic-img {
          width: 100%;

          &:hover {
            animation: scaleUp 2s ease-in-out;
          }
        }
      }

      .text {
        box-sizing: border-box;
        position: absolute;
        width: 480px;
        height: 65%;
        left: 10%;
        top: 100px;
        padding: 40px;
        border-radius: 20px;
        background: #00d2ff;
        text-align: left;

        .text-1 {
          font-family: "RedHatDisplay-Black";
          font-size: 50px;
          line-height: 1;
          color: #212995;
        }

        .text-2 {
          font-family: "Oswald-Regular";
          font-size: 18px;
          line-height: 1.5;
          color: #212995;
          margin-top: 30px;
        }
      }

      .icon-aurora {
        position: absolute;
        width: 200px;
        top: 100px;
        right: 50px;
        margin-left: -100px;
      }

      .icon-cq {
        position: absolute;
        width: 80px;
        top: 60%;
        left: 50%;
        margin-left: -40px;
        animation: spin 8s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  .slide-block {
    position: relative;
    background: #fff;
    padding-bottom: 200px;
    .fade-slide-enter-active,
    .fade-slide-leave-active {
      transition: opacity 0.2s ease;
    }

    .fade-slide-enter-from,
    .fade-slide-leave-to {
      opacity: 0;
    }

    .fade-slide-enter-to,
    .fade-slide-leave-from {
      opacity: 1;
    }

    .slide-block-text {
      width: 100%;
      text-align: center;
      color: #212995;
      padding: 50px 0;
      overflow: visible;

      .slide-block-text1 {
        font-family: "RedHatDisplay-Medium";
        font-size: 38px;
        line-height: 1.5;

        span {
          font-family: "RedHatDisplay-Black";
        }
      }

      .slide-block-text2 {
        font-family: "Oswald-Regular";
        font-size: 14px;
        line-height: 1.2;
      }

      .slide-block-text3 {
        position: absolute;
        top: 520px;
        left: 5%;
        font-family: "RedHatDisplay-Black";
        font-size: 12px;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }

      .slide-block-text4 {
        position: absolute;
        top: 520px;
        right: 5%;
        font-family: "RedHatDisplay-Black";
        font-size: 12px;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }

      .slide-block-text5 {
        position: absolute;
        top: 680px;
        left: 5%;
        font-family: "RedHatDisplay-Black";
        font-size: 12px;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }

      .slide-block-text6 {
        position: absolute;
        top: 680px;
        right: 5%;
        font-family: "RedHatDisplay-Black";
        font-size: 12px;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }
    }

    .slide-wrapper {
      height: 320px;
      width: 320px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      overflow: hidden;
      position: relative;

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-drag: none;
        -webkit-user-drag: none;
      }

      .top-img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        overflow: hidden;

        img {
          width: 320px;
        }
      }

      .divider {
        position: absolute;
        top: 0;
        height: 100%;
        width: 0;
        /* 只作为定位线 */
      }

      .handle {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        cursor: col-resize;
      }

      .arrow {
        font-size: 14px;
        color: #444;
        user-select: none;
      }
    }
  }

  .marquee {
    background: #fff;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    padding: 50px 0 0;

    .marquee-content {
      display: inline-block;
      animation: marquee 35s linear infinite;

      div {
        font-family: "RedHatDisplay-Medium";
        display: inline-block;
        padding-right: 50px;
        font-size: 60px;
        color: #212995;

        span {
          font-family: "RedHatDisplay-Black";
        }
      }
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  .philosophy {
    position: relative;
    font-size: 0;
    color: #fff;

    background: #fff;

    img {
      width: 100%;

      &:hover {
        animation: scaleUp 1s ease-in-out;
      }
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
