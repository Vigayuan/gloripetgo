<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderPage />
    <!-- Hero -->
    <section class="hero">
      <div class="hero-top-black"></div>
      <div class="hero-bg">
        <img src="../assets/imgs/why/why_01.jpg" alt="">
      </div>
      <div class="bg-fixed">
        <img src="../assets/imgs/why/wave.png" alt="">
      </div>
    </section>

    <!-- Unleash energy -->
    <section class="unleash " ref="boxRef">
      <div class="unleash-content">
        <img class="story_bg" src="../assets/imgs/why/why_02.jpg" alt="">
        <div class="unleash-text1" :class="{ showBox }">
          IT ALL BEGAN
        </div>
        <div class="unleash-text2" :class="{ showBox }">
          IN THE QUIETOF
        </div>
        <div class="unleash-text3" :class="{ showBox }">
          THE <span>Arctic.</span>
        </div>
        <div class="unleash-text4" :class="{ showBox }">
          In 2015, Dr. Erin Macdonald witnessed an Arctic fox instinctively select only the freshest prey.
          That moment revealed a fundamental truth: real nutrition doesn’t come from engineering—it follows nature.
          <br><br>

          Schrain was born from that belief.<br><br>

          We carefully source high-quality, nutrient-dense ingredients, rich in essential vitamins and minerals, to
          craft a complete and balanced kibble designed for your cat’s health and enjoyment. Because true nourishment
          goes beyond survival—it supports a life well lived.


        </div>
      </div>
    </section>
    <div class="our-mission" ref="missionRef">
      <div class="our-mission-content">
        <div class="our-mission-item">
          <div class="img-block">
            <img src="../assets/imgs/why/icon_01.png" alt="">
          </div>
          <div class="text-1" :class="{ showMission }">REAL MEAT <br>FIRST</div>
          <div class="text-2" :class="{ showMission }">High-quality animal protein to satisfy your cat's natural
            carnivorous instincts.`</div>
        </div>
        <div class="our-mission-item">
          <div class="img-block">
            <img src="../assets/imgs/why/icon_02.png" alt="">
          </div>
          <div class="text-1" :class="{ showMission }">100%<br>
            GRAIN-FREE</div>
          <div class="text-2" :class="{ showMission }">Gentle on digestion</div>
        </div>
        <div class="our-mission-item">
          <div class="img-block">
            <img src="../assets/imgs/why/icon_03.png" alt="">
          </div>
          <div class="text-1" :class="{ showMission }">IDEAL AMINO <br>
            ACID RATIO</div>
          <div class="text-2" :class="{ showMission }">Better absorption, less stool odor</div>
        </div>
        <div class="our-mission-item">
          <div class="img-block">
            <img src="../assets/imgs/why/icon_04.png" alt="">
          </div>
          <div class="text-1" :class="{ showMission }">NO ARTIFICIAL<br>
            ADDITIVES</div>
          <div class="text-2" :class="{ showMission }">No palatants, no colors, no mystery ingredients</div>
        </div>
      </div>
    </div>
    <div class="advance-block">
      <div class="advance-content">
        <div class="left">
          <div class="text-1">OUR <br>
            INGREDIENTS</div>
          <div class="text-2">When your cat’s gut is balanced, they’re better positioned to thrive. That’s why every
            ingredient in our recipes is carefully selected to support healthy digestion, immune function, and everyday
            vitality—leading to cleaner bowls and happier, healthier cats</div>
        </div>
        <div class="right">
          <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }"
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :navigation="{ nextEl: '.custom-pd-next', prevEl: '.custom-pd-prev' }" class="pd-swiper-box">
            <SwiperSlide>
              <div class="pd-slide-item">
                <img src="../assets/imgs/why/swp-1.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="pd-slide-item">
                <img src="../assets/imgs/why/swp-2.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="pd-slide-item">
                <img src="../assets/imgs/why/swp-3.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="pd-slide-item">
                <img src="../assets/imgs/why/swp-4.png" alt="">
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="custom-pd-prev">
            <img src="../assets/imgs/why/arrow-l.png" alt="">
          </div>
          <div class="custom-pd-next">
            <img src="../assets/imgs/why/arrow-r.png"  alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="his-2005">
      <div class="his-2005-content">
        <div class="left">
          <img src="../assets/imgs/why/why_cat.jpg" alt="">
        </div>
        <div class="center">
          <div class="text1">TO HELP EVERY <br>
            HOUSE CAT RECLAIM<br>
            THE DIET OF THEIR<br>
            WILD ANCESTORS</div>
          <img src="../assets/imgs/why/icon-cat.png" alt="">
          <div class="text2">In the next decade, we aim to bring Instinct First.<br> Nature Always. to millions of
            cats—delivering visible<br> health from the inside out.<br>
            Because the perfect formula wasn’t designed by<br> humans. It was written by nature.
          </div>
        </div>
        <div class="right">
          <img src="../assets/imgs/why/why_meat.jpg" alt="">
        </div>
      </div>
    </div>
    <section class="philosophy">
      <!-- <img src="../assets/images/about_bg_19.jpg" alt=""> -->
      <div class="phil-block">
        <div class="phil-text1">Q&A</div>
        <div class="phil-items">
          <div @click="toggleShowQA(1)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                WHY REAL MEAT FIRST ?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 1">+</div>
                <div v-show="showQAIndex == 1">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 1" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                We pride ourselves on using real meat as the first ingredient. Our cold-press
                process locks in all the natural nutrients of the meat, making every bite
                exceptionally tasty.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(2)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                WHAT DOES “NATURAL” MEAN TO YOU?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 2">+</div>
                <div v-show="showQAIndex == 2">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 2" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                Real meat. Light processing. Zero artificial additives.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(3)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                AAFCO COMPLIANT?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 3">+</div>
                <div v-show="showQAIndex == 3">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 3" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                Yes—formulated for All Life Stages.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(4)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                HOW DO I TRANSITION FOODS?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 4">+</div>
                <div v-show="showQAIndex == 4">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 4" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                Follow the 7‑day transition: 25% → 50% → 75% → 100%.
              </div>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
const modules = [Pagination, Navigation, Autoplay]
const boxRef = ref(null)
const missionRef = ref(null)
const commitmentRef = ref(null)
const showBox = ref(false);
const showMission = ref(false);
const showCommitment = ref(false);
const imgBlockRef = ref(null)
const showQAIndex = ref(-1);
let observers = []

const handleScroll = () => {
  if (!missionRef.value || !imgBlockRef.value) return;

  const rect = missionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // 只有当元素出现在视口中时才开始视差
  if (rect.top < windowHeight && rect.bottom > 0) {
    const scrollRatio = rect.top / windowHeight;
    const translateY = scrollRatio * -200; // 可调整：控制偏移力度
    imgBlockRef.value.style.top = `${translateY - 110}px`; // 滚动速度为 1/10
  }
};

const toggleShowQA = (index) => {
  showQAIndex.value = showQAIndex.value === index ? -1 : index;
}
onMounted(() => {
  // 1️⃣ box
  window.addEventListener("scroll", handleScroll);
  const observer1 = new IntersectionObserver(
    ([entry]) => {
      showBox.value = entry.isIntersecting;
    },
    {
      threshold: 0.3, // 进入 10% 可视区域时触发
      rootMargin: "0px 0px -30% 0px", // 提前 30% 触发
    }
  );
  if (boxRef.value) observer1.observe(boxRef.value);
  observers.push(observer1);

  // 2️⃣ mission
  const observer2 = new IntersectionObserver(
    ([entry]) => {
      showMission.value = entry.isIntersecting;
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -50% 0px", // 比 box 晚一点触发
    }
  );
  if (missionRef.value) observer2.observe(missionRef.value);
  observers.push(observer2);

  // 3️⃣ commitment
  const observer3 = new IntersectionObserver(
    ([entry]) => {
      showCommitment.value = entry.isIntersecting;
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -20% 0px",
    }
  );
  if (commitmentRef.value) observer3.observe(commitmentRef.value);
  observers.push(observer3);
});


onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  observers.forEach((o) => o.disconnect())
});
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;
  background: #efe8db;

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;
    height: 520px;

    .hero-top-black {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(180deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.1) 80%,
          rgba(0, 0, 0, 0) 100%);
      z-index: 2;
    }

    .hero-bg {
      height: 520px;
      overflow: hidden;

      img {
        width: 100%;
        animation: scaleUp 5s ease-out 0.5s forwards;
      }
    }

    @media screen and (min-width: 1200px) {
      height: 560px;

      .hero-bg {
        height: 560px;
      }
    }

    @media screen and (min-width: 1440px) {
      height: 620px;

      .hero-bg {
        height: 620px;
      }
    }

    .bg-fixed {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 60px;

      img {
        width: 100%;
        min-height: 60px;
      }
    }

    @keyframes scaleUp {
      to {
        transform: scale(1.05);
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
    background: #efe8db;
    margin: 0;

    .unleash-content {
      position: relative;
      font-size: 0;
      height: 550px;
      width: 1200px;
      margin: 0 auto;
    }

    .story_bg {
      width: 100%;
    }

    .unleash-text1 {
      position: absolute;
      top: 15px;
      width: 200px;
      left: 150px;
      color: #1f160b;
      font-size: 26px;
      line-height: 1;
      text-align: left;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.showBox {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .unleash-text2 {
      position: absolute;
      width: 600px;
      top: 40px;
      left: 150px;
      color: #1f160b;
      font-family: "RedHatDisplay-Regular";
      font-size: 68px;
      line-height: 1;
      text-align: left;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.showBox {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .unleash-text3 {
      position: absolute;
      width: 400px;
      top: 100px;
      left: 300px;
      color: #1f150b;
      font-family: "RedHatDisplay-Regular";
      font-size: 68px;
      line-height: 1;
      text-align: left;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.showBox {
        opacity: 1;
        transform: translateX(0);
      }

      span {
        display: inline-block;
        font-family: "RedHatDisplay-black";
        color: #938c34;
      }
    }

    .unleash-text4 {
      position: absolute;
      width: 350px;
      top: 200px;
      left: 400px;
      color: #1f150b;
      font-family: "RedHatDisplay-Regular";
      font-size: 17px;
      line-height: 1.2;
      text-align: left;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.showBox {
        opacity: 1;
        transform: translateX(0);
      }

      span {
        display: inline-block;
        font-family: "RedHatDisplay-black";
      }
    }
  }

  .our-mission {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    background-color: #938c34;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    .our-mission-content {
      width: 1200px;
      margin: 0 auto;
      padding: 50px 100px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .our-mission-item {
        width: 200px;
      }
    }

    .text-1 {
      font-family: "Oswald-SemiBlod";
      font-size: 29px;
      line-height: 1;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.showMission {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .text-2 {
      font-family: "RedHatDisplay-Regular";
      font-size: 20px;
      line-height: 1.2;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;
      margin-top: 20px;

      &.showMission {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  .advance-block {
    width: 100%;
    position: relative;
    height: 460px;
    background-color: #efe8db;

    .advance-content {
      width: 1200px;
      margin: 0 auto;
      display: flex;

      .left {
        width: 380px;
        padding-top: 50px;
        padding-right: 20px;
        .text-1{
          font-family: "Oswald-Regular";
          font-size: 64px;
          line-height: 1;
          text-align: left;
          color: #1f160b;
        }
        .text-2{
          font-family: "RedHatDisplay-Regular";
          font-size: 16px;
          line-height: 1.2;
          text-align: left;
          color: #938c34;
          margin-top: 20px;
        }
      }

      .right {
        position: relative;
        width: 820px;
        padding: 124px 0 0 31px;
        .pd-swiper-box {
          width: 693px;
    
          .pd-slide-item {
            width: 100%;
            position: relative;
            text-align: right;
            color: #212995;
    
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

  }

  .his-2005 {
    position: relative;
    background: #fff;
    width: 100%;

    .his-2005-content {
      width: 100%;
      height: 580px;
      display: flex;
      margin: 0 auto;

      .left {
        width: 473px;
      }

      .center {
        flex: 1;
        background-color: #fde2b9;
        color: #231f20;

        .text1 {
          font-family: "Oswald-SemiBlod";
          font-size: 20px;
          line-height: 1.2;
          text-align: center;
          color: #1f160b;
          margin: 60px 0 30px;
        }

        .text2 {
          font-family: "RedHatDisplay-Regular";
          font-size: 20px;
          line-height: 1.2;
          text-align: center;
          color: #1f160b;
          margin: 60px 0 30px;
        }
      }

      .right {
        width: 473px;
      }
    }
  }

  .philosophy {
    position: relative;
    font-size: 0;
    color: #efe8db;
    padding: 60px 0;

    .phil-block {
      width: 800px;
      margin: 0 auto;

      .phil-text1 {
        font-family: "RedHatDisplay-Black";
        font-size: 45px;
        line-height: 1;
        color: #1f160b;
        text-align: center;
      }

      .phil-items {
        font-family: "RedHatDisplay-Bold";
        font-size: 20px;
        line-height: 1;

        .phil-item {
          cursor: pointer;
          padding: 20px 0 10px;
          border-bottom: 2px solid #7e7e7e;

          .phil-item-top {
            display: flex;
            justify-content: space-between;
            color: #1f160b;
            align-items: center;

            .phil-item-top-text {
              width: 80%;
              text-align: left;
              line-height: 20px;
            }

            .control-btn {
              font-size: 40px;
              color: #7e7e7e;
              cursor: pointer;
            }
          }

          .phil-item-bottom {
            font-family: "Oswald-Regular";
            font-size: 16px;
            line-height: 1.5;
            text-align: left;
            color: #1f160b;
            padding: 15px 0;
          }
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
