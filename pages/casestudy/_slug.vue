<template>
    <div class="">
        <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
-->
        <div class="bg-white overflow-hidden">
            <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="hidden lg:block bg-yellow-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
                <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{article.type}}</h2>
                        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{article.title}}</h3>
                    </div>
                </div>
                <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div class="relative lg:row-start-1 lg:col-start-2">
                        <svg
                            class="hidden lg:block absolute top-20 right-0 -mt-20 -mr-20"
                            width="404"
                            height="384"
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                                height="384"
                                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                            />
                            </svg>

                            <div
                                v-if="article.coverimage"
                                class="relative text-base mx-auto max-w-prose lg:max-w-none"
                            >
                                <figure>
                                    <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <img
                                            class="object-cover object-center "
                                            :src="article.coverimage"
                                            alt=""
                                        >
                                            <div
                                                class="absolute inset-0"
                                                :class="article.bgeffect"
                                            ></div>
                    </div>
                    <figcaption class="mt-3 flex text-sm text-gray-500">
                        <span class="ml-2"></span>
                    </figcaption>
                    </figure>
                </div>
                <div class="pt-10 pb-10 text-base max-w-prose mx-auto lg:max-w-none">
                    <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Technology Stack</h2>
                </div>

                <ul class="z-20 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                    <li
                        v-for="technology of article.technologies"
                        :key="technology.name"
                    >
                        <div class="space-y-4">
                            <img
                                class="mx-auto h-10 w-10 lg:w-10 lg:h-10"
                                v-bind:src="'https://raw.githubusercontent.com/get-icon/geticon/b1aa317dee1a9b6d7ad739887eb4c09525f9cffd/icons/' + technology.icon"
                                :alt="technology.name"
                            >
                                <div class="space-y-2">
                                    <div class="text-xs text-center font-medium lg:text-sm">
                                        <h3>{{technology.name}}</h3>
                                        <!--<p class="text-indigo-600">{{technology.version}}</p>-->
                                    </div>
                                </div>
                        </div>
                        </li>
                </ul>
            </div>
            <div class="mt-8 lg:mt-0">
                <article class="prose md:prose-md">
                    <nuxt-content :document="article" />
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
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("casestudy", params.slug).fetch();
    return {
      article,
    };
  },
};
</script>
