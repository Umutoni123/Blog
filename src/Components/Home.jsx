import React from "react";
import App from '../../src/App.css'

export default function Home() {
  return (
    <div>
      <section
        class=" flex flex-row section min-h-[560px] flex-nowrap pt-[40px] ml-[150px] bflex-col "
        data-test-id="hero">
        <div
          class=" self-start relative  p-[40px] mb-[60px] flex-shrink-0 w-[55%] pr-[42px] babybear:w-full babybear:pr-[0px]"
          data-test-id="hero__content">
          <h1
            class="main-heading  text-[56px] text-[#8F5849] text-[sans-serif]"
            data-test-id="hero__headline">
            Welcome to your professional community
          </h1>

          <code id="i18n_username_error_empty" class="display: none">
            {/* <!--"Please enter an email address or phone number"--> */}
          </code>

          <code id="i18n_username_error_too_long" class="display: none">
            {/* <!--"Email or phone number must be between 3 to 128 characters"--> */}
          </code>
          <code id="i18n_username_error_too_short" class="display: none">
            {/* <!--"Email or phone number must be between 3 to 128 characters"--> */}
          </code>

          <code id="i18n_password_error_empty" class="display: none">
            {/* "Please enter a password" */}
          </code>

          <code id="i18n_password_error_too_short" class="display: none">
            {/* "The password you provided must have at least 6 characters" */}
          </code>

          <code id="i18n_password_error_too_long" class="display: none">
            {/* <!--"The password you provided must have at most 400 characters"--> */}
          </code>

          <form
            data-id="sign-in-form"
            action="https://www.linkedin.com/uas/login-submit"
            method="post"
            novalidate=""
            class="hero-cta-form p-[15px]"
            data-js-module-id="d2l-sign-in-form"
          >
            <input
              name="loginCsrfParam"
              value="1939b5e2-37b8-4302-8600-5db55b159935"
              type="hidden"
            />

            <div class="flex flex-col gap-6">
              <div class="mt-1.5" data-js-module-id="guest-input">
                <div class="flex flex-col">
                  <label class="input-label mb-1 text-[#000000BF]" for="session_key">
                    Email or phone
                  </label>
                  <div class="text-input flex">
                    <input
                      class="text-color-text font-sans text-md outline-0 bg-color-transparent grow px-2 py-4 border-[1px] border-black"
                      autocomplete="username"
                      id="session_key"
                      name="session_key"
                      required=""
                      type="text"
                    />
                  </div>
                </div>

                <p
                  class="input-helper mt-1.5"
                  for="session_key"
                  role="alert"
                  data-js-module-id="guest-input__message"
                ></p>
              </div>

              <div class="mt-1.5" data-js-module-id="guest-input">
                <div class="flex flex-col">
                  <label class="input-label mb-1" for="session_password">
                    Password
                  </label>
                  <div class="text-input flex">
                    <input
                      class="text-color-text font-sans text-md outline-0 bg-color-transparent grow px-2 py-4 border-[1px] border-black"
                      autocomplete="current-password"
                      id="session_password"
                      name="session_password"
                      required=""
                      type="text"
                    />
                  </div>
                </div>

                <p
                  class="input-helper mt-1.5"
                  for="session_password"
                  role="alert"
                  data-js-module-id="guest-input__message"
                ></p>
              </div>

              <input name="session_redirect" type="hidden" />
            </div>

            <div
              data-id="sign-in-form__footer"
              class="flex flex-col justify-between gap-8
          sign-in-form__footer--full-width"
            >
              <a
                data-id="sign-in-form__forgot-password"
                class="font-sans text-md font-bold link leading-regular
            sign-in-form__forgot-password--full-width text-[#0a66c2]"
                href="https://www.linkedin.com/uas/request-password-reset?trk=homepage-basic_forgot_password"
                data-tracking-control-name="homepage-basic_forgot_password"
                data-tracking-will-navigate=""
              >
                Forgot password?
              </a>

              <input
                name="trk"
                value="homepage-basic_sign-in-submit"
                type="hidden"
              />
              <button
                class="btn-md btn-primary flex-shrink-0 cursor-pointer
            sign-in-form__submit-btn--full-width w-408 border-[1px] bg-[#0a66c2] text-white h-[45px] rounded-full"
                data-id="sign-in-form__submit-btn"
                data-tracking-control-name="homepage-basic_sign-in-submit-btn"
                data-tracking-litms=""
                type="submit"
              >
                Sign in
              </button>
            </div>
            <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
</div>
            <input
              type="hidden"
              name="controlId"
              value="d_homepage-guest-home-homepage-basic_sign-in-submit-btn"
            />
            <input
              type="hidden"
              name="pageInstance"
              value="urn:li:page:d_homepage-guest-home_jsbeacon;sHc9YDKORl+1nDBK5y2GLQ=="
            />
          </form>

          <form
            class="flex flex-col gap-y-6 padding-[15px]"
            action="https://www.linkedin.com/uas/login-submit"
            method="post"
            novalidate=""
          >
           

          
            <button
              class="w-408 border-[1px]  border-black bg-transparent text-black h-[45px] rounded-full btn btn-md btn-secondary hover:cursor-pointer flex items-center justify-center w-full h-auto"
              data-tracking-control-name="homepage-basic_google-sign-in-btn"
              data-tracking-litms=""
              type="button"
            >
              <icon
                class="google-sign-in-cta-widget__icon onload w-[18px] min-h-[18px] leading-[18px] block lazy-loaded"
                aria-hidden="true"
                aria-busy="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 18 18"
                  focusable="false"
                  class="lazy-loaded"
                  aria-busy="false"
                >
                  <defs></defs>
                  <title>Google</title>
                  <path
                    class="cls-1"
                    d="M9.12,3.37A5.41,5.41,0,0,1,13,4.8l2.39-2.39A8.79,8.79,0,0,0,9.12,0,9.08,9.08,0,0,0,1.05,4.77L3.78,6.93A5.62,5.62,0,0,1,9.12,3.37Z"
                  ></path>
                  <path
                    class="cls-2"
                    d="M3.39,9a5.63,5.63,0,0,1,.39-2.06L1.05,4.77A9,9,0,0,0,0,9a9.24,9.24,0,0,0,1,4.26l2.76-2.18A5.62,5.62,0,0,1,3.39,9Z"
                  ></path>
                  <path
                    class="cls-3"
                    d="M12.43,13.78A6.64,6.64,0,0,1,9,14.61a5.52,5.52,0,0,1-5.23-3.54L1,13.25A8.87,8.87,0,0,0,9,18a9.11,9.11,0,0,0,6.1-2.1Z"
                  ></path>
                  <path
                    class="cls-4"
                    d="M18,9a8.84,8.84,0,0,0-.18-1.79H9v3.6h5.46l0,.22a4.11,4.11,0,0,1-2,2.76l2.68,2.12A8.87,8.87,0,0,0,18,9Z"
                  ></path>
                </svg>
              </icon>
              <span class="google-sign-in-cta-widget__text ml-2">
                Sign in with Google
              </span>
            </button>



            <input
              type="hidden"
              name="controlId"
              value="d_homepage-guest-home-homepage-basic_google-sign-in-btn"
            />
            <input
              type="hidden"
              name="pageInstance"
              value="urn:li:page:d_homepage-guest-home_jsbeacon;sHc9YDKORl+1nDBK5y2GLQ=="
            />
            <input
              type="hidden"
              name="controlId"
              value="d_homepage-guest-home-homepage-basic_google-sign-in-btn"
            />
            <input
              type="hidden"
              name="pageInstance"
              value="urn:li:page:d_homepage-guest-home_jsbeacon;sHc9YDKORl+1nDBK5y2GLQ=="
            />
          </form>
          <div>
            <a
              class="w-408 border-[1px]  border-black bg-transparent text-black align-center h-[45px] rounded-full align-center  btn-md btn-secondary  babybear:w-full block mb-3"
              href="https://www.linkedin.com/signup/cold-join"
              data-test-id="sign-in-join-cta"
              data-tracking-control-name="homepage-basic_sign-in-form_join-cta"
              data-tracking-will-navigate=""
            >
              New to LinkedIn? Join now
            </a>
          </div>

          
        </div>
        <div>
        <img
            class="flip-rtl block z-[-1] w-[700px] h-[560px] relative flex-shrink babybear:w-[374px] babybear:h-[214px] babybear:static"
            alt="Welcome to your professional community"
            data-test-id="hero__illustration"
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          />
        </div>
      </section>
    </div>
  );
}
