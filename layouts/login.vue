<template>
<div id="app">
  
    <div class="min-h-screen flex-col  justify-center flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row">

        <div class="sm:mx-auto sm:w-full sm:max-w-md py-40">
            <a href="/#" class="font-medium text-yellow-600 hover:text-yellow-500">
             <img
                                tag="img"
                                to="/#"
                                alt="Logo"
                              class="mx-auto h-12 w-auto" 
                                :src="menuitems.branding.mark.source"
                            />
                            </a>
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Get started with {{menuitems.title}}
    </h2>
     <p class="mt-2 text-center text-sm text-gray-600 max-w">
                        Don't have an account yet?
                        <a href="#" class="font-medium text-yellow-600 hover:text-yellow-500">
                            Sign up
                        </a>
                    </p>
    
            <div>
              
             <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white px-4  sm:rounded-lg sm:px-10">
                       

                        <form @submit.prevent="login">
                            <input type="hidden" name="remember" value="true" />
                            <div class="mt-10 flex items-center justify-center">
                                <div class="flex items-center">
                                    <label class="ml-2 block text-sm leading-5 text-red-900">
                                        {{ error }}
                                    </label>
                                </div>
                            </div>
                            <div class="rounded-md shadow-sm">
                                <div>
                                    <input v-model="email" aria-label="Email address" name="email" type="email" value="admin@youremail.com" required class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none sm:text-sm border-gray-300" placeholder="Email address" />
                                </div>
                                <div class="-mt-px">
                                    <input v-model="password" aria-label="Password" name="password" type="password" value="admin" required class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300" placeholder="Password" />
                                </div>
                            </div>

                            <div class="mt-6 flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember_me" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-yellow-600 border-gray-300" />
                                    <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div class="text-sm leading-5">
                                    <a href="#" class="font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div class="mt-6">
                                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-yellow-700 transition duration-150 ease-in-out">
                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg class="h-5 w-5 text-white group-hover:text-white transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

        <div class="hidden lg:block relative bg-gradient-to-br bg-gray-200 lg:w-1/2 lg:h-full">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="require('@/assets/login-cover-page.jpeg')" alt="Telecom" />
        </div>
    </div>
</div>
</template>

<script>
import store from "../vuex/store";
import FeatureGrid from "@/components/landing/feature-grid.vue";
import menuitems from "@/store/siteconfig.json";
export default {
    components: {
        FeatureGrid
    },
    data() {
        return {
            users: {},
            email: "",
            password: "",
            error: null,
            menuitems,
        };
    },
    methods: {
        // Method to authenticate user
        async login() {
            try {
                //Temporary code (start)
                
                //Temporary code (end)
                store
                    .dispatch("login", {
                        email: this.email,
                        hashed_password: this.password,
                    })
                    .then(() => {
                        if (store.state.user.Success == false) {
                            this.error = store.state.user.Message;
                            return;
                        } else {
                            this.$router.push({
                                name: "organization",
                            });
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
