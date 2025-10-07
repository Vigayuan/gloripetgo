<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderMPage />

    <!-- Hero -->
    <section class="hero">
      <img src="../assets/images/whyh_bg_02.jpg" alt="">
      <img src="../assets/images/whyh_bg_03.jpg" alt="">
      <img src="../assets/images/whyh_bg_04.jpg" alt="">
      <img src="../assets/images/whyh_bg_05.jpg" alt="">
      <img src="../assets/images/whyh_bg_06.jpg" alt="">
      <img src="../assets/images/whyh_bg_07.jpg" alt="">
      <img src="../assets/images/whyh_bg_08.jpg" alt="">
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
    <section class="unleash " ref="boxRef">
      <img src="../assets/images/whyh_bg_09.jpg" alt="">
      <img src="../assets/images/whyh_bg_10.jpg" alt="">
      <img src="../assets/images/whyh_bg_11.jpg" alt="">
      <img src="../assets/images/whyh_bg_12.jpg" alt="">
      <img src="../assets/images/whyh_bg_13.jpg" alt="">
      <img src="../assets/images/whyh_bg_14.jpg" alt="">
      <img src="../assets/images/whyh_bg_15.jpg" alt="">
      <div class="unleash-text1">
        <div class="text-sub1">At GloriPetgo™, we are dedicated to ensuring that your <span>beloved pet receives
            nutrition, safety, and deliciousness,</span> all while building a solid health barrier. </div>
      </div>
      <div class="unleash-text2">
        We advocate the philosophy of “prevention before illness” with scientifically formulated recipes designed to
        prevent diseases caused by improper daily diets, allowing your pet to live a healthier and worry-free life.
      </div>
      <div class="unleash-text3">
        WE CARE FOR <span>PET HEALTH</span>
      </div>
    </section>
    <div class="advance-block">
      <div class="left">
        <div class="text-block">
          <div @mouseover="showPic(1)" :class="picIndex == 1 ? 'text-1 active' : 'text-1'">
            <!-- <div class="text-left">01</div> -->
            <div class="text-right">Premium<br>
              Ingredients </div>
          </div>
          <div class="line"></div>
          <div @mouseover="showPic(2)" :class="picIndex == 2 ? 'text-1 active' : 'text-1'">
            <!-- <div class="text-left">02</div> -->
            <div class="text-right">Advanced<br>
              Manufacturing<br>
              Techniques</div>
          </div>
          <div class="line"></div>
          <div @mouseover="showPic(3)" :class="picIndex == 3 ? 'text-1 active' : 'text-1'">
            <!-- <div class="text-left">03</div> -->
            <div class="text-right">Scientific<br>
              feeding<br>
              guide</div>
          </div>
        </div>
      </div>
      <div class="right">
        <img v-show="picIndex == 1" src="../assets/images/food.jpg" alt="">
        <img v-show="picIndex == 2" src="../assets/images/cat.jpg" alt="">
        <img v-show="picIndex == 3" src="../assets/images/salmon.jpg" alt="">
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
      <img src="../assets/images/nutrition_bg_02.jpg" alt="">
      <img src="../assets/images/nutrition_bg_03.jpg" alt="">
      <img src="../assets/images/nutrition_bg_04.jpg" alt="">
      <img src="../assets/images/nutrition_bg_05.jpg" alt="">
      <img src="../assets/images/nutrition_bg_06.jpg" alt="">
      <img src="../assets/images/nutrition_bg_07.jpg" alt="">
      <img src="../assets/images/nutrition_bg_08.jpg" alt="">
      <img src="../assets/images/nutrition_bg_09.jpg" alt="">
      <img src="../assets/images/nutrition_bg_10.jpg" alt="">
    </div>
    <div class="swiper-block">
      <Swiper :modules="modules" :loop="true" :slides-per-view="1" :space-between="30" :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }" class="swiper-box">
        <SwiperSlide>
          <div class="slide-item" style="background: #3dd8d0;">
            <div class="slide-item-left">ARCTIC<br />CHAR</div>
            <div class="slide-item-right">
              Sourced from the icy waters near the arctic circle, our slow-growing arctic char boasts a delicate flavor
              and is naturally rich in omega-3 fatty acids (EPA & DHA) to nourish your cat’s coat into silky smoothness.
              Its premium, easily digestible protein is gentle on sensitive stomachs, making it ideal for cats with
              dietary sensitivities.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="slide-item" style="background: #fc8686;">
            <div class="slide-item-left">Free-
              Range
              CHicken</div>
            <div class="slide-item-right">
              Featuring our nomadic grazing technique, Starbro broiler chickens roam freely across pastures, resulting
              in firm, nutrient-rich meat. Naturally high in protein and vitamin D with low fat content, our
              hormone-free chicken delivers authentic flavor and optimal digestibility for cats' sensitive stomachs.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="slide-item" style="background: #8acc63;">
            <div class="slide-item-left">
              Icelake
              Free-range
              Duck</div>
            <div class="slide-item-right">

              Raised in the pristine high-latitude waters of north america, our ducks thrive in glacial meltwater and
              boreal wetland ecosystems. They forage freely on aquatic plants, insects, and small fish, yielding lean,
              nutrient-dense meat rich in high-quality protein and essential amino acids to support your dog’s vitality
              and growth.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-item" style="background: #1c1c1c;color:#c4c4c4">
            <div class="slide-item-left">Icefield
              Moss</div>
            <div class="slide-item-right">
              Canadian arctic moss is naturally rich in polyphenolic compounds (e.g. flavonoids, catechins) and
              high-molecular polysaccharides including β-glucans & mannans. Phenolic compounds suppress pro-inflammatory
              cytokines (TNF-α, IL-6) to reduce inflammation, inhibit pathogenic bacteria like E. coli for healthier
              digestion, and neutralize UV-induced damage to prevent hair breakage. Polysaccharides activate lymphocytes
              & macrophages for immune support, act as prebiotics to boost bifidobacterium growth for gut health, while
              supporting sebaceous gland function to enhance skin resilience.
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
    <section class="Manufacturing " ref="boxRef">
      <img class="Manufacturing-bg" src="../assets/images/Manufacturing.jpg" alt="">
      <div class="Manufacturing-text1">
        <div class="text-sub1">Advanced <br><span>Manufacturing Techniques</span></div>
      </div>
      <div class="Manufacturing-text2">
        <div>Our dehydration technique, inspired by the methods used to prepare astronaut meals, is one of the finest
          available today. By removing only the water from raw ingredients at low temperatures, we are able to preserve
          their authentic flavor, taste, and nutritional content.</div>

        <div>This process allows our products to be stored and transported at ambient temperatures, significantly
          extending
          their shelf life. Our offerings remain natural, fresh, wholesome, and easy to use. GloripetgoTM consistently
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
    <!-- Footer -->
    <FooterMPage />
  </div>
</template>

<script setup>
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import HeaderMPage from "@/components/HeaderMPage.vue";
import FooterMPage from "@/components/FooterMPage.vue";
import { ref, onMounted, nextTick } from 'vue'
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
onMounted(() => {
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
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  background: #f5f5f5;
  overflow-x: hidden;

  img {
    transform: scale(1.05);
    transform-origin: center center;
  }

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;

    img {
      width: 100%;
      display: block;
    }

    .title1 {
      position: absolute;
      top: 20px;
      left: 5%;
      width: 90%;
      font-family: "RedHatDisplay-Medium";
      font-size: 24px;
      line-height: 1.2;
      text-align: left;
      opacity: 0;
      transform: translateY(-50px);
      animation: dropIn 1s ease-out forwards;

      .title1-sub1 {
        font-family: "RedHatDisplay-Black";
        font-size: 26px;
        display: block;
      }
    }

    .title2 {
      position: absolute;
      bottom: 44px;
      left: 5%;
      width: 60%;
      font-size: 12px;
      line-height: 1.4;
      font-family: "Oswald-Regular";
      color: #fff;
      text-align: left;
    }

    .btn-leran-more {
      position: absolute;
      bottom: 20px;
      right: 10px;
      background: #212995;
      color: #fff;
      border-radius: 24px;
      height: 25px;
      width: 100px;
      line-height: 25px;
      font-size: 10px;
      letter-spacing: 1px;
    }
  }

  @keyframes dropIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Unleash */
  .unleash {
    position: relative;
    font-size: 0;

    img {
      width: 126%;
      display: block;
      margin-left: -13%;
    }

    .unleash-text1 {
      position: absolute;
      top: 20px;
      left: 5%;
      width: 90%;

      .text-sub1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 17px;
        line-height: 1.3;
        color: #9f9f9f;

        span {
          color: #212995;
          font-family: "RedHatDisplay-Bold";
        }
      }
    }

    .unleash-text2 {
      position: absolute;
      bottom: 30px;
      right: 5%;
      width: 50%;
      color: #212995;
      font-family: "Oswald-Regular";
      font-size: 12px;
      line-height: 1.4;
      text-align: left;
    }

    .unleash-text3 {
      position: absolute;
      bottom: -3px;
      left: 5%;
      width: 90%;
      text-align: center;
      line-height: 1;
      font-size: 22px;
      color: #212995;

      span {
        font-family: "RedHatDisplay-Black";
      }
    }
  }

  /* Advance block */
  .advance-block {
    display: flex;
    flex-direction: column;
    background: #fff;

    .left,
    .right {
      width: 100%;
    }

    .left {
      position: relative;
      background: #f25929;
      padding: 30px 0;

      .text-block {
        width: 90%;
        margin: 0 auto;

        .text-1 {
          text-align: center;
          font-size: 20px;
          color: #fff;
          margin: 12px 0;
          line-height: 1.2;

          .text-left {
            font-size: 16px;
            margin-right: 8px;
          }

          &.active,
          &:hover {
            color: #212995;
          }
        }

        .line {
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
          margin: 8px 0;
        }
      }
    }

    .right {
      img {
        width: 100%;
        display: block;
      }
    }
  }

  /* Taste */
  .good-taste-block {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
    background: #fff;

    .text {
      color: #11196c;
      font-family: "RedHatDisplay-Medium";
      font-size: 20px;
      line-height: 1.3;

      span {
        display: block;
        font-size: 28px;
        font-family: "RedHatDisplay-Black";
      }
    }

    img {
      width: 80px;
      margin-top: 20px;
    }
  }

  /* Nutrition images */
  .nutrition-block {
    img {
      width: 100%;
      display: block;
    }
  }

  /* Swiper */
  .swiper-block {
    background: #fff;
    padding: 20px 0;

    :deep(.swiper-box) {
      width: 90%;
      margin: 0 auto;

      .slide-item {
        flex-direction: column;
        padding: 20px;
        border-radius: 12px;
        font-size: 14px;

        .slide-item-left {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .slide-item-right {
          font-size: 13px;
          line-height: 1.4;
        }
      }
    }
  }

  /* Manufacturing */
  .Manufacturing {
    padding: 120px 0 30px;
    background: #fff;
    position: relative;

    .Manufacturing-bg {
      width: 100%;
    }

    .Manufacturing-text1 {
      position: absolute;
      top: 20px;
      width: 100%;
      text-align: center;

      .text-sub1 {
        font-size: 22px;
        color: #9f9f9f;

        span {
          color: #212995;
          font-family: "RedHatDisplay-Bold";
        }
      }
    }

    .Manufacturing-text2 {
      width: 90%;
      position: relative;
      font-size: 14px;
      line-height: 1.5;
      padding: 20px;
      background: #212995;
      color: #fff;
      border-radius: 12px;
      box-sizing: border-box;
      margin: -30px auto 0;
      z-index: 1000;

      div {
        margin-bottom: 12px;
      }
    }
  }

  /* Brand logo */
  .brand-logo {
    background: #fff;
    padding: 20px 0;

    .logo-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      justify-items: center;
      width: 90%;
      margin: 0 auto;

      img {
        height: 30px;
      }
    }
  }
}

/* 让字体在超小设备上自动缩放 */
@media (max-width: 400px) {
  .landing-page {
    font-size: 14px;

    .hero .title1 {
      font-size: 20px;

      .title1-sub1 {
        font-size: 22px;
      }
    }
  }
}
</style>
