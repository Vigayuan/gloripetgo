<template>
  <div class="product-page">
    <HeaderMPage />
    <!-- Product Section -->
    <section class="product-detail">
      <div class="left">
        <div class="main-image">
          <img v-show="showPdIndex == 1" :src="pdInfo.pdImgList[0]" alt="">
          <img v-show="showPdIndex == 2" :src="pdInfo.pdImgList[1]" alt="">
          <img v-show="showPdIndex == 3" :src="pdInfo.pdImgList[2]" alt="">
        </div>
        <div class="point-block">
          <div class="point" :class="showPdIndex == index + 1 ? 'active' : ''" v-for="(item, index) in pdInfo.pdImgList" :key="index" @click="showPD(index + 1)"></div>
        </div>
        <div class="thumbs">
          <img @click="showPD(1)" :class="showPdIndex == 1 ? 'active' : ''" :src="pdInfo.pdImgList[0]" alt="">
          <img @click="showPD(2)" :class="showPdIndex == 2 ? 'active' : ''" :src="pdInfo.pdImgList[1]" alt="">
          <img @click="showPD(3)" :class="showPdIndex == 3 ? 'active' : ''" :src="pdInfo.pdImgList[2]" alt="">
        </div>
      </div>

      <div class="right">
        <div class="title-block">
          <div class="subtitle">IMMUNE SUPPORT</div>
          <div class="title">{{ pdInfo.title1 }}<br>{{ pdInfo.title2 }}</div>
        </div>

        <div v-show="!showAllDesc" class="desc-2">
          {{ pdInfo.desc }}
        </div>
        <div v-show="showAllDesc" class="desc">
          {{ pdInfo.desc }}
        </div>
        <div v-show="!showAllDesc" @click="toggleDesc" class="read-more">
          READ MORE
        </div>
        <div class="daily-meal">
          <div class="text">DAILY MEAL</div>
          <img src="@/assets/pdimg/icon-soup.png" alt="">
        </div>
        <div class="tags">
          <div class="tag">
            <img :src="pdInfo.tagList[0]" alt="">
          </div>
          <div class="tag">
            <img :src="pdInfo.tagList[1]" alt="">
          </div>
          <div class="tag">
            <img :src="pdInfo.tagList[2]" alt="">
          </div>
        </div>

        <div class="info">
          <div class="info-detail"><span>{{ pdInfo.pdDetail[0].title }}</span><br>{{ pdInfo.pdDetail[0].desc
                        }}</div>
          <div class="info-detail"><span>{{ pdInfo.pdDetail[1].title }}</span><br>{{ pdInfo.pdDetail[1].desc
                        }}</div>
          <div class="info-detail"><span>{{ pdInfo.pdDetail[2].title }}</span><br>{{ pdInfo.pdDetail[2].desc
                        }}</div>
        </div>

        <ul class="features">
          <li>
            <img :src="pdInfo.features[0].url" alt="">
            <div class="text">{{ pdInfo.features[0].desc }}</div>
          </li>
          <li>
            <img :src="pdInfo.features[1].url" alt="">
            <div class="text">{{ pdInfo.features[1].desc }}</div>
          </li>
          <li>
            <img :src="pdInfo.features[2].url" alt="">
            <div class="text">{{ pdInfo.features[2].desc }}</div>
          </li>
        </ul>
      </div>
    </section>

    <div class="tab-bar">
      <div @click="handleTagChange(1)" class="tab-header">
        <div>
          Ingredients</div>
        <div class="control-btn">
          <div v-show="showTabIndex != 1">+</div>
          <div v-show="showTabIndex == 1">-</div>
        </div>
      </div>
      <div class="tab-body">
        <div v-show="showTabIndex == 1">
          <div class="tab-item tab-item-1">
            <div class="left">
              {{ pdInfo.Ingredients[0].text1 }}<br>
              <span>{{ pdInfo.Ingredients[0].text2 }}</span><br>
              {{ pdInfo.Ingredients[0].text3 }}
            </div>
            <div class="center">
              <div>
                {{ pdInfo.Ingredients[1].text1 }}<br v-if="pdInfo.Ingredients[3].text2">
                {{ pdInfo.Ingredients[1].text2 }}<br>
                <span>{{ pdInfo.Ingredients[1].text3 }}</span>
              </div>
              <div>
                {{ pdInfo.Ingredients[2].text1 }}<br>
                <span>{{ pdInfo.Ingredients[2].text2 }}</span>
              </div>
              <div>
                {{ pdInfo.Ingredients[3].text1 }}<br v-if="pdInfo.Ingredients[3].text2">
                {{ pdInfo.Ingredients[3].text2 }}<br>
                <span>{{ pdInfo.Ingredients[3].text3 }}</span>
              </div>
              <div>
                {{ pdInfo.Ingredients[4].text1 }}<br>
                <span>{{ pdInfo.Ingredients[4].text2 }}</span>
              </div>
              <div v-show="pdTypeIndex == 2">Herring<br>
                <span>5%</span>
              </div>
              <div v-show="pdTypeIndex == 2">Fresh chicken liver<br>
                <span>3%</span>
              </div>
            </div>
          </div>
          <div class="right">{{ pdInfo.Ingredients[5].text1 }}</div>
        </div>
      </div>
      <div @click="handleTagChange(2)" class="tab-header">
        <div>
          Feeding Guide</div>
        <div class="control-btn">
          <div v-show="showTabIndex != 2">+</div>
          <div v-show="showTabIndex == 2">-</div>
        </div>
      </div>
      <div class="tab-body">
        <div v-show="showTabIndex == 2" class="tab-item tab-item-2">
          <img :src="pdInfo.GuidImg" alt="">
        </div>
      </div>
      <div @click="handleTagChange(3)" class="tab-header">
        <div>
          Guaranteed Analysis
        </div>
        <div class="control-btn">
          <div v-show="showTabIndex != 3">+</div>
          <div v-show="showTabIndex == 3">-</div>
        </div>
      </div>
      <div class="tab-body">
        <div v-show="showTabIndex == 3" class="tab-item tab-item-3">
          <div class="table-block">
            <div class="table-items">
              <div class="table-item">
                <div class="table-item-title">
                  Crude protein
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[0] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Phosphorus
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[1] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Crude fat
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[2] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Taurine
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[3] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Crude fiber
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[4] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Omega-3*
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[5] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Moisture
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[6] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Omega-6*
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[7] }}
                </div>
              </div>
              <div class="table-item">
                <div class="table-item-title">
                  Calcium
                </div>
                <div class="table-item-title">
                  {{ pdInfo.analysisList[8] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cat-bg-block">
      <div class="img-block">
        <div class="img-scroll" ref="imgBlockRef">
          <img v-for="(item, index) in pdInfo.catBgList" :key="index" :src="item" alt="">
        </div>
      </div>
      <div class="text">
        <span>Daily Defense</span> in Every Bite
      </div>
    </div>
    <div class="cat-desc">
      <div class="cat-desc-1">
        <img :src="pdInfo.catDescList[0]" alt="">
      </div>
      <div class="cat-desc-2">
        <img :src="pdInfo.catDescList[1]" alt="">
      </div>
      <div class="cat-desc-3">
        <img :src="pdInfo.catDescList[2]" alt="">
      </div>
      <div class="cat-desc-4">
        <img :src="pdInfo.catDescList[3]" alt="">
      </div>
      <div class="cat-desc-5">
        <img :src="pdInfo.catDescList[4]" alt="">
      </div>
    </div>
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
    <FooterMPage />
  </div>
</template>

<script setup>
import HeaderMPage from '@/components/HeaderMPage.vue';
import FooterMPage from '@/components/FooterMPage.vue';
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router';
import { catPageInfo1, catPageInfo2, dogPageInfo } from '@/views/pdInfo.js'
const showTabIndex = ref(0)
const showPdIndex = ref(1)
const handleTagChange = (index) => {
  if (showTabIndex.value == index) {
    showTabIndex.value = 0
  } else {
    showTabIndex.value = index
  }
}
const route = useRoute();
const showPD = (index) => {
  showPdIndex.value = index
}
const showAllDesc = ref(false)
const toggleDesc = () => {
  showAllDesc.value = !showAllDesc.value
}
const pdTypeIndex = ref(route.query.id)
const pdInfo = reactive({
  pdImgList: [
    new URL("@/assets/pdimg/pd-cat-1.jpg", import.meta.url).href,
    new URL("@/assets/pdimg/pd-cat-2.jpg", import.meta.url).href,
  ],
  title1: "Free-Range Chicken Recipe",
  title2: "Complete Cat Food",
  desc: "Uses low-magnesium and low-calcium ingredients as primary components, incorporating natural acidifiers to maintain a slightly acidic urine environment in cats, reducing urinary stone risk. Dandelion flavonoids boost urine flow and hydration.Cranberries add PACs to curb bacterial adhesion, aiding daily urinary health.",
  analysisList: ['≥ 40.0%', '≥ 0.8%', '≥ 16.0%', '≥ 0.2%', '≤ 5.0% ', '≥ 0.85%', '≤ 10.0%', '≥ 2.6%', '≥ 1.0%'],
  tagList: [
    new URL("@/assets/pdimg/icon-urinary.png", import.meta.url).href,
    new URL("@/assets/pdimg/icon-immune.png", import.meta.url).href,
    new URL("@/assets/pdimg/icon-micro.png", import.meta.url).href,
  ],
  features: [
    {
      url: new URL("@/assets/pdimg/pd-tag1.png", import.meta.url).href,
      desc: "Carefully selected antibiotic-free poultry and pollution-free herbal ingredients"
    },
    {
      url: new URL("@/assets/pdimg/pd-tag2.png", import.meta.url).href,
      desc: "No artificial preservatives, chemical flavor enhancers, or coloring agents. "
    },
    {
      url: new URL("@/assets/pdimg/pd-tag3.png", import.meta.url).href,
      desc: "No corn, wheat, oats, or other cereal ingredients are added."
    }
  ],
  pdDetail: [
    {
      title: "Food Form",
      desc: "Dry Food"
    },
    {
      title: "Net Wt.",
      desc: "3 lb (1.36 kg)"
    },
    {
      title: "Age Range",
      desc: "All life stages"
    }
  ],
  Ingredients: [
    {
      text1: 'Attrictive daily meal = ',
      text2: '85%',
      text3: 'raw meat based on',
    },
    {
      text1: 'Fresh free-range',
      text2: 'chicken',
      text3: '36%',
    },
    {
      text1: 'Fresh turkey',
      text2: '28%',
    },
    {
      text1: 'Fresh boneless',
      text2: 'duck',
      text3: '18%',
    },
    {
      text1: 'Fresh chicken liver',
      text2: '3%',
    },
    {
      text1: 'Fresh free range chicken (36%), fresh turkey (28%), fresh boneless duck (18%), fresh chicken liver (3%), potato flour, dried sweet potato, chicken fat, deep sea fish oil, egg yolk powder, pumpkin, broccoli, carrot, papaya, dried cranberry (1.5%), dandelion granules (1%), alfalfa meal, chicory root powder, yucca powder, ice field moss extract (0.8%), natural lactic acid, fructooligosaccharides, chondroitin sulfate, lecithin, L-carnitine, sodium chloride, choline chloride, taurine, vitamin E, L-ascorbate-2-phosphate, niacin, vitamin A, thiamine mononitrate, D-calcium pantothenate, riboflavin, pyridoxine hydrochloride, cyanocobalamin, folic acid, vitamin D3, D-biotin, iron proteinate, copper proteinate, manganese proteinate, zinc proteinate, calcium iodate, sodium selenite, potassium chloride, Bacillus subtilis, rosemary extract.',
    },
  ],
  GuidImg: new URL("@/assets/pdimg/pd-tab-bg.jpg", import.meta.url).href,
  catBgList: [
    new URL("@/assets/pdimg/scroll_cat_bg_01.jpg", import.meta.url).href,
    new URL("@/assets/pdimg/scroll_cat_bg_02.jpg", import.meta.url).href,
    new URL("@/assets/pdimg/scroll_cat_bg_03.jpg", import.meta.url).href,
  ],
  catDescList: [
    new URL("@/assets/pdimg/pd-cat-1-desc_07.png", import.meta.url).href,
    new URL("@/assets/pdimg/pd-cat-1-desc_09.png", import.meta.url).href,
    new URL("@/assets/pdimg/pd-cat-1-desc_16.png", import.meta.url).href,
    new URL("@/assets/pdimg/pd-cat-1-desc_25.png", import.meta.url).href,
    new URL("@/assets/pdimg/pd-cat-1-desc_27.png", import.meta.url).href,
  ]
})

const imgBlockRef = ref(null)

watch(
  () => route.query.id,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      pdTypeIndex.value = newId;
      console.log('Route Id changed:', newId);
      if (newId == 1) {
        Object.keys(pdInfo).forEach(key => {
          pdInfo[key] = dogPageInfo[key]
        })
      } else if (newId == 2) {
        Object.keys(pdInfo).forEach(key => {
          pdInfo[key] = catPageInfo2[key]
        })
      } else {
        Object.keys(pdInfo).forEach(key => {
          pdInfo[key] = catPageInfo1[key]
        })
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
  background: #fff;

  .product-detail {
    box-sizing: border-box;
    background: #fff;
    margin: 0 auto;

    .left {
      position: relative;
      flex: 1;
      text-align: center;

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

      .main-image img {
        width: 100%;
      }

      .point-block {
        position: absolute;
        top: 320px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
      }

      .point {
        width: 10px;
        height: 10px;
        background: transparent;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid #fff;

        &.active {
          background: #fff;
        }
      }

      .thumbs {
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        padding-left: 20px;

        img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #ddd;

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
      padding: 20px 20px;

      .subtitle {
        font-family: "RedHatDisplay-Regular";
        font-size: 18px;
        line-height: 1;
        margin: 10px 0;
        color: #676767;
      }

      .title {
        font-family: "RedHatDisplay-Blod";
        font-size: 20px;
        font-weight: 700;
        color: #212995;
        margin-bottom: 12px;
        line-height: 1;
      }

      .desc {
        font-family: "RedHatDisplay-Regular";
        color: #231f20;
        font-size: 14px;
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
          width: 30%;

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
        padding: 20px 0;
        border: 2px solid #212995;
        border-left: none;
        border-right: none;
        justify-content: space-between;
        text-align: center;

        .info-detail {
          flex: 1;
          border-right: 2px solid #212995;
          font-family: "RedHatDisplay-Medium";
          font-size: 12px;
          line-height: 1.5;

          &:last-child {
            border-right: none;
          }

          span {
            font-family: "Oswald-Medium";
          }
        }
      }

      .features {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          padding: 10px 20px;
          font-size: 12px;
          line-height: 1.5;
          margin-bottom: 6px;
          font-family: "RedHatDisplay-Medium";
          align-items: center;

          img {
            width: 60px;
            margin-right: 20px;
          }
        }
      }
    }
  }

  .tab-bar {
    width: 94%;
    margin: 0 auto;

    .tab-header {
      border: 3px solid #d3d3d3;
      border-left: none;
      border-right: none;
      border-bottom: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 22px;
      line-height: 2;
      font-family: "RedHatDisplay-Black";
      color: #212995;

      .control-btn {
        cursor: pointer;
        font-size: 40px;
        line-height: 1;
        font-family: "RedHatDisplay-Blod";
        color: #575757;
      }
    }

    .tab-body {
      font-family: "RedHatDisplay-Regular";

      .tab-item {
        display: flex;
        text-align: left;
        padding: 10px 0 20px;

        &.tab-item-2 {
          padding: 20px 0 0;

          img {
            width: 100%;
          }
        }

        &.tab-item-3 {
          .table-block {
            width: 96%;
            margin: 0 auto;
            .table-items {
              .table-item {
                display: flex;
                justify-content: space-between;
                padding: 0 10px;
                &:nth-child(2n) {
                  background: #eee;
                }
                .table-item-title {
                  width: 115px;
                  font-family: "Oswald-Regular";
                  font-size: 18px;
                  color: #212995;
                  line-height: 35px;
                  height: 35px;
                  &:nth-child(2) {
                    text-align: right;
                  }
                }
              }
            }
          }
        }

        .left {
          font-size: 12px;
          line-height: 1.2;
          width: 180px;
          border-right: 2px solid #d3d3d3;

          span {
            font-family: "RedHatDisplay-Blod";
            font-size: 40px;
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
            font-size: 12px;
            line-height: 1;
            width: 90px;
            text-align: left;
            margin-bottom: 20px;
            span {
              font-family: "RedHatDisplay-Blod";
              font-size: 40px;
            }
          }
        }
      }
      .right {
        text-align: left;
        color: #212995;
        margin-bottom: 20px;
      }
    }
  }

  .cat-bg-block {
    width: 100%;
    overflow: hidden;
    position: relative;
    font-size: 0;
    margin-top: 50px;

    .img-block {
      position: relative;
      width: 100%;
      line-height: 0;

      .img-scroll {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
        }
      }
    }

    .text {
      width: 100%;
      position: absolute;
      top: 65px;
      left: 0;
      font-size: 22px;
      line-height: 1;
      color: #fff;
      text-align: center;
      text-shadow: 0 0 4px black;
      font-family: "RedHatDisplay-Regular";

      span {
        font-family: "RedHatDisplay-Black";
      }
    }
  }

  .cat-desc {
    margin: 30px auto;
    font-size: 0;
    position: relative;

    img {
      cursor: pointer;
      width: 100%;

      &:hover {
        transform: scale(1.05);
        animation: scaleUp 0.5s linear;
      }
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
