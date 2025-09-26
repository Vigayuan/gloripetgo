<template>
    <div class="landing-page">
        <!-- Header -->
        <HeaderPage />
        <div class="fix-bg">
            <img src="../assets/images/fix_bg_01.jpg" alt="">
            <img src="../assets/images/fix_bg_02.jpg" alt="">
            <img src="../assets/images/fix_bg_03.jpg" alt="">
            <img src="../assets/images/fix_bg_04.jpg" alt="">
            <img src="../assets/images/fix_bg_05.jpg" alt="">
            <img src="../assets/images/fix_bg_06.jpg" alt="">
            <img src="../assets/images/fix_bg_07.jpg" alt="">
            <img src="../assets/images/fix_bg_08.jpg" alt="">
            <img src="../assets/images/fix_bg_09.jpg" alt="">
            <img src="../assets/images/fix_bg_10.jpg" alt="">
            <img src="../assets/images/fix_bg_11.jpg" alt="">
            <img src="../assets/images/fix_bg_12.jpg" alt="">
            <img src="../assets/images/fix_bg_13.jpg" alt="">
            <img src="../assets/images/fix_bg_14.jpg" alt="">
            <img src="../assets/images/fix_bg_15.jpg" alt="">
            <img src="../assets/images/fix_bg_16.jpg" alt="">
            <img src="../assets/images/fix_bg_17.jpg" alt="">
            <img src="../assets/images/fix_bg_18.jpg" alt="">
        </div>
        <!-- Hero -->
        <section class="hero">
            <img src="../assets/images/pds_bg_02.jpg" alt="">
            <img src="../assets/images/pds_bg_03.jpg" alt="">
            <img src="../assets/images/pds_bg_04.jpg" alt="">
            <img src="../assets/images/pds_bg_05.jpg" alt="">
            <img src="../assets/images/pds_bg_06.jpg" alt="">
            <img src="../assets/images/pds_bg_07.jpg" alt="">
            <img src="../assets/images/pds_bg_08.jpg" alt="">
        </section>
        <div class="swiper-block">
            <div class="swiper-block-text">
                <div class="swiper-block-text1">Nature’s <span>Pledge</span></div>
                <div class="swiper-block-text2">The Ingredients Your Pet Deserves</div>
            </div>
            <div class="swiper-wrapper">
                <Swiper :modules="modules" :loop="true" :slides-per-view="1" :navigation="{
                    prevEl: '.custom-prev'
                }" class="swiper-box">
                    <SwiperSlide>
                        <div class="slide-item">
                            <div class="slide-item-title">
                                ARCTIC<br>
                                CHAR
                            </div>
                            <div class="slide-item-btn">
                                Learn more
                            </div>
                            <img src="../assets/images/swiper-item-1.jpg" alt="">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slide-item">
                            <div class="slide-item-title">
                                ARCTIC<br>
                                CHAR
                            </div>
                            <div class="slide-item-btn">
                                Learn more
                            </div>
                            <img src="../assets/images/swiper-item-2.jpg" alt="">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slide-item">
                            <div class="slide-item-title">
                                ARCTIC<br>
                                CHAR
                            </div>
                            <div class="slide-item-btn">
                                Learn more
                            </div>
                            <img src="../assets/images/swiper-item-3.jpg" alt="">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slide-item">
                            <div class="slide-item-title">
                                ARCTIC<br>
                                CHAR
                            </div>
                            <div class="slide-item-btn">
                                Learn more
                            </div>
                            <img src="../assets/images/swiper-item-4.jpg" alt="">
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="custom-prev">
                <img src="../assets/images/icon-arrow.svg" alt="">
            </div>
            <!-- <div class="custom-next">
                <img src="../assets/images/icon-arrow.svg" style="transform: rotate(180deg);" alt="">
            </div> -->
        </div>
        <div class="marquee">
            <div class="marquee-content">
                <div><span>Daily Guard</span> Feast</div>
                <div><span>Daily Guard</span> Feast</div>
                <div><span>Daily Guard</span> Feast</div>
            </div>
        </div>
        <!-- Products -->
        <section id="products" class="products">
            <div class="product-grid">
                <div class="product-card">
                    <img src="../assets/images/pd1.png" alt="">
                    <div class="tag1">IMMUNE SUPPORT</div>
                    <div class="tag2">JOINT CARE</div>
                </div>
                <div class="product-card">
                    <img src="../assets/images/pd2.png" alt="">
                    <div class="tag1">IMMUNE SUPPORT</div>
                    <div class="tag2">SKIN & COAT HEALTH</div>
                </div>
                <div class="product-card">
                    <img src="../assets/images/pd3.png" alt="">
                    <div class="tag1">IMMUNE SUPPORT</div>
                    <div class="tag2">URINARY HEALTH</div>
                </div>
            </div>
        </section>

        <div class="transparent-block"></div>


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


        <!-- Philosophy -->
        <section class="philosophy">
            <img src="../assets/images/bg_14.jpg" alt="">
            <img src="../assets/images/bg_15.jpg" alt="">
            <img src="../assets/images/bg_16.jpg" alt="">
            <img src="../assets/images/bg_17.jpg" alt="">
            <div class="phil-text1">Product</div>
            <div class="phil-text2">Philosophy</div>
            <div class="phil-items">
                <div class="phil-item">
                    <div class="phil-left">
                        <img src="../assets/images/icon-Natural.svg" alt="">
                    </div>
                    <div class="phil-right">
                        <div class="phil-right-text1">Natural</div>
                        <div class="phil-right-text2">Chemical elements bring too many allergy risks.</div>
                    </div>
                </div>
                <div class="phil-item">
                    <div class="phil-left">
                        <img src="../assets/images/icon-health.svg" alt="">
                    </div>
                    <div class="phil-right">
                        <div class="phil-right-text1">Health</div>
                        <div class="phil-right-text2">Defense Three meals a day reduce the risk of illness.</div>
                    </div>
                </div>
                <div class="phil-item">
                    <div class="phil-left">
                        <img src="../assets/images/icon-fresh.svg" alt="">
                    </div>
                    <div class="phil-right">
                        <div class="phil-right-text1">Fresh</div>
                        <div class="phil-right-text2">Freshness from the original material to the whole processing of
                            the product.
                        </div>
                    </div>
                </div>
                <div class="phil-item">
                    <div class="phil-left">
                        <img src="../assets/images/icon-convenient.svg" alt="">
                    </div>
                    <div class="phil-right">
                        <div class="phil-right-text1">Convenient</div>
                        <div class="phil-right-text2">Keep food fresh high-cost & highly effective Easy Lock ensures
                            freshness.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <FooterPage />
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
const modules = [Navigation, Autoplay]

</script>

<style lang="scss" scoped>
.landing-page {
    width: 100%;
    min-width: 1200px;
    background: transparent;

    .fix-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        line-height: 0;
        z-index: -1;

        img {
            width: 100%;
        }
    }

    .hero {
        position: relative;
        font-size: 0;
        color: #fff;
        background: #fff;

        img {
            width: 100%;
        }
    }



    .products {
        background: #fff;

        .products-text1 {
            font-family: "RedHatDisplay-Regular";
            font-size: 30px;
            line-height: 1;
            text-align: center;
            color: #212995;
            padding: 50px 0;
            margin: 0;

            .sub1 {
                font-family: "RedHatDisplay-Bold";
                font-weight: bold;
            }

            .sub2 {
                font-family: "RedHatDisplay-Bold";
                font-weight: bold;
            }
        }

        .product-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: 0 auto;
            background: #212995;
            border-radius: 25px;
            padding: 20px;

            .product-card {
                cursor: pointer;
                width: 30%;
                height: auto;

                img {
                    width: 100%;
                    max-width: 350px;

                    &:hover {
                        transform: scale(1.05);
                    }
                }

                .tag1 {
                    font-family: "RedHatDisplay-Bold";
                    font-size: 14px;
                    line-height: 1;
                    text-align: center;
                    color: #fff;
                    height: 14px;
                }

                .tag2 {
                    font-family: "RedHatDisplay-Bold";
                    font-size: 30px;
                    line-height: 1;
                    text-align: center;
                    color: #fff;
                    width: 270px;
                    margin: 0 auto;
                    height: 60px;
                }
            }
        }
    }

    .transparent-block {
        width: 100%;
        height: 300px;
        border: 20px solid #fff;
        border-right: none;
        border-left: none;
        background: transparent;
    }

    .brand-logo {
        background: #fff;
        padding: 40px 0;

        .logo-list {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
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

    .swiper-block {
        position: relative;

        background: #fff;

        .swiper-block-text {
            width: 100%;
            text-align: center;
            color: #212995;
            padding: 50px 0;
            overflow: visible;

            .swiper-block-text1 {
                font-family: "RedHatDisplay-Medium";
                font-size: 68px;
                line-height: 1.5;

                span {
                    font-family: "RedHatDisplay-Black";
                }
            }

            .swiper-block-text2 {
                font-family: 'Oswald-Regular';
                font-size: 22px;
                line-height: 1.2;
            }
        }

        .swiper-wrapper {
            height: 400px;
            width: 400px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
            overflow: hidden;
        }

        .custom-prev {
            position: absolute;
            top: 400px;
            cursor: pointer;
            left: 50%;
            width: 40px;
            height: 40px;
            z-index: 100;
            margin-left: 182px;

            img {
                width: 100%;
            }
        }

        .custom-next {
            position: absolute;
            top: 50%;
            cursor: pointer;
            right: 15%;
            width: 40px;
            height: 40px;
            z-index: 100;

            img {
                width: 100%;
            }
        }

        :deep(.swiper-box) {

            .swiper-button-prev {
                top: 40% !important;
                left: 10%;
                background-image: url(../assets/images/icon-arrow.svg);
                background-repeat: no-repeat;
            }

            .swiper-button-next {
                top: 40% !important;
                right: 10%;
            }
        }

        .swiper-box {
            :deep(.swiper-pagination) {
                width: 200px;
                height: 120px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin: 0 auto;

                .swiper-pagination-bullet {
                    cursor: pointer;
                    display: block;
                    background: #505050;
                    border: 1px solid #505050;
                    opacity: 0.6;
                    width: 10px;
                    height: 10px;
                    border-radius: 10px;
                }

                .swiper-pagination-bullet-active {
                    background: #e8e8e8;
                    border: 1px solid #505050;
                    opacity: 1;
                }

            }

            .slide-item {
                position: relative;
                width: 150%;

                .slide-item-title {
                    position: absolute;
                    top: 15%;
                    left: 9%;
                    font-family: "RedHatDisplay-Bold";
                    font-size: 40px;
                    line-height: 1;
                    color: #fff;
                    text-align: left;
                }

                .slide-item-btn {
                    cursor: pointer;
                    position: absolute;
                    top: 82%;
                    left: 9%;
                    font-family: "RedHatDisplay-Regular";
                    font-size: 16px;
                    line-height: 1;
                    padding-bottom: 5px;
                    color: #fff;
                    border-bottom: 3px solid #fff;
                }

                img {
                    width: 100%;
                }
            }
        }
    }

    .marquee {
        background: #fff;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        padding: 50px 0 0;

        .marquee-content {
            display: inline-block;
            animation: marquee 24s linear infinite;

            div {
                font-family: 'RedHatDisplay-Medium';
                display: inline-block;
                padding-right: 50px;
                font-size: 120px;
                color: #212995;

                span {
                    font-family: 'RedHatDisplay-Black';
                }
            }
        }
    }



    @keyframes marquee {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-50%);
        }
    }

    .philosophy {
        position: relative;
        font-size: 0;
        color: #fff;

        background: #fff;

        img {
            width: 100%;
        }

        .phil-text1 {
            position: absolute;
            font-family: "RedHatDisplay-Regular";
            font-size: 45px;
            line-height: 1;
            top: 40px;
            left: 6%;
        }

        .phil-text2 {
            position: absolute;
            font-family: "RedHatDisplay-Bold";
            font-size: 60px;
            line-height: 1;
            top: 85px;
            left: 6%;
        }

        .phil-items {
            position: absolute;
            font-size: 50px;
            line-height: 1;
            top: 195px;
            left: 10%;
            display: flex;
            flex-wrap: wrap;
            width: 520px;
            justify-content: space-between;

            .phil-item {
                width: 230px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 30px;

                .phil-left {
                    width: 50px;

                    .img {
                        width: 100%;
                    }
                }

                .phil-right {
                    width: 170px;

                    .phil-right-text1 {
                        font-family: "RedHatDisplay-Regular";
                        font-size: 38px;
                        line-height: 1;
                        text-align: left;
                    }

                    .phil-right-text2 {
                        font-family: "Oswald-Regular";
                        font-size: 14px;
                        line-height: 1;
                        text-align: left;
                        margin-top: 10px;
                    }
                }
            }
        }
    }

    .cta {
        background: #f25929;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 500px;

        .cta-left {
            width: 70%;
        }

        .cta-right {
            position: relative;
            width: 30%;
            height: 100%;

            img {
                position: absolute;
                top: 200px;
                right: 12%;
                width: 80px;
            }

            .cta-text1 {
                position: absolute;
                top: 280px;
                right: 10%;
                width: 200px;
                font-family: "RedHatDisplay-Medium";
                font-size: 40px;
                line-height: 1;
                text-align: right;
                color: #212995;

                span {
                    font-family: "RedHatDisplay-Black";
                }
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
