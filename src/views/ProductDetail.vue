<template>
    <div class="product-page">
        <HeaderPage />
        <!-- Product Section -->
        <section class="product-detail">
            <div class="left">
                <div class="main-image">
                    <img v-show="showPdIndex == 1" src="@/assets/pdimg/pd-cat-1.jpg" alt="">
                    <img v-show="showPdIndex == 2" src="@/assets/pdimg/pd-cat-2.jpg" alt="">
                    <img v-show="showPdIndex == 3" src="@/assets/pdimg/pd-cat-1.jpg" alt="">
                </div>
                <div class="thumbs">
                    <img @click="showPD(1)" src="@/assets/pdimg/pd-cat-1.jpg" alt="">
                    <img @click="showPD(2)" src="@/assets/pdimg/pd-cat-2.jpg" alt="">
                    <img @click="showPD(3)" src="@/assets/pdimg/pd-cat-1.jpg" alt="">
                </div>
            </div>

            <div class="right">
                <div class="title-block">
                    <div class="subtitle">IMMUNE SUPPORT</div>
                    <div class="title">Free-Range Chicken Recipe<br>Complete Cat Food</div>
                </div>

                <div class="desc">
                    Uses low-magnesium and low-calcium ingredients as primary components, incorporating natural
                    acidifiers to maintain a slightly acidic urine environment in cats, reducing urinary stone risk.
                    Dandelion flavonoids boost urine flow and hydration. Cranberries add PACs to curb bacterial
                    adhesion, aiding daily urinary health.
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
                        <img src="../assets/pdimg/icon-urinary.png" alt="">
                    </div>
                    <div class="tag">
                        <img src="../assets/pdimg/icon-immune.png" alt="">
                    </div>
                    <div class="tag">
                        <img src="../assets/pdimg/icon-micro.png" alt="">
                    </div>
                </div>

                <div class="info">
                    <div class="info-detail"><span>Food Form</span><br>Dry Food</div>
                    <div class="info-detail"><span>Net Wt.</span><br>3 lb (1.36 kg)</div>
                    <div class="info-detail"><span>Age Range</span><br>All life stages</div>
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
                <div class="tab-title active">Ingredients</div>
                <div class="tab-title">Feeding Guide</div>
                <div class="tab-title">Guaranteed Analysis</div>
            </div>
            <div class="tab-body">
                <div class="tab-item tab-item-1">
                    <div class="left">
                        Attrictive daily meal =<br>
                        <span>85% </span><br>
                        raw meat based on
                    </div>
                    <div class="center">
                        <div>
                            Fresh free-range<br>
                            chicken<br>
                            <span>36%</span>
                        </div>
                        <div>
                            Fresh turkey<br>
                            <span>28%</span>
                        </div>
                        <div>
                            Fresh boneless<br>
                            duck<br>
                            <span>18%</span>
                        </div>
                        <div>
                            Fresh chicken liver<br>
                            <span>3%</span>
                        </div>
                    </div>
                    <div class="right">
                        Fresh free range chicken (36%), fresh turkey (28%), fresh boneless duck (18%), fresh chicken
                        liver (3%), potato flour, dried sweet potato, chicken fat, deep sea fish oil, egg yolk powder,
                        pumpkin, broccoli, carrot, papaya, dried cranberry (1.5%), dandelion granules (1%), alfalfa
                        meal, chicory root powder, yucca powder, ice field moss extract (0.8%), natural lactic acid,
                        fructooligosaccharides, chondroitin sulfate, lecithin, L-carnitine, sodium chloride, choline
                        chloride, taurine, vitamin E, L-ascorbate-2-phosphate, niacin, vitamin A, thiamine mononitrate,
                        D-calcium pantothenate, riboflavin, pyridoxine hydrochloride, cyanocobalamin, folic acid,
                        vitamin D3, D-biotin, iron proteinate, copper proteinate, manganese proteinate, zinc proteinate,
                        calcium iodate, sodium selenite, potassium chloride, Bacillus subtilis, rosemary extract.
                    </div>
                </div>
                <div class="tab-item tab-item-2"></div>
                <div class="tab-item tab-item-3"></div>
            </div>
        </div>


        <FooterPage />
    </div>
</template>

<script setup>
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import { ref } from 'vue'
const showPdIndex = ref(1)
const showPD = (index) => {
    showPdIndex.value = index
}
</script>

<style scoped lang="scss">
.product-page {
    font-family: "Segoe UI", sans-serif;
    color: #333;
    background: #fff;
    min-width: 1200px;

    .product-detail {
        box-sizing: border-box;
        width: 1200px;
        display: flex;
        gap: 40px;
        padding: 60px 50px;
        background: #fff;
        margin: 0 auto;

        .left {
            flex: 1;
            text-align: center;

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
                margin-bottom: 12px;
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
                padding: 70px 0 0;

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

}
</style>
