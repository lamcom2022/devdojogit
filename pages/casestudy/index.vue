<template>
  <div>
    <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
      <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Press
          </h2>
          <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p class="text-xl text-gray-500">
              Blogs, Articles and Case studies
            </p>
            <!--<form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email-address" type="email" autocomplete="email" required class="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 lg:max-w-xs" placeholder="Enter your email">
          </div>
          <div class="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
            <button type="button" class="w-full bg-yellow-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:inline-flex">
              Notify me
            </button>
          </div>
        </form>-->
          </div>
        </div>
        <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div
            v-for="article of articles"
            :key="article.slug"
          >

            <div>
              <a
                href="#"
                class="inline-block"
              >
                <span
                  class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  :class="article.type=='Blog' && 'bg-indigo-100 text-indigo-800' || article.type=='Article' && 'bg-pink-100 text-pink-800' || article.type=='Case Study' && 'bg-yellow-100 text-yellow-800'"
                >
                  {{article.type}}
                  </span>
                  </a>
            </div>
            <NuxtLink
              :to="{ name: 'casestudy-slug', params: { slug: article.slug } }"
              class="block"
            >
              <p class="text-xl font-semibold text-gray-900">
                {{article.title}}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{article.description | truncate(100) }}
              </p>
              </NuxtLink>
              <div class="mt-6 flex items-center">
                <!--<div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">{{article.author}}</span>
              <img class="h-10 w-10 rounded-full" src="https://res.cloudinary.com/nathansweb/image/upload/v1614398508//Z_Logo_Alone_ditioa.svg" alt="">
            </a>
          </div>-->
                <div class="">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#">
                      {{article.author}}
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">
                      {{article.date | moment("DD-MMM-YYYY")}}
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div>
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
  filters: {
    truncate(val, len) {
      let n = len === undefined ? 5 : len;
      return s(val)
        .truncate(n)
        .capitalize()
        .value();
    },
  },
  async asyncData({ $content, params }) {
    const articles = await $content("casestudy", params.slug)
      .only([
        "title",
        "author",
        "date",
        "summary",
        "description",
        "coverimage",
        "slug",
        "tags",
        "type",
      ])
      .sortBy("date", "desc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style>
.article-card {
  border-radius: 8px;
}

.article-card a {
  background-color: #fff;
  border-radius: 8px;
}

.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
