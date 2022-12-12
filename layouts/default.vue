<template>
<div id="app" class="font-sans text-gray-800 bg-white dark:bg-black">

    <div class="h-screen flex overflow-hidden bg-white" x-data="{ sidebarOpen: false }">
        <!-- Static sidebar for desktop -->
        
        <div class="flex flex-col w-0 flex-1 overflow-hidden">
            <div v-if="print!='true'" class="relative z-10 flex-shrink-0 flex h-20 bg-white">
                <button @click.stop="sidebarOpen = true" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <div class="flex-1 flex justify-between ">
                    <div class="flex-auto w-7/8 pt-3">
                        <!--Navbar Header-->
                        <NavBarFlyoutMenu showBranding=true showActionButtons=false isAuthenticated=true textColor="black" />
                    </div>
                </div>
            </div>
            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0" x-data x-init="$el.focus()">
        <div class="max-w-full mx-auto">
                    <!-- Replace with your content -->
                    <nuxt />
                    <!-- /End replace -->
                </div>
            </main>
        </div>
    </div>
</div>
</template>

<script>
//import NavBar from "@/components/NavBar.vue"
import AppBranding from "@/components/AppBranding.vue";
import NavBarFlyoutMenu from "@/components/NavBarFlyoutMenu.vue";
import LeftNavBar from "@/components/LeftNavBar.vue";
import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";

export default {
    name: "app",
    components: {
        AppBranding,
        LeftNavBar,
        LeftNavProfileBar,
        NavBarFlyoutMenu
    },
    data() {
        return {
            theme: '',
            print : this.$route.query.print
        }
    },
    beforeCreate() {
        //this.theme = localStorage.getItem('theme') || 'dark'
        this.theme = 'dark'
        localStorage.theme = 'dark';
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
};
</script>
