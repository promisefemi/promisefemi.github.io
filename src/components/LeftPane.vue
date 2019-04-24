<template>
  <div class="nav-pane-cover">
    <div class="nav-pane-container">
      <div class="nav-cover">
        <router-link to="/" class="logo">
          <div class="minilogo">
            <!--                        <img src="../assets/images/logo_svg_icon.svg" alt="Logo">-->
            <logo-svg></logo-svg>
            <p>promise</p>
          </div>
          <div class="fulllogo">
            <img src="../assets/images/logo_svg_full_dark.svg" alt>
          </div>
        </router-link>
        <!--                <div class="navigation-bar">-->
        <!--                    <label for="checkbar"><i class="fa fa-bars"></i></label>-->
        <!--                    <input type="checkbox" id="checkbar">-->
        <!--                </div>-->
      </div>
      <div class="navigation">
        <ul>
          <li class="navigation-list">
            <router-link to="/" :exact="true">
              <i class="fa fa-home"></i>
              <p>begin</p>
            </router-link>
          </li>
          <li class="navigation-list">
            <router-link to="/about">
              <i class="fa fa-user"></i>
              <p>me</p>
            </router-link>
          </li>
          <li class="navigation-list">
            <router-link to="/skills" >
              <i class="fa fa-laptop-code"></i>
              <p>skills</p>
            </router-link>
          </li>
          <li class="navigation-list">
            <router-link to="/contact">
              <i class="fa fa-envelope"></i>
              <p>contact</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSvg from "./LogoSvg";

export default {
  name: "LeftPane",
  components: { LogoSvg }
};
</script>

<style scoped src="../assets/styles/leftpane.css">
</style>