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
              <h1>Our story</h1>
              <ul class="breadcrumb-list">
                <li><router-link to="/">Home</router-link></li>
                <li>Our Story</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="logo-section mb-130">
      <div class="container-fluid one">
        <div class="row">
          <div class="col-lg-12">
            <div class="logo-wrapper">
              <div class="logo-title">
                <h6>
                  Our Trusted Partner
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                    ></path>
                  </svg>
                </h6>
              </div>
              <div class="logo-area">
                <div class="marquee_text2">
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-01.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-02.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-03.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-04.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-05.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-01.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-02.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-03.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-04.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-05.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-01.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-02.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-03.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-04.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-05.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-01.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-02.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-03.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-04.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-05.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-01.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-02.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-03.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-04.png" alt
                  /></a>
                  <a href="#"
                    ><img src="assets/img/home1/company-logo-05.png" alt
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="mission-section mb-130 mt-50" >
      <div class="container-fluid one pl--95">
        <div class="row g-lg-4 gy-5">
          <div class="col-lg-4">
            <div class="mission-img">
              <img
                src="./../assets/frontend/img/inner-pages/about-mission-section-img.jpg"
                alt
              />
            </div>
          </div>
          <div class="col-lg-8 pl--95">
            <div class="mission-content-wrap">
              <div class="mission-content-top">
                <div class="section-title1 w-890">
                  <h2>
                    Business consulting is a professional service provided by
                    experts who offer advice.
                  </h2>
                </div>
                <p>
                  Business consulting is a professional service provided by
                  experts who offer advice and guidance to businesses to help
                  them improve their performance, solve specific problems, and
                  achieve their goals.
                </p>
                <h5>Mr. Daniel Scoot, <span>Company CEO</span></h5>
              </div>
              <div class="mission-content-bottom">
                <h3>Our Mission</h3>
                <p>
                  To empower organizations to thrive and achieve their full
                  potential by providing strategic insights, innovative
                  solutions, and expert guidance. We partner with our clients to
                  enhance efficiency, competitiveness, and sustainability in an
                  ever-evolving business landscape.
                </p>
                <p class="moretext">
                  To empower organizations to thrive and achieve their full
                  potential by providing strategic insights, innovative
                  solutions, and expert guidance. We partner with our clients to
                  enhance efficiency, competitiveness, and sustainability in an
                  ever-evolving business landscape.
                </p>
                <a class="moreless-button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


 

  

    

   
  </HomeLayout>
</template>
  
  <script>
import HomeLayout from "./../Layouts/HomeLayout.vue";
import bannerImage from "@/assets/frontend/img/inner-pages/braadcrumb-bg2.jpg";

export default {
  components: {
    HomeLayout,
  },
  data() {
    return {
      bannerImage,
    };
  },
};
</script>
  