<template>
  <header class="topnav">
    <div class="nav-inner">
      <!-- 左侧：社交图标 -->
      <div class="icons-list">
      </div>
      <!-- 中间：logo -->
      <div @click="goHome" class="logo">
        <img src="../assets/imgs/schrain-logo.png" alt="">
      </div>
      <!-- 右侧：菜单按钮（移动端） -->
      <div class="menu-toggle" @click="toggleMenu">
        <img src="../assets/m/menu.png" alt="">
      </div>
    </div>

    <!-- 导航菜单（PC 显示 / 移动端弹出） -->
    <nav class="menu" :class="{ show: showMenu }" @mouseenter="onEnter" @mouseleave="onLeave">
      <div @click="goPd">PRODUCTS</div>
      <div @click="goWhy">WHY SCHRAIN</div>
      <div @click="goSupport">CONTACT</div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showArrowBlock = ref(false);
const showMenu = ref(false);

const goPd = () => {
  router.push({ name: 'mProducts' })
}

const goWhy = () => {
  router.push({ name: 'mHealthy' });
}
const goSupport = () => {
  router.push({ name: 'mSupport' });
}
const goHome = () => {
  router.push({ name: 'mHome' });
}



const onEnter = () => (showArrowBlock.value = true);
const onLeave = () => (showArrowBlock.value = false);
const toggleMenu = () => (showMenu.value = !showMenu.value);
</script>

<style lang="scss" scoped>
.topnav {
  position: relative;
  width: 100%;
  background: #1f160b;

  .nav-inner {
    position: relative;
    height: 54px;
    padding: 0 30px;

    .menu-toggle {
      position: absolute;
      top: 6px;
      right: 15px;
      width: 50px;
      cursor: pointer;
      text-align: right;
      padding: 10px;
      line-height: 0;
      img {
        width: 30px;
      }
    }

    .logo {
      position: absolute;
      top: 0;
      left: 30px;
      width: 85px;
      z-index: 1000;
      img {
        width: 100%;
      }
    }

    .icons-list {
      display: flex;
      align-items: center;
      width: 100px;
      .icon {
        cursor: pointer;
        margin-left: 15px;
        width: 30px;

        img {
          width: 100%;
        }
      }
    }
  }

  /* 顶部菜单（PC显示） */
  .menu {
    display: none;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "Oswald-SemiBold";
    font-size: 18px;
    background: #1f160b;
    height: 60px;
    transition: all 0.3s ease;
    padding-bottom: 10px;
    z-index: 100;
    div {
      cursor: pointer;
      margin: 20px;
      width: 100%;
    }

    .product-block {
      position: relative;

      .products-arrow {
        position: absolute;
        top: 22px;
        right: -15px;
        width: 10px;
      }
    }

    /* 移动端下为隐藏状态 */
    &.show {
      display: flex;
      flex-direction: column;
      height: auto;
      position: absolute;
      top: 53px;
      left: 0;
      z-index: 100;
      width: 100%;
    }
  }

  /* 下拉产品展示块（仅PC显示） */
  .arrow-down-block {
    position: absolute;
    top: 140px;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #e4edf9, #fbfcfe);
    transition: height 0.3s ease;
    padding: 0 5%;
    display: flex;

    &.show {
      height: 400px;
    }

    .left {
      width: 30%;
      color: #a3a9f5;
      margin-top: 50px;
      text-align: left;
    }

    .right {
      display: flex;
      width: 70%;
      margin-top: 50px;

      .product {
        margin-right: 40px;

        img {
          width: 200px;
        }
      }
    }
  }
}
</style>
