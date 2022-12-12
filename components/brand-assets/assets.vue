<template>
    <div class="">
        <div class="bg-white pt-10 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
            <div class="relative max-w-lg mx-auto lg:max-w-7xl">

               <h2 class="text-4xl font-extrabold text-gray-900">
                <!--Build faster and focus on your Business Process-->
                Marks
            </h2>
                
                    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10">
                        <li 
                        v-for="asset in brandassets.assets.logos" 
                        :key="asset.asset_name"
                        class="col-span-1 focus:rounded-lg shadow divide-y divide-gray-200 bg-gray-100">
                          <div class="w-full flex items-center justify-between p-6 space-x-6">
                            <div class="flex-1 truncate">
                              <div class="flex items-center space-x-3">
                                <img
                                                      tag="img"
                                                    
                                                      alt="Logo"
                                                    
                                                      class="max-h-20"
                                                      :src="asset.asset_src"
                                                  />
                              </div>
                            </div>
                          
                          </div>
                          <div>
                            <div class="-mt-px flex divide-x divide-gray-900">
                              <div class="w-0 flex-1 flex ">
                              
                                  <span class="p-4 text-sm ">{{asset.asset_name}}</span>
                                <div class="-ml-px w-0 flex flex-1">
                                  <a href="#" class="pt-3">
                                <span class="px-3 py-0.5 rounded-full text-sm font-medium" :class="asset.asset_file_ext=='PNG' && 'bg-indigo-100 text-indigo-800' || asset.asset_file_ext=='SVG' && 'bg-pink-100 text-pink-800' || asset.asset_file_ext=='JPG' && 'bg-yellow-100 text-yellow-800'">
                                    {{asset.asset_file_ext}}
                                  </span>
                                  </a>
                              </div>
                              </div>
                            
                            </div>
                          </div>
                        </li>
                  </ul>
                
        </div>
        <div class="relative max-w-lg mx-auto lg:max-w-7xl">

               <h2 class="text-4xl font-extrabold text-gray-900">
                <!--Build faster and focus on your Business Process-->
                Logos
            </h2>
                
                    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10">
                        <li  
                        v-for="asset in brandassets.assets.marks" 
                        :key="asset.asset_name"
                        class="col-span-1 focus:rounded-lg shadow divide-y divide-gray-200">
                          <div class="w-full flex items-center justify-between p-6 space-x-6 bg-gray-200">
                            <div class="flex-1 truncate">
                              <div class="flex items-center space-x-3">
                                <img
                                                      tag="img"
                                                    
                                                      alt="Logo"
                                                    
                                                      class="max-h-20"
                                                      :src="asset.asset_src"
                                                  />
                              </div>
                            </div>
                          
                          </div>
                          <div>
                            <div class="-mt-px flex divide-x divide-gray-900">
                              <div class="w-0 flex-1 flex bg-gray-200">
                              
                                  <span class="p-4 text-sm ">{{asset.asset_name}}</span>
                                <div class="-ml-px w-0 flex flex-1">
                                  <a href="#" class="pt-3">
                                <span class="px-3 py-0.5 rounded-full text-sm font-medium" :class="asset.asset_file_ext=='PNG' && 'bg-indigo-100 text-indigo-800' || asset.asset_file_ext=='SVG' && 'bg-pink-100 text-pink-800' || asset.asset_file_ext=='JPG' && 'bg-yellow-100 text-yellow-800'">
                                    {{asset.asset_file_ext}}
                                  </span>
                                  </a>
                              </div>
                              </div>
                            
                            </div>
                          </div>
                        </li>
                  </ul>
                
        </div>
    </div>
    </div>
</template>

<script>
import brandassets from "@/store/brand-assets.json";
export default {
  components: {},
 data() {
   
    return {
      brandassets,
     
    };
  },
  filters: {
    prune(val, len) {
      let n = len === undefined ? 100 : len;
      return s(val)
        .prune(n)
        .value();
    },
  },
};
</script>

<style>
.article-card {
  border-radius: 8px;
}

.article-card a {
  background-color: #fff;
  border-radius: 8px;
}

.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>