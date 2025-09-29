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
        <div class="slide-block-text3">Only humanely raised, <br>
          responsibly sourced meats.</div>
        <div class="slide-block-text4">High-end nutrition, <br>
          100% traceable ingredients.</div>
        <div class="slide-block-text5">Expertly crafted, <br>
          delivered to your pet.</div>
        <div class="slide-block-text6">Verified by leading authorities <br>
          for complete confidence</div>
      </div>
      <div class="slide-wrapper" ref="slider">
        <img class="img" src="../assets/images/drag-circle-bg-2.png" alt="">
        <div class="top-img" :style="{ width: leftWidth + 'px' }">
          <img src="../assets/images/drag-circle-bg-1.png" alt="">
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

    <div class="transparent-block"></div>

    <div class="functionally-block">
      <div class="pic">
        <img src="../assets/images/dog-pic-1.jpg" alt="">
      </div>
      <div class="text"></div>
      <img src="../assets/images/icon-Aurora.svg" alt="" class="icon-aurora">
      <img src="../assets/images/icon-cq.png" alt="" class="icon-cq">
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
            <div class="phil-right-text2">Freshness from the original material to the whole processing of
              the product.
            </div>
          </div>
        </div>
        <div class="phil-item">
          <div class="phil-left">
            <img src="../assets/images/icon-convenient.svg" alt="">
          </div>
          <div class="phil-right">
            <div class="phil-right-text1">Convenient</div>
            <div class="phil-right-text2">Keep food fresh high-cost & highly effective Easy Lock ensures
              freshness.
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
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { ref } from 'vue'
const slider = ref(null);
const leftWidth = ref(200); // 左边默认宽度
let isDragging = false;

const startDrag = () => {
  isDragging = true;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

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
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;
  background: transparent;
  img {
    user-drag: none; /* 禁止图片拖动 */
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
      padding: 20px;

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
          color: #fff;
          height: 14px;
        }

        .tag2 {
          font-family: "RedHatDisplay-Bold";
          font-size: 30px;
          line-height: 1;
          text-align: center;
          color: #fff;
          width: 270px;
          margin: 0 auto;
          height: 60px;
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
    position: relative;
    background: #fff;
    .pic{
        position: absolute;
        top: 50px;
        left: 50px;
        width: 500px;
        img{
            width: 100%;
        }
    }
  }

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
        width: 0; /* 只作为定位线 */
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
