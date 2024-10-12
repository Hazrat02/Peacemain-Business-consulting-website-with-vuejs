
<script>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import axios from 'axios';

export default {
  components: {
    HomeLayout,
  },
  data() {
    return {
      name: "",
      email: "",
      sub: "",
      sms: "",
      faqId:1,
    };
  },

  async created() {},

  methods: {
    faq(id){
      if (id === this.faqId) {
        this.faqId = 0
      } else {
        this.faqId=id
      }
    
       
    },
    async contact() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("sub", this.sub);
      formData.append("sms", this.sms);

      await axios
        .post("/api/contact.store", formData)
        .then((response) => {
          this.$setLoading(false);
          this.$toast.success(response.data.message);

          
        })
        .catch((error) => {
          this.$setLoading(false);
          
          this.$toast.error('somethings wrong!');
        });

      this.$setLoading(false);
    },
  },
};
</script>

<template>

  <div class="btc_contact_main_wrapper pb-4">
    <div class="btc_contact_img_overlay"></div>
    <div class="container">
      <div class="row">
        <div
          v-animate
          data-animation="fadeInUp animated"
          data-wow-duration="1s"
          class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
        >
          <div class="btc_contact_form_box">
            <form class="row" @submit.prevent="contact">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="btc_contact_heading_wrapper">
                  <h3>Contact <span> US</span></h3>
                  <div class="btc_contact_cont_bottom_line"></div>
                  <div class="btc_contact_cont_bottom_line_state"></div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="btc_contact_input_form1">
                  <input
                    required
                    v-model="name"
                    type="text"
                    placeholder="Full Name*"
                  />
                  <i class="fa fa-user-o"></i>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="btc_contact_input_form2">
                  <input
                    required
                    v-model="email"
                    type="email"
                    placeholder="Your Email*"
                  />
                  <i class="fa fa-envelope-o"></i>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="btc_contact_input_form2">
                  <input
                    required
                    v-model="sub"
                    type="text"
                    placeholder="Subject"
                  />
                  <i class="fa fa-envelope"></i>
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
                <div class="btc_contact_input_form2">
                  <textarea
                    v-model="sms"
                    style="padding: 1%"
                    name=""
                    id=""
                    cols=""
                    rows="3"
                    required
                    placeholder="Something..."
                  ></textarea>
                </div>
              </div>
              <div
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 text-center"
              >
                <div class="btc_contact_btn_wrapper animated bounceInUp">
                  <button type="submit" class="btn3">Send Mail</button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInDown animated">
          <div class="btc_contact_accordi_wrapper">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="btc_contact_accord_heading_wrapper">
                  <h5>Start Now</h5>
                  <h3>Ready to earn?</h3>
                
                  <div>
               Email : support@fairlightinvestments.com
                  </div>
                </div>
                <div class="trucking_faq_wrapeer">
                  <div class="accordionFifteen">
                    <div
                      class="panel-group"
                 
                    >

                      <div
                        class="panel panel-default truck_pannel"
                        v-animate
                        data-animation="animated fadeInRight"
                        data-wow-duration="1s"
                      >
                        <div class="panel-heading horn">
                          <h4 class="panel-title">
                            <a @click="faq(1)" class=""
                            :class="{
                        'collapsed': faqId != 1,
                      }"
                            >
                            What will be the nature of Investments?</a
                            >
                          </h4>
                        </div>
                        <div
                 
                          class="panel-collapse collapse" :class="{
                        'in': faqId == 1,
                      }"
              
                        >
                          <div class="panel-body">
                            <div class="panel_cont">
                              <p>
                                Investments will be a combination of both equity and debt instruments.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        class="panel panel-default truck_pannel"
                        v-animate
                        data-animation="animated fadeInRight"
                        data-wow-duration="1s"
                      >
                        <div class="panel-heading horn">
                          <h4 class="panel-title">
                            <a @click="faq(2)" class=""
                            :class="{
                        'collapsed': faqId != 2,
                      }"
                            >
                            What are the various sectors of my fund diversification?
                            </a
                            >
                          </h4>
                        </div>
                        <div
                 
                          class="panel-collapse collapse" :class="{
                        'in': faqId == 2,
                      }"
              
                        >
                          <div class="panel-body">
                            <div class="panel_cont">
                              <p>
                                Funds are primarily diversified across - Debt ETF, Govt. Bonds, Exchange Commissions, Precious Metal ETFs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        class="panel panel-default truck_pannel"
                        v-animate
                        data-animation="animated fadeInRight"
                        data-wow-duration="1s"
                      >
                        <div class="panel-heading horn">
                          <h4 class="panel-title">
                            <a @click="faq(3)" class=""
                            :class="{
                        'collapsed': faqId != 3,
                      }"
                            >
                            What is the minimum investment that one can start with?
                            </a
                            >
                          </h4>
                        </div>
                        <div
                 
                          class="panel-collapse collapse" :class="{
                        'in': faqId == 3,
                      }"
              
                        >
                          <div class="panel-body">
                            <div class="panel_cont">
                              <p>
                                We always recommend our clients to opt for higher investments allowing larger liquidity pools to benefit from higher return on investments. However for beginners we recommend no less than $5000.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        class="panel panel-default truck_pannel"
                        v-animate
                        data-animation="animated fadeInRight"
                        data-wow-duration="1s"
                      >
                        <div class="panel-heading horn">
                          <h4 class="panel-title">
                            <a @click="faq(4)" class=""
                            :class="{
                        'collapsed': faqId != 4,
                      }"
                            >
                            What about the safety of my investment capital?</a
                            >
                          </h4>
                        </div>
                        <div
                 
                          class="panel-collapse collapse" :class="{
                        'in': faqId == 4,
                      }"
              
                        >
                          <div class="panel-body">
                            <div class="panel_cont">
                              <p>
                                Most investors primarily worry about the safety of the investment capital over the return on investments. Here we always look into the best interest of our investors and have a balanced risk to return on investment ratio. This is why for smart diversification, we insist on higher investments allowing us to mitigate risk and reap best return on your investments.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <!--end of /.panel-group-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.btc_footer_social_wrapper {
  width: 100% !important;
  margin-left: -50px;
}
</style>