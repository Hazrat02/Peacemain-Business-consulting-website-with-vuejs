
<template>
  <div>
    <HomeLayout>
      <contactVue />
    </HomeLayout>
  </div>
</template>

<script>
import contactVue from '@/components/contact.vue';
import HomeLayout from "./../Layouts/HomeLayout.vue"
export default {
  components: {
    contactVue,
    HomeLayout
  },
 
}
</script>

