<template>
<div>
    <div v-if="label">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            Address From
        </h3>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

        <div class="sm:col-span-6">
            <label for="street_address" class="block text-sm font-medium text-gray-700">
                Street address
            </label>
            <div class="mt-1  shadow-sm border-gray-300">
                <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="w-full border border-gray-300 px-3 py-2  shadow-sm  focus:border-green-500 focus:ring-1 focus:ring-green-500">
            </div>
        </div>

        <div class="sm:col-span-6">
            <label for="city" class="block text-sm font-medium text-gray-700">
                City
            </label>
            <div class="mt-1  shadow-sm border-gray-300">
                <input type="text" name="city" id="city" class="w-full border border-gray-300 px-3 py-2  shadow-sm  focus:border-green-500 focus:ring-1 focus:ring-green-500">
            </div>
        </div>

        <div class="sm:col-span-6">
            <label for="state" class="block text-sm font-medium text-gray-700">
                State / Province
            </label>
            <div class="mt-1  shadow-sm border-gray-300">
                <input type="text" name="state" id="state" class="w-full border border-gray-300 px-3 py-2  shadow-sm  focus:border-green-500 focus:ring-1 focus:ring-green-500">
            </div>
        </div>

        <div class="sm:col-span-6">
            <label for="zip" class="block text-sm font-medium text-gray-700">
                ZIP / Postal
            </label>
            <div class="mt-1  shadow-sm border-gray-300">
                <input type="text" name="zip" id="zip" autocomplete="postal-code" class="w-full border border-gray-300 px-3 py-2  shadow-sm  focus:border-green-500 focus:ring-1 focus:ring-green-500">
            </div>
        </div>
        <div class="sm:col-span-6">
           <Dropdownlist name="country" label="Country" :data="['USA', 'IND', 'UK']" api='masters?where={"parent_code":{"contains":"DEPT"}}'/>
        </div>
    </div>
</div>
</template>
<script>
import Dropdownlist from "@/components/Dropdownlist.vue";
export default {
     components: {
        Dropdownlist
    }
}
</script>
