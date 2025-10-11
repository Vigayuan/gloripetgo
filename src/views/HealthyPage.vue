<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderPage />

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="../assets/images/whyh_bg_02.jpg" alt="">
        <img src="../assets/images/whyh_bg_03.jpg" alt="">
        <img src="../assets/images/whyh_bg_04.jpg" alt="">
        <img src="../assets/images/whyh_bg_05.jpg" alt="">
        <img src="../assets/images/whyh_bg_06.jpg" alt="">
        <img src="../assets/images/whyh_bg_07.jpg" alt="">
        <img src="../assets/images/whyh_bg_08.jpg" alt="">
      </div>
      <div class="title1">
        Ensuring Your Pet's<br>
        <span class="title1-sub1">Health & Happiness</span>
      </div>
      <div class="title2">
        Ensure comprehensive nutrition and health protection for your pet with every delicious bite.
      </div>
      <div @click="goWhy" class="btn-leran-more">
        LEARN MORE
      </div>
    </section>

    <!-- Unleash energy -->
    <section class="unleash" ref="boxRef">
      <img src="../assets/images/whyh_bg_09.jpg" alt="">
      <img src="../assets/images/whyh_bg_10.jpg" alt="">
      <img src="../assets/images/whyh_bg_11.jpg" alt="">
      <img src="../assets/images/whyh_bg_12.jpg" alt="">
      <img src="../assets/images/whyh_bg_13.jpg" alt="">
      <img src="../assets/images/whyh_bg_14.jpg" alt="">
      <img src="../assets/images/whyh_bg_15.jpg" alt="">
      <div class="unleash-text1" :class="{ showBox }">
        <div class="text-sub1">At GloriPetgo™, we are dedicated to ensuring that your <span>beloved pet receives
            nutrition, safety, and deliciousness,</span> all while building a solid health barrier. </div>
      </div>
      <div class="unleash-text2" :class="{ showBox }">
        We advocate the philosophy of “prevention before illness” with scientifically formulated recipes designed to
        prevent diseases caused by improper daily diets, allowing your pet to live a healthier and worry-free life.
      </div>
      <div class="unleash-text3" :class="{ showBox }">
        WE CARE FOR <span>PET HEALTH</span>
      </div>
    </section>
    <div class="advance-block">
      <div class="left">
        <div class="text-wrapper">
          <div class="text-block">
            <div @mouseover="showPic(1)" :class="picIndex == 1 ? 'text-1 active' : 'text-1'">
              <div class="text-left">01</div>
              <div class="text-right">Premium<br>
                Ingredients </div>
            </div>
            <div class="line"></div>
            <div @mouseover="showPic(2)" :class="picIndex == 2 ? 'text-1 active' : 'text-1'">
              <div class="text-left">02</div>
              <div class="text-right">Advanced<br>
                Manufacturing<br>
                Techniques</div>
            </div>
            <div class="line"></div>
            <div @mouseover="showPic(3)" :class="picIndex == 3 ? 'text-1 active' : 'text-1'">
              <div class="text-left">03</div>
              <div class="text-right">Scientific<br>
                feeding<br>
                guide</div>
            </div>
          </div>
        </div>
        <img src="../assets/images/salmon.jpg" alt="">
      </div>
      <div class="right">
        <img v-show="picIndex == 2" src="../assets/images/food.jpg" alt="">
        <img v-show="picIndex == 3" src="../assets/images/cat.jpg" alt="">
        <img v-show="picIndex == 1" src="../assets/images/salmon.jpg" alt="">
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
      <img src="../assets/images/nutrition_bg_03.jpg" alt="">
      <img src="../assets/images/nutrition_bg_04.jpg" alt="">
      <img src="../assets/images/nutrition_bg_05.jpg" alt="">
      <img src="../assets/images/nutrition_bg_06.jpg" alt="">
      <img src="../assets/images/nutrition_bg_07.jpg" alt="">
      <img src="../assets/images/nutrition_bg_08.jpg" alt="">
      <img src="../assets/images/nutrition_bg_09.jpg" alt="">
      <img src="../assets/images/nutrition_bg_10.jpg" alt="">
      <img @click="goToSlide(3)" src="../assets/images/moss.png" alt="" class="moss">
      <img @click="goToSlide(1)" src="../assets/images/chicken.png" alt="" class="chicken">
      <img @click="goToSlide(2)" src="../assets/images/duck.png" alt="" class="duck">
      <img @click="goToSlide(4)" src="../assets/images/salmon.png" alt="" class="salmon">
      <img src="../assets/images/cranberry.png" alt="" class="cranberry">
    </div>
    <div class="swiper-block">
      <Swiper :modules="modules" :loop="true" :slides-per-view="3" :space-between="30" @swiper="onSwiper" :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }" class="swiper-box">
        <SwiperSlide>
          <div class="slide-item" style="background: #3dd8d0;">
            <div class="slide-item-left">Arctic<br />Char</div>
            <div class="slide-item-right">
              From the cold Arctic waters, this fish offers a delicate taste and is rich in omega‑3s to keep your cat’s
              coat soft and shiny. Gentle protein makes it ideal for sensitive stomachs.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="slide-item" style="background: #fc8686;">
            <div class="slide-item-left">Free-<br>
              Range<br>
              Chicken</div>
            <div class="slide-item-right">
              Raised freely on open pastures, our Starbro chickens deliver lean, protein-rich meat that’s low in fat and
              hormone‑free—perfect for cats with delicate digestion.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="slide-item" style="background: #8acc63;">
            <div class="slide-item-left">
              Icelake<br>
              Free-range<br>
              Duck</div>
            <div class="slide-item-right">
              From the pristine northern waters of North America, our ducks produce lean, nutrient‑dense meat loaded
              with protein and essential amino acids to support your dog’s health and growth.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item" style="background: #1c1c1c;color:#c4c4c4">
            <div class="slide-item-left">Icefield<br>
              Moss</div>
            <div class="slide-item-right">
              Canadian Arctic moss is packed with antioxidants and prebiotics to aid digestion, boost immunity, and
              protect skin and coat.
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
    <section class="Manufacturing " ref="manuRef">
      <img class="Manufacturing-bg" src="../assets/images/Manufacturing.jpg" alt="">
      <div class="Manufacturing-text1">
        <div class="text-sub1">Advanced <br><span>Manufacturing Techniques</span></div>
      </div>
      <div class="Manufacturing-text2" :class="{ showManu }">
        <div>Our dehydration technique, inspired by the methods used to prepare astronaut meals, is one of the finest
          available today. By removing only the water from raw ingredients at low temperatures, we are able to preserve
          their authentic flavor, taste, and nutritional content.</div>

        <div>This process allows our products to be stored and transported at ambient temperatures, significantly
          extending
          their shelf life. Our offerings remain natural, fresh, wholesome, and easy to use. GloriPetgo™ consistently
          prioritizes our customers, adapting and innovating to meet their evolving needs</div>
      </div>
    </section>
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

    <section class="feed-guide " ref="feedRef">
      <img class="feed-guide-bg" src="../assets/images/feed_guide.jpg" alt="">
      <div class="feed-guide-text1" :class="{ showFeed }">
        <div class="text-sub1">Daily defense <span>in every bite</span></div>
        <div class="text-sub2">Scientific<br><span>Feeding Guide</span></div>
      </div>
      <div class="feed-guide-text2" :class="{ showFeed }">
        <div>GloriPetgo™ is committed to creating a scientifically designed feeding guide for your beloved pets. With
          tailored recommendations, we help pet owners make feeding more accurate, balanced, and healthy so every meal
          supports your pet’s well-being and happiness.</div>
      </div>
    </section>
    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script setup>
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
const modules = [Autoplay]
import { useRouter } from "vue-router";
const router = useRouter()
const goWhy = () => {
  router.push({ name: 'Healthy' });
}
const picIndex = ref(1)
const showPic = (val) => {
  picIndex.value = val
}
const swiperRef = ref(null)

const onSwiper = (swiper) => {
  swiperRef.value = swiper
}
const goToSlide = (index) => {
  console.log(index)
  if (swiperRef.value) {
    swiperRef.value.slideToLoop(index - 1, 500)
  }
}
const manuRef = ref(null)
const boxRef = ref(null)
const showBox = ref(false)
const showManu = ref(false)
const feedRef = ref(null)
const showFeed = ref(false)

let observers = [];

onMounted(() => {
  const observer1 = new IntersectionObserver(
    ([entry]) => {
      showBox.value = entry.isIntersecting;
    },
    {
      threshold: 0.1, // 进入 10% 可视区域时触发
      rootMargin: "0px 0px -30% 0px", // 提前 30% 触发
    }
  );
  if (boxRef.value) observer1.observe(boxRef.value);
  observers.push(observer1);
  const observer2 = new IntersectionObserver(
    ([entry]) => {
      showManu.value = entry.isIntersecting;
    },
    {
      threshold: 0.1, // 进入 10% 可视区域时触发
      rootMargin: "0px 0px -30% 0px", // 提前 30% 触发
    }
  );
  if (manuRef.value) observer2.observe(manuRef.value);
  observers.push(observer2);
  const observer3 = new IntersectionObserver(
    ([entry]) => {
      showFeed.value = entry.isIntersecting;
    },
    {
      threshold: 0.1, // 进入 10% 可视区域时触发
      rootMargin: "0px 0px -30% 0px", // 提前 30% 触发
    }
  );
  if (feedRef.value) observer3.observe(feedRef.value);
  observers.push(observer3);
  nextTick(() => {
    const slides = document.querySelectorAll(".slide-item");
    let maxHeight = 0;

    slides.forEach(slide => {
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });

    slides.forEach(slide => {
      slide.style.height = maxHeight + "px";
    });
  });
});
onBeforeUnmount(() => {
  observers.forEach((o) => o.disconnect())
});
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

    .hero-bg {
      height: 400px;
      overflow: hidden;

      img {
        width: 100%;
        transform: translateY(0) scale(1.05);
        animation: moveUp 5s ease-out 0.5s forwards;
      }
    }

    @keyframes moveUp {
      to {
        transform: translateY(-20px) scale(1.05);
      }
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
      width: 1000px;
      left: 50%;
      margin-left: -500px;
      opacity: 0;
      //   transform: translateY(-100px);
      transition: all 0.8s 0.8s ease-out;

      &.showBox {
        opacity: 1;
        // transform: translateY(0);
      }

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
      font-family: "RedHatDisplay-Regular";
      font-size: 20px;
      line-height: 1.2;
      text-align: left;
      opacity: 0;
      transition: all 0.8s ease-out;

      &.showBox {
        opacity: 1;
      }
    }

    .unleash-text3 {
      position: absolute;
      width: 1000px;
      bottom: -10px;
      left: 50%;
      margin-left: -500px;
      color: #212995;
      font-family: "RedHatDisplay-Regular";
      font-size: 70px;
      line-height: 1;
      text-align: center;
      opacity: 0;
      transition: all 0.8s ease-out;

      &.showBox {
        opacity: 1;
      }

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

      .text-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .text-block {
          width: 300px;
          z-index: 100;

          .text-1 {
            cursor: pointer;
            width: 100%;
            display: flex;
            font-family: "Oswald-Regular";
            font-size: 35px;
            line-height: 1;
            text-align: left;
            color: #fff;
            margin: 20px 0;
            padding-left: 10px;

            .text-left {
              width: 30px;
              font-family: "Oswald-Regular";
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
    position: relative;
    width: 100%;
    line-height: 0;
    padding: 35px 0;
    background-color: #fff;

    img {
      width: 100%;
    }

    .moss {
      position: absolute;
      top: 19%;
      left: 24%;
      width: 11%;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        animation: scaleUp 0.5s linear;
      }
    }

    .salmon {
      position: absolute;
      top: 30%;
      left: 42.5%;
      width: 18%;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        animation: scaleUp 0.5s linear;
      }
    }

    .duck {
      position: absolute;
      top: 4%;
      right: 7%;
      width: 20%;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        animation: scaleUp 0.5s linear;
      }
    }

    .cranberry {
      position: absolute;
      top: 67%;
      right: 23%;
      width: 8%;
    }

    .chicken {
      position: absolute;
      top: 58%;
      left: 7%;
      width: 20%;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        animation: scaleUp 0.5s linear;
      }
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.05);
    }
  }

  .brand-logo {
    padding: 40px 0;
    background-color: #fff;

    .logo-list {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      padding: 30px 5%;
      background-color: #e8e8e8;
      border-radius: 200px;

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
        box-sizing: border-box;

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

  .Manufacturing {
    position: relative;
    font-size: 0;
    padding: 280px 0;
    background: #fff;

    .Manufacturing-bg {
      width: 80%;
      margin: 0 auto;
    }

    .Manufacturing-text1 {
      position: absolute;
      top: 100px;
      width: 70%;
      left: 15%;

      .text-sub1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 50px;
        line-height: 1;
        text-align: center;
        color: #9f9f9f;

        span {
          color: #212995;
          font-family: "RedHatDisplay-Bold";
        }
      }
    }

    .Manufacturing-text2 {
      box-sizing: border-box;
      position: absolute;
      width: 60%;
      bottom: 80px;
      left: 20%;
      color: #fff;
      background: #212995;
      font-family: "Oswald-Regular";
      font-size: 22px;
      line-height: 1.2;
      text-align: center;
      padding: 20px 40px;
      opacity: 0;
      transition: all 0.8s 1s ease-out;

      &.showManu {
        opacity: 1;
      }

      div {
        margin: 30px 0;
      }
    }
  }

  .feed-guide {
    position: relative;
    font-size: 0;
    padding: 20px 0;
    background: #fff;

    .feed-guide-bg {
      width: 90%;
      margin: 0 auto;
      border-radius: 20px;
    }

    .feed-guide-text1 {
      position: absolute;
      top: 120px;
      width: 500px;
      left: 50%;
      margin-left: -250px;
      color: #000;
      opacity: 0;
      transition: all 0.8s  ease-out;

      &.showFeed {
        opacity: 1;
      }

      .text-sub1 {
        font-family: "RedHatDisplay-Black";
        font-size: 23px;
        line-height: 1;
        text-align: center;

        span {
          font-family: "RedHatDisplay-Regular";
        }
      }

      .text-sub2 {
        font-family: "RedHatDisplay-Regular";
        font-size: 50px;
        line-height: 1;
        text-align: center;
        color: #fff;
        margin-top: 31px;

        span {
          font-family: "RedHatDisplay-Black";
        }
      }
    }

    .feed-guide-text2 {
      box-sizing: border-box;
      position: absolute;
      bottom: 90px;
      width: 500px;
      left: 50%;
      margin-left: -250px;
      color: #000;
      font-family: "RedHatDisplay-Regular";
      font-size: 19px;
      line-height: 1.8;
      text-align: center;
      opacity: 0;
      transition: all 0.8s ease-out;

      &.showFeed {
        opacity: 1;
      }

      div {
        margin: 30px 0;
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
