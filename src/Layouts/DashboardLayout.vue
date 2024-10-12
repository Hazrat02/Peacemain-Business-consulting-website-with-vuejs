<template>
  <!-- <HomeLayout> -->

    <div id="preloader" v-if="this.$isLoading()">
    <div id="status">
      <img style="border-radius: 100px;"
        src="./../assets/frontend/images/banner/loader.gif"
        id="preloader_image"
        alt="loader"
      />
    </div>
  </div>
  <section class="dark-theme">
    <div class="panel-layout" :class="sideShow">
      <!--Header-->
      <div class="panel-header">
        <div class="logo">
          <router-link to="/">
            <img
              class="logo-unfold"
              src="./../assets/frontend/images/logo/logo2.gif"
              alt="Logo"
            />
            <img
              class="logo-fold"
              src="./../assets/frontend/images/logo/logo2.gif"
              alt="Logo"
            />
          </router-link>
        </div>
        <div class="nav-wrap">
          <div class="nav-left">
            <button class="sidebar-toggle" @click="sidebar">
              <i class="fa fa-arrow-left"></i>
              <!-- Replaced with Font Awesome icon -->
            </button>
            <div class="mob-logo">
              <router-link to="/">
                <img style="height: 60px;border-radius: 20px;"
                  src="./../assets/frontend/images/logo/logo2.gif"
                  alt="Site Name"
                />
              </router-link>
            </div>
          </div>
          <div class="nav-right">
            <div class="single-nav-right">
           
              <div class="single-right">
                <button
                  type="button"
                  class="item"
                 @click="dropdown"
                >
                  <i class="fa fa-user"></i>
                  <!-- Replaced with Font Awesome icon -->
                </button>
                <ul class="dropdown-menu " :class="dropShow">
                  <li>
                    <router-link to="/account"
                      class="dropdown-item"
                      type="button"
                      ><i class="fa fa-cog"></i>Settings</router-link
                    >
                  </li>
                  <li>
                   <router-link to="/change"
                      class="dropdown-item"
                      type="button"
                    >
                      <i class="fa fa-lock"></i>Change Password
                       </router-link>
                  </li>

                  <li class="mobile-screen-show">
                    <router-link to="/kyc"
                      class="dropdown-item"
                    
                    >
                      <i class="fa fa-id-card"></i>KYC
                    </router-link>
                  </li>
                  <li class="mobile-screen-show">
                    <router-link to="/transaction"
                      class="dropdown-item"
                    
                    >
                      <i class="fa fa-bar-chart"></i>Transaction
                    </router-link>
                  </li>
            
                  <li class="logout">
                    <a
                     @click="logout"
                      class="dropdown-item"
                     style="cursor: pointer;"
                      ><i class="fa fa-power-off"></i>Logout</a
                    >
                  </li>
                </ul>
              </div>

             
            </div>
          </div>
        </div>
      </div>
      <!--/Header-->

      <div class="desktop-screen-show"  >
        <div class="side-nav">
          <div class="side-wallet-box default-wallet mb-0">
            <div class="user-balance-card">
              <div class="wallet-name">
                <div class="name">Account Balance</div>
                <div class="default green-color" v-if=" authUser.id_kyc === 'success' || authUser.ad_kyc  === 'success' || authUser.ec_kyc  === 'success' "> <i class="fa fa-check"></i> Verified</div>
                <div class="default yellow-color" v-if=" authUser.id_kyc === 'pending' || authUser.ad_kyc  === 'pending' || authUser.ec_kyc  === 'pending' "><router-link to="/kyc" > <i class="fa fa-spinner"></i> Pending </router-link></div>
                <div class="default red-color" v-if="(authUser.id_kyc === 'rejected' || authUser.ad_kyc === 'rejected' ||authUser.ec_kyc === 'rejected') && (authUser.id_kyc != 'pending' && authUser.ad_kyc  != 'pending' && authUser.ec_kyc  != 'pending') && (authUser.id_kyc != 'success' && authUser.ad_kyc != 'success' && authUser.ec_kyc != 'success')"><router-link to="/kyc" ><i class="fa fa-warning"></i> Unverified</router-link></div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-wallet"></i>Main Wallet
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">${{ authUser.main_balance }}</div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-landmark"></i>Profit Wallet
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">${{ authUser.live_balance }}</div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-landmark"></i>Total Wallet Balance
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">${{
                        Number(authUser.main_balance) +
                        Number(authUser.live_balance)
                      }}</div>
              </div>
            </div>
            <div class="actions">
              <router-link to="/deposit"
                class="user-sidebar-btn"
                ><i class="fa fa-arrow-down"></i>Deposit
                <!-- Replaced with Font Awesome icon -->
              </router-link>
               <router-link to="/withdraw"
              
                class="user-sidebar-btn"
                ><i class="fa fa-arrow-up"></i>Withdraw
                <!-- Replaced with Font Awesome icon -->
               </router-link>
            </div>
          </div>
          <div class="side-nav-inside">
            <ul class="side-nav-menu">
              <li class="side-nav-item" :class="{
              active: this.$route.path === '/dashboard'
            }">
                 <router-link to="/dashboard"
                  ><i class="fa fa-th"></i><span>Dashboard</span>
                  <!-- Replaced with Font Awesome icon -->
                 </router-link>
              </li>


              <li class="side-nav-item" :class="{
              active: this.$route.path === '/transaction',
            }">
                <router-link to="/transaction">
                  <i class="fa fa-inbox"></i><span>All Transactions</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
              <!-- <li class="side-nav-item">
                <a href="https://ensurepms.com/user/my-rewards"
                  ><i class="fa fa-gift"></i><span>My Rewards</span>
                </a>
              </li> -->

              <li class="side-nav-item" :class="{
              active: this.$route.path === '/deposit',
            }">
                <router-link to="/deposit">
                  <i class="fa fa-arrow-down"></i><span>Deposit</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
              <li class="side-nav-item" :class="{
              active: this.$route.path === '/kyc',
            }">
                <router-link to="/kyc">
                  <i class="fa fa-file"></i><span> KYC</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
              <li class="side-nav-item" :class="{
              active: this.$route.path === '/deposit/log',
            }">
                <router-link to="/deposit/log">
                  <i class="fa fa-arrow-circle-o-down"></i><span> Deposit Log</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
              <li class="side-nav-item" :class="{
              active: this.$route.path === '/withdraw/log',
            }">
                <router-link to="/withdraw/log">
                  <i class="fa fa-arrow-circle-up"></i><span> Withdraw  Log</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
         
              <li class="side-nav-item" :class="{
              active: this.$route.path === '/account',
            }">
                <router-link to="/account">
                  <i class="fa fa-cog"></i><span> Settings</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
         

   
            </ul>
          </div>
        </div>
      </div>

      <!-- end sidebar -->

         <slot />
      <!-- Show in 575px in Mobile Screen -->
      <div class="mobile-screen-show">
        <div class="bottom-appbar">
          <router-link to="/dashboard" :class="{
              active: this.$route.path === '/dashboard',
            }">
            <i class="fa fa-tachometer"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
          <router-link to="/deposit" :class="{
              active: this.$route.path === '/deposit',
            }">
            <i class="fa fa-download"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
          <router-link to="/withdraw" :class="{
              active: this.$route.path === '/withdraw',
            }">
            <i class="fa fa-arrow-up"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
          <router-link to="/transaction" :class="{
              active: this.$route.path === '/transaction',
            }">
            <i class="fa fa-exchange"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
          <router-link to="/account" :class="{
              active: this.$route.path === '/account',
            }">
            <i class="fa fa-cogs"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
         
        </div>
      </div>

      <!-- Show in 575px in Mobile Screen End -->

      <!-- Automatic Popup -->

      <!-- /Automatic Popup End -->
    </div>
    <!--/Full Layout-->
  </section>

  <!-- </HomeLayout> -->
</template>
<script>
import HomeLayout from "./HomeLayout.vue";
import {  logout } from "./../middleware/index";
import { useAuthUserStore } from "./../stores/user";
import axios from 'axios';

export default {
  components: {
    HomeLayout,
  },

  data() {
    return {
    
      showSidebar: false,
      showDrop: false,
      authUser :[],
    };
  },
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    sideShow() {
      if (this.showSidebar == true) {
        return "nav-folded";
      } else {
        return "";
      }
    },
    dropShow() {
      if (this.showDrop == true) {
        return "show dropdown-menu-end";
      } else {
        return "";
      }
    },
  },

  async created() {
   
  },

  methods: {
    sidebar() {
      if (this.showSidebar == true) {
        this.showSidebar = false;
      } else {
        this.showSidebar = true;
      }
    },
    dropdown() {
      if (this.showDrop == true) {
        this.showDrop = false;
      } else {
        this.showDrop = true;
      }
    },
    async logout() {
      this.$setLoading(true);
      logout();
      await axios
        .post("api/auth/logout")
        .then((response) => {
          this.$setLoading(false);

          this.$toast.info(response.data.message);

          // Change the authenticated value to false

          this.$router.push("/login");
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$toast.error(error.response.data.message);
        });
      this.$setLoading(false);
    },
  },
  
  async created() {

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
       
      }

      if (this.authUser.role === "0") {
        this.$router.push("/admin/dashboard");
      }
    
  },

};

</script>