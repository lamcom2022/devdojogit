<template>
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 bg-white xl:flex">
            <div class="flex-grow w-full max-w-8xl leading-5 mx-auto xl:px-8 lg:flex">
                <div
                    id="content-wrapper"
                    class="m-5 pt-5 min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
                >
                    <h1 class="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
                        <span class="block xl:inline">{{ menuitems.hero.span3 }}</span>
                        <span class="block text-teal-400 xl:inline">{{ menuitems.hero.span4 }}</span>
                    </h1>
                    <p class="text-xl tracking-tight text-gray-800 mb-10"> {{ menuitems.hero.description }}</p>
                    <div class="w-full flex">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
                            <section class="flex">
                                <div class="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
                                    <div class="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
                                        <div class="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                                            <h2 class="text-xl font-semibold mb-2 text-shadow">Getting Started</h2>
                                            <p class="font-medium text-violet-100 text-shadow mb-4">Learn how to get set up to spin up your first bot.</p>
                                            <a
                                                class="mt-auto bg-indigo-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
                                                href="#"
                                            >Start Learning</a>
                                        </div>
                                        <div class="docs_image__1HDuG relative md:pl-6 xl:pl-8 hidden sm:block">
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-20 hidden sm:block"
                                        style="background: linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0));"
                                    ></div>
                        </div>
                        </section>
                        <section class="flex">
                            <div class="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
                                <div class="w-full flex md:flex-col bg-gradient-to-br from-pink-500 to-rose-500">
                                    <div class="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                                        <h2 class="text-xl font-semibold mb-2 text-shadow">Installation</h2>
                                        <p class="font-medium text-rose-100 text-shadow mb-4">Bring up your development environment in public or private cloud.</p>
                                        <a
                                            class="mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
                                            href="/#"
                                        >Start Configuring</a>
                                    </div>
                                    <div class="docs_image__1HDuG relative md:pl-6 xl:pl-8 hidden sm:block">
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block"></div>
                            </div>
                        </section>
                        <section class="flex">
                            <div class="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
                                <div class="w-full flex md:flex-col bg-gradient-to-br from-yellow-400 to-orange-500">
                                    <div class="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                                        <h2 class="text-xl font-semibold mb-2 text-shadow">API reference</h2>
                                        <p class="font-medium text-amber-100 text-shadow mb-4">Examples and references for using api libraries </p>
                                        <a
                                            class="mt-auto bg-orange-600 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
                                            href="#"
                                        >Start Building</a>
                                    </div>
                                    <div class="docs_image__1HDuG relative hidden sm:block">
                                        <div class="absolute left-2 bottom-3 xl:bottom-5">
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-500 hidden sm:block"></div>
                            </div>
                        </section>
                    </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import menuitems from "@/store/siteconfig.json";
export default {
  layout: "docs",
  components: {},
  data() {
    return {
      menuitems,
    };
  },
  created() {},
  beforeDestroy() {},
};
</script>
