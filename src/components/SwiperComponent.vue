<template>
  <div class="carousel" @mouseenter="pause" @mouseleave="resume">
    <!-- 幻灯片容器 -->
    <div
      class="carousel-track"
      :style="{
        transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
        transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none',
      }"
      @transitionend="handleTransitionEnd"
    >
      <div class="carousel-slide" v-for="(slide, index) in displaySlides" :key="index">
        <div class="slide-content" :style="{ backgroundImage: `url(${slide.bg})` }">
          <div class="overlay" :style="{ backgroundColor: slide.color }"></div>
          <div class="slide-inner">
            <h2>{{ slide.title }}</h2>
            <img v-if="slide.image" :src="slide.image" alt="food" />
            <a href="#" class="learn-more">Learn more</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 左右箭头 -->
    <button class="arrow left" @click="prevSlide">‹</button>
    <button class="arrow right" @click="nextSlide">›</button>

    <!-- 指示点 -->
    <div class="indicators">
      <span
        v-for="(dot, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === realIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const visibleSlides = 3.5; // 一屏显示数量
const intervalTime = 3000; // 自动切换时间

const slides = [
  {
    title: "FOREST",
    bg: "https://picsum.photos/id/1018/1000/600/",
    image: "",
    color: "rgba(0,0,0,0.3)",
  },
  {
    title: "ARCTIC CHAR",
    bg: "https://picsum.photos/id/1015/1000/600/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Salmon_Steak.jpg/320px-Salmon_Steak.jpg",
    color: "rgba(0,0,128,0.7)",
  },
  {
    title: "ARCTIC LAND",
    bg: "https://picsum.photos/id/1016/1000/600/",
    image: "",
    color: "rgba(0,0,0,0.3)",
  },
  {
    title: "ICE LAKE DUCK",
    bg: "https://picsum.photos/id/1024/1000/600/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Duck_meat.jpg/320px-Duck_meat.jpg",
    color: "rgba(128,0,128,0.7)",
  },
];

// 拼接头尾（用于无缝）
const displaySlides = computed(() => {
  return [slides[slides.length - 1], ...slides, slides[0]];
});

const currentIndex = ref(1); // 显示的 slide 索引（从 1 开始，因为前面多了一个克隆）
const isTransitioning = ref(true);
let timer = null;

const realIndex = computed(() => {
  if (currentIndex.value === 0) return slides.length - 1;
  if (currentIndex.value === slides.length + 1) return 0;
  return currentIndex.value - 1;
});

function nextSlide() {
  if (isTransitioning.value) {
    currentIndex.value++;
  }
}
function prevSlide() {
  if (isTransitioning.value) {
    currentIndex.value--;
  }
}
function goToSlide(index) {
  currentIndex.value = index + 1;
}

function handleTransitionEnd() {
  if (currentIndex.value === slides.length + 1) {
    isTransitioning.value = false;
    currentIndex.value = 1; // 跳回第一张
    requestAnimationFrame(() => {
      isTransitioning.value = true;
    });
  }
  if (currentIndex.value === 0) {
    isTransitioning.value = false;
    currentIndex.value = slides.length; // 跳回最后一张
    requestAnimationFrame(() => {
      isTransitioning.value = true;
    });
  }
}

// 自动播放
function startAutoPlay() {
  timer = setInterval(nextSlide, intervalTime);
}
function stopAutoPlay() {
  if (timer) clearInterval(timer);
  timer = null;
}
function pause() {
  stopAutoPlay();
}
function resume() {
  startAutoPlay();
}

onMounted(() => {
  startAutoPlay();
});

onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<style scoped>
.carousel {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
  margin: auto;
  border-radius: 8px;
}

.carousel-track {
  display: flex;
  height: 100%;
}

.carousel-slide {
  flex: 0 0 calc(100% / 3.5);
  height: 100%;
  position: relative;
  margin-right: 10px;
}

.slide-content {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  opacity: 0.7;
}

.slide-inner {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  padding-top: 50px;
}

.slide-inner h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.slide-inner img {
  width: 150px;
  margin-bottom: 10px;
}

.learn-more {
  color: white;
  border-bottom: 2px solid white;
  text-decoration: none;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  font-size: 30px;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.8;
}
.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}
.dot {
  height: 10px;
  width: 10px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}
.dot.active {
  background-color: #333;
}
</style>
