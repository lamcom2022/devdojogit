<template>
     <div v-if="is_FieldExtractionTemplateDesignerForm_FormVisible" class="fixed inset-0 overflow-hidden z-20">
  <div class="absolute inset-0 overflow-hidden">
    <section class="absolute inset-y-0 pl-16 max-w-full right-0 top-20 flex">
      <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <div class="w-screen max-w-2xl">
        <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
          <div class="flex-1 h-0 overflow-y-auto">
            <header class="space-y-1 py-6 px-4 bg-yellow-700 sm:px-6">
              <div class="flex items-center justify-between space-x-3">
                <h2 class="text-lg leading-7 font-medium text-white">
                  Template Definition
                </h2>
                <div class="h-7 flex items-center">
                  <button @click="$nuxt.$emit('SaveAndUpdate_FieldExtractionTemplateDesignerForm')" aria-label="Close panel" class="text-yellow-200 hover:text-white transition ease-in-out duration-150">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <p class="text-sm leading-5 text-yellow-300">
                  Create or Modify field extraction template for any commercial document.
                </p>
              </div>
            </header>
            <div class="flex-1 flex flex-col justify-between">
              <div class="px-4 divide-y divide-gray-200 sm:px-6">
                <div class="space-y-6 pt-6 pb-5">
                <form class="space-y-8 divide-y divide-gray-200">
                    <div class="space-y-8 divide-y divide-gray-200">
                        <div>
                            <div class="mt-6 grid grid-cols-2 gap-y-6 gap-x-1 sm:grid-cols-6">
                             <div class="sm:col-span-6">
                                <label for="Invoice" class="block text-sm font-medium text-gray-700">
                                    Invoice #.
                                </label>
                                <div class="mt-1 rounded-md shadow-sm border-gray-300">
                                    <input type="text" name="username" id="username" autocomplete="username" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm  focus:border-green-500 focus:ring-1 focus:ring-green-500">
                                </div>
                            </div>
                            <div class="sm:col-span-6">
                                <label for="about" class="block text-sm font-medium text-gray-700">
                                Invoice Description
                                </label>
                                <div class="mt-1 rounded-md shadow-sm border-gray-300">
                                    <textarea id="about" name="about" rows="3" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm  focus:border-green-500 focus:ring-1 focus:ring-green-500"></textarea>
                                </div>
                                <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                                </div>
                             <div class="sm:col-span-6">
                                <Address/>
                             </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
             <span class="inline-flex rounded-md shadow-sm">
              <button type="button" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                Reset
              </button>
            </span>
            <span class="inline-flex rounded-md shadow-sm">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-yellow-700 transition duration-150 ease-in-out">
                Save
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>
<script>
import Address from "@/components/Address.vue";
export default {
  components: {
    Address
  },
    data() {
        return {
            is_FieldExtractionTemplateDesignerForm_FormVisible : true
            }
        },
  methods: {
    async SaveAndUpdate() {
          try {
            const { data } = await this.$axios.post("/api/templates");
            return this.masters = data

          } catch (error) {
            console.log(error)
          }
      }
  },
  computed: {},
  mounted() {
     
  },
  created() {
      this.$nuxt.$on('SaveAndUpdate_FieldExtractionTemplateDesignerForm', (data) => {
        this.is_FieldExtractionTemplateDesignerForm_FormVisible = !this.is_FieldExtractionTemplateDesignerForm_FormVisible;
      })
  },
  beforeDestroy(){
    this.$nuxt.$off('SaveAndUpdate_FieldExtractionTemplateDesignerForm')
  }
};
</script>
