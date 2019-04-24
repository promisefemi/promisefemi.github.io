<template>
  <div class="contact">
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
          <form action @submit.prevent="submit">
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
            <button class="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Social from "./Social";
import { animJs } from "../assets/script/animations";

export default {
  name: "Contacts",
  components: { Social },
  data: () => ({
    formdata: {}
  }),
  methods: {
    submit() {
      const { name, email, phone, subject, message } = this.formdata;
      if (name && email && phone && subject && message === ("" || null)) {
        return false;
      } else if (name === ("" || null)) {
      } else if (email === ("" || null)) {
      } else if (subject === ("" || null)) {
      } else if (message === ("" || null)) {
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