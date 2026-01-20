<template>
  <div class="landing-page">

    <HeaderPage />
    <!-- Hero -->
    <section class="hero">
      <img src="../assets/imgs/landing/home-banner.jpg" alt="">
      <div class="title1">
        INSTINCT FIRST <br> <span class="title1-sub1">NATURE ALWAYS</span>
      </div>
      <div class="title2">
        Feed the hunter within. <br>
        Canadian cold-pressed and freeze-dried nutrition <br>
        crafted for true carnivores.
      </div>
      <div @click="goProduct" class="btn-leran-more">
        EXPLORE PRODUCTS
      </div>
    </section>

    <div class="landing-content-line">
      <div class="landing-content-line-text-wrapper">
        <div class="landing-content-line-text">Brand From Canada</div>
        <div class="landing-content-line-text">Premium Nutrition Pet Food</div>
        <div class="landing-content-line-text">WholePrey</div>
      </div>
    </div>

    <!-- Unleash energy -->
    <section class="unleash-block" ref="boxRef">
      <div class="unleash-content">
        <div class="particle" :class="{ show }">
          <div class="particle-content">
            INSTINCT FIRST
          </div>
        </div>
        <img class="bowl1" src="../assets/imgs/landing/bowl1.png" alt="" :class="{ show }">
        <img src="../assets/imgs/landing/home-pg-1.jpg" alt="">
        <div class="unleash-text1 title" :class="{ show }">
          BUILT FOR <br>
          CARNIVORES
        </div>
        <div class="unleash-text2 body" :class="{ show }">
          Cats weren’t made to eat grains. Schrain follows the Biologically Appropriate philosophy with WholePrey
          ratios—meat, organs, and cartilage in the balance nature intended.
        </div>
        <div class="unleash-text3 title" :class="{ show }">
          NATURE<br>
          WITHOUT <br>
          COMPROMISE
        </div>
        <div class="unleash-text4 body" :class="{ show }">
          Arctic salmon. North American turkey. Deep-sea cod. No grains, no artificial palatants, no artificial
          colors—just real, honest nutrition.
        </div>
        <div class="unleash-text5 title" :class="{ show }">
          WHERE NATURE
          MEETS SCIENCE
        </div>
        <div class="unleash-text6 body" :class="{ show }">
          Every batch undergoes third‑party testing for protein authenticity, microbes, and heavy metals. Nature
          inspires the formula; science ensures the safety.
        </div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="products-block">
      <img src="../assets/imgs/landing/tree.png" alt="" class="products-bg-img">
      <div class="products">
        <div class="products-text1">OUR <br>BESTSELLERS</div>
        <div class="products-text2">HELP YOUR CAT ACHIEVE <br>THE IDEAL BALANCE <br>IT NEEDS.</div>
        <div class="product-grid">
          <div @click="goProductDetail(3)" class="product-card">
            <img src="../assets/imgs/pd3-4.png" alt="">
            <div class="tag1">COLD PRESSING CAT FOOD</div>
            <div class="tag2">DEEP SEA FISH</div>
            <div class="btn">EXPLORE</div>
          </div>
          <div @click="goProductDetail(1)" class="product-card">
            <img src="../assets/imgs/pd1-4.png" alt="">
            <div class="tag1">HIGH MEATINESS CAT FOOD</div>
            <div class="tag2">BEEF FLAVOR</div>
            <div class="btn">EXPLORE</div>
          </div>
          <div @click="goProductDetail(2)" class="product-card">
            <img src="../assets/imgs/pd2-4.png" alt="">
            <div class="tag1">FREEZE-DRIED MEAT CAT FOOD</div>
            <div class="tag2">DEEP SEA FISH</div>
            <div class="btn">EXPLORE</div>
          </div>
        </div>
      </div>
    </section>

    <div class="landing-g-4" ref="bowlRef">
      <img src="../assets/imgs/landing/bowl.png" alt="" class="bowl" :class="{ show }">
      <img class="home-pg-2" src="../assets/imgs/landing/home-pg-2.jpg" alt="">
      <div class="content-block">
        <div class="content-item">
          <img src="../assets/imgs/landing/realmeat.svg" alt="">
          <div class="item-text1">REAL MEAT FIRST</div>
          <div class="item-text2">HIGH-QUALITY ANIMAL PROTEIN TO SATISFY YOUR CAT'S NATURAL CARNIVOROUS INSTINCTS.</div>
        </div>
        <div class="content-item">
          <img src="../assets/imgs/landing/grainfree.svg" alt="">
          <div class="item-text1">GRAIN FREE 100%</div>
          <div class="item-text2">GENTLE ON DIGESTION</div>
        </div>

        <div class="content-item">
          <img src="../assets/imgs/landing/no.svg" alt="">
          <div class="item-text1">NO ARTIFICIAL ADDITIVES</div>
          <div class="item-text2">NO PALATANTS, NO COLORS, NO MYSTERY INGREDIENTS</div>
        </div>

        <div class="content-item">
          <img src="../assets/imgs/landing/ideal.svg" alt="">
          <div class="item-text1">IDEAL AMINO<br>ACID RATIO</div>
          <div class="item-text2">BETTER ABSORPTION, LESS STOOL ODOR</div>
        </div>
      </div>
    </div>
    <div class="landing-g-5">
      <img class="home-pg-5-bg" src="../assets/imgs/landing/home-pg-3.jpg" alt="">
      <div class="landing-g-5-content">
        <div class="landing-g-5-title1">
          TO HELP EVERY HOUSE CAT <br>
          RECLAIM THE DIET OF THEIR
        </div>
        <div class="landing-g-5-title2">
          WILD ANCESTORS
        </div>
      </div>
    </div>
    <div class="landing-g-6">
      <div class="landing-g-6-content">
        <div class="landing-g-6-title1">
          IN THE NEXT DECADE, WE AIM TO BRING INSTINCT FIRST. NATURE ALWAYS. TO MILLIONS OF CATS—DELIVERING VISIBLE
          HEALTH FROM THE INSIDE OUT.
        </div>
        <div class="landing-g-6-title2">
          BECAUSE THE PERFECT FORMULA<br> WASN’T DESIGNED BY HUMANS. IT<br> <span>WAS WRITTEN BY NATURE.</span>
        </div>
      </div>
    </div>

    <FooterPage />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import { useRouter } from "vue-router";
const router = useRouter()
const boxRef = ref(null);
const bowlRef = ref(null);
const show = ref(false);
let observer;
//const goWhy = () => {
//  router.push({ name: 'Healthy' });
//}
const goProductDetail = (id) => {
  router.push({ name: 'ProductDetail', query: { id } });
}
const goProduct = () => {
  router.push({ name: 'Products' });
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
  if (bowlRef.value) {
    observer.observe(bowlRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer && boxRef.value) {
    observer.unobserve(boxRef.value);
  }
  if (observer && bowlRef.value) {
    observer.unobserve(bowlRef.value);
  }
});
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;
  background: #e8e8e8;

  .landing-content-line {
    width: 100%;
    margin: 0 auto;
    height: 60px;
    font-family: "Oswald-Regular";
    font-size: 25px;
    line-height: 60px;
    color: #938c34;
    background-color: #1f160b;

    .landing-content-line-text-wrapper {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .landing-content-line-text {
        cursor: pointer;
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
      top: 38%;
      margin-left: 166px;
      left: 50%;
      font-family: "Oswald-Medium";
      font-size: 58px;
      line-height: 1;
      text-align: left;
      transform: translateY(-100px);
      animation: fadeDown 0.8s ease-out 0.5s forwards;
      text-shadow: 0 0 15px #000;

      .title1-sub1 {
        display: inline-block;
        font-size: 55px;
        vertical-align: 10px;
        color: #f39800;
      }
    }

    .title2 {
      position: absolute;
      top: 60%;
      margin-left: 166px;
      left: 50%;
      font-family: "Oswald-Regular";
      font-size: 16px;
      line-height: 1.5;
      width: 322px;
      text-align: left;
      opacity: 0;
      transform: translateY(-100px);
      animation: fadeDown 0.8s ease-out 0.5s forwards;
    }

    .btn-leran-more {
      cursor: pointer;
      position: absolute;
      top: 75%;
      margin-left: 166px;
      left: 50%;
      font-family: "Oswald-SemiBold";
      font-size: 16px;
      width: 180px;
      height: 50px;
      line-height: 50px;
      opacity: 0;
      background-color: #e60012;
      transform: translateY(-100px);
      animation: fadeDown 0.8s ease-out 0.5s forwards;
    }
  }

  @keyframes fadeDown {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .unleash-block {
    font-size: 0;
    background: #efe8db;

    .unleash-content {
      position: relative;
      width: 1200px;
      margin: 0 auto;

      img {
        width: 1100px;
        margin: 0 auto;
      }
      .bowl1 {
        position: absolute;
        width: 263px;
        top: 152px;
        left: 467px;
        transform: rotate(180deg);
        transition: all 20s ease-out;

        &.show {
          transform: rotate(0deg);
        }
      }
      .particle {
        // position: absolute;
        margin: 45px auto 0;
        // left: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: all 0.8s ease-out;

        .particle-content {
          font-family: "Oswald-SemiBold";
          font-size: 64px;
          line-height: 58px;
          color: #938c34;
        }
      }

      .particle.show {
        opacity: 1;
        transform: translateY(0);
      }

      .unleash-text1 {
        position: absolute;
        top: 190px;
        left: 230px;
      }

      .unleash-text2 {
        position: absolute;
        top: 280px;
        left: 230px;
      }

      .unleash-text3 {
        position: absolute;
        top: 90px;
        left: 780px;
      }

      .unleash-text4 {
        position: absolute;
        top: 212px;
        left: 780px;
      }

      .unleash-text5 {
        position: absolute;
        top: 300px;
        left: 780px;
      }

      .unleash-text6 {
        position: absolute;
        top: 380px;
        left: 780px;
      }

      .title {
        font-family: "Copper";
        font-size: 24px;
        line-height: 1.2;
        text-align: left;
        color: #efe8db;
        width: 250px;
        opacity: 0;
        transform: translateY(150px);
        transition: all 0.8s ease-out;
        &.show {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .body {
        font-family: "Oswald-Regular";
        font-size: 16px;
        line-height: 1.2;
        text-align: left;
        color: #1f150b;
        width: 225px;
        opacity: 0;
        transform: translateY(150px);
        transition: all 0.8s ease-out;
        &.show {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  .products-block {
    position: relative;
    background-color: #efe8db;

    .products-bg-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 557px;
    }

    .products {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      height: 500px;

      .products-text1 {
        position: absolute;
        font-family: "Oswald-SemiBold";
        font-size: 50px;
        line-height: 1;
        text-align: left;
        color: #1f160b;
        left: 90px;
        top: 80px;
      }

      .products-text2 {
        position: absolute;
        font-family: "Oswald-Medium";
        font-size: 21px;
        line-height: 1;
        text-align: left;
        color: #1f160b;
        left: 90px;
        top: 220px;
      }

      .product-grid {
        position: absolute;
        top: 60px;
        right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 700px;

        .product-card {
          cursor: pointer;
          width: 250px;
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

  .landing-g-4 {
    position: relative;
    height: 688px;
    background-color: #000;
    .bowl {
      position: absolute;
      top: 222px;
      left: 50%;
      width: 319px;
      opacity: 0;
      transform: translate(-50%, -50%);
    }

    .bowl.show {
      opacity: 1;
      animation: bowlBounce 0.9s ease-out forwards;
    }
    .content-block {
      width: 1070px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content-item {
        width: 240px;
        text-align: left;
        img {
          width: 40px;
          height: 40px;
        }
        .item-text1 {
          font-family: "Oswald-Medium";
          font-size: 40px;
          line-height: 1;
          color: #f39800;
          margin: 10px 0;
        }
        .item-text2 {
          font-family: "Oswald-Medium";
          font-size: 18px;
          line-height: 1;
          color: #efe8db;
        }
      }
    }
    @keyframes bowlBounce {
      0% {
        transform: translate(-50%, -50%) scale(0.8);
      }
      60% {
        transform: translate(-50%, -50%) scale(1.08);
      }
      80% {
        transform: translate(-50%, -50%) scale(0.98);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    .home-pg-2 {
      width: 1070px;
      margin: 80px auto 50px;
    }

    .home-pg-3 {
      width: 1100px;
      margin: 0 auto;
    }
  }

  .landing-g-5 {
    position: relative;
    background-color: #000;

    .home-pg-5-bg {
      width: 100%;
    }

    .landing-g-5-content {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -600px;
      margin-top: 60px;
      width: 1200px;

      .landing-g-5-title1 {
        font-family: "Oswald-Regular";
        font-size: 37px;
        line-height: 1;
        text-align: center;
        color: #efe8db;
        width: 100%;
      }

      .landing-g-5-title2 {
        font-family: "Oswald-Regular";
        font-size: 105px;
        line-height: 1;
        text-align: center;
        color: #f39800;
        width: 100%;
        margin-top: 20px;
      }
    }
  }

  .landing-g-6 {
    background-color: #efe8db;
    height: 450px;

    .landing-g-6-content {
      width: 1200px;
      margin: 0 auto;

      .landing-g-6-title1 {
        font-size: 27px;
        font-family: "Copper";
        color: #000;
        width: 800px;
        margin: 0 auto;
      }

      .landing-g-6-title2 {
        font-size: 27px;
        font-family: "Oswald-Regular";
        color: #97903c;
        width: 500px;
        margin: 0 auto;
        border: 3px solid #97903c;
        padding: 30px 40px;
        border-radius: 50%;
        margin-top: 65px;

        span {
          font-family: "Oswald-SemiBold";
        }
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
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;
    }

    .phil-text1.show {
      opacity: 1;
      transform: translateY(0);
    }

    .phil-text2 {
      position: absolute;
      font-family: "RedHatDisplay-Bold";
      font-size: 60px;
      line-height: 1;
      top: 85px;
      left: 6%;
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;
    }

    .phil-text2.show {
      opacity: 1;
      transform: translateY(0);
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
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;

      &.show {
        opacity: 1;
        transform: translateY(0);
      }

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
            line-height: 1.3;
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
