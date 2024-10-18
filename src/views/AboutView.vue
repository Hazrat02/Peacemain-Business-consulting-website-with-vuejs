<template>
  <HomeLayout>
    <div
      class="breadcrumb-section"
      :style="{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bannerImage})`,
            }"
    >
      <div class="company-name">Peacemain</div>
      <div class="container-fluid one pl--95">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-content">
              <h1>About Us</h1>
              <ul class="breadcrumb-list">
                <li><router-link to="/">Home</router-link></li>
                <li>about</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

 
  </HomeLayout>
</template>

<script>
import HomeLayout from "./../Layouts/HomeLayout.vue";
import bannerImage from "@/assets/frontend/img/inner-pages/braadcrumb-bg5.jpg";

export default {
  components: {
    HomeLayout,
  },
  data() {
    return {
      bannerImage
    };
  },
};
</script>
