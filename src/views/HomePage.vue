<template>
  <div class="landing-page">
    <!-- Top nav -->
    <header class="topnav">
      <div class=" nav-inner">
        <nav class="menu">
          <div>Products</div>
          <div>Why healthy</div>
          <div>Our story</div>
          <div>About us</div>
        </nav>
        <div class="logo">
          <img src="../assets/images/Icon-Gloripetgo-logo.svg" alt="">
        </div>
        <div class="icons-list">
          <div class="icon">
            <img src="../assets/images/icon-youtube.svg" alt="">
          </div>
          <div class="icon">
            <img src="../assets/images/icon-youtube.svg" alt="">
          </div>
          <div class="icon">
            <img src="../assets/images/icon-youtube.svg" alt="">
          </div>
          <div class="icon">
            <img src="../assets/images/icon-youtube.svg" alt="">
          </div>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero">
      <img src="../assets/images/bg_01.jpg" alt="">
      <img src="../assets/images/bg_02.jpg" alt="">
      <img src="../assets/images/bg_03.jpg" alt="">
      <img src="../assets/images/bg_04.jpg" alt="">
      <img src="../assets/images/bg_05.jpg" alt="">
      <img src="../assets/images/bg_06.jpg" alt="">
    </section>

    <!-- Unleash energy -->
    <section class="unleash " ref="boxRef">
      <img src="../assets/images/bg_07.jpg" alt="">
      <img src="../assets/images/bg_08.jpg" alt="">
      <img src="../assets/images/bg_09.jpg" alt="">
      <img src="../assets/images/bg_10.jpg" alt="">
      <img src="../assets/images/bg_11.jpg" alt="">
      <img src="../assets/images/bg_12.jpg" alt="">
      <div class="particle" :class="{ show }">
        <img src="../assets/images/particle.png" alt="">
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="products ">
      <h3>Discover <span>Our Products</span></h3>
      <div class="product-grid">
        <div class="card" v-for="(p, i) in products" :key="i">
          <img :src="p.img" :alt="p.title" />
          <h4>{{ p.title }}</h4>
          <p class="tag">{{ p.tag }}</p>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="philosophy">
      <div class=" phil-inner">
        <div class="phil-left">
          <h3>Product Philosophy</h3>
          <ul>
            <li><strong>Natural</strong><br />Clean ingredients bring less allergy risks.</li>
            <li><strong>Fresh</strong><br />Fresh raw materials to retain better nutrition.</li>
            <li><strong>Health</strong><br />Defense: those meals a day reduce the risk of illness.</li>
            <li><strong>Convenient</strong><br />Ready-to-use, easy to serve.</li>
          </ul>
        </div>
        <div class="phil-right">
          <img :src="philoImage" alt="cats & owner" />
        </div>
      </div>
    </section>

    <!-- Testimonials + CTA -->
    <section class="cta ">
      <div class="reviews">
        <div class="review" v-for="n in 4" :key="n">
          <div class="thumb"></div>
          <h5>Lorem Ipsum</h5>
          <p>Short testimonial about the product and how it helped my pet.</p>
        </div>
      </div>
      <div class="signup">
        <h4>Sign up for pet news, offers and more!</h4>
        <div class="signup-form">
          <input placeholder="Enter your email" />
          <button class="btn">Sign up</button>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class=" footer-inner">
        <div class="brand">GloriPetgo</div>
        <nav class="f-menu">
          <a href="#">Products</a>
          <a href="#">Why healthy</a>
          <a href="#">Our story</a>
          <a href="#">About us</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script  setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const boxRef = ref(null);
const show = ref(false);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show.value = true; // 进入视口时触发动画
          observer.unobserve(entry.target); // 只触发一次
        }
      });
    },
    { threshold: 0.2 }
  );

  if (boxRef.value) {
    observer.observe(boxRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer && boxRef.value) {
    observer.unobserve(boxRef.value);
  }
});
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  min-width: 1200px;
  .topnav {
    width: 100%;
    height: 80px;
    background: #212995;
    .nav-inner {
      box-sizing: border-box;
      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 50px;
      margin: 0 auto;
      .menu {
        width: 40%;
        display: flex;
        color: #fff;
        font-family: "Oswald-SemiBold";
        font-size: 18px;
        line-height: 1;
        div {
          cursor: pointer;
          margin-right: 35px;
        }
      }
      .logo {
        width: 70px;
        height: auto;
      }
      .icons-list {
        width: 40%;
        display: flex;
        flex-direction: row-reverse;
        .icon {
          cursor: pointer;
          margin-left: 20px;
          width: 40px;
        }
      }
    }
  }
  .hero {
    font-size: 0;
    img {
      width: 100%;
    }
  }
  .unleash {
    position: relative;
    font-size: 0;
    img {
      width: 100%;
    }
    .particle {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transform: translateY(150px);
      transition: all 0.8s ease-out;
    }

    .particle.show {
      opacity: 1;
      transform: translateY(0);
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
