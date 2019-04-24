<template>
    <div :class="isinline ? 'socialx' : 'social'">
        <ul>
            <li><a href=""> <i class="fa fa-facebook"></i></a></li>
            <li><a href=""> <i class="fa fa-twitter"></i></a></li>
            <li><a href=""> <i class="fa fa-instagram "></i></a></li>
            <li><a href=""> <i class="fa fa-linkedin "></i></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Social",
        props:['isinline']
    }
</script>

<style scoped>

</style>