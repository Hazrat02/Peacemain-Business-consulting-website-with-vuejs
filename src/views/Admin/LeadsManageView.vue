<template>
  <div>
    <AdminDeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
              <div class="bg-dash-dark-2 py-4 mb-4">
                <div class="container-fluid">
                  <h2 class="mb-0">All Message</h2>
                </div>
              </div>
          
           
                <div class="text-center rounded">
                 

                  <div class="table-responsive">
                    <table
                      class="table text-start align-middle table-bordered table-hover mb-0"
                    >
                      <thead>
                        <tr class="text-white">
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Subject</th>
                          <th>Message</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(contactItem, index) in displayedItems"
                          :key="index"
                        >
                          <th scope="row">{{ index }}</th>

                          <td>{{ contactItem.name }}</td>
                          <td>{{ contactItem.email }}</td>
                          <td>{{ contactItem.sub }}</td>
                          <td>{{ contactItem.sms }}</td>
                          <td>
                            {{ contactItem.created_at.substring(0, 10) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
import { contactStore } from "../../stores/contact";
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

