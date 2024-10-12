<template>
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
                    <h3 class="title">All Transaction Log</h3>
                  </div>
                  <div class="site-card-body">
                    <div class="site-table">
                      <div class="table-filter">
                        <div class="filter">
                          <form>
                            <div class="search">
                              <div >
                                <input
                                  type="text"
                                  id="search"
                                  placeholder="Search"
                                  v-model="searchQuery"
                                />

                           
                              </div>
                            
                              <div class="apply-btn">
                                Total : {{ transaction.length }}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th>Transactions ID</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Wallet</th>
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
                                    <div class="icon">
                                      <i
                                        class="fa fa-arrow-down"
                                        v-if="
                                          transactionItem.type === 'deposit'
                                        "
                                      ></i>
                                      <i class="fa fa-arrow-up" v-else></i>
                                    </div>
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
                                  <div
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
                                </td>
                                <td>
                                  <strong
                                    v-if="transactionItem.address === 'Live'"
                                    >Profit</strong
                                  >
                                  <strong v-else> Main </strong>
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
                              :class="{ disabled: currentPage === totalPages }"
                              @click="nextPage"
                              aria-label="Next &raquo;"
                            >
                              <span class="page-link">&rsaquo;</span>
                            </li>
                          </ul>
                        </nav>
                        <!-- End Pagination -->
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
  </DeshboardLayout>
</template>

<script>
import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";
import { transactionStore } from "../../stores/transaction";

export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      transaction: [],
      filteredTransactions: [],
      searchQuery: "",
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },

  computed: {
  
    totalPages() {
      return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    },
    displayedItems() {
      const query = this.searchQuery.toLowerCase();
      this.filteredTransactions = this.transaction.filter(
        (item) =>
          item.amount.toString().includes(query) ||
          item.trx.toLowerCase().includes(query) ||
          item.status.toLowerCase().includes(query)
      );
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTransactions.slice(start, end);
    },
  },

  methods: {
 
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
    goToPage(page) {
      this.currentPage = page;
    },
  },

  async created() {
    const getTransaction = transactionStore();
    const transactionData = getTransaction.authTransaction;

    if (transactionData) {

      this.transaction = transactionData
    } else {
      this.transaction  = await getTransaction.authUserTransaction();
    
    }



    this.$setLoading(false);
  },
};
</script>


<style scoped>


</style>