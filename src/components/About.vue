<template>
  <div class="about">
    <div class="me">
      <div class="heading">
        <h3>About Me</h3>
        <div class="underline2"></div>
      </div>
      <div class="entry-section">
        <p>
          Hello it's me again, let me reintroduce myself (more officially this time). My name is
          <span
            class="my-name"
            title="Promise Seun Femi"
          >Promise Femi</span>.
          <br>
          <br>I am a self
          taught Web Developer, based in
          <span>Lagos, Nigeria</span>. A young mind with love
          for Problem Solving, Logic and Design, this love & interest set me on the path of understanding and
          writing the
          language of the machines. i am always open to interesting things, technology, people and projects.
          ALWAYS
          LEARNING NEW THINGS.
          <br>
          <br>I have been writing code for about three(3) years, i am experienced and a professional. i would
          love to learn about the problems you face in your business and how i can help fix them.
          <router-link to="/contact" class="color-red">Talk to me</router-link>
        </p>
      </div>
    </div>
    <div class="philosophy">
      <div class="heading">
        <h3>Philosophy</h3>
        <div class="underline2"></div>
      </div>
      <div class="entry-section">
        <p>The world is full of fascinating problem's waiting to be solved, and no problem has to be solved twice.</p>
      </div>
    </div>

    <div class="logo-position-about">
      <div id="slogan-bg">
        <div class="overlay-transparent"></div>
        <h3>DREAM</h3>
        <h3>DESIGN</h3>
        <h3>DEVELOP</h3>
      </div>
      <!--            <img src="../assets/images/logo_svg_icon.svg" alt="">-->
    </div>
  </div>
</template>

<script>
import { animJs } from "../assets/script/animations";
import anime from "animejs";
export default {
  name: "About",
  mounted() {
    let hello = {
      easing: "easeInOutSine",
      translateY: [100, 0],
      opacity: [0, 1],
      direction: "linear",
      delay: anime.stagger(100),
      duration: 1300
    };
    animJs(".about div", hello);
  }
};
</script>

<style scoped src="../assets/styles/about.css">
</style>