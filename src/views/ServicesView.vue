
<script>

import HomeLayout from '@/Layouts/HomeLayout.vue';
// import axios from 'axios';

export default {
  components:{
    HomeLayout
  },
  data() {
    return {
    };
  },

 async created() {
   
    this.$setLoading(false);
  },


  methods: {
  
   
  },
};
</script>

<template>

    <HomeLayout>
      <div class="wd_scroll_wrap">
      <section class="projects bg-img pd-t100 pd-b70 jarallax">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <div class="section-heading">
                <h2
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.0s"
                >
                  Advantage of the Project
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="1.0s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/6.png" alt=""
                  /></span>
                  <h3>Global network of Small  & MidCap Industries </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list"
                v-animate
                data-animation="fadeInUp animated"
                data-wow-duration="1.3s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/7.png" alt=""
                  /></span>
                  <h3>Advanced <br />Security System</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="1.6s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/8.png" alt=""
                  /></span>
                  <h3>High Weekly <br />ROI </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="1.9s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/9.png" alt=""
                  /></span>
                  <h3>Internal <br />Exchange</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="2.1s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/10.png" alt=""
                  /></span>
                  <h3>Safety <br />Fund</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="2.4s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/11.png" alt=""
                  /></span>
                  <h3>Cooperation <br />With Arbitration</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



     
    </div>

    <div class="wd_scroll_wrap">
      <section class="features-area section">
        <div id="features-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  class="section-heading2"
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.0s"
                >
                  <h2>Our Features</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="featured-lists">
                  <ul>
                    <li>
                      <div
                        class="col-sm-6 pd-0 hidden-xs"
                        v-animate
                        data-animation="fadeInUp animated"
                        data-wow-duration="1.3s"
                      >
                        <div class="contents-l mr-b30">
                          <h2>B2B Small & Mid Cap Lending Platform</h2>
                          <p>
                            Unique platform for business to business lending and
                            investment with small & mid cap institutions with
                            <br />a safety fund and cooperation with world-wide
                            arbitration.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        v-animate
                        data-animation="fadeInUp animated"
                        data-wow-duration="1.3s"
                      >
                        <div class="imgs-l">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/1.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 mobile-screen-show"
                        data-wow-duration="1.3s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>B2B Small & Mid Cap Lending Platform</h2>
                          <p>
                            Unique platform for business to business lending and
                            investment with small & mid cap institutions with
                            <br />a safety fund and cooperation with world-wide
                            arbitration.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="rl">
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 hidden-xs"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Weekly Systematic Debt Collection</h2>
                          <p>
                            Experience weekly ROI through consistent cash flow
                            through a unified central debt collection system.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-r">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/2.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 visible-xs"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Weekly Systematic Debt Collection</h2>
                          <p>
                            Experience weekly ROI through consistent cash flow
                            through a unified central debt collection system.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="col-sm-6 pd-0 hidden-xs"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Exchange Platform</h2>
                          <p>
                            Currency exchange platform with a surcharge of
                            minimum 10% on each transaction allowing our system
                            to earn high returns in exchange of
                            <br />substantial liquidity and safe conduit for
                            smooth transactions.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-l">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/3.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 visible-xs"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Exchange Platform</h2>
                          <p>
                            Currency exchange platform with a surcharge of
                            minimum 10% on each transaction allowing our system
                            to earn high returns in exchange of
                            <br />substantial liquidity and safe conduit for
                            smooth transactions.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="rl">
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 hidden-xs"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Secure Investment</h2>
                          <p>
                            Safe investment system due to implementation of strict protocols with respect to borrower’s verification, debt collection system executions and other necessary aspects for smooth ROI.

                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-r">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/4.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 visible-xs"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Secure Investment</h2>
                          <p>
                            Safe investment system due to implementation of strict protocols with respect to borrower’s verification, debt collection system executions and other necessary aspects for smooth ROI.

                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="col-sm-6 pd-0 hidden-xs"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Online Wallet 
                          </h2>
                          <p>
                            Secure online wallet system to both investor & borrower independently to transact smoothly with company backed escrow systems.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-l">
                          <figure>
                            <img style="border-radius: 300px;"
                              src="https://static.vecteezy.com/system/resources/previews/039/288/676/non_2x/smartphone-icon-vector.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 visible-xs"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Online Wallet 
                          </h2>
                          <p>
                            Secure online wallet system to both investor & borrower independently to transact smoothly with company backed escrow systems.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



    

    </HomeLayout>

</template>

<style scoped>
.projects{
	background:#08091b;
}
</style>

