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
                    <h3 class="title">Profile Settings</h3>
                    <router-link class="btn1" to="/change"> Change Password</router-link>
                  </div>
                  <div class="site-card-body">
                    <form enctype="multipart/form-data" @submit.prevent="userUpdate">
                      <div class="row">
                        <div class="col-xl-3">
                          <div class="mb-3">
                            <div class="body-title">Profile image:</div>
                            <div class="wrap-custom-file">
                              <input id="avatar" type="file"   @change="image" accept=".gif, .jpg, .png" />

                              <label for="avatar">
                                <img
                                  class="upload-icon"
                                  src="https://ensurepms.com/assets/global/materials/upload.svg"
                                  alt=""
                                />
                                <span>Update Avatar</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                          <label class=" " for="mobile">Name</label>
                          <input
                            class="form-control"
                            id="mobile"
                            type="text"
                            v-model="name"
                          />
                        </div>
                      <div class="progress-steps-form">
                        <div class="mb-3">
                          <label class=" " for="modalInputEmail1"
                            >Date of birth</label
                          >
                          <input
                            class="form-control"
                            id="modalInputEmail1"
                            type="date"
                            v-model="birth"
                          />
                        </div>
                        <div class="mb-3">
                          <label class=" " for="mobile">Mobile Number</label>
                          <input
                            class="form-control"
                            id="mobile"
                            type="number"
                            v-model="phone"
                          />
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
                              Change profile<i
                                class="fa fa-arrow-right"
                              ></i>
                            </button>
                          </div>
                    </form>
                    
                  </div>
                  
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
import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";
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
      checkbox: "",

      password: "",
      password_confirmation: "",
      profile: "",
      birth: "545",
      phone: "2323",
      name: "",
    };
  },
  methods: {
    image(event) {
      this.profile = event.target.files[0];
    },
    async userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("birth", this.birth);
      formData.append("Phone", this.phone);
      formData.append("name", this.name);
   
      formData.append("profile", this.profile); // Append the file to the FormData object

      await axios
        .post("/api/user/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          (this.authUser = response.data.user),
          console.log(response.data)
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

    this.birth = this.authUser.birth;
    this.phone = this.authUser.Phone;
    this.name = this.authUser.name;

    this.$setLoading(false);
  },
};
</script>

