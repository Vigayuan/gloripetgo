<template>
  <div class="product-page">
    <HeaderPage />
    <!-- Product Section -->
    <div class="product-wrapper">
      <section class="product-detail">
        <div class="left">
          <div class="main-image">
            <img v-show="showPdIndex == 1" :src="pdInfo.pdImgList[0]" alt="" />
            <img v-show="showPdIndex == 2" :src="pdInfo.pdImgList[1]" alt="" />
            <img v-show="showPdIndex == 3" :src="pdInfo.pdImgList[2]" alt="" />
          </div>
          <div class="thumbs">
            <img @click="showPD(1)" :class="showPdIndex == 1 ? 'active' : ''" :src="pdInfo.pdImgList[0]" alt="" />
            <img @click="showPD(2)" :class="showPdIndex == 2 ? 'active' : ''" :src="pdInfo.pdImgList[1]" alt="" />
            <img @click="showPD(3)" :class="showPdIndex == 3 ? 'active' : ''" :src="pdInfo.pdImgList[2]" alt="" />
          </div>
        </div>

        <div class="right">
          <div class="title-block">
            <div class="subtitle">{{ pdInfo.subtitle }}</div>
            <div class="title">{{ pdInfo.title1 }}</div>
            <div class="title1">{{ pdInfo.title2 }}</div>
            <div class="line"></div>
          </div>

          <div class="desc">
            {{ pdInfo.desc1 }} <br><br> {{ pdInfo.desc2 }}
          </div>
          <div class="info">
            <div class="info-detail">
              <div class="title">{{ pdInfo.pdDetail[0].title }}</div>
              <div class="content">{{ pdInfo.pdDetail[0].desc }}</div>
            </div>
            <div class="info-detail">
              <div class="title">{{ pdInfo.pdDetail[1].title }}</div>
              <div class="content">{{ pdInfo.pdDetail[1].desc }}</div>
            </div>
            <div class="info-detail">
              <div class="title">{{ pdInfo.pdDetail[2].title }}</div>
              <div class="content">{{ pdInfo.pdDetail[2].desc }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="tab-bar">
      <div class="tab-header">
        <div @click="handleTagChange(1)" :class="showTabIndex == 1 ? 'tab-title active' : 'tab-title'">
          <div>Ingredients</div>
          <div>+</div>
        </div>
        <div @click="handleTagChange(3)" :class="showTabIndex == 3 ? 'tab-title active' : 'tab-title'">
          <div>Guaranteed Analysis</div>
          <div>+</div>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-item tab-item-1">
          {{ pdInfo.Ingredients[0].text1 }}<br /><br />
          <span><b>Additives: </b>{{ pdInfo.Ingredients[0].text2 }}</span>
        </div>
        <div class="tab-item tab-item-3">
          <div class="table-block">
            <div class="table-items">
              <div v-for="(item, index) in pdInfo.analysisListName" :key="index" class="table-item">
                <div class="table-item-title">
                  {{ pdInfo.analysisListName[index] }}
                </div>
                <div class="table-item-title1">
                  {{ pdInfo.analysisList[index] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-logo">
      <img src="../assets/imgs/single/pd-logo.jpg" alt="">
    </div>
    <div class="pd-desc">
      <div class="pd-desc-content">
        <img src="../assets/imgs/single/daily.svg" alt="" class="img-daily">
        <img src="../assets/imgs/single/pd-bg.jpg" alt="" class="pd-bg">
      </div>
    </div>
    <div class="also-like">
      <div>You also like</div>
    </div>
    <div class="another-pd">
      <div class="pd" @click="goPdDetail(pdInfo.anotherPd[0].id)">
        <img :src="pdInfo.anotherPd[0].img" alt="">
        <div class="title1">{{ pdInfo.anotherPd[0].title1 }}</div>
        <div class="title2">{{ pdInfo.anotherPd[0].title2 }}</div>
      </div>
      <div class="pd" @click="goPdDetail(pdInfo.anotherPd[1].id)">
        <img :src="pdInfo.anotherPd[1].img" alt="">
        <div class="title1">{{ pdInfo.anotherPd[1].title1 }}</div>
        <div class="title2">{{ pdInfo.anotherPd[1].title2 }}</div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { pdInfo1, pdInfo2, pdInfo3 } from "@/views/pdInfo.js";
const showTabIndex = ref(1);
const showPdIndex = ref(1);
const handleTagChange = (index) => {
  showTabIndex.value = index;
};
const route = useRoute();
const router = useRouter()
const showPD = (index) => {
  showPdIndex.value = index;
};
// const showAllDesc = ref(false)
// const toggleDesc = () => {
//   showAllDesc.value = !showAllDesc.value
// }
const pdTypeIndex = ref(route.query.id);
const pdInfo = reactive({
  pdImgList: [
    new URL("@/assets/imgs/pd1-1.jpg", import.meta.url).href,
    new URL("@/assets/imgs/pd1-2.jpg", import.meta.url).href,
    new URL("@/assets/imgs/pd1-3.jpg", import.meta.url).href,
  ],
  subtitle: "Freeze-Dried and Kibble Mix",
  title1: "High Meatiness Cat Food",

  title2: "Deep Sea Fish Flavor",
  desc1: "Cats olfactory sensitivity is more than 200,000 times that of humans. Picky cats may be eager for this freeze-dried recipe created to appeal to their senses. ",
  desc2: " Salmon meat and egg yolk are individually freeze-dried at -40C, then combined into the original ingredients. This keeps the delicious taste and nutrients locked into every bites, and leaves the cats with full vitality all day long!",
  analysisList: [
    "≥ 38%",
    "≥ 16%",
    "≤ 3.8%",
    "≤ 10%",
    "≤ 9%",
    "≥ 1.1%",
    "≥ 0.8%",
    "≥ 0.2%",
    "≥ 0.3%",
  ],
  analysisListName: [
    "Crude protein",
    "Crude fat",
    "Crude fiber",
    "Moisture",
    "Crude ash ",
    "Calcium",
    "Phosphorus",
    "Taurine",
    "Soluble chloride ",
  ],
  pdDetail: [
    {
      title: "Netweight:",
      desc: "5.5LB/2.5kg",
    },
    {
      title: "Food form:",
      desc: "Raw Mix",
    },
    {
      title: "Age range:",
      desc: "All life stages",
    },
  ],
  Ingredients: [
    {
      text1: "sardines (22%), chicken (18%), duck (16%), cod (14%), beef (5%), freeze-dried salmon (4.2%), freeze-dried egg yolk (3.8%), chicken liver (3%), chicken fat, deep sea fish oil, potato powder, tapioca, whole egg powder, cheese powder, pumpkin,apple, carrot, broccoli, spinach, cranberry, blueberry, beer yeast powder, seaweed powder, beet meal, chicory root, plantago seed, yucca powder.",
      text2: "Additives: taurine, bacillus subtilis, enterococcus faecalis, L-lysine, L-tryptophan, DL-methionine, oligofructose, egg yolk immunoglobulin (IgY), vitamin A, vitamin B1, riboflavin vitamins, niacin, vitamin B6, calcium pantothen-ate, folic acid, biotin, vitamin C, vitamin D3, DL-a-tocopherol, zinc methionine complex, iron glycine complex, copper methionine complex, manganese methionine complex, choline chloride, chondroitin sulfate, potassium chloride, sodium chloride, rosemary extract.",
    }
  ],
  anotherPd: [
    {
      img: new URL("@/assets/imgs/pd2-1.jpg", import.meta.url).href,
      title1: "Freeze-Dried MEAT CAT FOOD",
      title2: "Beef Flavor",
    },
    {
      img: new URL("@/assets/imgs/pd3-1.jpg", import.meta.url).href,
      title1: "Cold pressing Cat food",
      title2: "Deep Sea Fish Flavor",
    },
  ],
});

const missionRef = ref(null);
const imgBlockRef = ref(null);
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
const goPdDetail = (id) => {
  router.replace({
    path: route.path,
    query: {
      ...route.query, // 关键！
      id: id
    }
  })
}
onMounted(() => {
  // 1️⃣ box
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
watch(
  () => route.query.id,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      pdTypeIndex.value = newId;
      console.log("Route Id changed:", newId);
      if (newId == 1) {
        Object.keys(pdInfo).forEach((key) => {
          pdInfo[key] = pdInfo1[key];
        });
      } else if (newId == 2) {
        Object.keys(pdInfo).forEach((key) => {
          pdInfo[key] = pdInfo2[key];
        });
      } else {
        Object.keys(pdInfo).forEach((key) => {
          pdInfo[key] = pdInfo3[key];
        });
      }

    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.product-page {
  font-family: "Segoe UI", sans-serif;
  color: #333;
  background: #efe8db;
  min-width: 1200px;

  .product-wrapper {
    border-top: 130px solid #1f160b;
    background: #efe8db;

    .product-detail {
      box-sizing: border-box;
      width: 1200px;
      display: flex;
      gap: 0;
      padding: 60px 50px 0;
      margin: 0 auto;

      .left {
        position: relative;
        flex: 1;
        text-align: center;
        border-right: 2px solid #1f160b;
        border-bottom: 2px solid #1f160b;

        .handle-left {
          cursor: pointer;
          position: absolute;
          top: 200px;
          left: 0;
          width: 20px;

          img {
            width: 100%;
          }
        }

        .handle-right {
          cursor: pointer;
          position: absolute;
          top: 200px;
          right: 0;
          width: 20px;

          img {
            width: 100%;
          }
        }

        .main-image {
          padding-bottom: 20px;
          border-bottom: 2px solid #1f160b;
        }

        .main-image img {
          width: 90%;
        }

        .thumbs {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 10px;
          padding-bottom: 20px;

          img {
            width: 150px;
            height: 150px;
            object-fit: cover;

            &.active {
              border: 1px solid #212995;
            }
          }
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 40px;
        border-bottom: 2px solid #1f160b;

        .subtitle {
          font-family: "Oswald-Medium";
          font-size: 18px;
          line-height: 1;
          margin: 10px 0;
          color: #e40012;
        }

        .title {
          font-family: "Oswald-Medium";
          font-size: 60px;
          font-weight: 700;
          color: #1f160b;
          margin-bottom: 12px;
          line-height: 1;
          width: 400px;
        }

        .title1 {
          font-family: "Oswald-Light";
          font-size: 36px;
          font-weight: 700;
          color: #1f160b;
          margin-bottom: 12px;
          line-height: 1;
        }

        .line {
          width: 35px;
          height: 3px;
          margin: 20px 0;
          background-color: #1f160b;
        }

        .desc {
          font-family: "Oswald-Regular";
          color: #231f20;
          font-size: 18px;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .desc-2 {
          font-family: "RedHatDisplay-Regular";
          color: #231f20;
          font-size: 14px;
          line-height: 1.2;
          margin-bottom: 16px;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          /* 限制显示2行 */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .read-more {
          cursor: pointer;
          font-family: "RedHatDisplay-Blod";
          font-size: 15px;
          font-weight: 700;
          color: #212995;
          margin-bottom: 20px;
          line-height: 1;
          padding-bottom: 2px;
          border-bottom: 1px solid #212995;
          width: 90px;
          text-align: center;
        }

        .daily-meal {
          font-family: "Oswald-Medium";
          color: #676767;
          font-size: 20px;
          line-height: 1;
          display: flex;
          margin-bottom: 10px;

          img {
            height: 20px;
          }
        }

        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 16px;

          .tag {
            width: 130px;

            img {
              width: 100%;
            }
          }
        }

        .info {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 12px;
          display: flex;
          color: #212995;
          padding: 20px;
          border-left: none;
          border-right: none;
          justify-content: space-between;
          text-align: center;
          flex-wrap: wrap;

          .info-detail {
            width: 200px;
            margin-bottom: 15px;

            .title {
              font-family: "Oswald-Regular";
              font-size: 24px;
              line-height: 1.5;
              color: #1f160b;
              text-align: left;
              width: 200px;
            }

            .content {
              font-family: "Oswald-Medium";
              width: 200px;
              height: 60px;
              font-size: 28px;
              line-height: 60px;
              color: #efe8db;
              text-align: center;
              background: #1f160b;
            }
          }
        }
      }
    }
  }

  .tab-bar {
    width: 1100px;
    margin: 0 auto;

    .tab-header {
      border-left: none;
      border-right: none;
      padding: 0;
      display: flex;
      justify-content: space-between;

      .tab-title {
        cursor: pointer;
        position: relative;
        font-family: "Oswald-Regular";
        font-size: 35px;
        line-height: 1;
        /* flex: 1; */
        text-align: center;
        width: 45%;
        padding: 30px 30px 30px 50px;
        border-bottom: 2px solid #1f160b;
        text-align: left;
        display: flex;
        justify-content: space-between;
      }
    }

    .tab-body {
      display: flex;
      justify-content: space-between;

      .tab-item {
        padding: 50px 0 0;
        width: 45%;

        &.tab-item-1 {
          text-align: left;
          font-family: "Oswald-Regular";
          font-size: 18px;
          line-height: 1.2;
        }

        &.tab-item-3 {
          .table-block {
            width: 100%;
            padding: 0 5%;

            .table-items {
              display: flex;
              flex-wrap: wrap;

              .table-item {
                width: 100%;
                display: flex;
                justify-content: space-between;

                .table-item-title {
                  width: 270px;
                  font-family: "Oswald-Regular";
                  font-size: 22px;
                  color: #1f160b;
                  line-height: 35px;
                  height: 35px;
                  text-align: left;
                }

                .table-item-title1 {
                  width: 150px;
                  font-family: "Oswald-Regular";
                  font-size: 22px;
                  color: #1f160b;
                  line-height: 35px;
                  height: 35px;
                  text-align: right;
                }
              }
            }
          }
        }

        .left {
          font-size: 14px;
          line-height: 1.2;
          width: 180px;
          border-right: 2px solid #d3d3d3;

          span {
            font-family: "RedHatDisplay-Blod";
            font-size: 50px;
            line-height: 1;
          }
        }

        .center {
          width: 300px;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          div {
            font-size: 14px;
            line-height: 1;
            width: 120px;
            text-align: left;

            span {
              font-family: "RedHatDisplay-Blod";
              font-size: 40px;
            }
          }
        }

        .right {
          flex: 1;
          color: #212995;
        }
      }
    }
  }

  .pd-logo {
    width: 1200px;
    margin: 30px auto;
    border-top: 2px solid #1f160b;
    border-bottom: 2px solid #1f160b;
    padding: 30px 0;
  }

  .pd-desc {
    .pd-desc-content {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      border-bottom: 2px solid #1f160b;
      padding: 0;

      .img-daily {
        position: absolute;
        top: 22px;
        left: 150px;
        width: 900px;
      }

      .pd-bg {
        width: 1200px;
      }
    }
  }

  .also-like {
    width: 1200px;
    margin: 30px auto;
    border-top: 2px solid #1f160b;
    border-bottom: 2px solid #1f160b;
    padding: 30px 0;
    font-family: "Oswald-Regular";
    font-size: 42px;
  }

  .another-pd {
    width: 1200px;
    margin: 30px auto;
    border-bottom: 2px solid #1f160b;
    padding: 30px 0;
    font-family: "Oswald-Regular";
    font-size: 42px;
    display: flex;
    justify-content: space-around;

    .pd {
      width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      img {
        width: 400px;
        height: 400px;

        &:hover {
          animation: scaleUp 0.3s ease-out forwards;
        }
      }

      .title1 {
        font-family: "Oswald-SemiBold";
        font-size: 33px;
        line-height: 1;
        margin: 20px 0 0;
      }

      .title2 {
        font-size: 33px;
        line-height: 1;
        margin: 0 0 20px 0;
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
</style>
