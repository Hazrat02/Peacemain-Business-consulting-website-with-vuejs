<template>
  <!-- <HomeLayout> -->

  <div id="preloader" v-if="this.$isLoading()">
    <div id="status">
      <img
        style="border-radius: 100px"
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
                <img
                  style="height: 60px; border-radius: 20px"
                  src="./../assets/frontend/images/logo/logo2.gif"
                  alt="Site Name"
                />
              </router-link>
            </div>
          </div>
          <div class="nav-right">
            <div class="single-nav-right">
              <div class="single-right">
                <button type="button" class="item" @click="dropdown">
                  <i class="fa fa-user"></i>
                  <!-- Replaced with Font Awesome icon -->
                </button>
                <ul class="dropdown-menu" :class="dropShow">
                  <li>
                    <router-link
                      to="/admin/change"
                      class="dropdown-item"
                      type="button"
                    >
                      <i class="fa fa-lock"></i>Change Password
                    </router-link>
                  </li>

                  <li class="logout">
                    <a
                      @click="logout"
                      class="dropdown-item"
                      style="cursor: pointer"
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

      <div class="desktop-screen-show">
        <div class="side-nav">
          <div class="side-wallet-box default-wallet mb-0">
            <div class="user-balance-card">
              <div class="wallet-name">
                <div class="name">All Details</div>
                <div class="default green-color">
                  <i class="fa fa-check"></i> Admin
                </div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-wallet"></i>Total Deposit
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">${{ sumtrx('deposit','success') }}</div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-landmark"></i>Total Withdraw
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">${{ sumtrx('withdraw','success') }}</div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-landmark"></i>Pending Deposit
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">
                  ${{ sumtrx('deposit','pending') }}
                </div>
              </div>
            </div>
          </div>
          <div class="side-nav-inside">
            <ul class="side-nav-menu">
              <li
                class="side-nav-item"
                :class="{
                  active: this.$route.path === '/admin/dashboard',
                }"
              >
                <router-link to="/admin/dashboard"
                  ><i class="fa fa-dashboard"></i><span>Dashboard</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>

              <li
                class="side-nav-item"
                :class="{
                  active: this.$route.path === '/admin/user',
                }"
              >
                <router-link to="/admin/user">
                  <i class="fa fa-users"></i><span>All User</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>

              <li
                class="side-nav-item"
                :class="{
                  active: this.$route.path === '/admin/leads',
                }"
              >
                <router-link to="/admin/leads">
                  <i class="fa fa-wechat"></i><span>Contact Manage</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
              <li
                class="side-nav-item"
                :class="{
                  active: this.$route.path === '/admin/leadcollect',
                }"
              >
                <router-link to="/admin/leadcollect">
                  <i class="fa fa-empire"></i><span> Leads manage</span>
                  <!-- Replaced with Font Awesome icon -->
                </router-link>
              </li>
              <li
                class="side-nav-item"
                :class="{
                  active: this.$route.path === '/admin/transaction',
                }"
              >
                <router-link to="/admin/transaction">
                  <i class="fa fa-arrow-circle-o-down"></i
                  ><span> transaction Log</span>
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
          <router-link
            to="/admin/dashboard"
            :class="{
              active: this.$route.path === '/admin/dashboard',
            }"
          >
            <i class="fa fa-tachometer"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
          <router-link
            to="/admin/leads"
            :class="{
              active: this.$route.path === '/admin/leads',
            }"
          >
            <i class="fa fa-wechat"></i>
          </router-link>
          <router-link
            to="/admin/user"
            :class="{
              active: this.$route.path === '/admin/user',
            }"
          >
            <i class="fa fa-users"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
          <router-link
            to="/admin/transaction"
            :class="{
              active: this.$route.path === '/admin/transaction',
            }"
          >
            <i class="fa fa-exchange"></i>
            <!-- Replaced with Font Awesome icon -->
          </router-link>
          <router-link
            to="/admin/leadcollect"
            :class="{
              active: this.$route.path === '/admin/leadcollect',
            }"
          >
            <i class="fa fa-empire"></i>
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
import { logout } from "./../middleware/index";
import { useAuthUserStore } from "./../stores/user";
import { transactionStore } from "./../stores/transaction";
import axios from "axios";

export default {
  components: {
    HomeLayout,
  },

  data() {
    return {
      showSidebar: false,
      showDrop: false,
      authUser: [],
      transaction: [],
    };
  },
  computed: {

    sumtrx() {
    return (type, status) => {
      const filteredTransactions = this.transaction.filter(
        (transaction) =>
          transaction.type === type && transaction.status === status
      );

      return filteredTransactions.reduce(
        (total, transaction) => total + Number(transaction.amount), // Ensure numeric addition
        0
      );
    };
  },
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

  async created() {},

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
    if (this.authUser.role != "0") {
      this.$router.push("/dashboard");
    }

    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.allUserTransaction();
    }
  },
};
</script>