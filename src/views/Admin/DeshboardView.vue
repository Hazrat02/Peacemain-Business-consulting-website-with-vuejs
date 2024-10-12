<template>
  <div>
    <AdminDeshboardLayout>
      <!-- Sale & Revenue Start -->

      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
   
                <section class="team2-area pd-b50">
  
                    <div class="row">
                      <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        data-wow-duration="1.3s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="team-list pb-3">
                          <div class="conte">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="details">
                                  <i
                                    style="
                                      font-size: 50px;

                                    "
                                    class="fa fa-users"
                                  ></i>
                                </div>
                              </div>

                              <div class="dright">
                                <div class="content">
                                  <h3>    {{ allUser.length }}</h3>
                                  <span>Total Users</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInRight animated"
                      >
                        <div class="team-list pb-3">
                          <div class="conte">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="details">
                                  <i
                                    style="
                                      font-size: 50px;

                                    "
                                    class="fa fa-download"
                                  ></i>
                                </div>
                              </div>

                              <div class="dright">
                                <div class="content">
                                  <h3>   {{ filteredDeposit.length }}</h3>
                                  <span>Total Deposit</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInLeft animated"
                      >
                        <div class="team-list pb-3">
                          <div class="conte">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="details">
                                  <i
                                    style="
                                      font-size: 50px;

                                    "
                                    class="fa fa-upload"
                                  ></i>
                                </div>
                              </div>

                              <div class="dright">
                                <div class="content">
                                  <h3> {{ filteredWithdraw.length }}</h3>
                                  <span>Total Withdrawals</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        data-wow-duration="1.8s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="team-list pb-3">
                          <div class="conte">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="details">
                                  <i
                                    style="
                                      font-size: 50px;

                                    "
                                    class="fa fa-wechat"
                                  ></i>
                                </div>
                              </div>

                              <div class="dright">
                                <div class="content">
                                  <h3>{{ contactData.length }}</h3>
                                  <span>Total SMS</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                </section>
          


              <div class="">
                <div class="row justify-content-between">
                  <div
                    class=""
                  >
                    <h3 class="text-start">Recent Registrations</h3>

                    <div class="table-responsive">
                      <table
                        class="table text-start align-middle table-bordered table-hover mb-0"
                      >
                        <thead>
                          <tr class="text-white">
                            <th>SL. Number</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(user, index) in filteredUsers"
                            :key="index"
                          >
                            <th scope="row">{{ index }}</th>
                            <th scope="row">{{ index }}</th>
                            <td>{{ user.name }}</td>

                            <td>{{ user.email }}</td>
                            <td>
                              <router-link
                                :to="{
                                  name: 'userdetails',
                                  params: { id: user.id },
                                }"
                              >
                                <i class="fa fa-eye" style="color: beige"></i
                              ></router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class=""
                  >
                    <h3 class="">Recent Transactions</h3>

                    <div class="table-responsive">
                      <table
                        class="table text-start align-middle table-bordered table-hover mb-0"
                      >
                        <thead>
                          <tr class="text-white">
                            <th>SL. Number</th>
                            <th>User Id</th>
                            <th>Type</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in filteredTrx" :key="index">
                            <th scope="row">{{ index }}</th>
                            <td>{{ item.user_id }}</td>

                            <td>{{ item.type }}</td>
                            <td>{{ item.amount }}$</td>
                            <td>
                              <router-link
                                :to="{
                                  name: 'userdetails',
                                  params: { id: item.user_id },
                                }"
                              >
                                <i class="fa fa-eye" style="color: beige"></i
                              ></router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="">
                    <h3 class="">Recent Message Details</h3>

                    <div class="table-responsive">
                      <table
                        class="table text-start align-middle table-bordered table-hover mb-0"
                      >
                        <thead>
                          <tr class="text-white">
                            <th>SL. Number</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in filteredSms" :key="index">
                            <th scope="row">{{ index }}</th>
                            <td>{{ item.name }}</td>

                            <td>{{ item.email }}</td>
                            <td>{{ item.sms }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDeshboardLayout>
  </div>
</template>
  
<script>
import { useAuthUserStore } from "../../stores/user";
import { transactionStore } from "../../stores/transaction";
import { contactStore } from "../../stores/contact";

import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue";
export default {
  components: {
    AdminDeshboardLayout,
  },
  data() {
    return {
      allUser: [],
      limit: 5,
      transactions: [],
      contactData: [],
    };
  },
  methods: {},

  computed: {
    filteredUsers() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.allUser)) {
        return [];
      }

      // Get the current date in string format (e.g., "2024-01-05")
      const currentDateStr = new Date().toISOString().split("T")[0];

      // Use this computed property to filter the array based on created_at
      return this.allUser
        .filter((user) => {
          // Assuming user.created_at is a string in ISO format
          return user.created_at.split("T")[0] === currentDateStr;
        })
        .slice(0, this.limit);
    },
    filteredTrx() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.transactions)) {
        return [];
      }
      // Get the current date in string format (e.g., "2024-01-05")
      const currentDateStr = new Date().toISOString().split("T")[0];

      // Use this computed property to filter the array based on created_at
      return this.transactions.filter((transaction) => {
        // Assuming user.created_at is a string in ISO format
        return transaction.created_at.split("T")[0] === currentDateStr;
      });
    },
    filteredSms() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.contactData)) {
        return [];
      }

      // Get the current date in string format (e.g., "2024-01-05")
      const currentDateStr = new Date().toISOString().split("T")[0];

      // Use this computed property to filter the array based on created_at
      return this.contactData.filter((transaction) => {
        // Assuming user.created_at is a string in ISO format
        return transaction.created_at.split("T")[0] === currentDateStr;
      });
    },
    filteredDeposit() {
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "deposit" && transaction.status === "success"
      );
      // Use this computed property to filter the array
      return withdrawSuccessTransactions;
    },
    filteredWithdraw() {
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "withdraw" && transaction.status === "success"
      );
      // Use this computed property to filter the array
      return withdrawSuccessTransactions;
    },
  },

  async created() {
    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.allUser = alluser;
    } else {
      this.allUser = await userStore.getAllUser();
    }

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transactions = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transactions = await getTransaction.allUserTransaction();
    }
    const getContact = contactStore();

    // Try to get the data from the store
    const contactData = getContact.contact;

    if (contactData) {
      this.contactData = contactData;
    } else {
      // If data is not available, fetch it and set the component property
      this.contactData = await getContact.getContact();
    }
    this.$setLoading(false);
  },
};
</script>

<style scoped>
.team-list {
  height: 100% !important;
}
.details {
  width: 100px;
  height: 100px;
  border-end-end-radius: 100px;
  border-end-start-radius: 100px;
  border-top-left-radius: 100px;
  background: linear-gradient(3600deg, rgba(87, 63, 234, 0.2) 0%, rgba(161, 145, 255, 0.2) 100%);
  text-align: center;
  align-content: center;
}
.team-list :hover .details{
  background: linear-gradient(to right, rgba(57,100,208,1) 0%, rgba(45,193,201,1) 100%);

}
.team2-area{
  background: transparent !important;
}
</style>
