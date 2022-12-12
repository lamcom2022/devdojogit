<template>
<section v-if="isSignUpFormVisible" class="z-10 fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0" aria-hidden="true"></div>
        <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div class="w-screen max-w-md">
                <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-2xl">
                    <div class="flex-1 h-0 overflow-y-auto">
                        <header class="space-y-1 py-6 px-4 bg-pink-700 sm:px-6">
                            <div class="flex items-center justify-between space-x-3">
                                <h2 class="text-lg leading-7 font-medium text-white">
                                    Swara Nritya Student Registration Form
                                </h2>
                                <div class="h-7 flex items-center">
                                    <button v-on:click="isSignUpFormVisible=false" aria-label="Close panel" class="text-yellow-200 hover:text-white transition ease-in-out duration-150">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm leading-5 text-yellow-300">
                                    The information that you have provided in this registration form is used by Swara Nritya so that we can contact you regarding classes and events, as well as ensuring that we are able to contact you in an emergency.Information collected by this form will be held for a limited time in accordance with GDPR. 
                                </p>
                            </div>
                        </header>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="px-4 divide-y divide-gray-200 sm:px-6">
                                <div class="space-y-6 pt-6 pb-5">
                                    <form name="Contact" id="Contact" class="space-y-8" method="POST" data-netlify="true" netlify-honeypot="bot-field" netlify @submit.prevent="sendRegistrationUs" ref="frmContact">
                                        <input type="hidden" name="form-name" value="Contact" />
                                        <div class="sm:overflow-hidden">
                                            <div class="bg-white space-y-6">
                                                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                    <div class="sm:col-span-6">
                                                        <label for="student_full_name" class="block text-sm font-medium text-gray-700">Student Full Name <span class="text-red-500">*</span></label>
                                                        <div class="mt-1">
                                                            <input v-model="data.student_full_name" type="text" name="student_full_name" id="student_full_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="date_of_birth" class="block text-sm font-medium text-gray-700">Date of Birth <span class="text-red-500">*</span></label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <VueCtkDateTimePicker label="" color="#50E3C2" button-color="#50E3C2" onlyDate="true" format="YYYY-MM-DD hh:mm:ss" formatted="L" v-model="data.date_of_birth" 
                                                             auto-close="false"  class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="medical_information" class="block text-sm font-medium text-gray-700">
                                                            Medical Information e.g Asthma, nut allergy. Please state N/A if there is no medical information that we need to be aware of
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.medical_information" type="text" id="medical_information" name="medical_information" autocomplete="name" class="py-3 px-4 flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="your_name" class="block text-sm font-medium text-gray-700">Your name <span class="text-red-500">*</span></label>
                                                        <div class="mt-1">
                                                            <input v-model="data.your_name" type="text" name="your_name" id="your_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="home_address" class="block text-sm font-medium text-gray-700">Home Address(Please include Postcode)<span class="text-red-500">*</span></label>
                                                        <div class="mt-1">
                                                            <input v-model="data.home_address" type="text" name="home_address" id="home_address" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="Email" class="block text-sm font-medium text-gray-700">
                                                             Email <span class="text-red-500">*</span>
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.email" type="text" id="email" name="email" autocomplete="name" class="py-3 px-4 flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <label for="contact_number" class="block text-sm font-medium text-gray-700">Contact number <span class="text-red-500">*</span></label>
                                                        <div class="mt-1 relative">
                                                            <input v-model="data.contact_number" type="text" name="contact_number" id="contact_number" autocomplete="tel" class="py-3 px-4 block w-full pl-5 focus:ring-green-500 focus:border-green-500 border-gray-300" placeholder="+1 (555) 987-6543">
                                                            <!--</div>-->
                                                        </div>
                                                    </div>
                                                    <!-- Checkboxes Class Style (Start)-->
                                                    <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5 sm:col-span-6">
                                                        <div>
                                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Class Style <span class="text-red-500">*</span></h3>
                                                        </div>
                                                        <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                                                            <div class="pt-6 sm:pt-2 mx-1">
                                                            <div role="group" aria-labelledby="label-email">
                                                                <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline">
                                                                
                                                                <div class="mt-4 sm:mt-0 sm:col-span-2">
                                                                    <div class="max-w-lg space-y-4">
                                                                    <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                        <input id="comments" name="comments" type="checkbox" class="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
                                                                        v-model="Class_Style" value ="Bollywood_Dance" />
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                        <label for="comments" class="font-medium text-gray-700">Bollywood Dance</label>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                            <input id="candidates" name="candidates" type="checkbox" class="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" v-model="Class_Style" value ="Carnatic_Music"/>
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                            <label for="candidates" class="font-medium text-gray-700">Carnatic Music</label>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                            <input id="offers" name="offers" type="checkbox" class="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" v-model="Class_Style" value ="Odissi"/>
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                            <label for="offers" class="font-medium text-gray-700">Odissi</label>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Checkboxes (End)-->
                                                    <!-- Checkboxes Parent Consent (Start)-->
                                                    <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5 sm:col-span-6">
                                                        <div>
                                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Parent Consent <span class="text-red-500">*</span></h3>
                                                            <!-- <h3><span>Checked names: {{ Parent_Consent }}</span></h3> -->
                                                        </div>
                                                        <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                                                            <div class="pt-6 sm:pt-2 mx-1">
                                                            <div role="group" aria-labelledby="label-email">
                                                                <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline">
                                                                
                                                                <div class="mt-4 sm:mt-0 sm:col-span-2">
                                                                    <div class="max-w-lg space-y-4">
                                                                    <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                        <input id="comments" name="comments" type="checkbox" class="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" v-model="Parent_Consent" value ="establish_Contact"/>
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                        <label for="comments" class="font-medium text-gray-700">I hereby agree that my data entered in the contact form will be stored electronically, and will be processed and used for the purpose of establishing contact. I am aware that I can revoke my consent at any time.</label>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                            <input id="candidates" name="candidates" type="checkbox" class="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" v-model="Parent_Consent" 
                                                                            value="grant_permission"/>
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                            <label for="candidates" class="font-medium text-gray-700">I grant permission for my child to be in the photos/videos taken for promotional purposes/social media/display on the school website</label>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Checkboxes (End)-->
                                                    <!-- Checkboxes Terms (Start)-->
                                                    <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5 sm:col-span-6">
                                                        <div>
                                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Please read our terms and conditions before submitting the form - http://bit.ly/SwaraNrityaTermsandConditions</h3>
                                                        </div>
                                                        <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                                                            <div class="pt-6 sm:pt-2 mx-1">
                                                                <div role="group" aria-labelledby="label-email">
                                                                    <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline">
                                                                    
                                                                        <div class="mt-4 sm:mt-0 sm:col-span-2">
                                                                            <div class="max-w-lg space-y-4">
                                                                                <div class="relative flex items-start">
                                                                                    <div class="flex items-center h-5">
                                                                                    <input id="comments" name="comments" type="checkbox" class="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" />
                                                                                    </div>
                                                                                    <div class="ml-3 text-sm">
                                                                                    <label for="comments" class="font-medium text-gray-700">Yes, I have read and accept the terms and conditions</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                           </div>
                                                        </div>
                                                    </div>
                                                    <!-- Checkboxes (End)-->
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
                            <button type="button" class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                Reset
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm">
                            <button v-on:click="sendRegistrationUs" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium  text-white bg-pink-600 hover:bg-yellow-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-yellow-700 transition duration-150 ease-in-out">
                                Save
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Dropdownlist from "@/components/Dropdownlist.vue";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
export default {
    components: {
        Dropdownlist,
        VueCtkDateTimePicker,
    },
    data() {
        return {
            isSignUpFormVisible: false,
            data: {'form-name':'contact'},
            api: "",
            Parent_Consent: [],
            c: []
        }
    },
    methods: {
 async sendRegistrationUs(args) {
            debugger
            try {
                let request = {}
                let formData = new FormData();
                 alert(this.data.student_full_name + " " + this.data.date_of_birth + " " + this.data.medical_information + " " +  this.data.your_name + " " + this.data.home_address + " " + this.data.email + " " + this.data.contact_number)
                 let ParentConsentObjec = {
                    Parent_Consent: this.Parent_Consent
                }
                let ClassStyleObjec ={
                    Class_Style: this.Class_Style
                }
                alert("Test check " + ClassStyleObjec)
                
                formData.append('student_full_name', this.data.student_full_name);
                formData.append('date_of_birth', this.data.date_of_birth);
                formData.append('medical_information', this.data.medical_information);
                formData.append('your_name', this.data.your_name);
                formData.append('home_address', this.data.home_address);
                formData.append('email', this.data.email);
                //formData.append('country', this.data.country);
                formData.append('contact_number',  this.data.contact_number);
                debugger
                // formData.append('description', this.data.description);
                // formData.append('product', this.data.product);
                // formData.append('form-name', 'contact');
                /*const {
                    response
                    } = await this.$axios.post( this.$config.apiURL + "/about", 
                    formData,
                    {headers: { "Content-Type": "application/x-www-form-urlencoded" }});
                */

                // request.message ={}
                // request.message.payload = {}
                // request.message.channel = "SwaraNritya-website-lead"
                // request.message.kv_body=this.data
                // request.message.kv_key = "www.xyz.com"
                // request.message.identity = true
                // request.message.payload.body = this.data
                // request.message.payload.subject = "New sales lead from https://www.xyz.com [" + this.data.email + "]"
                // const { response_redis_enqueue } = await this.$axios.post( this.$config.restEndPoint + "/api/redis/enqueue", request);
                // const { response_redis_publish } = await this.$axios.post( this.$config.restEndPoint + "/api/redis/publish", request);
                // this.data = {}
                // this.isSignUpFormVisible = !this.isSignUpFormVisible;
                // this.$toast.success("Thank you for your enquiry! our customer success team will repond as soon as possible.")
            } catch (error) {
                this.isSignUpFormVisible = !this.isSignUpFormVisible;
                this.$toast.error(JSON.stringify(error))
            } finally {
               
            }
        },
        handleSelectedInProduct(data) {
            this.data.product = data;
        },
         handleSelectedInCountryCode(data) {
            this.data.country_code = data;
        },
        
    },
    computed: {

    },
    mounted() {

    },
    created() {
        this.$nuxt.$on('evtShowRegister', (data) => {
            this.isSignUpFormVisible = true;
        });
    },
    beforeDestroy() {
        this.$nuxt.$off('evtShowRegister');
    }
};
</script>
