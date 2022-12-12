<template>
  <div class="pt-10 bg-gray-900 sm:pt-16 lg:overflow-hidden">
    <div class="mx-auto max-w-8xl lg:px-8 lg:pb-20">
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 pb-20 sm:pb-0">
        <div
          class="
            mx-auto
            max-w-md
            px-4
            sm:max-w-2xl
            sm:px-6
            sm:text-center
            lg:px-0
            lg:text-left
            lg:flex
            lg:items-center
          "
        >
          <div class="">
            <h1
              class="
                mt-4
                text-4xl
                tracking-tight
                font-extrabold
                text-white
               
                sm:text-6xl
                xl:text-6xl
              "
            >
            
              <span
                class="
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-yellow-200
                  to-cyan-400
                  block
                "
                >Brand assets</span
              >
              
            </h1>
            <p
              class="
                mt-3
                text-white font-bold
                sm:mt-5
                sm:text-xl
                lg:text-2xl
                xl:text-xl
              "
            >
              Download official  logos and brand assets
            </p>
          
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div
            class="
              mx-auto
              max-w-md
              px-4
              sm:max-w-2xl
              sm:px-6
              lg:max-w-none
              lg:px-0
            "
          >
          
            <div class="rounded-t-xl overflow-hidden">
              <p class="text-xl text-white py-5">
               The  marks include the  name and logo, and any word, phrase, image, or other designation that identifies the source or origin of any of  products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
