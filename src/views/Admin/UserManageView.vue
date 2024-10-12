<template>
  <div>
    <AdminDeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
              <div class="py-4 mb-4">
                <div class="container-fluid">
                  <h2 class="mb-0">All User</h2>
                </div>
              </div>
              <!-- Breadcrumb-->

              <div class="">
                <div class="table-responsive">
                  <table
                    class="table text-start align-middle table-bordered table-hover mb-0"
                  >
                    <thead>
                      <tr class="text-white">
                        <th>#</th>
                        <th>User Name</th>
                        <th>Date of Birth</th>
                        <th>Date of Reg.</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in displayedItems" :key="index">
                        <th scope="row">{{ index }}</th>
                        <td>{{ user.name }}</td>
                        <td>{{ user.birth.substring(0, 10) }}</td>
                        <td>{{ user.created_at.substring(0, 10) }}</td>
                        <td>{{ user.country }}</td>
                        <td>{{ user.Phone }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                          <div
                            class="d-flex justify-content-center"
                            style="gap: 20px"
                          >
                            <router-link
                              :to="{
                                name: 'userdetails',
                                params: { id: user.id },
                              }"
                            >
                              <i class="fa fa-eye" style="color: beige"></i
                            ></router-link>

                            <a>
                              <i
                                class="fa fa-trash"
                                style="color: brown"
                                @click="userDelete(user.id)"
                              ></i>
                            </a>
                          </div>
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
import axios from "axios";
import { useAuthUserStore } from "../../stores/user";
import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue";
export default {
  components: {
    AdminDeshboardLayout,
  },
  data() {
    return {
      alluser: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
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
    userDelete(id) {
      axios
        .get(`/api/user.delete/${id}`)
        .then((response) => {
          const User = useAuthUserStore();
          this.alluser = User.deleteUser(id);

          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
      this.$setLoading(false);
    },
  },

  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.alluser.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.alluser.slice(start, end);
    },
  },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.alluser = alluser;
    } else {
      // userStore.reSetAuthUser();
      this.alluser = await userStore.getAllUser();
    }
    this.$setLoading(false);
  },
};
</script>

