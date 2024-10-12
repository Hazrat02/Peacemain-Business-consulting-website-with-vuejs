<template>
  <HomeLayout>
    <div  class="wd_scroll_wrap">
      <about />
    </div>
    

    <div  class="wd_scroll_wrap">
      <section class="steps-area section">
        <div id="steps-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12">
                <div class="steps-heading">
                  <h2
                    data-wow-duration="1.0s"
                    v-animate
                  data-animation="fadeInUp animated"
               
                  >
                  Our Philosophy
                  </h2>
                  <p>
                    Our philosophy is grounded in long-term, fundamental research. The team aims to deliver investors consistent high risk to high return ratio after all fees by investing in a concentrated portfolio of attractively priced, wealth generating businesses based exclusively in international markets. We believe a portfolio of the highest quality businesses, purchased with valuation discipline, will outperform over the long-term while preserving our clients' capital in times of economic stress.
                  </p>
                  <div class="right-con">
                    <span>Scroll Down</span>
                    <a data-scroll data-options='{ "speed": 100 }' href="#steps"
                      ><i class="fa fa-angle-down"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="steps" class="steps-details bg-mg">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-md-offset-1 col-lg-offset-1"
            >
              <div class="steps-cont">
                <ul>
                  <li class="l-con">
                    <div
                      class="cont "
         
                      v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.3s"
                    >
                      <h2>01. Why Invest in Global Small and Mid Caps?</h2>
                      <p>
                        Fairlight is a global small and mid cap (SMID) specialist. Global SMID is an asset class that has traditionally been ignored by global investors despite the sector being 40 times the size of the local SMID market. Historical data shows us that smaller companies have outperformed larger companies over the long term; this is intuitive as smaller companies can grow faster, have a longer runway to compound growth, and are frequently acquired by larger companies. There are also fewer analysts focussed on smaller companies, providing more opportunities for Fairlight to uncover hidden and underappreciated quality.

                      </p>
                    </div>
                    <span><i class="fa fa-check"></i></span>
                  </li>
                  <li class="r-con">
                    <div
                      class="cont "
                      data-wow-duration="1.6s"
                                       v-animate
                  data-animation="fadeInUp animated"
                    >
                      <h2>02. Quality and Small Cap Investing Styles Blend Beneficially</h2>
                      <p>
                        Our quality focussed investment philosophy is especially well suited to the small and mid cap sector. By choosing only the highest quality companies from within the SMID sector, we have historically been able to deliver less volatility than the index and protect capital during periods of market stress.
 <br /><br> Traditionally, the investment performance of quality and small cap investing styles has been negatively correlated. In practice this means that when small caps underperform it is likely that quality companies will outperform (and vice versa). The blending of these two investment styles has been a key driver of Fairlight's ability to historically outperform the market despite exhibiting lower risk.
                      </p>
                    </div>
                    <span><i class="fa fa-check-square-o"></i></span>
                  </li>
                  <li class="l-con">
                    <div
                      class="cont"
                      data-wow-duration="1.9s"
                                       v-animate
                  data-animation="fadeInUp animated"
                    >
                      <h2>03.The Role of ESG in the Portfolio</h2>
                      <p>
                        When it comes to responsible investment, the lack of common definitions and metrics in environmental, social and governance (ESG) assessments can make it difficult to compare ESG practices between companies.<br /> <br />However, at Fairlight, we believe the way a company manages ESG issues is often a good indicator of their overall risk levels and general management quality. We consider the management of ESG to be a key determinant of a company's long-term success.
                        <br><br>
                        Companies with better ESG performance can increase shareholder value by better managing risks related to emerging ESG issues. ESG is becoming an increasingly important part of company value and how a company protects their brand and reputation.
                      </p>
                    </div>
                    <span><i class="fa fa-bar-chart-o"></i></span>
                    <div class="mid-icons"></div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  
  </HomeLayout>
</template>

<style scoped>
.steps-area .steps-heading .right-con a:after {

  bottom: -210px !important;

}
</style>
<script>
import HomeLayout from "./../Layouts/HomeLayout.vue";
import about from "./../components/about.vue"

export default {
  components: {
    HomeLayout,
    about
  },
};
</script>

