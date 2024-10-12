<template>
  <div>
    <AdminDeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="emp-profile">
              <div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-img">
                      <img
                        v-if="authUser.profile"
                        class=""
                        :src="authUser.profile"
                        style="width: 150px; height: 150px"
                      />
                      <img
                        v-else
                        class=""
                        style="width: 150px; height: 150px"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="profile-head">
                      <h3>
                        {{ authUser.name }}
                      </h3>
                      <h4>
                        {{ authUser.email }}
                      </h4>

                      <div class="mob-shortcut-btn">
                        <router-link
                        :to="{
                                name: 'AdminDeposit',
                                params: { id: this.$route.params.id },
                              }"
                          v-animate
                          data-animation="bounceInDown animated"
                          data-wow-duration="1.0s"
                          ><i class="fa fa-arrow-down"></i> Deposit</router-link
                        >
                        <router-link
                        :to="{
                                name: 'transferView',
                                params: { id: this.$route.params.id },
                              }"
                          v-animate
                          data-animation="bounceInDown animated"
                          data-wow-duration="1.5s"
                          ><i class="fa fa-exchange"></i>Transfer</router-link
                        >
                        <router-link
                        :to="{
                                name: 'AdminWithdraw',
                                params: { id: this.$route.params.id },
                              }"
                          v-animate
                          data-animation="bounceInDown animated"
                          data-wow-duration="2s"
                          ><i class="fa fa-arrow-up"></i> Withdraw</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-3">
                    <div class="profile-work">
                      <h3>LINK</h3>

                      <a
                        :class="{
                          active: currentSection === 'profile',
                        }"
                        @click="handleClick('profile')"
                      >
                        Profile</a
                      >
                      <br />
                      <a
                        class=""
                        :class="{
                          active: currentSection === 'trx',
                        }"
                        @click="handleClick('trx')"
                      >
                        TRX</a
                      ><br />
                      <a
                        class=""
                        :class="{
                              'active': currentSection === 'doc',
                            }"
                            @click="handleClick('doc')"
                      >
                        KYC</a
                      ><br />
                   
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div
                      class="tab-content profile-tab"
                      v-if="currentSection === 'profile'"
                    >
                      <div class="tab-pane show active">
                        
                        <div class="row">
                          <div class="col-md-6">
                            <label>Main Assets</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.main_balance}} $</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Profit Assets</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.live_balance}} $</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Name</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.name}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Email</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.email}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.Phone}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Country</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.country}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Birthday</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.birth}}</p>
                          </div>
                        </div>
                      </div>
                     
                    </div>

                    <section class="tables py-0" v-if="currentSection == 'trx'">
                      <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th>Transactions ID</th>
                                <th>Amount</th>
                                <th>Wallet</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(
                                  transactionItem, index
                                ) in displayedItems"
                                :key="index"
                              >
                                <td>
                                  <div class="table-description">
                                    
                                    <div class="description">
                                      <strong>{{
                                        transactionItem.method
                                      }}</strong>
                                      <div class="date">
                                        {{
                                          transactionItem.created_at.substring(
                                            0,
                                            10
                                          )
                                        }}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <strong>{{ transactionItem.trx }}</strong>
                                </td>
                                <td>
                                  <strong
                                    class="green-color"
                                    v-if="transactionItem.type === 'deposit'"
                                    >+{{ transactionItem.amount }} USD</strong
                                  >
                                  <strong class="red-color" v-else
                                    >-{{ transactionItem.amount }} USD</strong
                                  >
                                </td>

                                <td>
                                  <strong
                                    v-if="transactionItem.address === 'Live'"
                                    >Profit</strong
                                  >
                                  <strong v-else> Main </strong>
                                </td>
                                <td>
                                  <div
                                    v-if="transactionItem.status != 'pending'"
                                    class="site-badge"
                                    :class="{
                                      warnning:
                                        transactionItem.status === 'pending',
                                      failed:
                                        transactionItem.status === 'rejected',
                                      success:
                                        transactionItem.status === 'success',
                                    }"
                                  >
                                    {{ transactionItem.status }}
                                  </div>
                                  <div
                                    v-else
                                    class="pe-2"
                                    style="
                                      display: flex;
                                      justify-content: space-between;
                                    "
                                  >
                                    

                                    <i
                                      @click="
                                        trxEdit(transactionItem.id, 'success')
                                      "
                                      class="fa fa-check"
                                      style="color: green; font-size: 25px"
                                    ></i>
                                    <i
                                      @click="
                                        trxEdit(transactionItem.id, 'rejected')
                                      "
                                      else
                                      class="fa fa-times"
                                      style="color: red; font-size: 25px"
                                    ></i>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <!-- Pagination -->
                          <nav
                            class="site-pagination"
                            style="text-align: center"
                            v-show="totalPages > 1"
                          >
                            <ul class="pagination">
                              <li
                                class="page-item"
                                :class="{ disabled: currentPage === 1 }"
                                @click="previousPage"
                                aria-label="&laquo; Previous"
                              >
                                <span class="page-link">&lsaquo;</span>
                              </li>

                              <li
                                v-for="page in totalPages"
                                :key="page"
                                class="page-item"
                                :class="{ active: page === currentPage }"
                                @click="goToPage(page)"
                              >
                                <span class="page-link">{{ page }}</span>
                              </li>

                              <li
                                class="page-item"
                                :class="{
                                  disabled: currentPage === totalPages,
                                }"
                                @click="nextPage"
                                aria-label="Next &raquo;"
                              >
                                <span class="page-link">&rsaquo;</span>
                              </li>
                            </ul>
                          </nav>
                          <!-- End Pagination -->
                        </div>
                    </section>

                    <div v-if="currentSection == 'doc'">
                    <section class="pt-0 mt-4" v-if="idkyc">
           
     
                          <div class="col-12">
                            <div class="">
                              <div class="card-body">
                                <div
                                  class="align-items-center"
                                  v-if="authUser.id_kyc != 'No'"
                                >
                                  <div class="col-12 mb-3">
                                    <div class="">
                                      <div>
                                        <b for="">Proof of ID: </b
                                        ><button
                                        type="button"
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card bg-secondary">
                                        <div class="card-body">
                                          <div
                                            class="row gy-3 justify-content-between"
                                          >
                                            <div class="col-lg-6">
                                              <b>Id Front:</b>
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.id_front"
                                                  v-if="idkyc.id_front"
                                                >
                                        
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.id_front"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else>No Data</span>
                                              </div>
                                            </div>
                                            <div class="col-lg-6">
                                              <b>Id Back:</b>
                                              <div
                                                class="card mb-0"
                                                style="
                                                  border: solid rgb(101, 95, 95)
                                                    2px;
                                                "
                                              >
                                                <a
                                                  :href="idkyc.id_back"
                                                  v-if="idkyc.id_back"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.id_back"
                                                    alt=""
                                                  />
                                                </a>

                                                <span v-else>No Data</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center mb-3"
                                    v-if="authUser.ad_kyc != 'No'"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Address: </b>
                                        <button
                                         type="button"
                                          v-if="authUser.ad_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('ad_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>
                                    <div class="col-12">
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Country: </b
                                          ><span>{{ idkyc.country }}</span>
                                        </div>
                                      </div>
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">City: </b
                                          ><span>{{ idkyc.city }}</span>
                                        </div>
                                      </div>

                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Address: </b
                                          ><span>{{ idkyc.address }}</span>
                                        </div>
                                      </div>
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Postel Number: </b
                                          ><span>{{ idkyc.postel }}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row gy-3 r justify-content-center"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.ad_file"
                                                  v-if="idkyc.ad_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.ad_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center mb-3"
                                    v-if="idkyc.se_file"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Selfie: </b>
                                        <button
                                        type="button"
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class=""
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.se_file"
                                                  v-if="idkyc.se_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.se_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center"
                                    v-if="idkyc.ot_file"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Other: </b>
                                        <button
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row justify-content-between"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.ot_file"
                                                  v-if="idkyc.ot_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.ot_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                
                 
                    </section>

                    <div v-else>No Data</div>
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

import axios from "axios";
import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue";
export default {
  components: {
    AdminDeshboardLayout,
  },
  data() {
    return {
      authUser: "",
      checkbox: "",
      currentSection: "profile",
      userId: "",
      alluser: [],

      geteconomic: "",
      authPayment: "",
      idkyc: "",

      selectedOption: "all", // Initial selected option
      filterOptions: ["all", "pending", "rejected", "success"], // Dropdown options

      transaction: [],
      authTransaction: [],
      searchQuery: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 5, // Number of items to display per page

      address: "Select",
      method: "Select",
      amount: "",
    };
  },
  computed: {
    search() {
      if (!this.searchQuery) {
        return this.authTransaction;
      } else {
        const searchText = this.searchQuery.toLowerCase();
        return this.authTransaction.filter((item) => {
          const trxid = item.trxid ? item.trxid.toLowerCase() : ""; // Handle null trxid
          return (
            item.type.toLowerCase().includes(searchText) ||
            trxid.includes(searchText) ||
            item.status.toLowerCase().includes(searchText)
          );
        });
      }
    },
    filteredTransactions() {
      if (this.selectedOption === "all") {
        return this.search; // No filter applied, return all transactions
      } else if (this.selectedOption === "pending") {
        return this.search.filter(
          (authTransaction) => authTransaction.status === "pending"
        );
      } else if (this.selectedOption === "rejected") {
        return this.search.filter(
          (authTransaction) => authTransaction.status === "rejected"
        );
      } else {
        return this.search.filter(
          (authTransaction) => authTransaction.status === "success"
        );
      }
    },

    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTransactions.slice(start, end);
    },
  },
  methods: {
    handleClick(payload) {
      this.currentSection = payload;
    },
    async userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("birth", this.birth);
      formData.append("phone", this.phone);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);
      formData.append("profile", this.profile); // Append the file to the FormData object

      await axios
        .post("/api/user/edit", formData, {
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
    // paginate=================================
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    async trxEdit(id, status) {
      this.$setLoading(true);

      const data = {
        status: status,
      };

      await axios
        .put(`api/transaction.edit/${id}`, data)
        .then((response) => {


          this.$toast.success(
                response.data.message
           );

       

          const index = this.transaction.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.transaction[index].status = status;

            this.$set(this.transaction, index, this.transaction[index]);
          }
        })
        .catch((error) => {
          this.$setLoading(false);

          this.$toast.error(
                error.response.data.message
           );



        });

      this.$setLoading(false);
    },
    async kyc(type) {
      this.$setLoading(true);

      const data = {
        type: type,
      };

      await axios
        .put(`api/kyc.edit/${this.$route.params.id}`, data)
        .then((response) => {


          this.authUser = response.data.user;
          console.log(response);
          this.$setLoading(false);

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
          this.$toast.success(
                response.data.message
           );


          this.$setLoading(false);
        })
        .catch((error) => {
          // Handle the error
          this.$setLoading(false);
          this.$toast.error(
                error.response.data.message
           );

        });
      this.$setLoading(false);
    },
  },

  async created() {
    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.alluser = alluser;
    } else {
      // userStore.reSetAuthUser();
      this.alluser = await userStore.getAllUser();
    }

    const filteredUsers = this.alluser.filter(
      (user) => user.id == this.$route.params.id
    );
    this.authUser = filteredUsers["0"];

    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.allUserTransaction();
    }

    this.authTransaction = this.transaction.filter(
      (user) => user.user_id == this.$route.params.id
    );

    await axios
      .get(`api/user.details/${this.$route.params.id}`)
      .then((response) => {
        this.geteconomic = response.data.economic;
        this.idkyc = response.data.kyc;
        this.authPayment = response.data.payment;
      });

    this.$setLoading(false);
  },
};
</script>
<style scoped>

.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #ffffff00;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}

.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #c7d4e1;
}
.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}

.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab label {
  font-weight: 600;
}
.profile-tab p {
  font-weight: 600;
  color: #c2d7ee;
}

a {
  cursor: pointer !important;
}

label{
  color: #ffffff !important;
}

</style>
 