<template>
    <div class="product-page">
        <HeaderPage />
        <!-- Product Section -->
        <section class="product-detail">
            <div class="left">
                <div @click="showPD(showPdIndex == 1 ? 3 : showPdIndex - 1)" class="handle-left">
                    <img src="../assets/pdimg/icon-arrow-l.png" alt="">
                </div>
                <div @click="showPD(showPdIndex == 3 ? 1 : showPdIndex + 1)" class="handle-right">
                    <img src="../assets/pdimg/icon-arrow-r.png" alt="">
                </div>
                <div class="main-image">
                    <img v-show="showPdIndex == 1" :src="pdInfo.pdImgList[0]" alt="">
                    <img v-show="showPdIndex == 2" :src="pdInfo.pdImgList[1]" alt="">
                    <img v-show="showPdIndex == 3" :src="pdInfo.pdImgList[2]" alt="">
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

                <div class="desc">
                    {{ pdInfo.desc }}
                </div>
                <div class="read-more">
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
                        <img src="../assets/pdimg/pd-tag1.png" alt="">
                        <div class="text">Carefully selected antibiotic-free poultry and pollution-free herbal
                            ingredients</div>
                    </li>
                    <li>
                        <img src="../assets/pdimg/pd-tag2.png" alt="">
                        <div class="text">No artificial preservatives, chemical flavor enhancers, or coloring agents.
                        </div>
                    </li>
                    <li>
                        <img src="../assets/pdimg/pd-tag3.png" alt="">
                        <div class="text">No corn, wheat, oats, or other cereal ingredients are added.</div>
                    </li>
                </ul>
            </div>
        </section>

        <div class="tab-bar">
            <div class="tab-header">
                <div @click="handleTagChange(1)" :class="showTabIndex == 1 ? 'tab-title active' : 'tab-title'">
                    Ingredients</div>
                <div @click="handleTagChange(2)" :class="showTabIndex == 2 ? 'tab-title active' : 'tab-title'">
                    Feeding Guide</div>
                <div @click="handleTagChange(3)" :class="showTabIndex == 3 ? 'tab-title active' : 'tab-title'">
                    Guaranteed Analysis
                </div>
            </div>
            <div class="tab-body">
                <div v-show="showTabIndex == 1" class="tab-item tab-item-1">
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
                    </div>
                    <div class="right">{{ pdInfo.Ingredients[5].text1 }}</div>
                </div>
                <div v-show="showTabIndex == 2" class="tab-item tab-item-2">
                    <img :src="pdInfo.GuidImg" alt="">
                </div>
                <div v-show="showTabIndex == 3" class="tab-item tab-item-3">
                    <div class="table-block">
                        <div class="table-items">
                            <div class="table-item">
                                <div class="table-item-title">
                                    Crude protein
                                </div>
                                <div class="table-item-title">
                                    ≥ 40.0%
                                </div>
                                <div class="table-item-title">
                                    Phosphorus
                                </div>
                                <div class="table-item-title">
                                    ≥ 0.8%
                                </div>
                            </div>
                            <div class="table-item">
                                <div class="table-item-title">
                                    Crude fat
                                </div>
                                <div class="table-item-title">
                                    ≥ 15.0%

                                </div>
                                <div class="table-item-title">
                                    Taurine
                                </div>
                                <div class="table-item-title">
                                    ≥ 0.2%
                                </div>
                            </div>
                            <div class="table-item">
                                <div class="table-item-title">
                                    Crude fiber
                                </div>
                                <div class="table-item-title">
                                    ≤ 5.0%

                                </div>
                                <div class="table-item-title">
                                    Omega-3*
                                </div>
                                <div class="table-item-title">
                                    ≥ 0.85%
                                </div>
                            </div>
                            <div class="table-item">
                                <div class="table-item-title">
                                    Moisture
                                </div>
                                <div class="table-item-title">
                                    ≤ 10.0%
                                </div>
                                <div class="table-item-title">
                                    Omega-6*
                                </div>
                                <div class="table-item-title">
                                    ≥ 2.6%
                                </div>
                            </div>
                            <div class="table-item">
                                <div class="table-item-title">
                                    Calcium
                                </div>
                                <div class="table-item-title">
                                    ≥ 1.0%

                                </div>
                                <div class="table-item-title">
                                </div>
                                <div class="table-item-title">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cat-bg-block">
            <img :src="pdInfo.catBgList[0]" alt="">
            <img :src="pdInfo.catBgList[1]" alt="">
            <img :src="pdInfo.catBgList[2]" alt="">
            <div class="text">
                <span>Daily Defense</span> in Every Bite
            </div>
        </div>
        <div class="cat-desc">
            <img v-for="item in pdInfo.catDescList" :key="item" :src="item" alt="">
        </div>
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
        <FooterPage />
    </div>
</template>

<script setup>
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router';
const showTabIndex = ref(1)
const showPdIndex = ref(1)
const handleTagChange = (index) => {
    showTabIndex.value = index
}
const route = useRoute();
const showPD = (index) => {
    showPdIndex.value = index
}
const catPageInfo = {
    pdImgList: [
        new URL("@/assets/pdimg/pd-cat-1.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/pd-cat-2.jpg", import.meta.url).href,
    ],
    title1: "Free-Range Chicken Recipe",
    title2: "Complete Cat Food",
    desc: "Uses low-magnesium and low-calcium ingredients as primary components, incorporating natural acidifiers to maintain a slightly acidic urine environment in cats, reducing urinary stone risk. Dandelion flavonoids boost urine flow and hydration.Cranberries add PACs to curb bacterial adhesion, aiding daily urinary health.",
    tagList: [
        new URL("@/assets/pdimg/icon-urinary.png", import.meta.url).href,
        new URL("@/assets/pdimg/icon-immune.png", import.meta.url).href,
        new URL("@/assets/pdimg/icon-micro.png", import.meta.url).href,
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
        new URL("@/assets/pdimg/cat_bg_02.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/cat_bg_03.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/cat_bg_04.jpg", import.meta.url).href,
    ],
    catDescList: [
        new URL("@/assets/pdimg/cat_desc_01.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_02.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_03.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_04.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_05.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_06.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_07.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_08.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_09.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_10.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_11.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_12.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_13.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_14.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_15.jpg", import.meta.url).href,
    ]
}
const dogPageInfo = {
    pdImgList: [
        new URL("@/assets/pdimg/pd-cat-1.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/pd-cat-2.jpg", import.meta.url).href,
    ],
    title1: "Ice Lake Free-Range Duck Recipe ",
    title2: "Complete Dog Food",
    desc: "Enriched with glucosamine to enhance bone and cartilage metabolism, paired with MSM and chondroitin to promote cartilage repair, improve ligament elasticity, and boost joint fluid production, reducing discomfort from exercise. Features an optimal calcium-phosphorus ratio and vitamin D to strengthen bone density. Comprehensive care for your dog’s joint health.",
    tagList: [
        new URL("@/assets/pdimg/icon-urinary.png", import.meta.url).href,
        new URL("@/assets/pdimg/icon-immune.png", import.meta.url).href,
        new URL("@/assets/pdimg/icon-micro.png", import.meta.url).href,
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
            text2: '70%',
            text3: 'raw meat based on',
        },
        {
            text1: 'Frostbound lake free-',
            text2: 'range duck meat',
            text3: '36%',
        },
        {
            text1: 'Fresh chicken',
            text2: '18%',
        },
        {
            text1: 'Fresh turkey',
            text2: '',
            text3: '13%',
        },
        {
            text1: 'Fresh chicken liver',
            text2: '3%',
        },
        {
            text1: 'Fresh free range chicken (36%), fresh turkey (28%), fresh boneless duck (18%), fresh chicken liver (3%), potato flour, dried sweet potato, chicken fat, deep sea fish oil, egg yolk powder, pumpkin, broccoli, carrot, papaya, dried cranberry (1.5%), dandelion granules (1%), alfalfa meal, chicory root powder, yucca powder, ice field moss extract (0.8%), natural lactic acid, fructooligosaccharides, chondroitin sulfate, lecithin, L-carnitine, sodium chloride, choline chloride, taurine, vitamin E, L-ascorbate-2-phosphate, niacin, vitamin A, thiamine mononitrate, D-calcium pantothenate, riboflavin, pyridoxine hydrochloride, cyanocobalamin, folic acid, vitamin D3, D-biotin, iron proteinate, copper proteinate, manganese proteinate, zinc proteinate, calcium iodate, sodium selenite, potassium chloride, Bacillus subtilis, rosemary extract.',
        },
    ],
    GuidImg: new URL("@/assets/pdimg/pd-tab-dog-bg.jpg", import.meta.url).href,
    catBgList: [
        new URL("@/assets/pdimg/dog_bg_02.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_bg_03.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_bg_04.jpg", import.meta.url).href,
    ],
    catDescList: [
        new URL("@/assets/pdimg/dog_desc_01.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_02.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_03.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_04.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_05.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_06.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_07.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_08.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_09.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_10.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_11.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_12.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_13.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_14.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/dog_desc_15.jpg", import.meta.url).href,
    ]
}
const pdInfo = reactive({
    pdImgList: [
        new URL("@/assets/pdimg/pd-cat-1.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/pd-cat-2.jpg", import.meta.url).href,
    ],
    title1: "Free-Range Chicken Recipe",
    title2: "Complete Cat Food",
    desc: "Uses low-magnesium and low-calcium ingredients as primary components, incorporating natural acidifiers to maintain a slightly acidic urine environment in cats, reducing urinary stone risk. Dandelion flavonoids boost urine flow and hydration.Cranberries add PACs to curb bacterial adhesion, aiding daily urinary health.",
    tagList: [
        new URL("@/assets/pdimg/icon-urinary.png", import.meta.url).href,
        new URL("@/assets/pdimg/icon-immune.png", import.meta.url).href,
        new URL("@/assets/pdimg/icon-micro.png", import.meta.url).href,
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
        new URL("@/assets/pdimg/cat_bg_02.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/cat_bg_03.jpg", import.meta.url).href,
        new URL("@/assets/pdimg/cat_bg_04.jpg", import.meta.url).href,
    ],
    catDescList: [
        new URL("@/assets/pdimg/cat_desc_01.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_02.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_03.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_04.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_05.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_06.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_07.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_08.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_09.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_10.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_11.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_12.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_13.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_14.png", import.meta.url).href,
        new URL("@/assets/pdimg/cat_desc_15.jpg", import.meta.url).href,
    ]
})
if (route.query && route.query.id == 1) {
    Object.keys(pdInfo).forEach(key => {
        pdInfo[key] = catPageInfo[key]
    })
} else {
    Object.keys(pdInfo).forEach(key => {
        pdInfo[key] = dogPageInfo[key]
    })
}
</script>

<style scoped lang="scss">
.product-page {
    font-family: "Segoe UI", sans-serif;
    color: #333;
    background: #f4f4f4;
    min-width: 1200px;

    .product-detail {
        box-sizing: border-box;
        width: 1200px;
        display: flex;
        gap: 40px;
        padding: 60px 50px;
        background: #f4f4f4;
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
                width: 80%;
                border-radius: 8px;
            }

            .thumbs {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                gap: 10px;

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

            .subtitle {
                font-family: 'RedHatDisplay-Regular';
                font-size: 22px;
                line-height: 1;
                margin: 10px 0;
                color: #676767;
            }

            .title {
                font-family: "RedHatDisplay-Blod";
                font-size: 30px;
                font-weight: 700;
                color: #212995;
                margin-bottom: 12px;
                line-height: 1;
            }

            .desc {
                font-family: 'RedHatDisplay-Regular';
                color: #231f20;
                font-size: 14px;
                line-height: 1.2;
                margin-bottom: 16px;
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
                width: 88px;
            }

            .daily-meal {
                font-family: 'Oswald-Medium';
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
                border: 2px solid #212995;
                border-left: none;
                border-right: none;
                justify-content: space-between;
                text-align: center;

                .info-detail {
                    flex: 1;
                    border-right: 2px solid #212995;
                    font-family: 'RedHatDisplay-Medium';
                    font-size: 20px;
                    line-height: 1.5;

                    &:last-child {
                        border-right: none;
                    }

                    span {
                        font-family: 'Oswald-Medium';
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
                    font-size: 15px;
                    line-height: 1.5;
                    margin-bottom: 6px;
                    font-family: 'RedHatDisplay-Medium';
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
        width: 1100px;
        margin: 0 auto;

        .tab-header {
            border: 5px solid #d3d3d3;
            border-left: none;
            border-right: none;
            padding: 0;
            display: flex;

            .tab-title {
                cursor: pointer;
                position: relative;
                font-family: 'Oswald-Regular';
                font-size: 30px;
                line-height: 1;
                flex: 1;
                text-align: center;
                padding: 20px 0;
                color: #d3d3d3;

                &.active {
                    color: #212995;

                    &::after {
                        content: "";
                        position: absolute;
                        width: 80%;
                        bottom: -5px;
                        left: 10%;
                        height: 5px;
                        background-color: #212995;
                    }
                }
            }
        }

        .tab-body {
            font-family: 'RedHatDisplay-Regular';

            .tab-item {
                display: flex;
                text-align: left;
                padding: 50px 0 0;

                &.tab-item-2 {
                    padding: 20px 0 0;

                    img {
                        width: 100%;
                    }
                }

                &.tab-item-3 {
                    .table-block {
                        width: 100%;
                        padding: 0 15%;

                        .table-items {
                            .table-item {
                                display: flex;
                                justify-content: space-between;

                                .table-item-title {
                                    width: 115px;
                                    font-family: 'Oswald-Regular';
                                    font-size: 22px;
                                    color: #212995;
                                    line-height: 35px;
                                    height: 35px;
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
                        font-family: 'RedHatDisplay-Blod';
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
                            font-family: 'RedHatDisplay-Blod';
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

    .cat-bg-block {
        width: 100%;
        overflow: hidden;
        position: relative;
        font-size: 0;
        margin-top: 50px;

        img {
            width: 100%;
        }

        .text {
            width: 480px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -240px;
            margin-top: -18px;
            font-size: 38px;
            line-height: 1;
            color: #fff;
            font-family: 'RedHatDisplay-Regular';

            span {
                font-family: 'RedHatDisplay-Black';
            }
        }
    }

    .cat-desc {
        width: 1000px;
        margin: 50px auto;
        font-size: 0;

        img {
            width: 100%;
        }
    }

    .brand-logo {
        padding: 40px 0;

        .logo-list {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1000px;
            margin: 0 auto;
            padding: 30px 5%;
            border-top: 1px solid #7c7c7c;
            border-bottom: 1px solid #7c7c7c;

            img {
                cursor: pointer;
                height: 40px;
            }
        }
    }

}
</style>
