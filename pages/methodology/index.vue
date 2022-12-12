<template>
	<div class="bg-white">

<!--<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
   <img class="w-full h-full object-cover" src="https://res.cloudinary.com/nathansweb/image/upload/v1632623391//methodology.png" alt="">
</div>-->

		<div
			class="
				max-w-2xl
				mx-auto
				py-16
				px-4
				sm:py-24
				sm:px-6
				lg:max-w-7xl
				lg:py-16
				lg:px-8
				lg:grid lg:grid-cols-10
				lg:gap-x-8
			
			"
		>
		
			<div class="lg:col-span-4">
        <sectiongroups/>
      </div>
			<div class="mt-16 lg:mt-0 lg:col-start-5 lg:col-span-7">
				<!-- Rigt side... -->
				<div class="flow-root">
					<div class="-my-12 divide-y divide-gray-200">
						<div class="py-12" v-if="selected=='Prospecting'">
							<div class="prose prose-indigo prose-lg text-base mx-auto">
								<p>
									We identify prospective clients and engages in meaningful discussions, Question and Answer (Q&A) sessions to understand their exact requirements.  
								</p>
								<p>
									Necessary documents like below are mutually signed for a deeper engagement.
									<ul>
										<li>NDA (Non-Disclosure)</li>
										<li>NCA (Non-Compete)</li>
										<li>NSA (Non-Solicitation)</li>
									</ul>
								</p>
								<p>This augments well for clients who post their enquiry directly. </p>
							</div>
						</div>
						<div class="py-12" v-if="selected=='Proposal & Sign-in'">
							<div class="prose prose-indigo prose-lg text-base mx-auto">
								<p>
									We internalize the requirements deeply and put together a comprehensive solution encapsulating  client’s current requirements and future scalability. 
								</p>
								<p>	
									A detailed effort, schedule and cost proposal is submitted reflecting technological interventions that would be used to develop the bot, quite transparent and open to meaningful deliberations for acceptance and signing-in. 
								</p>
								<p>	
									Following are mutually inked 
									<ul>
										<li>MSA (Master Service Agreement)</li>
										<li>SOW (Statement of Works)</li>
										<li>SRS (Software Requirement Specifications)</li>
									</ul>
									
								</p>
							</div>
						</div>
						<div class="py-12" v-if="selected=='Develop'">
							<div class="prose prose-indigo prose-lg text-base mx-auto">
								<!--<p> We are an open-source company with a team of brilliant people working together to build expertly crafted solutions. </p>-->
								<p>
									Our development process is based on agile methodologies like Scrum. With regular progress updates, live demos and the best communication and colloboration tools, we make sure that the customers are up-to-date with everything what they need.
								</p>



								<p>

									At the start of the development, our DevOps team will take care of infrastructure and server architecture – making it stable, secure and scalable.
</p>
<p>
									Once the development is complete / end of the sprint, we coordinate integration of the software developed into your existing systems and initiate trial runs a.k.a. UAT (User Acceptance Testing), 
									thus making sure Continuous Integration and Delivery is maintained to avoid any eleventh hour surprises.
								</p>
							</div>
						</div>
						<div class="py-12" v-if="selected=='Quality Assurance'">
							<div class="prose prose-indigo prose-lg text-base mx-auto">
								<p>


We know that quality assurance is an important part of the development process. This is why, apart from manual tests, we perform automated tests using the test bots we built to accomplish 100% test coverage for every build and release.


								</p>
							</div>
						</div>
						<div class="py-12" v-if="selected=='Hand-over & Sign-Off'">
							<div class="prose prose-indigo prose-lg text-base mx-auto">
								<p>
									We hand-hold the Client for a minimum period of 1 ~ 4 weeks depends on the engamenent model, thereby  ensuring smooth integration of our work into your existing work-fabric. 
Final Sign-off happens and the support team of  comes to the fore-front commencing Post Sign-off Maintenance as mutually agreed. 

								</p>
							</div>
						</div>
					</div>
				</div>
				<!-- Rigt side... -->
			</div>
		</div>
	</div>
</template>
<script>
import sectiongroups from "@/components/SectionGroups.vue";
	export default {
		layout: "main",
    components: {
    sectiongroups,
   
  },
  data() {
			return {
				selected : "Prospecting",
			};
		},
   created() {
        this.$nuxt.$on('evtMethodologyStage', (data) => {
			this.selected = data.name;
            //alert(data.name)
        });
    }
	};
</script>

