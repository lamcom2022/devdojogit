<template>
    <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
        <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
                <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">{{menuitems.featurefullscreenshot[0].smaltitle}}</h2>
                <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    {{menuitems.featurefullscreenshot[0].largetitle}}
                </p>
                <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    {{menuitems.featurefullscreenshot[0].description}}
                </p>
            </div>
            <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" v-bind:src="menuitems.featurefullscreenshot[0].img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import menuitems from "@/store/siteconfig.json";
export default {
    components: {

    },
    data() {
        return {
           menuitems
        };
    },
    methods: {

    },
};
</script>