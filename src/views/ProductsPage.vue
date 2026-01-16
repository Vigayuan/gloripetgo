<template>
  <div class="products-page">
    <!-- Header -->
    <HeaderPage />
    <!-- Hero -->
    <section class="hero">
      <img class="bg_line" src="../assets/imgs/products/products_line.png" alt="">
      <div class="hero-content">
        <div class="hero-text">
          HELP YOUR CAT ACHIEVE <br>
          THE IDEAL BALANCE IT NEEDS.
        </div>
        <div class="hero-title">
          PREMIUM<br>
          PET FOOD
        </div>
        <img src="../assets/imgs/products/products_01.png" alt="">
      </div>
    </section>
    <div class="hero-img">
      <img src="../assets/imgs/products/products_03.png" alt="">
    </div>
    <!-- Products -->
    <section id="products" class="products-block">
      <div class="products">
        <div class="product-grid">
          <div @click="goProductDetail(3)" class="product-card">
            <img src="../assets/imgs/pd3-1.jpg" alt="">
            <div class="tag1">COLD PRESSING CAT FOOD</div>
            <div class="tag2">DEEP SEA FISH</div>
            <div class="tag3">Low-temperature pressed to preserve natural ocean flavor—perfect for picky eaters.</div>
            <div class="btn">EXPLORE</div>
          </div>
          <div @click="goProductDetail(1)" class="product-card">
            <img src="../assets/imgs/pd1-1.jpg" alt="">
            <div class="tag1">HIGH MEATINESS CAT FOOD</div>
            <div class="tag2">BEEF FLAVOR</div>
            <div class="tag3">Rich, robust energy from premium beef—ideal for active, athletic cats.</div>
            <div class="btn">EXPLORE</div>
          </div>
          <div @click="goProductDetail(2)" class="product-card">
            <img src="../assets/imgs/pd2-1.jpg" alt="">
            <div class="tag1">FREEZE-DRIED MEAT CAT FOOD</div>
            <div class="tag2">DEEP SEA FISH</div>
            <div class="tag3">Three protein sources freeze‑dried to peak nutrition. Highly palatable. Naturally
              nourishing.</div>
            <div class="btn">EXPLORE</div>
          </div>
        </div>
      </div>
    </section>
    <div class="pd-g-3">
      <div class="pd-g-3-g">
        <div class="pd-g-3-item pg-g-3-l">
          <div class="pd-g-3-t">
            <div class="text1">BUILT<br>
              FOR </div>
            <div class="text2">CARNIVORES</div>
            <div class="text3">Cats weren’t made to eat grains. Schrain follows the Biologically Appropriate philosophy
              with WholePrey ratios—meat, organs, and cartilage in the balance nature intended.</div>
          </div>
          <div class="pd-g-3-b">
            <img src="../assets/imgs/products/meat.jpg" alt="">
          </div>
        </div>
        <div class="pd-g-3-item pg-g-3-r">
          <div class="pd-g-3-t">
            <img src="../assets/imgs/products/cat.jpg" alt="">
          </div>
          <div class="pd-g-3-b">
            <div class="text1">NATURE
              WITHOUT </div>
            <div class="text2">COMPROMISE</div>
            <div class="text3">Arctic salmon. North American turkey. Deep-sea cod. No grains, no artificial palatants,
              no artificial colors—just real, honest nutrition.</div>
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
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const boxRef = ref(null)
const show = ref(false);
let observer;
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
  min-width: 1200px;
  background: transparent;
  overflow: hidden;
  background: #000;

  img {
    user-drag: none;
    /* 禁止图片拖动 */
    -webkit-user-drag: none;
  }

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;
    margin-top: 132px;
    background: #938c34;
    overflow: hidden;

    .bg_line {
      position: absolute;
      width: 1200px;
      right: 0;
      top: -450px;
      z-index: 10;
    }

    .hero-content {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      z-index: 100;

      .hero-text {
        position: absolute;
        top: 90px;
        left: 0;
        font-family: "Oswald-Medium";
        font-size: 60px;
        line-height: 1;
        color: #efe8db;
        text-align: left;
      }

      .hero-title {
        position: absolute;
        top: 90px;
        right: 0;
        font-family: "Oswald-Medium";
        font-size: 20px;
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

    .products {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      height: 500px;
      background-color: #efe8db;

      .product-grid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 80px;

        .product-card {
          cursor: pointer;
          width: 330px;
          height: auto;

          img {
            width: 310px;
            margin: 0 auto 20px;

            &:hover {
              animation: hoverUp 0.3s ease-out forwards;
            }
          }

          .tag1 {
            font-family: "Oswald-SemiBold";
            font-size: 12px;
            line-height: 1;
            text-align: center;
            color: #000;
            height: 12px;
          }

          .tag2 {
            font-family: "Oswald-SemiBold";
            font-size: 26px;
            line-height: 1;
            text-align: center;
            color: #000;
            margin: 0 auto;
            height: 26px;
          }

          .tag3 {
            font-family: "Oswald-SemiBold";
            font-size: 16px;
            line-height: 1;
            text-align: center;
            color: #938c34;
            margin: 10px auto;
          }

          .btn {
            font-family: "Oswald-SemiBold";
            width: 155px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            color: #fff;
            background-color: #e60012;
            margin: 20px auto 0;
          }
        }
      }
    }
  }

  .pd-g-3 {
    background-color: #efe8db;
    padding-top: 15px;

    .pd-g-3-g {
      width: 1188px;
      margin: 0 auto;
      display: flex;

      .pd-g-3-item {
        flex: 1;
        display: flex;
        flex-direction: column;

        .pd-g-3-t {
          height: 469px;
        }

        .pd-g-3-b {
          height: 469px;
        }

        .text1 {
          font-family: "Copper";
          font-size: 30px;
          line-height: 1;
          color: #1f160b;
          text-align: center;
          margin-top: 50px;
        }

        .text2 {
          font-family: "Copper";
          font-size: 62px;
          line-height: 1;
          color: #938c34;
          text-align: center;
          margin-top: 20px;
        }

        .text3 {
          font-family: "Oswald-SemiBold";
          font-size: 23px;
          line-height: 1;
          color: #938c34;
          width: 400px;
          margin: 0 auto;
          text-align: center;
          margin-top: 50px;
        }
      }
    }
  }

  .pd-g-4 {
    position: relative;
    background-color: #938c34;
    padding-bottom: 50px;
    overflow: hidden;
    .pd-g-4-content {
      position: relative;
      width: 1200px;
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
        width: 1200px;
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

@media screen and (min-width: 1600px) {
  .products-page {
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
  .products-page {
    .topnav {
      .nav-inner {
        max-width: 1400px;
      }
    }
  }
}

@media (min-width: 1920px) {
  .products-page {
    .topnav {
      .nav-inner {
        max-width: 1720px;
      }
    }
  }
}

@media (min-width: 2560px) {
  .products-page {
    .topnav {
      .nav-inner {
        max-width: 1600px;
      }
    }
  }
}
</style>
