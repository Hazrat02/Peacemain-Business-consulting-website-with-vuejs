<template>
  <AuthLayout>
    <div class="wd_scroll_wrap">
      <section class="tokens-area">
        <div class="pt-5 mb-3">
          <div class="container accordion-body ">
            <div
              class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-left wow fadeInUp animated"
              data-wow-duration="1.3s"
              style="
                visibility: visible;
                animation-duration: 1.3s;
                animation-name: fadeInUp;
              "
            >
              <h2
                class="wow fadeInUp animated text-spacial"
                data-wow-duration="1.0s"
                style="
                  visibility: visible;
                  animation-duration: 1s;
                  animation-name: fadeInUp;
                "
              >
              Reset Your Password
              </h2>

              <p>
                Forgot your password? No worries. Enter your email address below, and we'll send you a link to reset your password. 
              </p>
              <p>Follow the instructions in the email to create a new password and regain access to your account. If you need further assistance, our support team is here to help.</p>
            </div>
            <div
              class="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-right wow fadeInUp animated"
              data-wow-duration="1.6s"
              style="
           
                visibility: visible;
                animation-duration: 1.6s;
                animation-name: fadeInUp;
              "
            >
              <div class="tokens mr-r50">
                <div class="token-name">Reset Pass</div>
                <div class="token-body" style="position: relative ">
                  <form @submit.prevent="forget" class="">

               
                   
                      <div class="form-outline mb-1">
                        <div style="position: relative">
                          <input
                            name="email"
                            placeholder="Enter Your Email"
                            type="email"
                            v-model="email"
                            class="form-control"
                            required
                          />

                          <div
                            v-if="sendcode"
                            style="
                            background: white;
                              position: absolute;
                              top: 16%;
                              right: 3%;
                              cursor: pointer;
                            "
                            @click="sentCode"
                          >
                            Send Code
                          </div>
                          <div
                            v-if="resendcode"
                            style="
                                 background: white;
                              position: absolute;
                              top: 16%;
                              right: 3%;
                              cursor: pointer;
                            "
                            @click="sentCode"
                          >
                            Resent
                          </div>
                          <div
                            v-if="countdown"
                            style="
                                   background: white;
                              position: absolute;
                              top: 16%;
                              right: 3%;
                              cursor: pointer;
                            "
                          >
                            00:00:{{ countdown }}
                          </div>
                        </div>

                        <div class="d-flex">
                          <label
                            class="form-label justify-content-start"
                            for="form3Example3"
                            >Email address</label
                          > <span style="color: red; font-size: 25px;">*</span>
                        </div>
                      </div>
                   

        
                  
                      <div class="form-outline mb-1">
                        <input 
                          id="userCode"
                          placeholder="Enter Your Code"
                          type="text"
                          v-model="userCode"
                          class="form-control select"
                          required
                        />

                        <div class="d-flex">
                          <label
                            class="form-label justify-content-start"
                            for="userCode"
                            >Code</label
                          ><span style="color: red; font-size: 25px">*</span>
                        </div>
                      </div>

                      <!-- Password input -->
                      <div class="form-outline mb-1">
                        <div style="position: relative">
                          <input
                            name="password"
                            placeholder="******"
                            v-model="password"
                            :type="passwordFieldType"
                            id="password"
                            class="form-control"
                            required
                          />

                          <i
                            style="
                              position: absolute;
                              top: 15%;
                              right: 5%;
                              font-size: 25px;
                            "
                            class="fa"
                            :class="icon"
                            @click="togglePasswordVisibility"
                          ></i>
                        </div>

                        <div class="d-flex">
                          <label class="form-label" for="password"
                            >New password</label
                          >
                          <span style="color: red; font-size: 25px">*</span>
                        </div>
                      </div>
                      <div class="form-outline mb-1">
                        <input
                          name="password_confirmation"
                          placeholder="******"
                          :type="passwordFieldType"
                          v-model="password_confirmation"
                          class="form-control"
                          required
                        />

                        <div class="d-flex">
                          <label class="form-label" for="password_confirmation"
                            >Retype password</label
                          >
                          <span style="color: red; font-size: 25px">*</span>
                        </div>
                      </div>


                 

                      <button class="btn1 mt-3" type="submit">
                        Reset Now
                      </button>
               
                  </form>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  </AuthLayout>
</template>




<script>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import axios from "axios";

// import { useAuthUserStore } from "./../../stores/user";

// import { notify } from 'vue3-notify'
export default {
  components: {
    AuthLayout,
  },
  data() {
    return {


      authEmail: "",
  
      passwordType: "password",

      showicon: true,
      sendcode: true,
      showPassword: false,
      resendcode: false,
      userCode: "",
      countdown: "",
     
      email: "",
      password: "",
      password_confirmation: "",
  
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showicon ? "fa-eye-slash" : "fa-eye";
    },
  },

  created() {
    // this.$setLoading(false);
  },

  methods: {

    async forget() {

      this.$setLoading(true);

      if (this.oldCode == this.userCode) {
        const data = {
        email: this.authEmail,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      await axios
        .post("/api/auth/forget", data)
        .then((response) => {
          this.$router.push("/login");
          this.$toast.success(
         response.data.message
          );
        })
        .catch((error) => {
          // Handle the error

          this.$toast.error(
            error.response.data.message,
           );
        });
      this.$setLoading(false);
      } else {
        this.$setLoading(false);
        this.$toast.error(
        "Code do not match!"
      );}

     
    },

    async sentCode() {
      (this.sendcode = false), (this.countdown = "60");
      this.startCountdown();

      const data = {
        useReffer: "",
        type: "forget",
        email: this.email,
        sub: "Fairlight forget code",
        bodytext: "Your secret code is:",
        footertext: "Do not share our code anyone.It is very importent",
        btn: "",
      };
      await axios
        .post("/api/auth/forgetcode", data)
        .then((response) => {
          this.oldCode = response.data.code;
          this.authEmail = response.data.email;
        })
        .catch((error) => {
          this.$toast.error("Server busy now.Please try later!");
         
        });
    },
    startCountdown() {
      if (this.countdown > "0") {
        setTimeout(() => {
          this.countdown--;
          this.startCountdown();
        }, 1000);
      } else {
        this.resendcode = true;
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;
    },
   

  },
};
</script>









<style scoped>
.token-body {
  width: 100%;

  background: linear-gradient(
    to right,
    rgba(36, 39, 48, 0.833) 0%,
    rgba(10, 47, 58, 0.568) 100%
  ) !important;
  backdrop-filter: blur(1440px) !important; /* Adjust the blur value as needed */
}
.tokens-area {
  background:transparent !important;

}
/* input{
  width:320px;
} */

/* Custom, iPhone Retina */ 
@media only screen and (max-width : 500px) {
  .token-body {
 
    padding: 30px 10px !important;}
	

}
</style>