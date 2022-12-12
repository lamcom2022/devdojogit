<template>
  <div class="w-full sm:w-1/2 mx-2 shadow mb-4">
    <div
      class="px-2 py-2 border-l-4 bg-red-200 border-red-600"
      v-bind:class="{ 'bg-yellow-200 border-green-600': running }"
    >
      <div class="font-bold">
        <a href="#">{{ this.serviceName }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  title: String,
  serviceName: String
},
  data() {
    return {
      running : false,
      progress : true
    };
  },
  beforeMount(){
 this.GetServiceStatus()
  },
   mounted() {


  },
  methods: {
     GetServiceStatus: function() {
     this.running = true;
  }
}
}
</script>
