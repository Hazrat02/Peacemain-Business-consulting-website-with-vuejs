<template>
  <section>
    <div class="wd_scroll_wrap">
      <section class="about-area pd-t70 pd-b100 jarallax bg-img">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="about-content">
                <h2
                  v-animate
                  data-animation="fadeInUp animated"
                  class="f-40 fw-400"
                  data-wow-duration="1.0s"
                >
                  About us
                </h2>
                <p
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.3s"
                >
                  Fairlight invests globally in 30-40 of the highest quality
                  small and mid cap businesses, many of which investors are
                  unfamiliar with.
                </p>
                <p
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.6s"
                >
                  We believe in concentration as, in our experience, backing our
                  best ideas drives the strongest long-term returns. We focus on
                  small and mid cap companies because, in our view, these
                  businesses receive less investor attention, have greater
                  growth prospects, and are more likely to be acquired by larger
                  companies.
                </p>
                <div class="buttons mt-3" v-if="this.$route.path === '/'">
                  <router-link to="/about" href="#" class="btn3"
                    >See more</router-link
                  >
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                v-animate
                data-animation="fadeInDown animated"
                class="about-img"
                data-wow-duration="2.0s"
              >
                <img src="./../assets/frontend/images/about/1.png" alt="" />
              </div>
            </div>
          </div>

          <p
            v-if="this.$route.path === '/about'"
            class="mt-4"
            v-animate
            data-animation="fadeInUp animated"
            data-wow-duration="1.9s"
          >
            Fairlight employs three styles of investing within the global small
            and mid cap market: high-quality growth, stable compounders, and
            special situation/low-risk turnarounds.
            <br />
            Executing these distinct investment styles presents a broad array of
            opportunities, with each style tending to perform differently during
            various stages of an investment cycle.
          </p>
          <p
            v-if="this.$route.path === '/about'"
            v-animate
            data-animation="fadeInUp animated"
            data-wow-duration="2.3s"
          >
            Our strategy is executed with an ethical mindset, with hard screens
            against industries such as gaming, tobacco, and armaments. We are
            committed to actively avoiding companies which unequivocally cause
            harm to people and the environment.
            <br />
            We believe strong corporate cultures can be an enduring source of
            competitive advantage. One which we travel globally to analyze,
            contrast, and compare.
          </p>
        </div>
      </section>
      <!--About area end here-->
      <div class="sud" style="color: dimgray !important">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 181.1"
          style="enable-background: new 0 0 1920 181.1"
          xml:space="preserve"
        >
          <g>
            <path
              class="st0"
              style="fill: #10122d"
              d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
         c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
         c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
         c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
         c15.3,22.7,51,22.7,53,23v28.1H0V80z"
            />
          </g>
        </svg>
      </div>
    </div>
    
  </section>
</template>
<style scoped>
</style>