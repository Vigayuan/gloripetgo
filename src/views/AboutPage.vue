<template>
    <div class="landing-page">

        <HeaderPage />

        <!-- Hero -->
        <section class="hero">
            <div class="hero-bg">
                <img src="../assets/images/about_bg_01.jpg" alt="">
            </div>
            <div class="hero-text-block">
                <div class="title1">
                    GET IN <br>
                    TOUCH
                </div>
                <div class="title2">
                    Ensure comprehensive nutrition and health protection for your pet with every delicious bite.
                </div>
            </div>
        </section>

        <!-- Unleash energy -->
        <section class="unleash " ref="boxRef">
            <img src="../assets/images/about_bg_11.jpg" alt="">
            <img src="../assets/images/about_bg_12.jpg" alt="">
            <img src="../assets/images/about_bg_13.jpg" alt="">
            <img src="../assets/images/about_bg_14.jpg" alt="">
            <img src="../assets/images/about_bg_15.jpg" alt="">
            <img src="../assets/images/about_bg_16.jpg" alt="">
            <img src="../assets/images/about_bg_17.jpg" alt="">
            <img src="../assets/images/about_bg_18.jpg" alt="">
            <div class="input-block">
                <div class="inner-input-block">
                    <div class="name">NAME*</div>
                    <div class="name-input">
                        <div class="first-name">
                            <input type="text" id="firstName" v-model="firstName" placeholder="First Name" />
                            <div>First Name</div>
                        </div>
                        <div class="last-name">
                            <input type="text" id="lastName" v-model="lastName" placeholder="Last Name" />
                            <div>Last Name</div>
                        </div>
                    </div>
                    <div class="email">E-MAIL*</div>
                    <div class="email-input">
                        <input type="text" id="email" v-model="email" placeholder="Email" />
                    </div>
                    <div class="message">MESSAGE*</div>
                    <div class="message-input">
                        <textarea type="text" id="message" v-model="messageContent" placeholder="Message" />
                    </div>
                </div>
                <div class="btn-group">
                    <div class="btn-block">
                        <button class="btn btn-send" @click="sendForm">Send</button>
                        <button class="btn btn-clear" @click="clearForm">Clear all</button>
                    </div>
                    <div class="media-block">
                        <img @click="openWindow(1)" src="../assets/images/icon-facebook.svg" alt="">
                        <img @click="openWindow(2)" src="../assets/images/icon-youtube.svg" alt="">
                        <img @click="openWindow(3)" src="../assets/images/icon-ins.svg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- Philosophy -->
        <section class="philosophy">
            <img src="../assets/images/about_bg_19.jpg" alt="">
            <img src="../assets/images/about_bg_20.jpg" alt="">
            <img src="../assets/images/about_bg_21.jpg" alt="">
            <img src="../assets/images/about_bg_22.jpg" alt="">
            <img src="../assets/images/about_bg_23.jpg" alt="">
            <img src="../assets/images/about_bg_24.jpg" alt="">
            <img src="../assets/images/about_bg_25.jpg" alt="">
            <img src="../assets/images/about_bg_26.jpg" alt="">
            <img src="../assets/images/about_bg_27.jpg" alt="">
            <div class="phil-block">
                <div class="phil-text1">Frequently <br> Asked Questions</div>
                <div class="phil-items">
                    <div @click="toggleShowQA(1)" class="phil-item">
                        <div class="phil-item-top">
                            <div class="phil-item-top-text">
                                Are GloriPetgo pet food safe?
                            </div>
                            <div class="control-btn">
                                <div v-show="showQAIndex != 1">+</div>
                                <div v-show="showQAIndex == 1">-</div>
                            </div>
                        </div>
                        <div v-show="showQAIndex == 1" class="phil-item-bottom">
                            <div class="phil-item-bottom-text">
                                We are a team passionate about pets, and ensuring the quality and safety of our products
                                is
                                our top priority. Our rigorous processes and operations are designed to deliver the
                                highest
                                levels of quality, purity, and safety, while adhering to regulatory standards and
                                continuously seeking improvement across all our facilities.
                                Our products are crafted using nutritious, high-quality ingredients that comply with
                                relevant standards.
                            </div>
                        </div>
                    </div>
                    <div @click="toggleShowQA(2)" class="phil-item">
                        <div class="phil-item-top">
                            <div class="phil-item-top-text">
                                How do I keep my pet happy and healthy?
                            </div>
                            <div class="control-btn">
                                <div v-show="showQAIndex != 2">+</div>
                                <div v-show="showQAIndex == 2">-</div>
                            </div>
                        </div>
                        <div v-show="showQAIndex == 2" class="phil-item-bottom">
                            <div class="phil-item-bottom-text">
                                We are a team passionate about pets, and ensuring the quality and safety of our products
                                is our top priority. Our rigorous processes and operations are designed to deliver the
                                highest levels of quality, purity, and safety, while adhering to regulatory standards
                                and continuously seeking improvement across all our facilities.
                                Our products are crafted using nutritious, high-quality ingredients that comply with
                                relevant standards.

                            </div>
                        </div>
                    </div>
                    <div @click="toggleShowQA(3)" class="phil-item">
                        <div class="phil-item-top">
                            <div class="phil-item-top-text">
                                What key factors should I consider
                                when selecting a pet food?
                            </div>
                            <div class="control-btn">
                                <div v-show="showQAIndex != 3">+</div>
                                <div v-show="showQAIndex == 3">-</div>
                            </div>
                        </div>
                        <div v-show="showQAIndex == 3" class="phil-item-bottom">
                            <div class="phil-item-bottom-text">
                                We are a team passionate about pets, and ensuring the quality and safety of our products
                                is our top priority. Our rigorous processes and operations are designed to deliver the
                                highest levels of quality, purity, and safety, while adhering to regulatory standards
                                and continuously seeking improvement across all our facilities.
                                Our products are crafted using nutritious, high-quality ingredients that comply with
                                relevant standards.

                            </div>
                        </div>
                    </div>
                    <div @click="toggleShowQA(4)" class="phil-item">
                        <div class="phil-item-top">
                            <div class="phil-item-top-text">
                                What does "Cruelty Free" mean
                                to GloriPetgo?
                            </div>
                            <div class="control-btn">
                                <div v-show="showQAIndex != 4">+</div>
                                <div v-show="showQAIndex == 4">-</div>
                            </div>
                        </div>
                        <div v-show="showQAIndex == 4" class="phil-item-bottom">
                            <div class="phil-item-bottom-text">
                                We are a team passionate about pets, and ensuring the quality and safety of our products
                                is our top priority. Our rigorous processes and operations are designed to deliver the
                                highest levels of quality, purity, and safety, while adhering to regulatory standards
                                and continuously seeking improvement across all our facilities.
                                Our products are crafted using nutritious, high-quality ingredients that comply with
                                relevant standards.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterPage />
    </div>
</template>

<script setup>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { message } from 'ant-design-vue';
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const messageContent = ref("");
const showQAIndex = ref(-1);
import emailjs from "emailjs-com"

const openWindow = (index) => {
    if (index == 1) {
        window.open('https://www.facebook.com/profile.php?id=61577967892785', "_blank")
    }
    else if (index == 2) {
        window.open('https://www.youtube.com/@GloriPetgo', "_blank")
    }
    else {
        window.open('https://www.instagram.com/', "_blank")
    }
}
const sendMail = () => {
    emailjs.send(
        "service_85ubcj6",     // 你的服务ID
        "template_5o5qhj7",    // 邮件模板ID
        {
            to_email: "gloripetgo@gmail.com",
            user_name: `${firstName.value} ${lastName.value}`,
            message: `${messageContent.value}`,
            user_email: `${email.value}`
        },
        "WjproCWEzSMb7p60H"         // public key
    ).then(() => {
        message.info('Eamil sent successfully');
    }).catch(err => {
        console.log(err);
        message.info('Email sent failed');
    })
}

const sendForm = () => {
    if (!firstName.value || !lastName.value || !email.value || !messageContent.value) {
        alert("请填写完整信息");
        return;
    }
    sendMail()
};

const clearForm = () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    messageContent.value = "";
};
const toggleShowQA = (index) => {
    showQAIndex.value = showQAIndex.value === index ? -1 : index;
}
</script>

<style lang="scss" scoped>
.landing-page {
    width: 100%;
    min-width: 1200px;
    background: #e8e8e8;

    .hero {
        position: relative;
        font-size: 0;
        color: #fff;


        .hero-bg {
            height: 450px;
            overflow: hidden;

            img {
                width: 100%;
                transform: translateY(-40);
                animation: moveUp 10s ease-out 0.5s forwards;
            }
        }

        @keyframes moveUp {
            to {
                transform: translateY(-140px);
            }
        }

        .hero-text-block {
            position: absolute;
            display: flex;
            justify-content: space-between;
            bottom: 20%;
            left: 50%;
            width: 1000px;
            margin-left: -500px;
            align-items: end;

            .title1 {
                font-family: "RedHatDisplay-Bold";
                font-size: 60px;
                line-height: 1;
                text-align: left;

            }

            .title2 {
                font-family: "Oswald-Regular";
                font-size: 16px;
                line-height: 1.5;
                width: 322px;
                text-align: left;
            }
        }

    }

    .unleash {
        position: relative;
        font-size: 0;

        img {
            width: 100%;
        }

        .input-block {
            box-sizing: border-box;
            position: absolute;
            top: 30px;
            width: 800px;
            left: 50%;
            margin-left: -400px;
            padding: 30px;
            color: #212995;
            background: #fff;

            .inner-input-block {
                text-align: left;

                .name {
                    font-family: "RedHatDisplay-Bold";
                    font-size: 18px;
                    line-height: 1.5;
                }

                .name-input {
                    display: flex;
                    justify-content: space-between;

                    .first-name {
                        width: 45%;

                        div {
                            font-family: "RedHatDisplay-Medium";
                            font-size: 16px;
                            line-height: 1.5;
                        }
                    }

                    .last-name {
                        width: 45%;

                        div {
                            font-family: "RedHatDisplay-Medium";
                            font-size: 16px;
                            line-height: 1.5;
                        }
                    }
                }

                .email {
                    font-family: "RedHatDisplay-Bold";
                    font-size: 18px;
                    line-height: 1.5;
                    margin-top: 20px;
                }

                .email-input {
                    display: flex;
                    justify-content: space-between;

                    .first-name {
                        width: 45%;

                        div {
                            font-family: "RedHatDisplay-Medium";
                            font-size: 16px;
                            line-height: 1.5;
                        }
                    }

                    .last-name {
                        width: 45%;

                        div {
                            font-family: "RedHatDisplay-Medium";
                            font-size: 16px;
                            line-height: 1.5;
                        }
                    }
                }

                .message {
                    font-family: "RedHatDisplay-Bold";
                    font-size: 18px;
                    line-height: 1.5;
                    margin-top: 20px;
                }

                .message-input {
                    display: flex;
                    justify-content: space-between;

                    .first-name {
                        width: 45%;

                        div {
                            font-family: "RedHatDisplay-Medium";
                            font-size: 16px;
                            line-height: 1.5;
                        }
                    }

                    .last-name {
                        width: 45%;

                        div {
                            font-family: "RedHatDisplay-Medium";
                            font-size: 16px;
                            line-height: 1.5;
                        }
                    }
                }

                input,
                textarea {
                    border: 1px solid #1a4ba0;
                    padding: 8px;
                    font-size: 14px;
                    outline: none;
                    width: 100%;
                }

                textarea {
                    min-height: 100px;
                }
            }

            .btn-group {
                position: relative;
                margin: 0 auto;
                padding: 20px 0 0;
                height: 40px;

                .btn-block {
                    position: absolute;
                    left: 50%;
                    margin-left: -125px;
                    display: flex;
                    justify-content: space-around;
                    width: 250px;
                }

                .media-block {
                    position: absolute;
                    bottom: 13px;
                    right: 0;

                    img {
                        cursor: pointer;
                        width: 20px;
                        margin-left: 10px;
                    }
                }
            }

            .btn {
                border: none;
                border-radius: 20px;
                width: 100px;
                height: 35px;
                font-size: 14px;
                line-height: 35px;
                cursor: pointer;
            }

            .btn-send {
                background-color: #1a2ba0;
                color: #fff;
            }

            .btn-clear {
                background-color: #b3b3b3;
                color: #fff;
            }
        }
    }


    .philosophy {
        position: relative;
        font-size: 0;
        color: #fff;

        img {
            width: 100%;
        }

        .phil-block {
            position: absolute;
            top: 80px;
            left: 50%;
            width: 35%;

            .phil-text1 {
                font-family: "RedHatDisplay-Black";
                font-size: 45px;
                line-height: 1;
                color: #212995;
                text-align: left;
            }

            .phil-items {
                font-family: "RedHatDisplay-Bold";
                font-size: 20px;
                line-height: 1;

                .phil-item {
                    cursor: pointer;
                    padding: 20px 0 10px;
                    border-bottom: 2px solid #7e7e7e;

                    .phil-item-top {
                        display: flex;
                        justify-content: space-between;
                        color: #212995;
                        align-items: center;

                        .phil-item-top-text {
                            width: 80%;
                            text-align: left;
                            line-height: 20px;
                        }

                        .control-btn {
                            font-size: 40px;
                            color: #7e7e7e;
                            cursor: pointer;
                        }
                    }

                    .phil-item-bottom {
                        font-family: 'Oswald-Regular';
                        font-size: 16px;
                        line-height: 1.5;
                        text-align: left;
                        color: #7e7e7e;
                        padding: 15px 0;
                    }
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
