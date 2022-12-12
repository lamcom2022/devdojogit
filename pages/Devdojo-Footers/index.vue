<template>
<div>

    <Footers :Footers="Footers"  />


</div>
</template>

<script>
import Footers from '@/components/devdojo/Footers.vue'
export default {
    layout: 'docs',
    components: {
        Footers
    },
     head() {
    return {
      title: "About us",
      meta: [
        {   
          hid: "description",
          name: "description",
          content: " is a global software company headquartered in Bangalore, India delivering a unified platform for Robotic Process Automation, Business Process Automation, and DataOps - X. We specialize in RPA as a Service that provides sustainable, long-term value",
        },
      ],
    };
  },
    async asyncData({
        $content,
        route
    }) {
        //const teams = await $content('teams').fetch()
        // const aboutus = await $content('aboutus').fetch()
        // return {
        //     teams,
        //     aboutus
        // }
    }
}
</script>
