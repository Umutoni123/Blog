import React from "react";

export default function Home1() {
  return (
    <div class="bg-[#f3f2f0]">
      <section
        class="section  flex flex-row gap-20  p-[20px]  "
        data-test-id="explore-content">
        <div
          class="self-start mb-[24px] w-[50%] flex-shrink-0 ml-[180px]
                  papabear:w-column papabear:mr-[72px] papabear:mb-[0px]"
          data-test-id="pill-list-module__cta"
>
          <h2 class="secondary-heading text-[56px]">
            Explore topics you are interested in
          </h2>
        </div>

        <div class="w-full ">
          <h2 class=" mb-[20px]">CONTENT TOPICS</h2>

          <ul class="show-more-less__list show-more-less__list--no-hidden-elems p-[20px]">
            <li class="explore-content__pill ">
              <a
                class=" border-[1px] border-[#0a66c2] w-[120px] align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary-emphasis"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/home/"
              >
                See All Topics
              </a>
            </li>
            <li class="explore-content__pill">
              <a
                class="border-[1px] border-black w-[120px] align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/workplace-c9/"
              >
                Workplace
              </a>
            </li>
            <li class="explore-content__pill">
              <a
                class="border-[1px] border-black w-full align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/job-search-c27/"
              >
                Job Search
              </a>
            </li>
            <li class="explore-content__pill">
              <a
                class="border-[1px] border-black w-full align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/careers-c1/"
              >
                Careers
              </a>
            </li>
            <li class="explore-content__pill">
              <a
                class="border-[1px] border-black w-full align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/job-search-c27/interviewing-c28/"
              >
                Interviewing
              </a>
            </li>
            <li class="explore-content__pill">
              <a
                class=" border-[1px] border-black w-full align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/careers-c1/salary-and-compensation-c7/"
              >
                Salary and Compensation
              </a>
            </li>
            <li class="explore-content__pill">
              <a
                class="border-[1px] border-black w-full align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/careers-c1/internships-c5/"
              >
                Internships
              </a>
            </li>
            <li class="explore-content__pill">
              <a
                class=" border-[1px] gap-6 border-black w-full align-center h-[40px] rounded-full p-[10px] btn-md mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary"
                data-tracking-control-name="homepage-basic_explore-content_topic-pill"
                data-tracking-will-navigate=""
                href="https://www.linkedin.com/pulse/topics/workplace-c9/employee-benefits-c12/"
              >
                Employee Benefits
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
