<template>
   <div>
      <brand />
      <assets />
   </div>
</template>
<script>
import brand from "@/components/brand-assets/brand.vue";
import assets from "@/components/brand-assets/assets.vue";
export default {
  layout: "main",
  components: {
    brand,
    assets
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