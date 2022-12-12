<template>
<div v-if="isMasterFormVisible" class="fixed inset-0 overflow-hidden z-20">
    <div class="absolute inset-0 overflow-hidden">
        <section class="absolute inset-y-0 pl-16 max-w-full right-0 top-20 flex">
            <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
            <div class="w-screen max-w-2xl">
                <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                    <div class="flex-1 h-0 overflow-y-auto">
                        <header class="space-y-1 py-6 px-4 bg-yellow-700 sm:px-6">
                            <div class="flex items-center justify-between space-x-3">
                                <h2 class="text-lg leading-7 font-medium text-white">
                                    Masters
                                </h2>
                                <div class="h-7 flex items-center">
                                    <button @click="$nuxt.$emit('SaveAndUpdateMasters')" aria-label="Close panel" class="text-yellow-200 hover:text-white transition ease-in-out duration-150">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm leading-5 text-yellow-300">
                                    Create or update master record
                                </p>
                            </div>
                        </header>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="px-4 divide-y divide-gray-200 sm:px-6">
                                <div class="space-y-6 pt-6 pb-5">
                                    <form class="space-y-8 divide-y divide-gray-200">
                                        <div class="space-y-8 divide-y divide-gray-200">
                                            <div>
                                                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                    <div class="sm:col-span-6">
                                                        <label for="username" class="block text-sm font-medium text-gray-700">
                                                            Code
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input type="text" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Name
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input type="text" name="name" id="username" autocomplete="name" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <Dropdownlist name="parent" label="Parent" :data="['USA', 'IND', 'UK']" api='masters?where={"parent_code":{"contains":"DEPT"}}'/>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                                            Description
                                                        </label>
                                                        <div class="mt-1">
                                                            <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                                                        </div>
                                                        <p class="mt-2 text-sm text-gray-500">Write a few sentences about the master record.</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="sm:col-span-6">
                                                <dt class="text-base  font-medium text-gray-900" id="Enable">
                                                    Publish
                                                </dt>
                                                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-200" -->
                                                    <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto" aria-pressed="true" aria-labelledby="timezone-option-label">
                                                        <span class="sr-only">Use setting</span>
                                                        <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                                                        <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                                                    </button>
                                                </dd>
                                            </div>

                                    
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="button" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                Reset
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-yellow-700 transition duration-150 ease-in-out">
                                Save
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import Dropdownlist from "@/components/Dropdownlist.vue";
export default {
    components: {
        Dropdownlist
    },
    data() {
        return {
            isMasterFormVisible: false
        }
    },
    methods: {
        async SaveAndUpdate() {
            try {
                const {
                    data
                } = await this.$axios.post("/api/masters");
                return this.masters = data

            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {},
    mounted() {

    },
    created() {
        this.$nuxt.$on('SaveAndUpdateMasters', (data) => {
            this.isMasterFormVisible = !this.isMasterFormVisible;
        })
    },
    beforeDestroy() {
        this.$nuxt.$off('SaveAndUpdateMasters')
    }
};
</script>
