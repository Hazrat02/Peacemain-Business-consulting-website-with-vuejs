<template>
  <AuthLayout>
    <div class="">
      <section class="tokens-area">
        <div class="pt-5">
          <div class="container accordion-body">
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
              Log In to Your Account
              </h2>

              Welcome back! Please enter your email and password to access your account. If you don't have an account yet, you can easily create one by signing up. For any issues or assistance, please contact our support team.
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
                <div class="token-name">LOGIN</div>
                <div class="token-body">
                  <form @submit.prevent="login" class="mt-5">
                    <!-- Email input -->

                    <div class="form-outline mb-2">
                      <input
                        name="email"
                        placeholder="Enter Your Email"
                        v-model="email"
                        type="email"
                        class="form-control"
                        required
                      />
                      <div class="d-flex">
                        <label>Email address</label>
                        <span style="color: red; font-size: 25px"> * </span>
                      </div>
                    </div>

                    <!-- Password input -->

                    <div class="form-outline mb-4">
                      <div class="form-outline">
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
                      </div>

                      <div
                        style="display: flex; justify-content: space-between"
                      >
                        <div>
                          <label class="form-label" for="form3Example4"
                            >Password</label
                          >
                          <span style="color: red; font-size: 25px"> * </span>
                        </div>
                        <router-link
                          to="/forget"
                          style="
                            color: cadetblue;
                            cursor: pointer;
                            text-decoration: underline;
                          "
                          >forgot password
                        </router-link>
                      </div>
                    </div>

                    <button type="submit" class="btn1">LogIn Now</button>
                  </form>
                  <div class="mt-5">
                    <label
                      >Don’t have an account with us? /<RouterLink
                        style="color: green"
                        to="/register"
                        >Sign up</RouterLink
                      ></label
                    >
                  </div>
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
import { POSITION } from "vue-toastification";

import { useAuthUserStore } from "./../../stores/user";
import { login } from "../../middleware/index";

// import { notify } from 'vue3-notify'
export default {
  components: {
    AuthLayout,
  },
  data() {
    return {
      showicon: true,
      showPassword: false,
      email: "",
      password: "",
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
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;
    },

    async login() {
      this.$setLoading(true);
      const data = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post("/api/auth/login", data)
        .then((response) => {
          login(response.data.authorisation.token);

          const userStore = useAuthUserStore();

          userStore.setAuthUser(response.data.user);
          if (response.data.user.role == "0") {
            this.$router.push("/admin/dashboard");
          } else {
            this.$router.push("/dashboard");
          }

          this.$setLoading(false);
          this.$toast.success("User succesfully login");
        })
        .catch((error) => {
          // Handle the error
          this.$setLoading(false);
          // console.log(error);
          this.$toast.error(error.response.data.message);

          
        });

      this.$setLoading(false);
    },
  },
};
</script>

<style scoped>
.token-body {
  background: linear-gradient(
    to right,
    rgba(36, 39, 48, 0.833) 0%,
    rgba(10, 47, 58, 0.568) 100%
  ) !important;
  backdrop-filter: blur(
    1440px
  ) !important; /* Adjust the blur value as needed */
}
.tokens-area {
  background: transparent !important;
}
</style>