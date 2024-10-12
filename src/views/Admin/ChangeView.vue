<template>
  <DeshboardLayout>
    <div class="page-container">
      <div class="main-content">
        <div class="section-gap">
          <div class="container-fluid">
            <!--Page Content-->
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="site-card">
                  <div class="site-card-header">
                    <h3 class="title">Change Password</h3>

                  </div>

                  <div class="p-5">
                    <form @submit.prevent="userUpdate" class="mt-5">
                      <!-- Password input -->

                      <div class="form-outline mb-4">
                        <div class="form-outline">
                          <div style="position: relative">
                            <input
                              name="password"
                              placeholder="******"
                              v-model="old"
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
                              >Old Password</label
                            >
                            <span style="color: red; font-size: 25px"> * </span>
                          </div>
                        </div>
                      </div>
                      <div class="form-outline mb-4">
                        <div class="form-outline">
                          <div style="position: relative">
                            <input
                              placeholder="******"
                              v-model="password"
                              :type="passwordFieldType"
                              class="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div
                          style="display: flex; justify-content: space-between"
                        >
                          <div>
                            <label class="form-label" for="form3Example4"
                              >New Password</label
                            >
                            <span style="color: red; font-size: 25px"> * </span>
                          </div>
                        </div>
                      </div>
                      <div class="form-outline mb-4">
                        <div class="form-outline">
                          <div style="position: relative">
                            <input
                              placeholder="******"
                              v-model="password_confirmation"
                              :type="passwordFieldType"
                              id="password"
                              class="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div
                          style="display: flex; justify-content: space-between"
                        >
                          <div>
                            <label class="form-label" for="form3Example4"
                              >Retype New Password</label
                            >
                            <span style="color: red; font-size: 25px"> * </span>
                          </div>
                        </div>
                      </div>

                      <div
                        class="buttons"
                        v-animate
                        data-animation="bounceInRight animated"
                        data-wow-duration="1.5s"
                        :class="Proceed"
                      >
                        <button type="submit" class="btn1">
                          Change Now<i class="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  <!-- <div class="site-card-body">
                    <div class="progress-steps-form">
                      <form
                        action="https://ensurepms.com/user/password-store"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="0t4MsdBptzdSF63hnFPvDGRPJcmiV22dIGJclYHp"
                        />

                        <div class="row">
                          <div class="col-xl-12 col-md-12">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Current Password</label
                            >
                            <div class="input-group">
                              <input
                                type="password"
                                name="current_password"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-xl-6 col-md-12">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >New Password</label
                            >
                            <div class="input-group">
                              <input
                                type="password"
                                name="new_password"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-xl-6 col-md-12">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Confirm Password</label
                            >
                            <div class="input-group">
                              <input
                                type="password"
                                name="new_confirm_password"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-xl-6 col-md-12">
                            <button type="submit" class="site-btn blue-btn">
                              Change Password
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
            <!--Page Content-->
          </div>
        </div>
      </div>
    </div>
  </DeshboardLayout>
</template>
    
  <script>
import DeshboardLayout from "./../../Layouts/AdminLayouts.vue";
import { useAuthUserStore } from "../../stores/user";
import { isAuthenticated } from "./../../middleware/index";

import axios from "axios";
export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      authUser: [],
      showicon: true,
      showPassword: false,
      old: "",

      password: "",
      password_confirmation: "",
    };
  },

  methods: {
    async userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object

      formData.append("old", this.old);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);

      await axios
        .post("/api/change", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          (this.authUser = response.data.user),
          this.$toast.success(
                response.data.message
           );
           
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$toast.error(
                error.response.data.message
           );
         
        });

      this.$setLoading(false);
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;
    },
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }

    this.$setLoading(false);
  },

  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showicon ? "fa-eye-slash" : "fa-eye";
    },
  },
};
</script>

