<template>
	<div v-for="(item, index) in bindData" :key="index" class="flex flex-col gap-2 rounded-xl">
		<div class="cursor-pointer h-full min-h-[100px] hover:brightness-90 transition-all duration-150 ease-in-out">
			<div class="w-full h-full max-h-[250px] min-h-[200px] sm:max-h-[345px] sm:min-h-[300px] object-cover flex items-center rounded-2xl border border-gray-100 dark:border-gray-600 overflow-hidden z-0">
				<img v-if="!props.loading" loading="lazy" class="object-cover w-full h-full bg-gray-100 z-20 brightness-[1] transitions" :src="item.thumbnail" />
				<Skeleton v-if="props.loading" cssClass="size-full" />
			</div>
		</div>
		<div class="p-3 flex flex-col gap-2">
			<h3 class="line-clamp-2 text-base text-gray-900 dark:text-gray-100">{{ item.title }}</h3>
			<div class="flex items-center justify-between gap-2">
				<NuxtLink v-if="!props.loading" href="/" class="flex items-center gap-2 min-w-0 flex-1">
					<img role="img" class="size-6 rounded-full object-cover flex-shrink-0" :src="item.user?.logo_url" />
					<span class="truncate font-light text-sm text-gray-500 dark:text-gray-100 min-w-0">{{ item.user?.fullname }}</span>
				</NuxtLink>
				<Skeleton v-if="props.loading" cssClass="w-full h-6" />
				<div class="flex items-center gap-1 flex-shrink-0">
					<svg v-if="!props.loading" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 dark:text-gray-100 size-4" viewBox="0 0 24 24">
						<path stroke="currentColor" fill="none" d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"></path>
					</svg>
					<span v-if="!props.loading" class="text-sm text-gray-500 dark:text-gray-100 font-light">{{ item.favourites_count }}</span>

					<Skeleton v-if="props.loading" cssClass="size-6" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineOptions({
	name: "Card",
});

const props = defineProps({
	data: { type: Array, required: true, default: () => [] },
	limit: { type: Number, required: true, default: () => 40 },
	loading: { type: Boolean, required: true, default: () => true },
});

const bindData = ref(props.limit);

watch(
	() => props.loading,
	(newVal) => {
		if (newVal) {
			bindData.value = props.limit;
		} else {
			bindData.value = props.data;
		}
	},
	{
		deep: true,
		immediate: true,
	}
);

watch(
	() => props.data,
	(newVal) => {
		if (!props.loading) {
			bindData.value = newVal;
		}
	}
);
</script>
