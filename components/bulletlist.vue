<template>
<div class="space-y-5 sm:space-y-4" :class="data.textClass!='' ? 'text-lg text-purple-900':''">
     <h2 v-if="data.caption" class="text-2xl font-extrabold tracking-tight sm:text-4xl">
       <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-900">
       {{data.caption}}
       </span>
       </h2>
     <p v-if="data.intro" class="text-base">{{data.intro}}</p>
     <ul  v-for="(bullet,index) in data.items" :key="bullet" class="space-y-4 pl-4">
        <li class="flex items-center" :aria-controls="'bullet-'+index">
           <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-Green-500">
                <input type="radio" name="color-choice" value="Green" class="sr-only" aria-labelledby="color-choice-1-label">
                <p id="color-choice-1-label" class="sr-only">Green</p>
                <span aria-hidden="true" class="h-5 w-5 bg-pink-500 border border-black border-opacity-10 rounded-full"></span>
            </label>
            <p class="ml-4">
                {{bullet}}
            </p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  components: {},
  props: {
    data: Object
  },
  data() {
       return {}
    },
  methods: {
    
    }
};
</script>
