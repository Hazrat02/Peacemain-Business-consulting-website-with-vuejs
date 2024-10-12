<template>
  <div>
    <DeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
              <!--Page Content-->
              <div class="row">
                <div class="col-xl-12">
                  <div class="site-card">
                    <div class="site-card-header">
                      <h2 class="title">Withdraw Money</h2>
                      <div class="card-header-links">
                        <router-link to="/withdraw/log" class="btn1"
                          >Withdraw History</router-link
                        >
                      </div>
                    </div>
                    <div class="site-card-body">
                      <div class="progress-steps">
                        <div
                          class="single-step current"
                          v-animate
                          data-animation="fadeInRight animated"
                          data-wow-duration="1.5s"
                        >
                          <div class="number">01</div>
                          <div class="content">
                            <h4>Withdraw Amount</h4>
                            <p>Enter your Withdraw details</p>
                          </div>
                        </div>
                        <div
                          class="single-step"
                          v-animate
                          data-animation="fadeInLeft animated"
                          data-wow-duration="1.5s"
                          :class="{ current: page === '2' }"
                        >
                          <div class="number">02</div>
                          <div class="content">
                            <h4>Success</h4>
                            <p>Success Your Withdraw</p>
                          </div>
                        </div>
                      </div>
                      <div class="" v-if="page === '1'">
                        <form @submit.prevent="withdrawNow">
                          <div class="p-5">
                            <div class="">
                              <!-- Password input -->
                              <div
                                style="
                                  display: flex;
                                  justify-content: space-between;
                                "
                              >
                                <div>
                                  <label class="form-label" for="form3Example4"
                                    >Amount (USDT)</label
                                  >
                                  <span style="color: red; font-size: 25px">
                                    *
                                  </span>
                                </div>
                              </div>
                              <div class="form-outline mb-4">
                                <div class="form-outline">
                                  <div style="position: relative">
                                    <input
                                      placeholder="min-10$"
                                      v-model="amount"
                                      class="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="">
                              <!-- Password input -->
                              <div
                                style="
                                  display: flex;
                                  justify-content: space-between;
                                "
                              >
                                <div>
                                  <label class="form-label" for="form3Example4"
                                    >Withdraw Method</label
                                  >
                                  <span style="color: red; font-size: 25px">
                                    *
                                  </span>
                                </div>
                              </div>
                              <div class="form-outline mb-4">
                                <div class="form-outline">
                                  <div style="position: relative">
                                    <select
                                      v-model="method"
                                      class="form-control"
                                      required
                                    >
                                    <option disabled >
                                      Select Method
                                    </option>
                                    <option value="usdt">Usdt (TRC20)</option>
                                    <option value="Bitcoin">Bitcoin</option>
                                    <option value="BNB">BNB (bep20)</option>
                                    <option value="Bank">Bank</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="">
                              <!-- Password input -->
                              <div
                                style="
                                  display: flex;
                                  justify-content: space-between;
                                "
                              >
                                <div>
                                  <label class="form-label" for="form3Example4"
                                    >Account Type</label
                                  >
                                  <span style="color: red; font-size: 25px">
                                    *
                                  </span>
                                </div>
                              </div>
                              <div class="form-outline mb-4">
                                <div class="form-outline">
                                  <div style="position: relative">
                                    <select
                                      v-model="address"
                                      class="form-control"
                                      required
                                    >
                                    <option disabled >
                                      Select
                                    </option>
                                    <option value="Live">Profit Account</option>
                                    <option value="Wallet">Main Account</option>
                            
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                           
                          </div>

                          <div class="row manual-row"></div>

                          <div class="transaction-list table-responsive" v-if="amount && method != 'Select Method' && address != 'Select'">
                            <div class="">
                              <h3>Review Details:</h3>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <td><strong>Amount</strong></td>
                                  <td>
                                    <span class="amount">{{ this.amount }}</span>
                                    <span class="currency">$</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>TRXID</strong></td>
                                  <td class="charge2">{{ this.trx }}</td>
                                </tr>
                                <tr>
                                  <td><strong>Payment Method</strong></td>
                                  <td >
                                    {{ this.method }}
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Withdraw Wallet</strong></td>
                                  <td class="total" v-if="this.address === 'Live'"> Profit Account </td>
                                  <td class="total" v-else> Main Account </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            class="buttons"
                            v-animate
                            data-animation="bounceInRight animated"
                            data-wow-duration="1.5s"
                            :class="Proceed"
                          >
                            <button type="submit" class="btn1">
                              Proceed to Withdraw<i
                                class="fa fa-arrow-right"
                              ></i>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div
                        class="progress-steps-form"
                        v-if="page === '2'"
                        v-animate
                        data-animation="bounceInRight animated"
                        data-wow-duration="1.5s"
                      >
                        <div class="transaction-status centered">
                          <div class="icon success">
                            <i class="fa fa-check"></i>
                          </div>
                          <h2>$ {{ this.amount }} Withdraw Pending</h2>
                          <p>
                            The Withdraw has been Pending added into your account
                          </p>
                          <p>Transaction ID: {{ this.trx }}</p>
                          <router-link to="/withdraw/log" class="btn1">
                            <i class="fa fa-eye"></i>View History
                          </router-link>
                        </div>
                      </div>
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
  </div>
</template>
  
<script>
import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";
import { useAuthUserStore } from "./../../stores/user";
import { transactionStore } from "../../stores/transaction";
import axios from "axios";
export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      authUser: [],
      amount: "",
      address: "Select",
      method: "Select Method",
      page: "1",
      Proceed: "",
      trx: "",

      
    };
  },
  methods: {
    generateTRXId() {
      const prefix = "TRX";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let trxId = prefix;
      
      for (let i = 0; i < 10; i++) {
        trxId += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      this.trx = trxId;
    },
    async withdrawNow() {
      this.$setLoading(true);

      const data = {
        status:'pending',
        method: this.method,
        type: "withdraw",
        amount: this.amount,
        trx: this.trx,
        address: this.address,
      };

      if (this.address === "Wallet" || this.address === "wallet") {
        if (this.amount > this.authUser.main_balance) {
          this.$setLoading(false);
          this.$toast.error(
           `Your balance is too low. Current balance: ${this.authUser.main_balance} $`
           );
    
        } else {
          await axios
            .post("api/deposit", data)
            .then((response) => {
              this.$setLoading(false);
              this.authUser.main_balance =
                this.authUser.main_balance - this.amount;
              this.page = '2'

              // transactionStore===================================

    
              const getTransaction = transactionStore();

              getTransaction.addTransaction(response.data);
            })
            .catch((error) => {
              // Handle the error
              this.$setLoading(false);
              this.$toast.error(
            error.response.data.message,
           );
            });
        }
      } else {
        if (this.amount > this.authUser.live_balance) {
          this.$setLoading(false);
          this.$toast.error(
            `Your balance is too low. Current balance: ${this.authUser.live_balance} $`
           );

        } else {
          await axios
            .post("api/deposit", data)
            .then((response) => {
              this.$setLoading(false);
              this.authUser.live_balance=this.authUser.live_balance - this.amount;
                

              this.page = '2'

              // transactionStore===================================

             
              const getTransaction = transactionStore();

              getTransaction.addTransaction(response.data);
            })
            .catch((error) => {
              // Handle the error
              this.$setLoading(false);
              this.$toast.error(
                error.response.data.message
           );
       
            });
        }
      }
    },
    // async withdrawNow() {
    //   this.Proceed = "bounceOutRight animated";

    //   this.$setLoading(true);

    //   const data = {
    //     status: "pending",
    //     trx: this.trx,
    //     method: this.method,
    //     type: "withdraw",
    //     amount: this.amount,
    //     address: this.address,
    //   };

    //   await axios
    //     .post("api/deposit", data)
    //     .then((response) => {
    //       this.$setLoading(false);
    //       this.page = "2";
    //       const getTransaction = transactionStore();

    //       getTransaction.addTransaction(response.data);
    //     })
    //     .catch((error) => {
    //       this.$setLoading(false);
    //       this.$toast.error(
    //         error.response.data.message,
    //        );
    //     });
    // },
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
    this.generateTRXId()

  },
};
</script>

<style scoped>
</style>