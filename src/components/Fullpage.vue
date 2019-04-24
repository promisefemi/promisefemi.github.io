<template>
    <div class="fullpage">
        <div class="fullpage-content">
<!--            <img src="../assets/images/logo_svg_full_dark.svg" alt="">-->
            <h3>PROMISE</h3>
            <p>is crafting...</p>
            <div class="loader">
                <div class="loader-inner"></div>
            </div>
        </div>

    </div>
</template>

<script>
    import {animJs} from "../assets/script/animations";

    export default {
        name: "Fullpage",
        mounted() {
            let options = {
                left: "100%",
                loop: true,
                direction: "alternate",
                easing: "easeInQuad",
                duration: 900,
                delay: 0,
                endDelay:0
            }
            animJs('.loader-inner', options);
        }
    }
</script>

<style scoped src="../assets/styles/fullpage.css">

</style>