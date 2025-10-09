<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderPage />
    <div class="fix-bg">
      <img src="../assets/images/fix_bg_01.jpg" alt="">
      <img src="../assets/images/fix_bg_02.jpg" alt="">
      <img src="../assets/images/fix_bg_03.jpg" alt="">
      <img src="../assets/images/fix_bg_04.jpg" alt="">
      <img src="../assets/images/fix_bg_05.jpg" alt="">
      <img src="../assets/images/fix_bg_06.jpg" alt="">
      <img src="../assets/images/fix_bg_07.jpg" alt="">
      <img src="../assets/images/fix_bg_08.jpg" alt="">
      <img src="../assets/images/fix_bg_09.jpg" alt="">
      <img src="../assets/images/fix_bg_10.jpg" alt="">
      <img src="../assets/images/fix_bg_11.jpg" alt="">
      <img src="../assets/images/fix_bg_12.jpg" alt="">
      <img src="../assets/images/fix_bg_13.jpg" alt="">
      <img src="../assets/images/fix_bg_14.jpg" alt="">
      <img src="../assets/images/fix_bg_15.jpg" alt="">
      <img src="../assets/images/fix_bg_16.jpg" alt="">
      <img src="../assets/images/fix_bg_17.jpg" alt="">
      <img src="../assets/images/fix_bg_18.jpg" alt="">
    </div>
    <!-- Hero -->
    <section class="hero">
      <img src="../assets/images/pds_bg_02.jpg" alt="">
      <img src="../assets/images/pds_bg_03.jpg" alt="">
      <img src="../assets/images/pds_bg_04.jpg" alt="">
      <img src="../assets/images/pds_bg_05.jpg" alt="">
      <img src="../assets/images/pds_bg_06.jpg" alt="">
      <img src="../assets/images/pds_bg_07.jpg" alt="">
      <img src="../assets/images/pds_bg_08.jpg" alt="">
    </section>
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
          <img src="../assets/images/drag-circle-bg-1.png" alt="" style="transform: scale(1.05);transform-origin: center;">
        </div>
        <div class="divider" :style="{ left: leftWidth + 'px' }">
          <div class="handle" @mousedown.prevent="startDrag">
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
      </div>
    </div>
    <!-- Products -->
    <section id="products" class="products">
      <div class="product-grid">
        <div class="product-card">
          <img src="../assets/images/pd1.png" alt="">
          <div class="tag1">ICE LAKE <br>
            FREE-RANGE DUCK<br>
            <div class="tag2">Complete Dog Food</div>
          </div>
          <div @click="goProductDetail(1)" class="tag3">LEARN MORE</div>
        </div>
        <div class="product-card">
          <img src="../assets/images/pd2.png" alt="">
          <div class="tag1">Arctic CHAR<br>
            <div class="tag2">Complete Cat Food</div>
          </div>
          <div @click="goProductDetail(2)" class="tag3">LEARN MORE</div>
        </div>
        <div class="product-card">
          <img src="../assets/images/pd3.png" alt="">
          <div class="tag1">Free-Range Chicken<br>
            <div class="tag2">Complete Cat Food</div>
          </div>
          <div @click="goProductDetail(3)" class="tag3">LEARN MORE</div>
        </div>
      </div>
    </section>

    <div class="transparent-block"></div>

    <div class="functionally-block" ref="boxRef">
      <div class="pic">
        <div class="pic-block" :class="{ show }">
          <img class="pic-img"  src="../assets/images/dog-pic-1.jpg" alt="">
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
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const slider = ref(null);
const leftWidth = ref(200); // 左边默认宽度
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
const onWindowResize = () => {
  if (window.innerWidth > 1600) {
    leftWidth.value = 300;
  } else {
    leftWidth.value = 200;
  }
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
  window.addEventListener("resize", onWindowResize);
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
  window.removeEventListener("resize", onWindowResize);
  if (observer && boxRef.value) {
    observer.unobserve(boxRef.value);
  }
})
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;
  background: transparent;

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
    background: #fff;

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
      background: #212995;
      border-radius: 25px;
      padding: 40px 10%;

      .product-card {
        cursor: pointer;
        width: 25%;
        height: auto;

        img {
          width: 100%;
          max-width: 250px;

          &:hover {
            transform: scale(1.05);
          }
        }

        .tag1 {
          font-family: "RedHatDisplay-Bold";
          font-size: 22px;
          line-height: 1;
          text-align: center;
          color: #00d2ff;
          height: 80px;

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
    }
  }

  .transparent-block {
    width: 100%;
    height: 300px;
    border: 20px solid #fff;
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

        &.show {
          opacity: 1;
          transform: translateX(0);
        }
        .pic-img {
          width: 100%;
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
        font-size: 68px;
        line-height: 1.5;

        span {
          font-family: "RedHatDisplay-Black";
        }
      }

      .slide-block-text2 {
        font-family: "Oswald-Regular";
        font-size: 22px;
        line-height: 1.2;
      }

      .slide-block-text3 {
        position: absolute;
        top: 300px;
        left: 100px;
        font-family: "RedHatDisplay-Black";
        font-size: 16px;
        line-height: 1.2;
      }

      .slide-block-text4 {
        position: absolute;
        top: 300px;
        right: 100px;
        font-family: "RedHatDisplay-Black";
        font-size: 16px;
        line-height: 1.2;
      }

      .slide-block-text5 {
        position: absolute;
        top: 450px;
        left: 100px;
        font-family: "RedHatDisplay-Black";
        font-size: 16px;
        line-height: 1.2;
      }

      .slide-block-text6 {
        position: absolute;
        top: 450px;
        right: 100px;
        font-family: "RedHatDisplay-Black";
        font-size: 16px;
        line-height: 1.2;
      }
    }

    .slide-wrapper {
      height: 400px;
      width: 400px;
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
          width: 400px;
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
      animation: marquee 24s linear infinite;

      div {
        font-family: "RedHatDisplay-Medium";
        display: inline-block;
        padding-right: 50px;
        font-size: 120px;
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

@media screen and (min-width: 1600px) {
  .landing-page {
    .slide-block {
      position: relative;

      background: #fff;

      .slide-block-text {
        width: 100%;
        text-align: center;
        color: #212995;
        padding: 50px 0;
        overflow: visible;

        .slide-block-text1 {
          font-family: "RedHatDisplay-Medium";
          font-size: 68px;
          line-height: 1.5;

          span {
            font-family: "RedHatDisplay-Black";
          }
        }

        .slide-block-text2 {
          font-family: "Oswald-Regular";
          font-size: 22px;
          line-height: 1.2;
        }

        .slide-block-text3 {
          position: absolute;
          top: 400px;
          left: 200px;
          font-family: "RedHatDisplay-Black";
          font-size: 16px;
          line-height: 1.2;
        }

        .slide-block-text4 {
          position: absolute;
          top: 400px;
          right: 200px;
          font-family: "RedHatDisplay-Black";
          font-size: 16px;
          line-height: 1.2;
        }

        .slide-block-text5 {
          position: absolute;
          top: 550px;
          left: 200px;
          font-family: "RedHatDisplay-Black";
          font-size: 16px;
          line-height: 1.2;
        }

        .slide-block-text6 {
          position: absolute;
          top: 550px;
          right: 200px;
          font-family: "RedHatDisplay-Black";
          font-size: 16px;
          line-height: 1.2;
        }
      }

      .slide-wrapper {
        height: 600px;
        width: 600px;
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
            width: 600px;
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

    .functionally-block {
      height: 1066px;

      /* 800 * 1.333 */
      .pic {
        width: 1600px;
        /* 1200 * 1.333 */
        height: 1066px;

        /* 800 * 1.333 */
        .pic-img {
          width: 1066px;
          /* 800 * 1.333 */
          right: 66px;
          /* 50 * 1.333 */
          bottom: 133px;
          /* 100 * 1.333 */
        }

        .text {
          width: 640px;
          /* 480 * 1.333 */
          height: 750px;
          /* 65% * 1066 */
          left: 10%;
          /* 10% * 1.333 → 约等于 13.3% */
          top: 100px;
          /* 100 * 1.333 */
          padding: 53px;
          /* 40 * 1.333 */
          border-radius: 27px;
          /* 20 * 1.333 */
        }

        .text .text-1 {
          font-size: 66px;
          /* 50 * 1.333 */
        }

        .text .text-2 {
          font-size: 24px;
          /* 18 * 1.333 */
          margin-top: 40px;
          /* 30 * 1.333 */
        }

        .icon-aurora {
          width: 266px;
          /* 200 * 1.333 */
          top: 133px;
          /* 100 * 1.333 */
          right: 66px;
          /* 50 * 1.333 */
          margin-left: -133px;
          /* -100 * 1.333 */
        }

        .icon-cq {
          width: 106px;
          /* 80 * 1.333 */
          margin-left: -53px;
          /* -40 * 1.333 */
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
