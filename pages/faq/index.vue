<template>
<div>

    <faq :data="faq" />


</div>
</template>

<script>
import faq from '@/components/faq.vue'
export default {
    layout: 'docs',
    components: {
        faq
    },
    async asyncData({
        $content,
        route
    }) {
        const faq = await $content('faq').fetch()
        return {
            faq
        }
    }
}
</script>
