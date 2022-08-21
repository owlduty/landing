<template>
  <div class="home">
    <!--Hero-->
    <div class="pt-32">
      <div
        class="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full lg:w-3/5 justify-center items-start text-center lg:text-left text-gray-800"
        >
          <h1 class="my-4 text-4xl md:text-5xl font-bold leading-tight">
            Endpoint monitoring and security
          </h1>
          <p class="md:leading-normal text-xl md:text-2xl md:mt-4 mb-8">
            An endpoint down, a bad response time, or a security threat?
            Whatever you experience in your system, we are on duty and alert
            your team.
          </p>
          <router-link
            :to="{ name: 'Home', hash: '#subscription' }"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Early access
          </router-link>
        </div>
        <!--Right Col-->
        <div class="w-full lg:w-2/5 py-6 text-center">
          <img
            class="md:max-w-xl lg:w-full mx-auto z-50"
            src="@/assets/img/growth_analytics.svg"
          />
        </div>
      </div>
    </div>
    <div class="relative -mt-12 lg:-mt-24">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            ></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4"
              opacity="0.200000003"
            ></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>

    <!-- Services -->
    <section class="bg-white border-b py-8 px-6">
      <div class="container max-w-5xl mx-auto m-8 text-gray-800">
        <h1
          class="w-full px-2 my-2 text-4xl md:text-5xl font-bold leading-tight text-center"
        >
          First class tools in your hands
        </h1>
        <div class="w-full mb-12">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <div class="items-center mb-8 w-full">
          <div
            class="max-w-5xl mx-auto text-center leading-normal text-lg sm:text-2xl md:px-3 lg:mb-28"
          >
            <p>
              Monitoring tools should be easy to use. User agents everywhere?
              Configuring your tools and services is a burden? Bad user
              experience?
            </p>

            <p class="mt-5">
              With our API-centric services and our no-code interface go
              straight to the point : <b>Deliver!</b>
            </p>
          </div>
        </div>

        <!-- Monitor endpoints -->
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 py-6">
            <h3 class="text-3xl  font-bold leading-none mb-3">
              Endpoint monitoring
            </h3>
            <p class="mb-8 text-base md:text-lg tracking-wide">
              Use our no-code tools to write API tests and simulate user
              transactions. Get insights about your endpoints performance,
              availability, and security in any environment from 18 locations in
              the world. Detect user-facing issues before they do and improve
              their experience.
            </p>
          </div>

          <div class="w-full sm:w-1/2 py-6">
            <img
              class="w-full sm:h-64 mx-auto"
              src="@/assets/img/server_status_check.svg"
            />
          </div>
        </div>

        <!-- CI/CD integration -->
        <div class="flex flex-wrap flex-col-reverse sm:flex-row my-12">
          <div class="w-full sm:w-1/2 p-6">
            <img
              class="w-full sm:h-64 mx-auto"
              src="@/assets/img/pipeline.svg"
            />
          </div>
          <div class="w-full sm:w-1/2 py-6 mt-6">
            <div class="lg:align-middle">
              <h3 class="text-3xl  font-bold leading-none mb-3">
                Pipeline integration
              </h3>
              <p class="mb-8 text-base md:text-lg tracking-wide">
                Prepare your releases in confidence by integrating the tests in
                your pipelines. Identify any regression or failure in your
                environments and automate your rollbacks. We provide you all the
                tools and APIs to trigger your test suites in a centralized way
                and reduce the cost of maintainance across your teams.
              </p>
            </div>
          </div>
        </div>

        <!-- Incident management -->
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 py-6 mt-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Incident management
            </h3>
            <p class="mb-8 text-base md:text-lg tracking-wide">
              Improve your meantime to resolution with our incident management
              service. We provide you an easy way to define your escalation
              process and who to alert at the right time. Get data and logs from
              our monitoring tools to help your teams to investigate on
              incidents.
            </p>
          </div>

          <div class="w-full sm:w-1/2 p-6">
            <img
              class="w-full sm:h-64 mx-auto"
              src="@/assets/img/incident_management.svg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- monitoring pillars -->
    <section class="bg-white border-b py-8 px-6">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12 text-gray-800">
        <h1
          class="w-full px-2 my-2 text-4xl md:text-5xl font-bold leading-tight text-center"
        >
          All-in-one monitoring
        </h1>
        <div class="w-full mb-12">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <!-- Highlighted tools -->
        <div class="w-full lg:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="card-border-wrap shadow hover:shadow-lg">
            <div class="flex-1 overflow-hidden card bg-white md:h-64 lg:h-96">
              <div
                class="w-full font-bold text-lg text-gray-800 text-center py-4 capitalize"
              >
                Endpoint monitoring
              </div>
              <p class="text-gray-800 text-base md:text-lg px-6 mb-5">
                <ul class="list-disc list-outside space-y-3 pl-3">
                  <li>Multi request types: gRPC, HTTP, Websocket, SSL, DNS, TCP, UDP</li>
                  <li>Uptime in 18 locations: Americas, Asia Pacific, EMEA</li>
                  <li>Profiler: response time per layer, network traces</li>
                  <li>Assertion tool: status, body, headers, response time, ...</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="card-border-wrap shadow hover:shadow-lg">
            <div class="flex-1 overflow-hidden card bg-white md:h-64 lg:h-96">
              <div
                class="w-full font-bold text-lg text-gray-800 text-center py-4 up capitalize"
              >
                Security monitoring
              </div>
              <p class="text-gray-800 text-base md:text-lg px-6 mb-5">
                <ul class="list-disc list-outside space-y-3 pl-3">
                  <li>Flexible rules: configure your own patterns to detect specific security threats</li>
                  <li>Web attacks: SQL injection, XSS, attack patterns</li>
                  <li>Bot detection: scanners, scrapers, crawlers</li>
                  <li>Graphs and data: follow the threats per locations, IPs, endpoints, ...</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="card-border-wrap shadow hover:shadow-lg">
            <div class="flex-1 overflow-hidden card bg-white md:h-64 lg:h-96">
              <div
                class="w-full font-bold text-lg text-gray-800 text-center py-4 capitalize"
              >
                Incident management
              </div>
              <p class="text-gray-800 text-base md:text-lg px-6 mb-5">
                <ul class="list-disc list-outside space-y-3 pl-3">
                  <li>Escalation tool: define your policies, thresholds (location, number of alerts, ...)</li>
                  <li>Alerts configuration: who is on call, team rotations, notifications</li>
                  <li>Integrations: SMS, emails, Slack, PagerDuty.</li>
                  <li>Incident details: timeline, errors logs, people on call</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-8 px-6">
      <div class="container mx-auto pt-4 pb-12 text-gray-800">
        <h1
          class="w-full my-2 text-4xl sm:text-5xl font-bold leading-tight text-center text-gray-800"
        >
          About our early program
        </h1>
        <div class="w-full mb-12">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <div class="items-center mb-8 w-full">
          <p
            class="max-w-5xl mx-auto text-center tracking-wide text-lg lg:text-2xl md:px-2"
          >
            We develop our tools in direct coordination with developers,
            testers, security engineers, and CTOs. Our early program allow them
            to discover our platform, start to build their monitoring strategy
            and provide feedback to our team so we can improve our services and
            products to better suit their needs.
          </p>

          <!-- <quote
            class="max-w-xl mx-auto mt-20"
            avatarAlt="avatar"
            :avatarSrc="require('@/assets/img/john_doe.jpg')"
            company="John Doe Studio"
            linkUrl="https://john-doe.studio/"
            name="John Die"
            quote="Sentence example."
          ></quote> -->
        </div>
      </div>
    </section>
    <!-- Change the colour #f8fafc to match the previous section colour -->
    <svg
      class="wave-top"
      viewBox="0 0 1439 147"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#f3f4f6">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g
              transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <section
      id="subscription"
      class="container mx-auto text-center p-6 mb-12 text-gray-800"
    >
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
        Be an early adopter!
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-30 my-0 py-0 rounded-t"
        ></div>
      </div>
      <h3
        class="mt-6 text-xl md:text-2xl leading-tight text-center mx-auto max-w-4xl px-5 md:px-10"
      >
        By subscribing now, you benefit from free access to the services and
        products of the <i>early program</i> and will receive e-mails from our newsletter.
      </h3>

      <p class="mt-3 mb-6 text-xl">
        You acknowledge the
        <router-link
          :to="{ name: 'Privacy' }"
          class="link-gray"
          > privacy policy
        </router-link>.
      </p>

      <form
        action="https://owlduty.us8.list-manage.com/subscribe/post?u=280c966331f0d74927934645c&amp;id=823ed6cc81&amp;f_id=007665e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="flex flex-wrap place-content-center"
        target="_blank"
        novalidate
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Enter your email"
          class="block w-2/3 sm:w-1/3 px-4 py-3 text-base appearance-none text-black border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input
            type="text"
            name="b_8457af6098b4ed4844478d37e_37867ba4b8"
            tabindex="-1"
            value=""
          />
        </div>
        <button
          class="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-2/3 sm:w-1/5 border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150"
        >
          <span>Subscribe</span>
          <span
            class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0"
          >
            <svg class="h-8 w-8 spin" viewBox="0 0 24 24">
              <path
                class="text-gray-600"
                fill="currentColor"
                d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"
              ></path>
              <path
                class="text-gray-400"
                fill="currentColor"
                d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z"
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </section>
  </div>
</template>

<script>
// import Quote from "../components/Quote.vue";

export default {
  name: "Home",
  components: {
    // Quote,
  },
  mounted() {},
};
</script>
