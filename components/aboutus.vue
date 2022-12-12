<template>

    <div>

        <div
            class="hidden sm: sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
            aria-hidden="true"
        >

    </div>
    <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-7xl lg:py-24">
            <div class="space-y-12 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0">
                <div class="space-y-5 sm:space-y-4 lg:col-span-3 ">
                    <h1 class="text-2xl font-extrabold tracking-tight sm:text-4xl"><span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-900">Who are we?</span></h1>
                    
                    <p class="text-base">
                         Lorum Ipsum
                    </p>
                    <h2 class="text-2xl font-extrabold tracking-tight sm:text-4xl">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-900 ">
                        Our Mission
                        </span>
                        </h2>
                    <p class="text-base">
                         Lorum Ipsum
                    </p>
                    <h2 class="text-2xl font-extrabold tracking-tight sm:text-4xl">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-900 ">
                        Our Goals
                        </span>
                        </h2>
                    <p class="text-base">
                         Lorum Ipsum
                    </p>
                    <bulletlist :data="bullets" />
                </div>
                <div class="lg:col-span-2">
                    <div>
                        <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                            <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                                <dt class="text-base font-medium text-white">Founded</dt>
                                <dd class="text-3xl font-extrabold tracking-tight text-white">2020</dd>
                            </div>

                            <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 bg-gradient-to-br from-gray-500">
                                <dt class="text-base font-medium text-white">Team Size</dt>
                                <dd class="text-3xl font-extrabold tracking-tight text-white">3</dd>
                            </div>

                            <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 bg-gradient-to-br from-green-400 to-blue-500">
                                <dt class="text-base font-medium text-white">Students</dt>
                                <dd class="text-3xl font-extrabold tracking-tight text-white">113</dd>
                            </div>
                            <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 bg-gradient-to-br from-pink-500 to-purple-500">
                                <dt class="text-base font-medium text-white">Branches</dt>
                                <dd class="text-3xl font-extrabold tracking-tight text-white">3</dd>
                            </div>
                           
                        </dl>

                    </div>
                </div>
                <!--<div class="lg:col-span-3">
                    <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                        <li
                            v-for="team of teams"
                            :key="team.slug"
                            class="sm:py-8"
                        >
                            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">

                                <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                    <img
                                        class="object-cover shadow-lg rounded-lg"
                                        :src="team.coverpicture"
                                        alt=""
                                    >
                                </div>
                                <div class="sm:col-span-2">
                                    <div class="space-y-4">
                                        <div class="text-lg leading-6 font-medium space-y-1">
                                            <h3>{{team.name}}</h3>
                                            <p class="text-indigo-600">{{team.title}}</p>
                                        </div>
                                        <div class="text-lg">
                                            <p class="">{{team.bio}}</p>
                                        </div>
                                        <ul class="flex space-x-5">
                                            <li>
                                                <a
                                                    :href="team.twitter"
                                                    class="text-gray-400 hover:"
                                                >
                                                    <span class="sr-only">Twitter</span>
                                                    <svg
                                                        class="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                        </svg>
                                                        </a>
                                            </li>
                                            <li>
                                                <a
                                                    :href="team.linkedin"
                                                    class="text-gray-400 hover:"
                                                >
                                                    <span class="sr-only">LinkedIn</span>
                                                    <svg
                                                        class="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                            clip-rule="evenodd"
                                                        />
                                                        </svg>
                                                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </li>
                    </ul>
                </div>-->

            </div>
        </div>
    </div>
    </div>
</template>

<script>
import bulletlist from "@/components/bulletlist.vue";

const bullets = {
  caption: "Courses we offer",
  intro: "We truly believe in the power of staying small. By staying small",
  textClass: "",
  bulletColor: "green",
  items: [
    "Odissi",
    "Carnatic Music",
    "Bharathanatiyam",
    "Bollywood",
    "Yoga for children"
  ],
};

export default {
  components: {
    bulletlist,
  },
  data() {
    return {
      bullets,
    };
  },
  props: {
    teams: Array,
    aboutus: [String,Object],
  },
  filters: {
    prune(val, len) {
      let n = len === undefined ? 100 : len;
      return s(val)
        .prune(n)
        .value();
    },
  },
};
</script>
