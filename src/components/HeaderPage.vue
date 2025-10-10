<template>
  <!-- Top nav -->
  <header class="topnav">
    <div class="nav-inner">
      <nav class="menu">
        <div class="product-block" @mouseenter="onEnter" @mouseleave="onLeave">
          <div @click="goPd" class="text nav-text" :class="{ active: activeName === 'Products' }">Products</div>
          <img class="products-arrow" :class="{ rotate: showArrowBlock }" src="../assets/images/products-arrow.svg"
            alt="" />
        </div>
        <div @click="goWhy" class="nav-text" :class="{ active: activeName === 'Healthy' }">Why healthy</div>
        <div @click="goStory" class="nav-text" :class="{ active: activeName === 'Story' }">Our story</div>
        <div @click="goSupport" class="nav-text" :class="{ active: activeName === 'Support' }">Support</div>
      </nav>
      <div @click="goHome" class="logo">
        <img src="../assets/images/Icon-Gloripetgo-logo.svg" alt="">
      </div>
      <div class="icons-list">
        <div @click="openWindow(1)" class="icon">
          <img src="../assets/images/icon-facebook.svg" alt="">
        </div>
        <div @click="openWindow(2)" class="icon">
          <img src="../assets/images/icon-youtube.svg" alt="">
        </div>
        <div @click="openWindow(3)" class="icon">
          <img src="../assets/images/icon-ins.svg" alt="">
        </div>
      </div>
    </div>
    <div class="arrow-down-block" :class="{ show: showArrowBlock }" @mouseenter="onEnter" @mouseleave="onLeave">
      <div class="left">
        <div class="text-1">Explore our</div>
        <div class="text-2">Excellent<br>
          Furry<br>
          Products</div>
        <!-- <div @click="goPd" class="text-3">Learn More</div> -->
      </div>
      <div class="right">
        <div class="product">
          <div class="pd-img">
            <img @click="goProductDetail(1)" src="../assets/images/pd1.png" alt="" />
          </div>
          <div class="text" style="padding-left: 35px;">For Dog</div>
        </div>
        <div class="product">
          <div class="pd-img">
            <img @click="goProductDetail(2)" src="../assets/images/pd2.png" alt="" />
            <img @click="goProductDetail(3)" src="../assets/images/pd3.png" alt="" />
          </div>
          <div class="text">For Cat</div>
        </div>
      </div>
    </div>
    <div class="mask" :class="{ show: showArrowBlock }"></div>
  </header>
</template>
<script setup>
import { ref, watch } from "vue";
const showArrowBlock = ref(false);
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const activeName = ref(route.name || '');
watch(
  () => route.name,
  (newName, oldName) => {
    if (newName && newName !== oldName) {
      activeName.value = newName;
      console.log('Route name changed:', newName);
    }
  },
  { immediate: true }
);
const goProductDetail = (id) => {
  router.push({ name: 'ProductDetail', query: { id } });
}
const goPd = () => {
  router.push({ name: 'Products' })
}
const goHome = () => {
  router.push({ name: 'Home' });
}
const goWhy = () => {
  router.push({ name: 'Healthy' });
}
const goStory = () => {
  router.push({ name: 'Story' });
}
const goSupport = () => {
  router.push({ name: 'Support' });
}
const openWindow = (index) => {
  if (index == 1) {
    window.open('https://www.facebook.com/profile.php?id=61577967892785', "_blank")
  }
  else if (index == 2) {
    window.open('https://www.youtube.com/@GloriPetgo', "_blank")
  }
  else {
    window.open('https://www.instagram.com/glori.petgo?igsh=ajc5bmZuNWJ2MWY4&utm_source=qr', "_blank")
  }
}
// 鼠标进入/离开时切换状态
const onEnter = () => {
  showArrowBlock.value = true;
};
const onLeave = () => {
  showArrowBlock.value = false;
};

</script>

<style lang="scss" scoped>
.topnav {
  position: relative;
  width: 100%;
  height: 80px;
  background: #212995;

  .nav-inner {
    position: relative;
    box-sizing: border-box;
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 50px;
    margin: 0 auto;
    z-index: 100;
    background: #212995;

    .menu {
      width: 40%;
      display: flex;
      color: #fff;
      font-family: "Oswald-SemiBold";
      font-size: 18px;
      line-height: 80px;

      .active {
        position: relative;

        &::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 3px;
          background: #fff;
          bottom: 17px;
          left: 0;
        }
      }

      .product-block {
        position: relative;

        .products-arrow {
          position: absolute;
          top: 39px;
          right: 10px;
          width: 13px;
          cursor: pointer;
        }

        .rotate {
          transform: rotate(180deg);
        }
      }

      div {
        cursor: pointer;
        margin-right: 30px;
      }
    }

    .logo {
      cursor: pointer;
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
        width: 30px;
      }
    }
  }

  .arrow-down-block {
    position: absolute;
    display: flex;
    top: 80px;
    left: 0;
    width: 100%;
    height: 0;
    /* 初始高度 0 */
    overflow: hidden;
    /* 超出部分隐藏 */
    z-index: 100;
    background: linear-gradient(to bottom, #e4edf9, #fbfcfe);
    transition: height 0.3s ease;
    padding: 0 5%;

    &.show {
      height: 400px;
    }

    .left {
      width: 30%;
      color: #a3a9f5;
      text-align: left;
      margin-top: 50px;

      .text-1 {
        font-family: "RedHatDisplay-Regular";
        font-size: 50px;
        line-height: 1;
      }

      .text-2 {
        font-family: "RedHatDisplay-black";
        font-size: 50px;
        line-height: 1;
      }

      .text-3 {
        cursor: pointer;
        font-family: "RedHatDisplay-Medium";
        font-size: 18px;
        line-height: 40px;
        color: #fff;
        background: #a3a9f5;
        width: 150px;
        border-radius: 15px;
        height: 40px;
        text-align: center;
        margin: 20px 0 0 10px;
      }
    }

    .right {
      display: flex;
      width: 60%;
      margin-top: 50px;

      .product {
        height: 300px;
        margin-right: 0;

        .pd-img {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            cursor: pointer;
            width: 250px;

            &:hover {
              transform: scale(1.05);
              animation: scaleUp 0.5s linear;
            }
          }
        }

        .text {
          font-family: "RedHatDisplay-Medium";
          font-size: 18px;
          line-height: 1;
          color: #212995;
          margin-top: 20px;
        }
      }
    }
  }

  .mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 80;

    &.show {
      display: block;
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
</style>