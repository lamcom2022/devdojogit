<template>
 <div class="relative bg-green-50">
                <div class="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <img class="w-full h-full object-cover" src="https://res.cloudinary.com/dhdvqdtsc/image/upload/v1650026733/Screenshot_2022-04-15_at_6.14.10_PM_cgz480.png" alt="">
                    <!-- <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600" style="mix-blend-mode: multiply;"></div> -->
                </div>
                <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div class="md:ml-auto md:w-1/2 md:pl-10">
                        <p class="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-900 block text-4xl font-extrabold tracking-tight sm:text-4xl">
                            Courses we offer
                        </p>
                        <bulletlist :data="bullets"/>
                        <div class="mt-8">
                            <div class="inline-flex">
                                <!-- @click="$nuxt.$emit('evtShowRegister')" -->
                                <a 
                                 @click="$nuxt.$emit('evtShowRegister')"
                                class="inline-flex font-bold items-center justify-center px-5 py-3 border border-transparent rounded-full bg-pink-500 hover:bg-pink-700 hover:text-white focus:border-pink-700  active:bg-pink-700">
                                    Schedule a Tour
                                    <!-- Heroicon name: solid/external-link -->
                                    <svg class="-mr-1 ml-3 h-5 w-5 text-base" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import bulletlist from '@/components/bulletlist.vue'

const bullets = {
    caption: " ",
    intro : " ",
    color : "green",
    textClass : "text-lg text-gray-100",
    bulletColor : "green",
    items : [
       "Odissi",
       "Carnatic Music",
       "Bharathanatiyam",
       "Bollywood",
       "Yoga for children"
    ]
    }

export default {
  components: {
      bulletlist
  },
 data() {
        return {
            bullets
        };
    }
};
</script>
