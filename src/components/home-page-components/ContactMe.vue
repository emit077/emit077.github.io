<template>
  <div
    class="app-padding py-15 my-15"
    id="lets-talk"
    :style="style"
    :class="$vuetify.display.mobile ? 'pt-5' : 'text-h6'"
  >
    <p
      class="shadow-text"
      no-gutters
      :class="$vuetify.display.mobile ? 'mb-n6' : 'mb-n15'"
      v-bind="shado_text_animation"
    >
      Hire Me
    </p>
    <v-row align="center" justify="center">
      <v-col sm="12" cols="12" class="justify-center">
        <common-content-wrapper
          :title="title"
          :subtitle="subtitle"
          :description="description"
        />
        <circle-outline
          class="float-right move-animation-2"
          :stroke="'#F3B24A'"
          :stroke_width="5"
          style="width: 9px"
          v-if="!$vuetify.display.mobile"
        />
      </v-col>
      <v-col
        sm="12"
        cols="12"
        class="text-center"
        justify="right"
        :class="$vuetify.display.mobile ? '' : 'pl-10'"
      >
        <SociaLinks />

        <circle-outline
          class="move-animation-4 mb-n13"
          :stroke="'#7986FD'"
          style="width: 25px"
        />
        <circle-outline
          class="float-left move-animation-2 mt-n15"
          :stroke="'#F3B24A'"
          :stroke_width="5"
          style="width: 9px"
          v-if="$vuetify.display.mobile"
        />
      </v-col>
    </v-row>
    <zig-zag-line
      class="move-animation-2"
      :stroke="'#1F7949'"
      :height="$vuetify.display.mobile ? 9 : 13"
      :class="$vuetify.display.mobile ? 'mt-8' : ''"
    />
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
.send-btn {
  box-shadow: 0 7px 20px 0 rgba(var(--v-theme-stroke-2), 0.3);
}

.contact-card {
  backdrop-filter: blur(3px);
  backdrop-filter: saturate(200%) blur(3px);
  background-color: rgb(var(--v-theme-fill-1), 0.1);
  border-radius: 5px;
  max-width: 400px;
  position: relative;
  z-index: 10;
}

.form-input {
  textarea,
  input {
    width: 100%;
    background-color: rgb(var(--v-theme-stroke-1), 0.3);
    color: rgb(var(--v-theme-stroke-3), 1);
    border-radius: 5px;
    height: 40px;
    margin-bottom: 8px;
    padding: 10px;
    transition-duration: 0.8s;
  }

  textarea:focus,
  input:focus {
    outline: none;
    background-color: rgb(var(--v-theme-fill-1), 0.1);
    border: 2px solid rgb(var(--v-theme-fill-1), 0.6);
  }

  .error {
    border: 2px solid rgba(209, 0, 0, 0.5) !important;
    position: relative;
    animation: shake 0.3s ease-in-out;
  }
}
</style>
<!--   -->
<script>
import CommonContentWrapper from "@/components/other-components/CommonContentWrapper";
import ZigZagLine from "@/components/other-components/shapes/ZigZagLine";
import CircleOutline from "@/components/other-components/shapes/CircleOutline";
import SociaLinks from "@/components/other-components/SociaLinks";
import { createUser } from "@/firebase-config";

export default {
  name: "ContactMe",
  components: {
    CommonContentWrapper,
    ZigZagLine,
    CircleOutline,
    SociaLinks,
  },
  data() {
    return {
      title: "Contact me",
      subtitle: "Get in Touch",
      description: `Hey there! 🚀 Looking for someone to bring your ideas to life? I'm your go-to! With skills in end-to-end product development, I'm all about creativity and innovation. Let’s team up to create some epic projects that stand out.<br><br> 💡 Whether you need help with UI/UX design, web development or product development, I’ve got you covered! Hit me up if you want to chat about how we can work together—I’m just a message away! Just shoot me an email at <a
            href="mailto:emitsahu077@gmail.com"
            class="text-stroke-2 text-decoration-none text-h6"
            >emitsahu077@gmail.com
          </a>. Let’s make something awesome happen! ✌️✨`,
      // // description:
      // //   "Any type of query or discussion I’m open to talk. Drop a message and will get back to you. <br><br> Or Alternatively, shoot me an email at.",
      //  form
      name: "",
      mobile: "",
      email: "",
      message: "",
      valid: false,
      btn_loading: false,
      placeholder: {
        name: "",
        mobile: "",
        email: "",
        msg: "",
      },
      speed: 300,
      counter: 0,
    };
  },
  mounted() {
    // for (let key in this.placeholder) {
    //   let val = this.placeholder[key];
    //   this.placeholder[key] = "";
    //   this.placeholderText(val, key, 0);
    // }
  },
  methods: {
    submitForm() {
      let is_error = this.validateForm();
      if (is_error) return false;
      this.btn_loading = true;
      let params = {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        message: this.message,
        date_time: new Date(),
      };
      createUser(params)
        .then(
          function (response) {
            this.name = "";
            this.mobile = "";
            this.email = "";
            this.message = "";
            this.showSnakeBar(
              "success",
              "your response has been recorded. I'll get back to you as soon as possible"
            );
          }.bind(this)
        )
        .catch(
          function (error) {
            this.showSnakeBar("error", "Something went wrong, Please try again letter.");
          }.bind(this)
        )
        .finally();
      {
        this.btn_loading = false;
      }
    },
    validateForm() {
      let error_count = 0;
      this.validateInput(this.name, "name", true) ? error_count++ : "";
      this.validateMobile(this.mobile, true) ? error_count++ : "";
      this.validateEmail(this.email, true) ? error_count++ : "";
      this.validateInput(this.message, "message", true) ? error_count++ : "";
      return error_count > 0 ? true : false;
    },
    validateEmail(email, empty_check = false) {
      if (empty_check && !email) {
        this.appendClass("email", true);
        return true;
      } else if (email && !/.+@.+\..+/.test(email)) {
        this.appendClass("email", true);
        return true;
      } else {
        this.appendClass("email", false);
        return false;
      }
    },
    validateMobile(mobile, empty_check = false) {
      if (empty_check && !mobile) {
        this.appendClass("mobile", true);
        return true;
      } else if (mobile && !/^[6-9][0-9]{9}$/.test(mobile)) {
        this.appendClass("mobile", true);
        return true;
      } else {
        this.appendClass("mobile", false);
        return false;
      }
    },
    validateInput(input, id, empty_check = false) {
      if (empty_check && !input) {
        this.appendClass(id, true);
        return true;
      } else {
        this.appendClass(id, false);
        return false;
      }
    },
    appendClass(id, error = true) {
      let element = document.getElementById(id);
      if (error) element.classList.add("error");
      else element.classList.remove("error");
    },
    restrictChar(event) {
      let digitPeriodRegExp = new RegExp("\\d|\\.");
      if (
        event.ctrlKey || // (A)
        event.altKey || // (A)
        typeof event.key !== "string" || // (B)
        event.key.length !== 1
      ) {
        // (C)
        return;
      }
      if (!digitPeriodRegExp.test(event.key)) {
        event.preventDefault();
      }
    },
    // async placeholderText(text, filed_name, i) {
    //   this.counter++;
    //   this.placeholder[filed_name] += text.charAt(i);
    //   i++;
    //   if (text == this.placeholder[filed_name]) {
    //     i = 0;
    //     this.placeholder[filed_name] = "";
    //   }
    //   if (this.counter <= 21)
    //     setTimeout(this.placeholderText(text, filed_name, i), this.speed);
    // },
  },
};
</script>
