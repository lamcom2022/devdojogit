<template>
    <div
        id="app"
        class="bg-white"
    >
        <div class="relative overflow-hidden">

            <Header/>
            <main>
                <!-- Replace with your content -->
                <nuxt />
                <!-- /End replace -->
            </main>
            <Footer />
        </div>
        </div>
</template>

<script>
import Header from "@/components/landing/header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
