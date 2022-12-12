<template>
  <div>
    <!-- <hero /> -->
    <!-- <FeatureGrid/>
    <testimonials />
    <Blog :articles="articles" />
    <Cta/> -->
    <!-- <Clients/> -->
    <!-- <contactSales/> -->
  </div>
</template>
<script>
import hero from "@/components/landing/hero.vue";
import FeatureFullScreenshot from "@/components/landing/feature-full-screen-shot.vue";
import FeatureGrid from "@/components/landing/feature-grid.vue";
import testimonials from "@/components/landing/testimonials.vue";
import Blog from "@/components/landing/blog.vue";
import Cta from "@/components/landing/cta.vue";
import Clients from "@/components/landing/clients.vue";

export default {
  layout: "main",
  head() { 
    return {
    title: ' Swarna Nritya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ' is a Robotic process automation tool which provides a business to configure software bots as a first step toward implementing more complex AI solutions. Increase productivity and scale up operations using Intelligent Process Automation'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Robotic Process Automation, RPA tools, Robotic Automation Software, RPA Consulting services, Design Automation Services, Custom RPA Solutions, robotic process automation consulting, rpa consulting firms, rpa consulting companies, Robotic Process Automation RPA Tools, RPA Bot Development, Business process Automation'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: ''
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://res.cloudinary.com/nathansweb/image/upload/v1640864433/www.xyz.com/brand-assets/logos/svg/NO_BORDER/Group_21-1_krgdr9.svg'
      },
      {
        hid: 'author',
        name: 'author',
        content: ''
      },
      {
        hid: 'copyright',
        name: 'copyright',
        content: ''
      },
      {
        hid: 'reply-to',
        name: 'reply-to',
        content: 'contact@xyz.com'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://cdn.devdojo.com/images/november2020/tails-icon.png' }]
  }},
  components: {
    hero,
    FeatureFullScreenshot,
    FeatureGrid,
    testimonials,
    Blog,
    Cta,
    Clients,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    toggleMobileMenu() {
      //This event pub is required to trigger close button
      //$nuxt.$emit("evtMobilemenu");
    },
  },
  async asyncData({ $content, params }) {
    const articles = await $content("casestudy", params.slug)
      .only([
        "title",
        "description",
        "coverimage",
        "author",
        "date",
        "slug",
        "tags",
        "type",
      ])
      .sortBy("date", "desc")
      .limit(4)
      .fetch();
    return {
      articles,
    };
  },
};
</script>
<style>
a.nuxt-link-active {
  @apply border-green-500;
}
a.nuxt-link-active {
  @apply border-b-4;
}
a.nuxt-link-active {
  @apply font-medium;
}
a.nuxt-link-active {
  @apply m-2;
}
</style>