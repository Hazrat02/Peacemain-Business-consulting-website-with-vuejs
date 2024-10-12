<script>
  import { useToast } from "vue-toastification";

  export default {
    setup() {
      // Get toast interface
      const toast = useToast();

      // or with options
      toast.success("My toast content", {
        timeout: 2000
      });
      // These options will override the options defined in the "app.use" plugin registration for this specific toast

      // Make it available inside methods
      return { toast }
    },
    created(){
      this.toast.info("I'm an info toast!");
    },

    methods: {
      myMethod() {

        // Since you returned `toast` from setup(), you can access it now
        this.toast.info("I'm an info toast!");
      }
    }
  }
</script>

<template>

</template>