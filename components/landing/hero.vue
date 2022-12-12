<template>
  <div class="pt-10 lg:pt-8 lg:pb-14 ">
    
    <!-- Section 1 -->
    <section class="relative bg-purple-900">
        <div class="absolute inset-0 flex justify-end w-full h-full overflow-hidden opacity-50">
            <img src="https://cdn.devdojo.com/images/july2021/block-pattern.png" class="absolute inset-0 object-cover w-full h-full opacity-30">
        </div>
        <div class="relative flex flex-col px-16 py-16 mx-auto max-w-7xl bg-gradient-to-r lg:flex-row from-transparent via-purple-900 to-transparent">
            <img src="https://cdn.devdojo.com/images/july2021/magic-mesh.png" class="absolute opacity-50">

            <div class="relative flex flex-col w-full mb-16 lg:mb-0 lg:w-2/3 sm:justify-center sm:items-center sm:text-center lg:text-left lg:items-start">
                <p class="mb-4 font-mono text-sm font-bold tracking-wide text-purple-300 uppercase">Templates that are</p>
                <h1 class="mb-8 text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">Designed for Developers</h1>
                <p class="max-w-xl mx-auto mb-8 text-purple-200 sm:text-lg lg:text-xl lg:pr-20 lg:max-w-none lg:mx-0">All of our templates and designs were crafted for developers. Designed with clean structure and easy to customize code.</p>
                <a href="#_" class="inline-flex items-center justify-center w-full px-6 py-4 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-purple-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:max-w-xl sm:mb-0 lg:w-auto hover:bg-purple-500 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
                    <span>Signup Today</span>
                    <span class="ml-1 text-sm font-light"> - It's Free</span>
                </a>
            </div>
            <div class="relative flex items-center justify-center w-full max-w-xl mx-auto lg:w-1/2">
                <img src="https://cdn.devdojo.com/images/july2021/3d-character.png" class="w-full h-auto xl:pr-5 lg:translate-y-5">
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import menuitems from "@/store/siteconfig.json";
export default {
  components: {},
  data() {
    return {
      menuitems,
    };
  },
  methods: {},
};
</script>
<style>
    .carousel-open:checked+.carousel-item {
      position: static;
      opacity: 100;
    }
  
    .carousel-item {
      -webkit-transition: opacity 0.6s ease-out;
      transition: opacity 0.6s ease-out;
    }
  
    #carousel-1:checked~.control-1,
    #carousel-2:checked~.control-2,
    #carousel-3:checked~.control-3 {
      display: block;
    }
  
    .carousel-indicators {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 2%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 10;
    }
  
    #carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
    #carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
    #carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
      color: #2b6cb0;
      /*Set to match the Tailwind colour you want the active one to be */
    }
  </style>