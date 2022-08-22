<template>
  <div id="app">
    <!--Nav-->
    <nav id="header" class="fixed w-full z-30 top-0 text-white">
      <div
        class="w-full container mx-auto flex flex-wrap justify-between mt-0 pb-3 pt-2"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center pl-4 text-gray-900 no-underline hover:no-underline font-bold text-xl lg:text-4xl"
        >
          <img
            class="w-12"
            src="/android-chrome-192x192.png"
            alt="Owl Duty logo"
          />
          <span class="pt-2 -ml-1 text-gray-800 text-4xl antialiased"
            >wl Duty</span
          >
        </router-link>
        <router-link
          id="navAction"
          :to="{ name: 'Home', hash: '#subscription' }"
          class="mr-4 capitalize hover:underline rounded-full bg-white text-gray-800 font-bold mt-4 py-3 px-8 md:py-4 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Early access
        </router-link>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    <router-view />
    <footer class="bg-gray-100">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-2 mb-6 text-gray-800">
            <h1 class="flex items-center">
              <img
                class="w-12"
                src="/android-chrome-192x192.png"
                alt="Owl Duty logo"
              />
              <span class="-ml-1 pt-2 text-4xl font-bold">wl Duty</span>
            </h1>
          </div>
          <div class="w-1/6"></div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/owldutyhq"
                  target="_blank"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >Twitter</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.linkedin.com/company/owlduty"
                  target="_blank"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >Linkedin</a
                >
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <router-link
                  :to="{ name: 'Privacy' }"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >Privacy
                </router-link>
              </li>
            </ul>
          </div>

          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Company</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="mailto:hello@owlduty.com"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>

<script>
export default {
  mounted() {
    document.addEventListener("scroll", function() {
      /*Apply classes for slide in bar*/
      var scrollpos = window.scrollY;
      var header = document.getElementById("header");
      var navaction = document.getElementById("navAction");
      var toToggle = document.querySelectorAll(".toggleColour");

      if (scrollpos > 10) {
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-gray-800");
          toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
      } else {
        header.classList.remove("bg-white");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800");
        //Use to switch toggleColour colours

        for (var j = 0; j < toToggle.length; j++) {
          toToggle[i].classList.add("text-white");
          toToggle[i].classList.remove("text-gray-800");
        }

        header.classList.remove("shadow");
      }
    });
  },
};
</script>
