<template>
    <div class="">
        <div class="bg-yellow-50 overflow-hidden">
            <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-2 lg:px-4">
                <div class="flex flex-col">
                     <div class="pb-20 ">
                         <div class="flex flex-row">
                            <div class="w-1/2"><h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-indigo-800 block">{{technology.title}}</span></h3>
                            </div>
                            <div class="hidden w-3/4 text-xl bg-yellow-100 prose sm:block  border-4 border-indigo-700 rounded-tl-2xl rounded-br-2xl">
                            <div class="p-2 tracking-widest ">{{technology.summary}}</div>
                            </div>
                         </div>
                    </div>
                    <div class="p-4 ">
                         <img class="object-cover object-center" :src="technology.coverimage" :alt="technology.title" >
                    </div>
                </div>
                <!--<div class="hidden lg:block bg-yellow-100 absolute top-0 bottom-0 left-3/4 w-screen"></div>-->
               
                <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    
            <div class="mt-8 lg:mt-0">
                <article class="prose md:prose-xl">
                    <!--<nuxt-content :document="technology" />-->
                </article>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  layout: "docs",
  components: {},
  async asyncData({ $content, params }) {
    const technology = await $content("technology", params.slug).fetch();
    return {
      technology,
    };
  },
};
</script>
