<template>
<div>
    <div class=" max-w-8xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
           <div class="flex-shrink-0 flex items-center">
            <a href="#">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="Workflow">
            </a>
          </div>
            <nav aria-label="Global" class="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                <a v-for="(menu,index) in menuitems.menus" :key="menu.link" :id="menu.title+ '_' + index"
                @mouseover="showMenu" href="#" class="uppercase px-3 py-2 text-gray-900 text-sm font-medium">
                    {{menu.title}}
                </a>
            </nav>
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
           menuitems,
           isVisible: false
        }
    },
    methods: {
        showMenu() {
            //alert(this.isVisible)
            this.isVisible = true;
            //alert(this.isVisible)
        },
        hideMenu() {
            this.isVisible = false;
        },
    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>
