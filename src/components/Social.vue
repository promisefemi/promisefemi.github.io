<template>
  <div :class="isinline ? 'socialx' : 'social'">
    <ul>
      <li>
        <a href="https://www.facebook.com/promisefemi1">
          <i class="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Ingeniouspromis">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ingeniouspromise/">
          <i class="fa fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/ingeniouspromise">
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: ["isinline"]
};
</script>

<style scoped>
</style>