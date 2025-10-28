<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderMPage />

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="../assets/mimgs/healthy_bg_02.jpg" alt="">
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
      <img src="../assets/mimgs/healthy_bg_03.jpg" alt="">
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
      <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }" :autoplay="{ delay: 4000, disableOnInteraction: false }" :navigation="{ nextEl: '.custom-pd-next', prevEl: '.custom-pd-prev' }" class="pd-swiper-box">
        <SwiperSlide>
          <div class="pd-slide-item">
            <img src="../assets/mimgs/why-health-1.jpg" alt="">
            <div class="text-left">01</div>
            <div class="text-right">Premium<br>
              Ingredients </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="pd-slide-item">
            <img src="../assets/mimgs/why-health-2.jpg" alt="">
            <div class="text-left">02</div>
            <div class="text-right">Advanced<br>
              Manufacturing<br>
              Techniques</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="pd-slide-item">
            <img src="../assets/mimgs/why-health-3.jpg" alt="">
            <div class="text-left">03</div>
            <div class="text-right">Scientific<br>
              feeding<br>
              guide</div>
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
      <div class="text-block">
        <div @click="changeSwiperIndex(1)" class="text1" :class="{ active: swiperIndex === 1 }">Arctic<br />Char</div>
        <div @click="changeSwiperIndex(2)" class="text2" :class="{ active: swiperIndex === 2 }">Free-<br>Range<br>Chicken</div>
        <div @click="changeSwiperIndex(3)" class="text3" :class="{ active: swiperIndex === 3 }"> Icelake<br>Free-range<br>Duck</div>
        <div @click="changeSwiperIndex(4)" class="text4" :class="{ active: swiperIndex === 4 }">Icefield<br>Moss</div>
      </div>
      <img v-show="swiperIndex === 1" src="../assets/mimgs/food_1.png" alt="">
      <img v-show="swiperIndex === 2" src="../assets/mimgs/food_2.png" alt="">
      <img v-show="swiperIndex === 3" src="../assets/mimgs/food_3.png" alt="">
      <img v-show="swiperIndex === 4" src="../assets/mimgs/food_4.png" alt="">
    </div>
    <div class="swiper-block">
      <Swiper :modules="modules" :slides-per-view="1" @swiper="onSwiper" class="swiper-box">
        <SwiperSlide>
          <div class="slide-item" style="background: #3dd8d0;">
            <div class="slide-item-right">
              From the cold Arctic waters, this fish offers a delicate taste and is rich in omega‑3s to keep your cat’s
              coat soft and shiny. Gentle protein makes it ideal for sensitive stomachs.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="slide-item" style="background: #fc8686;">
            <div class="slide-item-right">
              Raised freely on open pastures, our Starbro chickens deliver lean, protein-rich meat that’s low in fat and
              hormone‑free—perfect for cats with delicate digestion.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="slide-item" style="background: #8acc63;">
            <div class="slide-item-right">
              From the pristine northern waters of North America, our ducks produce lean, nutrient‑dense meat loaded
              with protein and essential amino acids to support your dog’s health and growth.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item" style="background: #1c1c1c;color:#c4c4c4">
            <div class="slide-item-right">
              Canadian Arctic moss is packed with antioxidants and prebiotics to aid digestion, boost immunity, and
              protect skin and coat.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <section class="Manufacturing " ref="manuRef">
      <img src="../assets/mimgs/healthy_bg_05.jpg" alt="">
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

    <section class="feed-guide " ref="feedRef">
      <img src="../assets/mimgs/healthy_bg_07.jpg" alt="">
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
    <FooterMPage />
  </div>
</template>

<script setup>
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import HeaderMPage from "@/components/HeaderMPage.vue";
import FooterMPage from "@/components/FooterMPage.vue";
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { Pagination, Navigation } from 'swiper/modules'
const modules = [Pagination, Navigation, Autoplay]
import { useRouter } from "vue-router";
const router = useRouter()
const goWhy = () => {
  router.push({ name: 'Healthy' });
}

const swiperRef = ref(null)
const swiperIndex = ref(1)
const onSwiper = (swiper) => {
  swiperRef.value = swiper
}
const changeSwiperIndex = (index) => {
  console.log(index)
  swiperIndex.value = index
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
  background: #fff;

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
      font-size: 28px;
      line-height: 1;
      text-align: center;
      width: 80%;
      /* 动画设置 */
      opacity: 0;
      transform: translateY(-100px);
      animation: dropIn 1s ease-out forwards;

      .title1-sub1 {
        font-family: "RedHatDisplay-black";
        font-size: 30px;
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
      top: 20px;
      width: 80%;
      left: 10%;
      opacity: 0;
      //   transform: translateY(-100px);
      transition: all 0.8s 0.8s ease-out;

      &.showBox {
        opacity: 1;
        // transform: translateY(0);
      }

      .text-sub1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 26px;
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
      width: 44%;
      bottom: 160px;
      left: 50%;
      color: #212995;
      font-family: "RedHatDisplay-Regular";
      font-size: 14px;
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
      width: 80%;
      bottom: -7px;
      left: 10%;
      /* margin-left: -500px; */
      color: #212995;
      font-family: "RedHatDisplay-Regular";
      font-size: 45px;
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
    width: 100%;
    position: relative;

    img {
      width: 100%;
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

  .good-taste-block {
    padding: 40px 35px 0;
    background: #fff;

    .left {
      text-align: left;
      color: #11196c;

      .text {
        font-family: "RedHatDisplay-Medium";
        font-size: 16px;
        line-height: 1;

        span {
          display: inline-block;
          font-family: "RedHatDisplay-black";
          font-size: 24px;
          line-height: 1;
        }
      }
    }

    .right {
      text-align: right;

      img {
        width: 60px;
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
    .text-block {
      position: absolute;
      top: 0;
      left: 35px;
      width: 200px;
      div {
        font-family: "RedHatDisplay-Regular";
        font-size: 30px;
        line-height: 1;
        text-align: left;
        margin-bottom: 15px;
        padding-left: 10px;
        &.active {
          position: relative;
          font-family: "RedHatDisplay-Bold";
          color: #212995;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: #212995;
          }
        }
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
    background: #fff;

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
    padding: 180px 0 30px;
    background: #fff;

    img {
      width: 100%;
    }

    .Manufacturing-text1 {
      position: absolute;
      top: 50px;
      width: 80%;
      left: 10%;

      .text-sub1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 34px;
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
      width: 100%;
      color: #fff;
      background: #212995;
      font-family: "Oswald-Regular";
      font-size: 18px;
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

    img {
      width: 100%;
    }

    .feed-guide-text1 {
      position: absolute;
      top: 65px;
      width: 500px;
      left: 50%;
      margin-left: -250px;
      color: #000;
      opacity: 0;
      transition: all 0.8s ease-out;

      &.showFeed {
        opacity: 1;
      }

      .text-sub1 {
        font-family: "RedHatDisplay-Black";
        font-size: 14px;
        line-height: 1;
        text-align: center;

        span {
          font-family: "RedHatDisplay-Regular";
        }
      }

      .text-sub2 {
        font-family: "RedHatDisplay-Regular";
        font-size: 38px;
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
      top: 204px;
      width: 70%;
      left: 15%;
      /* margin-left: -250px; */
      color: #000;
      font-family: "RedHatDisplay-Regular";
      font-size: 16px;
      /* line-height: 1.8; */
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
</style>
