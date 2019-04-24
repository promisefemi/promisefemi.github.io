<template>
    <div id="app">
        <fullpage v-if="showFull"/>
        <left-pane></left-pane>
        <router-view class="page"></router-view>
    </div>
</template>

<script>

    import LeftPane from "./components/LeftPane";
    import Fullpage from "./components/Fullpage";
let parent;
    export default {
        name: 'app',
        components: {
            Fullpage,
            LeftPane
        },
        data:()=>({
           showFull: false
        }),
        watch: {
            "$route": (to, from) => {
                parent.showFull = true;
               setTimeout(function () {
                   parent.showFull = false
               }, 900)
                // console.log(to, "ROUTING TO");
                // console.log(from, "ROUTING FROM");
            }
        },
        created() {
            parent =  this;
        }
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100vh;
        background-color: #020202;
        display: flex;
    }

    .page {
        width: 95%;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        position: fixed;
    }
</style>
