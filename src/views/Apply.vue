<template>
  <HomeLayout>
    <!-- Start Breadcrumb Section -->
    <div
      class="breadcrumb-section"
      :style="{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bannerImage})`,
      }"
    >
      <div class="company-name">Aploxn</div>
      <div class="container-fluid one pl--95">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-content">
              <h1>Senior Consulatnt</h1>
              <ul class="breadcrumb-list">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/career">Career</router-link></li>
                <li>Job Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumb Section -->

    <!-- Start Apply Position Section -->
    <div class="apply-position-section pt-130 mb-130">
      <div class="container-fluid one pl--95">
        <div class="row g-lg-4 gy-5">
          <div class="col-lg-8 pr--95">
            <div class="job-description mb-30">
              <p>
                <strong>Job Description:</strong> A UI/UX (User Interface/User
                Experience) designer is responsible for designing and creating
                engaging and effective interfaces for software and web
                applications. This includes designing the layout, visual design,
                and interactivity of the user interface.
              </p>
            </div>
            <div class="job-responsibility mb-30">
              <p>
                <strong>Job Responsibility:</strong> Collaborating with
                cross-functional teams: UI/UX designers often work closely with
                other teams, including product management, engineering, and
                marketing, to ensure that the user interface is aligned with
                business and technical requirements. You will need to be able to
                effectively communicate your design ideas and gather feedback
                from other team members.
              </p>
              <ul>
                <li>
                  Conducting user research and testing to understand user needs
                  and behaviors.
                </li>
                <li>
                  Designing wireframes, prototypes, and high-fidelity mockups.
                </li>
                <li>
                  Developing and maintaining design systems and style guides.
                </li>
                <li>
                  Staying up-to-date with the latest design trends and
                  technologies.
                </li>
              </ul>
            </div>
            <div class="job-responsibility mb-130">
              <p><strong>Educational Requirements:</strong></p>
              <ul>
                <li>Phd to complete any reputational university.</li>
                <li>
                  Two more publication published in international journal.
                </li>
              </ul>
            </div>
            <div class="position-apply-form">
              <div class="section-title1 two mb-60">
                <h2>How to Apply of this Position</h2>
                <p>
                  While a career in business consulting comes with many
                  benefits, it also involves challenges, such as dealing with
                  client expectations, tight deadlines, and continuous
                  adaptation to new industries and technologies.
                </p>
              </div>
              <div class="contact-form-area two three">
                <form>
                  <div class="row">
                    <div class="col-lg-6 mb-25">
                      <div class="form-inner">
                        <label>First Name</label>
                        <input type="text" placeholder="Daniel" />
                      </div>
                    </div>
                    <div class="col-lg-6 mb-25">
                      <div class="form-inner">
                        <label>Last Name</label>
                        <input type="text" placeholder="Scoot" />
                      </div>
                    </div>
                    <div class="col-lg-6 mb-25">
                      <div class="form-inner">
                        <label>Your Email*</label>
                        <input
                          type="email"
                          placeholder="infoexample@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 mb-25">
                      <div class="form-inner">
                        <label>Phone Number</label>
                        <input type="text" placeholder="+920- 5566 **** ****" />
                      </div>
                    </div>
                    <div class="col-lg-12 mb-25">
                      <div class="form-inner">
                        <label>Cover Letter*</label>
                        <textarea placeholder="Write cover letter"></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 mb-20">
                      <div class="upload-file-area">
                        <div class="upload-field-title">
                          <h6>Upload PDF</h6>
                        </div>
                        <div class="custom-upload-field">
                          <div class="upload-pdf-icon">
                            <img
                              src="https://demo-egenslab.b-cdn.net/html/aploxn/preview/assets/img/inner-pages/upload-pdf-icon.svg"
                              alt=""
                            />
                          </div>
                          <input type="file" class="custom-upload" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 mb-50">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="contactCheck"
                        />
                        <label class="form-check-label" for="contactCheck">
                          I have read & accepted Terms & Conditions.
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-inner">
                        <button class="primary-btn1 btn-hover" type="submit">
                          Submit Now
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
                          <span style="top: 60.5781px; left: 31.5938px"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="job-summary-area">
              <ul>
                <li>
                  <span class="title">Job Posted:</span
                  ><span> 02 NOV, 2024.</span>
                </li>
                <li><span class="title">Vacancy:</span> 07 Person</li>
                <li><span class="title">Experiences:</span> 2-3 Years.</li>
                <li><span class="title">Education:</span> Phd Completed.</li>
                <li><span class="title">Gender:</span> Male/Female</li>
                <li><span class="title">Deadline:</span> 02/01/2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
  <!-- End Apply Position Section -->
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
      bannerImage,
    };
  },
};
</script>
  