<template>
<div id="app">
    <div v-if="!this.$route.query.print" class="pt-2 pb-2 sticky p-2 top-0 z-40 lg:z-50 w-full max-w-7xl mx-auto bg-white flex-none flex">
        <div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72">
            <a class="w-10 md:w-auto" href="/">
                <span class="sr-only">website</span>
                <nuxt-link tag="img" to="/" alt="Logo" class="-ml-4 h-24 w-auto fill-current text-yellow-600 hidden md:block lg:block" :src="$config.appLogo">
                </nuxt-link>
                <nuxt-link tag="img" to="/" alt="Logo" class="h-8 -ml-4 fill-current text-yellow-600 md:hidden lg:hidden"  :src="menuitems.branding.mlogo.source">
                </nuxt-link>
            </a>
        </div>
        <div class="flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 pt-2 pb-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
            <button type="button" class="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">
                <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>
                    Quick search
                    <span class="hidden sm:inline">
                        for anything
                    </span>
                </span>
                <span style="opacity: 1;" class="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
                    <span class="sr-only">
                        Press
                    </span>
                    <kbd class="font-sans">
                        <abbr title="Command" class="no-underline">⌘</abbr></kbd><span class="sr-only"> and </span>
                    <kbd class="font-sans">K</kbd><span class="sr-only"> to search</span></span>
            </button>
            <div class="lg:w-64 pl-8 flex-shrink-0 flex items-center justify-end space-x-6">
                <a href="https://github.com/senthilsweb/zypress" class="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                    <span class="sr-only">GitHub</span>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full mx-auto" :class="this.$route.query.print=='true'? 'max-w-8xl' : 'max-w-7xl'">
        <nuxt />
    </div>
    <!--Floating Menu button in mobileview (Start)-->
    <button type="button" @click="$nuxt.$emit('evtFloatingButtonClick')" class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block lg:hidden">
        <span class="sr-only">Open site navigation</span>
        <svg width="24" height="24" fill="none" class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"  :class="toggleMobileNavButton?'opacity-0 scale-80' : ''">
            <path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <svg width="24" height="24" fill="none" class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform" :class="!toggleMobileNavButton?'opacity-0 scale-80' : ''">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </button>
    <!--Floating Menu button in mobileview (End)-->
</div>
</template>

<script>
//lnbc
// left-nav-color
import menuitems from "@/store/siteconfig.json";
export default {
    props: {

    },
    data() {
        return {
            toggleMobileNavButton: false,
            menuitems
        }
    },
    methods: {

    },
    created() {
        this.$nuxt.$on('evtFloatingButtonClick', (data) => {
            this.toggleMobileNavButton = !this.toggleMobileNavButton
        });
    },
    beforeDestroy() {
        this.$nuxt.$off('evtFloatingButtonClick');
    },
};
</script>

<style>
/*a.nuxt-link-exact-active {
    @apply bg-yellow-300;
}

a.nuxt-link-exact-active {
    @apply border-green-900;
}*/
</style>
