<template>
	<main class="size-full px-4 py-6 space-y-4 dark:bg-gray-900">
		<div class="flex gap-3 overflow-auto no-scrollbar">
			<button
				v-for="(item, index) in filter"
				:key="index"
				@click="categories = item"
				type="button"
				:class="{ 'bg-gray-100 dark:bg-gray-800': categories === item }"
				class="items-center px-3 rounded-full max-w-fit hover:bg-gray-100 dark:hover:bg-gray-800 py-2 text-base text-gray-600 dark:text-gray-100 font-light justify-center flex gap-2"
			>
				{{ item }}
			</button>
		</div>
		<div class="grid gap-4 sm:gap-8 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 h-full overflow-y-auto no-scrollbar pb-10 scroll-container">
			<Card :data="dataFeed" :loading="loading" :limit="40" />

			<!-- Loading indicator for infinite scroll -->
			<div v-if="isLoading" class="col-span-full flex justify-center py-4">
				<div class="flex items-center gap-2">
					<div class="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
					<span class="text-gray-600">Loading more...</span>
				</div>
			</div>

			<!-- End of data indicator -->
			<div v-if="!hasMore && dataFeed.length > 0" class="col-span-full text-center py-4 text-gray-500">You've reached the end</div>
		</div>
	</main>
</template>

<script setup>
defineOptions({
	name: "Homepage",
});

const loading = useState("loading");
const dataFeed = ref([]);
const offset = ref(0);
const limit = ref(40);
const categories = ref("All");
const isLoading = ref(false);
const hasMore = ref(true);
const filter = ref(["All", "Vacancies", "Workplace", "Food", "Design", "Cars", "Finance", "Lifestyle", "Travel", "Makeup", "Fitness"]);

// Initial API call using useFetch
const { data: initialData } = await useFetch("/popules/feed", {
	query: {
		offset: 0,
		limit: limit.value,
		order_by: "desc",
		visibility: 1,
		public: true,
	},
});

// Set initial data
if (initialData.value) {
	dataFeed.value = Array.isArray(initialData.value.data) ? initialData.value.data : [];
	offset.value = limit.value; // Set offset to next batch
	nextTick(() => {
		loading.value = false;
	});
}

// Function to load more data
const loadMore = async () => {
	if (isLoading.value || !hasMore.value) return;

	isLoading.value = true;

	try {
		const { data: newData } = await $fetch("/popules/feed", {
			query: {
				offset: offset.value,
				limit: limit.value,
				order_by: "desc",
				visibility: 1,
				public: true,
			},
		});

		if (newData && Array.isArray(newData) && newData.length > 0) {
			dataFeed.value = [...dataFeed.value, ...newData];
			offset.value += limit.value;

			// If we received less than the limit, we've reached the end
			if (newData.length < limit.value) {
				hasMore.value = false;
			}
		} else {
			hasMore.value = false;
		}
	} catch (error) {
		console.error("Error fetching more data:", error);
	} finally {
		isLoading.value = false;
	}
};

// Infinite scroll handler
const handleScroll = () => {
	const scrollContainer = document.querySelector(".scroll-container");
	if (!scrollContainer) return;

	const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
	const threshold = 200; // Load more when 200px from bottom

	if (scrollHeight - scrollTop - clientHeight < threshold) {
		loadMore();
	}
};

// Setup scroll listener
onMounted(() => {
	const scrollContainer = document.querySelector(".scroll-container");
	if (scrollContainer) {
		scrollContainer.addEventListener("scroll", handleScroll);
	}
});

onUnmounted(() => {
	const scrollContainer = document.querySelector(".scroll-container");
	if (scrollContainer) {
		scrollContainer.removeEventListener("scroll", handleScroll);
	}
});
</script>
