<template>
    <!-- Feature section with grid -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- <div class="bg-white overflow-hidden"> -->



<!-- Section 2 -->
<section class="bg-white">
    <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">

        <div class="flex flex-col items-center sm:px-5 md:flex-row">
            <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    <div class="bg-pink-500  items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white ">
                        <!-- <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> -->
                        <span>WHAT WE DO</span>
                    </div>
                    <h1 class="text-sm  leading-none lg:text-sm xl:text-sm italic"><a href="#_">He did not dance for the audience. He did not dance for appreciation. He did not dance for the music. He danced only for himself… He had opened himself and the dance had come to him.’</a></h1>
                    <p class="pt-2 text-sm font-medium">by <a href="#_" class="mr-1 underline">Swara Nritya School of Arts</a> </p>
                </div>
            </div>
            
            <div class="w-full md:w-1/3">
                <a href="#_" class="block">
                    <img class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://res.cloudinary.com/dhdvqdtsc/image/upload/v1650023461/Screenshot_2022-04-15_at_5.19.57_PM_ge4hyw.png">
                </a>
                
                <p class=" mt-3 text-sm text-gray-500 italic justify-center">He did not dance for the audience. He did not dance for appreciation. He did not dance for the music. He danced only for himself… He had opened himself and the dance had come to him.</p>
                <!-- <p class="text-sm text-gray-500">He did not dance for the audience. He did not dance for appreciation. He did not dance for the music. He danced only for himself… He had opened himself and the dance had come to him.</p> -->
            </div>
             <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    
                    <p class="text-sm text-gray-500"><span class="font-bold">Teaching:</span>Take a moment and enjoy to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.</p>
                    <p class="text-sm text-gray-500"><span class="font-bold">Creating:</span>Take a moment and enjoy to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.</p>
                    <p class="text-sm text-gray-500"><span class="font-bold">Outreach:</span>Take a moment and enjoy to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.</p>
                    <p class="pt-2 text-sm font-medium">by <a href="#_" class="mr-1 underline">Swara Nritya School of Arts</a></p>
                </div>
            </div>
            
        </div>

        
    </div>
    <!--start-->
    
    <!--end-->
</section>

        <!-- <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <svg
                class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-gray-200"
                            fill="currentColor"
                        />
                        </pattern>
                </defs>
                <rect
                    width="404"
                    height="784"
                    fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
                />
                </svg>

                <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div class="lg:col-span-1">
                        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {{menuitems.featuregrid[0].largetitle}}
                        </h2>
                    </div>

                    <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                            <div
                                class="relative"
                                v-for="(featuregrid) in menuitems.featuregrid[0].children"
                                :key="featuregrid.smaltitle"
                            >
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12">
                                        <img
                                            :src="featuregrid.img"
                                            width="50"
                                            height="50"
                                            :alt="featuregrid.feature"
                                        >
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-semibold text-gray-900">{{featuregrid.feature}}</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    {{featuregrid.description}}
                                </dd>
                        </div>
                    </dl>
                </div>
            </div> -->
    <!-- </div> -->
    <!--End-->
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