<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderMPage />
    <div class="fix-bg">
      <img src="../assets/mimgs/fix_bg_01.jpg" alt="">
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
            <img src="../assets/images/drag-circle-bg-1.png" alt=""
              style="transform: scale(1.01);transform-origin: center;">
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
    <section id="products" class="products-box">
      <div class="products">
        <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :navigation="{ nextEl: '.custom-pd-next', prevEl: '.custom-pd-prev' }" class="pd-swiper-box">
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
const boxRef = ref(null);
const show = ref(false);
let observer;

// ✅ 拖动开始
const startDrag = (e) => {
  isDragging = true;

  // PC 鼠标事件
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);

  // ✅ 移动端触摸事件
  document.addEventListener("touchmove", onDrag, { passive: false });
  document.addEventListener("touchend", stopDrag);

  // 防止选中文本
  e.preventDefault();
};

// ✅ 拖动中
const onDrag = (e) => {
  if (!isDragging) return;

  const rect = slider.value.getBoundingClientRect();
  let clientX;

  // ✅ 兼容鼠标与触摸位置
  if (e.touches && e.touches.length) {
    clientX = e.touches[0].clientX;
  } else {
    clientX = e.clientX;
  }

  let newWidth = clientX - rect.left;
  if (newWidth < 0) newWidth = 0;
  if (newWidth > rect.width) newWidth = rect.width;
  leftWidth.value = newWidth;

  // 阻止页面滚动（仅触摸时）
  if (e.cancelable) e.preventDefault();
};

// ✅ 拖动结束
const stopDrag = () => {
  isDragging = false;

  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);

  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("touchend", stopDrag);
};

// 跳转函数
const goProductDetail = (id) => {
  router.push({ name: 'ProductDetail', query: { id } });
};

// ✅ Intersection Observer 动画触发
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        show.value = entry.isIntersecting;
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -30% 0px",
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
  background: transparent;
  overflow: hidden;

  img {
    user-drag: none;
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

  .products-box {
    width: 100%;
    padding-bottom: 0.8rem;
    background-color: #fff;

    .products {
      position: relative;
      background: #212995;
      width: 94%;
      margin: 0 auto;
      border-radius: 0.5333rem;

      .products-text1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 0.8rem;
        line-height: 1;
        text-align: center;
        color: #212995;
        padding: 1.3333rem 0;
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
        text-align: center;

        img {
          width: 5.8667rem;
          margin-left: -0.8rem;

          &:hover {
            animation: scaleUp 1s ease-in-out;
          }
        }

        .tag1 {
          font-family: "RedHatDisplay-Bold";
          font-size: 0.5867rem;
          line-height: 1;
          text-align: center;
          color: #00d2ff;
          height: 2.1333rem;
          margin-top: 0.4rem;

          .tag2 {
            font-family: "RedHatDisplay-Regular";
            font-size: 0.5867rem;
            line-height: 1;
            text-align: center;
            color: #fff;
          }
        }

        .tag3 {
          width: 3.2rem;
          height: 0.8rem;
          font-family: "RedHatDisplay-Bold";
          font-size: 0.3733rem;
          line-height: 0.8rem;
          text-align: center;
          color: #00d2ff;
          border: 0.0267rem solid #00d2ff;
          border-radius: 0.5333rem;
          margin: 0 auto;
        }
      }

      .pd-swiper-box {
        width: 100%;
        padding: 0.8rem 0;

        .pd-slide-item {
          width: 80%;
          position: relative;
          text-align: left;
          color: #212995;
          margin: 0 auto;

          .text-left {
            position: absolute;
            top: 6.1333rem;
            left: 0.9333rem;
            font-family: "Oswald-Regular";
            font-size: 0.5333rem;
            line-height: 1.2;
          }

          .text-right {
            position: absolute;
            top: 6.1333rem;
            left: 1.8667rem;
            font-family: "Oswald-Regular";
            font-size: 0.5333rem;
            line-height: 1.2;
          }
        }
      }

      .custom-pd-prev {
        position: absolute;
        top: 35%;
        cursor: pointer;
        left: 10%;
        width: 0.8rem;
        height: 0.8rem;
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
        width: 0.8rem;
        height: 0.8rem;
        z-index: 100;

        img {
          width: 100%;
        }
      }
    }
  }

  .transparent-block {
    width: 100%;
    height: 8rem;
    border-right: none;
    border-left: none;
    background: transparent;
  }

  .functionally-block {
    height: 25.6rem;
    background: #fff;

    .pic {
      position: relative;
      width: 90%;
      height: 21.3333rem;
      margin: 0 auto;

      .pic-block {
        position: absolute;
        width: 18.6667rem;
        left: -8rem;
        top: 16.08rem;
        opacity: 1;
        transition: all 0.8s ease-out;
        overflow: hidden;
        border-radius: 0.4rem;

        &.show {
          opacity: 1;
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
        width: 94%;
        height: 11.6rem;
        left: 3%;
        top: 4.2667rem;
        padding: 1.0667rem;
        border-radius: 0.5333rem;
        background: #00d2ff;
        text-align: left;

        .text-1 {
          font-family: "RedHatDisplay-Black";
          font-size: 1.0133rem;
          line-height: 1;
          color: #212995;
        }

        .text-2 {
          font-family: "Oswald-Regular";
          font-size: 0.3733rem;
          line-height: 1.5;
          color: #212995;
          margin-top: 0.8rem;
        }
      }

      .icon-aurora {
        position: absolute;
        width: 5.3333rem;
        top: 1.3333rem;
        left: 50%;
        margin-left: -2.6667rem;
      }

      .icon-cq {
        position: absolute;
        width: 2.1333rem;
        top: 14.9333rem;
        left: 50%;
        margin-left: -1.0667rem;
        animation: spin 8s linear infinite;
      }
    }
  }

  .slide-block {
    position: relative;
    background: #fff;
    padding-bottom: 5.3333rem;

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
      padding: 1.3333rem 0;
      overflow: visible;

      .slide-block-text1 {
        font-family: "RedHatDisplay-Medium";
        font-size: 1.0133rem;
        line-height: 1.5;

        span {
          font-family: "RedHatDisplay-Black";
        }
      }

      .slide-block-text2 {
        font-family: "Oswald-Regular";
        font-size: 0.3733rem;
        line-height: 1.2;
      }

      .slide-block-text3 {
        position: absolute;
        top: 13.8667rem;
        left: 0.1333rem;
        font-family: "RedHatDisplay-Black";
        font-size: 0.32rem;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }

      .slide-block-text4 {
        position: absolute;
        top: 13.8667rem;
        right: 0.1333rem;
        font-family: "RedHatDisplay-Black";
        font-size: 0.32rem;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }

      .slide-block-text5 {
        position: absolute;
        top: 18.1333rem;
        left: 0.1333rem;
        font-family: "RedHatDisplay-Black";
        font-size: 0.32rem;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }

      .slide-block-text6 {
        position: absolute;
        top: 18.1333rem;
        right: 0.1333rem;
        font-family: "RedHatDisplay-Black";
        font-size: 0.32rem;
        line-height: 1.2;
        width: 40%;
        text-align: center;
      }
    }

    .slide-wrapper {
      height: 8.5333rem;
      width: 8.5333rem;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
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
          width: 8.5333rem;
        }
      }

      .divider {
        position: absolute;
        top: 0;
        height: 100%;
        width: 0;
      }

      .handle {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 1.0667rem;
        height: 1.0667rem;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 0.0533rem 0.1333rem rgba(0, 0, 0, 0.3);
        cursor: col-resize;
      }

      .arrow {
        font-size: 0.3733rem;
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
    padding: 1.3333rem 0 0;

    .marquee-content {
      display: inline-block;
      animation: marquee 35s linear infinite;

      div {
        font-family: "RedHatDisplay-Medium";
        display: inline-block;
        padding-right: 1.3333rem;
        font-size: 1.6rem;
        color: #212995;

        span {
          font-family: "RedHatDisplay-Black";
        }
      }
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
      font-size: 1.2rem;
      line-height: 1;
      top: 1.0667rem;
      left: 6%;
    }

    .phil-text2 {
      position: absolute;
      font-family: "RedHatDisplay-Bold";
      font-size: 1.6rem;
      line-height: 1;
      top: 2.2667rem;
      left: 6%;
    }

    .phil-items {
      position: absolute;
      font-size: 1.3333rem;
      line-height: 1;
      top: 5.2rem;
      left: 10%;
      display: flex;
      flex-wrap: wrap;
      width: 13.8667rem;
      justify-content: space-between;

      .phil-item {
        width: 6.1333rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.8rem;

        .phil-left {
          width: 1.3333rem;

          .img {
            width: 100%;
          }
        }

        .phil-right {
          width: 4.5333rem;

          .phil-right-text1 {
            font-family: "RedHatDisplay-Regular";
            font-size: 1.0133rem;
            line-height: 1;
            text-align: left;
          }

          .phil-right-text2 {
            font-family: "Oswald-Regular";
            font-size: 0.3733rem;
            line-height: 1;
            text-align: left;
            margin-top: 0.2667rem;
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
    height: 13.3333rem;

    .cta-left {
      width: 70%;
    }

    .cta-right {
      position: relative;
      width: 30%;
      height: 100%;

      img {
        position: absolute;
        top: 5.3333rem;
        right: 12%;
        width: 2.1333rem;
      }

      .cta-text1 {
        position: absolute;
        top: 7.4667rem;
        right: 10%;
        width: 5.3333rem;
        font-family: "RedHatDisplay-Medium";
        font-size: 1.0667rem;
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
