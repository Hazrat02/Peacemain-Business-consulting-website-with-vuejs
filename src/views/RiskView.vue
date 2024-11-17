
<script>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import bannerImage from "@/assets/frontend/img/inner-pages/braadcrumb-bg5.jpg";


export default {
  components: {
    HomeLayout,
  },
  data() {
    return {bannerImage};
  },

  async created() {},

  methods: {},
};
</script>

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
              <h1>Terms & Condition</h1>
              <ul class="breadcrumb-list">
                <li><router-link to="/">Home</router-link></li>
                <li>Terms & Condition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
 

    <div class="terms-and-conditions-pages pt-130 mb-130">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="update-date mb-30">
          <h6><i class="fa fa-caret-right"></i> Last Updated</h6>
          <p>02 February, 2023</p>
        </div>
      </div>

      <div class="col-lg-12 mb-40">
        <div class="terms-and-conditions">
          <h4>1. Terms & Conditions</h4>
          <p>
            These terms and conditions govern the services provided by Peacemain. 
            They protect both you as the client and us as the service provider. 
            Please review the following key components:
          </p>
          <ul>
            <li>
              <strong>i) Fees and Payment:</strong> We clearly outline pricing, 
              payment terms, and any additional charges. Invoices will be issued 
              as agreed, with payment methods specified upfront.
            </li>
            <li>
              <strong>ii) Termination and Cancellation:</strong> Both parties must 
              provide notice for termination. Fees or penalties may apply based on 
              the agreement terms.
            </li>
            <li>
              <strong>iii) Liability and Indemnification:</strong> Our liability is 
              limited to the extent of the agreed terms. Clients are expected to 
              indemnify Peacemain against certain claims.
            </li>
            <li>
              <strong>iv) Governing Law and Jurisdiction:</strong> All agreements 
              are governed by the laws of [Your Jurisdiction]. Disputes will be 
              resolved in the designated jurisdiction.
            </li>
          </ul>
          <p>
            Please have these terms reviewed by legal counsel to ensure they align 
            with applicable regulations.
          </p>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="terms-and-conditions">
          <h4>2. Privacy Policy</h4>
          <p>
            Peacemain is committed to safeguarding your privacy. Our privacy policy 
            outlines how we collect, use, and protect your information. Key points include:
          </p>
          <ul>
            <li>
              **Data Collection:** We collect only necessary personal information 
              through forms or interactions.
            </li>
            <li>
              **Usage:** Data is used solely to deliver services, improve performance, 
              and communicate effectively.
            </li>
            <li>
              **Protection:** We implement strict security measures to prevent unauthorized 
              access or misuse of your data.
            </li>
          </ul>
          <p>
            Ensure you read our full privacy policy. For questions, contact us at 
            [Insert Contact Details].
          </p>
          <p>
            We comply with all relevant data protection laws to ensure the safety 
            and confidentiality of your information.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  </HomeLayout>
</template>

<style scoped>
</style>
