<template>
  <nav x-data="{ open: true }" class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{'hidden': open, 'inline-flex': !open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{'hidden': !open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:flex">
            <nuxt-link  v-for="(item, key) in menulist" :key="key" :to="item.url" class="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-green-700 transition duration-150 ease-in-out">
              {{item.title}}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'topnavbar',
  components: {
   
  },
  data() {
    return {
      open : false,
      menulist:[
        {"title":"Reports","url":"/reports"}
        ,{"title":"Browser","url":"/browser"}
        ,{"title":"Explore","url":"/explore"}
        ,{"title":"Marketplace","url":"/marketplace"}
        ,{"title":"Pricing","url":"/pricing"}
      ]
    };
  },
  beforeMount(){
 
  },
   mounted() {
    
  },
  methods: {

  }
};
</script>