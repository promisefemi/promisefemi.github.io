<template>
    <div class="contact">
        <div class="contact-error"></div>
        <div class="contact-success"></div>
        <div class="row" style="height: 100%;">
            <div class="col-6" style="   margin-bottom: 20px;">
                <div class="heading talk-heading">
                    <h3>Let's Talk</h3>
                    <div class="underline2"></div>
                </div>
                <div class="entry-section-big">
                    <p>
                        You have a project in mind, questions or just want to say hi
                        <strong
                                class="color-orange"
                                style="font-size: 70px; line-height: 0"
                        >.</strong>
                    </p>
                </div>
                <br>
                <a href="mailto:promisefemi90@gmail.com" class="email-me">SEND ME AN EMAIL</a>

                <social isinline="yes"></social>
            </div>
            <div class="col-6">
                <div class="contact-form">
                    <h3 class="message-works">a message works too</h3>
                    <form action @submit.prevent="submit" id="formContact">
                        <div class="input-container">
                            <input type="text" placeholder="Name*" v-model="formdata.name" autocomplete="off">
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="input-container">
                                    <input
                                            type="tel"
                                            placeholder="Phone (optional)"
                                            v-model="formdata.phone"
                                            autocomplete="off"
                                    >
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="input-container">
                                    <input
                                            type="email"
                                            placeholder="Email*"
                                            v-model="formdata.email"
                                            autocomplete="off"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="input-container">
                            <input
                                    type="text"
                                    placeholder="Subject*"
                                    v-model="formdata.subject"
                                    autocomplete="off"
                            >
                        </div>
                        <div class="input-container">
                            <textarea placeholder="Message*" v-model="formdata.message"></textarea>
                        </div>
                        <button class="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Social from "./Social";
    import {animJs} from "../assets/script/animations";
import * as emailjs from 'emailjs-com'
    export default {
        name: "Contacts",
        components: {Social},
        data: () => ({
            formdata: {
                name:"",
                email: "",
                phone: "",
                subject:"",
                message:""
            }
        }),
        methods: {
            submit() {
                let floatIn = {
                    easing: "spring",
                    right: [-20, 0],
                    opacity: [0, 1],
                    direction: "linear",
                    duration: 900
                }
                let floatOut = {
                    easing: "spring",
                    right: [0, -20],
                    opacity: [1, 0],
                    direction: "linear",
                    duration: 0
                }
                const {name, email, phone, subject, message} = this.formdata;
                if ((name === "" ) && (email === "") && ( subject === "" ) && ( message === "" )) {
                    return false;
                } else if (name === "") {
                    let error = document.querySelector('.contact-error');
                    error.innerText="Please enter your Name";
                    animJs('.contact-error', floatIn);
                    setTimeout(function () {
                        animJs('.contact-error', floatOut);
                    }, 3000);
                    return false;
                } else if (email === "") {
                    let error = document.querySelector('.contact-error');
                    error.innerText="You forgot your email, i cant reach you without it";
                    animJs('.contact-error', floatIn);
                    setTimeout(function () {
                        animJs('.contact-error', floatOut);
                    }, 3000);
                    return false;
                } else if (subject === "" ) {
                    let error = document.querySelector('.contact-error');
                    error.innerText="Please enter a subjects that's how i know the title of your message";
                    animJs('.contact-error', floatIn);
                    setTimeout(function () {
                        animJs('.contact-error', floatOut);
                    }, 3000);
                    return false;
                } else if (message === "" ) {
                    let error = document.querySelector('.contact-error');
                    error.innerText="A detailed message is also quite important";
                    animJs('.contact-error', floatIn);
                    setTimeout(function () {
                        animJs('.contact-error', floatOut);
                    }, 3000);
                    return false;
                }else{

                    emailjs.send('gmail','template_sZfoKNOu',this.formdata,'user_ZhNXGC6nQxh5VRhGbqnYt').then(response=>{
                        let success = document.querySelector('.contact-success');
                        success.innerText="You message has been sent and delivered. Thanks for reaching out";
                        animJs('.contact-success', floatIn);
                        document.getElementById('formContact').reset();
                        setTimeout(function () {
                            animJs('.contact-success', floatOut);
                        }, 3000);

                    }, function (err) {
                        let error = document.querySelector('.contact-error');
                        error.innerText= "An Error Occurred, please try again";
                        animJs('.contact-error', floatIn);
                        setTimeout(function () {
                            animJs('.contact-error', floatOut);
                        }, 3000);
                    })

                    return false;
                }
            }
        },
        mounted() {
            let hello = {
                easing: "easeInOutSine",
                translateX: [100, 0],
                opacity: [0, 1],
                direction: "linear",
                duration: 1800
            };
            animJs(".col-6", hello);
        }
    };
</script>

<style scoped src="../assets/styles/contact.css">
</style>