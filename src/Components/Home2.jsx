import React from "react";

export default function Home2() {
  return (
    <div class="bg-white">
      <section
        class="section py-section flex flex-row
                    babybear:flex-col
                    papabear:flex-nowrap"
        data-test-id="search-cta"
      >
        <div
          class="w-full self-start mb-[24px] w-full flex-shrink-0
                  papabear:w-column papabear:mr-[72px] papabear:mb-[0px]"
          data-test-id="pill-list-module__cta"
        >
          <h2 class="secondary-heading text-[48px]">
            Find the right job or internship for you
          </h2>
        </div>

        <div class="w-full papabear:max-w-[calc(theme('spacing.content-max-w')-theme('spacing.column')-72px)]">
          <h2 class="etta-caps-header mb-[20px]">Suggested Searches</h2>

          <div class="show-more-less etta-show-more-less">
            <ul
              data-max-num-to-show="10"
              class="show-more-less__list show-more-less__list--hide-after-10"
            >
              <li class='border-black w-full border-black rounded-full'>
                <a
                  class="  btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/engineering-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/business-development-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Business Development
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/finance-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/administrative-assistant-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Administrative Assistant
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/retail-associate-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Retail Associate
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/customer-service-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/operations-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Operations
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/information-technology-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Information Technology
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/marketing-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/human-resources-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Human Resources
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/healthcare-services-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Healthcare Service
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/sales-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Sales
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/program-and-project-management-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Program and Project Management
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/accounting-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Accounting
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/arts-and-design-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Arts and Design
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/community-and-social-services-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Community and Social Services
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/consulting-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/education-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/entrepreneurship-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Entrepreneurship
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/legal-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/media-and-communications-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Media and Communications
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/military-and-protective-services-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Military and Protective Services
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/product-management-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Product Management
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/purchasing-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Purchasing
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/quality-assurance-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Quality Assurance
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/real-estate-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/research-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/support-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  class="btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                  data-tracking-control-name="homepage-basic_suggested-search"
                  data-tracking-will-navigate=""
                  href="https://www.linkedin.com/jobs/administrative-jobs-kigali?trk=homepage-basic_suggested-search"
                >
                  Administrative
                </a>
              </li>
            </ul>

            <button
              class="show-more-less__button show-more-less__more-button show-more-less-button
                "
              aria-expanded="false"
              aria-label="Show more Suggested Searches"
              data-tracking-control-name="homepage-basic_pill-list-module_etta-show-more-less_show_more"
            >
              Show more
              <icon
                class="show-more-less__button--chevron show-more-less-button-icon lazy-loaded"
                aria-hidden="true"
                aria-busy="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  preserveAspectRatio="xMinYMin meet"
                  focusable="false"
                  class="lazy-loaded"
                  aria-busy="false"
                >
                  <path
                    d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                    fill="currentColor"
                  ></path>
                </svg>
              </icon>
            </button>

            <button
              class="show-more-less__button show-more-less__less-button show-more-less-button
                show-more-less__button--hide"
              aria-expanded="false"
              aria-label="Show less Suggested Searches"
              data-tracking-control-name="homepage-basic_pill-list-module_etta-show-more-less_show_more"
            >
              Show less
              <icon
                class="show-more-less__button--chevron show-more-less-button-icon lazy-loaded"
                aria-hidden="true"
                aria-busy="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  preserveAspectRatio="xMinYMin meet"
                  focusable="false"
                  class="lazy-loaded"
                  aria-busy="false"
                >
                  <path
                    d="M8 7l-5.9 4L1 9.5l6.2-4.2c.5-.3 1.2-.3 1.7 0L15 9.5 13.9 11 8 7z"
                    fill="currentColor"
                  ></path>
                </svg>
              </icon>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
