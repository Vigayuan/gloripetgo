<template>
  <div class="landing-page">
    <!-- Header -->
    <HeaderPage />

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="../assets/images/story_bg_02.jpg" alt="">
        <img src="../assets/images/story_bg_03.jpg" alt="">
        <img src="../assets/images/story_bg_04.jpg" alt="">
        <img src="../assets/images/story_bg_05.jpg" alt="">
        <img src="../assets/images/story_bg_06.jpg" alt="">
        <img src="../assets/images/story_bg_07.jpg" alt="">
        <img src="../assets/images/story_bg_08.jpg" alt="">
      </div>
      <div class="title1">
        OUR<br>
        STORY
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
      <img class="story_bg" src="../assets/images/story_photo_bg.jpg" alt="">
      <div class="unleash-text1">
        <div class="text-sub1"><span>INSPIRED BY THE</span><br>
          POLAR <br>
          SPIRIT
        </div>
      </div>
      <div class="unleash-text2" :class="{ show }">
        In 1998
      </div>
      <div class="unleash-text3" :class="{ show }">
        under the shimmering auroras of Canada's Yukon, <span>Dr. Ethan Frost</span> - a veterinarian and polar explorer
        - joined an
        Arctic expedition. He witnessed local Inuit communities caring for their sled dogs through the harshest winters.
        <br><br>
        These incredible dogs thrived on wild, hunted meats, cold-water fish, and herbs shaped by the frozen land. The
        strength in their eyes sparked Ethan's question: Could the wisdom of polar survival become everyday protection
        for our pets at home?
      </div>
    </section>
    <div class="our-mission" ref="missionRef">
      <div class="img-block">
        <img src="../assets/images/story_bg_10.jpg" alt="">
        <img src="../assets/images/story_bg_11.jpg" alt="">
        <img src="../assets/images/story_bg_12.jpg" alt="">
        <img src="../assets/images/story_bg_13.jpg" alt="">
        <img src="../assets/images/story_bg_14.jpg" alt="">
      </div>
      <div class="text-1" :class="{ show }">Our mission</div>
      <div class="text-2" :class="{ show }">help pets live healthier, longer lives through nature-powered, preventive
        nutrition.</div>
    </div>
    <div class="his-2005">
      <div class="img-block">
        <img src="../assets/images/story_bg_17.jpg" alt="">
        <img src="../assets/images/story_bg_18.jpg" alt="">
        <img src="../assets/images/story_bg_19.jpg" alt="">
        <img src="../assets/images/story_bg_20.jpg" alt="">
        <img src="../assets/images/story_bg_21.jpg" alt="">
        <img src="../assets/images/story_bg_22.jpg" alt="">
        <img src="../assets/images/story_bg_23.jpg" alt="">
      </div>
      <div class="his-content">
        <div class="text-1">
          In 2005
        </div>
        <div class="text-2">
          Ethan teamed up with nutritionists in Quebec to create <span class="text-sub-1">GloriPetgo™</span> — a brand
          built on the belief of <span class="text-sub-2">“Daily Defense in Every Bite.”</span> Our mission was simple
          yet powerful: help pets live healthier, longer lives through
          nature-powered, preventive nutrition.
        </div>
      </div>
    </div>
    <div class="his-2022">
      <div class="img-block">
        <img src="../assets/images/story_bg_24.jpg" alt="">
        <img src="../assets/images/story_bg_25.jpg" alt="">
        <img src="../assets/images/story_bg_26.jpg" alt="">
        <img src="../assets/images/story_bg_27.jpg" alt="">
        <img src="../assets/images/story_bg_28.jpg" alt="">
        <img src="../assets/images/story_bg_29.jpg" alt="">
        <img src="../assets/images/story_bg_30.jpg" alt="">
      </div>
      <div class="his-content">
        <div class="text-1">
          2022
        </div>
        <div class="text-2">
          <span class="text-sub-1">GloriPetgo™</span> began sharing this philosophy worldwide, offering pet owners food
          inspired by the Arctic’s resilience — crafted to guard their companions’ health from the inside out.
          <br><br><br>
          Today, every bag of <span class="text-sub-1">GloriPetgo™</span> carries the spirit of the North: pure,
          protective, and committed to a lifetime of vitality for pets everywhere.
        </div>
      </div>
    </div>
    <div class="our-commitment" ref="commitmentRef">
      <div class="img-block">
        <img src="../assets/images/story_bg_31.jpg" alt="">
        <img src="../assets/images/story_bg_32.jpg" alt="">
        <img src="../assets/images/story_bg_33.jpg" alt="">
        <img src="../assets/images/story_bg_34.jpg" alt="">
        <img src="../assets/images/story_bg_35.jpg" alt="">
        <img src="../assets/images/story_bg_36.jpg" alt="">
        <img src="../assets/images/story_bg_37.jpg" alt="">
        <img src="../assets/images/story_bg_38.jpg" alt="">
      </div>
      <div class="text-1" :class="{ show }">Our Commitment <br>to <span>Sustainability</span>
      </div>
    </div>
    <div class="four-re">
      <div class="item">
        <div class="title">Reject</div>
        <div class="content">We’re cutting unnecessary packaging to protect the planet. Excess packaging wastes
          resources and adds to pollution, so we design streamlined solutions that reduce waste and lower carbon
          emissions.
        </div>
      </div>
      <div class="item">
        <div class="title">Reduce</div>
        <div class="content">We work to minimize waste in every step of our operations, using energy efficient
          production and logistics to decrease energy use and shrink our ecological footprint—preserving resources for
          future generations.
        </div>
      </div>
      <div class="item">
        <div class="title">Reuse</div>
        <div class="content">Where safety allows, we repurpose packaging materials. By reusing them in our production
          process, we cut waste and impact, while maintaining the highest food safety standards.
        </div>
      </div>
      <div class="item">
        <div class="title">Recycle</div>
        <div class="content">We choose recyclable materials whenever possible. This helps reduce our environmental
          footprint and supports a future where sustainability is the norm.
        </div>
      </div>
    </div>
    <div class="final-tag">
      <div class="img-block">
        <img src="../assets/images/story_bg_40.jpg" alt="">
        <img src="../assets/images/story_bg_41.jpg" alt="">
        <img src="../assets/images/story_bg_42.jpg" alt="">
        <img src="../assets/images/story_bg_43.jpg" alt="">
      </div>
      <div class="text-1">GloriPetgo™ is dedicated to creating products that care for pets—and the planet.</div>
    </div>
    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()
const boxRef = ref(null)
const missionRef = ref(null)
const commitmentRef = ref(null)
const show = ref(false)
const goWhy = () => {
  router.push({ name: 'Healthy' });
}
let observer = null
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
      rootMargin: "0px 0px -50% 0px"
    }
  );

  if (boxRef.value) {
    observer.observe(boxRef.value);
  }
  if (missionRef.value) {
    observer.observe(missionRef.value);
  }
  if (commitmentRef.value) {
    observer.observe(commitmentRef.value);
  }
});


onBeforeUnmount(() => {
  if (observer && boxRef.value) {
    observer.unobserve(boxRef.value);
  }
  if (missionRef.value) {
    observer.unobserve(missionRef.value);
  }
  if (commitmentRef.value) {
    observer.unobserve(commitmentRef.value);
  }
});
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;

  .hero {
    position: relative;
    font-size: 0;
    color: #fff;

    .hero-bg {
      height: 310px;
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
      top: 45%;
      left: 15%;
      font-family: "RedHatDisplay-Black";
      font-size: 60px;
      line-height: 1;
      text-align: left;
      width: 70%;
      /* 动画设置 */
      opacity: 0;
      transform: translateY(-100px);
      animation: dropIn 1s ease-out forwards;
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
    height: 800px;
    background: #eee8e0;

    .story_bg {
      position: absolute;
      width: 550px;
      top: 200px;
      left: 15%;
    }

    .unleash-text1 {
      position: absolute;
      top: 50px;
      width: 70%;
      left: 15%;

      .text-sub1 {
        font-family: "RedHatDisplay-Black";
        font-size: 60px;
        line-height: 1;
        text-align: left;
        color: #212995;

        span {
          font-family: "RedHatDisplay-Medium";
          font-size: 30px;
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
      top: 180px;
      left: calc(15% + 600px);
      color: #fff;
      font-family: "RedHatDisplay-Regular";
      font-size: 94px;
      line-height: 1.2;
      text-align: left;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.show {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .unleash-text3 {
      position: absolute;
      width: 35%;
      top: 300px;
      left: calc(15% + 600px);
      color: #212995;
      font-family: "RedHatDisplay-Regular";
      font-size: 20px;
      line-height: 1.5;
      text-align: left;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.show {
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
    height: 300px;
    overflow: hidden;

    .img-block {
      width: 100%;
      line-height: 0;

      img {
        width: 100%;
      }
    }

    .text-1 {
      position: absolute;
      top: 60px;
      left: 15%;
      width: 70%;
      font-family: "RedHatDisplay-black";
      font-size: 50px;
      line-height: 1;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.show {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .text-2 {
      font-family: "RedHatDisplay-Regular";
      position: absolute;
      top: 130px;
      left: 25%;
      width: 50%;
      font-size: 25px;
      line-height: 1.5;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.show {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  .his-2005 {
    position: relative;
    background: #fff;
    padding-top: 30px;

    .img-block {
      width: 100%;
      line-height: 0;

      img {
        width: 100%;
      }
    }

    .his-content {
      position: absolute;
      width: 30%;
      left: 15%;
      top: 15%;
      text-align: left;

      .text-1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 75px;
        line-height: 1;
        color: #6fc3ee;
      }

      .text-2 {
        font-family: "RedHatDisplay-Medium";
        font-size: 18px;
        line-height: 1.5;
        color: #333;
        margin-top: 30px;

        .text-sub-1 {
          font-family: "RedHatDisplay-Bold";
        }

        .text-sub-2 {
          font-family: "RedHatDisplay-Bold";
          color: #6fc3ee;
        }
      }
    }

  }

  .his-2022 {
    position: relative;
    background: #fff;
    padding-top: 30px;

    .img-block {
      width: 100%;
      line-height: 0;

      img {
        width: 100%;
      }
    }

    .his-content {
      position: absolute;
      width: 35%;
      left: 60%;
      top: 10%;
      text-align: left;

      .text-1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 75px;
        line-height: 1;
        color: #6fc3ee;
      }

      .text-2 {
        font-family: "RedHatDisplay-Medium";
        font-size: 18px;
        line-height: 1.5;
        color: #333;
        margin-top: 30px;

        .text-sub-1 {
          font-family: "RedHatDisplay-Bold";
        }

        .text-sub-2 {
          font-family: "RedHatDisplay-Bold";
          color: #6fc3ee;
        }
      }
    }

  }

  .our-commitment {
    position: relative;
    width: 100%;
    overflow: hidden;

    .img-block {
      width: 100%;
      line-height: 0;

      img {
        width: 100%;
      }
    }

    .text-1 {
      position: absolute;
      top: 160px;
      left: 15%;
      width: 70%;
      font-family: "RedHatDisplay-Medium";
      font-size: 50px;
      line-height: 1.2;
      text-align: center;
      color: #fff;
      opacity: 0;
      transform: translateY(1000);
      transition: all 0.8s ease-out;

      &.show {
        opacity: 1;
        transform: translateX(0);
      }

      span {
        font-family: "RedHatDisplay-black";
      }
    }
  }

  .four-re {
    display: flex;
    padding: 40px 10%;
    color: #212995;
    text-align: left;
    justify-content: space-between;

    .item {
      width: 200px;

      .title {
        font-family: "RedHatDisplay-black";
        font-size: 24px;
        line-height: 1.2;
        margin-bottom: 20px;
      }

      .content {
        font-family: "RedHatDisplay-Regular";
        font-size: 14px;
        line-height: 1.2;
      }
    }
  }

  .final-tag {
    position: relative;
    width: 100%;
    overflow: hidden;

    .img-block {
      width: 100%;
      line-height: 0;

      img {
        width: 100%;
      }
    }

    .text-1 {
      position: absolute;
      top: 30%;
      left: 28%;
      width: 44%;
      font-family: "RedHatDisplay-Medium";
      font-size: 22px;
      line-height: 1.2;
      text-align: center;
      color: #fff;

      span {
        font-family: "RedHatDisplay-black";
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
