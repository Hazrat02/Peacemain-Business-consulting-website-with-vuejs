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
                      <h3 class="title">Transfer Money</h3>
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
                            <h4>Transfer Amount</h4>
                            <p>Enter your Transfer details</p>
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
                            <p>Success Your Transfer</p>
                          </div>
                        </div>
                      </div>
                      <div class="" v-if="page === '1'">
                       
                        <form @submit.prevent="transfer">
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
                                  <div>
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
                                    >From Wallet</label
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
                                      class="form-control"
                                      id="Account"
                                      required
                                      v-model="address"
                                    >
                                      <option selected disabled>Select</option>
                                      <option value="Wallet">
                                        Wallet Account (${{
                                          authUser.main_balance
                                        }})
                                      </option>
                                      <option value="Live">
                                        Live Account (${{
                                          authUser.live_balance
                                        }})
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="centered-line mb-2">
                            <hr />
                            <div class="centered-text">To</div>
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
                                    >To Wallet</label
                                  >
                                  <span style="color: red; font-size: 25px">
                                    *
                                  </span>
                                </div>
                              </div>
                              <div class="form-outline mb-4">
                                <div class="form-outline">
                                  <input
                      disabled
                      v-model="fromAddress"
                      class="form-control disabled"
                      type="text"
                    />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row manual-row"></div>

                          <div
                            class="transaction-list table-responsive"
                            v-if="
                              amount &&
                              method != 'Select Method' &&
                              address != 'Select'
                            "
                          >
                            <div class="">
                              <h3>Review Details:</h3>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <td><strong>Amount</strong></td>
                                  <td>
                                    <span class="amount">{{
                                      this.amount
                                    }}</span>
                                    <span class="currency">$</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>TRXID</strong></td>
                                  <td class="charge2">{{ this.trx }}</td>
                                </tr>
                                <tr>
                                  <td><strong>Payment Method</strong></td>
                                  <td>
                                    {{ this.method }}
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Deposit Wallet</strong></td>
                                  <td
                                    class="total"
                                    v-if="this.address === 'Live'"
                                  >
                                    Profit Account
                                  </td>
                                  <td class="total" v-else>Main Account</td>
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
                              Proceed to Transfer<i
                                class="fa fa-arrow-right"
                              ></i>
                            </button>
                          </div>
                        </form>
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
import DeshboardLayout from "../../Layouts/AdminLayouts.vue";
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

    };
  },

  computed: {
    fromAddress() {
      if (this.address === "Wallet") {
        return "Live Account"; // No filter applied, return all transactions
      } else {
        return "Wallet Account";
      }
    },
  },
  methods: {
    async transfer() {
      this.$setLoading(true);

      const data = {
        id: this.$route.params.id,

        amount: this.amount,
        address: this.address,
      };

      //   if(this.amount > this.authUser.(this.address))

      await axios
        .post("api/transfer", data)
        .then((response) => {
          // transactionStore===================================
          this.authUser = response.data.user;
          this.$toast.success(response.data.message);

          this.$setLoading(false);
        })
        .catch((error) => {
          // Handle the error
          this.$setLoading(false);
          this.$toast.error(error.response.data.message);
        });
      this.$setLoading(false);
    },
  },

  created() {},
};
</script>
<style scoped>.centered-line {
  text-align: center;
  position: relative;
}

.centered-line hr {
  border: none;
  height: 2px;
  background-color: white;
  margin: 0;
}

.centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #041F2C;
  padding: 0 10px;
}



</style>