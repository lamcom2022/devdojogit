<template>
    <div class="m-4">
    <div>
      <section class="flex mt-4">
        <!--Middle Column (starts)-->
        <div class="flex-1 mr-4">
          <!--Body Flex Box # 1 (Starts)-->
            <div class="bg-white border rounded shadow">
              <header class="flex items-center pl-6 pr-3 pt-6">
                <span class="font-semibold inline-flex items-center text-gray-700">
                  <span>
                    <p>Header</p>
                  </span>
                </span>
              </header>
              <div class="flex mx-5 py-4">
                <div class="mt-3 grid w-full h-full">
                 
                </div>
              </div>
              <footer class="border-t flex justify-end px-5 py-4">
                <p>Footer</p>
              </footer>
            </div>
          <!--Body Flex Box # 1 (Ends)-->
        </div>
        <!--Middle Column (Ends)-->
        <!--Right Column (starts)-->
        <div class="w-1/5">
          <!--side bar grid (starts)-->
          <side-bar-grid-vertical-navigation />
          <!--side bar grid (ends)-->
        </div>
        <!--Right Column (Ends)-->
      </section>
    </div>
   
  </div>
</template>
