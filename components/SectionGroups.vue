<template>
	<div class="space-y-4">
		<!-- Active: "ring-1 ring-offset-2 ring-indigo-500" -->
<label v-for="(stage,idx) in methodology.stages" :key="idx + '_' + stage.name"
		class="relative flex items-center space-x-3   rounded-lg   shadow-sm px-6 py-4 cursor-pointer  sm:flex sm:justify-between focus:outline-none
		"
		:class="selected.name == stage.name? 'bg-yellow-50 ring-1 ring-offset-0 ring-green-500 border-2 border-green-300 hover:border-green-400' : 'bg-white border border-gray-300 hover:border-gray-400'">
      <input type="radio" 
	  @change="onChange($event,stage)" 
	  :id="'rdo_methodology_' + idx"
	  name="server-size" :value="stage.name" class="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1">
		<img
				:src="stage.icon.img"
				class="h-12 w-12"
				:alt="stage.name"
			>
	  <div class="flex-1 items-center">
        <div class="text-sm">
          <p id="server-size-0-label"
		  :class="selected.name == stage.name ? 'font-extrabold text-yellow-900' : 'font-medium text-gray-900'">
            {{ stage.name }}
          </p>
          <div id="server-size-0-description-0" 
		  :class="selected.name == stage.name ? 'text-yellow-700' : 'text-gray-500' ">
            <p class="sm:inline">{{ stage.description }}</p>

          </div>
        </div>
      </div>
      <!-- Checked: "border-indigo-500", Not Checked: "border-transparent" 
	  :class="textColor=='white' ? 'text-white' : 'text-yellow-500  hover:text-yellow-600  focus:text-yellow-600'"
	  -->
      <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"
	  :class="selected.name == stage.name ? 'border-green-500' : 'border-transparent'"
	  ></div>
    </label>

	</div>
</template>
<script>
	import methodology from "@/store/methodology.json";
	export default {
		components: {},
		data() {
			return {
				methodology,
				selected : methodology.stages[0],
			};
		},
		methods: {
          onChange(event,obj) {
              var optionText = event.target.id;
              console.log(optionText);
			  console.log(obj.name);
			  this.selected = obj;
			 $nuxt.$emit('evtMethodologyStage', obj)
          }
      }
	};
</script>