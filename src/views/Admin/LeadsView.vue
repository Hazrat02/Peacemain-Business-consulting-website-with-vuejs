<template>
  <div>
    <AdminDeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
              <div class="py-4 mb-4">
                <div class="container-fluid">
                  <h2 class="mb-0">All Leads</h2>
                </div>
              </div>

              <div class="">
                <div class="text-center rounded">
               

                  <div class="table-responsive">
                    <table
                      class="table text-start align-middle table-bordered table-hover mb-0"
                    >
                      <thead>
                        <tr class="text-white">
                          <th>#</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Country</th>
                          <th>city</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                      <div v-if="displayedItems.length === 0"> No data </div>
                        <tr
                          v-for="(contactItem, index) in displayedItems"
                          :key="index"
                        >
                          <th scope="row">{{ index }}</th>

                     

                          <td>{{ contactItem.name }}</td>
                          <td>{{ contactItem.phone }}</td>
                          <td>{{ contactItem.country }}</td>
                          <td>{{ contactItem.city }}</td>
                          <td>
                            {{ contactItem.created_at.substring(0, 10) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav
                      v-show="totalPages > 1"
                      aria-label="Page navigation example mt-3"
                    >
                      <ul class="pagination justify-content-center">
                        <li
                          class="page-item"
                          :class="{
                            disabled: currentPage === 1,
                          }"
                        >
                          <button
                            class="page-link"
                            @click="previousPage"
                            :disabled="currentPage === 1"
                          >
                            Previous
                          </button>
                        </li>
                        <li class="page-item">
                          <span class="btn"
                            >Page {{ currentPage }} of {{ totalPages }}</span
                          >
                        </li>

                        <li class="page-item">
                          <button
                            class="page-link"
                            @click="nextPage"
                            :class="{
                              disabled: currentPage === totalPages,
                            }"
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
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
import { leadStore } from "../../stores/lead";
import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue";
export default {
  components: {
    AdminDeshboardLayout,
  },
  data() {
    return {
      contactData: [],

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.contactData.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.contactData.slice(start, end);
    },
  },

  async created() {
    // transactionStore===================================
    const getContact = leadStore();

    // Try to get the data from the store
    const contactData = getContact.lead;

    if (contactData) {
      this.contactData = contactData;
    } else {
      // If data is not available, fetch it and set the component property
      this.contactData = await getContact.getlead();
    }
    this.$setLoading(false);
  },
  methods: {
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
  },
};
</script>
  
