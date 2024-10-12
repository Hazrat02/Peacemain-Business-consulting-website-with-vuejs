<template>

        <HomeLayout>
     
        </HomeLayout>




</template>
  
  
  
  
  
  <script>
// import axios from "axios";

import { leadStore } from "./../stores/lead";

export default {
  data() {
    return {
      name: "",
      phone: "",
      city: "",
      country: "Select",
      phnError: "",
    };
  },

  created() {
   
  },

  methods: {
    async leadstore() {
      this.$setLoading(true);
      if (localStorage.getItem("btn")) {
        this.$notify({
          title: "Error message",
          text: "You are already Submitted!",
          type: "error",
        });
      } else {
        if (
          String(this.phone).length === 10 ||
          String(this.phone).length === 12 ||
          String(this.phone).length === 13
        ) {
          const data = {
            name: this.name,
            phone: this.phone,
            city: this.city,
            country: this.country,
          };

          await axios
            .post("/api/leads.store", data)
            .then((response) => {
              localStorage.setItem("btn", "true");
              this.$setLoading(false);
              this.$notify({
                title: "message",
                text: "Your Information submited.We will contact with you.",
                type: "success",
              });
            })

            .catch((error) => {
              // Handle the error
              this.$setLoading(false);
              this.$notify({
                title: "Error message",
                text: error.response.data.message,
                type: "error",
              });

              this.$setLoading(false);
            });
        } else {
          this.$notify({
            title: "Error message",
            text: "Wrong Phone Number!",
            type: "error",
          });
        }
      }

      this.$setLoading(false);
    },
  },
};
</script>



