<template>
    <header class="topnav">
        <div class="nav-inner">
            <!-- 左侧：菜单按钮（移动端） -->
            <div class="menu-toggle" @click="toggleMenu">
                <img src="../assets/images/icon-menu.svg" alt="">
            </div>

            <!-- 中间：logo -->
            <div class="logo">
                <img src="../assets/images/Icon-Gloripetgo-logo.svg" alt="Gloripetgo" />
            </div>

            <!-- 右侧：社交图标 -->
            <div class="icons-list">
                <div @click="openWindow(1)" class="icon">
                    <img src="../assets/images/icon-facebook.svg" alt="" />
                </div>
                <div @click="openWindow(2)" class="icon">
                    <img src="../assets/images/icon-youtube.svg" alt="" />
                </div>
                <div @click="openWindow(3)" class="icon">
                    <img src="../assets/images/icon-ins.svg" alt="" />
                </div>
            </div>
        </div>

        <!-- 导航菜单（PC 显示 / 移动端弹出） -->
        <nav class="menu" :class="{ show: showMenu }" @mouseenter="onEnter" @mouseleave="onLeave">
            <div @click="goPd">Products</div>
            <div @click="goWhy">Why healthy</div>
            <div @click="goStory">Our story</div>
            <div @click="goAbout">About us</div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showArrowBlock = ref(false);
const showMenu = ref(false);

const goPd = () => router.push({ name: "Products" });
const goWhy = () => router.push({ name: "Healthy" });
const goStory = () => router.push({ name: "Home" });
const goAbout = () => router.push({ name: "About" });

const openWindow = (index) => {
    const urls = [
        "",
        "https://www.facebook.com/profile.php?id=61577967892785",
        "https://www.youtube.com/@GloriPetgo",
        "https://www.instagram.com/",
    ];
    window.open(urls[index], "_blank");
};

const onEnter = () => (showArrowBlock.value = true);
const onLeave = () => (showArrowBlock.value = false);
const toggleMenu = () => (showMenu.value = !showMenu.value);
</script>

<style lang="scss" scoped>
.topnav {
    position: relative;
    width: 100%;
    background: #212995;

    .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        padding: 0 30px;

        .menu-toggle {
            display: none;
            cursor: pointer;
            width: 120px;
            text-align: left;
            img {
                width: 30px;
            }
        }

        .logo {
            width: 70px;

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
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: "Oswald-SemiBold";
        font-size: 18px;
        background: #212995;
        height: 60px;
        transition: all 0.3s ease;

        div {
            cursor: pointer;
            margin: 0 20px;
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

    /* ---------- 移动端适配 ---------- */
    @media (max-width: 768px) {
        .nav-inner {
            padding: 0 15px;

            .menu-toggle {
                display: block;
            }

            .icons-list {
                .icon {
                    width: 25px;
                    margin-left: 10px;
                }
            }

            .logo {
                width: 60px;
            }
        }

        .menu {
            display: none;
            flex-direction: column;
            align-items: center;
            background: #212995;
            width: 100%;
            color: #fff;

            div {
                padding: 15px 0;
                font-size: 16px;
            }

            &.show {
                display: flex;
            }
        }

        .arrow-down-block {
            display: none; // 移动端隐藏产品下拉区
        }
    }
}
</style>
