<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderMPage />
    <!-- Hero -->
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="../assets/m/why-p1.jpg" alt="">
      </div>
    </section>
    <div class="shape-img">
      <img src="../assets/m/why-p5.png" alt="">
    </div>

    <!-- Unleash energy -->
    <section class="unleash " ref="boxRef">
      <img src="../assets/m/why-p2.jpg" alt="">
      <img class="itall" src="../assets/m/itall.svg" alt="">
      <div class="unleash-text1" :class="{ showBox }">
        In 2015, Dr. Erin Macdonald witnessed an Arctic fox instinctively select only the freshest prey.
        That moment revealed a fundamental truth: real nutrition doesn’t come from engineering—it follows nature.
        <br><br>

        Schrain was born from that belief.<br><br>

        We carefully source high-quality, nutrient-dense ingredients, rich in essential vitamins and minerals, to
        craft a complete and balanced kibble designed for your cat’s health and enjoyment. Because true nourishment
        goes beyond survival—it supports a life well lived.

      </div>
      <img src="../assets/imgs/why/photo.jpg" alt="" class="story_photo" :class="{ showBox }">
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
          <Swiper :modules="modules" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }" :autoplay="{ delay: 4000, disableOnInteraction: false }" class="pd-swiper-box">
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
        </div>
      </div>
    </div>
    <div class="his-2005">
      <div class="his-2005-content">
        <div class="left">
          <img src="../assets/m/why-p3.jpg" alt="">
        </div>
        <div class="center">
          <div class="text1">TO HELP EVERY <br>
            HOUSE CAT RECLAIM<br>
            THE DIET OF THEIR<br>
            WILD ANCESTORS</div>
          <img class="icon-cat" src="../assets/m/why-p6.png" alt="">
          <div class="text2">In the next decade, we aim to bring Instinct First.<br> Nature Always. to millions of
            cats—delivering visible<br> health from the inside out.<br>
            Because the perfect formula wasn’t designed by<br> humans. It was written by nature.
          </div>
        </div>
        <div class="right">
          <img src="../assets/m/why-p4.jpg" alt="">
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
                What drives Schrain at its core?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 1">+</div>
                <div v-show="showQAIndex == 1">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 1" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                We believe every cat deserves to eat like an Arctic fox—close to the wild. That’s why we turn down the
                heat, choose cold-press & freeze-dry, and let instinct flow back into the bowl.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(2)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                What does “natural” really mean to you?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 2">+</div>
                <div v-show="showQAIndex == 2">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 2" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                It isn’t a buzz-word; it’s a low-intervention journey: whole muscles of meat, light processing, zero
                artificial colours or palatants. Open the bag and you’ll smell the ocean and the prairie—no translator
                needed.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(3)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                Why insist on cold-pressing?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 3">+</div>
                <div v-show="showQAIndex == 3">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 3" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                High temperature is an invisible blade—it slashes vitamins, amino acids and aroma.
                We keep the process low-temperature, so nutrition stays intact and picky cats willingly come to the
                dish.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(4)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                Which nutrition standard do you follow?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 4">+</div>
                <div v-show="showQAIndex == 4">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 4" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                AAFCO “All Life Stages” is our global passport. Whether your kitty lounges in a Toronto condo or a
                Shanghai lane-house, the same balanced nutrition reaches their bowl.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(5)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                How do you view sustainability?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 5">+</div>
                <div v-show="showQAIndex == 5">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 5" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                We respect every fish we fillet and every steer we harvest. Light-weight bags, FSC paper, responsible
                fisheries and carbon-smart scheduling quietly pay the planet back—because “natural” must not stop at the
                label edge.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(6)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                What role does science play?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 6">+</div>
                <div v-show="showQAIndex == 6">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 6" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                Nature proposes, science proof-reads. Each batch walks through a third-party lab magnifying
                glass—protein authenticity, heavy-metal screen, microbial count. Only when the numbers sing do we stamp
                the release seal.
              </div>
            </div>
          </div>
          <div @click="toggleShowQA(7)" class="phil-item">
            <div class="phil-item-top">
              <div class="phil-item-top-text">
                How can I switch foods without upset tummies?
              </div>
              <div class="control-btn">
                <div v-show="showQAIndex != 7">+</div>
                <div v-show="showQAIndex == 7">-</div>
              </div>
            </div>
            <div v-show="showQAIndex == 7" class="phil-item-bottom">
              <div class="phil-item-bottom-text">
                Give the gut a seven-day buffer: days 1–2 = 25 % new, days 3–4 = 50 %, days 5–6 = 75 %, day 7 = 100 %.
                Slow and steady lets intestinal bacteria catch up.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <FooterMPage />
  </div>
</template>

<script setup>
import HeaderMPage from "@/components/HeaderMPage.vue";
import FooterMPage from "@/components/FooterMPage.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
const modules = [Pagination, Navigation, Autoplay]
const boxRef = ref(null)
const missionRef = ref(null)
const showBox = ref(false);
const showMission = ref(false);
let observers = []
const showQAIndex = ref(-1);


onMounted(() => {
  // 1️⃣ box
  const observer1 = new IntersectionObserver(
    ([entry]) => {
      showBox.value = entry.isIntersecting;
    },
    {
      threshold: 0.3, // 进入 10% 可视区域时触发
      rootMargin: "0px 0px 0px 0px", // 提前 30% 触发
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
      threshold: 0.3,
      rootMargin: "0px 0px -10% 0px", // 比 box 晚一点触发
    }
  );
  if (missionRef.value) observer2.observe(missionRef.value);
  observers.push(observer2);

});
const toggleShowQA = (index) => {
  showQAIndex.value = showQAIndex.value === index ? -1 : index;
}

onBeforeUnmount(() => {
  observers.forEach((o) => o.disconnect())
});
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  background: #eee8da;
  overflow: hidden;
  .hero {
    position: relative;
    font-size: 0;
    line-height: 0;
    color: #fff;

    .hero-bg {
      height: 7.75rem;
      overflow: hidden;

      img {
        width: 100%;
        margin-top: -0.5333rem;
      }
    }

    .title1 {
      position: absolute;
      bottom: 1.3333rem;
      left: 0.9333rem;
      font-family: "RedHatDisplay-Black";
      font-size: 1.2rem;
      line-height: 1;
      text-align: left;
      width: 70%;
      opacity: 0;
      transform: translateY(-2.6667rem);
      animation: dropIn-079450ae 1s ease-out forwards;
      text-shadow: 0 0 0.1067rem #525252;
    }
  }

  .shape-img {
    margin-top: -137px;
    z-index: 1000;
    position: relative;
    font-size: 0;
    line-height: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }

  @keyframes dropIn {
    from {
      opacity: 0;
      transform: translateY(-2.6667rem);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
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
    background: #eee8da;
    margin-top: -5px;
    z-index: 1000;

    img {
      width: 100%;
    }

    .itall {
      position: absolute;
      width: 80%;
      left: 10%;
      top: 0;
    }

    .story_bg {
      position: absolute;
      width: 14.6667rem;
      top: 5.3333rem;
      left: 15%;
    }

    .unleash-text1 {
      position: absolute;
      width: 80%;
      top: 160px;
      left: 10%;
      color: #1f150b;
      font-family: "RedHatDisplay-Regular";
      font-size: 12px;
      line-height: 1.2;
      text-align: center;
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;

      &.showBox {
        opacity: 1;
        transform: translatey(0px);
      }

      span {
        display: inline-block;
        font-family: "RedHatDisplay-black";
      }
    }

    .story_photo {
      position: absolute;
      top: 349px;
      left: 50%;
      width: 160px;
      margin-left: -80px;
      -o-object-fit: cover;
      object-fit: cover;
      transform: rotate(30deg) translateX(1000px);
      transition: all 0.8s ease-out;
      box-shadow: 0 0 4px 4px #c4c4c4;

      &.showBox {
        transform: rotate(-5deg) translateX(0);
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
      width: 100%;
      margin: 0 auto;
      padding: 30px 5%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .our-mission-item {
        width: 49%;
        margin-bottom: 30px;

        .img-block {
          width: 100px;
          margin: 0 auto;

          img {
            width: 100%;
          }
        }
      }
    }

    .text-1 {
      font-family: "Oswald-SemiBlod";
      font-size: 15px;
      line-height: 1.2;
      font-weight: bold;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;

      &.showMission {
        opacity: 1;
        transform: translatey(0px);
      }
    }

    .text-2 {
      font-family: "Oswald-Regular";
      font-size: 10px;
      line-height: 1.2;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;
      margin-top: 8px;

      &.showMission {
        opacity: 1;
        transform: translatey(0px);
      }
    }
  }

  .advance-block {
    width: 100%;
    position: relative;
    padding-bottom: 30px;
    background-color: #efe8db;

    .advance-content {
      width: 100%;
      margin: 0 auto;

      .left {
        width: 100%;
        padding: 40px;

        .text-1 {
          font-family: "Copper";
          font-size: 32px;
          line-height: 1.2;
          text-align: left;
          color: #1f160b;
        }

        .text-2 {
          font-family: "RedHatDisplay-Regular";
          font-size: 12px;
          line-height: 1.2;
          text-align: left;
          color: #938c34;
          margin-top: 20px;
          width: 80%;
        }
        img {
          width: 100%;
        }
      }

      .right {
        position: relative;
        width: 90%;
        margin: 0 auto;

        .pd-swiper-box {
          width: 100%;

          .pd-slide-item {
            width: 100%;
            position: relative;
            text-align: right;
            color: #212995;
            img {
              width: 100%;
            }
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
      margin: 0 auto;

      .left {
        width: 100%;
        img {
          width: 100%;
        }
      }

      .center {
        flex: 1;
        background-color: #fde2b9;
        color: #231f20;
        padding: 20px;
        .text1 {
          font-family: "Copper";
          font-size: 20px;
          line-height: 1.2;
          text-align: center;
          color: #1f160b;
        }

        .text2 {
          font-family: "Oswald-Regular";
          font-size: 11px;
          line-height: 1.2;
          text-align: center;
          color: #1f160b;
        }
        .icon-cat {
          width: 29px;
          margin: 30px auto;
        }
      }

      .right {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }

  .philosophy {
    position: relative;
    font-size: 0;
    color: #efe8db;
    padding: 60px 0;
    background: url(../assets/m/why-p7.jpg);
    background-size: 100%;
    .phil-block {
      width: 90%;
      margin: 0 auto;

      .phil-text1 {
        font-family: "RedHatDisplay-Black";
        font-size: 26px;
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
              font-size: 11px;
              line-height: 20px;
              text-transform: uppercase;
            }

            .control-btn {
              font-size: 32px;
              color: #7e7e7e;
              cursor: pointer;
            }
          }

          .phil-item-bottom {
            font-family: "Oswald-Regular";
            font-size: 10px;
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
</style>
