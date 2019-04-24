<template>
    <div class="home">
        <social/>
<img src="../assets/images/img-bg.jpg" alt="" class="img-bg">
        <div class="intro">
            <h4 id="hello">Hello, i am</h4>
            <h2 id="name">Promise Femi</h2>
            <div class="underline"></div>
            <span id="slogan"></span>
            <!--            <p id="slogan">Dreamer / Designer / Developer</p>-->
            <router-link to="/contact" class="email-me">TALK TO ME</router-link>
        </div>
        <div class="my-image">
            <img src="../assets/images/my-image.png" alt="">
        </div>
    </div>
</template>

<script>
    // import LogoSvg from "./LogoSvg";
    import Typed from "../assets/script/typed/typed";
    import social from './Social'
    import {animJs} from "../assets/script/animations";

    export default {
        name: "Home",
        components: {social},
        mounted() {
            new Typed('#slogan', {
                strings: ['Dreamer', 'Designer', 'Developer'],
                typeSpeed: 130,
                backSpeed: 80,
                startDelay: 500,
                backDelay: 1200,
                loop: true,
                showCursor: true,
            })

            let hello={
                easing:"easeInOutSine",
                translateY:[100,0],
                opacity:[0,1],
                direction: "linear",
                duration: 1100
            }

            animJs('#hello', hello);
            animJs('#name', hello)
            animJs('.underline', hello)
            animJs('#slogan', hello)
            animJs('.email-me', hello)
        }
    }
</script>

<style scoped src="../assets/styles/home.css">

</style>